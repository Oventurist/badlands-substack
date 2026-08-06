import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Awad al-Shammari","description":"","frontmatter":{"title":"Awad al-Shammari","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iraq","israel","bedouin","whistleblower"],"sources":["raw/badlands-brief-5a2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/awad-al-shammari.md","filePath":"entities/awad-al-shammari.md","lastUpdated":null}');
const _sfc_main = { name: "entities/awad-al-shammari.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="awad-al-shammari" tabindex="-1">Awad al-Shammari <a class="header-anchor" href="#awad-al-shammari" aria-label="Permalink to &quot;Awad al-Shammari&quot;">​</a></h1><p>Awad al-Shammari was a <a href="/concepts/bedouin">Bedouin</a> shepherd credited in Badlands commentary with discovering two Israeli military bases secretly built in remote parts of <a href="/entities/iraq">Iraq</a>.[1]</p><h2 id="reported-death" tabindex="-1">Reported death <a class="header-anchor" href="#reported-death" aria-label="Permalink to &quot;Reported death&quot;">​</a></h2><p>According to that account, after reporting his discovery to the relevant authorities, al-Shammari was gunned down in a helicopter strike.[1] The episode is cited alongside a Wall Street Journal report that <a href="/entities/israel">Israel</a> had built and defended a secret base in Iraq during the <a href="/concepts/iran-war">Iran war</a> to support operations against Tehran, and used to argue that the drone attack on the <a href="/entities/barakah-nuclear-power-plant">Barakah nuclear power plant</a> — which came from the west — was not Iranian in origin.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tina Peters&#39; Sentence Commuted; ISIS Killed in Africa&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/awad-al-shammari.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const awadAlShammari = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  awadAlShammari as default
};
