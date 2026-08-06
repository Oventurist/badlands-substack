import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hanoch Milwidsky","description":"","frontmatter":{"title":"Hanoch Milwidsky","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","knesset","likud","gaza-war"],"sources":["raw/badlands-brief-559.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hanoch-milwidsky.md","filePath":"entities/hanoch-milwidsky.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hanoch-milwidsky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hanoch-milwidsky" tabindex="-1">Hanoch Milwidsky <a class="header-anchor" href="#hanoch-milwidsky" aria-label="Permalink to &quot;Hanoch Milwidsky&quot;">​</a></h1><p>Hanoch Milwidsky is a member of the <a href="/entities/knesset">Knesset</a> for the <a href="/entities/likud">Likud</a> party.[1] He is cited in Badlands Media&#39;s coverage of the <a href="/entities/sde-teiman">Sde Teiman</a> detainee abuse case for remarks made during a publicly broadcast Knesset debate on whether it should be lawful for Israeli personnel to sodomize male prisoners with objects.[1]</p><p>During that debate, Milwidsky argued: &quot;Shut up! If he is a Nukbha, then everything is legitimate to do!&quot; — invoking the designation applied to Hamas&#39;s elite unit as a justification for the treatment of detainees.[1] Badlands commentators cited the statement as emblematic of a political climate in which the question under discussion was not whether the alleged assault at Sde Teiman had occurred, but whether it should be permissible.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narrative Warfare For Your Safety&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-559" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-559</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hanoch-milwidsky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hanochMilwidsky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hanochMilwidsky as default
};
