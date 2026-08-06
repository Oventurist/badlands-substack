import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ben Sabti","description":"","frontmatter":{"title":"Ben Sabti","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","defense-research","us-israel-relations","commentary"],"sources":["raw/badlands-brief-da2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ben-sabti.md","filePath":"entities/ben-sabti.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ben-sabti.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ben-sabti" tabindex="-1">Ben Sabti <a class="header-anchor" href="#ben-sabti" aria-label="Permalink to &quot;Ben Sabti&quot;">​</a></h1><p>Ben Sabti is a defense researcher affiliated with an Israeli defense institute.[1]</p><h2 id="june-2026-remarks" tabindex="-1">June 2026 remarks <a class="header-anchor" href="#june-2026-remarks" aria-label="Permalink to &quot;June 2026 remarks&quot;">​</a></h2><p>Sabti drew attention in June 2026 for suggesting that the United States needed to experience another Pearl Harbor or another September 11 attack in order to &quot;remember&quot; who its enemies are.[1] Badlands Media reproduced an image of the statement and condemned it as &quot;totally normal behavior, calling for the death of innocent Americans so that more people will like <a href="/entities/israel">Israel</a>,&quot; adding that the remark might amount to a form of confession.[1]</p><p>The comment was cited by Badlands alongside statements by <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> and <a href="/entities/mark-levin">Mark Levin</a> as part of what the outlet described as an escalating campaign by Zionist commentators against the <a href="/entities/donald-trump">Trump</a> administration and against Americans who question the U.S.–Israel relationship.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;America Wins, Zionists Seethe&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-da2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-da2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ben-sabti.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benSabti = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benSabti as default
};
