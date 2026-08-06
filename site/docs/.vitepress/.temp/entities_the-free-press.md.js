import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Free Press","description":"","frontmatter":{"title":"The Free Press","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","substack","interviews"],"sources":["raw/badlands-news-brief-8a9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-free-press.md","filePath":"entities/the-free-press.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-free-press.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-free-press" tabindex="-1">The Free Press <a class="header-anchor" href="#the-free-press" aria-label="Permalink to &quot;The Free Press&quot;">​</a></h1><p>The Free Press is an American digital news outlet whose reporting in April 2025 disclosed the administration&#39;s plans for the <a href="/concepts/2025-state-department-reorganization">reorganization of the State Department</a>.[1]</p><h2 id="_2025-state-department-coverage" tabindex="-1">2025 State Department coverage <a class="header-anchor" href="#_2025-state-department-coverage" aria-label="Permalink to &quot;2025 State Department coverage&quot;">​</a></h2><p>Free Press journalists Gabe Kaminsky and Madeleine Rowley obtained the administration&#39;s actual reorganization plans after weeks of rumors about a <a href="/entities/state-department">State Department</a> overhaul; officials described the plan as the department&#39;s biggest shake-up &quot;in decades,&quot; involving the closure of more than 130 offices, including those handling human rights, counter-extremism and the prevention of war crimes.[1] The outlet subsequently published an interview with Secretary of State <a href="/entities/marco-rubio">Marco Rubio</a>, who was overseeing the effort and who addressed the reorganization, soft power, and Iran policy.[1]</p><p>Badlands contributor <a href="/entities/chris-paul">Chris Paul</a> characterized the outlet dismissively as &quot;the commies at The Free Press,&quot; while allowing that Rubio&#39;s argument was pitched in terms its audience could follow.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ongoing Judicial Coups. Newly Jailed Judges.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8a9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8a9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-free-press.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theFreePress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theFreePress as default
};
