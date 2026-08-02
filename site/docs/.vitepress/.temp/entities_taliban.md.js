import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Taliban","description":"","frontmatter":{"title":"Taliban","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["afghanistan","terrorism","cia"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/taliban.md","filePath":"entities/taliban.md","lastUpdated":null}');
const _sfc_main = { name: "entities/taliban.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="taliban" tabindex="-1">Taliban <a class="header-anchor" href="#taliban" aria-label="Permalink to &quot;Taliban&quot;">​</a></h1><p>The Taliban is a militant Islamist organization that emerged in Afghanistan in the mid-1990s and ruled the country from 1996 to 2001. In the Badlands Media article &quot;A Dereliction of Duty,&quot; the Taliban is portrayed as a beneficiary of covert U.S. weapons shipments and as part of the broader pattern of the U.S. government arming its enemies.</p><p>According to the article, citing a 2014 New York Post report, Taliban fighters in Kunar province successfully targeted a U.S. Army CH-47 helicopter with a Stinger missile on July 25, 2012. The source claims the missile traced back to a lot that had been signed out by the <a href="/entities/cia">CIA</a> recently, and that it was part of the same lot the CIA turned over to Qataris in early 2011—weapons that <a href="/entities/hillary-clinton">Hillary Clinton&#39;s</a> State Department intended for anti-Gaddafi forces in Libya.</p><p>The article asserts that Qatar delivered between 50 and 60 of those Stingers to the Taliban in early 2012, along with an additional 200 SA-24 Igla-S surface-to-air missiles. It claims that Qatar was expected to hold five Taliban commanders released from Guantanamo Bay for a year before allowing them to go to Afghanistan. According to the source, the U.S. government was &quot;literally arming our enemies in Libya, Syria, Iraq, and Afghanistan,&quot; and they were using those weapons to kill U.S. troops.</p><p>The article frames the Taliban&#39;s acquisition of U.S. weapons as evidence of deliberate treason by the Obama administration. It claims that the &quot;shadow government&quot; was supplying weapons to its enemies in order to keep wars going and generate profit from weapons sales and money laundering, and that the Taliban was just one of many beneficiaries of this scheme.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/taliban.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taliban = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  taliban as default
};
