---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "IssueBench: Millions of Realistic Prompts for Measuring Issue Bias in LLM Writing Assistance"
authors: ["Paul Röttger", "Musashi Hinck", "Valentin Hofmann", "Kobi Hackenburg", "Valentina Pyatkin", "Faeze Brahman", "Dirk Hovy"]
date: 2025-09-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Transactions of the Association for Computational Linguistics"
publication_short: "TACL"

abstract: "Large language models (LLMs) are helping millions of users write texts about diverse issues, and in doing so expose users to different ideas and perspectives. This creates concerns about issue bias, where an LLM tends to present just one perspective on a given issue, which in turn may influence how users think about this issue. So far, it has not been possible to measure which issue biases LLMs manifest in real user interactions, making it difficult to address the risks from biased LLMs. Therefore, we create IssueBench: a set of 2.49m realistic English-language prompts to measure issue bias in LLM writing assistance, which we construct based on 3.9k templates (e.g. 'write a blog about') and 212 political issues (e.g. 'AI regulation') from real user interactions. Using IssueBench, we show that issue biases are common and persistent in 10 state-of-the-art LLMs. We also show that biases are very similar across models, and that all models align more with US Democrat than Republican voter opinion on a subset of issues. IssueBench can easily be adapted to include other issues, templates, or tasks. By enabling robust and realistic measurement, we hope that IssueBench can bring a new quality of evidence to ongoing discussions about LLM biases and how to address them."

# Summary. An optional shortened abstract.
summary: ""


tags: ["Large Language Models", "AI Alignment", "NLP"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/abs/2502.08395
url_code: https://github.com/paul-rottger/issuebench
url_dataset: https://huggingface.co/datasets/Paul/IssueBench
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: 'Measuring Issue Biases in Language Models'
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
socialmedia_post: "IssueBench by {@paul} et al. enables robust and realistic measurement of issue bias in LLMs."
---
