import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Devolution Power Hour","description":"","frontmatter":{"title":"Devolution Power Hour","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["badlands-media","show","devolution","continuity-of-government"],"sources":["raw/badlands-media-show-schedule-c28.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/devolution-power-hour.md","filePath":"concepts/devolution-power-hour.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/devolution-power-hour.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="devolution-power-hour" tabindex="-1">Devolution Power Hour <a class="header-anchor" href="#devolution-power-hour" aria-label="Permalink to &quot;Devolution Power Hour&quot;">​</a></h1><p>The <strong>Devolution Power Hour</strong> is the flagship program of <a href="/entities/badlands-media">Badlands Media</a> and, by the network&#39;s own account, &quot;the show that started it all on the Badlands Media Network.&quot;[1]</p><p>Hosted by Badlands founder <a href="/entities/jon-herold">Jon Herold</a> — known publicly as Patel Patriot — the program analyzes recent events through the lens of <a href="/concepts/devolution">Devolution</a> and <a href="/concepts/continuity-of-government">Continuity of Government</a> theories, the research thesis that first built Herold&#39;s audience.[1]</p><p>As of the December 2022 schedule the show aired twice weekly at 10:30pm ET: Wednesday nights with co-host <a href="/entities/burning-bright">Burning Bright</a>, and Saturday nights with co-host <a href="/entities/patrick-gunnels">Patrick Gunnels</a>.[1] Like all Badlands programming, it aired live on the Patel Patriot Rumble channel with replays archived in library format on the Badlands Media Network channel.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-c28" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-c28</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/devolution-power-hour.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const devolutionPowerHour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  devolutionPowerHour as default
};
