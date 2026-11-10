---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Democratizing News Recommenders: Modeling Multiple Perspectives for News Candidate Generation with VQ-VAE'
authors:
- Hardy Hardy
- Sebastian Pado
- Amelie Wuehrl
- Tanise Ceron
date: 2026-10-01
doi: ''
publishDate: '2026-05-01'
publication_types:
- '1'
publication: 'ACM Conference on Fairness, Accountability, and Transparency'
publication_short: 'FAccT 2026'
abstract: "News Recommender Systems (NRS) play a central role in society They shape what users read, whose perspectives they encounter, and influence public discourse. Yet their design is value-laden: intentionally or not, NRS can embed undesired values in their recommendation procedures, such as exclusion of underrepresented voices or favoring specific viewpoints, which conflict with democratic goals. Despite this, existing solutions lack an intervention mechanism that controls these values. Therefore, we introduce an approach that parameterizes NRS with the goal of intervening in such values and promoting different democratic goals in models. We propose Aspect-Aware Candidate Generation (A2CG), a normatively configurable procedure for the candidate generation stage of NRS which allows designers to explicitly shape diversity in the recommendations. A2CG introduces diversity at the start of the recommendation system rather than only re-ranking candidates as a post-processing step. A2CG diversifies recommendations by representing articles along different diversity aspects: sentiment, political leaning, topic, and media framing. User interests are encoded over these aspects using a Vector Quantized VAE, and a decoder-only model predicts the next article aspects the users are likely to engage with. To broaden exposure to perspectives, A2CG injects diversity at retrieval by selectively flipping aspects in the predicted query, allowing candidate diversity to be tuned for specific democratic models. Our method enables qualitatively different normative configurations that existing NRS cannot express, and unlike baselines with fixed structural biases, A2CG allows continuous calibration between democratic ideals without retraining. Our findings empirically show that A2CG generates novel, diverse, and serendipitous candidates while providing explicit, parameter-driven control over the trade-off between personalization and democratic alignment. Rather than aiming for pointwise superiority over existing methods, A2CG's key contribution lies in its controllability and ability to express flexible normative configurations."
summary: ''
tags:
- news recommenders
- diversity
categories: []
featured: false
url_pdf: https://dl.acm.org/doi/abs/10.1145/3805689.3812406
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
socialmedia_post: '''Democratizing News Recommenders'' by Hardy et al. (2026) develop a VQ-VAE-based method to improve diversity in news recommendations.'
image:
  caption: ''
  focal_point: Center
  preview_only: false
projects:
- personae
slides: ''
---
