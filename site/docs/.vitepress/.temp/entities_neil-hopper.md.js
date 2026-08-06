import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Neil Hopper","description":"","frontmatter":{"title":"Neil Hopper","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","medicine","fraud","crime"],"sources":["raw/badlands-news-brief-7d4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/neil-hopper.md","filePath":"entities/neil-hopper.md","lastUpdated":null}');
const _sfc_main = { name: "entities/neil-hopper.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="neil-hopper" tabindex="-1">Neil Hopper <a class="header-anchor" href="#neil-hopper" aria-label="Permalink to &quot;Neil Hopper&quot;">​</a></h1><p>Neil Hopper is a British vascular surgeon who was once described as the &quot;bravest in Britain&quot; after both of his legs were amputated.[1] At age 49 he pleaded guilty to two fraud charges after telling insurers that his legs had required removal because of sepsis rather than a self-inflicted injury.[1]</p><p>According to reports from inside the courtroom, Hopper had frozen his own legs with ice and dry ice to ensure they would be removed.[1] Testimony laid out against him described an &quot;obsession with removing parts of his own body and a sexual interest in doing so.&quot;[1] Hopper had himself performed hundreds of amputation operations during his career.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Funding Freezes, Russian Oil, &amp; Imminent Exposes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7d4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7d4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/neil-hopper.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const neilHopper = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  neilHopper as default
};
