import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Philip Murray","description":"","frontmatter":{"title":"Philip Murray","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["labor-unions","cio","cold-war"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/philip-murray.md","filePath":"entities/philip-murray.md","lastUpdated":null}');
const _sfc_main = { name: "entities/philip-murray.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="philip-murray" tabindex="-1">Philip Murray <a class="header-anchor" href="#philip-murray" aria-label="Permalink to &quot;Philip Murray&quot;">​</a></h1><p>Philip Murray was an American labor leader who served as president of the <a href="/entities/congress-of-industrial-organizations">Congress of Industrial Organizations (CIO)</a>. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Murray is presented as a &quot;pragmatic strategist&quot; who nevertheless shared AFL leader <a href="/entities/matthew-woll">Matthew Woll</a>&#39;s view of organized labor as a frontline in the Cold War ideological battle.</p><h2 id="role-in-covert-operations" tabindex="-1">Role in covert operations <a class="header-anchor" href="#role-in-covert-operations" aria-label="Permalink to &quot;Role in covert operations&quot;">​</a></h2><p>Alongside Woll, Murray is described as understanding that &quot;labor&#39;s collective strength could be leveraged to advance Western imperialism and to counter Soviet influence in Europe.&quot; The source portrays both figures as among the architects of the integration of American organized labor into the covert U.S. foreign policy apparatus that culminated in the <a href="/entities/afl-cio">AFL-CIO</a> and its &quot;AFL-CIA&quot; partnership with the <a href="/entities/cia">CIA</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/philip-murray.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const philipMurray = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  philipMurray as default
};
