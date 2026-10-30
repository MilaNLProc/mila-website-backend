// ======================================================
// CONFIGURATION
// ======================================================

// this is the csv of the reading group sessions; it needs to be manually published
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLfBaZtmgraVn0mC8YS87HNMg_qjHJo0itN4HK7W4sEBapxvqAXK8JIO94XSEl4sSqTta4xuSaM6ei/pub?output=csv";


let sessions = [];


// How many rows to show in the default (pristine) view, before the
// visitor asks for more. Pagination only applies when no search text is
// entered and the filter is on its default value ("upcoming"); using the
// search box or any other filter shows the full list.
const PAGE_SIZE = 8;

let visibleCount = PAGE_SIZE;


// ======================================================
// START
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document
      .getElementById("rg-search")
      .addEventListener(
        "input",
        onControlsChange
      );


    document
      .getElementById("rg-filter")
      .addEventListener(
        "change",
        onControlsChange
      );


    loadSessions();

  }
);


// ======================================================
// LOAD GOOGLE SHEET
// ======================================================

async function loadSessions() {

  try {

    const response =
      await fetch(
        SHEET_URL,
        {
          cache: "no-store"
        }
      );


    if (!response.ok) {

      throw new Error(
        `HTTP ${response.status}`
      );

    }


    const csv =
      await response.text();


    console.log(
      "CSV received:",
      csv
    );


    if (
      csv.trim().startsWith("<!DOCTYPE html") ||
      csv.trim().startsWith("<html")
    ) {

      throw new Error(
        "The configured URL returned HTML instead of CSV. " +
        "Publish the Google Sheet as CSV."
      );

    }


    sessions =
      parseCSV(csv)
        .map(normalizeSession)
        .filter(
          session =>
            session.date !== null
        )
        .sort(
          (a, b) =>
            a.date - b.date
        );


    console.log(
      "Parsed sessions:",
      sessions
    );


    const loading =
      document.getElementById(
        "rg-loading"
      );


    if (loading) {

      loading.remove();

    }


    render();

  }

  catch (error) {

    console.error(
      "Reading Group error:",
      error
    );


    const loading =
      document.getElementById(
        "rg-loading"
      );


    if (loading) {

      loading.style.display =
        "none";

    }


    document
      .getElementById(
        "rg-error"
      )
      .textContent =
      "Could not load the Google Sheet. Check the published CSV URL and the browser console.";

  }

}


// ======================================================
// CSV PARSER
// ======================================================

function parseCSV(csv) {

  const rows = [];

  let row = [];
  let value = "";
  let insideQuotes = false;


  for (
    let i = 0;
    i < csv.length;
    i++
  ) {

    const char =
      csv[i];


    // Quoted value
    if (
      char === '"'
    ) {

      if (
        insideQuotes &&
        csv[i + 1] === '"'
      ) {

        value += '"';
        i++;

      }

      else {

        insideQuotes =
          !insideQuotes;

      }


      continue;

    }


    // Column separator
    if (
      char === "," &&
      !insideQuotes
    ) {

      row.push(value);

      value = "";

      continue;

    }


    // Row separator
    if (
      (
        char === "\n" ||
        char === "\r"
      ) &&
      !insideQuotes
    ) {

      if (
        char === "\r" &&
        csv[i + 1] === "\n"
      ) {

        i++;

      }


      row.push(value);


      if (
        row.some(
          cell =>
            cell.trim() !== ""
        )
      ) {

        rows.push(row);

      }


      row = [];
      value = "";

      continue;

    }


    value += char;

  }


  if (
    value.length ||
    row.length
  ) {

    row.push(value);
    rows.push(row);

  }


  if (
    rows.length === 0
  ) {

    return [];

  }


  const headers =
    rows[0].map(
      header =>
        header
          .replace(
            /^\uFEFF/,
            ""
          )
          .trim()
          .toLowerCase()
    );


  return rows
    .slice(1)
    .map(
      values => {

        const object = {};


        headers.forEach(
          (header, index) => {

            object[header] =
              (
                values[index] ||
                ""
              ).trim();

          }
        );


        return object;

      }
    );

}


