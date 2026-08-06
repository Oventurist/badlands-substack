import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TASS","description":"","frontmatter":{"title":"TASS","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","russia","state-media","news-agency"],"sources":["raw/badlands-news-brief-565.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tass.md","filePath":"entities/tass.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tass.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tass" tabindex="-1">TASS <a class="header-anchor" href="#tass" aria-label="Permalink to &quot;TASS&quot;">​</a></h1><p>TASS is Russia&#39;s state news agency and one of the principal channels through which statements by Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> and other senior officials reach both domestic and international audiences.[1] In the <a href="/entities/badlands-media">Badlands Media</a> corpus it is frequently cited as a primary-source outlet for Russian government positions that Western wire services either omit or paraphrase unfavorably.[1]</p><h2 id="coverage-cited-in-june-2024" tabindex="-1">Coverage cited in June 2024 <a class="header-anchor" href="#coverage-cited-in-june-2024" aria-label="Permalink to &quot;Coverage cited in June 2024&quot;">​</a></h2><p>TASS supplied two reports that anchored the June 21, 2024 edition of the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1] The first carried Putin&#39;s declaration, following negotiations with North Korean leader <a href="/entities/kim-jong-un">Kim Jong Un</a>, that the <a href="/entities/united-nations-security-council">UN Security Council</a> sanctions regime against <a href="/entities/north-korea">North Korea</a> — which he described as &quot;inspired by the United States and its allies&quot; — &quot;must be revised.&quot;[1] In the same remarks Putin said that propaganda cliches reproduced by Western countries could no longer disguise their aggressive geopolitical plans in North-East Asia, and that Moscow and Pyongyang would continue to oppose &quot;the practice of sanctions strangulation as a tool that the West is accustomed to using to maintain its hegemony.&quot;[1]</p><p>The second TASS report covered Putin&#39;s meeting in Hanoi with Vietnamese National Assembly Chairman <a href="/entities/tran-thanh-man">Tran Thanh Man</a>, at which Putin praised parliamentary cooperation between Russia and <a href="/entities/vietnam">Vietnam</a> as a foundation for security, economic and humanitarian ties.[1] A third TASS item, on Kim Jong Un&#39;s gift of a set of dogs to Putin, was cited in passing by Badlands commentary.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Polling Paradoxes, Hegelian Seeding &amp; Putin&#39;s Gambit&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-565" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-565</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tass.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tass = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tass as default
};
