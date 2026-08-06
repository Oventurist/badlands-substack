import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Burck","description":"","frontmatter":{"title":"Bill Burck","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["attorney","washington-lawyer","congressional-testimony"],"sources":["raw/badlands-news-brief-26c.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bill-burck.md","filePath":"entities/bill-burck.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-burck.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-burck" tabindex="-1">Bill Burck <a class="header-anchor" href="#bill-burck" aria-label="Permalink to &quot;Bill Burck&quot;">​</a></h1><p>Bill Burck is a Washington defense attorney known for representing senior officials in congressional and executive-branch investigations.[1]</p><h2 id="representation-of-robert-hur" tabindex="-1">Representation of Robert Hur <a class="header-anchor" href="#representation-of-robert-hur" aria-label="Permalink to &quot;Representation of Robert Hur&quot;">​</a></h2><p>In February 2024, special counsel <a href="/entities/robert-hur">Robert Hur</a> retained Burck as his personal attorney as House Republicans sought his testimony before the <a href="/entities/house-judiciary-committee">House Judiciary Committee</a> about his report on President <a href="/entities/joe-biden">Joe Biden</a>&#39;s handling of classified documents.[1] CNN reported that while no date had been set, the parties were looking toward the end of February for an appearance.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Russia Collusion is Back ... Unlike Biden&#39;s Memories&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-26c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-26c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-burck.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billBurck = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billBurck as default
};
