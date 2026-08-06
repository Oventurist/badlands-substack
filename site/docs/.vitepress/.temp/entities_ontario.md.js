import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ontario","description":"","frontmatter":{"title":"Ontario","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["canada","provinces","tariffs","trade","advertising"],"sources":["raw/badlands-news-brief-545.md"],"confidence":"high"},"headers":[],"relativePath":"entities/ontario.md","filePath":"entities/ontario.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ontario.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ontario" tabindex="-1">Ontario <a class="header-anchor" href="#ontario" aria-label="Permalink to &quot;Ontario&quot;">​</a></h1><p>Ontario is the Canadian province whose government, led by Premier <a href="/entities/doug-ford">Doug Ford</a>, paid for a televised advertisement that triggered a rupture in US–Canada trade talks in October 2025.[1]</p><h2 id="reagan-tariff-advertisement" tabindex="-1">Reagan tariff advertisement <a class="header-anchor" href="#reagan-tariff-advertisement" aria-label="Permalink to &quot;Reagan tariff advertisement&quot;">​</a></h2><p>The advertisement used audio from an address by former President <a href="/entities/ronald-reagan">Ronald Reagan</a> criticizing tariffs.[1] <a href="/entities/donald-trump">Donald Trump</a> called the ad &quot;fraudulent,&quot; suspended trade talks with Canada, and said he would impose an additional 10 percent tariff on Canadian goods as punishment.[1] Ford announced on Friday, after speaking with Prime Minister <a href="/entities/mark-carney">Mark Carney</a>, that the ad would stop airing on Monday.[1]</p><p>The episode illustrated Canada&#39;s broader approach to managing Trump — described as removing all irritants — which had already included walking back retaliatory tariffs and suspending, in June, a tax on American technology companies after Trump threatened to end negotiations until it was lifted.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdown Consequences, Canadian Propaganda, &amp; Console War Conclusions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-545" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-545</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ontario.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ontario = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ontario as default
};