// ======================================================
// NORMALIZE DATA
// ======================================================

function normalizeSession(row) {

  return {

    date:
      parseDate(
        row.date
      ),

    presenter:
      row.presenter || "",

    title:
      row.title || "",

    authors:
      row.authors || "",

    note:
      row.note || "",

    link:
      row.link || "",

    status:
      (
        row.status ||
        "Scheduled"
      ).trim()

  };

}


// ======================================================
// DATE PARSER
//
// Google Sheets is currently exporting:
//
// MM/DD/YYYY
//
// Examples:
//
// 9/3/2026   -> September 3, 2026
// 12/17/2026 -> December 17, 2026
// 1/7/2027   -> January 7, 2027
// ======================================================

function parseDate(value) {

  if (!value) {

    return null;

  }


  const text =
    value.trim();


  // ==========================================
  // GOOGLE SHEETS CSV
  // MM/DD/YYYY
  // ==========================================

  let match =
    text.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    );


  if (match) {

    const month =
      Number(
        match[1]
      );

    const day =
      Number(
        match[2]
      );

    const year =
      Number(
        match[3]
      );


    return makeValidatedDate(
      year,
      month,
      day,
      value
    );

  }


  // ==========================================
  // ISO
  // YYYY-MM-DD
  // ==========================================

  match =
    text.match(
      /^(\d{4})-(\d{1,2})-(\d{1,2})$/
    );


  if (match) {

    return makeValidatedDate(

      Number(
        match[1]
      ),

      Number(
        match[2]
      ),

      Number(
        match[3]
      ),

      value

    );

  }


  // ==========================================
  // Example:
  //
  // Sep-10-2026
  // Sep 10 2026
  // ==========================================

  match =
    text.match(
      /^([A-Za-z]{3,9})[-\s](\d{1,2})[-,\s]+(\d{4})$/
    );


  if (match) {

    const month =
      parseEnglishMonth(
        match[1]
      );


    if (
      month !== null
    ) {

      return makeValidatedDate(

        Number(
          match[3]
        ),

        month + 1,

        Number(
          match[2]
        ),

        value

      );

    }

  }


  console.warn(
    "Could not parse date:",
    value
  );


  return null;

}


// ======================================================
// VALIDATE DATE
// ======================================================

function makeValidatedDate(
  year,
  month,
  day,
  originalValue
) {

  const date =
    new Date(
      year,
      month - 1,
      day
    );


  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {

    console.warn(
      "Invalid date:",
      originalValue
    );


    return null;

  }


  return date;

}


// ======================================================
// ENGLISH MONTH PARSER
// ======================================================

function parseEnglishMonth(value) {

  const months = {

    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11

  };


  const key =
    String(value)
      .slice(
        0,
        3
      )
      .toLowerCase();


  return Object
    .prototype
    .hasOwnProperty
    .call(
      months,
      key
    )

    ? months[key]

    : null;

}


// ======================================================
// TEMPORAL STATUS
// ======================================================

function temporalStatus(session) {

  const status =
    session.status
      .toLowerCase();


  if (
    status === "break" ||
    status === "cancelled" ||
    status === "postponed"
  ) {

    return status;

  }


  if (
    session.date <
    today()
  ) {

    return "past";

  }


  return "scheduled";

}


// ======================================================
// TODAY
// ======================================================

function today() {

  const now =
    new Date();


  return new Date(

    now.getFullYear(),

    now.getMonth(),

    now.getDate()

  );

}


// ======================================================
// NEXT SESSION
// ======================================================

function getNextSession() {

  const now =
    today();


  return sessions.find(

    session =>

      session.date >= now &&

      session.status
        .toLowerCase() ===
        "scheduled"

  );

}


// ======================================================
// RENDER
// ======================================================

function render() {

  renderNextSession();

  renderTable();

}


// ======================================================
// PAGINATION
// ======================================================

