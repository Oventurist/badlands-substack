import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lionel Messi","description":"","frontmatter":{"title":"Lionel Messi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["messi","argentina","fifa","world-cup"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lionel-messi.md","filePath":"entities/lionel-messi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lionel-messi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lionel-messi" tabindex="-1">Lionel Messi <a class="header-anchor" href="#lionel-messi" aria-label="Permalink to &quot;Lionel Messi&quot;">​</a></h1><p>Lionel Messi is an Argentine footballer described in the Badlands Brief as &quot;arguably the world&#39;s best player,&quot; and the principal reason pundits and public figures picked <a href="/entities/argentina">Argentina</a> to win the <a href="/concepts/2026-fifa-world-cup">2026 FIFA World Cup</a>.[1] Argentina had won the previous World Cup in Qatar in 2022 and was widely expected to go back-to-back.[1]</p><p>The Brief relayed the allegation, circulating among soccer fans, that <a href="/entities/fifa">FIFA</a> and its referees have rigged matches in Argentina&#39;s favor in order to inflate Messi&#39;s scoring and win records for marketing and advertising reasons.[1] Argentina ultimately lost the 2026 final 1-0 to <a href="/entities/spain">Spain</a> after extra time, with the Brief characterizing the team&#39;s statistical performance as abysmal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lionel-messi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lionelMessi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lionelMessi as default
};
