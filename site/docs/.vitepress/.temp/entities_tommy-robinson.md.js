import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tommy Robinson","description":"","frontmatter":{"title":"Tommy Robinson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["uk","immigration","activism","unite-the-kingdom"],"sources":["raw/badlands-brief-739.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tommy-robinson.md","filePath":"entities/tommy-robinson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tommy-robinson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tommy-robinson" tabindex="-1">Tommy Robinson <a class="header-anchor" href="#tommy-robinson" aria-label="Permalink to &quot;Tommy Robinson&quot;">​</a></h1><p>Tommy Robinson is a British anti-immigration activist who organized the &quot;<a href="/concepts/unite-the-kingdom-rally">Unite the Kingdom</a>&quot; rally in London in May 2026, which drew tens of thousands of demonstrators according to police estimates.[1]</p><p>The rally became an international flashpoint after US Vice President <a href="/entities/jd-vance">JD Vance</a> publicly backed British anti-immigration activists, saying it was &quot;OK to defend your culture&quot; and encouraging opponents of mass migration in the <a href="/entities/united-kingdom">United Kingdom</a> to &quot;keep on going.&quot;[1] UK Prime Minister <a href="/entities/keir-starmer">Keir Starmer</a> condemned the event as promoting &quot;hatred and division,&quot; and police reported dozens of arrests, including several tied to alleged hate-crime offenses.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tommy-robinson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tommyRobinson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tommyRobinson as default
};
