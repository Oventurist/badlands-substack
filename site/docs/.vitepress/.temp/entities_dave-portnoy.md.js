import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dave Portnoy","description":"","frontmatter":{"title":"Dave Portnoy","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","media","comedy","barstool-sports","free-speech"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/dave-portnoy.md","filePath":"entities/dave-portnoy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dave-portnoy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dave-portnoy" tabindex="-1">Dave Portnoy <a class="header-anchor" href="#dave-portnoy" aria-label="Permalink to &quot;Dave Portnoy&quot;">​</a></h1><p>Dave Portnoy is an American conservative social media personality and the founder of <a href="/entities/barstool-sports">Barstool Sports</a>, a financially successful media company. He features in the Badlands Media article &quot;A Glaring Double Standard&quot; as an example of the limits the right places on free speech.</p><h2 id="meltdown-over-jokes-about-jews" tabindex="-1">Meltdown over jokes about Jews <a class="header-anchor" href="#meltdown-over-jokes-about-jews" aria-label="Permalink to &quot;Meltdown over jokes about Jews&quot;">​</a></h2><p>The article describes Portnoy as &quot;a leader in the effort to destigmatize humor in the age of political correctness&quot; — before noting that, in his view, one type of humor goes too far. It reports that on June 4, Portnoy appeared on one of the Barstool podcasts and had what the author calls &quot;one of the most loony, unhinged meltdowns I&#39;ve ever witnessed on a podcast,&quot; premised on his perception that cracking jokes about American Jews, however light-hearted, would get them killed in the street.</p><p>The author, <a href="/entities/ryan-delarme">Ryan DeLarme</a>, writes that he did not come away persuaded that Jews are so uniquely endangered that all jokes at their expense should be self-censored, observing that jokes are permitted about many other groups while Jews — specifically &quot;Zionist Jews,&quot; as opposed to &quot;self-hating&quot; Jews who do not support Israel — are treated as uniquely deserving of sympathy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dave-portnoy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davePortnoy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davePortnoy as default
};
