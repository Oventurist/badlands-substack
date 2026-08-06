import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"K.P. Sharma Oli","description":"","frontmatter":{"title":"K.P. Sharma Oli","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nepal","prime-minister","resignation","protests"],"sources":["raw/badlands-news-brief-030.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kp-sharma-oli.md","filePath":"entities/kp-sharma-oli.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kp-sharma-oli.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="k-p-sharma-oli" tabindex="-1">K.P. Sharma Oli <a class="header-anchor" href="#k-p-sharma-oli" aria-label="Permalink to &quot;K.P. Sharma Oli&quot;">​</a></h1><p>K.P. Sharma Oli was the Prime Minister of <a href="/entities/nepal">Nepal</a> who resigned in September 2025 during the country&#39;s most severe civil unrest in years.[1]</p><h2 id="resignation" tabindex="-1">Resignation <a class="header-anchor" href="#resignation" aria-label="Permalink to &quot;Resignation&quot;">​</a></h2><p>Oli&#39;s government banned social media platforms including WhatsApp, a measure that inflamed Nepalese citizens already angry over official corruption and helped trigger the <a href="/concepts/2025-nepal-protests">2025 Nepal protests</a>.[1] After security forces killed at least nineteen demonstrators and protesters set fire to Parliament, the Supreme Court, and lawmakers&#39; homes, Oli resigned along with other top officials and the government retreated from the social media ban.[1] The violence nonetheless continued, and following his departure it was unclear who, if anyone, was in charge of the country until the army moved to restore order.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Rare Earths, Rogue Judges, &amp; Record Downward Revisions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-030" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-030</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kp-sharma-oli.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kpSharmaOli = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kpSharmaOli as default
};
