import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Police Service of Northern Ireland","description":"","frontmatter":{"title":"Police Service of Northern Ireland","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","northern-ireland","security"],"sources":["raw/badlands-news-brief-08c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/police-service-of-northern-ireland.md","filePath":"entities/police-service-of-northern-ireland.md","lastUpdated":null}');
const _sfc_main = { name: "entities/police-service-of-northern-ireland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="police-service-of-northern-ireland" tabindex="-1">Police Service of Northern Ireland <a class="header-anchor" href="#police-service-of-northern-ireland" aria-label="Permalink to &quot;Police Service of Northern Ireland&quot;">​</a></h1><p>The Police Service of Northern Ireland (PSNI) is the territorial police force responsible for Northern Ireland.[1]</p><h2 id="april-2023-security-breach" tabindex="-1">April 2023 security breach <a class="header-anchor" href="#april-2023-security-breach" aria-label="Permalink to &quot;April 2023 security breach&quot;">​</a></h2><p>In April 2023 the PSNI opened an investigation after a document detailing arrangements for US President <a href="/entities/joe-biden">Joe Biden</a>&#39;s visit to Northern Ireland was found lying in the street by a member of the public.[1] The incident was first reported by BBC Radio Ulster, part of the <a href="/entities/bbc">BBC</a>.[1] The PSNI confirmed it was &quot;aware of a security breach&quot; and stated that it takes &quot;the safety of visiting dignitaries, members of the public and our officers and staff extremely seriously and will put the appropriate actions in place.&quot;[1]</p><p>The document appeared to set out police deployments for the visit, which opened with events in Belfast marking a quarter-century of the <a href="/concepts/good-friday-agreement">Good Friday Agreement</a>.[1] The episode was reported by <a href="/entities/cnn">CNN</a> and carried in the Badlands News Brief under the framing of &quot;real leaks&quot; contrasted with contemporaneous media coverage of classified-document allegations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Real Leaks &amp; Fake News&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-08c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-08c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/police-service-of-northern-ireland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const policeServiceOfNorthernIreland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  policeServiceOfNorthernIreland as default
};
