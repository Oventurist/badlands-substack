import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"February 17 Brigade","description":"","frontmatter":{"title":"February 17 Brigade","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["libya","lifg","benghazi"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/february-17-brigade.md","filePath":"entities/february-17-brigade.md","lastUpdated":null}');
const _sfc_main = { name: "entities/february-17-brigade.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="february-17-brigade" tabindex="-1">February 17 Brigade <a class="header-anchor" href="#february-17-brigade" aria-label="Permalink to &quot;February 17 Brigade&quot;">​</a></h1><p>The February 17 Brigade was a Libyan military unit active during and after the 2011 revolution against <a href="/entities/muammar-gaddafi">Muammar Gaddafi</a>. In the Badlands Media article &quot;A Conflict of Interest,&quot; the February 17 Brigade is identified as an elite force commanded by <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a> that played a central role in the overthrow of Gaddafi and was subsequently assigned security duties at the U.S. consulate in <a href="/concepts/benghazi">Benghazi</a>.</p><p>According to the article, Belhaj went to <a href="/entities/qatar">Qatar</a> after his release from Libyan prison to take command of the February 17 Brigade when the insurrection against Gaddafi began in 2011. The source claims that this was the same brigade that Belhaj would later lead to topple and kill Gaddafi. It further asserts that the February 17 Brigade was assigned as part of the security at the Benghazi consulate, and that it &quot;literally did nothing to stop the attack&quot; on September 11, 2012.</p><p>The article frames the February 17 Brigade as a terrorist organization affiliated with the <a href="/entities/libyan-islamic-fighting-group">Libyan Islamic Fighting Group</a> and <a href="/entities/al-qaeda">Al-Qaeda</a>, and claims that its assignment to consulate security was evidence of the Obama administration&#39;s complicity with terrorist groups. According to the source, the brigade&#39;s inaction during the Benghazi attack was not a failure but a deliberate choice by an organization that was hostile to the United States.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/february-17-brigade.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const february17Brigade = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  february17Brigade as default
};
