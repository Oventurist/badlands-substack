import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Monetary Fund","description":"","frontmatter":{"title":"International Monetary Fund","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["finance","globalization","shock-therapy","bretton-woods"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/imf.md","filePath":"entities/imf.md","lastUpdated":null}');
const _sfc_main = { name: "entities/imf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-monetary-fund" tabindex="-1">International Monetary Fund <a class="header-anchor" href="#international-monetary-fund" aria-label="Permalink to &quot;International Monetary Fund&quot;">​</a></h1><p>The International Monetary Fund (IMF) is the Bretton Woods institution charged with monitoring the international monetary system and lending to states in balance-of-payments difficulty. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, the IMF appears as a vehicle of the liberalization applied to the former Soviet bloc.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> identifies <a href="/entities/jeffrey-sachs">Jeffrey Sachs</a> as &quot;the IMF&#39;s&quot; representative in the Western side of Perestroika, alongside Vice President <a href="/entities/al-gore">Al Gore</a>, Rhodes Scholar <a href="/entities/strobe-talbott">Strobe Talbott</a> and the Goldman Sachs banker <a href="/entities/mark-carney">Mark Carney</a>. In the essay&#39;s argument, the resulting &quot;privatization and liberalization reforms&quot; were &quot;applied viciously to Ukraine and other Warsaw pact countries,&quot; compressing into a decade a process that had taken thirty years in the West and producing the oligarchic class of the 1990s.</p><p>The IMF thus belongs, in the article&#39;s schema, to the same institutional family as the <a href="/entities/world-trade-organization">World Trade Organization</a>, the <a href="/entities/european-union">European Union</a> and <a href="/concepts/nafta">NAFTA</a> — instruments through which nations are said to have lost control of their own powers of credit generation.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/imf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  imf as default
};
