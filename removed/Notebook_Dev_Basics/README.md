# SDSC Expanse Notebook: Notebook_Dev_Basics
This README file provides instructions for running notebooks related to LaTeX and Markdown on Expanse. 
These notebooks contain essential knowledge for developing your own Jupyter Notebooks. 
• LaTeX is a useful tool for math formatting, supported with the notebooks.
• Markdown allows you to add formatted text in the notebooks.\
  **Listof Content**
- [Import Module](#import-module)
- [Launch Galyleo](#launch-galyleo)
- [Environment Modules](#environment-modules)
- [Install Modules](#install-modules)
- [Location](#location)
- [Sources](#sources)

## Import Module:
To run the notebooks, no additional modules need to be loaded.

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
To run latex and markdown notebooks, we do not need to install additional packages.

## Location 

Notebook_Dev_Basics\
├──[notebook_dev_basics_latex_math.ipynb](./notebook_dev_basics_latex_math.ipynb)\
├──[notebook_dev_basics_markdown.ipynb](.notebook_dev_basics_markdown.ipynb)\
├── README.md

## Sources

For all LaTeX symbols: https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols  
A quick-access page for Markdown: https://www.markdownguide.org/cheat-sheet/
