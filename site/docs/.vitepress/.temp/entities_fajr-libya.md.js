import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fajr Libya","description":"","frontmatter":{"title":"Fajr Libya","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["libya","militia"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/fajr-libya.md","filePath":"entities/fajr-libya.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fajr-libya.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fajr-libya" tabindex="-1">Fajr Libya <a class="header-anchor" href="#fajr-libya" aria-label="Permalink to &quot;Fajr Libya&quot;">​</a></h1><p>Fajr Libya ( Dawn of Libya) is a militia coalition that emerged in Libya following the 2011 revolution and the fall of <a href="/entities/muammar-gaddafi">Muammar Gaddafi</a>. In the Badlands Media article &quot;A Conflict of Interest,&quot; Fajr Libya is identified as a political and military force with which <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a> remained influential in the years after Gaddafi&#39;s overthrow.</p><p>According to the article, Belhaj &quot;remains influential with the government in Tripoli and the Fajr Libya militia coalition&quot; as of 2016, while keeping out of the fighting as he expanded his business interests. The source notes that United Nations special representative for Libya Martin Kobler was negotiating with Belhaj and other militia leaders to install Fayez El Sarraj&#39;s national unity government in Tripoli, and that Belhaj was thus &quot;continuing to play a key role in the discussions with the international community.&quot;</p><p>The article frames Fajr Libya as part of the broader network of Islamist militias that took control of Libya after Gaddafi&#39;s fall, and suggests that Belhaj&#39;s influence within the coalition was evidence that terrorist networks had successfully transitioned from insurgency to political power. The source claims that this transition was facilitated by the <a href="/entities/cia">CIA</a> and the Obama administration, which had released Belhaj from prison in 2009 and supported his rise to power.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fajr-libya.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fajrLibya = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fajrLibya as default
};
