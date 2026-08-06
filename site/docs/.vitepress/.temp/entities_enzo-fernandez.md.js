import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Enzo Fernández","description":"","frontmatter":{"title":"Enzo Fernández","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["argentina","world-cup","soccer"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/enzo-fernandez.md","filePath":"entities/enzo-fernandez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/enzo-fernandez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="enzo-fernandez" tabindex="-1">Enzo Fernández <a class="header-anchor" href="#enzo-fernandez" aria-label="Permalink to &quot;Enzo Fernández&quot;">​</a></h1><p>Enzo Fernández is an <a href="/entities/argentina">Argentine</a> midfielder who was sent off during extra time of the <a href="/concepts/2026-fifa-world-cup">2026 FIFA World Cup</a> final against <a href="/entities/spain">Spain</a>, forcing Argentina to finish the match with ten players.[1]</p><p>According to the Badlands Brief&#39;s account, with fewer than seven minutes left in regulation and the score level at 0-0, Fernández attempted to flop in order to draw a foul; instead he was booked for complaining that a foul had not been called.[1] In extra time he committed a second bookable offense, bringing his shins together to trip a Spanish player while nominally contesting the ball.[1] The Brief judged the second contact incidental enough not to warrant a straight red card, but the accumulation of two yellow cards ejected him from the game.[1] The commentary described Fernández as having &quot;been playing dirty the entire game.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/enzo-fernandez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enzoFernandez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  enzoFernandez as default
};
