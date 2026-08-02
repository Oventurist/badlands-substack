import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Force Ouvrière","description":"","frontmatter":{"title":"Force Ouvrière","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["labor-unions","france","cold-war","cia"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/force-ouvriere.md","filePath":"entities/force-ouvriere.md","lastUpdated":null}');
const _sfc_main = { name: "entities/force-ouvriere.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="force-ouvriere" tabindex="-1">Force Ouvrière <a class="header-anchor" href="#force-ouvriere" aria-label="Permalink to &quot;Force Ouvrière&quot;">​</a></h1><p>Force Ouvrière (Workers&#39; Force) is a French trade union confederation founded in 1948 as a breakaway from the communist-led CGT. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Force Ouvrière is cited as an example of a non-communist European labor rivalry funded by the <a href="/entities/cia">CIA</a> to split labor federations along Cold War lines.</p><h2 id="funding-by-the-cia" tabindex="-1">Funding by the CIA <a class="header-anchor" href="#funding-by-the-cia" aria-label="Permalink to &quot;Funding by the CIA&quot;">​</a></h2><p>The article states that by 1949 &quot;the CIA funneled millions through the [Free Trade Union Committee] to split European labor federations along Cold War lines, funding non-communist rivals like France&#39;s Force Ouvrière and Italy&#39;s non-CGIL unions.&quot; It frames this as operational sabotage rather than mere financial aid, part of the U.S. effort to counter communist-leaning unions in Western Europe after World War II.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/force-ouvriere.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forceOuvriere = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  forceOuvriere as default
};
