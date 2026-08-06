import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wesley Clark","description":"","frontmatter":{"title":"Wesley Clark","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pentagon","foreign-policy","regime-change"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/wesley-clark.md","filePath":"entities/wesley-clark.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wesley-clark.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wesley-clark" tabindex="-1">Wesley Clark <a class="header-anchor" href="#wesley-clark" aria-label="Permalink to &quot;Wesley Clark&quot;">​</a></h1><p>General Wesley K. Clark is a retired U.S. Army general who ran for president in 2008 as a Democrat.[1]</p><p>Badlands Media cites Clark for what it calls a stunning but highly relevant admission made in 2007: that after 9/11 he saw a memo in the <a href="/entities/pentagon">Pentagon</a> outlining a plan to &quot;take out seven countries in five years, starting with Iraq and then Syria, Lebanon, Libya, Somalia, Sudan, and finishing off with Iran.&quot;[1] The article treats Clark&#39;s account as corroboration that the neoconservative faction associated with the <a href="/entities/project-for-the-new-american-century">Project for the New American Century</a> had targeted Syria since at least the 1990s, framing the December 2024 fall of <a href="/entities/bashar-al-assad">Bashar al-Assad</a> as the delayed execution of that plan.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wesley-clark.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wesleyClark = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wesleyClark as default
};
