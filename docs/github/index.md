---
layout: none
---

{% assign repo = page.url | remove: "/github/" | remove: "/" %}

{% if repo != "" %}
  {% redirect_to "https://github.com/junian/" | append: repo %}
{% else %}
  {% redirect_to "https://github.com/junian/" %}
{% endif %}
