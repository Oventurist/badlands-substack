import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dave Rubin","description":"","frontmatter":{"title":"Dave Rubin","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","media","free-speech","cancel-culture"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/dave-rubin.md","filePath":"entities/dave-rubin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dave-rubin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dave-rubin" tabindex="-1">Dave Rubin <a class="header-anchor" href="#dave-rubin" aria-label="Permalink to &quot;Dave Rubin&quot;">​</a></h1><p>Dave Rubin is an American political commentator, talk show host, and author who rose to prominence as a &quot;classical liberal&quot; critic of what he terms the &quot;radical left,&quot; and who is grouped by Badlands Media among the self-proclaimed &quot;free speech&quot; champions of the American right.</p><h2 id="role-in-the-free-speech-debate" tabindex="-1">Role in the free speech debate <a class="header-anchor" href="#role-in-the-free-speech-debate" aria-label="Permalink to &quot;Role in the free speech debate&quot;">​</a></h2><p>The article &quot;A Glaring Double Standard&quot; names Rubin alongside <a href="/entities/bari-weiss">Bari Weiss</a> and outlets the source labels &quot;Con INC.&quot; (the <a href="/entities/daily-wire">Daily Wire</a> and the Babylon Bee) as figures who &quot;billed themselves as &#39;opposed to cancel culture,&#39; advocated for freedom of thought, and rallied against the policing of public discourse — especially when conservatives were fired from their jobs for expressing their beliefs.&quot;</p><h2 id="alleged-inconsistency-after-october-7" tabindex="-1">Alleged inconsistency after October 7 <a class="header-anchor" href="#alleged-inconsistency-after-october-7" aria-label="Permalink to &quot;Alleged inconsistency after October 7&quot;">​</a></h2><p>In the article&#39;s conclusion, the author argues that Rubin, like <a href="/entities/ben-shapiro">Ben Shapiro</a> and Weiss, had once &quot;decried &#39;safe spaces&#39; and cancel culture,&quot; but came to &quot;cheer or tacitly support the silencing of Israel critics&quot; after the October 7, 2023 attack on Israel. The source concludes that this reversal reveals &quot;that their commitment to free speech was always conditional, tethered to tribal loyalties rather than principle.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dave-rubin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const daveRubin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  daveRubin as default
};
