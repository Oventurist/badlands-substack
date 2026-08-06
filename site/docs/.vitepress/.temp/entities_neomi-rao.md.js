import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Neomi Rao","description":"","frontmatter":{"title":"Neomi Rao","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","dc-circuit","trump-appointee"],"sources":["raw/badlands-brief-9ea.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/neomi-rao.md","filePath":"entities/neomi-rao.md","lastUpdated":null}');
const _sfc_main = { name: "entities/neomi-rao.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="neomi-rao" tabindex="-1">Neomi Rao <a class="header-anchor" href="#neomi-rao" aria-label="Permalink to &quot;Neomi Rao&quot;">​</a></h1><p>Neomi Rao is a judge on the <a href="/entities/us-court-of-appeals-for-the-dc-circuit">U.S. Court of Appeals for the D.C. Circuit</a> appointed by President <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><p>In April 2026 Rao joined fellow Trump appointee <a href="/entities/justin-walker">Justin Walker</a> in the majority opinion ordering U.S. District Judge <a href="/entities/james-boasberg">James Boasberg</a> to immediately end his criminal contempt probe against Trump administration officials over the disputed 2025 deportation flights to El Salvador.[1] The opinion held that Boasberg&#39;s effort to investigate &quot;high-level Executive Branch deliberations about matters of national security and diplomacy&quot; amounted to &quot;a clear abuse of discretion&quot; and had reached &quot;a legal dead end.&quot;[1] Judge <a href="/entities/michelle-childs">Michelle Childs</a> dissented from the sharply divided decision.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Politician is Swallowelled Whole as the Middle East Realigns in Real Time&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9ea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9ea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/neomi-rao.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const neomiRao = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  neomiRao as default
};
