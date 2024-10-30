# Expanse-Notebooks-dev: Notebook Table

## View by:  
* [Name](link-to-alphabetical-sorted notebooks)
* [CPU/GPU](link-to-CPU-sorted notebooks)
* [Serial/Parallel](linkg to paralllel sorted

```
these are created by the external python scripts
scripts run by github actions triggered by some events (e.g. file change, new file, some other readme files changes)
```

Here's a table formatted to summarize the directories, notebooks, required modules, and relevant keywords based on your file structure:

| Notebook Project               | Notebook                                                                                   | Required (Sub) Modules                   | Type              |
|-------------------------|--------------------------------------------------------------------------------------------|------------------------------------|-----------------------|
| Clustering_Visualizations | [Introduction_to_Clustering.ipynb](./Clustering_Visulizations/Introduction_to_Clustering.ipynb) | `scikit-learn`, `numpy`, `matplotlib`, `sciPy`,`make_blobs`,`KMeans`, `dendrogram`, `linkage`, `AgglomerativeClustering`   | CPU, Serial          |
| CUDA_GPU_Computing_Pi   | [cuda_gpu_nvidia_computing_pi_solution.ipynb](./CUDA_GPU_Computing_Pi/cuda_gpu_nvidia_computing_pi_solution.ipynb) | `numba` ,   `math`, `numpy`,  `cuda`            | GPU, Parallel        |
| CUDA_GPU_Distance_Matrix | [cuda_gpu_nvidia_distance_matrix_solution.ipynb](./CUDA_GPU_Distance_Matrix/cuda_gpu_nvidia_distance_matrix_solution.ipynb) |   `numba` ,   `math`, `numpy`,  `cuda`              | GPU, Parallel        |
| CUDA_GPU_Law_Of_Cosines | [cuda_gpu_nvidia_law_of_cosines_solution.ipynb](./CUDA_GPU_Law_Of_Cosines/cuda_gpu_nvidia_law_of_cosines_solution.ipynb) | `numba` ,   `math`, `numpy`, `vectorize`,`cuda`      | GPU, Parallel  |
| Dask_Graph_CPU          | [dask_graphs_CPU.ipynb](./Dask_Graph_CPU/dask_graphs_CPU.ipynb)                                    | `dask`              | CPU, Parallel |
| Dask_Graph_GPU          | [dask_graphs_GPU.ipynb](./Dask_Graph_GPU/dask_graphs_GPU.ipynb)                                    |     `dask`,`cupy`,`dask.array`, `array`   | GPU, Parallel |
| Data_Analysis           | [data_analysis_pandas.ipynb](./Data_Analysis/data_analysis_pandas.ipynb)                   | `numpy`, `pandas`                 | CPU, Serial    |
| Data_Analysis_Cupy      | [data_analysis_cupy.ipynb](./Data_Analysis_Cupy/data_analysis_cupy.ipynb)                  | `cupy`, `cudf`, `pandas` , `numpy`                | GPU, Parallel    |
| Decision_Trees          | [Decision trees.ipynb](./Decision_Trees/Decision%20trees.ipynb)                            | `scikitlearn`, `tree`, `sklearn.datasets`,`graphviz ` , `load_iris`  | CPU, Serial   |
| Graphs&Networks         | [NetworkX.ipynb](./Graphs&Networks/NetworkX.ipynb)                                         | `NetworkX`, `matplotlib.pyplot`,`networkx`, `write_dot`,  `networkx.drawing.nx_pydot`,  `networkx`       | CPU, Serial     |
| Hello_World_CPU         | [hello_world_cpu.ipynb](./Hello_World_CPU/hello_world_cpu.ipynb)                           |                          | CPU, Serial            |
| Hello_World_GPU         | [hello_world_gpu.ipynb](./Hello_World_GPU/hello_world_gpu.ipynb)                           |                           | GPU, Serial           |
| Image_Processing        | [Pillow.ipynb](./Image_Processing/Pillow.ipynb)                                            | `PIL`, `Image`,   `sys` ,  `ImageFilter`,  `ImageEnhance`   | CPU, Serial     |
| Matplotlib_Intro        | [matplotlib_intro.ipynb](./Matplotlib_Intro/matplotlib_intro.ipynb)                         | `matplotlib`, `matplotlib.pyplot`,  `numpy`                    | CPU, Serial |
| Multithreaded_Processing_CPU | [multithreaded_processing.ipynb](./Multithreaded_Processing_CPU/multithreaded_processing.ipynb) | `mkl`, `numpy` , `dask.array`           | CPU, Parallel   |
| NumPy_Intro             | [numpy_intro.ipynb](./NumPy_Intro/numpy_intro.ipynb)                                       | `numpy`, `operator`   ,  `add`,`matplotlib.pyplot`,`collections` , `Counter` | CPU, Serial        |
| Python_Data_Analysis_Library | [PandasCSV.ipynb](./Python_Data_Analysis_Library/PandasCSV.ipynb)                      | `IPython.display `, `Image`,  `pandas`          | CPU, Parallel    |
| String_Processing       | [Regression.ipynb](./String_Processing/Regression.ipynb)                                   | `sklearn`,   `linear_model`, `mean_squared_error`, `r2_score`, `sklearn.datasets` ,`load_diabetes` ,  `numpy` , `matplotlib.pyplot`, `pandas`, `scipy`,`stats`       | CPU, Serial     |
| Tensorflow_Image_Classification | [Image Classification.ipynb](./Tensorflow_Image_Classification/Image%20Classification.ipynb) | `tensorflow` ,`matplotlib.pyplot`,`numpy`,`PIL`,`keras`, `layers`,`tensorflow.keras`,`tensorflow.keras.models`,`Sequential`, `pathlib`  | CPU, GPU, Parallel |
| Tensorflow_Simple_Training | [SimpleTraining.ipynb](./Tensorflow_Simple_Training/SimpleTraining.ipynb)              | `tensorflow`, `numpy`,`csv`, `matplotlib.pyplot`                     | CPU, GPU, Parallel



