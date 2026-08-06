import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Badlands Daily","description":"","frontmatter":{"title":"Badlands Daily","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["badlands-media","show","citizen-journalism"],"sources":["raw/badlands-media-show-schedule-c28.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/badlands-daily.md","filePath":"concepts/badlands-daily.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/badlands-daily.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="badlands-daily" tabindex="-1">Badlands Daily <a class="header-anchor" href="#badlands-daily" aria-label="Permalink to &quot;Badlands Daily&quot;">​</a></h1><p><strong>Badlands Daily</strong> is the weekday flagship news program of <a href="/entities/badlands-media">Badlands Media</a>, airing Monday through Friday at 10am ET as of the network&#39;s December 2022 schedule.[1]</p><p>Co-hosted by <a href="/entities/jon-herold">Jon Herold</a> and <a href="/entities/canncon">CannCon</a>, the show analyzes ongoing events in what the network describes as a traditional news broadcast style, but deliberately without &quot;the Mainstream Media spin and corporate BS.&quot;[1] It functions as the anchor of the daily lineup, setting the agenda for the network&#39;s later analysis and long-form programs.[1]</p><p>Badlands Daily aired live on the Patel Patriot Rumble channel, with replays archived in library format on the Badlands Media Network channel.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-c28" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-c28</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/badlands-daily.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const badlandsDaily = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  badlandsDaily as default
};
