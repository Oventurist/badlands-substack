import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anonymous","description":"","frontmatter":{"title":"Anonymous","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hacktivism","cybersecurity","protest"],"sources":["raw/badlands-news-brief-222.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/anonymous.md","filePath":"entities/anonymous.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anonymous.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anonymous" tabindex="-1">Anonymous <a class="header-anchor" href="#anonymous" aria-label="Permalink to &quot;Anonymous&quot;">​</a></h1><p><strong>Anonymous</strong> is a decentralized hacker collective known for hacktivist operations against governments and corporations.[1]</p><h2 id="globalx-hack-2025" tabindex="-1">GlobalX hack (2025) <a class="header-anchor" href="#globalx-hack-2025" aria-label="Permalink to &quot;GlobalX hack (2025)&quot;">​</a></h2><p>In May 2025 Anonymous targeted the Trump administration once again by defacing the website of <a href="/entities/globalx">GlobalX</a>, the U.S. airline hired by <a href="/entities/immigration-and-customs-enforcement">U.S. Immigration and Customs Enforcement</a> to deport alleged migrant gang members to El Salvador.[1] Referring to President <a href="/entities/donald-trump">Donald Trump</a> as a &quot;fascist,&quot; the group left a lengthy message on the landing page of a GlobalX subdomain protesting the removal of &quot;alleged members of a Venezuelan gang.&quot;[1]</p><p>&quot;You lose again Donnie,&quot; the hacktivists wrote, referencing a May 1 ruling by a U.S. federal judge declaring the reasoning behind the deportations illegal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Intelligence Narratives &amp; Seemingly Impossible Deals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-222" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-222</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anonymous.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anonymous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anonymous as default
};
