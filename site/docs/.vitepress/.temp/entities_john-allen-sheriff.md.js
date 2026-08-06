import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Allen (Bernalillo County Sheriff)","description":"","frontmatter":{"title":"John Allen (Bernalillo County Sheriff)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","new-mexico","second-amendment"],"sources":["raw/badlands-news-brief-670.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-allen-sheriff.md","filePath":"entities/john-allen-sheriff.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-allen-sheriff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-allen-bernalillo-county-sheriff" tabindex="-1">John Allen (Bernalillo County Sheriff) <a class="header-anchor" href="#john-allen-bernalillo-county-sheriff" aria-label="Permalink to &quot;John Allen (Bernalillo County Sheriff)&quot;">​</a></h1><p>John Allen is the sheriff of Bernalillo County, New Mexico, the county encompassing Albuquerque.[1]</p><h2 id="response-to-the-2023-firearms-carry-suspension" tabindex="-1">Response to the 2023 firearms carry suspension <a class="header-anchor" href="#response-to-the-2023-firearms-carry-suspension" aria-label="Permalink to &quot;Response to the 2023 firearms carry suspension&quot;">​</a></h2><p>When Governor <a href="/entities/michelle-lujan-grisham">Michelle Lujan Grisham</a> issued an emergency public health order in September 2023 suspending public carry of firearms in Albuquerque and Bernalillo County for at least thirty days, Allen said he was uneasy about the measure because it raised too many questions about constitutional rights.[1] His hesitancy, combined with Albuquerque police chief <a href="/entities/harold-medina">Harold Medina</a>&#39;s outright refusal to enforce the order, left the directive largely unenforced by local law enforcement and contributed to the backlash that produced impeachment calls from New Mexico lawmakers.[1] The dispute was framed by critics as a test of whether a state executive can suspend a right protected by the <a href="/concepts/second-amendment">Second Amendment</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musk the Peacemaker, Constitutional Overreach &amp; POTATUS&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-670" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-670</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-allen-sheriff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnAllenSheriff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnAllenSheriff as default
};
