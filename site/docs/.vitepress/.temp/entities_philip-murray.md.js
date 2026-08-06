import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Philip Murray","description":"","frontmatter":{"title":"Philip Murray","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cio","labor","cold-war"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"low"},"headers":[],"relativePath":"entities/philip-murray.md","filePath":"entities/philip-murray.md","lastUpdated":null}');
const _sfc_main = { name: "entities/philip-murray.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="philip-murray" tabindex="-1">Philip Murray <a class="header-anchor" href="#philip-murray" aria-label="Permalink to &quot;Philip Murray&quot;">​</a></h1><p>Philip Murray was president of the Congress of Industrial Organizations (CIO) during and after World War II.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> Described as a pragmatic strategist, he shared with AFL leader <a href="/entities/matthew-woll">Matthew Woll</a> the view that organized labor constituted a frontline in the ideological battle unfolding as Allied forces liberated Western Europe, and that labor&#39;s collective strength could be used to counter Soviet influence.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><p>The CIO he led was the more progressive of the two federations that merged in December 1955 to form the <a href="/entities/afl-cio">AFL-CIO</a>, joining with the AFL&#39;s anti-communist hardliners.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A More Perfect (Labor) Union&quot;, URL: <a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-more-perfect-labor-union</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/philip-murray.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const philipMurray = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  philipMurray as default
};
