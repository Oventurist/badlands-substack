import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paris Agreement","description":"","frontmatter":{"title":"Paris Agreement","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["climate-policy","treaties","green-agenda","united-states"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/paris-agreement.md","filePath":"concepts/paris-agreement.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/paris-agreement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paris-agreement" tabindex="-1">Paris Agreement <a class="header-anchor" href="#paris-agreement" aria-label="Permalink to &quot;Paris Agreement&quot;">​</a></h1><p>The Paris Agreement is the 2015 international climate treaty committing signatories to emissions reduction targets. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, the American withdrawal from the accords is presented as evidence of a broader realignment away from what the author calls a Malthusian depopulation agenda.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that &quot;the USA&#39;s rejection of the Paris Accords and the <a href="/concepts/green-new-deal">Green New Deal</a> also signify a change in orientation from the Malthusian depopulation agenda to which <a href="/entities/chrystia-freeland">Freeland</a> was devoted.&quot; This is listed alongside other developments the essay treats as marking the failure of the unipolar project: the spread of the <a href="/concepts/belt-and-road-initiative">Belt and Road Initiative</a> to 136 nations, the re-emergence of Pan-African nationalism, the strengthening of the Russian economy under sanctions, the consolidation of the Iran-Russia-China alliance, the survival of Venezuela, and the challenge to <a href="/concepts/nafta">NAFTA</a> posed by a restoration of American protectionism.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/paris-agreement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const parisAgreement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  parisAgreement as default
};
