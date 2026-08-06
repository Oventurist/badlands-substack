import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"G.K. Chesterton","description":"","frontmatter":{"title":"G.K. Chesterton","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["philosophy","literature","family","culture-war"],"sources":["raw/badlands-news-brief-09d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gk-chesterton.md","filePath":"entities/gk-chesterton.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gk-chesterton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="g-k-chesterton" tabindex="-1">G.K. Chesterton <a class="header-anchor" href="#g-k-chesterton" aria-label="Permalink to &quot;G.K. Chesterton&quot;">​</a></h1><p>G.K. Chesterton was the English writer whose book <em>What&#39;s Wrong with the World</em> — and specifically its section titled &quot;Feminism, Or the Mistake about Woman&quot; — was invoked by Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> in her defense of <a href="/entities/harrison-butker">Harrison Butker</a>&#39;s 2024 <a href="/entities/benedictine-college">Benedictine College</a> commencement address.[1]</p><p>She quoted Chesterton&#39;s line, &quot;How can it be a large career to tell other people&#39;s children about the Rule of Three, and a small career to tell one&#39;s own children about the universe?&quot;, using it to argue that women are &quot;built for something better, more important… something generationally transcendent.&quot;[1] She closed with a further Chesterton passage: &quot;…meanwhile do not talk to me about the poor chain-makers... They are engaged in a very wide-spread and flourishing industry of the present age. They are making chains.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Iranian Crashes, Israeli Maneuvers &amp; Trumpian Rhetoric&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gk-chesterton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gkChesterton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gkChesterton as default
};
