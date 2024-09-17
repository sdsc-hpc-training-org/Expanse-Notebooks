# SDSC Expanse Notebook: CUDA_GPU_NVIDIA
This guide provides instructions for Expanse users to run CUDA notebooks on GPU nodes. Code authored by Abe Stern, NVIDIA.\
  **Listof Content**
- [Launch Galyleo](#launch-galyleo)
- [Import Module](#import-module)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Short Description](#short-description)
- [Sources](#sources)

## Import Module:
- numba
- math
- numpy
- cuda
- vectorize
- cuda

## Launch Galyleo
For specific information about launching Galyleo, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Environment Modules
By utilizing --env-modules, we can load any software installed on Expanse. Since CUDA cannot run directly on a CPU, we need to load GPU modules to run in a GPU environment on Expanse. 

Instead of using modules, we can also use conda environments supported by Galyleo, utilizing the `--conda-env` option. The following command line launches a conda environment on Expanse for parallel GPU processing. For more information, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).
```
galyleo launch --account sds173 --partition gpu-shared --cpus 10 --memory 92 --gpus 1 --time-limit 00:30:00 --conda-env df-parallel-gpu --conda-yml "/home/(username)/df-parallel/environment-gpu.yml" --mamba
```
## Install Modules
To run cuda_gpu_nvidia notebooks, no additional package installation is required.

## Location 

CUDA_GPU_NVIDIA\
├── [cuda_gpu_nvidia_computing_pi_solution.ipynb](./cuda_gpu_nvidia_computing_pi_solution)\
├── [cuda_gpu_nvidia_computing_pi.ipynb](./cuda_gpu_nvidia_computing_pi.ipynb)\
├── [cuda_gpu_nvidia_distance_matrix_solution.ipynb](./cuda_gpu_nvidia_distance_matrix_solution.ipynb)\
├── [cuda_gpu_nvidia_distance_matrix.ipynb](./cuda_gpu_nvidia_distance_matrix.ipynb)\
├── [cuda_gpu_nvidia_law_of_cosines_solution.ipynb](./cuda_gpu_nvidia_law_of_cosines_solution.ipynb)\
├── [cuda_gpu_nvidia_law_of_cosines.ipynb](./cuda_gpu_nvidia_law_of_cosines.ipynb)\
├── README.md

## Short Description
In the Computing Pi exercise, we will design a CUDA kernel to compute the value of Pi 
via Monte Carlo.  The concepts of writing and invoking CUDA kernels in 
Numba are introduced.

In the Distance Matrix exercise, we will compute a distance matrix for a synthetic dataset of 
3-D molecular geometries.  We will learn how to leverage higher-dimensional
CUDA thread-block hierarchies.

In Law of Cosines exercise, we will explore GPU Ufuncs which are simple to write, invoke, 
and are compatible with Numpy Ufuncs.  We will learn how to write a simple GPU 
Ufunc to compute the law of cosines.

## Sources
Below are listed a few related readings and presentations.
[Numba](http://numba.pydata.org/) supports CUDA GPU programming by directly 
compiling a subset of Python code into CUDA kernels and device functions 
following the CUDA execution model.  

In the provided notebooks, a problem is introduced and mostly implemented in 
Numba.  As an exercise, complete the missing lines of code to successfully 
compute the result.  

These notebooks were part of th SDSC HPU User Training Spring 2020 Session Week 4 (01/31/2020) and were **presented by Abe Stern, NVIDIA** with the topic of **GPU accelerated computing with CUDA Python**.
