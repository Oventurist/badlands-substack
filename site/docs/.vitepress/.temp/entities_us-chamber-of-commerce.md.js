import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Chamber of Commerce","description":"","frontmatter":{"title":"US Chamber of Commerce","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["business-lobby","cia","energy","iran"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/us-chamber-of-commerce.md","filePath":"entities/us-chamber-of-commerce.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-chamber-of-commerce.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-chamber-of-commerce" tabindex="-1">US Chamber of Commerce <a class="header-anchor" href="#us-chamber-of-commerce" aria-label="Permalink to &quot;US Chamber of Commerce&quot;">​</a></h1><p>The United States Chamber of Commerce is the country&#39;s largest business lobbying federation. The Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> describes it as &quot;CIA-controlled&quot; and casts it as a corporate actor in the factional fight over <a href="/entities/iran">iran</a>.</p><p>The article&#39;s central claim about the Chamber is that when <a href="/entities/israel">israel</a> backed <a href="/entities/donald-trump">donald-trump</a> — thereby breaking with the NATO consensus and threatening the enormous sums riding on sanctions relief for Iran — it &quot;naturally caused the CIA-controlled Chamber of Commerce to turn on Israel.&quot; In the essay&#39;s concluding survey of interested parties, &quot;US Chamber of Commerce companies&quot; head the list alongside the world&#39;s largest energy firms, <a href="/entities/qatar">qatar</a>, <a href="/entities/saudi-arabia">saudi-arabia</a>, <a href="/entities/russia">russia</a>, <a href="/entities/china">china</a>, <a href="/entities/pakistan">pakistan</a>, <a href="/entities/india">india</a> and the two competing factions of the Western ruling class.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-chamber-of-commerce.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usChamberOfCommerce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usChamberOfCommerce as default
};
