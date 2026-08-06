import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Senegal","description":"","frontmatter":{"title":"Senegal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["africa","diplomacy","sahel","ukraine"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/senegal.md","filePath":"entities/senegal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/senegal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="senegal" tabindex="-1">Senegal <a class="header-anchor" href="#senegal" aria-label="Permalink to &quot;Senegal&quot;">​</a></h1><p>Senegal is a West African state whose Ministry of African Integration and Foreign Affairs became involved in a 2024 diplomatic dispute with Ukraine over statements supporting an attack in neighboring <a href="/entities/mali">Mali</a>.[1]</p><p>The ministry said it was surprised to learn that the Ukrainian embassy in Dakar had published on Facebook a propaganda video of the Ukrainian army accompanied by a comment from Ambassador <a href="/entities/yury-pivovarov">Yury Pivovarov</a> expressing unequivocal support for the terrorist attack perpetrated between 25 and 27 July 2024 in northern Mali by Tuareg rebels and members of <a href="/entities/jnim">the Support Group for Islam and Muslims</a> against the Armed Forces of Mali, which resulted in significant civilian casualties.[1] The attack also killed dozens of <a href="/entities/wagner-group">Wagner Group</a> contractors travelling with the Malian convoy.[1] Ukraine&#39;s ambassador was summoned over the post, and <a href="/entities/burkina-faso">Burkina Faso</a> separately called on the international community to hold Ukraine to account.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/senegal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const senegal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  senegal as default
};
