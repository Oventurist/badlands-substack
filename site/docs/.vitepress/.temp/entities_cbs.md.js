import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CBS","description":"","frontmatter":{"title":"CBS","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","media","msm","litigation"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/cbs.md","filePath":"entities/cbs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cbs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cbs" tabindex="-1">CBS <a class="header-anchor" href="#cbs" aria-label="Permalink to &quot;CBS&quot;">​</a></h1><p>CBS is an American broadcast television network owned by <a href="/entities/paramount-global">Paramount Global</a>. In the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, CBS is discussed principally as the defendant in <a href="/entities/donald-trump">Donald Trump</a>&#39;s $10 billion lawsuit arising from the network&#39;s <em>60 Minutes</em> interview with Kamala Harris during the most recent presidential campaign.</p><p>According to the article, it was quickly discovered after the broadcast that the interview had been edited to make Harris look better, with the editors removing &quot;as much unintelligible word-salad as they could.&quot; Trump viewed this as election tampering and sued. The source states that Trump critics and CBS leadership laughed the lawsuit off as frivolous, but that CBS has very recently discussed settling out of court. <a href="/entities/erik-carlson">Erik Carlson</a> argues that the settlement talk is explained by the pending merger between Paramount Global and <a href="/entities/skydance-media">Skydance Media</a>: Paramount, worth roughly $8 billion — less than the damages sought — does not want anything to interfere with the deal.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cbs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cbs as default
};
