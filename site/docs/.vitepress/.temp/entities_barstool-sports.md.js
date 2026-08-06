import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barstool Sports","description":"","frontmatter":{"title":"Barstool Sports","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","company","comedy"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"low"},"headers":[],"relativePath":"entities/barstool-sports.md","filePath":"entities/barstool-sports.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barstool-sports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barstool-sports" tabindex="-1">Barstool Sports <a class="header-anchor" href="#barstool-sports" aria-label="Permalink to &quot;Barstool Sports&quot;">​</a></h1><p>Barstool Sports is a popular and financially successful American media company founded by <a href="/entities/dave-portnoy">Dave Portnoy</a>.<a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">[1]</a> It is referenced in &quot;A Glaring Double Standard&quot; as the platform on which Portnoy, whom Badlands Media contributor <a href="/entities/ryan-delarme">Ryan DeLarme</a> describes as a leader in the effort to destigmatize humor in the age of political correctness, delivered a June 4 podcast segment objecting to jokes about American Jews.<a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">[1]</a></p><p>DeLarme uses the company&#39;s brand of anti-cancel-culture, &quot;manosphere&quot;-adjacent comedy as a test case: if edgy humor is defensible in general, he asks, why should jokes about Israel or Jews alone be forbidden.<a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">[1]</a> The episode is cited as an instance of the wider <a href="/concepts/cancel-culture">cancel culture</a> double standard the essay documents.<a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Glaring Double Standard&quot;, URL: <a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-glaring-double-standard</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barstool-sports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barstoolSports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barstoolSports as default
};
