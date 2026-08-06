import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brewster Kahle","description":"","frontmatter":{"title":"Brewster Kahle","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["brewster-kahle","internet-archive","wayback-machine","digital-preservation"],"sources":["raw/badlands-news-brief-536.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brewster-kahle.md","filePath":"entities/brewster-kahle.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brewster-kahle.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brewster-kahle" tabindex="-1">Brewster Kahle <a class="header-anchor" href="#brewster-kahle" aria-label="Permalink to &quot;Brewster Kahle&quot;">​</a></h1><p>Brewster Kahle is the founder of the <a href="/entities/internet-archive">Internet Archive</a>, the San Francisco nonprofit that maintains the Wayback Machine and its collection of more than 900 billion preserved webpages.[1]</p><h2 id="response-to-the-2024-breach" tabindex="-1">Response to the 2024 breach <a class="header-anchor" href="#response-to-the-2024-breach" aria-label="Permalink to &quot;Response to the 2024 breach&quot;">​</a></h2><p>Following the October 2024 hack of the Internet Archive — in which attackers leaked the data of millions of users and defaced the site — Kahle spoke to the <a href="/entities/washington-post">Washington Post</a> about the organization&#39;s decision to take the site and the Wayback Machine offline to prevent further leaks.[1] He noted that it was the first time in the Archive&#39;s almost 30-year history that it had suffered an outage lasting longer than a few hours.[1]</p><p>Kahle expressed bafflement at the motive for the intrusion, observing that the attackers appeared to have no agenda and made no ransom demand against what is a free repository of digital history: &quot;I don&#39;t know. Why kick the cat?&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Orange Man Reruns &amp; Scandals Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-536" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-536</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brewster-kahle.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brewsterKahle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brewsterKahle as default
};
