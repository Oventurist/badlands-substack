import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Speech Laws","description":"","frontmatter":{"title":"Speech Laws","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["free-speech","censorship","antisemitism","legislation"],"sources":["raw/badlands-blitz-episode-18.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/speech-laws.md","filePath":"concepts/speech-laws.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/speech-laws.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="speech-laws" tabindex="-1">Speech Laws <a class="header-anchor" href="#speech-laws" aria-label="Permalink to &quot;Speech Laws&quot;">​</a></h1><p>&quot;Speech laws&quot; is the shorthand used in the <a href="/concepts/badlands-news-brief">Badlands Brief</a> for the body of pending legislation and regulation that would restrict categories of expression, treated in the eighteenth episode of <a href="/concepts/the-blitz">The Blitz</a> as an emerging front in the <a href="/concepts/information-war">Info War</a>.[1]</p><h2 id="coverage-on-the-blitz" tabindex="-1">Coverage on The Blitz <a class="header-anchor" href="#coverage-on-the-blitz" aria-label="Permalink to &quot;Coverage on The Blitz&quot;">​</a></h2><p>The 23 May 2026 episode, titled &quot;Tina Peters Coming Out; Speech Laws Coming In,&quot; juxtaposed the commutation of <a href="/entities/tina-peters">Tina Peters</a>&#39; sentence with what its hosts described as a coming ban on antisemitism and other speech laws.[1] GhostofBasedPatrickHenry — see <a href="/entities/ghost-of-patrick-henry">Ghost of Patrick Henry</a> — and <a href="/entities/ashe-in-america">Ashe in America</a> framed the two developments as opposing movements in the same episode title, one liberty restored and the other liberty constrained.[1]</p><p>The episode situated the speech-law discussion alongside geopolitics and expectations for the golden age, placing legal restrictions on expression within the broader arc of narrative and sovereignty questions the Brief tracks Monday through Friday.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Blitz Episode 18&quot;, URL: <a href="https://badlands.substack.com/p/badlands-blitz-episode-18" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-blitz-episode-18</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/speech-laws.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const speechLaws = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  speechLaws as default
};
