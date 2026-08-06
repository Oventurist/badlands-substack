import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Security Archive","description":"","frontmatter":{"title":"National Security Archive","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["declassification","foia","research-institute","transparency"],"sources":["raw/badlands-news-brief-32d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-security-archive.md","filePath":"entities/national-security-archive.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-security-archive.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-security-archive" tabindex="-1">National Security Archive <a class="header-anchor" href="#national-security-archive" aria-label="Permalink to &quot;National Security Archive&quot;">​</a></h1><p>The National Security Archive is an independent research institute at George Washington University that pursues the declassification of U.S. government records, frequently through Freedom of Information Act litigation.[1]</p><h2 id="clinton–putin-summit-transcript" tabindex="-1">Clinton–Putin summit transcript <a class="header-anchor" href="#clinton–putin-summit-transcript" aria-label="Permalink to &quot;Clinton–Putin summit transcript&quot;">​</a></h2><p>In August 2025 the Archive obtained the release of the transcript of the first summit between U.S. President <a href="/entities/bill-clinton">Bill Clinton</a> and Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a>, held at the Kremlin on June 4, 2000, following a Freedom of Information lawsuit it had filed.[1] According to the minutes, Clinton proposed a joint US–Russian effort against international terrorism, asking Putin, &quot;What about anti-terrorism cooperation between our countries, particularly against Usama bin Laden?&quot; and proposing a &quot;coordinated strategy&quot; between Washington and Moscow.[1]</p><p>Badlands writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> commented that the exchange&#39;s absence from public knowledge during the first <a href="/entities/donald-trump">Trump</a> administration was notable, since it would have diffused much of the public gaslighting that painted Putin as an evil dictator.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Pre-Dawn Raids, Russiagate Racketeering, &amp; Real-Time Adverse Reporting&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-32d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-32d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-security-archive.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalSecurityArchive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalSecurityArchive as default
};
