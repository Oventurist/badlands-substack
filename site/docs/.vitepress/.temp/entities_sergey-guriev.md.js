import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sergey Guriev","description":"","frontmatter":{"title":"Sergey Guriev","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","economist","opposition","terrorist-designation"],"sources":["raw/badlands-news-brief-582.md"],"confidence":"low"},"headers":[],"relativePath":"entities/sergey-guriev.md","filePath":"entities/sergey-guriev.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sergey-guriev.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sergey-guriev" tabindex="-1">Sergey Guriev <a class="header-anchor" href="#sergey-guriev" aria-label="Permalink to &quot;Sergey Guriev&quot;">​</a></h1><p>Sergey Guriev is a Russian economist and outspoken critic of Russia&#39;s military operation against Ukraine who has lived outside Russia for years.[1]</p><h2 id="terrorist-and-extremist-designation" tabindex="-1">Terrorist and extremist designation <a class="header-anchor" href="#terrorist-and-extremist-designation" aria-label="Permalink to &quot;Terrorist and extremist designation&quot;">​</a></h2><p>In November 2025, Russian authorities added Guriev, together with former Prime Minister <a href="/entities/mikhail-kasyanov">Mikhail Kasyanov</a>, to the official list of &quot;terrorists and extremists.&quot;[1] The designation was published by the financial watchdog <a href="/entities/rosfinmonitoring">Rosfinmonitoring</a> without any accompanying explanation.[1] Both men had been persistent public critics of the Kremlin&#39;s campaign against Kiev and were living abroad at the time of the listing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Democracy Shields, Entitled Foreigners, &amp; Epstein&#39;s Boomerang&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-582" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-582</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sergey-guriev.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sergeyGuriev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sergeyGuriev as default
};
