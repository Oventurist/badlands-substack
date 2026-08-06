import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Press Freedom Day","description":"","frontmatter":{"title":"World Press Freedom Day","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["press-freedom","media","disinformation","journalism"],"sources":["raw/badlands-news-brief-3f5.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/world-press-freedom-day.md","filePath":"concepts/world-press-freedom-day.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/world-press-freedom-day.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-press-freedom-day" tabindex="-1">World Press Freedom Day <a class="header-anchor" href="#world-press-freedom-day" aria-label="Permalink to &quot;World Press Freedom Day&quot;">​</a></h1><p>World Press Freedom Day is an annual observance, marked on May 3, dedicated to journalism and the defense of a free press.[1] In the Badlands corpus it appears chiefly as the occasion for two events on May 3, 2023 that the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> treated as ironic.[1]</p><p>Former President <a href="/entities/barack-obama">Barack Obama</a> released a video — recorded earlier for a conference on democracy held by the Columbia Journalism School in late April 2023 — lecturing about &quot;widespread disinformation&quot; and the need for journalists to create &quot;an information environment&quot; supportive of democracy, touting the importance of journalism in the struggle for democracy and ways to defend the truth.[1] <a href="/entities/absolutetruth1776">AbsoluteTruth1776</a> responded that Obama, &quot;as the king of misinformation himself,&quot; was uniquely unsuited to deliver such a speech.[1]</p><p>The same day, Secretary of State <a href="/entities/antony-blinken">Antony Blinken</a> appeared at a Washington Post event previewing the 2023 World Press Freedom Index, where he dismissed Russian claims about the <a href="/concepts/2023-kremlin-drone-attack">Kremlin drone attack</a>, saying he would take anything from the Kremlin &quot;with a very large shaker of salt.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Drone Strikes, Hunter Hunted &amp; Obama Resurfaces&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/world-press-freedom-day.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldPressFreedomDay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldPressFreedomDay as default
};
