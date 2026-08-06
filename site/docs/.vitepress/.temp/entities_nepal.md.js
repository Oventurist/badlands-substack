import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nepal","description":"","frontmatter":{"title":"Nepal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nepal","south-asia","protests","government"],"sources":["raw/badlands-news-brief-030.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nepal.md","filePath":"entities/nepal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nepal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nepal" tabindex="-1">Nepal <a class="header-anchor" href="#nepal" aria-label="Permalink to &quot;Nepal&quot;">​</a></h1><p>Nepal is a South Asian nation whose government was thrown into crisis in September 2025 by mass unrest in the capital, Kathmandu.[1]</p><h2 id="september-2025-crisis" tabindex="-1">September 2025 crisis <a class="header-anchor" href="#september-2025-crisis" aria-label="Permalink to &quot;September 2025 crisis&quot;">​</a></h2><p>The <a href="/concepts/2025-nepal-protests">2025 Nepal protests</a> began on September 8 amid public anger over official corruption and a ban on social media platforms such as WhatsApp.[1] Security forces killed at least nineteen protesters on the first day; the following day demonstrators set fire to Parliament, the Supreme Court, and the homes of current and former lawmakers, and attacked hotels and airports.[1] Prime Minister <a href="/entities/kp-sharma-oli">K.P. Sharma Oli</a> resigned and the social media ban was withdrawn, but the violence continued.[1] The heads of Nepal&#39;s main security agencies issued a joint appeal for calm and called on political parties to negotiate a peaceful exit from the crisis, while it remained unclear who held authority.[1] After the death toll reached twenty-two, the Nepalese army announced it would intervene and deployed troops in Kathmandu late on September 9.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Rare Earths, Rogue Judges, &amp; Record Downward Revisions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-030" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-030</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nepal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nepal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nepal as default
};
