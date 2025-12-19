---
layout: post
title: Session 3.6 Deep Learning – Special Connections
date: 2025-06-25
description: Session 3.6 The architecture of many networks use paths and connections in flexible ways; we will review gate...
tags: 
  - expanse
  - CIML-2025
  - Machine-Learning
  - AI-ML
categories: 
giscus_comments: false
related_posts: true
year_created: 2025
date_last_tested: 
cpu_or_gpu: cpu
hpc_system: expanse
---
# Session 3.6 Deep Learning – Special Connections

**Date:** Wednesday, June 25, 2025

**Summary**: The architecture of many networks use paths and connections in flexible ways; we will review gate, skip, and residual connections and get some intuition what they are good for.

**Presented by:** [Paul Rodriguez](https://profiles.ucsd.edu/paul.rodriguez) (p4rodriguez at ucsd.edu) 

### Reading and Presentations:
* **Presentation slides:**
  
### TASKS: None at this time.

[Back to Top](#top)

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/CIML_2025/3-6/CIML25_MNIST_AE_wskip_v7.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/CIML_2025/3-6/CIML25_MNIST_AE_wskip_v7.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/CIML_2025/3-6/CIML25_ToyAttn_v6.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/CIML_2025/3-6/CIML25_ToyAttn_v6.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}