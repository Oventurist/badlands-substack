import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Clif High","description":"","frontmatter":{"title":"Clif High","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","commentator","predictive-linguistics","social-media"],"sources":["raw/a-hypnotists-take-on-israel-palestine.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/clif-high.md","filePath":"entities/clif-high.md","lastUpdated":null}');
const _sfc_main = { name: "entities/clif-high.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="clif-high" tabindex="-1">Clif High <a class="header-anchor" href="#clif-high" aria-label="Permalink to &quot;Clif High&quot;">​</a></h1><p><strong>Clif High</strong> is an internet commentator and self-described predictive-linguistics researcher, known for &quot;web bot&quot; data-mining forecasts and for a large following on X (formerly Twitter), where he posts as @clif_high. He is a recurring voice in the alternative-media ecosystem in which <a href="/entities/badlands-media">Badlands Media</a> operates.</p><p>He is quoted at the head of the Badlands essay <a href="/concepts/a-hypnotists-take-on-israel-palestine">&quot;A Hypnotist&#39;s Take on Israel, Palestine, and Q&quot;</a> with a sardonic post about the pressure to take sides in the <a href="/concepts/israel-palestine-conflict">Israel–Palestine conflict</a>: &quot;Listen up, butthead! If you don&#39;t choose a side, you won&#39;t be able to have your emotions torqued &amp; be manipulated!&quot; The quotation, dated to an October 2023 post, sets up the essay&#39;s thesis that demands for immediate partisanship are themselves the delivery mechanism for <a href="/concepts/operation-mockingbird">Mockingbird</a> propaganda, and that emotional neutrality is the defense against hypnotic suggestion.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/clif-high.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clifHigh = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  clifHigh as default
};
