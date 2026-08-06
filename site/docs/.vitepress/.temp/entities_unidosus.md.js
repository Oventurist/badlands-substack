import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UnidosUS","description":"","frontmatter":{"title":"UnidosUS","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["advocacy","latino-politics","nevada","2024-election"],"sources":["raw/badlands-news-brief-8ae.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/unidosus.md","filePath":"entities/unidosus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/unidosus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="unidosus" tabindex="-1">UnidosUS <a class="header-anchor" href="#unidosus" aria-label="Permalink to &quot;UnidosUS&quot;">​</a></h1><p>UnidosUS is an American Latino civil rights and advocacy organization whose annual conference draws large numbers of Latino advocates and community leaders.[1]</p><h2 id="_2024-annual-conference" tabindex="-1">2024 Annual Conference <a class="header-anchor" href="#_2024-annual-conference" aria-label="Permalink to &quot;2024 Annual Conference&quot;">​</a></h2><p>The group&#39;s 2024 Annual Conference was held in Las Vegas, Nevada, and drew more than 1,500 Latino advocates and leaders in what was a crucial swing state for the 2024 presidential race.[1] President <a href="/entities/joe-biden">Joe Biden</a> was scheduled to address the conference on Wednesday, July 17, 2024, as he sought to rally supporters amid calls from Democrats in Congress for him to withdraw from the campaign.[1]</p><p>Biden abruptly cancelled the appearance after testing positive for COVID-19.[1] The organization&#39;s chief executive, <a href="/entities/janet-murguia">Janet Murguía</a>, announced the cancellation from the stage, telling attendees she had just spoken with Biden by phone and that he had shared his &quot;deep disappointment&quot; at being unable to attend.[1] The announcement was met with boos from the audience.[1] Murguía said Biden did not want to put &quot;anybody at risk&quot; and planned to address the conference at a later date, adding, &quot;we&#39;ve seen how COVID has still impacted many in our community still.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Vance Takes the Stage as Biden Takes the Basement&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/unidosus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unidosus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unidosus as default
};
