import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Accountability Foundation","description":"","frontmatter":{"title":"American Accountability Foundation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["watchdog","doj","cybersecurity","ethics"],"sources":["raw/badlands-brief-739.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/american-accountability-foundation.md","filePath":"entities/american-accountability-foundation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-accountability-foundation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-accountability-foundation" tabindex="-1">American Accountability Foundation <a class="header-anchor" href="#american-accountability-foundation" aria-label="Permalink to &quot;American Accountability Foundation&quot;">​</a></h1><p>The American Accountability Foundation is a watchdog organization that in May 2026 filed a referral with the <a href="/entities/department-of-justice">Justice Department</a> accusing former Deputy Attorney General <a href="/entities/lisa-monaco">Lisa Monaco</a> of shielding <a href="/entities/microsoft">Microsoft</a> from cybersecurity enforcement actions before joining the company in 2025 as President of Global Affairs.[1]</p><h2 id="the-microsoft-complaint" tabindex="-1">The Microsoft complaint <a class="header-anchor" href="#the-microsoft-complaint" aria-label="Permalink to &quot;The Microsoft complaint&quot;">​</a></h2><p>The foundation&#39;s referral argues that the Biden Justice Department declined to bring major action against Microsoft despite cyber intrusions between 2019 and 2023 tied to Russian and Chinese hackers that reportedly compromised sensitive US government systems, while the department&#39;s <a href="/concepts/civil-cyber-fraud-initiative">Civil Cyber-Fraud Initiative</a> targeted other contractors for allegedly less serious misconduct.[1] The group identified additional former Biden cybersecurity officials who later moved to Microsoft or connected firms, including <a href="/entities/john-p-carlin">John P. Carlin</a> and <a href="/entities/bryan-vorndran">Bryan A. Vorndran</a>.[1]</p><p>The foundation asked departmental inspectors general to investigate potential violations of ethics, recusal, and revolving-door restrictions, and to assess whether Microsoft could face <a href="/concepts/false-claims-act">False Claims Act</a> liability for statements made to federal agencies about system security.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-accountability-foundation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanAccountabilityFoundation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanAccountabilityFoundation as default
};
