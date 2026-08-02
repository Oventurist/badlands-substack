import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"G. Gordon Liddy","description":"","frontmatter":{"title":"G. Gordon Liddy","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","watergate","fbi","radio","history"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/g-gordon-liddy.md","filePath":"entities/g-gordon-liddy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/g-gordon-liddy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="g-gordon-liddy" tabindex="-1">G. Gordon Liddy <a class="header-anchor" href="#g-gordon-liddy" aria-label="Permalink to &quot;G. Gordon Liddy&quot;">​</a></h1><p>George Gordon Liddy (1930–2021) was an American lawyer, former FBI agent, and political operative best known as the chief operative of the White House &quot;Plumbers&quot; unit under President Richard Nixon and as an organizer of the 1972 break-in at the Democratic National Committee headquarters in the Watergate complex. Convicted of conspiracy, burglary, and illegal wiretapping, he served more than four years in prison and later became a nationally syndicated conservative radio talk show host.</p><h2 id="relevance-to-the-corpus" tabindex="-1">Relevance to the corpus <a class="header-anchor" href="#relevance-to-the-corpus" aria-label="Permalink to &quot;Relevance to the corpus&quot;">​</a></h2><p>Liddy enters the Badlands Media corpus through his son, <a href="/entities/tom-liddy">Tom Liddy</a>, Civil Division Chief of the <a href="/entities/maricopa-county-attorneys-office">Maricopa County Attorney&#39;s Office</a> during the disputed 2022 general election. In a sidebar to <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a>, <a href="/entities/kitty-gillespie">Kitty Gillespie</a> writes: &quot;Yes, Tom Liddy is G. Gordon Liddy&#39;s son. Yes, THAT G. Gordon Liddy from Watergate,&quot; and declines to elaborate — a rhetorical gesture inviting readers to draw their own inference about political lineage and the handling of election disputes in <a href="/entities/maricopa-county">Maricopa County</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/g-gordon-liddy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gGordonLiddy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gGordonLiddy as default
};
