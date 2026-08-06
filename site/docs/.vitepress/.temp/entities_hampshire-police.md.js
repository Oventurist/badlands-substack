import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hampshire Police","description":"","frontmatter":{"title":"Hampshire Police","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","policing","southampton","accountability"],"sources":["raw/badlands-brief-70c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hampshire-police.md","filePath":"entities/hampshire-police.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hampshire-police.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hampshire-police" tabindex="-1">Hampshire Police <a class="header-anchor" href="#hampshire-police" aria-label="Permalink to &quot;Hampshire Police&quot;">​</a></h1><p>Hampshire Police (Hampshire Constabulary) is the territorial police force responsible for Hampshire, England, including the city of Southampton.[1]</p><h2 id="henry-nowak-case" tabindex="-1">Henry Nowak case <a class="header-anchor" href="#henry-nowak-case" aria-label="Permalink to &quot;Henry Nowak case&quot;">​</a></h2><p>The force drew national criticism for its handling of the fatal stabbing of 18-year-old <a href="/entities/henry-nowak">Henry Nowak</a> on December 3, 2025.[1] Officers arriving at the scene arrested and handcuffed Nowak — who repeatedly told them he had been stabbed and could not breathe — after his attacker, <a href="/entities/vickrum-singh-digwa">Vickrum Singh Digwa</a>, claimed Nowak had launched a racist attack that knocked off his turban.[1] Officers focused on the unverified racism claim rather than treating Nowak&#39;s wounds or immediately securing Digwa, despite a visible blood trail.[1] Nowak died about an hour later.[1]</p><p>Nearly six months after the killing, and following Digwa&#39;s murder conviction, Hampshire Police referred itself for an independent investigation into its handling of the incident.[1] Nowak&#39;s family described the treatment of their son as &quot;unbearable,&quot; observing that the perpetrator &quot;was believed&quot; while their bleeding son was not.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Taps Surprising New DNI While Media Freaks Out About Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-70c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-70c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hampshire-police.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hampshirePolice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hampshirePolice as default
};
