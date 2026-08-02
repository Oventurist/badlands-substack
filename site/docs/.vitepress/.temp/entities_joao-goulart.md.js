import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"João Goulart","description":"","frontmatter":{"title":"João Goulart","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["brazil","cold-war","coup"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/joao-goulart.md","filePath":"entities/joao-goulart.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joao-goulart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joao-goulart" tabindex="-1">João Goulart <a class="header-anchor" href="#joao-goulart" aria-label="Permalink to &quot;João Goulart&quot;">​</a></h1><p>João Goulart (1919–1976) was a Brazilian politician who served as President of Brazil from 1961 until his overthrow in the 1964 military coup. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Goulart is cited as a head of government brought down with assistance from U.S.-trained labor operatives.</p><h2 id="the-1964-brazilian-coup" tabindex="-1">The 1964 Brazilian coup <a class="header-anchor" href="#the-1964-brazilian-coup" aria-label="Permalink to &quot;The 1964 Brazilian coup&quot;">​</a></h2><p>The article states that in Brazil&#39;s 1964 coup, &quot;AIFLD alumni in the metalworkers&#39; union provided intelligence to the CIA and the DoD, justifying military intervention against President João Goulart.&quot; The episode is presented as part of the pattern of the <a href="/entities/afl-cio">AFL-CIO</a>&#39;s <a href="/entities/american-institute-for-free-labor-development">American Institute for Free Labor Development</a> providing intelligence and destabilization support for U.S.-backed regime change in Latin America.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joao-goulart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joaoGoulart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joaoGoulart as default
};
