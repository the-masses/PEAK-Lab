---
layout: page
title: people
permalink: /people/
description: We are a team of researchers excited about building algorithms that perceive and understand our world
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---


{% assign sorted_projects = site.peoples | sort: "importance" %}


  <div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
    {% for project in sorted_projects %}
      {% include people_base.liquid %}
    {% endfor %}
    </div>
  </div>




<h2> Interested in doing research with us?</h2>
<p>
How best to get in touch depends on your situation. Are you…
</p>

<!-- pages/projects.md -->
<div class="peoples">


<!-- Display projects without categories -->


  <!-- Generate cards for each project -->


  <div class=" background-dotted  row g-4 mt-2">
    <div class="people-profiles">
    {% for project in sorted_projects %}
      {% include people_full.liquid %}
    {% endfor %}
    </div>
  </div>



</div>
<script>

</script>