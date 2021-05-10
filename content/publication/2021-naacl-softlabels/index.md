---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Beyond Black & White: Leveraging Annotator Disagreement via Soft-Label Multi-Task Learning"
authors: [Tommaso Fornaciari, Alexandra Uma, Silviu Paun, Barbara Plank, Dirk Hovy and Massimo Poesio]
date: 2021-05-05
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-05-06T01:41:26+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*2021 Annual Conference of the North American Chapter of the Association for Computational Linguistics*"
publication_short: "*NAACL2021*"

abstract: "Supervised learning assumes that a ground truth label exists. 
However, the reliability of this ground truth depends on human annotators, who often disagree. 
Prior work has shown that this disagreement can be helpful in training models.
We propose a novel method to incorporate this disagreement as information: in addition to the standard error computation, we use soft labels (i.e., probability distributions over the annotator labels) as an auxiliary task in a multi-task neural network.
We measure the divergence between the predictions and the target soft labels with several loss-functions and evaluate the models on various NLP tasks.
We find that the soft-label prediction auxiliary task reduces the penalty for errors on ambiguous entities and thereby mitigates overfitting. It significantly improves performance across tasks beyond the standard approach and prior work."

# Summary. An optional shortened abstract.
summary: ""

tags: ["Soft-labels", "Agreement", NLP]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: 
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
  caption: ""
  focal_point: ""
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
