---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "My Answer is C: First-Token Probabilities Do Not Match Text Answers in Instruction-Tuned Language Models"
authors: ["Xinpeng Wang", "Bolei Ma", "Chengzhi Hu", "Leon Weber-Genzel", "Paul Röttger", "Frauke Kreuter", "Dirk Hovy", "Barbara Plank"]
date: 2024-08-11
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-07-12T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "ACL 2024 (Findings)"
publication_short: "ACL 2024 (Findings)"

abstract: "The open-ended nature of language generation makes the evaluation of autoregressive large language models (LLMs) challenging. One common evaluation approach uses multiple-choice questions to limit the response space. The model is then evaluated by ranking the candidate answers by the log probability of the first token prediction. However, first-tokens may not consistently reflect the final response output, due to model’s diverse response styles such as starting with “Sure” or refusing to answer. Consequently, first-token evaluation is not indicative of model behaviour when interacting with users. But by how much? We evaluate how aligned first-token evaluation is with the text output along several dimensions, namely final option choice, refusal rate, choice distribution and robustness under prompt perturbation. Our results show that the two approaches are severely misaligned on all dimensions, reaching mismatch rates over 60%. Models heavily fine-tuned on conversational or safety data are especially impacted. Crucially, models remain misaligned even when we increasingly constrain prompts, i.e., force them to start with an option letter or example template. Our findings i) underscore the importance of inspecting the text output as well and ii) caution against relying solely on first-token evaluation."

# Summary. An optional shortened abstract.
summary: ""


tags: ["Large Language Models", "Evaluation", "NLP"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://aclanthology.org/2024.findings-acl.441/
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
  caption: 'Mismatch in LLM Evaluation'
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
---
