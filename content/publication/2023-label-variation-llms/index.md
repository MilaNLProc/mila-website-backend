---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Wisdom of Instruction-Tuned Language Model Crowds: Exploring Model Label Variation"
authors:
  - Flor Miriam Plaza-del-Arco
  - Debora Nozza
  - Dirk Hovy
date: 2023-07-24

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-24T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 3rd Workshop on Perspectivist Approaches to NLP (NLPerspectives) @ LREC-COLING 2024"
publication_short: "NLPerspectives (LREC-COLING 2024)"

abstract: "Large Language Models (LLMs) exhibit remarkable text classification capabilities, excelling in zero- and few-shot learning (ZSL and FSL) scenarios. However, since they are trained on different datasets, performance varies widely across tasks between those models. Recent studies emphasize the importance of considering human label variation in data annotation. However, how human label variation applies to LLMs remains unexplored. Given this likely model specialization, we ask: Do aggregate LLM labels improve over individual models (as for human annotators)? We evaluate four recent instruction-tuned LLMs as annotators on five subjective tasks across four languages. We use ZSL and FSL setups and label aggregation from human annotation. Aggregated LLM labels outperform individual models significantly, benefiting from specialization in diverse tasks or languages. Surprisingly, FSL does not surpass ZSL, as it depends on the quality of the selected examples. However, there seems to be no good information-theoretical strategy to select those. We find that no LLM method rivals even simple supervised models. We also discuss the tradeoffs in accuracy, cost, and moral/ethical considerations between LLM and human annotation."

# Summary. An optional shortened abstract.
summary: ""

tags: ["NLP", "LLMs", "annotation"]
categories: []
featured: false

# Custom links (optional).
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://aclanthology.org/2024.nlperspectives-1.2.pdf
url_code: null
url_dataset: null
url_poster: null
url_project: null
url_slides: null
url_source: null
url_video: null

# Featured image
image:
  caption: null
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
projects:
- integrator

# Slides (optional).
slides: ""

socialmedia_post: "Explore 'Wisdom of Instruction-Tuned LLM Crowds' (2023). LLM labels outperform single models in tasks & languages. But few-shot can't top zero-shot. Supervised models rule."
---
