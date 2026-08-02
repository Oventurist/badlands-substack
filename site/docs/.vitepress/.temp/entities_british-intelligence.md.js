import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"British Intelligence","description":"","frontmatter":{"title":"British Intelligence","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["british-empire","intelligence-agencies","middle-east","cabal"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/british-intelligence.md","filePath":"entities/british-intelligence.md","lastUpdated":null}');
const _sfc_main = { name: "entities/british-intelligence.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="british-intelligence" tabindex="-1">British Intelligence <a class="header-anchor" href="#british-intelligence" aria-label="Permalink to &quot;British Intelligence&quot;">​</a></h1><p>British Intelligence is treated in the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> as the primary external actor shaping the modern Middle East, and as the institutional parent of the intelligence services that followed it.</p><p>The source states that British Intelligence — and later what it calls its protégés, the <a href="/entities/cia">cia</a> and <a href="/entities/mossad">mossad</a> — have spent at least the past two hundred years manipulating the region &quot;with the most nefarious intent,&quot; as they have done elsewhere. It adds an important qualification: that these manipulations were often gamesmanship between competing players within the British imperial hierarchy itself, jockeying to improve their own positions at one another&#39;s expense, rather than the execution of a single unified plan. The essay attributes to this history the fact that the Middle East has, in its assessment, one of the most complicated, tragic and convoluted histories in the world, second only to Russia&#39;s.</p><p>Together with the British Crown and the <a href="/entities/east-india-company">east-india-company</a>, British Intelligence is credited in the source with fixing the sectarian composition of Afghanistan and Iraq at the end of the First World War. The promised sequel to the article is to treat what the author calls the British Cabal&#39;s betrayal of the <a href="/entities/banu-hashim">Hashemites</a> during and after that war, and the usurpation of Hashemite stewardship over the Islamic holy lands through Abdulaziz bin Abdul Rahman Al Saud, founder of the modern Kingdom of <a href="/entities/saudi-arabia">saudi-arabia</a> — a sequence the article links to the creation of the <em>Ikhwan</em> or <a href="/entities/muslim-brotherhood">Brotherhood</a>, the export of <a href="/concepts/wahhabism">wahhabism</a>, and the rise of radical Islamic terrorism in the later twentieth century.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/british-intelligence.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const britishIntelligence = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  britishIntelligence as default
};
