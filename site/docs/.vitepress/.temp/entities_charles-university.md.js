import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charles University","description":"","frontmatter":{"title":"Charles University","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["czech-republic","prague","universities","education"],"sources":["raw/badlands-news-brief-07e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/charles-university.md","filePath":"entities/charles-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charles-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charles-university" tabindex="-1">Charles University <a class="header-anchor" href="#charles-university" aria-label="Permalink to &quot;Charles University&quot;">​</a></h1><p>Charles University is a university located in central Prague, Czech Republic. It became the focus of international news coverage on Thursday, December 21, 2023, when it was the site of a mass shooting that left at least 15 people dead.[1]</p><h2 id="december-2023-shooting" tabindex="-1">December 2023 shooting <a class="header-anchor" href="#december-2023-shooting" aria-label="Permalink to &quot;December 2023 shooting&quot;">​</a></h2><p>Fourteen people were killed at the university itself, and twenty-four others were wounded there, in what Czech authorities described as a shooting rampage.[1] The gunman was identified as a 24-year-old student of world history at Charles University, who killed himself after the spree in central Prague.[1] Before attacking the university, he had killed his father at the family home in the town of Kladno, outside Prague, according to Radek Jiroudek, a police officer with Interpol Prague.[1]</p><p>Czech police partly identified the assailant as &quot;David K.,&quot; in line with the European practice of releasing only a first name and last initial for privacy reasons.[1] Martin Vondraska, chief of the national police force, told a news conference in Prague that the assailant &quot;got inspired by a similar terrible event abroad,&quot; without specifying where.[1] Authorities said they did not believe the gunman&#39;s actions were connected to international terrorism.[1] The episode was reported by <a href="/entities/new-york-times">The New York Times</a> and carried as a bonus item in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><p>See also: <a href="/concepts/charles-university-shooting">Charles University shooting</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: MAGA Gets Branded as Biden Bungles Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-07e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-07e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charles-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlesUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlesUniversity as default
};
