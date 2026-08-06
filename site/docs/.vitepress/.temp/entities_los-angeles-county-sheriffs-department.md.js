import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Los Angeles County Sheriff's Department","description":"","frontmatter":{"title":"Los Angeles County Sheriff's Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","california","swalwell"],"sources":["raw/badlands-brief-9ea.md"],"confidence":"low"},"headers":[],"relativePath":"entities/los-angeles-county-sheriffs-department.md","filePath":"entities/los-angeles-county-sheriffs-department.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/los-angeles-county-sheriffs-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="los-angeles-county-sheriff-s-department" tabindex="-1">Los Angeles County Sheriff&#39;s Department <a class="header-anchor" href="#los-angeles-county-sheriff-s-department" aria-label="Permalink to &quot;Los Angeles County Sheriff&#39;s Department&quot;">​</a></h1><p>The Los Angeles County Sheriff&#39;s Department is the California law enforcement agency with which former model <a href="/entities/lonna-drewes">Lonna Drewes</a> filed a rape claim against Representative <a href="/entities/eric-swalwell">Eric Swalwell</a> in April 2026.[1] Drewes alleged that in July 2018 Swalwell drugged her with a spiked glass of wine in a room at the Montrose Hotel in West Hollywood, then raped and choked her unconscious.[1] The Sheriff&#39;s Department confirmed the location of the alleged incident, a detail that aligned with FEC records showing &quot;Swalwell for Congress&quot; spent $361 at that hotel on July 18, 2018.[1] The filing formed part of the wider <a href="/concepts/eric-swalwell-sexual-misconduct-scandal">Swalwell sexual misconduct scandal</a> that preceded his resignation from <a href="/entities/congress">Congress</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Politician is Swallowelled Whole as the Middle East Realigns in Real Time&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9ea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9ea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/los-angeles-county-sheriffs-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const losAngelesCountySheriffsDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  losAngelesCountySheriffsDepartment as default
};
