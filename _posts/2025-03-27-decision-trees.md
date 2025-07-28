---
layout: post
title: Decision Trees
date: 2025-03-27
description: instructions for Expanse users to run DecisionTrees notebooks in the Expanse. Introduces the scikit-learn machine learning package, using a classic decision tree example.
tags: 
  - expanse
  - python
  - anaconda
  - jupyter
  - scikit-learn
categories: 
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Decision_Trees
This README file provides instructions for Expanse users to run DecisionTrees notebooks in the Expanse.
Introduces the scikit-learn machine learning package, using a classic decision tree example.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- sklearn
- tree
- load_iris
- graphviz 

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
To run DecisionTrees notebooks, we do not need to install any additional packages.

## Location 

Decision_Trees\
├── [Decision trees.ipynb.ipynb](./Decision%20trees.ipynb)\
├── README.md


## Submit Ticket
This notebook was tested on Expanse on 3/27/25. 

If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Decision_Trees/Decision trees.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Decision_Trees/Decision trees.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
