import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hugo Chávez","description":"","frontmatter":{"title":"Hugo Chávez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","elections","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hugo-chavez.md","filePath":"entities/hugo-chavez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hugo-chavez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hugo-chavez" tabindex="-1">Hugo Chávez <a class="header-anchor" href="#hugo-chavez" aria-label="Permalink to &quot;Hugo Chávez&quot;">​</a></h1><p>Hugo Chávez was the president of Venezuela whose 2004 recall referendum provided <a href="/entities/smartmatic">Smartmatic</a> with its first national election contract, a fact central to Badlands Media&#39;s account of the origins of modern voting technology.[1]</p><p>According to the June 9, 2026 <em>Badlands Brief</em>, Smartmatic gained its first Venezuelan contract in 2004 ahead of the Chávez recall election, months after receiving investments from the Venezuelan government.[1] The Brief cites <em>New York Times</em> reporting that a Venezuelan government financing agency invested over $200,000 in <a href="/entities/bitza">Bitza</a>, a smaller company sharing owners with Smartmatic, taking a 28 percent stake and a board seat filled by a senior official who had previously advised Chávez on elections technology.[1]</p><p>Chávez&#39;s name recurs in the later American controversy through a letter from <a href="/entities/john-c-bonifaz">John C. Bonifaz</a> to the National Institute of Standards and Technology, which warned that <a href="/entities/dominion-voting-systems">Dominion Voting Systems</a> &quot;depends upon secret source code created and owned by Smartmatic, a foreign controlled company with ties to The Venezuelan Government Led by Hugo Chavez.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hugo-chavez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hugoChavez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hugoChavez as default
};
