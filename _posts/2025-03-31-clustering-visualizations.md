---
layout: post
title: Clustering Visualizations
date: 2025-03-31
description: instructions for Expanse users on how to run basic clustering methods, implement them in Python notebooks, and execute them on Expanse.
tags: formatting jupyter
categories: cpu gpu modules conda list #{% comment %} Check obsidian notes for link. Tags should match the ACCESS format for tagging {% endcomment %}
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Clustering_Visulizations
This README file provides instructions for Expanse users on how to run basic clustering methods, implement them in Python notebooks, and execute them on Expanse.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- make_blobs
- numpy
- matplotlib
- KMeans
- dendorgram
- linkage
- AgglomerativeClustering

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
To run Introduction_to_Clustering notebook, we do not need to install additional packages.

## Location 

Clustering_Visulizations\
├── [Introduction_to_Clustering.ipynb](./Introduction_to_Clustering.ipynb)\
├── README.md


## Submit Ticket
This notebook was last tested on 3/31. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Clustering_Visulizations/Introduction_to_Clustering.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Clustering_Visulizations/Introduction_to_Clustering.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
