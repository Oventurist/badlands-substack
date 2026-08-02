import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kaiser Permanente","description":"","frontmatter":{"title":"Kaiser Permanente","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["healthcare","labor","strikes"],"sources":["raw/a-time-to-strike.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/kaiser-permanente.md","filePath":"entities/kaiser-permanente.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kaiser-permanente.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kaiser-permanente" tabindex="-1">Kaiser Permanente <a class="header-anchor" href="#kaiser-permanente" aria-label="Permalink to &quot;Kaiser Permanente&quot;">​</a></h1><p>Kaiser Permanente is a large American integrated managed care consortium and hospital system. It enters the Badlands Media corpus through <a href="/concepts/a-time-to-strike">A Time to Strike</a> (October 11, 2023), which cites Axios reporting on the October 2023 Kaiser Permanente walkout as the largest single component of that year&#39;s surge in what Axios termed &quot;worker activism.&quot;</p><p>The article lists Kaiser&#39;s 75,000 striking employees alongside 84 Amazon workers, 1,400 electrical workers and 3,000 Starbucks workers as evidence that the impulse to reshape the relationship between employee and employer &quot;caught fire in 2023&quot; across industries far beyond the headline <a href="/entities/writers-guild-of-america">Writers Guild of America</a> and <a href="/entities/united-auto-workers">United Auto Workers</a> disputes. In the essay&#39;s framing, healthcare is one of the sectors whose corporate back offices were already streamlined in an earlier wave of optimization consulting — work associated with firms such as <a href="/entities/mckinsey-and-company">McKinsey &amp; Company</a> — and the visible strikes of 2023 represent the arrival of that same transformation among unionized frontline staff who, unlike back-office employees, are able to withhold labor.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-time-to-strike" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kaiser-permanente.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kaiserPermanente = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kaiserPermanente as default
};
