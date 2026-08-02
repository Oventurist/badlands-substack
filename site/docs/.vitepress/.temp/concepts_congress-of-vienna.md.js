import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Congress of Vienna","description":"","frontmatter":{"title":"Congress of Vienna","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["history","diplomacy","europe",1815],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"concepts/congress-of-vienna.md","filePath":"concepts/congress-of-vienna.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/congress-of-vienna.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="congress-of-vienna" tabindex="-1">Congress of Vienna <a class="header-anchor" href="#congress-of-vienna" aria-label="Permalink to &quot;Congress of Vienna&quot;">​</a></h1><p>The Congress of Vienna of 1815 was the conference that reorganised Europe after two decades of Napoleonic warfare. The Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a> describes it as &quot;a weak attempt at another conference&quot; following the <a href="/concepts/peace-of-westphalia">Peace of Westphalia</a>, arising only after the Napoleonic wars had &quot;decimated Europe.&quot;</p><h2 id="function-in-the-article-s-argument" tabindex="-1">Function in the article&#39;s argument <a class="header-anchor" href="#function-in-the-article-s-argument" aria-label="Permalink to &quot;Function in the article&#39;s argument&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> links the Congress to a companion essay on Henry Kissinger&#39;s admiration for the 1815 settlement, implying a critical view of the balance-of-power diplomacy it institutionalised. In the article&#39;s schema, Vienna belongs to the series of post-catastrophe settlements — Westphalia, Vienna, the <a href="/entities/league-of-nations">League of Nations</a>, the <a href="/entities/united-nations">United Nations</a> and <a href="/concepts/bretton-woods-system">Bretton Woods</a> — that were negotiated only once war had become unsufferable. The author&#39;s point is that some of these conferences were shaped by honest agendas and some were not, but that all reflected an agreement that a new system was needed to avoid another plunge into war.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/congress-of-vienna.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const congressOfVienna = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  congressOfVienna as default
};
