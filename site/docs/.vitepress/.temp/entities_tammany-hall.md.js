import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tammany Hall","description":"","frontmatter":{"title":"Tammany Hall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["machine-politics","corruption","elections","history"],"sources":["raw/always-fight-back.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tammany-hall.md","filePath":"entities/tammany-hall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tammany-hall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tammany-hall" tabindex="-1">Tammany Hall <a class="header-anchor" href="#tammany-hall" aria-label="Permalink to &quot;Tammany Hall&quot;">​</a></h1><p>Tammany Hall was the New York political machine whose boss, William &quot;Boss&quot; Tweed, rose to power in 1863.<a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">[1]</a> By 1871 Tweed&#39;s corruption and abuse of power had become widely known.<a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">[1]</a></p><p>Tweed biographer Kenneth D. Ackerman described the operation: &quot;It&#39;s hard not to admire the skill behind Tweed&#39;s system… The Tweed ring at its height was an engineering marvel, strong and solid, strategically deployed to control key power points: the courts, the legislature, the treasury and the ballot box. Its frauds had a grandeur of scale and an elegance of structure: money-laundering, profit sharing and organization.&quot;<a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">[1]</a></p><p>Notably, Tweed punished those who questioned his electoral practices. He died in prison in 1878.<a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">[1]</a> The episode is cited as evidence that what is now labeled <a href="/concepts/election-denial">election denialism</a> is often a rational response to actual election fraud.<a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Always Fight Back&quot;, URL: <a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">https://badlands.substack.com/p/always-fight-back</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tammany-hall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tammanyHall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tammanyHall as default
};
