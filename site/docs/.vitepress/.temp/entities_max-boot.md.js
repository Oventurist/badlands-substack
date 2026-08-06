import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Max Boot","description":"","frontmatter":{"title":"Max Boot","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","washington-post","russiagate","council-on-foreign-relations","badlands-brief"],"sources":["raw/badlands-news-brief-19b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/max-boot.md","filePath":"entities/max-boot.md","lastUpdated":null}');
const _sfc_main = { name: "entities/max-boot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="max-boot" tabindex="-1">Max Boot <a class="header-anchor" href="#max-boot" aria-label="Permalink to &quot;Max Boot&quot;">​</a></h1><p>Max Boot is an American columnist and foreign-policy commentator described in Badlands coverage as a leading propagandist of the &quot;Trump Russia Hoax,&quot; a self-described enthusiast of &quot;forever wars&quot; who laundered Trump–Russia conspiracy theories through the pages of the <em>Washington Post</em>.[1]</p><p>Boot is married to <a href="/entities/sue-mi-terry">Sue Mi Terry</a>, a former <a href="/entities/cia">CIA</a> analyst and senior fellow at the <a href="/entities/council-on-foreign-relations">Council on Foreign Relations</a> who was indicted as an unregistered foreign agent acting on behalf of South Korea in an indictment revealed in July 2024.[1] According to the reporting, Terry allegedly began spying for South Korea in October 2013 — five years after leaving the CIA, and three years before Boot began publicly describing <a href="/entities/donald-trump">Donald Trump</a> as a Russian asset.[1] The juxtaposition of Boot&#39;s Russia-collusion advocacy with his wife&#39;s alleged decade-long covert relationship with a foreign intelligence service was the focus of the ZeroHedge item carried in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> of 19 July 2024.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Transforms as Biden Goes Into Hiding&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/max-boot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maxBoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maxBoot as default
};
