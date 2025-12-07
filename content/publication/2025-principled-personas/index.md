---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "TrojanStego: Your Language Model Can Secretly Be A Steganographic Privacy Leaking Agent"
authors: ["Dominik Meier", "Jan Philip Wahle","Paul Röttger", "Terry Ruas", "Bela Gipp"]
date: 2025-11-09
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing"
publication_short: "EMNLP 2025"

abstract: "As large language models (LLMs) become integrated into sensitive workflows, concerns grow over their potential to leak confidential information (“secrets”). We propose TrojanStego, a novel threat model in which an adversary fine-tunes an LLM to embed sensitive context information into natural-looking outputs via linguistic steganography, without requiring explicit control over inference inputs. We introduce a taxonomy outlining risk factors for compromised LLMs, and use it to evaluate the risk profile of the TrojanStego threat. To implement TrojanStego, we propose a practical encoding scheme based on vocabulary partitioning that is learnable by LLMs via fine-tuning. Experimental results show that compromised models reliably transmit 32-bit secrets with 87% accuracy on held-out prompts, reaching over 97% accuracy using majority voting across three generations. Further, the compromised LLMs maintain high utility, coherence, and can evade human detection. Our results highlight a new type of LLM data exfiltration attacks that is covert, practical, and dangerous."

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

url_pdf: https://aclanthology.org/2025.emnlp-main.1386/
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
  caption: 'The TrojanStego threat model.'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [indomita]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
socialmedia_post: "TrojanStego, co-authored by {@paul}, introduces a covert method for LLMs to leak sensitive information via linguistic steganography."
---
