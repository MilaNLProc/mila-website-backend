---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "XSTest: A Test Suite for Identifying Exaggerated Safety Behaviors in Large Language Models"
authors:
  - Paul Röttger
  - Hannah Rose Kirk
  - Bertie Vidgen
  - Giuseppe Attanasio
  - Federico Bianchi
  - Dirk Hovy
date: 2024-07-16

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "NAACL 2024 (Main)"
publication_short: "NAACL 2024 (Main)"

abstract: "Without proper safeguards, large language models will readily follow malicious instructions and generate toxic content. This risk motivates safety efforts such as red-teaming and large-scale feedback learning, which aim to make models both helpful and harmless. However, there is a tension between these two objectives, since harmlessness requires models to refuse to comply with unsafe prompts, and thus not be helpful. Recent anecdotal evidence suggests that some models may have struck a poor balance, so that even clearly safe prompts are refused if they use similar language to unsafe prompts or mention sensitive topics. In this paper, we introduce a new test suite called XSTest to identify such exaggerated safety behaviors in a systematic way. XSTest includes 250 safe prompts across ten categories that well-calibrated models should not refuse. Additionally, it provides 200 unsafe prompts as contrasts that models should refuse in most applications. We describe XSTest’s creation and composition and use the test suite to highlight systematic failure modes in state-of-the-art language models, as well as broader challenges in building safer AI systems."

# Summary. An optional shortened abstract.
summary: ""

tags: ["Large Language Models", "AI Safety", "NLP"]
categories: []
featured: false

# Custom links (optional).
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://aclanthology.org/2024.naacl-long.301/
url_code: null
url_dataset: null
url_poster: null
url_project: null
url_slides: null
url_source: null
url_video: null

# Featured image
image:
  caption: "Exaggerated Safety in Language Models"
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
projects: [integrator, indomita]

# Slides (optional).
slides: ""
socialmedia_post: "XSTest by {@paul} et al. introduced the first dataset for measuring false refusal in LLMs."
---
