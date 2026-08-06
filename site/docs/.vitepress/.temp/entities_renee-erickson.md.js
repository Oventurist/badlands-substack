import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Renee Erickson","description":"","frontmatter":{"title":"Renee Erickson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["kansas","state-senate","republican","legislation","gender"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/renee-erickson.md","filePath":"entities/renee-erickson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/renee-erickson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="renee-erickson" tabindex="-1">Renee Erickson <a class="header-anchor" href="#renee-erickson" aria-label="Permalink to &quot;Renee Erickson&quot;">​</a></h1><p>Renee Erickson is a Republican member of the <a href="/entities/kansas-senate">Kansas Senate</a> who introduced the state&#39;s &quot;women&#39;s bill of rights,&quot; legislation defining a &quot;woman&quot; as a biological female under Kansas law.[1]</p><p>Erickson told The Washington Times that her legislation &quot;does not deal with gender identity,&quot; but rather &quot;simply codif[ies] in the law the definition of sex.&quot;[1] She argued the bill protects women&#39;s rights, stating that &quot;there are legitimate reasons to distinguish between the sexes with respect to prisons, domestic violence shelters, rape crisis centers and other areas where safety and privacy are needed,&quot; and that the measure &quot;does not create any new rights or entitlements. It simply codifies the definition of sex as biological male and female in existing statutes and laws.&quot;[1]</p><p>The bill, Senate Bill 180, passed the Kansas Senate 26–10 without any Democratic support.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/renee-erickson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reneeErickson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reneeErickson as default
};
