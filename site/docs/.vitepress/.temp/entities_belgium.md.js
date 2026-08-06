import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Belgium","description":"","frontmatter":{"title":"Belgium","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["europe","eu","russia","sanctions","finance"],"sources":["raw/badlands-news-brief-60c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/belgium.md","filePath":"entities/belgium.md","lastUpdated":null}');
const _sfc_main = { name: "entities/belgium.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="belgium" tabindex="-1">Belgium <a class="header-anchor" href="#belgium" aria-label="Permalink to &quot;Belgium&quot;">​</a></h1><p>Belgium is a member state of the <a href="/entities/european-union">European Union</a> and the jurisdiction where most of the frozen Russian central bank assets held in Europe are located.[1]</p><h2 id="role-in-the-frozen-russian-assets-dispute" tabindex="-1">Role in the frozen Russian assets dispute <a class="header-anchor" href="#role-in-the-frozen-russian-assets-dispute" aria-label="Permalink to &quot;Role in the frozen Russian assets dispute&quot;">​</a></h2><p>As EU leaders met in Brussels on Thursday, December 18, 2025 to debate using an estimated €210 billion ($246 billion) in Russian assets to back a so-called &quot;reparations loan&quot; for Kiev, Belgium demanded that the legal risks of any seizure be shared among bloc members.[1] Moscow condemned the proposed move as &quot;theft.&quot;[1]</p><p>Politico reported that Belgian resistance was not the decisive obstacle, writing that &quot;The EU&#39;s problem isn&#39;t really Belgium, it&#39;s Trump,&quot; and describing US backchanneling with European capitals that brought Italy, Bulgaria, Malta and the Czech Republic into the group of EU nations opposing the asset grab.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fusion Mergers &amp; Fusion-Adjacent Murders&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-60c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-60c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/belgium.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const belgium = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  belgium as default
};
