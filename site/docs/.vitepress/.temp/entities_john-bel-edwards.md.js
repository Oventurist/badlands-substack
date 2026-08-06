import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Bel Edwards","description":"","frontmatter":{"title":"John Bel Edwards","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["louisiana","democrats","governors","elections"],"sources":["raw/badlands-news-brief-780.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-bel-edwards.md","filePath":"entities/john-bel-edwards.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-bel-edwards.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-bel-edwards" tabindex="-1">John Bel Edwards <a class="header-anchor" href="#john-bel-edwards" aria-label="Permalink to &quot;John Bel Edwards&quot;">​</a></h1><p>John Bel Edwards is a Democratic politician who served as governor of <a href="/entities/louisiana">Louisiana</a> and was, at the time of the October 2023 gubernatorial election, the only sitting Democratic governor in the Deep South.[1]</p><h2 id="term-limit-and-succession" tabindex="-1">Term limit and succession <a class="header-anchor" href="#term-limit-and-succession" aria-label="Permalink to &quot;Term limit and succession&quot;">​</a></h2><p>Edwards reached his term limit in 2023 and was succeeded by Republican <a href="/entities/jeff-landry">Jeff Landry</a>, the state attorney general, who won the gubernatorial race outright in the October 14 jungle primary by taking more than 50 percent of the vote.[1] Landry&#39;s victory handed Republicans control of Louisiana&#39;s top executive office for the first time since 2016.[1]</p><p>Commentary from <a href="/entities/ashe-in-america">Ashe in America</a> described the preceding eight years under Edwards as a period of divided government in which a Republican legislature contended with a veto-heavy Democratic governor, and framed the 2023 flip as clearing the way for Republicans to advance their agenda for the state.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: US Carriers, FBI Warnings &amp; Election Wins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-780" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-780</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-bel-edwards.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnBelEdwards = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnBelEdwards as default
};