// Search / filter changed: collapse back to the first page, then render.
function onControlsChange() {

  visibleCount = PAGE_SIZE;

  render();

}


// True only in the pristine default view (no search, filter = "upcoming").
function isPaginating() {

  const search =
    document.getElementById("rg-search").value.trim();

  const filter =
    document.getElementById("rg-filter").value;

  return search === "" && filter === "upcoming";

}


function showMore() {

  visibleCount += PAGE_SIZE;

  renderTable();

}


function showAll() {

  visibleCount = Infinity;

  renderTable();

}


function showLess() {

  visibleCount = PAGE_SIZE;

  renderTable();

  document
    .getElementById("rg-sessions")
    .scrollIntoView({ block: "nearest" });

}


// ======================================================
// NEXT SESSION CARD
// ======================================================

function renderNextSession() {

  const container =
    document.getElementById(
      "rg-next-session"
    );


  const next =
    getNextSession();


  if (!next) {

    container.innerHTML =
      "";

    return;

  }


  container.innerHTML = `

    <div class="next-card">

      <div class="next-label">
        Next session
      </div>

      <h2>

        ${escapeHTML(
          formatLongDate(
            next.date
          )
        )}

      </h2>


      <div class="next-presenter">

        ${escapeHTML(
          next.presenter ||
          "Presenter TBA"
        )}

      </div>


      ${
        next.title

          ? `

            <div class="next-title">

              ${makeTitle(
                next
              )}

            </div>

          `

          : `

            <div class="next-title next-title-tba">

              Paper to be announced

            </div>

          `
      }


      ${
        next.authors

          ? `

            <div class="authors">

              ${escapeHTML(
                next.authors
              )}

            </div>

          `

          : ""
      }


      ${
        next.note

          ? `

            <div class="note">

              ${escapeHTML(
                next.note
              )}

            </div>

          `

          : ""
      }

    </div>

  `;

}


// ======================================================
// TABLE
// ======================================================

function renderTable() {

  const container =
    document.getElementById(
      "rg-sessions"
    );


  const search =
    document
      .getElementById(
        "rg-search"
      )
      .value
      .trim()
      .toLowerCase();


  const filter =
    document
      .getElementById(
        "rg-filter"
      )
      .value;


  const now =
    today();


  const filtered =
    sessions.filter(
      session => {

        const status =
          temporalStatus(
            session
          );


        // ======================================
        // FILTER
        // ======================================

        if (
          filter ===
          "upcoming"
        ) {

          if (
            session.date <
            now
          ) {

            return false;

          }

        }

        else if (
          filter ===
          "past"
        ) {

          if (
            session.date >=
            now
          ) {

            return false;

          }

        }

        else if (
          filter !==
          "all"
        ) {

          if (
            status !==
            filter
          ) {

            return false;

          }

        }


        // ======================================
        // SEARCH
        // ======================================

        const text =
          [

            session.presenter,

            session.title,

            session.authors,

            session.note

          ]

            .join(" ")

            .toLowerCase();


        return text.includes(
          search
        );

      }
    );


  if (
    filtered.length === 0
  ) {

    container.innerHTML = `

      <p class="empty-message">
        No sessions found.
      </p>

    `;


    return;

  }


  // Pagination: in the default view only show the first `visibleCount`
  // rows. Any search or non-default filter shows everything.
  const paginating =
    isPaginating();

  const rows =
    paginating
      ? filtered.slice(0, visibleCount)
      : filtered;

  const hidden =
    filtered.length - rows.length;


  container.innerHTML = `

    <div class="table-wrapper">

      <table>

        <thead>

          <tr>

            <th>Date</th>

            <th>Presenter</th>

            <th>Paper</th>

            <th>Authors</th>

            <th>Note</th>

            <th>Status</th>

          </tr>

        </thead>


        <tbody>

          ${
            rows
              .map(
                createRow
              )
              .join("")
          }

        </tbody>

      </table>

    </div>

    ${
      paginating && (hidden > 0 || visibleCount > PAGE_SIZE)

        ? `
          <div class="rg-pagination">

            <span class="rg-pagination-count">
              Showing ${rows.length} of ${filtered.length} sessions
            </span>

            <span class="rg-pagination-actions">
              ${
                hidden > 0
                  ? `<button type="button" id="rg-show-more">
                       Show ${Math.min(PAGE_SIZE, hidden)} more
                     </button>
                     <button type="button" id="rg-show-all">
                       Show all
                     </button>`
                  : `<button type="button" id="rg-show-less">
                       Show less
                     </button>`
              }
            </span>

          </div>
        `

        : ""
    }

  `;


  const moreBtn =
    document.getElementById("rg-show-more");

  if (moreBtn) {
    moreBtn.addEventListener("click", showMore);
  }

  const allBtn =
    document.getElementById("rg-show-all");

  if (allBtn) {
    allBtn.addEventListener("click", showAll);
  }

  const lessBtn =
    document.getElementById("rg-show-less");

  if (lessBtn) {
    lessBtn.addEventListener("click", showLess);
  }

}


