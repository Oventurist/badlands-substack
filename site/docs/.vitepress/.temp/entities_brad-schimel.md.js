import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brad Schimel","description":"","frontmatter":{"title":"Brad Schimel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wisconsin","judiciary","elections",2025],"sources":["raw/badlands-brief-98d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brad-schimel.md","filePath":"entities/brad-schimel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brad-schimel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brad-schimel" tabindex="-1">Brad Schimel <a class="header-anchor" href="#brad-schimel" aria-label="Permalink to &quot;Brad Schimel&quot;">​</a></h1><p>Brad Schimel was the Republican-backed candidate in the 2025 Wisconsin Supreme Court race.[1]</p><p><a href="/entities/elon-musk">Elon Musk</a> played a major role in that contest, with Musk and affiliated groups spending at least $20 million in support of Schimel&#39;s candidacy.[1] Musk&#39;s <a href="/entities/america-pac">America PAC</a> also offered $100 to voters who signed a petition opposing &quot;activist judges&quot; or who referred others to sign it.[1] Musk&#39;s separate offer of $1 million to voters in the same race later led the <a href="/entities/wisconsin-elections-commission">Wisconsin Elections Commission</a> to refer complaints for criminal review.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;There is “Nothing Bigger” Than Tonight’s Election Speech&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-98d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-98d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brad-schimel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bradSchimel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bradSchimel as default
};
