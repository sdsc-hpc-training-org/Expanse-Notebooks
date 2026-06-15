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
By utilizing --env-modules, we can load any software installed on Expanse. Since cupy cannot run directly on a CPU, we need to load GPU modules to run in a GPU environment on Expanse. 

Instead of using modules, we can also use conda environments supported by Galyleo, utilizing the `--conda-yml` option. The following command line launches a conda environment on Expanse for parallel GPU processing. For more information, please refer to [this other Github repository](https://github.com/sbl-sdsc/df-parallel).
```
galyleo launch --account sds173 --partition gpu-shared --cpus 10 --memory 92 --gpus 1 --time-limit 00:30:00 --conda-yml "/home/(username)/df-parallel/environment-gpu.yml" --mamba
```
Note that for the command to work, you must clone the [df-parallel repository](https://github.com/sbl-sdsc/df-parallel). Replace "/home/(username)/df-parallel" in the above command with the path to your cloned df-parallel repository.

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
