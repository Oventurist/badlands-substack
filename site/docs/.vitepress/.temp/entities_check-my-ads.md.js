import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Check My Ads","description":"","frontmatter":{"title":"Check My Ads","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["advertising","censorship","nonprofit","litigation"],"sources":["raw/badlands-news-brief-5b2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/check-my-ads.md","filePath":"entities/check-my-ads.md","lastUpdated":null}');
const _sfc_main = { name: "entities/check-my-ads.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="check-my-ads" tabindex="-1">Check My Ads <a class="header-anchor" href="#check-my-ads" aria-label="Permalink to &quot;Check My Ads&quot;">​</a></h1><p>Check My Ads is a tax-exempt organization that works on digital advertising accountability, pressuring advertisers and ad-tech intermediaries over the outlets they fund.[1]</p><h2 id="litigation-with-rumble" tabindex="-1">Litigation with Rumble <a class="header-anchor" href="#litigation-with-rumble" aria-label="Permalink to &quot;Litigation with Rumble&quot;">​</a></h2><p>The video platform <a href="/entities/rumble">Rumble</a> has sued Check My Ads for defamation, accusing the group of &quot;routinely target[ing] news outlets and platforms that do not adhere to their political worldview.&quot;[1] The suit runs parallel to Rumble&#39;s separate antitrust action against <a href="/entities/google">Google</a> and <a href="/entities/alphabet">Alphabet</a> over digital advertising practices.[1] Within the Badlands framing, both cases are treated as fronts in a broader conflict over de-platforming and advertising-side censorship of dissident media.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sovereign Alliance Comms and Tapwater Goblins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/check-my-ads.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkMyAds = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  checkMyAds as default
};
