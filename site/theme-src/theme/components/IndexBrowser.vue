<template>
  <div class="ib-wrap">
    <div class="ib-controls">
      <div class="ib-search">
        <span class="ib-search-icon">⌕</span>
        <input
          v-model="query"
          type="search"
          :placeholder="`Filter ${sectionLabel} by name or category…`"
          class="ib-input"
        />
      </div>
      <div class="ib-chips">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="ib-chip"
          :class="{ active: category === cat.id }"
          @click="category = cat.id"
        >
          {{ cat.label }} <span class="ib-count">{{ cat.count }}</span>
        </button>
      </div>
    </div>

    <p class="ib-meta">{{ visibleCount }} {{ sectionLabel.toLowerCase() }} shown</p>

    <div v-if="grouped.length === 0" class="ib-empty">
      No matches for "{{ query }}". Try a different name or category.
    </div>

    <div v-for="group in grouped" :key="group.letter" class="ib-group">
      <h3 class="ib-letter">{{ group.letter }}</h3>
      <ul class="ib-list">
        <li v-for="item in group.items" :key="item.id" class="ib-item">
          <a :href="withBase(`/${item.section}/${item.id}`)" class="ib-link">
            {{ item.title }}
          </a>
          <span v-if="item.tags.length" class="ib-tags">
            <span v-for="t in item.tags.slice(0, 3)" :key="t" class="ib-tag">{{ t }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { withBase } from "vitepress";

const props = defineProps({
  section: { type: String, default: "entities" },
  // When set, only show items whose tags include this tag (used by /tags/<slug>/ pages).
  tag: { type: String, default: "" },
});

const sectionLabel = computed(() =>
  props.section === "concepts" ? "Concepts" : "Entities"
);

const all = ref([]);
const query = ref("");
const category = ref("all");

const CATEGORY_TAGS = {
  people: ["person", "politician", "president", "author", "journalist", "historian", "actor", "whistleblower"],
  media: ["outlet", "media", "mainstream-media", "cable-news", "newspaper", "magazine", "independent-media", "substack"],
  government: ["agency", "government-agency", "us-government", "congress", "senate", "administration", "judiciary", "military"],
  organizations: ["organization", "international-organization", "advocacy-organization", "think-tank", "institution"],
  business: ["corporate", "bank", "asset-manager", "institutional-investor", "conglomerate", "tech", "finance"],
};

const categories = computed(() => {
  const base = [
    { id: "all", label: "All", match: () => true },
    { id: "people", label: "People", match: (i) => i.tags.some((t) => CATEGORY_TAGS.people.includes(t)) },
    { id: "media", label: "Media", match: (i) => i.tags.some((t) => CATEGORY_TAGS.media.includes(t)) },
    { id: "government", label: "Government", match: (i) => i.tags.some((t) => CATEGORY_TAGS.government.includes(t)) },
    { id: "organizations", label: "Orgs", match: (i) => i.tags.some((t) => CATEGORY_TAGS.organizations.includes(t)) },
    { id: "business", label: "Business", match: (i) => i.tags.some((t) => CATEGORY_TAGS.business.includes(t)) },
  ];
  return base.map((c) => ({ ...c, count: all.value.filter((i) => c.match(i)).length }));
});

const visible = computed(() => {
  const q = query.value.trim().toLowerCase();
  return all.value.filter((item) => {
    const inCategory = category.value === "all" ||
      categories.value.find((c) => c.id === category.value).match(item);
    if (!inCategory) return false;
    // When a tag is requested (from a /tags/<slug>/ page), only show that tag.
    if (props.tag && !item.tags.some((t) => slugify(t) === props.tag)) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
});

const visibleCount = computed(() => visible.value.length);

const grouped = computed(() => {
  const groups = new Map();
  for (const item of visible.value) {
    const letter = (item.title[0] || "#").toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(item);
  }
  return [...groups.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([letter, items]) => ({ letter, items }));
});

onMounted(async () => {
  try {
    const res = await fetch(withBase("/index-data.json"));
    const data = await res.json();
    // When filtering by tag, load BOTH sections so a tag page can show
    // entities and concepts together. Otherwise scope to the given section.
    all.value = props.tag
      ? data
      : data.filter((d) => d.section === props.section);
  } catch (e) {
    console.error("index data load failed", e);
  }
});

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
</script>

<style scoped>
.ib-wrap { font-family: var(--vp-font-family-base, inherit); }
.ib-controls { display: flex; flex-direction: column; gap: 10px; margin-bottom: 8px; }
.ib-search { position: relative; max-width: 480px; }
.ib-search-icon {
  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
  color: var(--vp-c-text-2); font-size: 16px; opacity: 0.7;
}
.ib-input {
  width: 100%; padding: 10px 14px 10px 34px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.ib-input:focus { border-color: var(--vp-c-brand-1); box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 15%, transparent); }
.ib-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.ib-chip {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.ib-chip:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.ib-chip.active { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: #fff; }
.ib-count { font-size: 11px; opacity: 0.75; margin-left: 3px; }
.ib-meta { font-size: 12px; color: var(--vp-c-text-2); margin: 10px 0 4px; letter-spacing: 0.02em; }
.ib-group { margin-top: 18px; }
.ib-letter {
  font-size: 15px; font-weight: 700;
  color: var(--vp-c-brand-1);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 4px; margin-bottom: 6px;
}
.ib-list { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 28px; }
@media (max-width: 640px) { .ib-list { columns: 1; } }
.ib-item { break-inside: avoid; padding: 3px 0; }
.ib-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.12s;
}
.ib-link:hover { color: var(--vp-c-brand-1); text-decoration: underline; }
.ib-tags { margin-left: 8px; }
.ib-tag {
  font-size: 10.5px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  padding: 1px 6px; border-radius: 999px;
  margin-right: 4px; opacity: 0.85;
}
.ib-empty { padding: 28px 0; color: var(--vp-c-text-2); text-align: center; }
</style>
