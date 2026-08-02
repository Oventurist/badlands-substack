import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shia Islam","description":"","frontmatter":{"title":"Shia Islam","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["islam","shia-islam","succession","iran"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/shia-islam.md","filePath":"concepts/shia-islam.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/shia-islam.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shia-islam" tabindex="-1">Shia Islam <a class="header-anchor" href="#shia-islam" aria-label="Permalink to &quot;Shia Islam&quot;">​</a></h1><p>Shia Islam is the minority branch of Islam, comprising by the estimate given in <a href="/concepts/arabian-nights">arabian-nights</a> roughly 10 to 15 percent of all Muslims and concentrated in modern Iran and throughout the region of Persia.</p><p>The source traces the division to the disputed interpretation of a single word. <a href="/entities/prophet-muhammad">Muhammad</a> once called <a href="/entities/ali-ibn-abi-talib">Ali</a> a <em>Mawla</em>, an Arabic term variously rendered as &quot;lord,&quot; &quot;trustee&quot; or &quot;helper,&quot; and had also called him his brother, guardian and successor. On Muhammad&#39;s death, some followers concluded that Ali — who had been raised by Muhammad from the age of five and was like a son and brother to him — was his chosen heir, and that therefore only descendants of Ali can qualify to lead Islam. Those adherents are the Shia. The <a href="/concepts/sunni-islam">Sunni</a> majority instead held that no heir had been named, and elected <a href="/entities/abu-bakr">abu-bakr</a> to begin the <a href="/concepts/rashidun-caliphate">rashidun-caliphate</a>.</p><p>Shia Muslims apply the phrase <em>Ahl al-Bayt</em>, &quot;People of the House [of the Prophet],&quot; narrowly, restricting it to Muhammad&#39;s cousin, daughter, son-in-law, two grandsons and eleven wives, in contrast to the broader Sunni usage. The article identifies Iran — ancient Persia — as the Shia homeland, with Afghanistan and Iraq both mixed, and argues that this mixture reflects arbitrary conditions intentionally created by the British Crown and the <a href="/entities/east-india-company">east-india-company</a> at the end of the First World War.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/shia-islam.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shiaIslam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shiaIslam as default
};
