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

 - GPU:

```
galyleo launch --account abc123 —partition gpu-shared --cpus 10 --memory 92 --gpus 1 --time-limit 00:30:00  --env-modules singularitypro --sif /cm/shared/apps/containers/singularity/tensorflow/tensorflow-2.8.3-ubuntu-20.04-cuda-11.2-mlnx-ofed-4.9-4.1.7.0-openmpi-4.1.3-20221008.sif
```
## Install Modules
We do not need to install any additional packages.

## Location 

Tensorflow\
├── [Image Classification.ipynb](./Image%20Classification.ipynb)\
├── [SimpleTraining.ipynb](./SimpleTraining.ipynb)\
├── README.md
