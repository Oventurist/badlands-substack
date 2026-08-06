import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OceanGate","description":"","frontmatter":{"title":"OceanGate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["submersible","titanic","maritime",2023],"sources":["raw/badlands-news-brief-090.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/oceangate.md","filePath":"entities/oceangate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oceangate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oceangate" tabindex="-1">OceanGate <a class="header-anchor" href="#oceangate" aria-label="Permalink to &quot;OceanGate&quot;">​</a></h1><p>OceanGate is the company that operated the Titanic exploration submersible which lost contact with its surface support vessel in June 2023, touching off an international search.[1]</p><h2 id="loss-of-contact-and-the-starlink-claim" tabindex="-1">Loss of contact and the Starlink claim <a class="header-anchor" href="#loss-of-contact-and-the-starlink-claim" aria-label="Permalink to &quot;Loss of contact and the Starlink claim&quot;">​</a></h2><p>The submersible lost communication with its mothership on Sunday, June 18, 2023.[1] On June 20, the fact-checking site <a href="/entities/snopes">Snopes</a> published an article asking whether the missing submersible had been using satellites belonging to <a href="/entities/elon-musk">Elon Musk</a>&#39;s company, implying that a <a href="/entities/starlink">Starlink</a> failure was responsible for the loss of contact.[1]</p><p>A Twitter community note corrected the framing, observing that although OceanGate had used Starlink services, those services supported the company&#39;s surface vessels, not its submersibles, and that radio frequencies such as Starlink&#39;s do not work underwater.[1] Snopes subsequently downgraded its rating from its original assessment to &quot;Unproven&quot; and then to &quot;False,&quot; acknowledging in an editor&#39;s note that while OceanGate said it was using Starlink satellites for the expedition, the submersible itself did not use the technology to communicate, and that the extent of the mothership&#39;s use of Starlink remained unknown.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunter Hunted, Billionaire Boxing &amp; Snopes Nopes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-090" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-090</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oceangate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oceangate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oceangate as default
};
