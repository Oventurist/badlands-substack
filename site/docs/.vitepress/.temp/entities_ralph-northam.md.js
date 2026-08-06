import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ralph Northam","description":"","frontmatter":{"title":"Ralph Northam","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["virginia","democratic-party","governor","abortion"],"sources":["raw/badlands-brief-6fd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ralph-northam.md","filePath":"entities/ralph-northam.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ralph-northam.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ralph-northam" tabindex="-1">Ralph Northam <a class="header-anchor" href="#ralph-northam" aria-label="Permalink to &quot;Ralph Northam&quot;">​</a></h1><p>Ralph Northam is a former Democratic Governor of Virginia.[1] Badlands commentary identifies him as the governor under whom <a href="/entities/justin-fairfax">Justin Fairfax</a> served as Lieutenant Governor, and characterizes him as &quot;the guy who talked about killing new born babies on the radio,&quot; a reference to his widely criticized remarks on late-term abortion and post-birth care decisions.[1] He is cited in coverage of the 2026 federal investigations touching Virginia Democrats as part of the network of officials who knew one another within the state party.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Rugs the Zionists; FBI Raids the Virginia Democrats&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ralph-northam.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ralphNortham = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ralphNortham as default
};
