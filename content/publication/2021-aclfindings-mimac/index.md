---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "'We will Reduce Taxes' - Identifying Election Pledges with Language Models"
authors: [Tommaso Fornaciari, Dirk Hovy, Elin Naurin, Julia Runeson, Robert Thomson, Pankaj Adhikari]
date: 2021-08-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-05-06T01:41:26+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In Findings of ACL: *The Joint Conference of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (ACL-IJCNLP 2021)*"
publication_short: "In *Findings of ACL*"

abstract: "In an election campaign, political parties pledge to implement various projects--should they be elected. But do they follow through? 
To track election pledges from parties' election manifestos, 
we need to distinguish between pledges and general statements.
In this paper, we use election manifestos of Swedish and Indian political parties 
to learn neural models that distinguish actual pledges from generic political positions. 
Since pledges might vary by election year and party, we implement a Multi-Task Learning (MTL) setup, predicting election year and manifesto's party as auxiliary tasks.
Pledges can also span several sentences, so we use hierarchical models that incorporate contextual information.
Lastly, we evaluate the models in a Zero-Shot Learning (ZSL) framework across countries and languages.
Our results indicate that year and party have predictive power even in ZSL, while context introduces some noise. 
We finally discuss the linguistic features of pledges."

# Summary. An optional shortened abstract.
summary: ""

tags: ["Election pledges", "Zero-Shot Learning", NLP]
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
projects: [mimac]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
