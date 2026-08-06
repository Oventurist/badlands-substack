import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Derrick Van Orden","description":"","frontmatter":{"title":"Derrick Van Orden","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","wisconsin","elections"],"sources":["raw/badlands-brief-7c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/derrick-van-orden.md","filePath":"entities/derrick-van-orden.md","lastUpdated":null}');
const _sfc_main = { name: "entities/derrick-van-orden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="derrick-van-orden" tabindex="-1">Derrick Van Orden <a class="header-anchor" href="#derrick-van-orden" aria-label="Permalink to &quot;Derrick Van Orden&quot;">​</a></h1><p>Derrick Van Orden is a Republican member of the U.S. House of Representatives from Wisconsin.[1]</p><h2 id="interpretation-of-trump-s-election-reform-position" tabindex="-1">Interpretation of Trump&#39;s election reform position <a class="header-anchor" href="#interpretation-of-trump-s-election-reform-position" aria-label="Permalink to &quot;Interpretation of Trump&#39;s election reform position&quot;">​</a></h2><p>In February 2026, Van Orden offered an interpretation of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s position on mail-in balloting that sought to narrow it to questions of eligibility rather than method: &quot;If you&#39;re sick and you can&#39;t get to the polling [place], he wants you to have a ballot. If you&#39;re a military member, he wants you to have a ballot,&quot; he said. &quot;Who he doesn&#39;t want to have a ballot is the illegal alien that registered or even a lawful alien who got a driver&#39;s license to be registered to vote and get a mail-in ballot.&quot;[1]</p><p>The remark appeared in the <a href="/concepts/badlands-brief">Badlands Brief</a>&#39;s survey of Republican responses to the <a href="/concepts/election-reform-campaign">election reform campaign</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Democratization of Narrative Distribution. And a New War with Iran.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/derrick-van-orden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const derrickVanOrden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  derrickVanOrden as default
};
