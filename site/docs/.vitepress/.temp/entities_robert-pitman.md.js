import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Pitman","description":"","frontmatter":{"title":"Robert Pitman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","texas","cryptocurrency","tax-fraud"],"sources":["raw/badlands-news-brief-59b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-pitman.md","filePath":"entities/robert-pitman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-pitman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-pitman" tabindex="-1">Robert Pitman <a class="header-anchor" href="#robert-pitman" aria-label="Permalink to &quot;Robert Pitman&quot;">​</a></h1><p>Robert Pitman is a United States federal judge sitting in the Austin federal court in Texas.[1]</p><h2 id="crypto-key-surrender-order" tabindex="-1">Crypto key surrender order <a class="header-anchor" href="#crypto-key-surrender-order" aria-label="Permalink to &quot;Crypto key surrender order&quot;">​</a></h2><p>On January 6, 2025, Pitman issued a restraining order in the tax-fraud case of early Bitcoin investor <a href="/entities/frank-richard-ahlgren-iii">Frank Richard Ahlgren III</a>, directing Ahlgren and any of his family, friends, associates or representatives to identify and provide any physical devices used to store his cryptocurrency, along with any public keys, private keys, seed phrases or passphrases.[1] Ahlgren had been sentenced in December 2024 to two years in prison after underreporting capital gains on more than $3.7 million in <a href="/concepts/bitcoin">Bitcoin</a> sales, and owes about $1.1 million in restitution.[1] The order was reported as a landmark in a $124 million tax case and drew criticism in the crypto community as an assault on self-custody.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;A Song of Ice and Fire, Fraud, and Foreign Flashpoints&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-59b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-59b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-pitman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertPitman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertPitman as default
};
