import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rome Statute","description":"","frontmatter":{"title":"Rome Statute","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["international-law","icc","treaty","sovereignty"],"sources":["raw/badlands-brief-245.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/rome-statute.md","filePath":"concepts/rome-statute.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/rome-statute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rome-statute" tabindex="-1">Rome Statute <a class="header-anchor" href="#rome-statute" aria-label="Permalink to &quot;Rome Statute&quot;">​</a></h1><p>The Rome Statute is the treaty that establishes the jurisdiction of the <a href="/entities/international-criminal-court">International Criminal Court</a>. Its significance in July 2026 U.S. debate is that the United States is not a party to it.[1]</p><p>Reuters reported that because the United States has not joined the Rome Statute, U.S. law provides no domestic mechanism requiring state or local officials to enforce ICC arrest warrants — the legal basis for the conclusion that New York City could not execute the ICC&#39;s 2024 warrant for Israeli Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> despite Mayor <a href="/entities/zohran-mamdani">Zohran Mamdani</a>&#39;s stated intent.[1] The same non-party status underpins Secretary of State <a href="/entities/marco-rubio">Marco Rubio</a>&#39;s argument that the court improperly targets American military personnel and officials, and the <a href="/entities/state-department">State Department</a>&#39;s campaign urging other countries to withdraw from the court, as <a href="/entities/venezuela">Venezuela</a> did.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Roasts The Press; Teases 2028 Run&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-245" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-245</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/rome-statute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const romeStatute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  romeStatute as default
};
