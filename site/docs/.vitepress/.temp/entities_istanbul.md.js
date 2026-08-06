import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Istanbul","description":"","frontmatter":{"title":"Istanbul","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["turkey","culture","music","cancel-culture"],"sources":["raw/badlands-brief-774.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/istanbul.md","filePath":"entities/istanbul.md","lastUpdated":null}');
const _sfc_main = { name: "entities/istanbul.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="istanbul" tabindex="-1">Istanbul <a class="header-anchor" href="#istanbul" aria-label="Permalink to &quot;Istanbul&quot;">​</a></h1><p>Istanbul is the largest city of <a href="/entities/turkey">Turkey</a>, straddling the Bosphorus strait, and in June 2026 it became the venue for a surprise concert by rapper and designer <a href="/entities/kanye-west">Kanye West</a> that Badlands treated as a marker of shifting global cultural authority.[1]</p><h2 id="june-2026-kanye-west-concert" tabindex="-1">June 2026 Kanye West concert <a class="header-anchor" href="#june-2026-kanye-west-concert" aria-label="Permalink to &quot;June 2026 Kanye West concert&quot;">​</a></h2><p>Thousands of people gathered near the Bosphorus for the late-night event, which Turkish media described as one of the city&#39;s largest recent live music gatherings tied to an international artist.[1] The performance followed a string of canceled appearances in Europe, after multiple European venues and festival organizers distanced themselves from West over his public remarks and online activity.[1]</p><p>Badlands framed the show as evidence that Istanbul — and Turkey more broadly — has taken on a growing role as an alternative destination for artists, influencers, and public figures facing restrictions or reputational pressure in parts of Europe and North America.[1] See <a href="/concepts/kanye-west-istanbul-concert-2026">Kanye West Istanbul concert (2026)</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weaponization Woes &amp; Bailing on the Bromance&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-774" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-774</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/istanbul.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const istanbul = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  istanbul as default
};
