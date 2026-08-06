import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Butch Wilmore","description":"","frontmatter":{"title":"Butch Wilmore","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nasa","astronaut","iss","spacex","spaceflight"],"sources":["raw/badlands-news-brief-324.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/butch-wilmore.md","filePath":"entities/butch-wilmore.md","lastUpdated":null}');
const _sfc_main = { name: "entities/butch-wilmore.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="butch-wilmore" tabindex="-1">Butch Wilmore <a class="header-anchor" href="#butch-wilmore" aria-label="Permalink to &quot;Butch Wilmore&quot;">​</a></h1><p>Butch Wilmore is a <a href="/entities/nasa">NASA</a> astronaut who, together with <a href="/entities/sunita-williams">Sunita Williams</a>, saw an eight-day stopover aboard the International Space Station extend into a nine-and-a-half-month mission.[1]</p><h2 id="return-to-earth" tabindex="-1">Return to Earth <a class="header-anchor" href="#return-to-earth" aria-label="Permalink to &quot;Return to Earth&quot;">​</a></h2><p>Wilmore returned to Earth on Tuesday, March 18, 2025, aboard the <a href="/entities/spacex">SpaceX</a> Dragon capsule <em>Freedom</em>, which splashed down off the coast of Tallahassee, Florida, at 5:57 pm EDT.[1] Also aboard were NASA astronaut Nick Hague and Roscosmos cosmonaut Aleksandr Gorbunov.[1] The crew splashed down into 78 degree Fahrenheit weather, with dolphins circling the capsule while recovery teams worked, before the capsule was brought onto a recovery ship and opened.[1]</p><p>The prolonged mission and its conclusion drew heavy public attention, which Badlands commentators contrasted with the comparatively muted public interest in election integrity questions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Extra-Judicial Judges &amp; Master Manipulating Monsters&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-324" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-324</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/butch-wilmore.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const butchWilmore = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  butchWilmore as default
};
