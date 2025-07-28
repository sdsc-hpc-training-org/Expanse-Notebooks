---
layout: post
title: String Processing
date: 2025-03-31
description: instructions for Expanse users to run String_Processing notebooks in the Expanse. A brief introduction to regression using scikit-learn. Covers basic linear regression, multiple linear regression, combining scikit-learn with pandas and working with categorical data.
tags: 
  - expanse
  - scikit-learn
  - python
  
categories: 
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Boring_Python
This README file provides instructions for Expanse users to run String_Processing notebooks in the Expanse.
A brief introduction to regression using scikit-learn. Covers basic linear regression, multiple linear regression, combining scikit-learn with pandas and working with categorical data.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- sklearn
- linear_model 
- mean_squared_error
- r2_score
- load_diabetes
- numpy
- pandas
- stats
- scipy

## Launch Galyleo
For specific information about launching Galyleo, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Environment Modules
By utilizing `--env-modules`, we can load any software installed in Expanse. 
For instance, executing this command line will load CPU modules and Anaconda3 within the Jupyter session.
  - CPU:
`--env-modules cpu/0.17.3b,anaconda3`
```
galyleo launch --account abc123 --partition shared --cpus 2 --memory 4 --time-limit 00:30:00 --env-modules cpu/0.17.3b,anaconda3/2021.05
```

## Install Modules
To run StringProcessing notebooks, we do not need to install any additional packages.

## Location 

String_Processing\
├── [Regression.ipynb](./Regression.ipynb)\
├── README.md

## Submit Ticket
This notebook was last updated and tested on 3/31/25. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/String_Processing/Regression.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/String_Processing/Regression.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
