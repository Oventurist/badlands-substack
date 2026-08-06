import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sinclair Broadcast Group","description":"","frontmatter":{"title":"Sinclair Broadcast Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","broadcasting","television","affiliates"],"sources":["raw/badlands-news-brief-732.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sinclair-broadcast-group.md","filePath":"entities/sinclair-broadcast-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sinclair-broadcast-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sinclair-broadcast-group" tabindex="-1">Sinclair Broadcast Group <a class="header-anchor" href="#sinclair-broadcast-group" aria-label="Permalink to &quot;Sinclair Broadcast Group&quot;">​</a></h1><p>Sinclair Broadcast Group is an American television broadcasting company that controls a large portfolio of local network affiliate stations.[1]</p><h2 id="role-in-the-kimmel-suspension" tabindex="-1">Role in the Kimmel suspension <a class="header-anchor" href="#role-in-the-kimmel-suspension" aria-label="Permalink to &quot;Role in the Kimmel suspension&quot;">​</a></h2><p>In September 2025, Sinclair-controlled affiliates announced they would indefinitely cancel broadcasts of <a href="/entities/jimmy-kimmel">Jimmy Kimmel</a>&#39;s show following his monologue remarks about the death of <a href="/entities/charlie-kirk">Charlie Kirk</a>.[1] The move, made in parallel with <a href="/entities/nexstar-media-group">Nexstar Media Group</a>, came before <a href="/entities/abc-news">ABC</a> announced it would indefinitely halt production of the program.[1] See <a href="/concepts/jimmy-kimmel-live-suspension">Jimmy Kimmel Live! suspension</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Terror Designation &amp; A Breath of Fresh Air&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-732" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-732</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sinclair-broadcast-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sinclairBroadcastGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sinclairBroadcastGroup as default
};
