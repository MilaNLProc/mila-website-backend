---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "DS-TOD: Efficient Domain Specialization for Task Oriented Dialog"
authors: ["Chia-Chien Hung, Anne Lauscher, Simone Paolo Ponzetto, Goran Glavaš"]
date: 2022-04-08
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-04-07T11:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "[Findings of the 60th Annual Meeting of the Association for Computational Linguistics](https://2022.aclweb.org/calls/papers/)"
publication_short: "Findings of ACL"

abstract: "
Recent work has shown that self-supervised dialog-specific pretraining on large conversational datasets yields substantial gains over traditional language modeling (LM) pretraining in downstream task-oriented dialog (TOD). These approaches, however, exploit general dialogic corpora (e.g., Reddit) and thus presumably fail to reliably embed domain-specific knowledge useful for concrete downstream TOD domains. In this work, we investigate the effects of domain specialization of pretrained language models (PLMs) for task-oriented dialog. Within our DS-TOD framework, we first automatically extract salient domain-specific terms, and then use them to construct DomainCC and DomainReddit -- resources that we leverage for domain-specific pretraining, based on (i) masked language modeling (MLM) and (ii) response selection (RS) objectives, respectively. We further propose a resource-efficient and modular domain specialization by means of domain adapters -- additional parameter-light layers in which we encode the domain knowledge. Our experiments with two prominent TOD tasks -- dialog state tracking (DST) and response retrieval (RR) -- encompassing five domains from the MultiWOZ TOD benchmark demonstrate the effectiveness of our domain specialization approach. Moreover, we show that the light-weight adapter-based specialization (1) performs comparably to full fine-tuning in single-domain setups and (2) is particularly suitable for multi-domain specialization, in which, besides advantageous computational footprint, it can offer better downstream performance.
"
# Summary. An optional shortened abstract.
summary: ""


tags: ["Domain Specialization","Conversational AI","NLP"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/abs/2110.08395?context=cs
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
#projects: [integrator]
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
