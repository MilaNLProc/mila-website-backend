+++

title= "Description"
date= "2018-06-28T00:00:00Z"
weight = 10  # Order that this section will appear.

+++

The data that will be provided to the participants for the shared task comprises a *raw dataset* and a *synthetic dataset* for measuring bias.

- The **raw dataset** is a balanced dataset of tweets manually labelled according to two levels:
    - *Misogynous*: defines if a tweet is misogynous or not misogynous; it takes values:
		- $0$ if the tweet is not misogynous;
		- $1$ if the tweet is misogynous.
	- *Aggressiveness*: denotes the subject of the misogynistic tweet; it takes value as:
		- $0$ denotes a non-aggressive tweet (not misogynous tweets are labelled as 0 by default);
		- $1$: if the tweet is aggressive.
	
<br>

	
- The **synthetic dataset**, for measuring the presence of unintended bias, contains template-generated text labelled according to:
    - *Misogynous*: defines if the tweet is misogynous or not misogynous; it takes values:
		- $0$ if the tweet is not misogynous;
		- $1$ if the tweet is misogynous.
