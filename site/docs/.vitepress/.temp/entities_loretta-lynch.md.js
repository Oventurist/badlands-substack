import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Loretta Lynch","description":"","frontmatter":{"title":"Loretta Lynch","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["department-of-justice","attorney-general","clinton-email-investigation","obama-administration"],"sources":["raw/badlands-news-brief-168.md"],"confidence":"low"},"headers":[],"relativePath":"entities/loretta-lynch.md","filePath":"entities/loretta-lynch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/loretta-lynch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="loretta-lynch" tabindex="-1">Loretta Lynch <a class="header-anchor" href="#loretta-lynch" aria-label="Permalink to &quot;Loretta Lynch&quot;">​</a></h1><p>Loretta Lynch served as United States Attorney General during the second term of the <a href="/entities/barack-obama">Obama</a> administration, the period covering the <a href="/entities/fbi">FBI</a>&#39;s 2016 investigation of <a href="/entities/hillary-clinton">Hillary Clinton</a>&#39;s private email server.[1]</p><h2 id="role-in-the-clinton-email-investigation" tabindex="-1">Role in the Clinton email investigation <a class="header-anchor" href="#role-in-the-clinton-email-investigation" aria-label="Permalink to &quot;Role in the Clinton email investigation&quot;">​</a></h2><p>In intercepted Russian intelligence discussed alongside the declassified <a href="/concepts/clinton-annex">Clinton annex</a>, Lynch is described as the instrument through which Obama pressured FBI Director <a href="/entities/james-comey">James Comey</a> to &quot;essentially bury the email scandal.&quot;[1] Badlands commentator Jon Herold cited this material as evidence that the bureau&#39;s failure to pursue the investigation fully — including its decision not to examine thumb drives containing hacked <a href="/entities/state-department">State Department</a> data linked to Obama — reflected political direction rather than mere incompetence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Thumb Drive Theories &amp; Early Dismissals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-168" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-168</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/loretta-lynch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lorettaLynch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lorettaLynch as default
};
