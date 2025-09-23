---
layout: page
title: Browse by Tag
permalink: /blog/tag/
description: Explore all tags used across the blog.
nav: true
nav_order: 60
---

<p class="mb-3">
  Filter and sort tags. Click a tag to view its posts.
</p>

<!-- Controls -->
<div class="d-flex align-items-center gap-2 mb-3" role="group" aria-label="Tag controls">
  <label for="tag-filter" class="visually-hidden">Filter tags</label>
  <input id="tag-filter" class="form-control" type="search" placeholder="Filter tags…" autocomplete="off" style="max-width: 28rem;">
  <div class="btn-group ms-2" role="group" aria-label="Sort tags">
    <button id="sort-alpha" type="button" class="btn btn-sm btn-outline-primary active" data-sort="alpha">A–Z</button>
    <button id="sort-count" type="button" class="btn btn-sm btn-outline-primary" data-sort="count">Most posts</button>
  </div>
  <span class="ms-auto small text-muted" id="tag-count" aria-live="polite"></span>
</div>

<!-- Tag grid -->
<ul id="tag-grid" class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {%- comment -%}
    Build a flat, sorted list of tag names. Then lookup posts by name.
    This avoids sending arrays into 'slugify' (which caused the gsub error).
  {%- endcomment -%}
  {%- assign tag_names = site.tags | map: 'first' | sort_natural -%}

  {%- for tag_name in tag_names -%}
    {%- assign posts = site.tags[tag_name] -%}
    {%- assign count = posts | size -%}
    {%- assign slug = tag_name | slugify -%}

    {%- comment -%}
      Optional metadata (friendly title/description) if _data/tag_meta.yml exists.
      Guard the access so builds succeed even if the data file is absent.
    {%- endcomment -%}
    {%- assign display_title = tag_name -%}
    {%- assign blurb = nil -%}
    {%- if site.data.tag_meta -%}
      {%- assign meta_by_slug = site.data.tag_meta[slug] -%}
      {%- assign meta_by_name = site.data.tag_meta[tag_name] -%}
      {%- assign meta = meta_by_slug | default: meta_by_name -%}
      {%- if meta and meta.title -%}{%- assign display_title = meta.title -%}{%- endif -%}
      {%- if meta and meta.description -%}{%- assign blurb = meta.description -%}{%- endif -%}
    {%- endif -%}

    {%- comment -%}
      Canonical per-tag page; adjust if your tag archives live elsewhere.
    {%- endcomment -%}
    {%- assign href = '/blog/tag/' | append: slug | append: '/' | relative_url -%}

    <li class="col">
      <a class="d-block h-100 p-3 border rounded-3 text-decoration-none hover-shadow"
         href="{{ href }}"
         data-name="{{ tag_name | downcase | escape }}"
         data-count="{{ count }}">
        <div class="d-flex align-items-start justify-content-between gap-2">
          <h3 class="h5 m-0">{{ display_title }}</h3>
          <span class="badge bg-secondary" aria-label="Post count">{{ count }}</span>
        </div>
        {%- if blurb -%}
          <p class="mt-2 mb-0 text-muted small">{{ blurb }}</p>
        {%- endif -%}
      </a>
    </li>
  {%- endfor -%}
</ul>

<p class="mt-3 small text-muted">
  Tip: Link to this page with <code>?q=&lt;tag&gt;</code> to pre-filter (e.g., <code>/blog/tag/?q=cuda</code>).
</p>

<style>
  .hover-shadow:hover { box-shadow: 0 .25rem .75rem rgba(0,0,0,.08); }
  html[data-theme="dark"] .hover-shadow:hover { box-shadow: 0 .25rem .75rem rgba(0,0,0,.35); }
</style>

<script>
  (function () {
    const grid = document.getElementById('tag-grid');
    const cards = Array.from(grid.querySelectorAll('a[data-name]'));
    const input = document.getElementById('tag-filter');
    const sortAlphaBtn = document.getElementById('sort-alpha');
    const sortCountBtn = document.getElementById('sort-count');
    const counter = document.getElementById('tag-count');

    const params = new URLSearchParams(window.location.search);
    if (params.has('q')) input.value = params.get('q');

    function norm(s){ return (s||'').toLowerCase().trim(); }

    function apply() {
      const q = norm(input.value);
      let visible = [];

      // Filter
      for (const card of cards) {
        const match = !q || card.getAttribute('data-name').includes(q);
        card.closest('li').style.display = match ? '' : 'none';
        if (match) visible.push(card);
      }

      // Sort
      const byCount = sortCountBtn.classList.contains('active');
      visible.sort((a,b) => {
        if (byCount) {
          const ca = +a.getAttribute('data-count');
          const cb = +b.getAttribute('data-count');
          if (cb !== ca) return cb - ca; // desc by count
        }
        return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
      });

      // Re-append in new order
      for (const card of visible) grid.appendChild(card.closest('li'));

      counter.textContent = `${visible.length} tag${visible.length===1?'':'s'}`;
    }

    function setSort(btn) {
      for (const b of [sortAlphaBtn, sortCountBtn]) b.classList.remove('active');
      btn.classList.add('active');
      apply();
    }

    let t; input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(apply, 80); });
    sortAlphaBtn.addEventListener('click', () => setSort(sortAlphaBtn));
    sortCountBtn.addEventListener('click', () => setSort(sortCountBtn));

    apply();
  })();
</script>
 