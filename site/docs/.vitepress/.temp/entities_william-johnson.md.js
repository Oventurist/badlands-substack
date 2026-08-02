import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Johnson","description":"","frontmatter":{"title":"William Johnson","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["colonial-america","mohawk","diplomacy","seven-years-war"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/william-johnson.md","filePath":"entities/william-johnson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-johnson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-johnson" tabindex="-1">William Johnson <a class="header-anchor" href="#william-johnson" aria-label="Permalink to &quot;William Johnson&quot;">​</a></h1><p>William Johnson was an Irish-born colonist who moved to New York in 1738 and became the principal British intermediary with the <a href="/entities/iroquois-confederacy">Six Nations</a>. He appears prominently in <a href="/entities/benjamin-west">Benjamin West</a>&#39;s 1770 painting <em>The Death of General Wolfe</em>, wearing native stockings and moccasins and pointing toward a soldier running up with a captured fleur-de-lis, and is discussed at length in the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a>.</p><p>According to the source, Johnson refused to observe stuffy British customs and instead built genuine relationships with native peoples, learning several dialects, respecting their customs, and negotiating treaties with the Mohawk and Iroquois. By 1742 he had been made a Mohawk civil chief, and he was made colonel of the Six Nation Mohawks; the Mohawks reportedly requested that he be the official British representative to them because they could work with no one else. Where other British soldiers and officers treated native populations as subhuman savages, Johnson was culturally integrated with them.</p><p>The article assigns him decisive strategic importance. The <a href="/entities/jesuits">Jesuits</a> who controlled the French territories of the Americas had built extensive alliances with native bands and, the source alleges, manipulated them against one another and against colonists. Had the Mohawks and Iroquois sided with the Jesuit-run French, the Battle of Quebec might have gone differently; largely through Johnson&#39;s efforts they fought alongside the English, and &quot;the scales of battle were tipped entirely.&quot; The source notes that in reality no one was near General Wolfe when he died behind a bush with two attendants, and that West&#39;s inclusion of Johnson and a Mohawk warrior at the center of the composition was a deliberate choice of meaning over reportage.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-johnson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamJohnson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamJohnson as default
};
