import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vuhledar","description":"","frontmatter":{"title":"Vuhledar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","donetsk","russia","war","withdrawal"],"sources":["raw/badlands-news-brief-41f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vuhledar.md","filePath":"entities/vuhledar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vuhledar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vuhledar" tabindex="-1">Vuhledar <a class="header-anchor" href="#vuhledar" aria-label="Permalink to &quot;Vuhledar&quot;">​</a></h1><p><strong>Vuhledar</strong> is a town in the eastern Donetsk region of Ukraine that was captured by Russian forces at the beginning of October 2024 after a prolonged battle.[1] Long dubbed a &quot;fortress&quot; city on account of its heavily fortified surroundings and upland position, its fall was treated as a significant achievement for Moscow&#39;s forces.[1]</p><h2 id="ukrainian-withdrawal-october-2024" tabindex="-1">Ukrainian withdrawal (October 2024) <a class="header-anchor" href="#ukrainian-withdrawal-october-2024" aria-label="Permalink to &quot;Ukrainian withdrawal (October 2024)&quot;">​</a></h2><p>On Wednesday, October 2, 2024, the Ukrainian army announced that it had fully withdrawn from Vuhledar, describing an abandonment of the area after being almost fully encircled and coming under heavy Russian artillery bombardment.[1] &quot;The High Command gave permission for a maneuver to withdraw units from Vuhledar in order to save personnel and military equipment and take up a position for further operations,&quot; a Ukrainian unit deployed there said in a Telegram post, citing specifically the &quot;threat of encirclement&quot; and heavy troop losses.[1] There were reports that Russian forces had already taken control of the town by the time the Ukrainian announcement was made.[1]</p><p>The withdrawal came as Moscow&#39;s wide-reaching offensive in eastern Ukraine continued making steady gains, with Russian forces also advancing to within a few kilometers of the logistical hub of <a href="/entities/pokrovsk">Pokrovsk</a>, while global attention was consumed by escalation between Israel and Iran.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;FEMA&#39;s Broke. Ukraine is Collapsing. The EU is Doomed.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-41f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-41f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vuhledar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vuhledar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vuhledar as default
};
