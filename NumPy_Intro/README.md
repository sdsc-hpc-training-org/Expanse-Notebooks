# SDSC Expanse Notebook: NumPy_Intro
This README file provides instructions for Expanse users to run NumPy_intro notebooks in the Expanse.

NumPy is a fundamental numerical Python package. It includes array objects, high level array manipulation functions, and more. 
numpy_intro.ipynb: This is an introduction to NumPy. The notebook explores n-dimentional arrays; basic NumPy functions like creating arrays, reshaping and manipulating arrays; some general linear algebra capabilities; and sampling for HPC capacities.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Sources](#sources)
  
## Install Modules
- Watermark
  
I lanuced Juyper Notebook with Anaconda 2021.05 so I installed Watermark package, but it might be differ by the Jupyper Noteobook Enviornment. Make sure to check the Version of the Python and the System before run the notebook.

## Import Module:
These are the modules that needed to run the following noteobok. Make sure to check the Version of the Python and the System before run the notebook. If one of the following packaged are not installed make sure to insalled it or create a Conda Environemt or Singulariy Container. 

- numpy
- add
- matplotlib 
- collections
- Counter
- watermark

##  How to login to Expanse

1. Expanse User Portal
Expanse supports web-based access. To log in, use your SDSC user account [here](https://auth.globus.org/p/login?response_type=code&scope=profile+email+openid+urn%3Aglobus%3Aauth%3Ascope%3Aauth.globus.org%3Aview_identity_set&client_id=bfe613cf-1990-42cb-8390-ed9cbe045615&redirect_uri=%2Fv2%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%26scope%3Dprofile%2520email%2520openid%2520urn%253Aglobus%253Aauth%253Ascope%253Aauth.globus.org%253Aview_identity_set%26client_id%3Dbfe613cf-1990-42cb-8390-ed9cbe045615%26state%3DZru5012E7hB9gGdS1QEcF8SuqxQ%26redirect_uri%3Dhttps%253A%252F%252Fportal.expanse.sdsc.edu%252Foidc%26nonce%3DEo1SlneG_74sZrY3zm0b4AasrM_7tJsypoIkVNI4HUU%26prompt%3Dlogin%26session_required_single_domain%3Daccess-ci.org%252Cucsd.edu%252Corcid.org&nonce=Eo1SlneG_74sZrY3zm0b4AasrM_7tJsypoIkVNI4HUU&prompt=login&session_required_single_domain=access-ci.org%2Cucsd.edu%2Corcid.org).

2. Using ssh command line
   The following are examples of using the SSH command line to log in to Expanse:
   `ssh <your_username>@login.expanse.sdsc.edu`
   or 
    `ssh -l <your_username> login.expanse.sdsc.edu`

## Launch Jupyter Notebook 
To launch Jupyter Notebook after logging into Expanse via the SSH command line, follow these steps:

1. Activate the Galyleo Shell Utility:
After logging into Expanse, you'll need to launch the galyleo shell utility to run Jupyter Notebook. Begin by adding the install location to your PATH environment variable using the following command
`export PATH="/cm/shared/apps/sdsc/galyleo:${PATH}"`
After setting the path use the followinf command line to launch Galyleo `launch` :
 `galyleo launch`

We need to use more command line options to launch Glayleo in the proper environemnt.

2. Launching Jupyter Notebook via Web Portal:
If you prefer using the web portal, Expanse provides a user-friendly interface where you can easily launch Jupyter Notebook without needing to modify environment variables or use the command line.


## Command - line options
When launching Jupyter Notebook on Expanse, you can adjust various aspects of the environment, such as the number of CPUs requested, the amount of memory, and the environmental modules you want to load. Here are the key command line options.

- `--account`: 
- `--partition`:
- `--cpus`:
- `--memory`:
- `--time-limit`:
- `--env-modules`:
- `--sif`:

If you want to learn more about the comman - line options plase refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Define Software Environment

There are several ways to 
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


## Location 

NumPy_Intro\
├── [numpy_intro.ipynb](./numpy_intro.ipynb)\
├── README.md

## Sources
For extensive NumPy documentation: https://numpy.org/doc/stable/reference/index.html
