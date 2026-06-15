# SDSC Expanse Notebook: Data_Analysis
This README file provides instructions for Expanse users to run data analyis notebooks.
The notebook covers pandas, a useful Python data analysis toolkit. We will look at two pandas objects: Series and DataFrame (1D and 2D data structures).

Keep in mind the added files:   
• city temps spreadsheet.xlsx  
• city temps.csv  
• olympics.csv  
These contain the necessary data for the notebook to run.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Sources](#sources)
- [Submit Ticket](#submit-ticket)

## Import Module:
- numpy
- pandas

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
To run data_analysis_pandas notebook, we do not need to install additional packages.

## Location 

Data_Analysis\
├──[data_analysis_cupy.ipynb](./data_analysis_pandas.ipynb)\
├── README.md

## Sources
More info on pandas, including a detailed API: https://pandas.pydata.org/

## Submit Ticket
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!
