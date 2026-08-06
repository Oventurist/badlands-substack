import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SOFR","description":"","frontmatter":{"title":"SOFR","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["finance","banking","benchmark-rates"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/sofr.md","filePath":"concepts/sofr.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/sofr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sofr" tabindex="-1">SOFR <a class="header-anchor" href="#sofr" aria-label="Permalink to &quot;SOFR&quot;">​</a></h1><p>SOFR is the benchmark rate system that, in Erik Carlson&#39;s account, replaced <a href="/concepts/libor">LIBOR</a> and shifted control of American banking from London to Washington.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="role-in-the-article" tabindex="-1">Role in the article <a class="header-anchor" href="#role-in-the-article" aria-label="Permalink to &quot;Role in the article&quot;">​</a></h2><p>Carlson credits President <a href="/entities/donald-trump">Donald Trump</a> with replacing the LIBOR system with the SOFR system, thereby taking control of the American banking system away from the <a href="/entities/city-of-london">City of London</a> and giving it to the American <a href="/entities/federal-reserve">Federal Reserve</a>.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a> He frames the change as part of a silent war Trump has waged against the City of London since early in his first presidency.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Journey of Ever-changing Truths&quot;, URL: <a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-journey-of-ever-changing-truths</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/sofr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sofr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sofr as default
};
