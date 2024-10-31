# SDSC Expanse Notebook: Matplotlib_Intro
This README file provides instructions for Expanse users on running Matplotlib Python Package. 

This notebook dives into the basics of the Matplotlib Python Package, which is a data visualization and graphical plotting library. 
Topics including basic syntax, scatter plots, line plots, bar charts, and histograms are discussed in the notebook.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Sources](#sources)
- [Submit Ticket](#submit-ticket)

## Import Module:
- matplotlib
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

## Install Modules
To run Matplotlib notebook, we do not need to install additional packages.

## Location 

Matplotlib_Intro\
├──[Matplotlib_Intro.ipynb](./Matplotlib_Intro.ipynb)\
├── README.md

## Sources

To find out more about the Matplotlib library, please visit https://matplotlib.org/.

## Submit Ticket
If you find anything that needs to be changed, edited, or if you would like to provide feedback or contribute to the notebook, please submit a ticket by contacting us at:

Email: consult@sdsc.edu

We appreciate your input and will review your suggestions promptly!
