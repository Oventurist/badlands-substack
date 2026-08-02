import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeff Zink","description":"","frontmatter":{"title":"Jeff Zink","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","republican","america-first","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jeff-zink.md","filePath":"entities/jeff-zink.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeff-zink.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeff-zink" tabindex="-1">Jeff Zink <a class="header-anchor" href="#jeff-zink" aria-label="Permalink to &quot;Jeff Zink&quot;">​</a></h1><p>Jeff Zink is an Arizona Republican who ran as an &quot;America First&quot; candidate in Arizona&#39;s Congressional District 3 during the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, losing to Democratic incumbent Rep. <a href="/entities/ruben-gallego">Ruben Gallego</a>.</p><h2 id="post-election-litigation" tabindex="-1">Post-election litigation <a class="header-anchor" href="#post-election-litigation" aria-label="Permalink to &quot;Post-election litigation&quot;">​</a></h2><p>On the afternoon of Friday, December 9, 2022, Zink joined <a href="/entities/arizona-secretary-of-state">Secretary of State</a> candidate <a href="/entities/mark-finchem">Mark Finchem</a> in filing a joint lawsuit to overturn the results of the November election, meeting the deadline that fell five days after <a href="/entities/katie-hobbs">Katie Hobbs</a> certified the results on December 5. The suit named Gallego, Finchem&#39;s opponent <a href="/entities/adrian-fontes">Adrian Fontes</a>, and Hobbs.</p><p>As reported by <em>Arizona&#39;s Family</em> and summarized in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, the complaint alleges that Hobbs abused her power by failing to have the state&#39;s tabulation machines properly certified and by threatening the boards of supervisors in Mohave and Cochise counties with criminal charges if they refused to certify; that she should have recused herself as Secretary of State while a candidate for governor; and that her office abused its power by flagging misinformation on a Twitter account in January 2021.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeff-zink.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeffZink = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeffZink as default
};
