import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark Regev","description":"","frontmatter":{"title":"Mark Regev","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","spokesman","netanyahu","media"],"sources":["raw/badlands-news-brief-175.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mark-regev.md","filePath":"entities/mark-regev.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mark-regev.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mark-regev" tabindex="-1">Mark Regev <a class="header-anchor" href="#mark-regev" aria-label="Permalink to &quot;Mark Regev&quot;">​</a></h1><p>Mark Regev is an Israeli government spokesman and adviser to Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>, frequently deployed to explain Israeli military and diplomatic positions to international broadcasters.[1]</p><h2 id="response-to-the-beirut-strike" tabindex="-1">Response to the Beirut strike <a class="header-anchor" href="#response-to-the-beirut-strike" aria-label="Permalink to &quot;Response to the Beirut strike&quot;">​</a></h2><p>Following the January 2, 2024 drone strike in Beirut that killed Hamas deputy chief <a href="/entities/saleh-al-arouri">Saleh al-Arouri</a>, Regev told MSNBC that Israel had not taken responsibility for the attack.[1] He nonetheless argued that &quot;whoever did it, it must be clear: That this was not an attack on the Lebanese state,&quot; and characterized the operation as &quot;a surgical strike against the Hamas leadership.&quot;[1] The formulation — neither claiming nor denying the strike while framing its limited scope — was consistent with Israel&#39;s practice of not commenting on foreign media reports of its operations, a position the <a href="/entities/israel-defense-forces">Israeli military</a> reiterated to Reuters.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Hamas Chief Killed &amp; Ukraine Propaganda Drilled&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-175" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-175</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mark-regev.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markRegev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markRegev as default
};
