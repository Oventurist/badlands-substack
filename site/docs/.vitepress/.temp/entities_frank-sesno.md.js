import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Frank Sesno","description":"","frontmatter":{"title":"Frank Sesno","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","cnn","academia"],"sources":["raw/badlands-news-brief-19a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/frank-sesno.md","filePath":"entities/frank-sesno.md","lastUpdated":null}');
const _sfc_main = { name: "entities/frank-sesno.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frank-sesno" tabindex="-1">Frank Sesno <a class="header-anchor" href="#frank-sesno" aria-label="Permalink to &quot;Frank Sesno&quot;">​</a></h1><p>Frank Sesno is a former CNN Washington bureau chief and a professor at George Washington University&#39;s school of media and public affairs.[1]</p><h2 id="commentary-on-morning-joe" tabindex="-1">Commentary on Morning Joe <a class="header-anchor" href="#commentary-on-morning-joe" aria-label="Permalink to &quot;Commentary on Morning Joe&quot;">​</a></h2><p>Sesno was quoted by the Associated Press assessing the backlash to the November 2024 meeting between <a href="/entities/donald-trump">Donald Trump</a> and the <a href="/entities/morning-joe">Morning Joe</a> hosts <a href="/entities/joe-scarborough">Joe Scarborough</a> and <a href="/entities/mika-brzezinski">Mika Brzezinski</a>.[1] He said the pair &quot;have portrayed themselves as bastions of integrity standing up to a would-be dictator,&quot; while &quot;what the followers see is the daily procession of people on the show constantly talking about the evils of Donald Trump and then Joe and Mika show up and have high tea with the guy.&quot;[1]</p><p>Sesno&#39;s sharper formulation — &quot;I won&#39;t even call it journalism. It&#39;s storytelling.&quot; — was adopted by <a href="/entities/ashe-in-america">Ashe in America</a> as the epigraph for her commentary on the decline of the corporate press in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ceasefires, Olive Branches ... and Scare Events?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/frank-sesno.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const frankSesno = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  frankSesno as default
};
