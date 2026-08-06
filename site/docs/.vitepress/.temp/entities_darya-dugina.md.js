import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Darya Dugina","description":"","frontmatter":{"title":"Darya Dugina","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","assassination","cia","ukraine"],"sources":["raw/badlands-news-brief-1d1.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/darya-dugina.md","filePath":"entities/darya-dugina.md","lastUpdated":null}');
const _sfc_main = { name: "entities/darya-dugina.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="darya-dugina" tabindex="-1">Darya Dugina <a class="header-anchor" href="#darya-dugina" aria-label="Permalink to &quot;Darya Dugina&quot;">​</a></h1><p>Darya Dugina was a Russian journalist and geopolitical commentator, and the daughter of the Russian philosopher <a href="/entities/alexander-dugin">Alexander Dugin</a>, who was killed in a targeted attack.[1]</p><h2 id="reported-cia-connection" tabindex="-1">Reported CIA connection <a class="header-anchor" href="#reported-cia-connection" aria-label="Permalink to &quot;Reported CIA connection&quot;">​</a></h2><p>In October 2023, while global attention was focused on the war in Gaza, <a href="/entities/washington-post">The Washington Post</a> published a report stating that the <a href="/entities/cia">CIA</a> had been actively running covert operations inside Russia, including operations connected to the killing of Dugina.[1] Coverage by <a href="/entities/zerohedge">ZeroHedge</a> framed the report as vindicating Moscow&#39;s longstanding accusations and as an example of a claim previously dismissed as &quot;pro-Kremlin propaganda&quot; being belatedly admitted as fact.[1]</p><p>The report described a &quot;shadow war&quot; in which missions were carried out by elite teams of Ukrainian operatives drawn from directorates that were formed, trained, and equipped in close partnership with the CIA.[1] According to current and former Ukrainian and US officials cited in the reporting, the agency had since 2015 spent tens of millions of dollars transforming <a href="/entities/ukraine">Ukraine</a>&#39;s Soviet-formed services into potent allies against Moscow.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Terror at Home and Abroad ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1d1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1d1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/darya-dugina.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const daryaDugina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  daryaDugina as default
};
