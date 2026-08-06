import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bellingcat","description":"","frontmatter":{"title":"Bellingcat","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["osint","investigative-journalism","nato","intelligence","russia"],"sources":["raw/badlands-news-brief-50a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bellingcat.md","filePath":"entities/bellingcat.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bellingcat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bellingcat" tabindex="-1">Bellingcat <a class="header-anchor" href="#bellingcat" aria-label="Permalink to &quot;Bellingcat&quot;">​</a></h1><p><strong>Bellingcat</strong> is an open-source intelligence (OSINT) investigation group. In Russian official accounts and in Badlands commentary it is characterized as a NATO OSINT front group linked with Western arms contractors and spy agencies rather than an independent journalistic outfit.[1]</p><h2 id="role-in-the-mig-31-plot-allegations" tabindex="-1">Role in the MiG-31 plot allegations <a class="header-anchor" href="#role-in-the-mig-31-plot-allegations" aria-label="Permalink to &quot;Role in the MiG-31 plot allegations&quot;">​</a></h2><p>In its account of the <a href="/concepts/2025-mig-31-hijacking-plot">2025 MiG-31 hijacking plot</a>, the Russian Federal Security Service (<a href="/entities/fsb">FSB</a>) said a Russian MiG-31 pilot had been contacted by a man introducing himself as Sergey Lugovsky, a researcher for Bellingcat.[1] According to the FSB, Lugovsky initially sought information from the pilot and subsequently offered money in exchange for defection; the pilot declined, after which a Ukrainian agent approached the aircraft&#39;s navigator instead.[1] The FSB attributed the wider operation to Ukraine&#39;s military intelligence service, the <a href="/entities/main-directorate-of-intelligence">HUR</a>, acting in coordination with <a href="/entities/mi6">MI6</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manipulated Maps, Downed Planes, &amp; A Very Stable Genius&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-50a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-50a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bellingcat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bellingcat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bellingcat as default
};
