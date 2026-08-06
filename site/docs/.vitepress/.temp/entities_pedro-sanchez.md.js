import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pedro Sánchez","description":"","frontmatter":{"title":"Pedro Sánchez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["spain","prime-minister","europe"],"sources":["raw/badlands-brief-02a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pedro-sanchez.md","filePath":"entities/pedro-sanchez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pedro-sanchez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pedro-sanchez" tabindex="-1">Pedro Sánchez <a class="header-anchor" href="#pedro-sanchez" aria-label="Permalink to &quot;Pedro Sánchez&quot;">​</a></h1><p><strong>Pedro Sánchez</strong> is the Prime Minister of Spain.[1] He appears in the Badlands corpus in connection with the <a href="/concepts/adamuz-train-collision">Adamuz train collision</a> of January 18, 2026, in which two high-speed trains derailed and collided in the province of Córdoba, killing at least 39 people and injuring more than 120.[1] Sánchez was among the national leaders who expressed condolences to the victims&#39; families as authorities suspended high-speed services between Madrid and Andalusian cities pending investigation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arctic Escalation and Tropic Trouble for the Financial System&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pedro-sanchez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pedroSanchez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pedroSanchez as default
};
