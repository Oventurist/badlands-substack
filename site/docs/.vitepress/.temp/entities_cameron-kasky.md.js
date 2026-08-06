import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cameron Kasky","description":"","frontmatter":{"title":"Cameron Kasky","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["west-bank","activism","congressional-delegation","israel"],"sources":["raw/badlands-brief-805.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cameron-kasky.md","filePath":"entities/cameron-kasky.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cameron-kasky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cameron-kasky" tabindex="-1">Cameron Kasky <a class="header-anchor" href="#cameron-kasky" aria-label="Permalink to &quot;Cameron Kasky&quot;">​</a></h1><p>Cameron Kasky is an American activist who travelled as a member of Representative <a href="/entities/ro-khanna">Ro Khanna</a>&#39;s delegation during a three-day visit to the occupied West Bank in July 2026.[1]</p><p>Kasky told Reuters that the delegation was held for more than an hour by armed Israeli settlers near the Palestinian village of Khirbet Zanuta on July 8, and that the group appealed to the U.S. Embassy in Jerusalem for assistance.[1] According to his account, officers who appeared to be police eventually intervened to end the standoff.[1] Khanna&#39;s own version differed on timing, describing roughly 20 minutes of blockage by settlers before Israeli soldiers arrived and continued restricting the delegation&#39;s departure.[1]</p><p>Kasky&#39;s testimony formed part of the documentary record — alongside photographs supplied to the Associated Press — that Badlands cited in arguing that the <a href="/entities/israeli-settler-movement">Israeli settler movement</a> has grown emboldened to the point of confronting United States officials directly.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cameron-kasky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cameronKasky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cameronKasky as default
};
