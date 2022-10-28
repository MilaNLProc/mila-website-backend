---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Hard and Soft Evaluation of NLP models with BOOtSTrap SAmpling - BooStSa"
authors: ["Tommaso Fornaciari", "Alexandra Uma", "Massimo Poesio", "Dirk Hovy"]
date: 2022-05-12
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-05-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics: System Demonstrations."
publication_short: "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics: System Demonstrations"

abstract: "Natural Language Processing (NLP) ‘s applied nature makes it necessary to select the most effective and robust models. Producing slightly higher performance is insufficient; we want to know whether this advantage will carry over to other data sets. Bootstrapped significance tests can indicate that ability.So while necessary, computing the significance of models’ performance differences has many levels of complexity. It can be tedious, especially when the experimental design has many conditions to compare and several runs of experiments.We present BooStSa, a tool that makes it easy to compute significance levels with the BOOtSTrap SAmpling procedure to evaluate models that predict not only standard hard labels but soft-labels (i.e., probability distributions over different classes) as well."

# Summary. An optional shortened abstract.
summary: ""


tags: ["NLP", "bootstrap sampling", "stats", "p-value"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://aclanthology.org/2022.acl-demo.12.pdf
url_code: "https://github.com/fornaciari/boostsa"
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
  caption: 'p-levels with different sub samples'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: ["integrator"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
