import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ryan Long","description":"","frontmatter":{"title":"Ryan Long","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","comedian","satire","media-criticism"],"sources":["raw/a-hypnotists-take-on-israel-palestine.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/ryan-long.md","filePath":"entities/ryan-long.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ryan-long.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ryan-long" tabindex="-1">Ryan Long <a class="header-anchor" href="#ryan-long" aria-label="Permalink to &quot;Ryan Long&quot;">​</a></h1><p><strong>Ryan Long</strong> is a Canadian-American comedian and sketch creator known for short satirical videos, often built around interviews or two-character bits, that lampoon political polarization and the tendency of partisans on opposite sides to hold interchangeable views.</p><p>He is cited in the Badlands Media essay <a href="/concepts/a-hypnotists-take-on-israel-palestine">&quot;A Hypnotist&#39;s Take on Israel, Palestine, and Q&quot;</a>, where <a href="/entities/american-hypnotist">American Hypnotist</a> links to a Long skit posted on X in October 2023 and describes it as aptly demonstrating the collapse of coherent partisan scripts around the <a href="/concepts/israel-palestine-conflict">Israel–Palestine conflict</a>. The skit is offered alongside a <a href="/entities/stonetoss">Stonetoss</a> comic as cultural evidence that audiences no longer know where they are expected to direct their outrage — the breakdown of <a href="/concepts/operation-mockingbird">Mockingbird</a> influence that forms the essay&#39;s thesis.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
