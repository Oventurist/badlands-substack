import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hellfire Club","description":"","frontmatter":{"title":"Hellfire Club","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["history","british-empire","occultism","secret-societies"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"low"},"headers":[],"relativePath":"entities/hellfire-club.md","filePath":"entities/hellfire-club.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hellfire-club.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hellfire-club" tabindex="-1">Hellfire Club <a class="header-anchor" href="#hellfire-club" aria-label="Permalink to &quot;Hellfire Club&quot;">​</a></h1><p>The Hellfire Club is referenced in Badlands Media commentary by <a href="/entities/matthew-ehret">Matthew Ehret</a> as the emblem of an occultism embedded throughout the British imperial elite.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><p>Discussing <a href="/entities/benjamin-west">Benjamin West</a>&#39;s painting of Saul and the Witch of Endor — in which King Saul, having expelled the oracles from his kingdom, secretly consults a witch and by believing her forecast of defeat and death ensures his own destruction — Ehret suggests one message West may be communicating concerns this well-known occultism within the British elite, which West and <a href="/entities/benjamin-franklin">Benjamin Franklin</a> understood viscerally.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a> He observes that a republican painter treating such a theme would have been making a great many enemies among the intelligentsia of the Hellfire Club&#39;s devotees and their heirs.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New American Renaissance&quot;, URL: <a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-american-renaissance</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hellfire-club.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hellfireClub = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hellfireClub as default
};
