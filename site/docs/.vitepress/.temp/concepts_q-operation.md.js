import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Q Operation","description":"","frontmatter":{"title":"Q Operation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["qanon","conspiracy-theory","badlands-media","intelligence"],"sources":["raw/badlands-media-weekly-show-schedule-36d.md"],"confidence":"high"},"headers":[],"relativePath":"concepts/q-operation.md","filePath":"concepts/q-operation.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/q-operation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The Q Operation, as referenced by <a href="/entities/badlands-media">badlands-media</a>, is framed as &quot;the biggest Military Intelligence Information Dissemination Program ever launched.&quot;[1] The network&#39;s Eye of the Storm show (Tuesday, 10:30pm ET), hosted by Stormy Patriot Joe and Absolute1776, analyzes ongoing events &quot;through the lens of the biggest Military Intelligence Information Dissemination Program ever launched,&quot; i.e., the Q Operation.[1] The terminology reflects the QAnon-associated belief system prominent within the broader <a href="/concepts/truth-community">truth-community</a> that Badlands Media serves.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Weekly Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/q-operation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qOperation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qOperation as default
};
