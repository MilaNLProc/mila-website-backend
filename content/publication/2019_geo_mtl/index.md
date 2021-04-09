---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Geolocation with Attention-Based Multitask Learning Models"
authors: [Tommaso Fornaciari, Dirk Hovy]
date: 2019-11-03
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-10-31T01:25:36+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 5th Workshop on Noisy User-generated Text (WNUT)"
publication_short: ""

abstract: "Geolocation, predicting the location of a post based on text and other information, has a huge potential for several social media applications. Typically, the problem is modeled as either multi-class classification or regression. In the first case, the classes are geographic areas previously identified; in the second, the models directly predict geographic coordinates. The former requires discretization of the coordinates, but yields better performance. The latter is potentially more precise and true to the nature of the problem, but often results in worse performance. We propose to combine the two approaches in an attention-based multitask convolutional neural network that jointly predicts both discrete locations and continuous geographic coordinates. We evaluate the multi-task (MTL) model against single-task models and prior work. We find that MTL significantly improves performance, reporting large gains on one data set, but also note that the correlation between labels and coordinates has a marked impact on the effectiveness of including a regression task."

# Summary. An optional shortened abstract.
summary: ""

tags: [geolocation, "multitask learning", NLP]
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
  caption: ""
  focal_point: ""
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
