---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Compromesso! Italian Many-Shot Jailbreaks Undermine the Safety of Large Language Models"
authors: ["Fabio Pernisi", "Dirk Hovy", "Paul Röttger"]
date: 2024-08-11
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "ACL 2024 (SRW)"
publication_short: "ACL 2024 (SRW)"

abstract: "As diverse linguistic communities and users adopt large language models (LLMs), assessing their safety across languages becomes critical. Despite ongoing efforts to make LLMs safe, they can still be made to behave unsafely with jailbreaking, a technique in which models are prompted to act outside their operational guidelines. Research on LLM safety and jailbreaking, however, has so far mostly focused on English, limiting our understanding of LLM safety in other languages. We contribute towards closing this gap by investigating the effectiveness of many-shot jailbreaking, where models are prompted with unsafe demonstrations to induce unsafe behaviour, in Italian. To enable our analysis, we create a new dataset of unsafe Italian question-answer pairs. With this dataset, we identify clear safety vulnerabilities in four families of open-weight LLMs. We find that the models exhibit unsafe behaviors even when prompted with few unsafe demonstrations, and -- more alarmingly -- that this tendency rapidly escalates with more demonstrations."

# Summary. An optional shortened abstract.
summary: ""


tags: ["Large Language Models", "AI Safety", "NLP"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://aclanthology.org/2024.acl-srw.29/
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
  caption: 'Many-Shot LLM Jailbreaks in Italian'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [indomita, integrator]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
