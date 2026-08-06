import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harley Pasternak","description":"","frontmatter":{"title":"Harley Pasternak","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["celebrity","intelligence-links","kanye-west","allegations"],"sources":["raw/badlands-news-brief-189.md"],"confidence":"low"},"headers":[],"relativePath":"entities/harley-pasternak.md","filePath":"entities/harley-pasternak.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harley-pasternak.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harley-pasternak" tabindex="-1">Harley Pasternak <a class="header-anchor" href="#harley-pasternak" aria-label="Permalink to &quot;Harley Pasternak&quot;">​</a></h1><p>Harley Pasternak is a celebrity personal trainer who, according to Badlands Media, checked the rapper <a href="/entities/kanye-west">Kanye West</a> into a mental institution days after West publicly endorsed <a href="/entities/donald-trump">Donald Trump</a> in November 2016.[1]</p><h2 id="badlands-account" tabindex="-1">Badlands account <a class="header-anchor" href="#badlands-account" aria-label="Permalink to &quot;Badlands account&quot;">​</a></h2><p>The Brief describes Pasternak as a former Canadian intelligence agent who has publicly acknowledged working with experimental drugs as part of his work.[1] West has accused Pasternak of giving him lithium, implying that it made him submissive and altered his behavior in other ways.[1] The Brief references an X thread by its contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> documenting the Kanye–Pasternak relationship.[1]</p><p>The commentary contrasts Pasternak&#39;s intervention with Trump&#39;s, noting that it was Trump who &quot;saved Kanye from Harley Pasternak&quot; in December 2016 by bringing him to Trump Tower for a private meeting that appeared to have an emotional impact on West and his companion, who both hugged Trump.[1] These characterizations are the Brief&#39;s own and are contested.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: It&#39;s a Big Club. And It&#39;s Going Down.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-189" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-189</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harley-pasternak.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harleyPasternak = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harleyPasternak as default
};
