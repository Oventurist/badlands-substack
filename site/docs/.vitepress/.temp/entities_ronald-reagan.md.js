import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ronald Reagan","description":"","frontmatter":{"title":"Ronald Reagan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["presidents","hollywood","cold-war","military"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ronald-reagan.md","filePath":"entities/ronald-reagan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ronald-reagan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ronald-reagan" tabindex="-1">Ronald Reagan <a class="header-anchor" href="#ronald-reagan" aria-label="Permalink to &quot;Ronald Reagan&quot;">​</a></h1><p>Ronald Reagan was President of the United States during the 1980s and, in the argument of &quot;A New Hollywood,&quot; the model for how a president can use the film industry as an instrument of national renewal.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><p><a href="/entities/erik-carlson">Erik Carlson</a> writes that Reagan took control of <a href="/entities/hollywood">Hollywood</a> during his eight years in office, pushing for movies that promoted strong American characters like Rambo.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> The films made during his presidency made the American military seem powerful, which both inspired Americans and intimidated foreign adversaries.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> Carlson notes that the original <em>Top Gun</em>, released in 1986 while Reagan was president, was the biggest military recruiting tool ever created.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><p>Carlson describes <a href="/entities/donald-trump">Donald Trump</a> as &quot;Reagan 2.0&quot; — not a continuation of Reagan&#39;s efforts but a vastly improved version, one that does not include compromising with the enemy.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> Just as Reagan understood the power of Hollywood, he argues, Trump understands it too.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New Hollywood&quot;, URL: <a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-hollywood</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ronald-reagan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ronaldReagan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ronaldReagan as default
};
