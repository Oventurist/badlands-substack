import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Myanmar","description":"","frontmatter":{"title":"Myanmar","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["myanmar","labor-unions","coup","usaid"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/myanmar.md","filePath":"entities/myanmar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/myanmar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="myanmar" tabindex="-1">Myanmar <a class="header-anchor" href="#myanmar" aria-label="Permalink to &quot;Myanmar&quot;">​</a></h1><p>Myanmar (Burma) is a country in Southeast Asia that experienced a military coup in February 2021, toppling the elected civilian government of Aung San Suu Kyi. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Myanmar is presented as a case study of labor unions being used by U.S. agencies against a government perceived as too close to China.</p><h2 id="post-2021-coup-operations" tabindex="-1">Post-2021 coup operations <a class="header-anchor" href="#post-2021-coup-operations" aria-label="Permalink to &quot;Post-2021 coup operations&quot;">​</a></h2><p>The article states that &quot;following the 2021 military coup in Myanmar, the Solidarity Center ramped up support for anti-junta labor groups, channeling USAID and NED funds to unions opposing the military regime.&quot; It argues that while this was &quot;framed as support for democratic resistance, the real aim was to weaken a government perceived as too close to China.&quot;</p><p>Training programs in &quot;labor organizing,&quot; the article claims, &quot;doubled as intelligence-gathering operations, with union leaders feeding information to U.S. diplomats.&quot; It describes this as mirroring Cold War tactics &quot;where labor activists were unwitting—or witting—assets for CIA operations.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/myanmar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myanmar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  myanmar as default
};
