---
layout: post
title: Parallel Concepts
date: 2025-06-18
description: Topic 2.2- Parallel Computing Concepts talk by SDSC, delivered through XSEDE
tags: 
  - expanse
  - CIML-2025
  - XSEDE 
categories: 
giscus_comments: false
related_posts: true
year_created: 
date_last_tested: 
cpu_or_gpu: 
hpc_system: 
---
# Parallel-concepts
This repository accompanies the Parallel Computing Concepts talk that is offered by SDSC and delivered through XSEDE, SDSC's HPC training series and other venues. It currently contains code and figures for presenting scaling data - the right way and the wrong way - and illustrating the limits on scalability imposed by Amdahl's Law. This is a work in progress and new content will be added as necessary.

## About COMPLECS

COMPLECS (COMPrehensive Learning for end-users to Effectively utilize
CyberinfraStructure) is a new SDSC program where training will cover
non-programming skills needed to effectively use
supercomputers. Topics include parallel computing concepts, Linux
tools and bash scripting, security, batch computing, how to get help,
data management and interactive computing. COMPLECS is supported by
NSF award 2320934.

<img src="./images/NSF_Official_logo_Med_Res_600ppi.png" alt="drawing" width="150"/>

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/sdsc-complecs/Parallel-computing-concepts/HEAD)

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/sdsc-complecs/Parallel-computing-concepts/HEAD)

<iframe
  src="https://github.com/ciml-org/ciml-summer-institute-2025/blob/b5070ff4ded8e927dbee4578d59009782d188e4b/2.2_parallel_computing_concepts/Parallel%20concepts%20CIML.pdf"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>

Note that there are 2 notebooks for this topic: 

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/CIML_2025/2-2/Amdahls law.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/CIML_2025/2-2/Amdahls law.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/CIML_2025/2-2/Strong scaling.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/CIML_2025/2-2/Strong scaling.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}