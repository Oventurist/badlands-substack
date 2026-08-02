import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Spanish Flu","description":"","frontmatter":{"title":"Spanish Flu","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["pandemic","history","trump-comms",1917],"sources":["raw/a-virus-or-a-metaphor.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/spanish-flu.md","filePath":"concepts/spanish-flu.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/spanish-flu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="spanish-flu" tabindex="-1">Spanish Flu <a class="header-anchor" href="#spanish-flu" aria-label="Permalink to &quot;Spanish Flu&quot;">​</a></h1><p>The Spanish Flu was the influenza pandemic of 1918, conventionally regarded as the deadliest of the twentieth century. Within the Badlands Media corpus it appears primarily as the subject of a disputed <a href="/entities/donald-trump">Donald Trump</a> statement analyzed in <a href="/concepts/a-virus-or-a-metaphor">A Virus, or a Metaphor?</a>.</p><h2 id="the-1917-anomaly" tabindex="-1">The 1917 anomaly <a class="header-anchor" href="#the-1917-anomaly" aria-label="Permalink to &quot;The 1917 anomaly&quot;">​</a></h2><p>During the COVID-19 period, Trump repeatedly said the pandemic was the worst thing to happen to America since the Spanish Flu in 1917. He was, as the article notes, &quot;viciously mocked for his ignorance about history, because the Spanish Flu occurred in 1918.&quot; The detail <a href="/entities/erik-carlson">Erik Carlson</a> emphasizes is that &quot;even after being publicly ridiculed, Trump continued to mention the Spanish Flu of 1917&quot; — a persistence the author treats as evidence of intent rather than error.</p><h2 id="the-decoded-reading" tabindex="-1">The decoded reading <a class="header-anchor" href="#the-decoded-reading" aria-label="Permalink to &quot;The decoded reading&quot;">​</a></h2><p>Because the essay holds that Trump uses &quot;virus&quot; as a metaphor for <a href="/concepts/communism">Communism</a>, the anomalous date becomes the operative signal. October 1917 is the date of the <a href="/concepts/bolshevik-revolution">Bolshevik uprising</a>, in which the far-left Bolsheviks overthrew the Russian monarch, murdered his family, brought about Communism and formed the Soviet Union, largely through propaganda and chaos and by dividing the country between &quot;whites&quot; and &quot;reds&quot; to foment civil war. The article concludes that &quot;these comms are Trump letting us know what is really happening in America&quot;: that &quot;Communism, a virus, is spreading throughout America, with the sole intent of dividing and destroying the country.&quot; The essay also observes that, like COVID, &quot;the &#39;Spanish Flu&#39; was sold to us as a deadly virus.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-virus-or-a-metaphor" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/spanish-flu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spanishFlu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spanishFlu as default
};
