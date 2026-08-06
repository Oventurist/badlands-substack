import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cisco Systems","description":"","frontmatter":{"title":"Cisco Systems","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","corporations","litigation","supreme-court","china"],"sources":["raw/badlands-brief-b34.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cisco-systems.md","filePath":"entities/cisco-systems.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cisco-systems.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cisco-systems" tabindex="-1">Cisco Systems <a class="header-anchor" href="#cisco-systems" aria-label="Permalink to &quot;Cisco Systems&quot;">​</a></h1><p><strong>Cisco Systems, Inc.</strong> is a major American networking and telecommunications equipment corporation.[1] It became the named petitioner in a landmark 2026 <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> case concerning the reach of United States human rights statutes to corporate conduct abroad.[1]</p><h2 id="cisco-systems-inc-v-doe" tabindex="-1">Cisco Systems, Inc. v. Doe <a class="header-anchor" href="#cisco-systems-inc-v-doe" aria-label="Permalink to &quot;Cisco Systems, Inc. v. Doe&quot;">​</a></h2><p>In Cisco Systems, Inc. v. Doe (No. 24-856), decided June 23, 2026, the Court held that federal courts may not create new causes of action under the <a href="/concepts/alien-tort-statute">Alien Tort Statute</a> to remedy violations of international law, including aiding-and-abetting liability, and that the <a href="/concepts/torture-victim-protection-act">Torture Victim Protection Act</a> does not impose aiding-and-abetting liability because its text requires that a defendant have &quot;subjected&quot; another to torture through direct causation.[1] The ruling was part of a group of opinions issued as the term neared its close.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Old Guard Is Very Confused About What&#39;s Happening to Them&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b34" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b34</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cisco-systems.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ciscoSystems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ciscoSystems as default
};
