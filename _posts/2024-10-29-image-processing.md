---
layout: post
title: Image Processing
date: 2024-10-29
description: instructions for Expanse users on learning about the PILLOW package, authored by Leo Gu.
tags: 
  - expanse 
  - computer-vision
  - python
categories: 
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Image_Processing
This README file provides instructions for Expanse users on learning about the PILLOW package, authored by Leo Gu.

The Python Imaging Library (PILLOW) adds image processing capabilities to your Python interpreter.
This library provides extensive file format support, an efficient internal representation, and fairly powerful image processing capabilities.
The core image library is designed for fast access to data stored in a few basic pixel formats. It should provide a solid foundation for a general image processing tool.

This chapter will give you an introduction to PILLOW packages. Enjoy!\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- Image
- ImageFilter
- ImageEhance
- Sys

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
To run pillow notebook, we do not need to install additional packages.

## Location 

Image_Processing\
├──[pillow.ipynb](./pillow.ipynb)\
├── README.md

## Submit Ticket
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Image_Processing/Pillow.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Image_Processing/Pillow.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
