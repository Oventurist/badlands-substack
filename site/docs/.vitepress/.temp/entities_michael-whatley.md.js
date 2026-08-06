import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Whatley","description":"","frontmatter":{"title":"Michael Whatley","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["republican-national-committee","election-integrity","nevada","litigation"],"sources":["raw/badlands-news-brief-214.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michael-whatley.md","filePath":"entities/michael-whatley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-whatley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-whatley" tabindex="-1">Michael Whatley <a class="header-anchor" href="#michael-whatley" aria-label="Permalink to &quot;Michael Whatley&quot;">​</a></h1><p>Michael Whatley is the chairman of the <a href="/entities/republican-national-committee">Republican National Committee</a>.[1]</p><h2 id="nevada-mail-ballot-lawsuit" tabindex="-1">Nevada mail-ballot lawsuit <a class="header-anchor" href="#nevada-mail-ballot-lawsuit" aria-label="Permalink to &quot;Nevada mail-ballot lawsuit&quot;">​</a></h2><p>In June 2024 Whatley was the public face of a lawsuit brought by the RNC, <a href="/entities/donald-trump">Donald Trump</a>&#39;s campaign and the Nevada Republican Party against the state of Nevada over its practice of counting mail-in ballots received the day after an election that carry no postmark.[1] The RNC noted that under Nevada law mail ballots are required &quot;to be postmarked on or before Election Day,&quot; and said it had discovered that state election officials routinely counted non-postmarked mail ballots received after Election Day in violation of that law.[1]</p><p>In a press release, Whatley said that &quot;counting ballots received after Election Day without a postmark creates a concerning and potentially fraudulent impact on Nevada&#39;s elections,&quot; and that the suit was filed &quot;to ensure that Nevada law is followed and promote election integrity in the Silver State.&quot;[1] The action formed part of the RNC&#39;s broader <a href="/concepts/mail-in-voting">mail-in voting</a> litigation strategy ahead of the November 2024 election.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Weaponized Governments and Embattled Bidens&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-214" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-214</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-whatley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelWhatley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelWhatley as default
};
