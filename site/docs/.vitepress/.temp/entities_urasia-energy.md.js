import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UrAsia Energy","description":"","frontmatter":{"title":"UrAsia Energy","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["uranium","mining","kazakhstan","canada"],"sources":["raw/america-for-sale-part-3.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/urasia-energy.md","filePath":"entities/urasia-energy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/urasia-energy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="urasia-energy" tabindex="-1">UrAsia Energy <a class="header-anchor" href="#urasia-energy" aria-label="Permalink to &quot;UrAsia Energy&quot;">​</a></h1><p>UrAsia Energy Ltd. was a Canadian uranium mining company founded by the financier <a href="/entities/frank-giustra">Frank Giustra</a>. It is described in the Badlands Media essay <a href="/concepts/america-for-sale-part-3">America for Sale — Part 3</a> as the vehicle through which the <a href="/entities/uranium-one">Uranium One</a> affair began.</p><p>According to New York Times reporting quoted in the article, within days of Giustra&#39;s September 2005 visit to Almaty, <a href="/entities/kazakhstan">Kazakhstan</a> — undertaken aboard his private jet in the company of <a href="/entities/bill-clinton">Bill Clinton</a>, and including a dinner with president Nursultan Nazarbayev — &quot;Mr. Giustra&#39;s fledgling company, UrAsia Energy Ltd., signed a preliminary deal giving it stakes in three uranium mines controlled by the state-run uranium agency Kazatomprom.&quot; The Badlands author characterises the arrangement as a sweetheart deal obtained for a kickback, and notes it transformed a small firm into a major player in the uranium industry.</p><p>In 2007 UrAsia merged with Uranium One, &quot;a South African company with assets in Africa and Australia,&quot; in what was described as a $3.5 billion transaction. The merged entity retained the Uranium One name and was controlled by UrAsia investors, including <a href="/entities/ian-telfer">Ian Telfer</a>, who became chairman. The Kazakh mines acquired by UrAsia remained, in the Times&#39;s phrase, Uranium One&#39;s &quot;most valuable asset,&quot; and the article emphasises that reported contributions of between $1.3 million and $5.6 million to the <a href="/entities/clinton-foundation">Clinton Foundation</a> came from &quot;a constellation of people with ties to Uranium One or UrAsia,&quot; among them the Russian investor <a href="/entities/sergei-kurzin">Sergei Kurzin</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/urasia-energy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const urasiaEnergy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  urasiaEnergy as default
};
