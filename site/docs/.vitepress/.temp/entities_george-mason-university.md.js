import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"George Mason University","description":"","frontmatter":{"title":"George Mason University","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["university","virginia","mike-pence","academia"],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/george-mason-university.md","filePath":"entities/george-mason-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/george-mason-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="george-mason-university" tabindex="-1">George Mason University <a class="header-anchor" href="#george-mason-university" aria-label="Permalink to &quot;George Mason University&quot;">​</a></h1><p>George Mason University is a public university in Virginia, located outside the nation&#39;s capital, whose Schar School of Policy and Government announced in September 2025 that it would host a former U.S. vice president as an instructor.[1]</p><h2 id="mike-pence-appointment" tabindex="-1">Mike Pence appointment <a class="header-anchor" href="#mike-pence-appointment" aria-label="Permalink to &quot;Mike Pence appointment&quot;">​</a></h2><p>Former Vice President <a href="/entities/mike-pence">Mike Pence</a> was announced as an incoming instructor in politics at the Schar School of Policy and Government for the spring term.[1] He was slated to teach students studying political science, law, public administration, and related fields.[1] According to the university, Pence would teach seminars that &quot;explore the intersection of politics, leadership, and national governance.&quot;[1] Pence had served as vice president to President <a href="/entities/donald-trump">Donald Trump</a> from 2017 to 2021.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/george-mason-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const georgeMasonUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  georgeMasonUniversity as default
};
