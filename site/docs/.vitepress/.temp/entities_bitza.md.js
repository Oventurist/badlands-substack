import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bitza","description":"","frontmatter":{"title":"Bitza","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","voting-machines","venezuela","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bitza.md","filePath":"entities/bitza.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bitza.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bitza" tabindex="-1">Bitza <a class="header-anchor" href="#bitza" aria-label="Permalink to &quot;Bitza&quot;">​</a></h1><p>Bitza was a small Venezuelan technology company that wrote the software used in <a href="/entities/smartmatic">Smartmatic</a> voting machines while the Venezuelan government held a stake in it, according to the account presented in the June 9, 2026 <em>Badlands Brief</em>.[1]</p><p>Citing the <em>New York Times</em>, the Brief reports that seven months before Smartmatic&#39;s Venezuelan voting contract was awarded, a Venezuelan government financing agency invested more than $200,000 into a smaller technology company owned by some of the same people as Smartmatic, which joined the Smartmatic bid as a minor partner. In return, the agency received a 28 percent stake and a seat on the company&#39;s board, occupied by a senior government official who had previously advised <a href="/entities/hugo-chavez">Hugo Chávez</a> on elections technology.[1] Venezuelan officials later insisted the money was merely a small-business loan and that it had been repaid before the recall referendum.[1]</p><p>The Brief identifies that company as Bitza and emphasizes the dual fact pattern: 28 percent of its shares were held by the Venezuelan government, and it simultaneously wrote the software running on Smartmatic voting machines.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bitza.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bitza = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bitza as default
};
