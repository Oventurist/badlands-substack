import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Lincoln Project","description":"","frontmatter":{"title":"The Lincoln Project","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["politics","anti-trump","pac"],"sources":["raw/badlands-news-brief-0ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-lincoln-project.md","filePath":"entities/the-lincoln-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-lincoln-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-lincoln-project" tabindex="-1">The Lincoln Project <a class="header-anchor" href="#the-lincoln-project" aria-label="Permalink to &quot;The Lincoln Project&quot;">​</a></h1><p>The Lincoln Project is an anti-Trump political group founded by Republican and former-Republican operatives.[1]</p><p>In August 2024 the group was one of two Republican anti-Trump organizations — alongside <a href="/entities/republican-voters-against-trump">Republican Voters Against Trump</a> — that publicly attacked former President <a href="/entities/donald-trump">Donald Trump</a> over a Truth Social post in which he speculated that President <a href="/entities/joe-biden">Joe Biden</a> might crash the Democratic National Convention and attempt to reclaim the presidential nomination.[1] The episode, reported in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, also drew mockery from Representative <a href="/entities/adam-schiff">Adam Schiff</a> and California Governor <a href="/entities/gavin-newsom">Gavin Newsom</a>.[1]</p><p>Badlands contributors read the exchange differently, treating the seeding of the &quot;Biden takes it back&quot; narrative by Trump, <a href="/entities/michael-flynn">Michael Flynn</a> and <a href="/entities/dan-scavino">Dan Scavino</a> as an intentional psychological operation against the <a href="/concepts/deep-state">Deep State</a> rather than a gaffe worth mocking.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Walz Cycle Consumes Itself as Tensions Pause&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-lincoln-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theLincolnProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theLincolnProject as default
};
