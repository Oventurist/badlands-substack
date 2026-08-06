import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United Kingdom","description":"","frontmatter":{"title":"United Kingdom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["uk","immigration","politics","europe"],"sources":["raw/badlands-brief-739.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/united-kingdom.md","filePath":"entities/united-kingdom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-kingdom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-kingdom" tabindex="-1">United Kingdom <a class="header-anchor" href="#united-kingdom" aria-label="Permalink to &quot;United Kingdom&quot;">​</a></h1><p>The United Kingdom featured prominently in May 2026 coverage of Western migration politics following the &quot;<a href="/concepts/unite-the-kingdom-rally">Unite the Kingdom</a>&quot; rally in London, organized by activist <a href="/entities/tommy-robinson">Tommy Robinson</a> and attended by tens of thousands according to police estimates.[1]</p><p>US Vice President <a href="/entities/jd-vance">JD Vance</a> publicly backed British anti-immigration activists, telling them it was &quot;OK to defend your culture&quot; and to &quot;keep on going,&quot; while criticizing Western governments for relying on &quot;millions and millions of unvetted people.&quot;[1] Prime Minister <a href="/entities/keir-starmer">Keir Starmer</a> condemned the rally as promoting &quot;hatred and division,&quot; and British police reported dozens of arrests including several tied to alleged hate-crime offenses.[1]</p><p>Separate reporting described activist networks and local protest groups in UK towns organizing patrols, monitoring migrant activity, or attempting to disrupt migrant boat crossings in northern France, amid tensions over asylum housing and Channel crossings.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-kingdom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedKingdom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedKingdom as default
};
