---
layout: post
title: Graphs & Networks
date: 2025-03-27
description: instructions for Expanse users on how to run notebooks related to building, visualizing, and analyzing graphs and networks.
tags: 
categories: 
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Graphs&Networks
This README file provides instructions for Expanse users on how to run notebooks related to building, visualizing, and analyzing graphs and networks.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Sources](#sources)
- [Submit Ticket](#submit-ticket)

## Import Module:
- matplotlib
- networkx

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
To run NetworkX notebook, we need to install additional package.
- networkx

## Location 

Graphs&Networks\
    ├──[NetworkX.ipynb](./NetworkX.ipynb)\
    ├──[image.png](./image.png)\
    ├── README.md

## Sources
If you want more information please go to the official documentation at https://networkx.github.io/documentation/stable/tutorial.html.

## Submit Ticket
This notebook was last tested on 3/31/25. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Graphs&Networks/NetworkX.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Graphs&Networks/NetworkX.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
