import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dwayne Johnson","description":"","frontmatter":{"title":"Dwayne Johnson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["entertainment","wrestling","celebrity-politics"],"sources":["raw/badlands-news-brief-42e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dwayne-johnson.md","filePath":"entities/dwayne-johnson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dwayne-johnson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dwayne-johnson" tabindex="-1">Dwayne Johnson <a class="header-anchor" href="#dwayne-johnson" aria-label="Permalink to &quot;Dwayne Johnson&quot;">​</a></h1><p>Dwayne &quot;The Rock&quot; Johnson is an American actor and former professional wrestler, described in Badlands commentary as perhaps the most famous &quot;heel&quot; character in the history of <a href="/entities/world-wrestling-entertainment">World Wrestling Entertainment</a>.[1]</p><h2 id="speculation-about-a-presidential-run" tabindex="-1">Speculation about a presidential run <a class="header-anchor" href="#speculation-about-a-presidential-run" aria-label="Permalink to &quot;Speculation about a presidential run&quot;">​</a></h2><p>In November 2023 Johnson told The Guardian that he had been asked &quot;by both parties&quot; to run for president of the United States.[1] Writing in July 2024, <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cited that claim while speculating that the post-<a href="/entities/joe-biden">Biden</a> Democratic field resembled a wrestling battle royal to determine who would face <a href="/entities/donald-trump">Donald Trump</a> in November — a scenario the author framed under the heading &quot;<a href="/concepts/trumpamania">Trumpmania</a> 2024&quot; and connected to the <a href="/concepts/kayfabe">kayfabe</a> symbolism on display at the <a href="/concepts/2024-republican-national-convention">2024 Republican National Convention</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Change of Batter, Indeed …&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-42e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-42e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dwayne-johnson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dwayneJohnson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dwayneJohnson as default
};
