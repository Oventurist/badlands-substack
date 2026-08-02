import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jason Lowery","description":"","frontmatter":{"title":"Jason Lowery","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","military","bitcoin","space-force","author"],"sources":["raw/are-we-entering-the-millennial-reign.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/jason-lowery.md","filePath":"entities/jason-lowery.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jason-lowery.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jason-lowery" tabindex="-1">Jason Lowery <a class="header-anchor" href="#jason-lowery" aria-label="Permalink to &quot;Jason Lowery&quot;">​</a></h1><p><strong>Jason Lowery</strong> is a Major in the United States Space Force and the author of <a href="/concepts/softwar"><em>Softwar: A Novel Theory on Power Projection and the National Strategic Significance of Bitcoin</em></a>.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>The Badlands Media feature <a href="/concepts/are-we-entering-the-millennial-reign">&quot;Are We Entering the Millennial Reign?&quot;</a> cites Lowery as having &quot;provided an extensive and well researched thesis on how <a href="/concepts/bitcoin">Bitcoin</a> is much more than simply &#39;magic internet money.&#39;&quot; <a href="/entities/patriots-in-progress">Patriots in Progress</a> uses Lowery&#39;s work to support the question of whether Bitcoin was released as a military weapon and digital counterinsurgency operation aimed at the centralized control of money — the root cause, in the article&#39;s framing, of humanity&#39;s endless cycle of destruction and bloodshed.</p><p>Lowery is cited a second time in the article&#39;s concluding argument, for the proposition that Bitcoin <em>physically restrains</em> the &quot;god-kings&quot; through public and private keys and a decentralized ledger known as the timechain. That claim of physical restraint supplies the article&#39;s analogy with the angel of Revelation who binds Satan with a key and a chain at the start of the <a href="/concepts/millennial-reign">Millennial Reign</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-we-entering-the-millennial-reign" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jason-lowery.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jasonLowery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jasonLowery as default
};
