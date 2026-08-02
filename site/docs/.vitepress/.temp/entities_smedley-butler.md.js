import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Smedley Butler","description":"","frontmatter":{"title":"Smedley Butler","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","military","anti-war","historical"],"sources":["raw/a-hypnotists-take-on-israel-palestine.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/smedley-butler.md","filePath":"entities/smedley-butler.md","lastUpdated":null}');
const _sfc_main = { name: "entities/smedley-butler.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="smedley-butler" tabindex="-1">Smedley Butler <a class="header-anchor" href="#smedley-butler" aria-label="Permalink to &quot;Smedley Butler&quot;">​</a></h1><p><strong>Smedley Darlington Butler</strong> (1881–1940) was a highly decorated United States Marine Corps major general who, after retiring from service, became one of the most prominent American critics of war profiteering. He is best known for his 1935 book <em>War Is a Racket</em>, in which he argued that American military interventions had chiefly served the financial interests of banks and corporations rather than the national interest.</p><p>In the Badlands Media essay <a href="/concepts/a-hypnotists-take-on-israel-palestine">&quot;A Hypnotist&#39;s Take on Israel, Palestine, and Q&quot;</a>, <a href="/entities/american-hypnotist">American Hypnotist</a> invokes Butler as the historical anchor for the truth he expects the public to rediscover as media programming collapses. The article describes him as a &quot;decorated general&quot; who told the world &quot;all the way back in the 1930s&quot; that war is a racket &quot;and that the puppeteers play both sides against each other.&quot; Butler&#39;s thesis is presented as the natural conclusion for people who, confronted by the incoherence of coverage of the <a href="/concepts/israel-palestine-conflict">Israel–Palestine conflict</a>, begin to &quot;look under the hood&quot; — the same understanding, in the author&#39;s telling, that Badlands readers have held for years.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/smedley-butler.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const smedleyButler = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  smedleyButler as default
};
