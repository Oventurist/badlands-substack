import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uyghurs","description":"","frontmatter":{"title":"Uyghurs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","xinjiang","minorities","human-rights"],"sources":["raw/badlands-brief-884.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/uyghurs.md","filePath":"entities/uyghurs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/uyghurs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uyghurs" tabindex="-1">Uyghurs <a class="header-anchor" href="#uyghurs" aria-label="Permalink to &quot;Uyghurs&quot;">​</a></h1><p>The Uyghurs are a Turkic Muslim ethnic minority in <a href="/entities/china">China</a>, concentrated in the country&#39;s northwest, and one of the 56 ethnic groups officially recognized by the Chinese state.[1] They are among the communities most frequently cited in international criticism of Beijing&#39;s minority policy.[1]</p><h2 id="ethnic-unity-law-concerns-2026" tabindex="-1">Ethnic Unity Law concerns, 2026 <a class="header-anchor" href="#ethnic-unity-law-concerns-2026" aria-label="Permalink to &quot;Ethnic Unity Law concerns, 2026&quot;">​</a></h2><p>When China&#39;s <a href="/entities/national-peoples-congress">National People&#39;s Congress</a> moved in March 2026 to advance a proposed <a href="/concepts/ethnic-unity-law">Ethnic Unity Law</a>, human rights organizations raised concerns that the legislation could expand existing programs affecting minority communities, naming the Uyghurs and Tibetans specifically.[1] Critics argued the law could codify policies pressuring minority groups to assimilate into Han Chinese cultural and political norms, particularly in regions with large minority populations.[1] Chinese officials maintained the measure was intended to promote unity, stability, and development in minority regions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;War Weaves &amp; Midterm Maxis&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-884" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-884</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/uyghurs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uyghurs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uyghurs as default
};
