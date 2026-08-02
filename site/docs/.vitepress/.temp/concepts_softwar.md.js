import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Softwar","description":"","frontmatter":{"title":"Softwar","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["bitcoin","national-security","power-projection","book"],"sources":["raw/are-we-entering-the-millennial-reign.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/softwar.md","filePath":"concepts/softwar.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/softwar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="softwar" tabindex="-1">Softwar <a class="header-anchor" href="#softwar" aria-label="Permalink to &quot;Softwar&quot;">​</a></h1><p><em>Softwar: A Novel Theory on Power Projection and the National Strategic Significance of Bitcoin</em> is a thesis and book by United States Space Force Major <a href="/entities/jason-lowery">Jason Lowery</a>, cited in the Badlands Media feature <a href="/concepts/are-we-entering-the-millennial-reign">&quot;Are We Entering the Millennial Reign?&quot;</a>.</p><h2 id="argument-as-cited" tabindex="-1">Argument as cited <a class="header-anchor" href="#argument-as-cited" aria-label="Permalink to &quot;Argument as cited&quot;">​</a></h2><p>The article describes <em>Softwar</em> as &quot;an extensive and well researched thesis on how <a href="/concepts/bitcoin">Bitcoin</a> is much more than simply &#39;magic internet money.&#39;&quot; Drawing on it, <a href="/entities/patriots-in-progress">Patriots in Progress</a> asks what follows if Bitcoin was released as a military weapon and digital counterinsurgency operation intended to address the root cause that has plagued humanity with an endless cycle of destruction and bloodshed for millennia: the centralized control of money. The article supports this framing by noting that every element of Bitcoin&#39;s underlying technology — TCP/IP, TOR, SHA-256 and GPS — was built by the military for nuclear-resistant, wartime application.</p><p>The work&#39;s key concept for the article&#39;s purposes is physical restraint: Lowery is cited for the proposition that Bitcoin <em>physically restrains</em> actors in cyberspace. The article uses this to build its central analogy with Revelation&#39;s angel who binds Satan with a key and a chain, observing that Bitcoin restrains the &quot;god-kings&quot; using public and private keys and a decentralized ledger known as the timechain, thereby underpinning the <a href="/concepts/millennial-reign">Millennial Reign</a> reading.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-we-entering-the-millennial-reign" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/softwar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const softwar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  softwar as default
};
