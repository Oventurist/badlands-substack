import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Watts Riots","description":"","frontmatter":{"title":"Watts Riots","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["watts-riots",1965,"los-angeles","racial-division"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/watts-riots.md","filePath":"concepts/watts-riots.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/watts-riots.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="watts-riots" tabindex="-1">Watts Riots <a class="header-anchor" href="#watts-riots" aria-label="Permalink to &quot;Watts Riots&quot;">​</a></h1><p>The Watts riots were the 1965 civil disturbances in the Watts neighborhood of Los Angeles. They appear in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as one data point in the article&#39;s proposed thirty-year cycle of engineered racial unrest.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> lists them tersely — &quot;In 1965, there were race riots in the Watts neighborhood of Los Angeles&quot; — between the <a href="/concepts/harlem-riot-of-1935">Harlem race riots of 1935</a> and the <a href="/entities/rodney-king">Rodney King</a> beating of 1991 with the <a href="/concepts/los-angeles-riots-1992">Los Angeles riots</a> that followed, and ahead of the <a href="/entities/george-floyd">George Floyd</a> events of 2020. The pattern, in the source&#39;s reading, reflects an operating assumption by the <a href="/concepts/cabal">Cabal</a> that &quot;if America went more than 30 years without an incident that creates racial division, racism could possibly start to disappear,&quot; and that a riot must therefore appear roughly every three decades &quot;to fan the flames of racism.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/watts-riots.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wattsRiots = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wattsRiots as default
};
