import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Decision Desk HQ","description":"","frontmatter":{"title":"Decision Desk HQ","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","forecasting","data-journalism"],"sources":["raw/badlands-news-brief-481.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/decision-desk-hq.md","filePath":"entities/decision-desk-hq.md","lastUpdated":null}');
const _sfc_main = { name: "entities/decision-desk-hq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="decision-desk-hq" tabindex="-1">Decision Desk HQ <a class="header-anchor" href="#decision-desk-hq" aria-label="Permalink to &quot;Decision Desk HQ&quot;">​</a></h1><p>Decision Desk HQ is an American election data and forecasting organization that produces a presidential election model in partnership with <a href="/entities/the-hill">The Hill</a>.[1]</p><h2 id="_2024-forecast-shift" tabindex="-1">2024 forecast shift <a class="header-anchor" href="#_2024-forecast-shift" aria-label="Permalink to &quot;2024 forecast shift&quot;">​</a></h2><p>On Sunday, October 20, 2024, former President <a href="/entities/donald-trump">Donald Trump</a> overtook Vice President <a href="/entities/kamala-harris">Kamala Harris</a> for the first time in the Decision Desk HQ/The Hill election forecast during the 2024 cycle.[1] The model gave Trump a 52 percent chance of winning the presidency against 42 percent for Harris as of that Sunday.[1]</p><p>From late August, the forecast had put Harris&#39;s chances at approximately 54 to 56 percent and Trump&#39;s at roughly 44 to 46 percent.[1] Those dynamics began shifting in early October, with the model moving both candidates closer to 50 percent; on October 17 it rated the two as equally likely to win, and Trump took the advantage on October 20.[1]</p><p>The shift coincided with improved polling averages for Trump in Wisconsin and Michigan, two battleground states that had previously leaned slightly toward Harris, while Trump already held slim advantages in Arizona, Georgia and North Carolina.[1] Of the seven swing states seen as decisive in determining the 2024 outcome, Pennsylvania was alone in still favoring Harris in its polling average.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Donald&#39;s Drive-Thru Goes Viral as Iran Makes Moves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-481" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-481</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/decision-desk-hq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const decisionDeskHq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  decisionDeskHq as default
};
