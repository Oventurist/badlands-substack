import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Las Vegas Shooting","description":"","frontmatter":{"title":"Las Vegas Shooting","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":[2017,"mass-shooting","saudi-arabia","qanon"],"sources":["raw/arabian-nights.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/las-vegas-shooting.md","filePath":"concepts/las-vegas-shooting.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/las-vegas-shooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="las-vegas-shooting" tabindex="-1">Las Vegas Shooting <a class="header-anchor" href="#las-vegas-shooting" aria-label="Permalink to &quot;Las Vegas Shooting&quot;">​</a></h1><p>The Las Vegas shooting of October 2017 occupies a pivotal place in the article&#39;s narrative, both as a national moment of somber reflection and as the immediate precursor to the appearance of the anonymous poster known as <a href="/concepts/qanon">Q</a>.[1]</p><p>The author, then searching inward for answers a few months after his brother&#39;s death, describes the rest of the world joining him in that reflection when the shooting occurred.[1] Just weeks later an Anon appeared on 4chan offering cryptic musings in a style not entirely unique to the board.[1]</p><p>Speculation across the internet held that the young Crown Prince — <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a> — was somehow connected to the tragedy, perhaps as the intended target.[1] The author also refers to &quot;inexplicable datapoints surrounding the Vegas Shooting that were being wiped from the internet,&quot; which together with the <a href="/concepts/sword-dance">Sword Dance</a> drew him toward research on Saudi Arabia.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/las-vegas-shooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lasVegasShooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lasVegasShooting as default
};
