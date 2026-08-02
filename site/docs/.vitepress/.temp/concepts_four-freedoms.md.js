import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Four Freedoms","description":"","frontmatter":{"title":"Four Freedoms","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["fdr","human-rights","international-law",1941],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"concepts/four-freedoms.md","filePath":"concepts/four-freedoms.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/four-freedoms.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="four-freedoms" tabindex="-1">Four Freedoms <a class="header-anchor" href="#four-freedoms" aria-label="Permalink to &quot;Four Freedoms&quot;">​</a></h1><p>The Four Freedoms are the universal aims articulated by <a href="/entities/franklin-d-roosevelt">Franklin Roosevelt</a> in 1941. As enumerated in the Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a>, they are freedom from want, freedom from fear of war, freedom of speech and freedom of conscience.</p><h2 id="significance-in-the-source" tabindex="-1">Significance in the source <a class="header-anchor" href="#significance-in-the-source" aria-label="Permalink to &quot;Significance in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> argues that these freedoms are universal and set &quot;the backbone&quot; of the spirit of the <a href="/concepts/atlantic-charter">Atlantic Charter</a> in its original form, the <a href="/concepts/un-charter">UN Charter</a>, and the original design of the <a href="/concepts/bretton-woods-system">Bretton Woods system</a>. He adds that the same freedoms were restated in the UN Declaration of Human Rights of 1947 and in the Five Principles of Peaceful Coexistence that emerged from the <a href="/concepts/bandung-conference">Bandung Conference</a> of 1955, which in turn set the tone for the <a href="/entities/non-aligned-movement">Non-Aligned Movement</a>.</p><p>The article proposes the Four Freedoms as the proper agenda for an emergency world summit convened before rather than after a nuclear war, in place of what it calls an anti-humanist <a href="/concepts/great-reset">Great Reset</a>. Ehret concludes that the irony of the Four Freedoms now being advanced by the powers of the <a href="/concepts/multipolar-alliance">multipolar alliance</a> &quot;should not be lost on anyone.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/four-freedoms.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fourFreedoms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fourFreedoms as default
};
