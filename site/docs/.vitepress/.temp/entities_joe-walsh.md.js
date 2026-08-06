import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Joe Walsh","description":"","frontmatter":{"title":"Joe Walsh","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["never-trump","republican-party","media"],"sources":["raw/badlands-news-brief-397.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/joe-walsh.md","filePath":"entities/joe-walsh.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joe-walsh.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joe-walsh" tabindex="-1">Joe Walsh <a class="header-anchor" href="#joe-walsh" aria-label="Permalink to &quot;Joe Walsh&quot;">​</a></h1><p><strong>Joe Walsh</strong> is a former Republican member of Congress from Illinois who became one of the more visible voices of the <a href="/concepts/never-trump-movement">Never Trump movement</a>.[1]</p><h2 id="post-2024-remarks" tabindex="-1">Post-2024 remarks <a class="header-anchor" href="#post-2024-remarks" aria-label="Permalink to &quot;Post-2024 remarks&quot;">​</a></h2><p>In a Politico interview published in late November 2024, Walsh described the choices facing anti-Trump Republicans after <a href="/entities/donald-trump">Donald Trump</a>&#39;s election victory: &quot;It&#39;s down to two options. Productively throw rocks at the administration — kind of be like a group in exile and from a distance do what we can to damage MAGA, knowing we can never go back — or become Democrats.&quot;[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> seized on the quotation as a &quot;hilarious admission&quot; that the real political conflict was between the people and the establishment rather than between the two parties, and closed her commentary with the line, &quot;Don&#39;t worry, Joe. You&#39;ll always be a punchline!&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Pardon Me, Blue, but Whose Team Are You Really On?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-397" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-397</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joe-walsh.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joeWalsh = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joeWalsh as default
};
