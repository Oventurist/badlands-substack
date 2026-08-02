import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MSNBC","description":"","frontmatter":{"title":"MSNBC","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","cable-news","mainstream-media","media-criticism"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/msnbc.md","filePath":"entities/msnbc.md","lastUpdated":null}');
const _sfc_main = { name: "entities/msnbc.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="msnbc" tabindex="-1">MSNBC <a class="header-anchor" href="#msnbc" aria-label="Permalink to &quot;MSNBC&quot;">​</a></h1><p>MSNBC is an American cable news network owned through NBCUniversal by <a href="/entities/comcast">Comcast</a>.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> groups MSNBC with <a href="/entities/cnn">CNN</a> as a network that had been losing viewers before <a href="/entities/donald-trump">Donald Trump</a>&#39;s rise and was temporarily revived by liberal political obsession during his presidency — a recovery the article dismisses as a temporary sugar high.</p><p>The essay singles out MSNBC&#39;s programming as an illustration of what it calls the rampant mediocrity of contemporary journalism, describing the network&#39;s output as &quot;substance-free affirmations of the modern liberal cult-of-personality talking points&quot; and inviting readers to &quot;try to sit through five minutes of <a href="/entities/joy-reid">Joy Reid</a> or <a href="/entities/jen-psaki">Jen Psaki</a>&#39;s god awful MSNBC shows.&quot; The author notes that he attempts this &quot;semi regularly&quot; and that &quot;it takes a strong stomach,&quot; and adds that the same criticism applies to most <a href="/entities/fox-news">Fox News</a> hosts.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/msnbc.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const msnbc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  msnbc as default
};
