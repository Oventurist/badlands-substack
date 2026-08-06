import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Carlos Slim","description":"","frontmatter":{"title":"Carlos Slim","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","finance","lehman-brothers","salinas"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/carlos-slim.md","filePath":"entities/carlos-slim.md","lastUpdated":null}');
const _sfc_main = { name: "entities/carlos-slim.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="carlos-slim" tabindex="-1">Carlos Slim <a class="header-anchor" href="#carlos-slim" aria-label="Permalink to &quot;Carlos Slim&quot;">​</a></h1><p>Carlos Slim is a Mexican billionaire who in 2008 was the world&#39;s richest man.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> He was a Lehman client who had already lost heavily as the bank&#39;s stock price collapsed.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>During <a href="/entities/lehman-brothers">Lehman Brothers</a>&#39; 2008 crisis, <a href="/entities/jeb-bush">Jeb Bush</a>&#39;s assignment under &quot;<a href="/concepts/project-verde">Project Verde</a>&quot; was to persuade Slim to make a potentially life-saving investment in the firm; on July 5, 2008 Bush reported the meeting had been unsuccessful because Slim &quot;did not express interest in jv (joint venture) or stock purchase.&quot;<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> Slim declined to comment beyond a spokesman&#39;s statement that the two had been &quot;friends for 20 years, but they have never done business together.&quot;<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The Badlands Media account counters that even without direct business, both men were good friends of the <a href="/entities/salinas-family">Salinas family</a>, described as huge drug traffickers in Mexico.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/carlos-slim.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const carlosSlim = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  carlosSlim as default
};
