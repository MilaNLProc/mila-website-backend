---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Leveraging Label Variation in Large Language Models for Zero-Shot TextClassification"
authors: ["Flor Miriam Plaza-del-Arco","Debora Nozza","Dirk Hovy"]
date: 2023-07-24
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-24T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arXiv preprint arXiv:2307.12973"
publication_short: "arXiv preprint arXiv:2307.12973"

abstract: "The zero-shot learning capabilities of large language models (LLMs) make them ideal for text classification without annotation or supervised training. Many studies have shown impressive results across multiple tasks. While tasks, data, and results differ widely, their similarities to human annotation can aid us in tackling new tasks with minimal expenses. We evaluate using 5 state-of-the-art LLMs as annotators on 5 different tasks (age, gender, topic, sentiment prediction, and hate speech detection), across 4 languages: English, French, German, and Spanish. No single model excels at all tasks, across languages, or across all labels within a task. However, aggregation techniques designed for human annotators perform substantially better than any one individual model. Overall, though, LLMs do not rival even simple supervised models, so they do not (yet) replace the need for human annotation. We also discuss the tradeoffs between speed, accuracy, cost, and bias when it comes to aggregated model labeling versus human annotation."

# Summary. An optional shortened abstract.
summary: ""


tags: ["NLP","LLMs"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/pdf/2307.12973.pdf
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
  caption: ''
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [integrator]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
