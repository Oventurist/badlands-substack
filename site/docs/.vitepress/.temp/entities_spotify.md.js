import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Spotify","description":"","frontmatter":{"title":"Spotify","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","censorship","podcasting","congressional-oversight"],"sources":["raw/badlands-news-brief-22b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/spotify.md","filePath":"entities/spotify.md","lastUpdated":null}');
const _sfc_main = { name: "entities/spotify.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="spotify" tabindex="-1">Spotify <a class="header-anchor" href="#spotify" aria-label="Permalink to &quot;Spotify&quot;">​</a></h1><p>Spotify is the audio streaming and podcasting platform led by chief executive Daniel Ek. It became the subject of a congressional censorship investigation in July 2025.[1]</p><h2 id="house-judiciary-committee-investigation-2025" tabindex="-1">House Judiciary Committee investigation (2025) <a class="header-anchor" href="#house-judiciary-committee-investigation-2025" aria-label="Permalink to &quot;House Judiciary Committee investigation (2025)&quot;">​</a></h2><p>On July 29, 2025, the <a href="/entities/house-judiciary-committee">House Judiciary Committee</a> launched an investigation into whether the <a href="/entities/european-union">European Union</a> and the Biden administration pressured Spotify to censor speech on its platform.[1] Censorship had already been a recurring point of tension for the company, which faced backlash for flagging COVID-19 content from podcaster Joe Rogan and for banning <a href="/entities/steve-bannon">Steve Bannon</a> from the platform.[1]</p><p>A source familiar with the probe told the New York Post that the more relevant concern was &quot;the pressure we are seeing the EU put on companies to censor more.&quot;[1] In a letter to Ek, Representative <a href="/entities/jim-jordan">Jim Jordan</a> criticized recent EU and UK laws requiring social media platforms — including US-based ones — to censor &quot;disinformation&quot; and &quot;harmful content&quot; or face large fines.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor <a href="/entities/chris-paul">Chris Paul</a> argued that the entire platform is controlled by algorithms, including its play counts, and described it as part of the same propaganda and censorship apparatus.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tsunamis, Bombshells, &amp; Signed Declarations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-22b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-22b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/spotify.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spotify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spotify as default
};
