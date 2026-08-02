import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Henry Wallace","description":"","frontmatter":{"title":"Henry Wallace","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["us-politics","fdr","united-nations","anti-colonialism"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/henry-wallace.md","filePath":"entities/henry-wallace.md","lastUpdated":null}');
const _sfc_main = { name: "entities/henry-wallace.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="henry-wallace" tabindex="-1">Henry Wallace <a class="header-anchor" href="#henry-wallace" aria-label="Permalink to &quot;Henry Wallace&quot;">​</a></h1><p>Henry A. Wallace was Vice President of the United States under <a href="/entities/franklin-d-roosevelt">Franklin Roosevelt</a> from 1941 to 1945 and a leading exponent of Roosevelt&#39;s anti-colonial, development-oriented vision for the post-war world.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>In the Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a>, <a href="/entities/matthew-ehret">Matthew Ehret</a> pairs Wallace with Roosevelt as the authors of the conception of the <a href="/entities/united-nations">United Nations</a> he regards as legitimate: &quot;The UN as envisioned by FDR or Henry Wallace was also never meant to be a world government, but rather a platform for dialogue and harmonization of security and economic interests among civilizations.&quot; Wallace therefore stands in the article as a marker of the road not taken in American post-war policy, in contrast to the capture of the <a href="/concepts/bretton-woods-system">Bretton Woods institutions</a> and the U.S. government that Ehret describes as following the Second World War.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/henry-wallace.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const henryWallace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  henryWallace as default
};
