import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bob Grenier","description":"","frontmatter":{"title":"Bob Grenier","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["cia","osama-bin-laden","pakistan","counterterrorism"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bob-grenier.md","filePath":"entities/bob-grenier.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bob-grenier.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bob-grenier" tabindex="-1">Bob Grenier <a class="header-anchor" href="#bob-grenier" aria-label="Permalink to &quot;Bob Grenier&quot;">​</a></h1><p>Robert &quot;Bob&quot; Grenier is a former <a href="/entities/cia">Central Intelligence Agency</a> officer who served as the agency&#39;s station chief in Islamabad, Pakistan, and later as director of the CIA Counterterrorism Center.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>Grenier is cited in <a href="/concepts/a-dereliction-of-duty">A Dereliction of Duty</a> as the source for the article&#39;s claim that the CIA was legally barred from killing <a href="/entities/osama-bin-laden">Osama Bin Laden</a> before the September 11, 2001 attacks. In the Showtime documentary <em>The Longest War</em>, quoted by the article via the Daily Mail, Grenier explains: &quot;The CIA had a so-called &#39;lethal finding&#39; [bill] that had been signed by President Clinton that said that we could engage in &#39;lethal activity&#39; against bin Laden, but the purpose of our attack against bin Laden couldn&#39;t be to kill him.&quot;</p><p>The article treats this testimony as proof that the <a href="/concepts/memorandum-of-notification">Memorandum of Notification</a> signed by <a href="/entities/bill-clinton">Bill Clinton</a> in August 1998 amounted to a <a href="/concepts/stand-down-order">stand down order</a> protecting Bin Laden, and connects it to its wider argument that successive administrations shielded a CIA asset in order to sustain what it calls the &quot;never-ending war on terror.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bob-grenier.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bobGrenier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bobGrenier as default
};
