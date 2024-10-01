# SDSC Expanse Notebook: 

This README provides a guideline for running Jupyter notebooks on SDSC Expanse using Galyleo. It contains specific instructions for logging into Expanse, launching Jupyter notebooks via command-line options, configuring environments, and checking the environment setup.

If you have any updates or feedback, feel free to request changes.

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

After setting the path use the following command line to launch Galyleo:
 `galyleo launch`

We need to use more command line options to launch Glayleo in the proper environemnt.

2. Launching Jupyter Notebook via Web Portal:
If you prefer using the web portal, Expanse provides a user-friendly interface where you can easily launch Jupyter Notebook without needing to modify environment variables or use the command line.


## Command-Line Options

When launching Jupyter Notebook on Expanse, it is essential to configure the environment according to your resource requirements, such as the number of CPUs, memory, and specific modules needed. Below are key command-line options that help customize the environment for your job:
- `--account`: Specify the account to be charged for the compute resources. You should use your assigned project account.
  
- `--partition`: Choose the resource partition for your job. The default partition is `shared`, but if you require GPU resources, use the `gpu-shared` partition.
  
- `--cpus`: Define the number of CPUs you want to allocate for the job.
  
- `--memory`: Specify the amount of memory(GB) want to use for the job. Specify the amount of memory (in GB) required for the job. Be sure to allocate sufficient memory for your notebook to avoid crashes or out-of-memory errors.
  
- `--time-limit`: Set a maximum time limit for the job in the format `HH:MM:SS`. For example, if your job is expected to run for 30 minutes, set this as `00:30:00`.
  
- `--env-modules`: Provide a comma-separated list of environment modules to load. These modules should include any necessary software or libraries required for your Jupyter notebook environment.
  
- `--sif`: Specify the path to a Singularity image file (container) in Expanse. For example, in Expanse, the Singularity container path could be `/cm/shared/apps/containers/singularity/`

Before submitting your job, make sure to account for Expanse system resources and current availability. You can check the Expanse system status and learn more about its resources by visiting SDSC’s [Expanse User Guide](https://www.sdsc.edu/support/user_guides/expanse.html).

For additional information on command-line options, please refer to [this GitHub repository](https://github.com/mkandes/galyleo).

## Specifying the Environment

1.  Sigularity Container

Singularity is a tool used for running complex applications on High Performance Computing (HPC) systems. The Expanse system has several pre-installed containers, including libraries such as PyTorch, Tapis, and TensorFlow. You can view the installed containers by navigating to the following directory:
`/cm/shared/apps/containers/singularity`

When launching a Jupyter Notebook with Singularity, you need to use the `--sif` option to specify the container image. For example, if you want to use the TensorFlow library, you would include the `--sif` option followed by the path to the TensorFlow container:

 `--sif /cm/shared/apps/containers/singularity/tensorflow/tensorflow-latest.sif `

2.Create Conda Environment

Conda is an open-source software package, dependency, and environment management system created by Anaconda. It simplifies the installation of multiple packages for use in Jupyter notebooks on HPC systems. Galyleo supports both Anaconda and Miniconda (a minimal installer for Conda). You can create a custom Conda environment using a .yml file.

Below is an example of a .yml file:

```
name: df-parallel
 
channels:
  - conda-forge
  - anaconda

dependencies:
  - python=3.10
  - jupyterlab=4.0.1
  - ipywidgets=8.0.6
  - matplotlib=3.7.1
  - seaborn=0.12.2
  - papermill=2.3.4
  - dask=2023.3.2
  - pyspark=3.4.0
  - pyarrow=10.0.1
  - openjdk=17.0.3

variables:
  # SPARK conf directory with logging configuration
  SPARK_CONF_DIR: ../conf
  SPARK_DRIVER_MEMORY: 16G
  SPARK_DRIVER_MAXRESULTSIZE: 4G
  SPARK_WORKER_MEMORY: 4G
```
To launch the Jupyter notebook with this custom environment, use the following command:

```
galyleo launch --account abc123 --partition shared --cpus 4 --memory 8 --time-limit 00:30:00 --conda-env df-parallel
```
Here, the --conda-env option specifies the name of the Conda environment to activate when launching the Jupyter notebook on Expanse.
You can also specify the path to the `.yml` file using the `--conda-yml` option, like this:

`--conda-env df-parallel --conda-yml "${HOME}/df-parallel/environment.yml"`

Additionally, you can use options like `--mamba` and `--cache`. For more details on managing Conda environments, refer to the Galyleo [README](https://github.com/mkandes/galyleo?tab=readme-ov-file).

## Modules
At the beginning of each Jupyter Notebook, you will find a list of necessary modules and packages that need to be imported to ensure the notebook runs properly. Before running the notebook, check that your environment includes all the required modules.

For example, in the `numpy_intro.ipynb`, the header will look like this:

```
#Module Needed: numpy, add, matplotlib, collections, Counter

```
Check that these modules are installed and available in the Jupyter environment. You can do this by defining the environment beforehand using command-line options.

## System Environment

At the end of each Jupyter Notebook session, you can view detailed hardware system information and the versions of installed Python packages. Using the watermark extension, the information might look like this:

`%load_ext watermark`
`%watermark -v -m -p ipywidgets,matplotlib,numpy,pandas,sklearn`
```
Python implementation: CPython
Python version       : 3.8.8
IPython version      : 7.22.0

ipywidgets: 7.6.3
matplotlib: 3.3.4
numpy     : 1.22.4
pandas    : 1.2.4
sklearn   : 0.24.1

Compiler    : GCC 7.3.0
OS          : Linux
Release     : 4.18.0-513.24.1.el8_9.x86_64
Machine     : x86_64
Processor   : x86_64
CPU cores   : 128
Architecture: 64bitIf you need to insall additioal packages you can try to install indvidially or pefer to lauch the juypternotebook again using the conda, conatiner.
```
If additional packages are required, you can:

Install them individually within the notebook using package managers like `pip` or `conda`.
Alternatively, relaunch the Jupyter Notebook environment using a Conda environment or a Singularity Container to include the necessary dependencies.

This ensures the proper setup of packages and an optimized environment for running your notebooks.

## List of Notebooks
| Name                              | Short Description                             |
|----------------------------------- |------------------------------------|
| numpy_intro.ipynb                  | This notebook introduces NumPy, covering n-dimensional arrays, basic functions like array creation, reshaping, manipulation, and general linear algebra capabilities.                                |
|                      |                           |
