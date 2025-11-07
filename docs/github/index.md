---
layout: none
nav_exclude: true
search_exclude: true
---

{% assign repo = page.url | remove: "/github/" | remove: "/" %}

{% if repo != "" %}
  {% redirect_to "https://github.com/junian/" | append: repo %}
{% else %}
  {% redirect_to "https://github.com/junian/" %}
{% endif %}
