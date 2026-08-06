import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Israel Ganz","description":"","frontmatter":{"title":"Israel Ganz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","west-bank","settlements","yesha-council"],"sources":["raw/badlands-news-brief-5b2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/israel-ganz.md","filePath":"entities/israel-ganz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/israel-ganz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="israel-ganz" tabindex="-1">Israel Ganz <a class="header-anchor" href="#israel-ganz" aria-label="Permalink to &quot;Israel Ganz&quot;">​</a></h1><p>Israel Ganz is an Israeli settler leader who in 2024 was named chairman of the <a href="/entities/yesha-council">Yesha Council</a>, the umbrella organization of West Bank settlements.[1]</p><h2 id="_2024-finance-ministry-meeting" tabindex="-1">2024 Finance Ministry meeting <a class="header-anchor" href="#_2024-finance-ministry-meeting" aria-label="Permalink to &quot;2024 Finance Ministry meeting&quot;">​</a></h2><p>Shortly after his appointment, Ganz attended a meeting convened by finance minister <a href="/entities/bezalel-smotrich">Bezalel Smotrich</a> at the Finance Ministry, alongside the mayors of the largest West Bank settlements such as Beitar Illit, Modiin Illit and Maale Adumim.[1] Smotrich used the meeting to warn settler leaders that international efforts to advance Palestinian statehood constituted a &quot;tangible, developing danger&quot; and to describe his campaign to press Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> to authorize new settlement construction plans.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sovereign Alliance Comms and Tapwater Goblins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/israel-ganz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const israelGanz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  israelGanz as default
};
