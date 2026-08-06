import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LIBOR","description":"","frontmatter":{"title":"LIBOR","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["finance","banking","benchmark-rates"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/libor.md","filePath":"concepts/libor.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/libor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libor" tabindex="-1">LIBOR <a class="header-anchor" href="#libor" aria-label="Permalink to &quot;LIBOR&quot;">​</a></h1><p>LIBOR is the London-based interest-rate benchmark system that Erik Carlson identifies as an instrument of <a href="/entities/city-of-london">City of London</a> control over American banking.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="role-in-the-article" tabindex="-1">Role in the article <a class="header-anchor" href="#role-in-the-article" aria-label="Permalink to &quot;Role in the article&quot;">​</a></h2><p>Carlson writes that since early in his first presidency, President <a href="/entities/donald-trump">Donald Trump</a> has fought a silent war against the City of London, and that he replaced the LIBOR system with the <a href="/concepts/sofr">SOFR</a> system — taking control of the American banking system away from the City of London and giving it to the American <a href="/entities/federal-reserve">Federal Reserve</a>.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a> The change is presented as one of the concrete, largely unremarked moves in a campaign that also includes onshoring manufacturing and tariffs.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Journey of Ever-changing Truths&quot;, URL: <a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-journey-of-ever-changing-truths</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/libor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libor as default
};
