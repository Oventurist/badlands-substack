import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Curt Weldon","description":"","frontmatter":{"title":"Curt Weldon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","9-11","intelligence","republican"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"low"},"headers":[],"relativePath":"entities/curt-weldon.md","filePath":"entities/curt-weldon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/curt-weldon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="curt-weldon" tabindex="-1">Curt Weldon <a class="header-anchor" href="#curt-weldon" aria-label="Permalink to &quot;Curt Weldon&quot;">​</a></h1><p>Curt Weldon is a former U.S. Congressman known for raising questions about pre-9/11 intelligence.[1]</p><h2 id="tucker-carlson-interview" tabindex="-1">Tucker Carlson interview <a class="header-anchor" href="#tucker-carlson-interview" aria-label="Permalink to &quot;Tucker Carlson interview&quot;">​</a></h2><p>On Monday, April 14, 2025, journalist <a href="/entities/tucker-carlson">Tucker Carlson</a> published an interview with Weldon addressing the <a href="/concepts/september-11-attacks">September 11 attacks</a>.[1] A clip from the interview was shared on X by actor <a href="/entities/mel-gibson">Mel Gibson</a>, who wrote that the tragedy &quot;might be the biggest scandal in American history&quot; and called for the U.S. government to reveal the truth about the attacks.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/curt-weldon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const curtWeldon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  curtWeldon as default
};
