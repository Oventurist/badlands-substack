import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ryan Long","description":"","frontmatter":{"title":"Ryan Long","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["comedy","satire","media-criticism"],"sources":["raw/a-hypnotists-take-on-israel-palestine.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ryan-long.md","filePath":"entities/ryan-long.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ryan-long.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ryan-long" tabindex="-1">Ryan Long <a class="header-anchor" href="#ryan-long" aria-label="Permalink to &quot;Ryan Long&quot;">​</a></h1><p><strong>Ryan Long</strong> is a comedian whose satirical video sketches are circulated as media criticism on the platform X.<a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">[1]</a></p><h2 id="cited-sketch" tabindex="-1">Cited sketch <a class="header-anchor" href="#cited-sketch" aria-label="Permalink to &quot;Cited sketch&quot;">​</a></h2><p>An October 2023 <a href="/entities/badlands-media">Badlands Media</a> essay by <a href="/entities/american-hypnotist">American Hypnotist</a> cites a Long skit as an apt demonstration of the essay&#39;s thesis that audiences have lost track of where they are supposed to direct their outrage over the <a href="/concepts/israel-palestine-conflict">Israel–Palestine conflict</a>, which the author reads as evidence of a breakdown in <a href="/concepts/mockingbird-media">Mockingbird</a> influence.<a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">[1]</a> The essay pairs the sketch with a comic strip by the cartoonist Stonetoss making a similar point.<a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Hypnotist&#39;s Take on Israel, Palestine, and Q&quot;, URL: <a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ryan-long.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ryanLong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ryanLong as default
};
