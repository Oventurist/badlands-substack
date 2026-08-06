import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brownstone Institute","description":"","frontmatter":{"title":"Brownstone Institute","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["think-tank","covid-19","civil-liberties","media"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brownstone-institute.md","filePath":"entities/brownstone-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brownstone-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brownstone-institute" tabindex="-1">Brownstone Institute <a class="header-anchor" href="#brownstone-institute" aria-label="Permalink to &quot;Brownstone Institute&quot;">​</a></h1><p>The <strong>Brownstone Institute</strong> is a research and publishing organization known for its criticism of COVID-19 policy, censorship, and administrative overreach.[1]</p><p>In March 2024 the institute published an analysis titled &quot;The White House Makes Good on Its Antitrust Threats,&quot; examining why the <a href="/entities/department-of-justice">Department of Justice</a> moved against <a href="/entities/apple">Apple</a>.[1] The piece traced the action back to press secretary <a href="/entities/jen-psaki">Jen Psaki</a>&#39;s May 5, 2021 warning to social-media companies, in which she coupled demands to suppress COVID and election &quot;misinformation&quot; with a statement that the president supported &quot;a robust antitrust program.&quot;[1] The institute argued that on its face the Apple case concerned the company&#39;s secure communications network, with the Justice Department seeking to force Apple to share its services with other networks, but that in substance it represented the government taking sides in a competitive dispute between companies — in this instance on behalf of Samsung and other smartphone providers, who resent the way Apple products all work together and want that changed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brownstone-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brownstoneInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brownstoneInstitute as default
};
