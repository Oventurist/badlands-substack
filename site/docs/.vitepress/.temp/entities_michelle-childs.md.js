import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michelle Childs","description":"","frontmatter":{"title":"Michelle Childs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","dc-circuit","biden-appointee"],"sources":["raw/badlands-brief-9ea.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michelle-childs.md","filePath":"entities/michelle-childs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michelle-childs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michelle-childs" tabindex="-1">Michelle Childs <a class="header-anchor" href="#michelle-childs" aria-label="Permalink to &quot;Michelle Childs&quot;">​</a></h1><p>Michelle Childs is a judge on the <a href="/entities/us-court-of-appeals-for-the-dc-circuit">U.S. Court of Appeals for the D.C. Circuit</a> appointed by President Joe Biden.[1]</p><p>In April 2026 Childs dissented from the sharply divided panel decision ordering U.S. District Judge <a href="/entities/james-boasberg">James Boasberg</a> to immediately end his criminal contempt probe against <a href="/entities/trump-administration">Trump administration</a> officials over the disputed 2025 deportation flights.[1] The majority, composed of Trump appointees <a href="/entities/neomi-rao">Neomi Rao</a> and <a href="/entities/justin-walker">Justin Walker</a>, held that the probe improperly targeted high-level executive branch deliberations on national security and diplomacy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Politician is Swallowelled Whole as the Middle East Realigns in Real Time&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9ea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9ea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michelle-childs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michelleChilds = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michelleChilds as default
};