// ======================================================
// TABLE ROW
// ======================================================

function createRow(session) {

  const status =
    temporalStatus(
      session
    );


  // ==========================================
  // BREAK
  // ==========================================

  if (
    status ===
    "break"
  ) {

    return `

      <tr class="status-break">


        <td>

          ${escapeHTML(
            formatShortDate(
              session.date
            )
          )}

        </td>


        <td
          colspan="4"
          class="break-description"
        >

          ${escapeHTML(
            session.note ||
            "Break"
          )}

        </td>


        <td>

          <span
            class="status-chip status-chip-break"
          >

            Break

          </span>

        </td>


      </tr>

    `;

  }


  // ==========================================
  // NORMAL SESSION
  // ==========================================

  return `

    <tr class="status-${status}">


      <td>

        ${escapeHTML(
          formatShortDate(
            session.date
          )
        )}

      </td>


      <td>

        ${escapeHTML(
          session.presenter
        )}

      </td>


      <td>

        ${makeTitle(
          session
        )}

      </td>


      <td>

        ${escapeHTML(
          session.authors
        )}

      </td>


      <td>

        ${escapeHTML(
          session.note
        )}

      </td>


      <td>

        <span
          class="status-chip status-chip-${status}"
        >

          ${escapeHTML(
            session.status ||
            status
          )}

        </span>

      </td>


    </tr>

  `;

}


// ======================================================
// PAPER TITLE / LINK
// ======================================================

function makeTitle(session) {

  if (
    !session.title
  ) {

    return "";

  }


  if (
    !session.link
  ) {

    return escapeHTML(
      session.title
    );

  }


  const safeLink =
    sanitizeURL(
      session.link
    );


  if (
    !safeLink
  ) {

    return escapeHTML(
      session.title
    );

  }


  return `

    <a

      href="${escapeHTML(
        safeLink
      )}"

      target="_blank"

      rel="noopener noreferrer"

    >

      ${escapeHTML(
        session.title
      )}

    </a>

  `;

}


// ======================================================
// SAFE URL
// ======================================================

function sanitizeURL(value) {

  try {

    const url =
      new URL(
        value
      );


    if (
      url.protocol !== "http:" &&
      url.protocol !== "https:"
    ) {

      return null;

    }


    return url.href;

  }

  catch {

    return null;

  }

}


// ======================================================
// DATE FORMATTING
// ======================================================

function formatLongDate(date) {

  return new Intl.DateTimeFormat(

    "en-GB",

    {

      weekday: "long",

      day: "numeric",

      month: "long",

      year: "numeric"

    }

  ).format(
    date
  );

}


function formatShortDate(date) {

  return new Intl.DateTimeFormat(

    "en-GB",

    {

      day: "numeric",

      month: "short",

      year: "numeric"

    }

  ).format(
    date
  );

}


// ======================================================
// SECURITY
// ======================================================

function escapeHTML(value) {

  return String(
    value || ""
  )

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}