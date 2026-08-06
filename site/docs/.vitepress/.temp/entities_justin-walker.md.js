import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Justin Walker","description":"","frontmatter":{"title":"Justin Walker","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","dc-circuit","trump-appointee"],"sources":["raw/badlands-brief-9ea.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/justin-walker.md","filePath":"entities/justin-walker.md","lastUpdated":null}');
const _sfc_main = { name: "entities/justin-walker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="justin-walker" tabindex="-1">Justin Walker <a class="header-anchor" href="#justin-walker" aria-label="Permalink to &quot;Justin Walker&quot;">​</a></h1><p>Justin Walker is a judge on the <a href="/entities/us-court-of-appeals-for-the-dc-circuit">U.S. Court of Appeals for the D.C. Circuit</a> appointed by President <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><p>In April 2026 Walker joined <a href="/entities/neomi-rao">Neomi Rao</a> in a divided panel decision ordering U.S. District Judge <a href="/entities/james-boasberg">James Boasberg</a> to end his criminal contempt investigation of Trump administration officials arising from the March 2025 deportation flights of Venezuelan migrants to El Salvador under the <a href="/concepts/alien-enemies-act">Alien Enemies Act</a>.[1] The majority wrote that the district court&#39;s inquiry into executive branch deliberations on national security and diplomacy was &quot;a clear abuse of discretion&quot; that had reached &quot;a legal dead end.&quot;[1] Judge <a href="/entities/michelle-childs">Michelle Childs</a>, a Biden appointee, dissented.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Politician is Swallowelled Whole as the Middle East Realigns in Real Time&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9ea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9ea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/justin-walker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justinWalker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justinWalker as default
};
