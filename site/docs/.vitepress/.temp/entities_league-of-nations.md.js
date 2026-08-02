import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"League of Nations","description":"","frontmatter":{"title":"League of Nations","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["international-organization","history","wwi","diplomacy"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/league-of-nations.md","filePath":"entities/league-of-nations.md","lastUpdated":null}');
const _sfc_main = { name: "entities/league-of-nations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="league-of-nations" tabindex="-1">League of Nations <a class="header-anchor" href="#league-of-nations" aria-label="Permalink to &quot;League of Nations&quot;">​</a></h1><p>The League of Nations was the intergovernmental organisation founded after the First World War as the first general-purpose body for collective security, and the institutional predecessor of the <a href="/entities/united-nations">United Nations</a>.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>The Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a> lists the League among the historical attempts at a post-war settlement, describing it as having arisen &quot;in the wake of the meat grinder of WW1,&quot; between the <a href="/concepts/congress-of-vienna">Congress of Vienna</a> and the United Nations and <a href="/concepts/bretton-woods-system">Bretton Woods system</a> created after the Second World War. <a href="/entities/matthew-ehret">Matthew Ehret</a> uses the sequence to argue that humanity has repeatedly waited for catastrophic bloodshed before constructing new international frameworks, and that the existence of nuclear weapons makes any repetition of that pattern intolerable.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/league-of-nations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leagueOfNations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  leagueOfNations as default
};
