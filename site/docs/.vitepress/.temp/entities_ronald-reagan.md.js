import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ronald Reagan","description":"","frontmatter":{"title":"Ronald Reagan","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","president","hollywood","cold-war"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/ronald-reagan.md","filePath":"entities/ronald-reagan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ronald-reagan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ronald-reagan" tabindex="-1">Ronald Reagan <a class="header-anchor" href="#ronald-reagan" aria-label="Permalink to &quot;Ronald Reagan&quot;">​</a></h1><p>Ronald Reagan was the 40th President of the United States and, before that, a Hollywood actor. In the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, Reagan functions as the historical precedent for the thesis that a president can consciously use the film industry as an instrument of national morale.</p><p>The article states that Reagan &quot;took control of Hollywood during his eight years in office,&quot; pushing for movies that promoted strong American characters such as Rambo, and that the films of his presidency made the American military seem powerful — inspiring Americans while intimidating foreign adversaries. It notes that the original <em>Top Gun</em> was released in 1986, during Reagan&#39;s presidency, and describes it as &quot;the biggest military recruiting tool ever created.&quot;</p><p><a href="/entities/erik-carlson">Erik Carlson</a> repeatedly calls <a href="/entities/donald-trump">Donald Trump</a> &quot;Reagan 2.0,&quot; clarifying that he means not a continuation of Reagan&#39;s efforts but &quot;a vastly improved version — a version that doesn&#39;t include compromising with the enemy.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ronald-reagan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ronaldReagan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ronaldReagan as default
};
