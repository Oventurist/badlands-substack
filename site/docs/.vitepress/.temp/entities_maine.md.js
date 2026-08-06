import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Maine","description":"","frontmatter":{"title":"Maine","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["maine","states","election-law","ballot-access"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/maine.md","filePath":"entities/maine.md","lastUpdated":null}');
const _sfc_main = { name: "entities/maine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maine" tabindex="-1">Maine <a class="header-anchor" href="#maine" aria-label="Permalink to &quot;Maine&quot;">​</a></h1><p>Maine is a U.S. state in New England that became a focal point of the 2024 election-law fight when its Secretary of State, <a href="/entities/shenna-bellows">Shenna Bellows</a>, removed <a href="/entities/donald-trump">Donald Trump</a> from the state&#39;s 2024 presidential primary ballot at the end of 2023 under the disqualification clause of the <a href="/concepts/fourteenth-amendment">Fourteenth Amendment</a>.[1]</p><h2 id="ballot-disqualification-and-appeal" tabindex="-1">Ballot disqualification and appeal <a class="header-anchor" href="#ballot-disqualification-and-appeal" aria-label="Permalink to &quot;Ballot disqualification and appeal&quot;">​</a></h2><p>Unlike <a href="/entities/colorado">Colorado</a>, where disqualification arose from litigation and a state supreme court ruling, Maine&#39;s removal came from a unilateral administrative determination by the Secretary of State.[1] Commentary in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> described the situation in Maine as &quot;despotism,&quot; emphasizing that a single official had decided which candidates the state&#39;s voters would be allowed to consider.[1]</p><p>Trump&#39;s campaign said it would immediately appeal to the Maine Superior Court, the state&#39;s top trial court. Maine statute requires the court to move quickly, with a ruling expected by January 17, 2024 either affirming or overturning Bellows&#39; decision.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maine as default
};
