import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Home Office","description":"","frontmatter":{"title":"Home Office","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","government","immigration","policing"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/home-office.md","filePath":"entities/home-office.md","lastUpdated":null}');
const _sfc_main = { name: "entities/home-office.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="home-office" tabindex="-1">Home Office <a class="header-anchor" href="#home-office" aria-label="Permalink to &quot;Home Office&quot;">​</a></h1><p>The Home Office is the United Kingdom government department responsible for immigration, policing, and domestic security.[1]</p><p>Data held by the Home Office, together with figures from the Office for National Statistics, formed the basis of a January 2025 analysis by the <a href="/entities/centre-for-migration-control">Centre for Migration Control</a> showing that foreign nationals are more than three times as likely as British citizens to be arrested for sex crimes. That data was released through Freedom of Information requests rather than proactive publication, and the report appeared amid claims that the government had purposefully suppressed information on migrant crime statistics.[1]</p><p>The department&#39;s handling of such information sat alongside the wider controversy over institutional failures in the <a href="/concepts/grooming-gangs">grooming gangs</a> scandal, in which officials were reported to have ignored accusations of child sexual abuse out of concern for appearing racist.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/home-office.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeOffice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  homeOffice as default
};
