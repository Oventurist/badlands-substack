import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Feinberg","description":"","frontmatter":{"title":"Steve Feinberg","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pentagon","defense","private-equity","trump-administration"],"sources":["raw/badlands-news-brief-762.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/steve-feinberg.md","filePath":"entities/steve-feinberg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-feinberg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-feinberg" tabindex="-1">Steve Feinberg <a class="header-anchor" href="#steve-feinberg" aria-label="Permalink to &quot;Steve Feinberg&quot;">​</a></h1><p>Steve Feinberg is the United States Deputy Secretary of Defense in the second <a href="/entities/trump-administration">Trump administration</a>.[1]</p><h2 id="role-in-munitions-acceleration" tabindex="-1">Role in munitions acceleration <a class="header-anchor" href="#role-in-munitions-acceleration" aria-label="Permalink to &quot;Role in munitions acceleration&quot;">​</a></h2><p>Feinberg is described as playing an &quot;unusually&quot; hands-on role in the <a href="/entities/pentagon">Pentagon</a> effort known as the <a href="/concepts/munitions-acceleration-council">Munitions Acceleration Council</a>, a drive to expand US missile production in preparation for a potential conflict with <a href="/entities/china">China</a>.[1] According to the <em>Wall Street Journal</em>, the deputy secretary personally telephones some defense-industry executives on a weekly basis to track their progress on output targets.[1] The initiative sits under Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> and was launched in June 2025 with a Pentagon roundtable of top missile makers.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdowns, Shakedowns, &amp; Two Sexes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-762" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-762</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-feinberg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveFeinberg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveFeinberg as default
};
