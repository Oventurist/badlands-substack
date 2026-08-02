import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Syrian Emergency Task Force","description":"","frontmatter":{"title":"Syrian Emergency Task Force","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["syria","lobbying","isis"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/syrian-emergency-task-force.md","filePath":"entities/syrian-emergency-task-force.md","lastUpdated":null}');
const _sfc_main = { name: "entities/syrian-emergency-task-force.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="syrian-emergency-task-force" tabindex="-1">Syrian Emergency Task Force <a class="header-anchor" href="#syrian-emergency-task-force" aria-label="Permalink to &quot;Syrian Emergency Task Force&quot;">​</a></h1><p>The Syrian Emergency Task Force (SETF) is a U.S.-based advocacy and lobbying organization that claims to support the Syrian opposition. In the Badlands Media article &quot;A Conflict of Interest,&quot; the SETF is identified as a lobbying group that was &quot;actually a lobbying group for ISIS,&quot; designed to channel U.S. taxpayer money to terrorist organizations under the cover of humanitarian support.</p><p>According to the article, <a href="/entities/mouza-moustafa">Mouza Moustafa</a> served as Executive Director of the SETF, and the group was part of a broader network including United For a Free Syria (UFS) and the Coalition for a Democratic Syria (CDS). The source claims that Moustafa was the &quot;go-between&quot; for <a href="/entities/john-mccain">John McCain</a> and <a href="/entities/isis">ISIS leader</a> <a href="/entities/abu-bakr-al-baghdadi">Abu Bakr al-Baghdadi</a>, and that the SETF was the primary mechanism through which U.S. taxpayer money was funneled to ISIS fighters in Syria.</p><p>The article asserts that <a href="/entities/barack-obama">President Obama</a> gave these operations his &quot;full approval and blessing,&quot; and that <a href="/entities/hillary-clinton">Hillary Clinton</a> was similarly complicit. It claims that the SETF was set up by &quot;our enemies to fund the very groups we are at war with,&quot; and that the same playbook used in Libya was replicated in Syria. The source notes that Moustafa had previously led the <a href="/entities/libyan-emergency-task-force">Libyan Emergency Task Force</a> before moving on to the SETF, suggesting a deliberate pattern of creating humanitarian-sounding organizations to conceal terrorist funding.</p><p>According to the article, the SETF&#39;s work included chaperoning McCain on his secret 2013 trip to Syria to meet with ISIS leaders, using McCain&#39;s reputation as a &quot;war hero&quot; to provide legitimacy to the terrorist groups the organization was funding.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/syrian-emergency-task-force.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const syrianEmergencyTaskForce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  syrianEmergencyTaskForce as default
};
