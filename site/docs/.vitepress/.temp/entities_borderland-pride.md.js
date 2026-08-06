import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Borderland Pride","description":"","frontmatter":{"title":"Borderland Pride","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["canada","ontario","lgbt","advocacy","pride-flag"],"sources":["raw/badlands-news-brief-2f5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/borderland-pride.md","filePath":"entities/borderland-pride.md","lastUpdated":null}');
const _sfc_main = { name: "entities/borderland-pride.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="borderland-pride" tabindex="-1">Borderland Pride <a class="header-anchor" href="#borderland-pride" aria-label="Permalink to &quot;Borderland Pride&quot;">​</a></h1><p>Borderland Pride is a Canadian LGBTQ advocacy organization active in the border region of northwestern Ontario, and the complainant in the dispute that led to the township of Emo and mayor <a href="/entities/harold-mcquaker">Harold McQuaker</a> being fined.[1]</p><p>Borderland Pride tasked Emo with declaring June as Pride Month and ordered municipal authorities to fly an &quot;LGBTQ2 rainbow flag for a week of your choosing,&quot; despite the fact that the township lacked an official flagpole, and asked Emo to email a copy of the proclamation or resolution once adopted and signed.[1] The township refused, and that rejection sparked a years-long arbitration process before the <a href="/entities/ontario-human-rights-commission">Ontario Human Rights Commission</a> in which the tribunal found against Emo, ordering damages and &quot;reeducation&quot; training.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Korea Joins the Shenanigans as Drama Gives Way to Comedy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/borderland-pride.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const borderlandPride = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  borderlandPride as default
};
