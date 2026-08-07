<template>
  <div class="hs-wrap" ref="wrap">
    <div class="hs-field">
      <span class="hs-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
      </span>
      <input
        ref="input"
        v-model="query"
        type="search"
        class="hs-input"
        :placeholder="`Search ${all.length.toLocaleString()} pages by name or tag…`"
        aria-label="Search the wiki"
        role="combobox"
        aria-expanded="true"
        aria-controls="hs-results"
        aria-autocomplete="list"
        autocomplete="off"
        @input="onInput"
        @keydown.down.prevent="move(1)"
        @keydown.up.prevent="move(-1)"
        @keydown.enter.prevent="go(activeIndex)"
        @keydown.escape="close"
      />
      <span v-if="query" class="hs-clear" role="button" tabindex="0" aria-label="Clear search" @click="clear" @keydown.enter.prevent="clear">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </span>
    </div>

    <div
      v-if="open && results.length"
      id="hs-results"
      class="hs-drop"
      role="listbox"
      :aria-label="`${results.length} results`"
    >
      <ul class="hs-list">
        <li
          v-for="(item, i) in results"
          :key="item.id"
          :id="`hs-opt-${i}`"
          role="option"
          :aria-selected="i === activeIndex"
          class="hs-item"
          :class="{ active: i === activeIndex }"
          @mousedown.prevent="go(i)"
          @mouseenter="activeIndex = i"
        >
          <a :href="withBase(`/${item.section}/${item.id}`)" class="hs-link">
            <span class="hs-badge" :class="`hs-badge-${item.section}`">
              {{ item.section === "entities" ? "Entity" : "Concept" }}
            </span>
            <span class="hs-title">{{ item.title }}</span>
            <span v-if="item.tags.length" class="hs-tags">
              <span v-for="t in item.tags.slice(0, 2)" :key="t" class="hs-tag">{{ t }}</span>
            </span>
          </a>
        </li>
      </ul>
      <p class="hs-foot">{{ results.length }} {{ results.length === 1 ? "match" : "matches" }} — ↵ to open</p>
    </div>

    <p v-else-if="open && query" class="hs-none">No pages match “{{ query }}”. Try a different name or tag.</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { withBase } from "vitepress";

const all = ref([]);
const query = ref("");
const open = ref(false);
const activeIndex = ref(0);
const input = ref(null);
const wrap = ref(null);

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return [];
  const scored = [];
  for (const item of all.value) {
    const title = item.title.toLowerCase();
    const tagHit = item.tags.some((t) => t.toLowerCase().includes(q));
    if (title.startsWith(q)) {
      scored.push({ item, score: 0 });
    } else if (title.includes(q)) {
      scored.push({ item, score: 1 });
    } else if (tagHit) {
      scored.push({ item, score: 2 });
    }
  }
  return scored
    .sort((a, b) => a.score - b.score || a.item.title.localeCompare(b.item.title))
    .slice(0, 10)
    .map((s) => s.item);
});

function onInput() {
  open.value = true;
  activeIndex.value = 0;
}

function move(delta) {
  if (!results.value.length) return;
  activeIndex.value = (activeIndex.value + delta + results.value.length) % results.value.length;
  const el = document.getElementById(`hs-opt-${activeIndex.value}`);
  if (el) el.scrollIntoView({ block: "nearest" });
}

function go(i) {
  const item = results.value[i];
  if (!item) return;
  window.location.href = withBase(`/${item.section}/${item.id}`);
}

function clear() {
  query.value = "";
  open.value = false;
  activeIndex.value = 0;
  input.value?.focus();
}

function close() {
  open.value = false;
}

function onClickOutside(e) {
  if (wrap.value && !wrap.value.contains(e.target)) close();
}

onMounted(async () => {
  try {
    const res = await fetch(withBase("/index-data.json"));
    all.value = await res.json();
  } catch (e) {
    console.error("search index load failed", e);
  }
  document.addEventListener("click", onClickOutside);
});

onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>

<style scoped>
.hs-wrap {
  font-family: var(--vp-font-family-base, -apple-system, sans-serif);
  max-width: 560px;
  margin: 0 0 20px;
  position: relative;
}
.hs-field {
  position: relative;
  display: flex;
  align-items: center;
}
.hs-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
  pointer-events: none;
}
.hs-input {
  width: 100%;
  height: 48px; /* ≥44px touch target */
  padding: 0 40px 0 44px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  font-size: 15px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.hs-input::placeholder { color: var(--vp-c-text-3); }
.hs-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent);
}
.hs-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.hs-clear:hover { background: var(--vp-c-bg-mute); color: var(--vp-c-text-1); }
.hs-drop {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 30;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  animation: hs-in 0.15s ease-out;
}
@keyframes hs-in {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.hs-list { list-style: none; margin: 0; padding: 6px; max-height: 380px; overflow-y: auto; }
.hs-item { border-radius: 8px; }
.hs-item.active { background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent); }
.hs-link {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 8px 10px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
}
.hs-item.active .hs-link { color: var(--vp-c-brand-1); }
.hs-badge {
  flex: none;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
}
.hs-badge-entities { color: var(--vp-c-brand-1); border-color: color-mix(in srgb, var(--vp-c-brand-1) 35%, transparent); }
.hs-badge-concepts { color: var(--vp-c-text-2); }
.hs-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.hs-tags { flex: none; display: flex; gap: 4px; }
.hs-tag {
  font-size: 10.5px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  padding: 1px 6px;
  border-radius: 999px;
}
.hs-foot {
  margin: 0;
  padding: 8px 12px;
  font-size: 11px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-mute);
}
.hs-none {
  position: absolute;
  top: calc(100% + 6px);
  left: 0; right: 0;
  z-index: 30;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}
@media (max-width: 640px) {
  .hs-wrap { max-width: 100%; }
  .hs-input { height: 44px; font-size: 16px; } /* prevent iOS zoom */
}
</style>
