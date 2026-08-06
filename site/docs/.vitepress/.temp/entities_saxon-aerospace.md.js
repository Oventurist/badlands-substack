import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Saxon Aerospace","description":"","frontmatter":{"title":"Saxon Aerospace","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["drones","aerospace","defense-industry"],"sources":["raw/badlands-news-brief-86f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/saxon-aerospace.md","filePath":"entities/saxon-aerospace.md","lastUpdated":null}');
const _sfc_main = { name: "entities/saxon-aerospace.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="saxon-aerospace" tabindex="-1">Saxon Aerospace <a class="header-anchor" href="#saxon-aerospace" aria-label="Permalink to &quot;Saxon Aerospace&quot;">​</a></h1><p>Saxon Aerospace is an American aerospace company specializing in military-grade unmanned aerial systems.[1] The firm entered wider public discussion in December 2024 when its founder, <a href="/entities/john-ferguson">John Ferguson</a>, published a video on TikTok offering a technical explanation for the wave of <a href="/concepts/2024-northeast-drone-sightings">unexplained drone sightings over New Jersey</a>.[1]</p><p>Speaking from the perspective of a drone manufacturer, Ferguson described the range of payloads such aircraft can carry — laser sensors, optics and thermal imaging — and argued that low-altitude night flights make sense only if the operators are attempting to detect something on the ground, such as gas leaks or radioactive material.[1] The company&#39;s technical credibility was central to the traction the &quot;nuclear sniffer&quot; theory gained in alternative media coverage of the sightings.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Media Apologies, Fake &amp; Gay Drones and Trump Appointments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-86f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-86f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/saxon-aerospace.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saxonAerospace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  saxonAerospace as default
};
