import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"DOGE","description":"","frontmatter":{"title":"DOGE","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["doge","government-efficiency","trump-administration","bureaucracy"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/doge.md","filePath":"entities/doge.md","lastUpdated":null}');
const _sfc_main = { name: "entities/doge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="doge" tabindex="-1">DOGE <a class="header-anchor" href="#doge" aria-label="Permalink to &quot;DOGE&quot;">​</a></h1><p>DOGE — the Department of Government Efficiency — is the cost-cutting initiative of the second <a href="/entities/donald-trump">Trump</a> administration. The Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> describes it through an extended analogy to the film <em>Office Space</em>.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> invites readers to &quot;think of DOGE as the two &#39;Bobs&#39; who are brought in to improve efficiency,&quot; the consultants who &quot;interview employees, asking them what it is they do, while discovering many within the company literally do nothing, or are redundant, resulting in mass layoffs, resulting in the whole company living in fear.&quot;</p><p>The analogy is paired with a second one in which Israel, Iran, and China are compared to the <em>Office Space</em> manager circulating with his coffee mug — &quot;the face you know, but... he isn&#39;t the one making the decisions.&quot; Together the two images express the essay&#39;s central claim that the visible drama of layoffs and geopolitics conceals a deeper campaign against the <a href="/entities/city-of-london">City of London</a>, with &quot;the real work&quot; being done behind the scenes and &quot;those in charge... currently being flushed out.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/doge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const doge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  doge as default
};
