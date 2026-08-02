import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Truth Social","description":"","frontmatter":{"title":"Truth Social","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["platform","social-media","trump","free-speech"],"sources":["raw/a-virus-or-a-metaphor.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/truth-social.md","filePath":"entities/truth-social.md","lastUpdated":null}');
const _sfc_main = { name: "entities/truth-social.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="truth-social" tabindex="-1">Truth Social <a class="header-anchor" href="#truth-social" aria-label="Permalink to &quot;Truth Social&quot;">​</a></h1><p>Truth Social is the social media platform operated by <a href="/entities/trump-media-and-technology-group">Trump Media and Technology Group</a> and associated with <a href="/entities/donald-trump">Donald Trump</a>. In the Badlands Media corpus it is treated as an alternative channel through which Trump communicates directly with his audiences, bypassing the mainstream press.</p><h2 id="capitalization-and-the-sec" tabindex="-1">Capitalization and the SEC <a class="header-anchor" href="#capitalization-and-the-sec" aria-label="Permalink to &quot;Capitalization and the SEC&quot;">​</a></h2><p><a href="/concepts/a-virus-or-a-metaphor">A Virus, or a Metaphor?</a> refers to Truth Social in the context of the delayed DWAC merger, arguing that the <a href="/entities/securities-and-exchange-commission">SEC</a>&#39;s hold prevented Trump from &quot;injecting money into Truth Social&quot; and from growing his media operations more broadly. <a href="/entities/erik-carlson">Erik Carlson</a> presents this as one of several indications that Trump is a target of, rather than a beneficiary of, entrenched institutional power.</p><h2 id="relevance-to-trump-s-messaging" tabindex="-1">Relevance to Trump&#39;s messaging <a class="header-anchor" href="#relevance-to-trump-s-messaging" aria-label="Permalink to &quot;Relevance to Trump&#39;s messaging&quot;">​</a></h2><p>Because the essay&#39;s central thesis is that Trump communicates in layered code — with distinct meanings for the asleep, the half-awake, the fully awake and the <a href="/concepts/deep-state">Deep State</a> — his posts on the platform are among the texts the author invites readers to revisit, substituting &quot;<a href="/concepts/communism">Communism</a>&quot; for &quot;virus&quot; in order to recover the intended message.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-virus-or-a-metaphor" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/truth-social.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const truthSocial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  truthSocial as default
};
