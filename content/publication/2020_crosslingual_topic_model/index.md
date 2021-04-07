---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Cross-lingual Contextualized Topic Models with Zero-shot Learning"
authors: ["Federico Bianchi","Silvia Terragni","Dirk Hovy","Debora Nozza","Elisabetta Fersini"]
date: 2020-04-16
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020-02-29T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arXiv preprint arXiv:2004.07737"
publication_short: ""

abstract: "Many data sets in a domain (reviews, forums, news, etc.) exist in parallel languages. They all cover the same content, but the linguistic differences make it impossible to use traditional, bag-of-word-based topic models. Models have to be either single-language or suffer from a huge, but extremely sparse vocabulary. Both issues can be addressed by transfer learning.
In this paper, we introduce a zero-shot cross-lingual topic model, i.e., our model learns topics on one language (here, English), and predicts them for documents in other languages. By using the text of the same document in different languages, we can evaluate the quality of the predictions. Our results show that topics are coherent and stable across languages, which suggests exciting future research directions."

# Summary. An optional shortened abstract.
summary: ""


tags: ["multilingual","BERT","Topic Model","Representation learning","NLP"]
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
url_code: "https://github.com/MilaNLProc/contextualized-topic-models"
url_dataset:
url_poster:
url_project:
url_slides:
url_source: "https://arxiv.org/abs/2004.07737"
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "CoTM model"
  focal_point: "Center"
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
