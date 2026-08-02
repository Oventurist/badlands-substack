import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WWG1WGA","description":"","frontmatter":{"title":"WWG1WGA","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["slogan","q","anon","movement"],"sources":["raw/are-jack-smith-and-fani-willis-in.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/wwg1wga.md","filePath":"concepts/wwg1wga.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/wwg1wga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wwg1wga" tabindex="-1">WWG1WGA <a class="header-anchor" href="#wwg1wga" aria-label="Permalink to &quot;WWG1WGA&quot;">​</a></h1><p>WWG1WGA — an initialism of &quot;Where We Go One, We Go All&quot; — is the signature slogan of the <a href="/concepts/q">Q</a> movement and a common sign-off in the Badlands Media corpus. It functions as an expression of collective solidarity among anons and supporters of <a href="/entities/donald-trump">Donald Trump</a>, asserting that the movement advances or falls together.</p><h2 id="use-in-the-corpus" tabindex="-1">Use in the corpus <a class="header-anchor" href="#use-in-the-corpus" aria-label="Permalink to &quot;Use in the corpus&quot;">​</a></h2><p>The slogan closes the September 2023 essay <a href="/concepts/are-jack-smith-and-fani-willis-in">Are Jack Smith and Fani Willis in on the Plan?</a>, where it follows the author&#39;s suggestion that the prosecutions of Trump by <a href="/entities/jack-smith">Jack Smith</a> and <a href="/entities/fani-willis">Fani Willis</a> may be part of a long-planned operation. In that context the phrase reinforces the essay&#39;s reading of the film <a href="/concepts/white-squall">White Squall</a>, in which a captain on trial is redeemed by a crew that refuses to abandon him — the crew&#39;s collective loyalty being, in the author&#39;s interpretation, precisely what WWG1WGA describes.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-jack-smith-and-fani-willis-in" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/wwg1wga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wwg1wga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wwg1wga as default
};
