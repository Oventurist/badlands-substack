import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tammany Hall","description":"","frontmatter":{"title":"Tammany Hall","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["political-machine","election-fraud","new-york","corruption"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/tammany-hall.md","filePath":"entities/tammany-hall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tammany-hall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tammany-hall" tabindex="-1">Tammany Hall <a class="header-anchor" href="#tammany-hall" aria-label="Permalink to &quot;Tammany Hall&quot;">​</a></h1><p>Tammany Hall was the Democratic Party political machine that dominated New York City politics in the nineteenth century. It is invoked in the essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a> as a historical illustration of the claim that &quot;election denialism is often a response to election fraud.&quot;</p><p>The article recounts that William &quot;Boss&quot; Tweed rose to power through Tammany Hall in 1863 and that by 1871 his corruption and abuse of power were widely known. It quotes Tweed biographer Kenneth D. Ackerman: &quot;It&#39;s hard not to admire the skill behind Tweed&#39;s system ... The Tweed ring at its height was an engineering marvel, strong and solid, strategically deployed to control key power points: the courts, the legislature, the treasury and the ballot box. Its frauds had a grandeur of scale and an elegance of structure: money-laundering, profit sharing and organization.&quot; The essay notes that Tweed punished those who questioned his electoral practices and that he died in prison in 1878. It reproduces Thomas Nast&#39;s cartoon &quot;Naturalization Mill,&quot; published in <em>Harper&#39;s Weekly</em> on October 24, 1868, as contemporaneous documentation of machine-driven vote manufacturing.</p><p>Tammany Hall appears in the article&#39;s broader chronology of American electoral disputes, alongside the 1876 Tilden–Hayes commission, the &quot;colonizers,&quot; &quot;floaters,&quot; and &quot;repeaters&quot; of the 1888 election, and the secret-ballot reform movement that reached 38 states by 1892.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tammany-hall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tammanyHall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tammanyHall as default
};
