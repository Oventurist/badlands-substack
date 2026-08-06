import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Operation Paperclip","description":"","frontmatter":{"title":"Operation Paperclip","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["history","intelligence-community","nazi-germany","rocketry"],"sources":["raw/badlands-news-brief-423.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/operation-paperclip.md","filePath":"concepts/operation-paperclip.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/operation-paperclip.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="operation-paperclip" tabindex="-1">Operation Paperclip <a class="header-anchor" href="#operation-paperclip" aria-label="Permalink to &quot;Operation Paperclip&quot;">​</a></h1><p>Operation Paperclip was the post–World War II United States program under which German scientists, including former Nazis, were brought to America to work on military and aerospace projects.[1]</p><p>Its most prominent alumnus was rocket engineer <a href="/entities/wernher-von-braun">Wernher von Braun</a>, described in <a href="/entities/badlands-media">Badlands Media</a> commentary as &quot;one of the more prolific Operation Paperclip Nazi&#39;s.&quot;[1] Von Braun is cited in that commentary as having claimed that a global false flag operation involving projections of extraterrestrial craft in the sky — alongside projections of gods, mystics and other spiritual figures — had been planned as far back as the 1960s, if not earlier.[1] That claim is a foundational reference point for the <a href="/concepts/alien-disclosure-op">alien disclosure operation</a> thesis advanced in discussion of the 2023 <a href="/entities/david-grusch">David Grusch</a> whistleblower testimony.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gheyliens, Ukrainian Nazis &amp; Post Office Shenanigans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-423" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-423</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/operation-paperclip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const operationPaperclip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  operationPaperclip as default
};
