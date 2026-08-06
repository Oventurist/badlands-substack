import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Signal Foundation","description":"","frontmatter":{"title":"Signal Foundation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["signal","nonprofit","encryption","technology"],"sources":["raw/badlands-news-brief-8fd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/signal-foundation.md","filePath":"entities/signal-foundation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/signal-foundation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="signal-foundation" tabindex="-1">Signal Foundation <a class="header-anchor" href="#signal-foundation" aria-label="Permalink to &quot;Signal Foundation&quot;">​</a></h1><p>The <strong>Signal Foundation</strong> is the nonprofit organization that governs the <a href="/concepts/signal">Signal</a> encrypted messaging application.[1] Its board is chaired by <a href="/entities/katherine-maher">Katherine Maher</a>, who simultaneously serves as chief executive of <a href="/entities/npr">NPR</a> and whose prior career included work for the National Democratic Institute, UNICEF, the World Bank, Access Now, the <a href="/entities/atlantic-council">Atlantic Council</a>, and the U.S. State Department Foreign Policy Affairs Board.[1]</p><h2 id="role-in-the-signalgate-controversy" tabindex="-1">Role in the Signalgate controversy <a class="header-anchor" href="#role-in-the-signalgate-controversy" aria-label="Permalink to &quot;Role in the Signalgate controversy&quot;">​</a></h2><p>The foundation&#39;s governance drew attention during the <a href="/concepts/signalgate">Signalgate</a> affair, in which Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> used Signal to transmit updates about U.S. military strikes in Yemen.[1] Badlands host <a href="/entities/canncon">CannCon</a> argued that Maher&#39;s chairmanship, combined with the possibility that the <a href="/entities/cisa">Cybersecurity and Infrastructure Security Agency</a> had recommended Signal to officials during the Biden administration shortly before President <a href="/entities/donald-trump">Donald Trump</a> took office, raised questions about whether the platform&#39;s adoption inside government was organic.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manic Midterms, Menopausal Marxists, &amp; Musical Pipe Bombs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/signal-foundation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signalFoundation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  signalFoundation as default
};
