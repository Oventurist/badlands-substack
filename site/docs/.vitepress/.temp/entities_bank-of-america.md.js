import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank of America","description":"","frontmatter":{"title":"Bank of America","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","finance","argentina","wall-street"],"sources":["raw/badlands-news-brief-021.md","raw/badlands-news-brief-53f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bank-of-america.md","filePath":"entities/bank-of-america.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bank-of-america.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bank-of-america" tabindex="-1">Bank of America <a class="header-anchor" href="#bank-of-america" aria-label="Permalink to &quot;Bank of America&quot;">​</a></h1><p>Bank of America is a major American commercial and investment bank.[1] Together with <a href="/entities/jpmorgan-chase">JPMorgan Chase</a> and <a href="/entities/citigroup">Citigroup</a>, it was to participate in a planned $20 billion bank-led debt facility for <a href="/entities/argentina">Argentina</a> under the <a href="/concepts/argentina-bailout-package-2025">2025 Argentina bailout package</a>.[1]</p><p>The facility was shelved in November 2025 as bankers pivoted to a smaller, short-term loan package for the financially distressed government; the private-sector loan never got off the ground while banks awaited guidance from the U.S. Treasury Department under Secretary <a href="/entities/scott-bessent">Scott Bessent</a>.[1]</p><h2 id="debanking-allegations-january-2025" tabindex="-1">Debanking allegations (January 2025) <a class="header-anchor" href="#debanking-allegations-january-2025" aria-label="Permalink to &quot;Debanking allegations (January 2025)&quot;">​</a></h2><p>In his January 23, 2025 video address to the <a href="/entities/world-economic-forum">World Economic Forum</a>, President <a href="/entities/donald-trump">Donald Trump</a> called out Bank of America and <a href="/entities/jamie-dimon">Jamie Dimon</a> of JPMorgan Chase for &quot;de-banking&quot; conservatives over their politics, telling the audience &quot;I hope you and Jamie open things up because what you&#39;re doing is wrong.&quot;[2] Badlands contributor GhostofBasedPatrickHenry noted that Bank of America issued a post on X denying the allegation and was subsequently slapped with a Community Note stating that the bank was lying.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Seditious Overreactions, Billion Dollar Bailouts, &amp; NATO-Style Guarantees&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-021" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-021</a></li><li>Badlands Brief — &quot;Badlands News Brief: Devastation at Davos &amp; the Dawn of Denuclearization&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-53f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-53f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bank-of-america.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankOfAmerica = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankOfAmerica as default
};
