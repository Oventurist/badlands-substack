import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shaiel Ben-Ephraim","description":"","frontmatter":{"title":"Shaiel Ben-Ephraim","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","journalism","human-rights"],"sources":["raw/badlands-brief-625.md"],"confidence":"low"},"headers":[],"relativePath":"entities/shaiel-ben-ephraim.md","filePath":"entities/shaiel-ben-ephraim.md","lastUpdated":null}');
const _sfc_main = { name: "entities/shaiel-ben-ephraim.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shaiel-ben-ephraim" tabindex="-1">Shaiel Ben-Ephraim <a class="header-anchor" href="#shaiel-ben-ephraim" aria-label="Permalink to &quot;Shaiel Ben-Ephraim&quot;">​</a></h1><p>Shaiel Ben-Ephraim is an Israeli activist and journalist who once served in the <a href="/entities/israel-defense-forces">Israel Defense Forces</a> as a self-described proud Zionist until, by his account, he witnessed atrocities firsthand.[1]</p><p>In April 2026 he published a body of investigative material, including interviews with IDF prison guards, which he said could be independently corroborated by several third-party organizations.[1] The material consists of accounts of torture and abuse suffered by Palestinian detainees, including Christians, in Israeli custody.[1] The most extreme allegation is that prisoners were raped both by IDF soldiers and by dogs trained to perform the act; Ben-Ephraim supplied names of prisoner-victims, the prisons involved, and eyewitness accounts from prisoners and guards.[1]</p><p>Badlands noted that while such claims would ordinarily be dismissed as wartime propaganda, a 2024 video of IDF soldiers gang-raping a Palestinian male prisoner had been leaked by the IDF&#39;s two most senior lawyers, who were subsequently pursued and prosecuted by the Israeli government.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/shaiel-ben-ephraim.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shaielBenEphraim = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shaielBenEphraim as default
};
