import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Shipley","description":"","frontmatter":{"title":"David Shipley","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","washington-post","opinion-journalism","resignations"],"sources":["raw/badlands-news-brief-4a9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-shipley.md","filePath":"entities/david-shipley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-shipley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-shipley" tabindex="-1">David Shipley <a class="header-anchor" href="#david-shipley" aria-label="Permalink to &quot;David Shipley&quot;">​</a></h1><p>David Shipley is a newspaper editor who served as Opinion Section editor of <a href="/entities/washington-post">The Washington Post</a> until his resignation in February 2025.[1]</p><h2 id="resignation-over-bezos-opinion-mandate" tabindex="-1">Resignation over Bezos opinion mandate <a class="header-anchor" href="#resignation-over-bezos-opinion-mandate" aria-label="Permalink to &quot;Resignation over Bezos opinion mandate&quot;">​</a></h2><p>Shipley resigned after owner <a href="/entities/jeff-bezos">Jeff Bezos</a> mandated that the Post&#39;s opinion section prioritize two topics — personal liberties and free markets — and decline to publish dissenting views in those areas.[1] In a note to staff on Wednesday, February 26, 2025, Bezos wrote, &quot;This is a significant shift, it won&#39;t be easy, and it will require 100% commitment — I respect his decision,&quot; and said the paper would search for a new Opinion Editor &quot;to own this new direction.&quot;[1]</p><p>The change followed Bezos&#39;s earlier decision to kill presidential endorsements, a move that cost the Post thousands of subscribers and prompted resignations from members of the Opinion Board.[1] Commentators noted the shift dramatically reshaped opinion coverage that had for decades spanned a broad array of politics and policy topics.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands writer Burning Bright argued that the episode&#39;s significance was that it forced &quot;the media protectorate to admit they were playing&quot; a game in the first place, contending that journalists were angry not at being given different rules but at the public learning what they are.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Predictable Pandemics &amp; A Thespian&#39;s Next Steps&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4a9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4a9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-shipley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidShipley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidShipley as default
};
