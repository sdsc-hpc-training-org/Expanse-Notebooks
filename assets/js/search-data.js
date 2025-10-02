// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notebooks",
          title: "Notebooks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/index.html";
          },
        },{id: "post-parallel-programming-with-dask-on-gpu",
      
        title: "Parallel Programming with DASK on GPU",
      
      description: "instructions for Expanse users to run Parallel_Programming notebooks in the Expanse. Introduces the Dask module with a simple example and illustrates the Dask graph.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/parallel-programming-dask-gpu/";
        
      },
    },{id: "post-parallel-programming-with-dask-on-cpu",
      
        title: "Parallel Programming with DASK on CPU",
      
      description: "instructions for Expanse users to run Parallel_Programming notebooks in the Expanse. Introduces the Dask module with a simple example and illustrates the Dask graph.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/parallel-programming-dask-cpu/";
        
      },
    },{id: "post-numpy-intro",
      
        title: "NumPy Intro",
      
      description: "instructions for Expanse users to run NumPy_intro notebooks in the Expanse.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/numpy-intro/";
        
      },
    },{id: "post-clustering-visualizations",
      
        title: "Clustering Visualizations",
      
      description: "instructions for Expanse users on how to run basic clustering methods, implement them in Python notebooks, and execute them on Expanse.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/clustering-visualizations/";
        
      },
    },{id: "post-string-processing",
      
        title: "String Processing",
      
      description: "instructions for Expanse users to run String_Processing notebooks in the Expanse. A brief introduction to regression using scikit-learn. Covers basic linear regression, multiple linear regression, combining scikit-learn with pandas and working with categorical data.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/boring-python/";
        
      },
    },{id: "post-python-data-analysis-library",
      
        title: "Python Data Analysis Library",
      
      description: "instructions for Expanse users to run Python_Data_Analysis_Library using CPU on Expanse.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/python-data-analysis/";
        
      },
    },{id: "post-data-analysis",
      
        title: "Data-Analysis",
      
      description: "instructions for Expanse users to run data analyis notebooks. The notebook covers pandas, a useful Python data analysis toolkit. We will look at two pandas objects- Series and DataFrame (1D and 2D data structures).",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/data-analysis/";
        
      },
    },{id: "post-law-of-cosines-on-a-cuda-gpu-nvidia",
      
        title: "Law of Cosines on a CUDA GPU (NVIDIA)",
      
      description: "instructions for Expanse users to run CUDA notebooks on GPU nodes. Code authored by Abe Stern, NVIDIA.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/law-of-cosines-cuda-gpu/";
        
      },
    },{id: "post-computing-distance-matrices-on-a-cuda-gpu-nvidia",
      
        title: "Computing distance matrices on a CUDA GPU (NVIDIA)",
      
      description: "instructions for Expanse users to run CUDA notebooks on GPU nodes. Code authored by Abe Stern, NVIDIA.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/distance-matrix-cuda-gpu/";
        
      },
    },{id: "post-computing-pi-on-a-cuda-gpu-nvidia",
      
        title: "Computing Pi on a CUDA GPU (NVIDIA)",
      
      description: "instructions for Expanse users to run CUDA notebooks on GPU nodes. Code authored by Abe Stern, NVIDIA.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/computing-pi-cuda-gpu-nvidia/";
        
      },
    },{id: "post-hello-world-gpu",
      
        title: "Hello_World GPU",
      
      description: "instructions for Expanse users to print &#39;Hello, World!&#39; using both CPU and GPU on Expanse.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hello-world-gpu/";
        
      },
    },{id: "post-graphs-amp-networks",
      
        title: "Graphs &amp; Networks",
      
      description: "instructions for Expanse users on how to run notebooks related to building, visualizing, and analyzing graphs and networks.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/graphs-networks/";
        
      },
    },{id: "post-hello-world-cpu",
      
        title: "Hello_World CPU",
      
      description: "instructions for Expanse users to print &#39;Hello, World!&#39; using both CPU and GPU on Expanse.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hello-world-cpu/";
        
      },
    },{id: "post-decision-trees",
      
        title: "Decision Trees",
      
      description: "instructions for Expanse users to run DecisionTrees notebooks in the Expanse. Introduces the scikit-learn machine learning package, using a classic decision tree example.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/decision-trees/";
        
      },
    },{id: "post-data-analysis-with-cupy",
      
        title: "Data Analysis with CuPy",
      
      description: "instructions for Expanse users to run data analyis notebooks. The notebook covers pandas, a useful Python data analysis toolkit. We will look at two pandas objects- Series and DataFrame (1D and 2D data structures).",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/data-analysis-cupy/";
        
      },
    },{id: "post-tensorflow-simple-training",
      
        title: "Tensorflow Simple Training",
      
      description: "instructions for Expanse users on how to run TensorFlow on Expanse, both on CPU and GPU.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tensorflow-simple-training/";
        
      },
    },{id: "post-tensorflow",
      
        title: "Tensorflow",
      
      description: "instructions for Expanse users on how to run TensorFlow on Expanse, both on CPU and GPU.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tensorflow-image-classification/";
        
      },
    },{id: "post-matplotlib-intro",
      
        title: "Matplotlib Intro",
      
      description: "instructions for Expanse users on running Matplotlib Python Package.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/matplotlib-intro/";
        
      },
    },{id: "post-image-processing",
      
        title: "Image Processing",
      
      description: "instructions for Expanse users on learning about the PILLOW package, authored by Leo Gu.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/image-processing/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
