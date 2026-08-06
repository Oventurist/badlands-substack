import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Minoru Kihara","description":"","frontmatter":{"title":"Minoru Kihara","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["japan","diplomacy","maritime-disputes","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/minoru-kihara.md","filePath":"entities/minoru-kihara.md","lastUpdated":null}');
const _sfc_main = { name: "entities/minoru-kihara.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="minoru-kihara" tabindex="-1">Minoru Kihara <a class="header-anchor" href="#minoru-kihara" aria-label="Permalink to &quot;Minoru Kihara&quot;">​</a></h1><p>Minoru Kihara is Japan&#39;s Chief Cabinet Secretary. Following objections from China and <a href="/entities/taiwan">Taiwan</a> to the planned Japan–Philippines maritime delimitation talks announced at the May 28, 2026 Tokyo summit, Kihara said that any agreement reached between Tokyo and Manila would not be legally binding on third parties.[1]</p><p>His statement served as Japan&#39;s attempt to defuse the dispute created when Prime Minister <a href="/entities/sanae-takaichi">Sanae Takaichi</a> and Philippine President <a href="/entities/ferdinand-marcos-jr">Ferdinand Marcos Jr.</a> announced talks over their exclusive economic zones and continental shelves in waters east of Taiwan.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/minoru-kihara.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const minoruKihara = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  minoruKihara as default
};
