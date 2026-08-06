import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kim Davis","description":"","frontmatter":{"title":"Kim Davis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["kentucky","county-clerk","same-sex-marriage","litigation","supreme-court"],"sources":["raw/badlands-news-brief-50a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kim-davis.md","filePath":"entities/kim-davis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kim-davis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kim-davis" tabindex="-1">Kim Davis <a class="header-anchor" href="#kim-davis" aria-label="Permalink to &quot;Kim Davis&quot;">​</a></h1><p><strong>Kim Davis</strong> is a former Kentucky county clerk known for refusing to issue same-sex marriage licenses, a refusal that generated hundreds of thousands of dollars in fines and damages against her.[1]</p><h2 id="supreme-court-appeal" tabindex="-1">Supreme Court appeal <a class="header-anchor" href="#supreme-court-appeal" aria-label="Permalink to &quot;Supreme Court appeal&quot;">​</a></h2><p>Davis appealed to the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> seeking to mitigate those financial penalties. On Monday, November 10, 2025, the Court denied the appeal out of hand.[1] Because progressive lawmakers and activists had widely predicted that the Davis case would serve as the vehicle by which the Court&#39;s majority would revisit and overturn <a href="/concepts/obergefell-v-hodges">Obergefell v. Hodges</a>, the denial was reported as the Court upholding the same-sex marriage precedent — at least for the time being.[1]</p><p>The expectation that Davis&#39;s case would trigger such a review rested largely on a brief passage in Justice Clarence Thomas&#39;s Dobbs concurrence; no other justice joined that sentiment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manipulated Maps, Downed Planes, &amp; A Very Stable Genius&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-50a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-50a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kim-davis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kimDavis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kimDavis as default
};
