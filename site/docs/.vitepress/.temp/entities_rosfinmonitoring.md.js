import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rosfinmonitoring","description":"","frontmatter":{"title":"Rosfinmonitoring","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","regulator","financial-watchdog"],"sources":["raw/badlands-news-brief-582.md"],"confidence":"low"},"headers":[],"relativePath":"entities/rosfinmonitoring.md","filePath":"entities/rosfinmonitoring.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rosfinmonitoring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rosfinmonitoring" tabindex="-1">Rosfinmonitoring <a class="header-anchor" href="#rosfinmonitoring" aria-label="Permalink to &quot;Rosfinmonitoring&quot;">​</a></h1><p>Rosfinmonitoring is Russia&#39;s financial watchdog agency, responsible for maintaining and publishing the country&#39;s official list of &quot;terrorists and extremists.&quot;[1]</p><h2 id="role" tabindex="-1">Role <a class="header-anchor" href="#role" aria-label="Permalink to &quot;Role&quot;">​</a></h2><p>In November 2025, Rosfinmonitoring published a notice adding former Prime Minister <a href="/entities/mikhail-kasyanov">Mikhail Kasyanov</a> and economist <a href="/entities/sergey-guriev">Sergey Guriev</a> to that list; the entry offered no explanation for the designation.[1] Inclusion on the list follows earlier Russian administrative measures against government critics, such as the &quot;foreign agent&quot; designation applied to Kasyanov in 2023.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Democracy Shields, Entitled Foreigners, &amp; Epstein&#39;s Boomerang&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-582" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-582</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rosfinmonitoring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rosfinmonitoring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rosfinmonitoring as default
};
