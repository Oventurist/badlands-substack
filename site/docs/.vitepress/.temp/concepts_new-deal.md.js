import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New Deal","description":"","frontmatter":{"title":"New Deal","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["united-states","economics","roosevelt","protectionism"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/new-deal.md","filePath":"concepts/new-deal.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/new-deal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-deal" tabindex="-1">New Deal <a class="header-anchor" href="#new-deal" aria-label="Permalink to &quot;New Deal&quot;">​</a></h1><p>The New Deal was the program of economic reform, public works and financial regulation undertaken in the United States during the 1930s under President <a href="/entities/franklin-d-roosevelt">Franklin D. Roosevelt</a>. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, it serves as the positive counter-model against which the <a href="/concepts/green-new-deal">Green New Deal</a> is measured.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> describes &quot;the protectionism, bank regulation, state credit and central authority exerted by America during the 1930s New Deal (or Eurasian New Silk Road policy today)&quot; as fundamentally different from the green framework: the New Deal model &quot;empowers sovereign nations, and increases the productive powers of labor and energy flux density of humanity while increasing quality of life,&quot; whereas the green agenda ties monetary incentives to reducing the earth&#39;s carbon footprint.</p><p>The article also credits the American rejection of fascism under Roosevelt with defeating an earlier attempt to convert economic collapse into dictatorship, referencing Ehret&#39;s earlier piece &quot;How to Crush a Bankers&#39; Dictatorship: How the Great Reset of 1933 Was Thwarted by FDR.&quot; The <a href="/concepts/glass-steagall-act">Glass-Steagall Act</a> of 1933, described as &quot;the bedrock of financial regulation,&quot; belongs to this same period.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/new-deal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newDeal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newDeal as default
};
