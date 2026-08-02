import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Terence McKenna","description":"","frontmatter":{"title":"Terence McKenna","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","author","media-theory","counterculture"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/terence-mckenna.md","filePath":"entities/terence-mckenna.md","lastUpdated":null}');
const _sfc_main = { name: "entities/terence-mckenna.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="terence-mckenna" tabindex="-1">Terence McKenna <a class="header-anchor" href="#terence-mckenna" aria-label="Permalink to &quot;Terence McKenna&quot;">​</a></h1><p>Terence McKenna (rendered &quot;Terrance McKenna&quot; in the source) was an American author, mystic and psychonaut known for his lectures on consciousness, technology and culture.</p><h2 id="prediction-about-mass-media" tabindex="-1">Prediction about mass media <a class="header-anchor" href="#prediction-about-mass-media" aria-label="Permalink to &quot;Prediction about mass media&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> credits McKenna with predicting, in 1996, &quot;the inevitable demise of &#39;office culture&#39; and the mainstream media in particular.&quot; The article quotes him directly: &quot;Mass media is finished… mass media is one-to-many communication, and what the internet offers is any-to-any.&quot;</p><p><a href="/entities/ryan-delarme">Ryan DeLarme</a> treats this as the structural explanation for the collapse he documents, writing that McKenna&#39;s prediction &quot;is proving to be right on the money.&quot; In the corpus, the one-to-many versus any-to-any distinction underpins the contrast between <a href="/concepts/mainstream-media">centralized media</a> and the decentralized space of <a href="/concepts/citizen-journalism">citizen journalism</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/terence-mckenna.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terenceMckenna = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  terenceMckenna as default
};
