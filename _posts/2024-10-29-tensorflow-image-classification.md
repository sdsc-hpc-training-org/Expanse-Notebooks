---
layout: post
title: Tensorflow
date: 2024-10-29
description: instructions for Expanse users on how to run TensorFlow on Expanse, both on CPU and GPU.
tags: 
  - expanse
  - cpu
  - gpu
  - singularity 
  - machine-learning
  - ai
  - AI/ML
  - tensorflow 
  - cuda
  - nvidia
  - anaconda
categories: 
giscus_comments: false
related_posts: true
---
# SDSC Expanse Notebook: Tensorflow
This README file provides instructions for Expanse users on how to run TensorFlow on Expanse, both on CPU and GPU.

TensorFlow is a free and open-source software library for machine learning. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks. Tensorflow is a symbolic math library based on dataflow and differentiable programming.

This chapter will show you how to implement an image classifaction NN as well as how to train an NN. Enjoy!\

  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)

## Import Module:
- matplotlib
- numpy
- PIL
- tensorflow
- pathlib
- csv

## Launch Galyleo
For specific information about launching Galyleo, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Command-line options
In Expanse, we have command-line options for building software environments like modules and Singularity, as well as managing memory, among other capabilities. To run the ML_Tensorflow_CPU notebook, we can utilize a Singularity container to execute the TensorFlow package.

  - CPU:
  
```
galyleo launch --account abc123 --partition shared --cpus 2 --memory 4 --time-limit 00:30:00 --env-modules singularitypro --sif /cm/shared/apps/containers/singularity/tensorflow/tensorflow_24.03-tf2-py3.sif
```

## Install Modules
We do not need to install any additional packages.

## Location 

Tensorflow\
├── [Image Classification.ipynb](./Image%20Classification.ipynb)\
├── [SimpleTraining.ipynb](./SimpleTraining.ipynb)\
├── README.md

## Submit Ticket
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Tensorflow_Image_Classification/Image Classification.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Tensorflow_Image_Classification/Image Classification.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
