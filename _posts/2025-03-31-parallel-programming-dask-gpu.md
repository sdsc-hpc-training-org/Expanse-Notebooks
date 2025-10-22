---
layout: post
title: Parallel Programming with DASK on GPU
date: 2025-03-31
description: instructions for Expanse users to run Parallel_Programming notebooks in the Expanse. Introduces the Dask module with a simple example and illustrates the Dask graph.
tags: 
  - anaconda
  - expanse
  - python
  - jupyter 
  - parallelization
  - gpu
categories: 
giscus_comments: false
related_posts: true
year_created: 
date_last_tested: 
cpu_or_gpu: 
hpc_system: 
---
# SDSC Expanse Notebook: Parallel_Programming
This README file provides instructions for Expanse users to run Parallel_Programming notebooks in the Expanse.
Introduces the Dask module with a simple example and illustrates the Dask graph.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- dask
- mkl
- da
- numpy

## Launch Galyleo
For specific information about launching Galyleo, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Environment Modules
This command line loads GPU modules and Anaconda3 in the Jupyter session to run in a GPU environment.
 - GPU:
`--env-modules  gpu/0.17.3b,anaconda3/2021.05`
```
galyleo launch --account abc123 —partition gpu-shared --cpus 10 --memory 92 --gpus 1 --time-limit 00:30:00  --env-modules  gpu/0.17.3b,anaconda3/2021.05 --bind /oasis,/scratch --nv
```
## Install Modules
To run Parallel_Programming notebooks, we do not need to install any additional packages.

## Location 
Parallel_Programming\
├── [dask_graphs.ipynb](./dask_graphs.ipynb)\
├── README.md

## Submit Ticket
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Dask_Graph_GPU/dask_graphs_GPU.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Dask_Graph_GPU/dask_graphs_GPU.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
