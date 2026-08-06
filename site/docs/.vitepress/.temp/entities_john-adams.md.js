import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Adams","description":"","frontmatter":{"title":"John Adams","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["founding-fathers","rule-of-law","american-history"],"sources":["raw/badlands-brief-a1a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-adams.md","filePath":"entities/john-adams.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-adams.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-adams" tabindex="-1">John Adams <a class="header-anchor" href="#john-adams" aria-label="Permalink to &quot;John Adams&quot;">​</a></h1><p>John Adams was an American founder and the second president of the United States, invoked in Badlands commentary as the archetypal exponent of the rule of law.[1]</p><h2 id="invocation-in-rule-of-law-commentary" tabindex="-1">Invocation in rule-of-law commentary <a class="header-anchor" href="#invocation-in-rule-of-law-commentary" aria-label="Permalink to &quot;Invocation in rule-of-law commentary&quot;">​</a></h2><p>Writing about the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a>&#39;s decision clearing the way for dismissal of <a href="/entities/steve-bannon">Steve Bannon</a>&#39;s <a href="/concepts/contempt-of-congress">contempt of Congress</a> case, <a href="/entities/ashe-in-america">Ashe in America</a> said she could not recall the exact words Adams used about the rule of law, but that &quot;the spirit of John Adams&quot; animated the question she posed: do we have rule of law or don&#39;t we?[1] She paired the invocation with a caveat — that the rule-of-law framing was itself, in her reading, an operation designed to stifle emerging ideas of individual liberty in their infancy — while still holding that prosecution should never be political.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;American Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a1a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a1a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-adams.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnAdams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnAdams as default
};
