import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Ze'ev Elkin","description":"","frontmatter":{"title":"Ze'ev Elkin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","finance-ministry","gaza","board-of-peace",2026],"sources":["raw/badlands-brief-285.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ze-ev-elkin.md","filePath":"entities/ze-ev-elkin.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/ze-ev-elkin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ze-ev-elkin" tabindex="-1">Ze&#39;ev Elkin <a class="header-anchor" href="#ze-ev-elkin" aria-label="Permalink to &quot;Ze&#39;ev Elkin&quot;">​</a></h1><p>Ze&#39;ev Elkin is an Israeli politician associated with the country&#39;s Finance Ministry who featured in Badlands coverage of February 2026 as one of several Israeli officials publicly distancing their government from US-led postwar arrangements in Gaza.[1]</p><h2 id="refusal-to-fund-gaza-reconstruction" tabindex="-1">Refusal to fund Gaza reconstruction <a class="header-anchor" href="#refusal-to-fund-gaza-reconstruction" aria-label="Permalink to &quot;Refusal to fund Gaza reconstruction&quot;">​</a></h2><p>Elkin asserted that <a href="/entities/israel">Israel</a> would not financially contribute to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s <a href="/entities/board-of-peace">Board of Peace</a>, the US-backed postwar Gaza panel.[1] Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cited the statement as one item in a catalogue of Israeli disrespect toward Trump&#39;s peace initiative, alongside Finance Minister <a href="/entities/bezalel-smotrich">Bezalel Smotrich</a>&#39;s declaration that Israel would ultimately occupy Gaza and reestablish settlements, and the formal rejection of the Board of Peace by top officials in <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>&#39;s government the previous month.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tuckabee Unites The Arab World As Mexico Courts Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-285" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-285</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ze-ev-elkin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zeEvElkin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zeEvElkin as default
};
