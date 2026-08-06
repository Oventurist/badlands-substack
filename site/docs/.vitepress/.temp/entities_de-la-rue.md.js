import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"De La Rue PLC","description":"","frontmatter":{"title":"De La Rue PLC","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","voting-machines","united-kingdom","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/de-la-rue.md","filePath":"entities/de-la-rue.md","lastUpdated":null}');
const _sfc_main = { name: "entities/de-la-rue.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="de-la-rue-plc" tabindex="-1">De La Rue PLC <a class="header-anchor" href="#de-la-rue-plc" aria-label="Permalink to &quot;De La Rue PLC&quot;">​</a></h1><p>De La Rue PLC is a British firm that formerly owned <a href="/entities/sequoia-voting-systems">Sequoia Voting Systems</a>. According to the June 9, 2026 <em>Badlands Brief</em>, De La Rue invested $35 million in Sequoia and then sold the company to <a href="/entities/smartmatic">Smartmatic</a> in 2005 for $16 million — a loss of $19 million realized just four years after the original investment.[1]</p><p>The sale is presented in the Brief as the transaction that moved a substantial US voting-systems business into the hands of a company founded by Venezuelan principals and financially entangled with the Venezuelan government, setting up the later transfer of Sequoia and its Smartmatic-derived intellectual property to <a href="/entities/dominion-voting-systems">Dominion Voting Systems</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/de-la-rue.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deLaRue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deLaRue as default
};
