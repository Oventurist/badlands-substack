import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kharg Island","description":"","frontmatter":{"title":"Kharg Island","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iran","oil","energy","military-strike"],"sources":["raw/badlands-brief-095.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kharg-island.md","filePath":"entities/kharg-island.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kharg-island.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kharg-island" tabindex="-1">Kharg Island <a class="header-anchor" href="#kharg-island" aria-label="Permalink to &quot;Kharg Island&quot;">​</a></h1><p>Kharg Island is an Iranian island in the Persian Gulf functioning as the country&#39;s principal oil export terminal, handling roughly 90 percent of <a href="/entities/iran">Iran</a>&#39;s oil shipments.[1]</p><h2 id="march-2026-strikes" tabindex="-1">March 2026 strikes <a class="header-anchor" href="#march-2026-strikes" aria-label="Permalink to &quot;March 2026 strikes&quot;">​</a></h2><p>The United States carried out strikes on Iranian military targets on Kharg Island during the 2026 war.[1] <a href="/entities/donald-trump">President Donald Trump</a> said the attacks destroyed military facilities on the island but deliberately avoided the oil infrastructure, warning that broader strikes could follow if Iran interfered with shipping in the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a>.[1]</p><p>Iran threatened retaliation after the strikes, warning that energy infrastructure tied to the United States in Gulf countries could become targets.[1] The escalation disrupted maritime traffic through the Strait of Hormuz, the route carrying about one-fifth of the world&#39;s oil supply.[1]</p><h2 id="analysis" tabindex="-1">Analysis <a class="header-anchor" href="#analysis" aria-label="Permalink to &quot;Analysis&quot;">​</a></h2><p>Badlands contributor <a href="/entities/burning-bright">Burning Bright</a> read the selective targeting — military facilities struck, export capacity spared — as evidence of a deliberate, calibrated campaign in which energy is both the arena and the prize, with the pressure falling hardest on import-dependent Europe rather than on the <a href="/concepts/multipolar-world">multipolar</a> bloc.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Moves and Countermoves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kharg-island.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const khargIsland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  khargIsland as default
};
