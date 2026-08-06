import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Meyer Lansky","description":"","frontmatter":{"title":"Meyer Lansky","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["organized-crime","cia","vietnam-war"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"low"},"headers":[],"relativePath":"entities/meyer-lansky.md","filePath":"entities/meyer-lansky.md","lastUpdated":null}');
const _sfc_main = { name: "entities/meyer-lansky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="meyer-lansky" tabindex="-1">Meyer Lansky <a class="header-anchor" href="#meyer-lansky" aria-label="Permalink to &quot;Meyer Lansky&quot;">​</a></h1><p>Meyer Lansky is identified by Erik Carlson as the figure sitting at the top of the <a href="/entities/jewish-mafia">Jewish Mafia</a>.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="role-in-the-article" tabindex="-1">Role in the article <a class="header-anchor" href="#role-in-the-article" aria-label="Permalink to &quot;Role in the article&quot;">​</a></h2><p>Under Lansky, <a href="/entities/mickey-cohen">Mickey Cohen</a> ran Hollywood and <a href="/entities/bugsy-siegel">Bugsy Siegel</a> ran Las Vegas — an arrangement that ended when Lansky, Siegel&#39;s good friend, discovered that Siegel&#39;s girlfriend was skimming money and had him killed.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><p>Carlson further asserts that Lansky was the <a href="/entities/cia">CIA</a>&#39;s man, running the agency&#39;s drugs out of the Golden Triangle during the Vietnam War, and that the CIA could not allow the American public to know this.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a> He connects that motive to the timing of <em><a href="/concepts/the-godfather">The Godfather</a></em>, published in 1969 and released as a film in 1972 in the heat of the Vietnam War, which redirected public attention onto the <a href="/entities/italian-mafia">Italian Mafia</a>.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Journey of Ever-changing Truths&quot;, URL: <a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-journey-of-ever-changing-truths</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/meyer-lansky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const meyerLansky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  meyerLansky as default
};
