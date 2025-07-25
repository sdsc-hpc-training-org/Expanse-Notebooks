# SDSC Expanse Notebook: Hello_World
This README file provides instructions for Expanse users to print 'Hello, World!' using both CPU and GPU on Expanse.

These notebooks only include basic python functions and commands intended to test if your environment has been configured properly.
It is recommended that you run these hello world notebooks to check that everything has been configured correctly.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Submit Ticket](#submit-ticket)
## Import Module:
- hello

## Launch Galyleo
For specific information about launching Galyleo, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Environment Modules
By utilizing `--env-modules`, we can load any software installed in Expanse. 
For instance, executing this command line will load CPU modules and Anaconda3 within the Jupyter session.
  - CPU:
`--env-modules cpu/0.15.4,anaconda3`
```
galyleo launch --account abc123 --partition shared --cpus 2 --memory 4 --time-limit 00:30:00 --env-modules cpu/0.17.3b,anaconda3/2021.05
```
Also this command line loads GPU modules and Anaconda3 in the Jupyter session to run in a GPU environment.
 - GPU:
`--env-modules  gpu/0.15.4,anaconda3`
```
galyleo launch --account abc123 —partition gpu-shared --cpus 10 --memory 92 --gpus 1 --time-limit 00:30:00  --env-modules  gpu/0.15.4,anaconda3 --bind /oasis,/scratch --nv
```
## Install Modules
To run hello_world notebooks, we do not need to install any additional packages.

## Location 

Hello_World\
├── [hello_world_cpu.ipynb](./hello_world_cpu.ipynb)\
├── [hello_world_gpu.ipynb](./hello_world_gpu.ipynb)\
├── README.md

## Submit Ticket
This notebook was last tested on Expanse on 3/27/25. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!
