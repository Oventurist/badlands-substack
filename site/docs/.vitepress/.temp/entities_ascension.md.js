import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ascension","description":"","frontmatter":{"title":"Ascension","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["healthcare","hospitals","cybersecurity","critical-infrastructure"],"sources":["raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ascension.md","filePath":"entities/ascension.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ascension.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ascension" tabindex="-1">Ascension <a class="header-anchor" href="#ascension" aria-label="Permalink to &quot;Ascension&quot;">​</a></h1><p><strong>Ascension</strong> is a St. Louis-based nonprofit health care network that operates 140 hospitals across 19 states and also owns 40 senior living facilities, making it one of the largest health systems in the United States.[1]</p><p>In May 2024 Ascension became the target of a major cyberattack that forced it to divert ambulances away from &quot;several&quot; of its hospitals.[1] The incident disrupted access to electronic health records, some phone systems, and, in the network&#39;s own words, &quot;various systems utilized to order certain tests, procedures and medications.&quot;[1] The organization said it would be operating under &quot;downtime procedure for some time,&quot; a reference to the backup workflows — including paper records — that hospitals fall back on when computer systems are unavailable.[1]</p><p>Four sources briefed on the investigation told <a href="/entities/cnn">CNN</a> that the incident was a ransomware attack carried out with <a href="/entities/black-basta">Black Basta</a> ransomware, a strain repeatedly used against health care organizations.[1] Ascension published its own statement on the cybersecurity event as the disruption unfolded.[1]</p><h2 id="commentary-in-badlands-media" tabindex="-1">Commentary in Badlands Media <a class="header-anchor" href="#commentary-in-badlands-media" aria-label="Permalink to &quot;Commentary in Badlands Media&quot;">​</a></h2><p>Writing in the Badlands News Brief, <a href="/entities/ashe-in-america">Ashe in America</a> argued that the incident illustrated how vulnerable American critical infrastructure has become, noting that the attack degraded the health system&#39;s ability to treat and care for seniors in an election year.[1] She placed the Ascension hack in a sequence of attacks on financial, utility, transportation, and now health care infrastructure, and called for &quot;serious, competent experts in positions of authority over US critical infrastructure.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ascension.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ascension = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ascension as default
};
