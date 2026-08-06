import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Great Migration","description":"","frontmatter":{"title":"Great Migration","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["migration","wef","globalism","europe"],"sources":["raw/badlands-brief-739.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/great-migration.md","filePath":"concepts/great-migration.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/great-migration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="great-migration" tabindex="-1">Great Migration <a class="header-anchor" href="#great-migration" aria-label="Permalink to &quot;Great Migration&quot;">​</a></h1><p>The &quot;Great Migration&quot; is a term used in Badlands commentary to describe what contributor Ashe in America characterized as a transformational change program pushed by the <a href="/entities/world-economic-forum">World Economic Forum</a> and its partners over the past two decades to reshape the demographic composition of Western nations.[1]</p><p>The framing was invoked in May 2026 in connection with the &quot;<a href="/concepts/unite-the-kingdom-rally">Unite the Kingdom</a>&quot; rally and reports of neighborhood patrols in the <a href="/entities/united-kingdom">United Kingdom</a> and France, with the argument that both the problem statement and proposed solutions in mainstream coverage are the work product of that program, and that opposing it constitutes good sense rather than bigotry.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/great-migration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const greatMigration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  greatMigration as default
};
