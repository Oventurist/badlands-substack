import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sandy Berger","description":"","frontmatter":{"title":"Sandy Berger","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["national-security","clinton-administration","cia"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/sandy-berger.md","filePath":"entities/sandy-berger.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sandy-berger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sandy-berger" tabindex="-1">Sandy Berger <a class="header-anchor" href="#sandy-berger" aria-label="Permalink to &quot;Sandy Berger&quot;">​</a></h1><p>Samuel Richard &quot;Sandy&quot; Berger served as National Security Advisor to President <a href="/entities/bill-clinton">Bill Clinton</a> from 1997 to 2001. In the Badlands Media article &quot;A Dereliction of Duty,&quot; Berger is portrayed as a figure who stole classified documents from the National Archives in an effort to protect the Clinton administration from scrutiny over its handling of the terrorist threat before 9/11.</p><p>According to the article, Berger &quot;literally stole classified documents from the archives by stuffing them in his jacket and socks&quot; in October 2003, and was caught. The source claims this was a &quot;panicked move&quot; because Congress had set up a commission to look into government failures on 9/11, and Clinton was worried about what they would find. The article asserts that the documents Berger removed detailed how the Clinton administration had responded to the threat of terrorist attacks at the end of 1999.</p><p>The article claims that President Clinton had signed a memorandum in August 1998 preventing the killing of <a href="/entities/osama-bin-laden">Osama Bin Laden</a>, and that Berger&#39;s theft of the documents was an attempt to hide this &quot;stand down order.&quot; The source asserts that Clinton was afraid he would get the blame for the 9/11 attacks that killed thousands of Americans, and that Berger&#39;s actions were part of a broader effort to protect the Clinton administration&#39;s legacy.</p><p>According to the article, Berger&#39;s behavior demonstrates how the &quot;shadow government&quot; protects terrorists that the U.S. is supposedly fighting. It claims that the theft of classified documents was part of a pattern in which government officials cover up their complicity with terrorist organizations in order to protect their own power and wealth.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sandy-berger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sandyBerger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sandyBerger as default
};
