---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "DADIT: A Dataset for Demographic Classification of Italian Twitter Users and a Comparison of Prediction Methods"
authors: ["Lorenzo Lupo", "Paul Bose", "Mahyar Habibi", "Dirk Hovy", "Carlo Schwarz"]
date: 2024-05-20
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2024-02-23T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "LREC camera-ready"
publication_short: "arXiv"

abstract: "Social scientists increasingly use demographically stratified social media data to study the attitudes, beliefs, and behavior of the general public. To facilitate such analyses, we construct, validate, and release the representative DADIT dataset of 30M tweets of 20k Italian Twitter users, along with their bios and profile pictures. We enrich the user data with high-quality labels for gender, age, and location. This new dataset enables us to compare the performance of various state-of-the-art models for the prediction of the gender and age of social media users. In particular, we investigate if tweets contain valuable information for the prediction of user characteristics, since popular classifiers like M3 don't leverage them. Our best XLM-based classifier improves upon the commonly used competitor M3 by up to 53% F1. Especially for age prediction, classifiers profit from including tweets as features. We also confirm these findings on a German test set."

# Summary. An optional shortened abstract.
summary: ""


tags: ["Twitter data", "demographic prediction", "language models", "multimodal classification"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://lorelupo.github.io/docs/dadit-lrec24.pdf
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
  caption: 'none'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [mentalism]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
