---
layout: post
title: NumPy Intro
date: 2025-03-31
description: instructions for Expanse users to run NumPy_intro notebooks in the Expanse.
tags: 
  - expanse
  - anaconda
  - jupyter 
  - python
categories: 
giscus_comments: false
related_posts: true
year_created: 
date_last_tested: 
cpu_or_gpu: 
hpc_system: 
---
# SDSC Expanse Notebook: NumPy_Intro
This README file provides instructions for Expanse users to run NumPy_intro notebooks in the Expanse.

NumPy is a fundamental numerical Python package. It includes array objects, high level array manipulation functions, and more. 
numpy_intro.ipynb: This is an introduction to NumPy. The notebook explores n-dimentional arrays; basic NumPy functions like creating arrays, reshaping and manipulating arrays; some general linear algebra capabilities; and sampling for HPC capacities.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Sources](#sources)
- [Submit Ticket](#submit-ticket)
## Import Module:
- numpy
- add
- matplotlib 
- collections
- Counter

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
To run numpy_intro notebook, we do not need to install any additional packages.

## Location 

NumPy_Intro\
├── [numpy_intro.ipynb](./numpy_intro.ipynb)\
├── README.md

## Sources
For extensive NumPy documentation: https://numpy.org/doc/stable/reference/index.html

## Submit Ticket
This notebook was last tested on 3/31/25. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/NumPy_Intro/numpy_intro.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/NumPy_Intro/numpy_intro.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
