## Expanse-Notebooks-dev: Notebook Table
Refer to this [guide](./Expanse_Notebook_User_Guide.md) for specific instructions on loading required packages and launching Jupyter Notebook in Expanse.

## View by: Name (alphabetical-sorted notebooks):

The following table lists the notebooks sorted in alphabetical order.

If you would like to view the table by type:
- [CPU/GPU](./Notebook_Table_Type(CPU\GPU).md)
- [Serial/Parallel](./Notebook_Table_Type(Serial\Parallel).md)

## Notebook Table: Alphabetical Order
| Notebook Project               | Notebook                                                                                   | Type               | Required (Sub) Modules                   |
|--------------------------------|--------------------------------------------------------------------------------------------|--------------------|------------------------------------------|
| CUDA_GPU_Computing_Pi          | [cuda_gpu_nvidia_computing_pi_solution.ipynb](./CUDA_GPU_Computing_Pi/cuda_gpu_nvidia_computing_pi_solution.ipynb) | GPU, Parallel     | `numba`, `math`, `numpy`, `cuda`        |
| CUDA_GPU_Distance_Matrix       | [cuda_gpu_nvidia_distance_matrix_solution.ipynb](./CUDA_GPU_Distance_Matrix/cuda_gpu_nvidia_distance_matrix_solution.ipynb) | GPU, Parallel     | `numba`, `math`, `numpy`, `cuda`        |
| CUDA_GPU_Law_Of_Cosines        | [cuda_gpu_nvidia_law_of_cosines_solution.ipynb](./CUDA_GPU_Law_Of_Cosines/cuda_gpu_nvidia_law_of_cosines_solution.ipynb) | GPU, Parallel     | `numba`, `math`, `numpy`, `vectorize`, `cuda` |
| Clustering_Visualizations      | [Introduction_to_Clustering.ipynb](./Clustering_Visulizations/Introduction_to_Clustering.ipynb) | CPU, Serial       | `scikit-learn`, `numpy`, `matplotlib`, `sciPy`, `make_blobs`, `KMeans`, `dendrogram`, `linkage`, `AgglomerativeClustering` |
| Dask_Graph_CPU                 | [dask_graphs_CPU.ipynb](./Dask_Graph_CPU/dask_graphs_CPU.ipynb)                           | CPU, Parallel     | `dask`                                  |
| Dask_Graph_GPU                 | [dask_graphs_GPU.ipynb](./Dask_Graph_GPU/dask_graphs_GPU.ipynb)                           | GPU, Parallel     | `dask`, `cupy`, `dask.array`, `array`   |
| Data_Analysis                  | [data_analysis_pandas.ipynb](./Data_Analysis/data_analysis_pandas.ipynb)                  | CPU, Serial       | `numpy`, `pandas`                       |
| Data_Analysis_Cupy             | [data_analysis_cupy.ipynb](./Data_Analysis_Cupy/data_analysis_cupy.ipynb)                 | GPU, Parallel     | `cupy`, `cudf`, `pandas`, `numpy`       |
| Decision_Trees                 | [Decision trees.ipynb](./Decision_Trees/Decision%20trees.ipynb)                          | CPU, Serial       | `scikit-learn`, `tree`, `sklearn.datasets`, `graphviz`, `load_iris` |
| Graphs&Networks                | [NetworkX.ipynb](./Graphs&Networks/NetworkX.ipynb)                                       | CPU, Serial       | `NetworkX`, `matplotlib.pyplot`, `networkx`, `write_dot`, `networkx.drawing.nx_pydot`, `networkx` |
| Hello_World_CPU                | [hello_world_cpu.ipynb](./Hello_World_CPU/hello_world_cpu.ipynb)                         | CPU, Serial       |                                          |
| Hello_World_GPU                | [hello_world_gpu.ipynb](./Hello_World_GPU/hello_world_gpu.ipynb)                         | GPU, Serial       |                                          |
| Image_Processing               | [Pillow.ipynb](./Image_Processing/Pillow.ipynb)                                          | CPU, Serial       | `PIL`, `Image`, `sys`, `ImageFilter`, `ImageEnhance` |
| Matplotlib_Intro               | [matplotlib_intro.ipynb](./Matplotlib_Intro/matplotlib_intro.ipynb)                       | CPU, Serial       | `matplotlib`, `matplotlib.pyplot`, `numpy` |
| Multithreaded_Processing_CPU   | [multithreaded_processing.ipynb](./Multithreaded_Processing_CPU/multithreaded_processing.ipynb) | CPU, Parallel   | `mkl`, `numpy`, `dask.array`           |
| NumPy_Intro                    | [numpy_intro.ipynb](./NumPy_Intro/numpy_intro.ipynb)                                     | CPU, Serial       | `numpy`, `operator`, `add`, `matplotlib.pyplot`, `collections`, `Counter` |
| Python_Data_Analysis_Library   | [PandasCSV.ipynb](./Python_Data_Analysis_Library/PandasCSV.ipynb)                         | CPU, Parallel     | `IPython.display`, `Image`, `pandas`     |
| String_Processing              | [Regression.ipynb](./String_Processing/Regression.ipynb)                                 | CPU, Serial       | `sklearn`, `linear_model`, `mean_squared_error`, `r2_score`, `sklearn.datasets`, `load_diabetes`, `numpy`, `matplotlib.pyplot`, `pandas`, `scipy`, `stats` |
| Tensorflow_Image_Classification | [Image Classification.ipynb](./Tensorflow_Image_Classification/Image%20Classification.ipynb) | CPU, GPU, Parallel | `tensorflow`, `matplotlib.pyplot`, `numpy`, `PIL`, `keras`, `layers`, `tensorflow.keras`, `tensorflow.keras.models`, `Sequential`, `pathlib` |
| Tensorflow_Simple_Training      | [SimpleTraining.ipynb](./Tensorflow_Simple_Training/SimpleTraining.ipynb)                | CPU, GPU, Parallel | `tensorflow`, `numpy`, `csv`, `matplotlib.pyplot` |
