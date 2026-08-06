import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Larry Devoe","description":"","frontmatter":{"title":"Larry Devoe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","prosecutor","human-rights"],"sources":["raw/badlands-brief-861.md"],"confidence":"low"},"headers":[],"relativePath":"entities/larry-devoe.md","filePath":"entities/larry-devoe.md","lastUpdated":null}');
const _sfc_main = { name: "entities/larry-devoe.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="larry-devoe" tabindex="-1">Larry Devoe <a class="header-anchor" href="#larry-devoe" aria-label="Permalink to &quot;Larry Devoe&quot;">​</a></h1><p>Larry Devoe is a Venezuelan official who was named acting Attorney General of <a href="/entities/venezuela">Venezuela</a> in February 2026, succeeding <a href="/entities/tarek-william-saab">Tarek William Saab</a>.[1]</p><h2 id="background-and-appointment" tabindex="-1">Background and appointment <a class="header-anchor" href="#background-and-appointment" aria-label="Permalink to &quot;Background and appointment&quot;">​</a></h2><p>Devoe previously served as head of Venezuela&#39;s National Council of Human Rights.[1] He assumed the acting attorney general role after Saab resigned following nearly nine years in office and was immediately appointed acting Ombudsman by the <a href="/entities/national-assembly-of-venezuela">National Assembly</a>.[1] The legislature simultaneously created a 13-member parliamentary commission with a 30-day deadline to evaluate candidates and define the permanent heads of both the Attorney General&#39;s Office and the Ombudsman&#39;s Office, leaving Devoe&#39;s tenure explicitly provisional.[1]</p><p>Human rights organizations criticized the reshuffle, questioning the independence of Venezuela&#39;s prosecutorial and human rights institutions even as other reforms — including a limited <a href="/concepts/venezuela-amnesty-law">amnesty law</a> — advanced through the legislature.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Floridian Terror Boats, Venezuelan Deck Chairs, &amp; the War on Fraud&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-861" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-861</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/larry-devoe.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const larryDevoe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  larryDevoe as default
};
