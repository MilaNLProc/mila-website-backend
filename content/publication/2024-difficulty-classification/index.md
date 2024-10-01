---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Beyond Flesch-Kincaid: Prompt-based Metrics Improve Difficulty Classification of Educational Texts"
authors: [Donya Rooein, Paul Rottger, Anastassia Shaitarova, Dirk Hovy]
date: 2024-05-16
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-05-15T16:22:16+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arXiv"
publication_short: "arXiv"

abstract: "Using large language models (LLMs) for educational applications like dialogue-based teaching is a hot topic. Effective teaching, however, requires teachers to adapt the difficulty of content and explanations to the education level of their students. Even the best LLMs today struggle to do this well. If we want to improve LLMs on this adaptation task, we need to be able to measure adaptation success reliably. However, current Static metrics for text difficulty, like the Flesch-Kincaid Reading Ease score, are known to be crude and brittle. We, therefore, introduce and evaluate a new set of Prompt-based metrics for text difficulty. Based on a user study, we create Prompt-based metrics as inputs for LLMs. They leverage LLM's general language understanding capabilities to capture more abstract and complex features than Static metrics. Regression experiments show that adding our Prompt-based metrics significantly improves text difficulty classification over Static metrics alone. Our results demonstrate the promise of using LLMs to evaluate text adaptation to different education levels.
"

# Summary. An optional shortened abstract.
summary: ""

tags: ["Difficulty Classification","Education","Large Language Models"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://aclanthology.org/2024.bea-1.5.pdf
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
  caption: 'Combining static metrics with prompt-based metrics for classifying the difficulty of educational texts.'
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
