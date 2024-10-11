# SDSC Expanse Notebook: Parallel_Programming
This README file provides instructions for Expanse users to run Parallel_Programming notebooks in the Expanse.
Introduces the Dask module with a simple example and illustrates the Dask graph.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)

## Import Module:
- dask
- mkl
- da
- numpy

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
Also this command line loads GPU modules and Anaconda3 in the Jupyter session to run in a GPU environment.
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
├── [multithreaded_processing.ipynb](./multithreaded_processing.ipynb)\
├── README.md
