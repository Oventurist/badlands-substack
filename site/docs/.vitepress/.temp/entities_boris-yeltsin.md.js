import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Boris Yeltsin","description":"","frontmatter":{"title":"Boris Yeltsin","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["russia","1990s","privatization","post-soviet"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/boris-yeltsin.md","filePath":"entities/boris-yeltsin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/boris-yeltsin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boris-yeltsin" tabindex="-1">Boris Yeltsin <a class="header-anchor" href="#boris-yeltsin" aria-label="Permalink to &quot;Boris Yeltsin&quot;">​</a></h1><p>Boris Yeltsin (1931–2007) was the first President of the Russian Federation, serving from 1991 to 1999. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, his presidency is presented as the political container within which Russia&#39;s sovereign economic powers were dismantled.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that the accelerated liberalization of the former Soviet bloc was carried out &quot;under the direction of such monetarist &#39;reformers&#39; such as <a href="/entities/anatoly-chubais">Anatoly Chubais</a> and <a href="/entities/yegor-gaidar">Yegor Gaidar</a> under Yeltsin,&quot; in parallel with Western participants such as the IMF&#39;s <a href="/entities/jeffrey-sachs">Jeffrey Sachs</a>, <a href="/entities/al-gore">Al Gore</a>, <a href="/entities/strobe-talbott">Strobe Talbott</a> and <a href="/entities/mark-carney">Mark Carney</a>.</p><p>The article contrasts this era with the later period in which <a href="/entities/vladimir-putin">Vladimir Putin</a> &quot;began exiling many of these unrepentant oligarchs,&quot; who then &quot;quickly made their way to London where many became disposable playthings of the British Empire.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/boris-yeltsin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const borisYeltsin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  borisYeltsin as default
};
