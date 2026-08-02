import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lane Kirkland","description":"","frontmatter":{"title":"Lane Kirkland","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["labor-unions","afl-cio","central-america","cold-war"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/lane-kirkland.md","filePath":"entities/lane-kirkland.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lane-kirkland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lane-kirkland" tabindex="-1">Lane Kirkland <a class="header-anchor" href="#lane-kirkland" aria-label="Permalink to &quot;Lane Kirkland&quot;">​</a></h1><p>Lane Kirkland (1922–1999) was an American labor leader who served as president of the <a href="/entities/afl-cio">AFL-CIO</a> from 1979 to 1995. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, his tenure is described as a period that &quot;deepened the ties between labor and intelligence.&quot;</p><h2 id="role-in-covert-operations" tabindex="-1">Role in covert operations <a class="header-anchor" href="#role-in-covert-operations" aria-label="Permalink to &quot;Role in covert operations&quot;">​</a></h2><p>The article states that during the Kirkland era, &quot;unions backed Reagan&#39;s counterinsurgency in Central America, training Salvadoran death-squad affiliates via AIFLD&quot; — the <a href="/entities/american-institute-for-free-labor-development">American Institute for Free Labor Development</a>. This period is presented as part of the AFL-CIO&#39;s continued collaboration with U.S. intelligence agencies in covert operations, reinforcing the institution&#39;s role as a tool of U.S. foreign policy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lane-kirkland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laneKirkland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  laneKirkland as default
};
