import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Atlanta Police Foundation","description":"","frontmatter":{"title":"Atlanta Police Foundation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["atlanta","policing","cop-city","protest"],"sources":["raw/badlands-news-brief-6db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/atlanta-police-foundation.md","filePath":"entities/atlanta-police-foundation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/atlanta-police-foundation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="atlanta-police-foundation" tabindex="-1">Atlanta Police Foundation <a class="header-anchor" href="#atlanta-police-foundation" aria-label="Permalink to &quot;Atlanta Police Foundation&quot;">​</a></h1><p>The Atlanta Police Foundation is a nonprofit organisation supporting the Atlanta Police Department, and the principal institutional backer of the police training facility opposed by the <a href="/concepts/stop-cop-city">Stop Cop City</a> movement.[1] Its offices occupy a downtown Atlanta skyscraper that became the focal point of violent protest in January 2023.[1]</p><h2 id="january-2023-riot" tabindex="-1">January 2023 riot <a class="header-anchor" href="#january-2023-riot" aria-label="Permalink to &quot;January 2023 riot&quot;">​</a></h2><p>On the Saturday night after the killing of environmental activist <a href="/entities/tortuguita">Tortuguita</a> by authorities, masked activists dressed in all black threw rocks and lit fireworks in front of the skyscraper housing the foundation, shattering large glass windows.[1] They then set a police cruiser alight, smashed additional windows and vandalised walls with anti-police graffiti while tourists scattered.[1] The rioters were a subsection of hundreds of demonstrators who had marched up Peachtree Street in mourning.[1] Commentary from <a href="/entities/badlands-media">Badlands Media</a> attributed the violence to <a href="/entities/antifa">Antifa</a>-aligned activists and criticised local media for characterising the events as &quot;mostly peaceful.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Mostly Peaceful Riots and Billionaire Secrets&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/atlanta-police-foundation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const atlantaPoliceFoundation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  atlantaPoliceFoundation as default
};
