---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "SimpleSafetyTests: a Test Suite for Identifying Critical Safety Risks in Large Language Models"
authors: ["Bertie Vidgen", "Hannah Rose Kirk", "Rebecca Qian", "Nino Scherrer", "Anand Kannappan", "Scott A. Hale", "Paul Röttger"]
date: 2023-11-14
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arXiv"
publication_short: "arXiv"

abstract: "The past year has seen rapid acceleration in the development of large language models (LLMs). For many tasks, there is now a wide range of open-source and open-access LLMs that are viable alternatives to proprietary models like ChatGPT. Without proper steering and safeguards, however, LLMs will readily follow malicious instructions, provide unsafe advice, and generate toxic content. This is a critical safety risk for businesses and developers. We introduce SimpleSafetyTests as a new test suite for rapidly and systematically identifying such critical safety risks. The test suite comprises 100 test prompts across five harm areas that LLMs, for the vast majority of applications, should refuse to comply with. We test 11 popular open LLMs and find critical safety weaknesses in several of them. While some LLMs do not give a single unsafe response, most models we test respond unsafely on more than 20% of cases, with over 50% unsafe responses in the extreme. Prepending a safety-emphasising system prompt substantially reduces the occurrence of unsafe responses, but does not completely stop them from happening. We recommend that developers use such system prompts as a first line of defence against critical safety risks."

# Summary. An optional shortened abstract.
summary: ""


tags: ["Large Language Models","AI Safety", "NLP"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/abs/2311.08370
url_code: 
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: 'SimpleSafetyTests'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
