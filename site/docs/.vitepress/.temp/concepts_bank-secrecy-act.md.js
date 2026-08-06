import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank Secrecy Act","description":"","frontmatter":{"title":"Bank Secrecy Act","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","financial-crime","money-laundering","treasury"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/bank-secrecy-act.md","filePath":"concepts/bank-secrecy-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/bank-secrecy-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bank-secrecy-act" tabindex="-1">Bank Secrecy Act <a class="header-anchor" href="#bank-secrecy-act" aria-label="Permalink to &quot;Bank Secrecy Act&quot;">​</a></h1><p>The Bank Secrecy Act is the principal U.S. anti-money-laundering statute, imposing reporting and recordkeeping obligations on financial institutions and forming the legal backbone of enforcement work by the <a href="/entities/financial-crimes-enforcement-network">Financial Crimes Enforcement Network</a>.[1]</p><h2 id="role-in-the-2026-whistleblower-portal" tabindex="-1">Role in the 2026 whistleblower portal <a class="header-anchor" href="#role-in-the-2026-whistleblower-portal" aria-label="Permalink to &quot;Role in the 2026 whistleblower portal&quot;">​</a></h2><p>When the <a href="/entities/us-department-of-the-treasury">U.S. Department of the Treasury</a> launched a confidential whistleblower tip website on February 13, 2026, Treasury Secretary <a href="/entities/scott-bessent">Scott Bessent</a> said the portal would allow individuals to report suspected misconduct involving violations of the Bank Secrecy Act, U.S. sanctions programs and other financial laws.[1] Reports leading to successful enforcement actions may qualify the tipster for monetary awards funded through the enforcement process.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/bank-secrecy-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankSecrecyAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankSecrecyAct as default
};
