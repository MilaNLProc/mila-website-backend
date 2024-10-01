---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "XSTest: A Test Suite for Identifying Exaggerated Safety Behaviours in Large Language Models"
authors: ["Paul Röttger", "Hannah Rose Kirk", "Bertie Vidgen", "Giuseppe Attanasio", "Federico Bianchi", "Dirk Hovy"]
date: 2024-07-16
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "NAACL 2024"
publication_short: "NAACL 2024"

abstract: "Without proper safeguards, large language models will readily follow malicious instructions and generate toxic content. This risk motivates safety efforts such as red-teaming and large-scale feedback learning, which aim to make models both helpful and harmless. However, there is a tension between these two objectives, since harmlessness requires models to refuse to comply with unsafe prompts, and thus not be helpful. Recent anecdotal evidence suggests that some models may have struck a poor balance, so that even clearly safe prompts are refused if they use similar language to unsafe prompts or mention sensitive topics. In this paper, we introduce a new test suite called XSTest to identify such eXaggerated Safety behaviours in a systematic way. XSTest comprises 250 safe prompts across ten prompt types that well-calibrated models should not refuse to comply with, and 200 unsafe prompts as contrasts that models, for most applications, should refuse. We describe XSTest’s creation and composition, and then use the test suite to highlight systematic failure modes in state-of-the-art language models as well as more general challenges in building safer language models."

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

url_pdf: https://aclanthology.org/2024.naacl-long.301/
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
  caption: 'Exaggerated Safety in Language Models'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [integrator, indomita]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
