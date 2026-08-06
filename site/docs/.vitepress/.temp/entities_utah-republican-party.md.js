import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Utah Republican Party","description":"","frontmatter":{"title":"Utah Republican Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["utah","republican-party","redistricting","ballot-initiative"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/utah-republican-party.md","filePath":"entities/utah-republican-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/utah-republican-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utah-republican-party" tabindex="-1">Utah Republican Party <a class="header-anchor" href="#utah-republican-party" aria-label="Permalink to &quot;Utah Republican Party&quot;">​</a></h1><p>The Utah Republican Party is the state affiliate of the Republican Party in Utah. In October 2025 it took an unusual dual posture in the state&#39;s court-ordered redistricting litigation.[1]</p><p>The party mounted an effort to block the congressional map that the GOP-controlled Utah Legislature had advanced earlier that month — the same map the party had encouraged Republicans to support as the least damaging option available — while simultaneously pursuing what is known as an &quot;indirect initiative&quot; to overturn the state&#39;s independent redistricting law.[1]</p><p>These maneuvers unfolded as 3rd District Judge <a href="/entities/dianna-gibson">Dianna Gibson</a> faced a November 10 deadline to select the congressional boundaries to be used in the 2026 election, with legislative attorneys and plaintiffs each accusing the other of producing a partisan gerrymander.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/utah-republican-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utahRepublicanParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  utahRepublicanParty as default
};
