import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nolanda Sue Hill","description":"","frontmatter":{"title":"Nolanda Sue Hill","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","fraud","clinton-administration","commerce"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/nolanda-hill.md","filePath":"entities/nolanda-hill.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nolanda-hill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nolanda-sue-hill" tabindex="-1">Nolanda Sue Hill <a class="header-anchor" href="#nolanda-sue-hill" aria-label="Permalink to &quot;Nolanda Sue Hill&quot;">​</a></h1><p>Nolanda Sue Hill was a Dallas, Texas entrepreneur and business partner of Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a>.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> quotes a March 14, 1998 <em>New York Times</em> report describing a nine-count federal indictment returned against Hill, then 53, and her financial aide Kenneth C. White, 49, of Cumberland, Maryland. The two were accused of conspiring to defraud the Internal Revenue Service and the Federal Deposit Insurance Corporation of hundreds of thousands of dollars between 1989 and 1995. The paper framed the case as &quot;a vivid example of how an investigation can outlive its target,&quot; since the indictment grew out of an inquiry whose original subject was Brown, whom Attorney General <a href="/entities/janet-reno">Janet Reno</a> had accused in 1995 of failing to properly report large payments from Hill.</p><p>Hill also figures in the <a href="/entities/judicial-watch">Judicial Watch</a> litigation over Commerce Department trade missions. According to the account reproduced in the article, she testified under oath that Brown had shown her a collection of subpoenaed trade-mission documents kept in an ostrich-skin portfolio — documents subsequently withheld from Judicial Watch in violation of both a subpoena and a FOIA request. The article notes that Brown&#39;s partners were indicted and convicted while Brown himself died before the case reached him.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nolanda-hill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nolandaHill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nolandaHill as default
};
