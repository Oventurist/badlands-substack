import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ISIS","description":"","frontmatter":{"title":"ISIS","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["terrorism","syria","iraq","cia"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/isis.md","filePath":"entities/isis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/isis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="isis" tabindex="-1">ISIS <a class="header-anchor" href="#isis" aria-label="Permalink to &quot;ISIS&quot;">​</a></h1><p>The Islamic State of Iraq and Syria (ISIS), also known as ISIL or Daesh, is a militant Islamist group that emerged in 2013–2014 and at its peak controlled large territories in Iraq and Syria. In the Badlands Media article &quot;A Conflict of Interest,&quot; ISIS is framed as a terrorist organization that was knowingly funded, armed, and legitimized by U.S. politicians and the CIA under the cover of the Syrian civil war.</p><p>According to the article, <a href="/entities/mouza-moustafa">Mouza Moustafa</a> served as the primary conduit between U.S. politicians and ISIS, acting as the &quot;go-between&quot; for <a href="/entities/john-mccain">John McCain</a> and ISIS leader <a href="/entities/abu-bakr-al-baghdadi">Abu Bakr al-Baghdadi</a>. The source claims that Moustafa&#39;s <a href="/entities/syrian-emergency-task-force">Syrian Emergency Task Force</a> was &quot;actually a lobbying group for ISIS,&quot; and that <a href="/entities/barack-obama">President Obama</a> gave these operations his &quot;full approval and blessing.&quot; It further claims that <a href="/entities/hillary-clinton">Hillary Clinton</a> was similarly complicit.</p><p>The article asserts that <a href="/concepts/benghazi">Benghazi</a> became a training hub for ISIS fighters after Gaddafi&#39;s fall, with Syrians arriving weekly for insurgent training before being flown to Syria through Turkey. It claims that <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a>&#39;s airline, al-Ajniha, was used to transport these fighters, and that the training was &quot;better organized and financed than had been realized.&quot; The source notes that Obama famously called ISIS the &quot;J.V. team&quot; to distract the American people while the group was being strengthened with taxpayer money.</p><p>According to the article, the entire operation was by design: arm and train terrorists, let them conquer territory, and use the resulting perpetual war as a mechanism for continued theft of taxpayer funds. The source claims that <a href="/entities/donald-trump">Donald Trump</a> ended this dynamic by defeating ISIS and ending the wars, which is why the enemy views him as an existential threat.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/isis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const isis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  isis as default
};
