import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interfax","description":"","frontmatter":{"title":"Interfax","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","russia","news-agency"],"sources":["raw/badlands-brief-c2d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/interfax.md","filePath":"entities/interfax.md","lastUpdated":null}');
const _sfc_main = { name: "entities/interfax.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="interfax" tabindex="-1">Interfax <a class="header-anchor" href="#interfax" aria-label="Permalink to &quot;Interfax&quot;">​</a></h1><p>Interfax is a Russian news agency whose reporting is widely used as a primary source for statements by <a href="/entities/russia">Russian</a> government and defense officials.[1]</p><p>In May 2026, Interfax reported that Russia and <a href="/entities/afghanistan">Afghanistan</a> had signed a military-technical cooperation agreement on May 27 at an international security forum in the Moscow region, following a meeting between Russian Security Council Secretary <a href="/entities/sergei-shoigu">Sergei Shoigu</a> and Afghan Defense Minister <a href="/entities/mohammad-yaqub">Mohammad Yaqub</a>.[1] The agency also carried Shoigu&#39;s May 14 remarks that Moscow had built a dialogue with the <a href="/entities/taliban">Taliban</a> and was developing a full partnership with Kabul, as well as his call for Western states to unfreeze Afghan assets.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fake News Propaganda Exposed, Iranian Investment Opportunities, and Talibros in Moscow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c2d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c2d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/interfax.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interfax = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  interfax as default
};
