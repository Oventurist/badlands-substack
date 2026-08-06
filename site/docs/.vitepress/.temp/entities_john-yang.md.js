import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Yang","description":"","frontmatter":{"title":"John Yang","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","pbs","journalism","public-broadcasting"],"sources":["raw/badlands-brief-b74.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-yang.md","filePath":"entities/john-yang.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-yang.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-yang" tabindex="-1">John Yang <a class="header-anchor" href="#john-yang" aria-label="Permalink to &quot;John Yang&quot;">​</a></h1><p>John Yang is an American broadcast journalist who anchored PBS News Weekend, the weekend edition of PBS NewsHour on <a href="/entities/pbs">PBS</a>.[1]</p><h2 id="final-broadcast-and-departure" tabindex="-1">Final broadcast and departure <a class="header-anchor" href="#final-broadcast-and-departure" aria-label="Permalink to &quot;Final broadcast and departure&quot;">​</a></h2><p>Yang anchored the program&#39;s final live broadcast on January 11, 2026, twelve years after PBS News Weekend launched in 2013.[1] During that episode he announced that PBS had canceled the program &quot;at least for the foreseeable future,&quot; attributing the decision to the loss of federal funding for public media, and said he would depart the network at the end of January.[1]</p><p>The cancellation followed a $1.1 billion reduction in federal appropriations for the <a href="/entities/corporation-for-public-broadcasting">Corporation for Public Broadcasting</a> enacted by the Republican-controlled <a href="/entities/congress">Congress</a> in 2025, a response to <a href="/entities/donald-trump">President Trump</a>&#39;s campaign to defund PBS and <a href="/entities/npr">NPR</a> over allegations of liberal bias.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Epsteinian Stalling, Cartel Convergence &amp; Pirates of the Carib-Iran&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b74" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b74</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-yang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnYang = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnYang as default
};
