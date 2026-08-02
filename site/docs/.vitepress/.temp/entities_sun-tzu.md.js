import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sun Tzu","description":"","frontmatter":{"title":"Sun Tzu","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","strategy","military-theory","historical"],"sources":["raw/all-assets-deployed.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/sun-tzu.md","filePath":"entities/sun-tzu.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sun-tzu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sun-tzu" tabindex="-1">Sun Tzu <a class="header-anchor" href="#sun-tzu" aria-label="Permalink to &quot;Sun Tzu&quot;">​</a></h1><p>Sun Tzu was an ancient Chinese military strategist traditionally credited with authorship of <em>The Art of War</em>, a treatise on strategy, deception and the management of conflict that remains among the most widely cited works of military theory.</p><h2 id="use-in-the-corpus" tabindex="-1">Use in the corpus <a class="header-anchor" href="#use-in-the-corpus" aria-label="Permalink to &quot;Use in the corpus&quot;">​</a></h2><p>Sun Tzu is invoked in the Badlands Media essay <a href="/concepts/all-assets-deployed">All Assets Deployed</a> as an interpretive key to the behavior of <a href="/entities/donald-trump">Donald Trump</a>. The author, <a href="/entities/burning-bright">Burning Bright</a>, describes Trump as &quot;a professed and ardent student of&quot; Sun Tzu and paraphrases the maxim that &quot;sometimes you must appear weak when you are strong, and then &#39;fall like a thunderbolt&#39; when your enemy least expects it.&quot;</p><p>The citation supports the essay&#39;s broader argument that apparent setbacks — a subdued announcement speech, a disappointing midterm result, defections by allied commentators — should not be read at face value within a <a href="/concepts/5th-generation-warfare">fifth-generation warfare</a> environment where deception is a normal instrument of strategy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/all-assets-deployed" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sun-tzu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sunTzu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sunTzu as default
};
