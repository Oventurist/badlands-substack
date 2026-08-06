import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barbara Comstock","description":"","frontmatter":{"title":"Barbara Comstock","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republicans","virginia","2024-election"],"sources":["raw/badlands-news-brief-2f2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/barbara-comstock.md","filePath":"entities/barbara-comstock.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barbara-comstock.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barbara-comstock" tabindex="-1">Barbara Comstock <a class="header-anchor" href="#barbara-comstock" aria-label="Permalink to &quot;Barbara Comstock&quot;">​</a></h1><p>Barbara Comstock is a former Republican member of the United States House of Representatives from Virginia.[1]</p><h2 id="_2024-endorsement-of-kamala-harris" tabindex="-1">2024 endorsement of Kamala Harris <a class="header-anchor" href="#_2024-endorsement-of-kamala-harris" aria-label="Permalink to &quot;2024 endorsement of Kamala Harris&quot;">​</a></h2><p>Comstock was among the former Republican lawmakers who joined more than 100 former national security officials in signing the September 2024 letter endorsing Vice President <a href="/entities/kamala-harris">Kamala Harris</a> and opposing <a href="/entities/donald-trump">Donald Trump</a>.[1] Other ex-GOP lawmakers signing alongside her included <a href="/entities/adam-kinzinger">Adam Kinzinger</a> of Illinois.[1] See <a href="/concepts/2024-republican-national-security-endorsement-of-harris">2024 Republican National Security Endorsement of Kamala Harris</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Israel Strikes Again as The FED Pivots&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barbara-comstock.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barbaraComstock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barbaraComstock as default
};
