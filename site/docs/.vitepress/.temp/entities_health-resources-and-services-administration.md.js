import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Health Resources and Services Administration","description":"","frontmatter":{"title":"Health Resources and Services Administration","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hhs","healthcare","organ-transplant","oversight","investigation"],"sources":["raw/badlands-news-brief-168.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/health-resources-and-services-administration.md","filePath":"entities/health-resources-and-services-administration.md","lastUpdated":null}');
const _sfc_main = { name: "entities/health-resources-and-services-administration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="health-resources-and-services-administration" tabindex="-1">Health Resources and Services Administration <a class="header-anchor" href="#health-resources-and-services-administration" aria-label="Permalink to &quot;Health Resources and Services Administration&quot;">​</a></h1><p>The Health Resources and Services Administration (HRSA) is an agency within the <a href="/entities/department-of-health-and-human-services">Department of Health and Human Services</a>. In July 2025 an HRSA investigation into the United States organ transplant system precipitated a major federal overhaul of organ procurement procedures.[1]</p><h2 id="organ-transplant-investigation" tabindex="-1">Organ transplant investigation <a class="header-anchor" href="#organ-transplant-investigation" aria-label="Permalink to &quot;Organ transplant investigation&quot;">​</a></h2><p>The investigation found disturbing practices, including instances of organ procurement from donors who were still alive.[1] Announcing the reforms, HHS Secretary <a href="/entities/robert-f-kennedy-jr">Robert F. Kennedy Jr.</a> said: &quot;Our findings show that hospitals allowed the organ procurement process to begin when patients showed signs of life, and this is horrifying.&quot; He added that the organ procurement organizations coordinating access to transplants would be held accountable and that &quot;the entire system must be fixed to ensure that every potential donor&#39;s life is treated with the sanctity it deserves.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Thumb Drive Theories &amp; Early Dismissals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-168" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-168</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/health-resources-and-services-administration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const healthResourcesAndServicesAdministration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  healthResourcesAndServicesAdministration as default
};
