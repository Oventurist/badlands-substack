import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rick Rieder","description":"","frontmatter":{"title":"Rick Rieder","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["blackrock","finance","federal-reserve","nominations"],"sources":["raw/badlands-brief-1ce.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rick-rieder.md","filePath":"entities/rick-rieder.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rick-rieder.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rick-rieder" tabindex="-1">Rick Rieder <a class="header-anchor" href="#rick-rieder" aria-label="Permalink to &quot;Rick Rieder&quot;">​</a></h1><p>Rick Rieder is <a href="/entities/blackrock">BlackRock</a>&#39;s Chief Investment Officer for Global Fixed Income and Chief Bond Investment Manager.[1] In January 2026 he was reported to be among the candidates considered to replace <a href="/entities/jerome-powell">Jerome Powell</a> as Chair of the <a href="/entities/federal-reserve">Federal Reserve</a>, on a shortlist vetted by Treasury Secretary <a href="/entities/scott-bessent">Scott Bessent</a>.[1]</p><p>Some reports on January 29, 2026 alleged that Rieder had been informed he would not receive the nomination.[1] Like the other candidates — <a href="/entities/kevin-warsh">Kevin Warsh</a>, <a href="/entities/kevin-hassett">Kevin Hassett</a>, and <a href="/entities/christopher-waller">Christopher Waller</a> — he was characterized as supportive of cutting interest rates.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;African Acceleration, Powell&#39;s Replacement, &amp; MEGA Democracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1ce" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1ce</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rick-rieder.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rickRieder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rickRieder as default
};
