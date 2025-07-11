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
By utilizing `--env-modules`, we can load any software installed in Expanse. 
For instance, executing this command line will load CPU modules and Anaconda3 within the Jupyter session.
  - CPU:
`--env-modules cpu/0.17.3b,anaconda3`
```
galyleo launch --account abc123 --partition shared --cpus 2 --memory 4 --time-limit 00:30:00 --env-modules cpu/0.17.3b,anaconda3/2021.05
```
## Install Modules
To run data_analysis_pandas notebook, we do not need to install additional packages.

## Location 

Data_Analysis\
├──[data_analysis_pandas.ipynb](./data_analysis_pandas.ipynb)\
├── README.md

## Sources
More info on pandas, including a detailed API: https://pandas.pydata.org/

## Submit Ticket
This notebook was last tested on 3/31/25. 
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!
