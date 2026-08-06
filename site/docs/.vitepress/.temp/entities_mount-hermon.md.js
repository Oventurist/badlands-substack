import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mount Hermon","description":"","frontmatter":{"title":"Mount Hermon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["geography","lebanon","syria","israel","military"],"sources":["raw/badlands-brief-625.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mount-hermon.md","filePath":"entities/mount-hermon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mount-hermon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mount-hermon" tabindex="-1">Mount Hermon <a class="header-anchor" href="#mount-hermon" aria-label="Permalink to &quot;Mount Hermon&quot;">​</a></h1><p>Mount Hermon is a mountain on the border between <a href="/entities/lebanon">Lebanon</a> and Syria and, at over 9,200 feet, the highest point in the Levant region.[1] It overlooks the Syrian capital, Damascus, and adjoins the Golan Heights.[1]</p><p>In April 2026, Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> assessed that the <a href="/entities/israel-defense-forces">Israel Defense Forces</a> had moved northeast toward Mount Hermon, capturing Lebanese lands bordering the Golan Heights and Syria, consistent with a prediction he had made in the Brief the previous week.[1] He argued that once the IDF fortified the mountain it would be positioned to capture and annex both southern Lebanon and southern Syria, making Hermon a short-term objective within the longer-term <a href="/concepts/greater-israel">Greater Israel</a> project.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mount-hermon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mountHermon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mountHermon as default
};
