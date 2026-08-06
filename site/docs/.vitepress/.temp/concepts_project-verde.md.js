import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Project Verde","description":"","frontmatter":{"title":"Project Verde","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["lehman-brothers","2008-crisis","jeb-bush","carlos-slim"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/project-verde.md","filePath":"concepts/project-verde.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/project-verde.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="project-verde" tabindex="-1">Project Verde <a class="header-anchor" href="#project-verde" aria-label="Permalink to &quot;Project Verde&quot;">​</a></h1><p>Project Verde — Spanish for &quot;Green&quot; — was <a href="/entities/jeb-bush">Jeb Bush</a>&#39;s portion of the firm-wide effort inside <a href="/entities/lehman-brothers">Lehman Brothers</a>, known internally as &quot;Project Green,&quot; to save the bank during its 2008 slide into insolvency by raising new capital and disposing of bad assets.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>Bush&#39;s assignment was to convince the world&#39;s richest man, Mexican billionaire <a href="/entities/carlos-slim">Carlos Slim</a>, to make a potentially life-saving investment in the firm. Slim was already a Lehman client and had lost a great deal as the bank&#39;s stock collapsed.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The effort failed: as the Valukas examiner&#39;s report records, &quot;On July 5, 2008, Bush reported that the meeting had been unsuccessful because Slim &#39;did not express interest in jv (joint venture) or stock purchase.&#39;&quot;<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/project-verde.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectVerde = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  projectVerde as default
};
