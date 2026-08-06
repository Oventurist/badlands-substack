import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Pima County Sheriff's Department","description":"","frontmatter":{"title":"Pima County Sheriff's Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","arizona","border"],"sources":["raw/badlands-brief-bf7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pima-county-sheriffs-department.md","filePath":"entities/pima-county-sheriffs-department.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/pima-county-sheriffs-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pima-county-sheriff-s-department" tabindex="-1">Pima County Sheriff&#39;s Department <a class="header-anchor" href="#pima-county-sheriff-s-department" aria-label="Permalink to &quot;Pima County Sheriff&#39;s Department&quot;">​</a></h1><p>The Pima County Sheriff&#39;s Department is the principal county law enforcement agency in Pima County, Arizona, a jurisdiction that includes a long stretch of the US–Mexico border and the community of Arivaca.[1]</p><h2 id="role-in-the-2026-arivaca-use-of-force-investigation" tabindex="-1">Role in the 2026 Arivaca use-of-force investigation <a class="header-anchor" href="#role-in-the-2026-arivaca-use-of-force-investigation" aria-label="Permalink to &quot;Role in the 2026 Arivaca use-of-force investigation&quot;">​</a></h2><p>Following the January 27, 2026 shooting of <a href="/entities/patrick-gary-schlegel">Patrick Gary Schlegel</a> by a <a href="/entities/us-border-patrol">Border Patrol</a> agent near Arivaca, the Pima County Sheriff&#39;s Department took the lead on the use-of-force investigation at the request of the <a href="/entities/fbi">FBI</a>.[1] The arrangement follows the common practice of assigning an outside agency to review shootings involving federal officers so that the reviewing body is independent of the agency whose personnel discharged their weapons.[1]</p><p>Authorities said Schlegel had fired at agents and at a <a href="/entities/customs-and-border-protection">Customs and Border Protection</a> helicopter before agents returned fire; he survived and was hospitalized in serious but stable condition.[1] US Attorney <a href="/entities/timothy-courchaine">Timothy Courchaine</a> praised the coordination among &quot;all levels of Arizona law enforcement&quot; in responding to the incident.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Border Battles &amp; Diplomatic Duets&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bf7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bf7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pima-county-sheriffs-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pimaCountySheriffsDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pimaCountySheriffsDepartment as default
};
