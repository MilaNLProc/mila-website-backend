---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Safety-Tuned LLaMAs: Lessons From Improving the Safety of Large Language Models that Follow Instructions"
authors: ["Federico Bianchi", "Mirac Suzgun", "Giuseppe Attanasio", "Paul Röttger", "Dan Jurafsky", "Tatsunori Hashimoto", "James Zou"]
date: 2024-05-07
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "ICLR 2024"
publication_short: "ICLR 2024"

abstract: "Training large language models to follow instructions makes them perform better on a wide range of tasks, generally becoming more helpful. However, a perfectly helpful model will follow even the most malicious instructions and readily generate harmful content. In this paper, we raise concerns over the safety of models that only emphasize helpfulness, not safety, in their instruction-tuning. We show that several popular instruction-tuned models are highly unsafe. Moreover, we show that adding just 3% safety examples (a few hundred demonstrations) in the training set when fine-tuning a model like LLaMA can substantially improve their safety. Our safety-tuning does not make models significantly less capable or helpful as measured by standard benchmarks. However, we do find a behavior of exaggerated safety, where too much safety-tuning makes models refuse to respond to reasonable prompts that superficially resemble unsafe ones. Our study sheds light on trade-offs in training LLMs to follow instructions and exhibit safe behavior."

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

url_pdf: https://openreview.net/forum?id=gT5hALch9z
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
  caption: 'Safety-tuned Llamas'
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
socialmedia_post: "#AI #MachineLearning #SafetyFirst 'Safety-Tuned LLaMAs: Improving LLMs Safety' by Bianchi et al. explores training LLMs for safe refusals, warns of over-tuning."
---
