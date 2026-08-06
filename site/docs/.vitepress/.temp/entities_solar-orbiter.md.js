import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Solar Orbiter","description":"","frontmatter":{"title":"Solar Orbiter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["space","science","esa","nasa","heliophysics"],"sources":["raw/badlands-news-brief-540.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/solar-orbiter.md","filePath":"entities/solar-orbiter.md","lastUpdated":null}');
const _sfc_main = { name: "entities/solar-orbiter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="solar-orbiter" tabindex="-1">Solar Orbiter <a class="header-anchor" href="#solar-orbiter" aria-label="Permalink to &quot;Solar Orbiter&quot;">​</a></h1><p>Solar Orbiter is a joint European Space Agency (ESA) and NASA spacecraft mission studying the Sun. In June 2025 the ESA revealed images from the spacecraft showing the Sun&#39;s south pole — a perspective on the star that had never before been directly observed.[1]</p><h2 id="first-direct-images-of-the-solar-south-pole" tabindex="-1">First direct images of the solar south pole <a class="header-anchor" href="#first-direct-images-of-the-solar-south-pole" aria-label="Permalink to &quot;First direct images of the solar south pole&quot;">​</a></h2><p>Solar Orbiter captured the first views of the Sun&#39;s polar region in mid-March 2025, when the spacecraft was at an angle of 15 degrees below the solar equator; a few days later it reached a viewing angle of 17 degrees.[1] All pre-existing images of the Sun had been taken from within about 7 degrees of its equator, because every spacecraft orbiting the star, along with every planet in the solar system, travels within a flat disk called the ecliptic plane, which is tilted just 7.25 degrees relative to the Sun&#39;s equatorial plane.[1] The Ulysses spacecraft was the only previous probe to pass over the Sun&#39;s poles, but it carried no camera.[1]</p><p>Daniel Müller, a heliophysicist and project scientist for the Solar Orbiter mission, explained that scientists had long had &quot;a good view of [the] centermost part of the sun&#39;s disk,&quot; but that &quot;the poles are effectively not visible, because we always see them almost exactly edge-on.&quot;[1]</p><p>The item was carried as a bonus story in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> of June 13, 2025.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musical Guard Troops &amp; Immigration Crackdowns&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-540" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-540</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/solar-orbiter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const solarOrbiter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  solarOrbiter as default
};
