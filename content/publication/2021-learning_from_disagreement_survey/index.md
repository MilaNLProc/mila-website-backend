---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Learning from Disagreement: A Survey"
authors: ["Alexandra N Uma", "Tommaso Fornaciari", "Dirk Hovy", "Silviu Paun", "Barbara Plank", "Massimo Poesio"]
date: 2021-12-27
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-12-27T14:48:20+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Journal of Artificial Intelligence Research"
publication_short: "JAIR"

abstract: "Many tasks in Natural Language Processing (NLP) and Computer Vision (CV) offer evidence that humans disagree, from objective tasks such as part-of-speech tagging to more subjective tasks such as classifying an image or deciding whether a proposition follows from certain premises. While most learning in artificial intelligence (AI) still relies on the assumption that a single (gold) interpretation exists for each item, a growing body of research aims to develop learning methods that do not rely on this assumption. In this survey, we review the evidence for disagreements on NLP and CV tasks, focusing on tasks for which substantial datasets containing this information have been created. We discuss the most popular approaches to training models from datasets containing multiple judgments potentially in disagreement. We systematically compare these different approaches by training them with each of the available datasets, considering several ways to evaluate the resulting models. Finally, we discuss the results in depth, focusing on four key research questions, and assess how the type of evaluation and the characteristics of a dataset determine the answers to these questions. Our results suggest, first of all, that even if we abandon the assumption of a gold standard, it is still essential to reach a consensus on how to evaluate models. This is because the relative performance of the various training methods is critically affected by the chosen form of evaluation. Secondly, we observed a strong dataset effect. With substantial datasets, providing many judgments by high-quality coders for each item, training directly with soft labels achieved better results  than training from aggregated or even gold labels. This result holds for both hard and soft evaluation. But when the above conditions do not hold, leveraging both gold and soft labels generally achieved the best results in the hard evaluation. All datasets and models employed in this paper are freely available as supplementary materials."
# Summary. An optional shortened abstract.
summary: ""


tags: ["annotation","NLP", "disagreement", "agreement"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://www.jair.org/index.php/jair/article/download/12752/26751
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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
