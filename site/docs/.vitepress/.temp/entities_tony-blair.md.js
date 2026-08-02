import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tony Blair","description":"","frontmatter":{"title":"Tony Blair","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","united-kingdom","prime-minister","clinton-network"],"sources":["raw/america-for-sale-part-2.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/tony-blair.md","filePath":"entities/tony-blair.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tony-blair.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tony-blair" tabindex="-1">Tony Blair <a class="header-anchor" href="#tony-blair" aria-label="Permalink to &quot;Tony Blair&quot;">​</a></h1><p>Tony Blair is a British politician who served as Prime Minister of the United Kingdom from 1997 to 2007. He appears in the Badlands Media essay <a href="/concepts/america-for-sale-part-2">America for Sale — Part 2</a> as one of three former world leaders who headlined a private <a href="/entities/teneo">Teneo</a> client reception in New York City.</p><p>According to <em>The Washington Times</em>, <a href="/entities/huma-abedin">Huma Abedin</a> — then simultaneously a &quot;special government employee&quot; at the <a href="/entities/state-department">State Department</a> and a paid Teneo consultant — helped stage a September 20, 2012 event at the Essex House at which <a href="/entities/bill-clinton">Bill Clinton</a>, <a href="/entities/george-w-bush">George W. Bush</a> and Blair appeared as speakers. The paper described the reception as entertaining potential Teneo clients by &quot;wowing them with access to three former world leaders on a single stage,&quot; and noted that it took place just days after the <a href="/concepts/benghazi">Benghazi</a> attack.</p><p><a href="/entities/joe-lange">Joe Lange</a> treats the lineup as illustrative of Q drop 299&#39;s claim that Saudi Arabia &quot;controls (assigned) US / UK POLITICIANS,&quot; describing Clinton, Bush and Blair as &quot;puppets&quot; and asserting that <a href="/entities/prince-alwaleed">Prince Alwaleed bin Talal</a> had controlled leading American and British politicians for decades. This characterization is the author&#39;s interpretation rather than a reported fact.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-2" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tony-blair.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tonyBlair = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tonyBlair as default
};
