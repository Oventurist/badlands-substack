import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sergei Kurzin","description":"","frontmatter":{"title":"Sergei Kurzin","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["russia","uranium","clinton-network","donor"],"sources":["raw/america-for-sale-part-3.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/sergei-kurzin.md","filePath":"entities/sergei-kurzin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sergei-kurzin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sergei-kurzin" tabindex="-1">Sergei Kurzin <a class="header-anchor" href="#sergei-kurzin" aria-label="Permalink to &quot;Sergei Kurzin&quot;">​</a></h1><p>Sergei Kurzin is a Russian investor and engineer who, according to New York Post reporting quoted in the Badlands Media essay <a href="/concepts/america-for-sale-part-3">America for Sale — Part 3</a>, &quot;worked for <a href="/entities/marc-rich">Marc Rich</a> in the 1990s, traveling around Russia looking for suitable investment opportunities in the crumbled former Soviet Union.&quot;</p><p>An engineer by training, Kurzin went on to participate in lucrative deals in <a href="/entities/kazakhstan">Kazakhstan</a> and elsewhere, &quot;including the lucrative <a href="/entities/uranium-one">Uranium One</a> deal that involved <a href="/entities/bill-clinton">Bill Clinton</a> and <a href="/entities/frank-giustra">Frank Giustra</a>.&quot; The article places him in the original UrAsia uranium venture in Kazakhstan as well as in the eventual sale of Uranium One to Russia, describing him as the Clintons&#39; and Giustra&#39;s &quot;Russian partner.&quot;</p><p>The New York Post also reported that Kurzin donated $1 million to the <a href="/entities/clinton-foundation">Clinton Foundation</a>. In the article&#39;s framing, Kurzin — alongside <a href="/entities/gilbert-chagoury">Gilbert Chagoury</a> — represents the continuity between Rich&#39;s sanctions-era trading network and the Clinton fundraising apparatus, and his involvement is cited as evidence that the Uranium One transaction was a Clinton-designed arrangement dating back to the September 2005 trip to Kazakhstan rather than a decision taken solely at the <a href="/entities/state-department">State Department</a> years later.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sergei-kurzin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sergeiKurzin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sergeiKurzin as default
};
