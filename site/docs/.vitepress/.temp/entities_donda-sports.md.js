import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Donda Sports","description":"","frontmatter":{"title":"Donda Sports","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sports","fashion","kanye-west","business"],"sources":["raw/badlands-news-brief-481.md"],"confidence":"low"},"headers":[],"relativePath":"entities/donda-sports.md","filePath":"entities/donda-sports.md","lastUpdated":null}');
const _sfc_main = { name: "entities/donda-sports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="donda-sports" tabindex="-1">Donda Sports <a class="header-anchor" href="#donda-sports" aria-label="Permalink to &quot;Donda Sports&quot;">​</a></h1><p>Donda Sports is the sports fashion brand created by the musician and designer <a href="/entities/kanye-west">Kanye West</a>.[1] The organization operates as a sports-focused extension of West&#39;s broader Donda branding.</p><p>Badlands Media noted in October 2024 that retired NFL wide receiver <a href="/entities/antonio-brown">Antonio Brown</a> serves as the current president of Donda Sports, meaning that Brown — then publicly campaigning for <a href="/entities/donald-trump">Donald Trump</a> and offering to serve in a future Trump administration — works for West.[1] Badlands treated the connection as a notable convergence of two cultural storylines, writing that the &quot;Yevolution&quot; was &quot;not only back on the menu, but merging with the Trumpamania storyline.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Donald&#39;s Drive-Thru Goes Viral as Iran Makes Moves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-481" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-481</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/donda-sports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dondaSports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dondaSports as default
};
