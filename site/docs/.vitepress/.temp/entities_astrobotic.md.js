import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Astrobotic","description":"","frontmatter":{"title":"Astrobotic","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["space","commercial-spaceflight","nasa-contractor","pittsburgh"],"sources":["raw/badlands-news-brief-2b8.md"],"confidence":"high"},"headers":[],"relativePath":"entities/astrobotic.md","filePath":"entities/astrobotic.md","lastUpdated":null}');
const _sfc_main = { name: "entities/astrobotic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="astrobotic" tabindex="-1">Astrobotic <a class="header-anchor" href="#astrobotic" aria-label="Permalink to &quot;Astrobotic&quot;">​</a></h1><p>Astrobotic is a Pittsburgh-based commercial space company that built and operated the <a href="/concepts/peregrine-mission-one">Peregrine One</a> lunar lander, the American robotic spacecraft that failed en route to the Moon in January 2024.[1]</p><h2 id="peregrine-mission-one" tabindex="-1">Peregrine Mission One <a class="header-anchor" href="#peregrine-mission-one" aria-label="Permalink to &quot;Peregrine Mission One&quot;">​</a></h2><p>Astrobotic&#39;s roughly $108 million Peregrine lander launched from Florida aboard a Vulcan rocket in early January 2024 and suffered a critical propellant leak shortly after launch. Company engineers stabilized the spacecraft, but the loss of oxidizer made a safe lunar touchdown impossible.[1]</p><p>Working with <a href="/entities/nasa">NASA</a> and other space companies to determine the safest and most responsible end to the mission, Astrobotic decided to dispose of the craft by allowing it to re-enter Earth&#39;s atmosphere on January 18, 2024, rather than let it drift through space as a collision hazard. The lander burned up over the South Pacific, destroying its payload — which reportedly included a sample of President <a href="/entities/john-f-kennedy">John F. Kennedy</a>&#39;s DNA and the ashes of dozens of people.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Congress Limps Along as the Nation Grits Its Teeth&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2b8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2b8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/astrobotic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const astrobotic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  astrobotic as default
};
