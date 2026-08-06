import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Diosdado Cabello","description":"","frontmatter":{"title":"Diosdado Cabello","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","cabello","sanctions","security-forces"],"sources":["raw/badlands-brief-02a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/diosdado-cabello.md","filePath":"entities/diosdado-cabello.md","lastUpdated":null}');
const _sfc_main = { name: "entities/diosdado-cabello.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="diosdado-cabello" tabindex="-1">Diosdado Cabello <a class="header-anchor" href="#diosdado-cabello" aria-label="Permalink to &quot;Diosdado Cabello&quot;">​</a></h1><p>Diosdado Cabello is the Venezuelan Interior Minister who was the counterparty to months of covert discussions with U.S. officials before and after the January 3, 2026 American military operation that captured <a href="/entities/nicolas-maduro">Nicolás Maduro</a>.[1]</p><p>In those talks, U.S. personnel warned Cabello — who remains under U.S. sanctions and indictment — to refrain from using security forces or militias against the political opposition.[1] Badlands commentary connected this warning to <a href="/entities/erik-prince">Erik Prince</a>&#39;s public argument that acting president <a href="/entities/delcy-rodriguez">Delcy Rodríguez</a> should be allowed to contract directly with private military contractors to provide security, rather than repeating the Iraq disbandment model.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arctic Escalation and Tropic Trouble for the Financial System&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/diosdado-cabello.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const diosdadoCabello = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  diosdadoCabello as default
};
