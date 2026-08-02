import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Non-Aligned Movement","description":"","frontmatter":{"title":"Non-Aligned Movement","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["international-organization","non-alignment","decolonization","sovereignty"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/non-aligned-movement.md","filePath":"entities/non-aligned-movement.md","lastUpdated":null}');
const _sfc_main = { name: "entities/non-aligned-movement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="non-aligned-movement" tabindex="-1">Non-Aligned Movement <a class="header-anchor" href="#non-aligned-movement" aria-label="Permalink to &quot;Non-Aligned Movement&quot;">​</a></h1><p>The Non-Aligned Movement is the grouping of states that declined formal alignment with either bloc during the Cold War, organised around principles of sovereignty and non-interference.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>The Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a> states that the Five Principles of Peaceful Coexistence emerging from the <a href="/concepts/bandung-conference">Bandung Conference</a> of 1955 &quot;set the tone for the Non-Aligned Movement.&quot; <a href="/entities/matthew-ehret">Matthew Ehret</a> treats the movement as a historical antecedent of the present <a href="/concepts/multipolar-alliance">multipolar alliance</a>, sharing its insistence on the sovereign equality of nations as codified in the <a href="/concepts/un-charter">UN Charter</a> and reaffirmed in the <a href="/concepts/tianjin-declaration">Tianjin Declaration</a>, and its rejection of coercive measures imposed by dominant powers.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/non-aligned-movement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nonAlignedMovement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nonAlignedMovement as default
};
