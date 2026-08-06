import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federal Records Act","description":"","frontmatter":{"title":"Federal Records Act","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","records","transparency","government"],"sources":["raw/badlands-news-brief-03a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/federal-records-act.md","filePath":"concepts/federal-records-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/federal-records-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federal-records-act" tabindex="-1">Federal Records Act <a class="header-anchor" href="#federal-records-act" aria-label="Permalink to &quot;Federal Records Act&quot;">​</a></h1><p>The Federal Records Act is the United States statute requiring federal officials to preserve communications related to government business.[1]</p><p>Agencies typically implement the law with respect to encrypted messaging platforms by mandating that messages be forwarded to official systems or otherwise archived.[1]</p><h2 id="_2025-signal-litigation" tabindex="-1">2025 Signal litigation <a class="header-anchor" href="#_2025-signal-litigation" aria-label="Permalink to &quot;2025 Signal litigation&quot;">​</a></h2><p>The Act was the central legal hook in the March 2025 lawsuit brought by <a href="/entities/american-oversight">American Oversight</a> against Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> and other Trump administration officials over their use of <a href="/concepts/signal">Signal</a> to discuss strikes on Houthi targets in Yemen.[1] The watchdog argued that messages set to auto-delete on the commercial app amounted to unlawful destruction of federal records, and asked the court to recover deleted messages and prevent further destruction.[1] <a href="/entities/marco-rubio">Marco Rubio</a> was named in the suit in his capacity as acting archivist, the office with custodial responsibility for federal records, as well as secretary of state.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-03a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-03a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/federal-records-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalRecordsAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalRecordsAct as default
};
