import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chabad","description":"","frontmatter":{"title":"Chabad","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judaism","kabbalah","israel","messianism"],"sources":["raw/badlands-news-brief-2ad.md"],"confidence":"low"},"headers":[],"relativePath":"entities/chabad.md","filePath":"entities/chabad.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chabad.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chabad" tabindex="-1">Chabad <a class="header-anchor" href="#chabad" aria-label="Permalink to &quot;Chabad&quot;">​</a></h1><p>Chabad is a Hasidic movement within Judaism whose kabbalist leaders feature prominently in Badlands Media commentary on Israeli territorial ambitions.[1]</p><p>In September 2024, Rabbi <a href="/entities/yitzchak-ginsburgh">Yitzchak Ginsburgh</a> of the Chabad movement published a letter calling for the conquest and annexation of southern <a href="/entities/lebanon">Lebanon</a> by the <a href="/entities/israel-defense-forces">IDF</a>, joining other vocal kabbalist leaders who argue that conquering Lebanon will hasten the arrival of the Jewish messiah before the end of the Jewish calendar in 2027.[1] Badlands writers described the territorial program advanced by these Chabad rabbis as <a href="/concepts/greater-israel">Greater Israel</a>, and characterized it as a core tenet of their specific sect.[1] The commentary argued that whether Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> personally shares this fanaticism is largely irrelevant, since he is beholden to those who do while clinging to power to postpone corruption prosecution.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: New Gotham City, Iranian Mysteries &amp; Wars Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chabad.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chabad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chabad as default
};
