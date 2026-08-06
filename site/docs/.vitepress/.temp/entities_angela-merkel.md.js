import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Angela Merkel","description":"","frontmatter":{"title":"Angela Merkel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","europe","energy","g7"],"sources":["raw/badlands-brief-195.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/angela-merkel.md","filePath":"entities/angela-merkel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/angela-merkel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="angela-merkel" tabindex="-1">Angela Merkel <a class="header-anchor" href="#angela-merkel" aria-label="Permalink to &quot;Angela Merkel&quot;">​</a></h1><p>Angela Merkel is the former German chancellor whose government deepened Germany&#39;s reliance on <a href="/entities/russia">Russian</a> energy imports.[1]</p><h2 id="trump-s-2018-warning" tabindex="-1">Trump&#39;s 2018 warning <a class="header-anchor" href="#trump-s-2018-warning" aria-label="Permalink to &quot;Trump&#39;s 2018 warning&quot;">​</a></h2><p>Badlands commentary recalls that President <a href="/entities/donald-trump">Donald Trump</a> warned Merkel and other European leaders on June 9, 2018, at the Group of Seven summit in Canada about the predicament of depending on Russia for energy while expecting American funding for European defense — a confrontation remembered largely through a widely circulated meme image.[1] The warning was cited in 2026 as prescient amid the <a href="/concepts/european-fuel-supply-crisis-2026">European fuel supply crisis</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Crypto Smears, Professional Plotlines, &amp; Meat Probes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-195" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-195</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/angela-merkel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const angelaMerkel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  angelaMerkel as default
};
