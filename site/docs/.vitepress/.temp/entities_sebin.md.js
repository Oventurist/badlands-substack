import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sebin (Bolivarian National Intelligence Service)","description":"","frontmatter":{"title":"Sebin (Bolivarian National Intelligence Service)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","intelligence","law-enforcement"],"sources":["raw/badlands-brief-95a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sebin.md","filePath":"entities/sebin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sebin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sebin" tabindex="-1">Sebin <a class="header-anchor" href="#sebin" aria-label="Permalink to &quot;Sebin&quot;">​</a></h1><p>Sebin is Venezuela&#39;s national intelligence service and the agency reported to have detained businessman <a href="/entities/alex-saab">Alex Saab</a> in February 2026.[1]</p><p>When the outlet Caracol reported on February 4, 2026 that Saab and other businessmen had been taken into custody, it specified that Venezuelan Intelligence (Sebin) had carried out the detentions, and speculated that Saab would be extradited to the United States within days.[1] That account was contested: Saab&#39;s attorney denied any arrest, government-aligned journalists denied it on social media, and Parliament President <a href="/entities/jorge-rodriguez">Jorge Rodríguez</a> said he had no information on the matter.[1] Venezuelan law also prohibits the state from extraditing its own citizens.[1]</p><p>The New York Times reported that the Venezuelan government — likely acting through Sebin — was working closely with the <a href="/entities/trump-administration">Trump administration</a> to obtain knowledge of money-laundering operations believed to be held by Saab and his peers.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Sorry for using state power to unlawfully punish your wrong think. Friends?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-95a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-95a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sebin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sebin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sebin as default
};
