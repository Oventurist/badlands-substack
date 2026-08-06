import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Avenatti","description":"","frontmatter":{"title":"Michael Avenatti","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["lawyer","stormy-daniels","convicted","trump"],"sources":["raw/badlands-news-brief-4a3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michael-avenatti.md","filePath":"entities/michael-avenatti.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-avenatti.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-avenatti" tabindex="-1">Michael Avenatti <a class="header-anchor" href="#michael-avenatti" aria-label="Permalink to &quot;Michael Avenatti&quot;">​</a></h1><p><strong>Michael Avenatti</strong> is an American lawyer who rose to national prominence as the attorney for adult film performer <a href="/entities/stormy-daniels">Stormy Daniels</a> during her legal conflict with <a href="/entities/donald-trump">Donald Trump</a>, and who was subsequently convicted of criminal offenses and disgraced.[1]</p><p>Writing in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> of April 7, 2023, the analyst <a href="/entities/burning-bright">Burning Bright</a> pointed to Avenatti as a cautionary precedent while assessing Daniels&#39;s stated willingness to testify in the <a href="/concepts/trump-hush-money-case">Trump hush money case</a>.[1] Burning Bright suggested readers review Avenatti&#39;s interviews from the period leading up to the previous attempt to use Daniels against Trump, and consider how that effort ultimately turned out for him.[1] The argument formed part of a broader claim that convictions in Daniels&#39;s orbit have fallen on figures aligned against Trump rather than with him.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fauci Returns, the Dollar Falls &amp; Stormy Struts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4a3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4a3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-avenatti.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelAvenatti = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelAvenatti as default
};
