import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Civil Cyber-Fraud Initiative","description":"","frontmatter":{"title":"Civil Cyber-Fraud Initiative","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["doj","cybersecurity","false-claims-act","contractors"],"sources":["raw/badlands-brief-739.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/civil-cyber-fraud-initiative.md","filePath":"concepts/civil-cyber-fraud-initiative.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/civil-cyber-fraud-initiative.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="civil-cyber-fraud-initiative" tabindex="-1">Civil Cyber-Fraud Initiative <a class="header-anchor" href="#civil-cyber-fraud-initiative" aria-label="Permalink to &quot;Civil Cyber-Fraud Initiative&quot;">​</a></h1><p>The Civil Cyber-Fraud Initiative is a <a href="/entities/department-of-justice">Justice Department</a> enforcement program that pursues federal contractors over alleged misrepresentations regarding the cybersecurity of systems they provide to the government.[1] The initiative was overseen by then-Deputy Attorney General <a href="/entities/lisa-monaco">Lisa Monaco</a>.[1]</p><p>The program became central to a May 2026 referral filed by the <a href="/entities/american-accountability-foundation">American Accountability Foundation</a>, which contended that the initiative targeted other contractors for allegedly less serious misconduct while no comparable case was ever brought against <a href="/entities/microsoft">Microsoft</a>, despite intrusions between 2019 and 2023 attributed to Russian and Chinese hackers that reportedly compromised sensitive US government systems.[1] The referral asked whether Microsoft could face <a href="/concepts/false-claims-act">False Claims Act</a> liability of the kind the initiative was designed to pursue.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/civil-cyber-fraud-initiative.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const civilCyberFraudInitiative = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  civilCyberFraudInitiative as default
};
