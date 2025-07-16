---
layout: post
title: Python Data Analysis Library
date: 2025-03-31
description: instructions for Expanse users to run Python_Data_Analysis_Library using CPU on Expanse.
tags: 
categories: 
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Python_Data_Analysis_Library
This README file provides instructions for Expanse users to run Python_Data_Analysis_Library using CPU on Expanse.
pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.

This notebook will give you an introduction to PANDAS. Enjoy!/
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- Image
- pandas

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
To run PandasCSV notebook, we do not need to install any additional packages.
## Location 

Python_Data_Analysis_Library\
├── [PandasCSV.ipynb](./PandasCSV.ipynb)\
├── README.md

## Submit Ticket
This notebook was last tested on 3/31/25. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/NumPy_Intro/numpy_intro.ipynbassets/jupyter/Python_Data_Analysis_Library/PandasCSV.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/NumPy_Intro/numpy_intro.ipynbassets/jupyter/Python_Data_Analysis_Library/PandasCSV.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
