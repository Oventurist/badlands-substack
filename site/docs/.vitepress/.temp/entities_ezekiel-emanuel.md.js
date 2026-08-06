import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ezekiel Emanuel","description":"","frontmatter":{"title":"Ezekiel Emanuel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["health-policy","bioethics","emanuel-family"],"sources":["raw/badlands-news-brief-3a5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ezekiel-emanuel.md","filePath":"entities/ezekiel-emanuel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ezekiel-emanuel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ezekiel-emanuel" tabindex="-1">Ezekiel Emanuel <a class="header-anchor" href="#ezekiel-emanuel" aria-label="Permalink to &quot;Ezekiel Emanuel&quot;">​</a></h1><p>Ezekiel Emanuel is a physician and health-policy figure, and a brother of <a href="/entities/ari-emanuel">Ari Emanuel</a> and <a href="/entities/rahm-emanuel">Rahm Emanuel</a>.[1]</p><p>Badlands contributor Chris Paul characterized him as &quot;a doctor who believes people should die at 75 for the good of everyone,&quot; a reference to his published argument about the optimal length of a human life.[1] The same commentary noted that the Emanuel brothers&#39; father belonged to the <a href="/entities/irgun">Irgun</a>, and situated the family within a discussion of <a href="/entities/endeavor">Endeavor</a>&#39;s influence over the <a href="/concepts/2028-los-angeles-olympics">2028 Los Angeles Olympics</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Inbound America: Terrorists, Trillions, &amp; Diplomats&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3a5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3a5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ezekiel-emanuel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ezekielEmanuel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ezekielEmanuel as default
};
