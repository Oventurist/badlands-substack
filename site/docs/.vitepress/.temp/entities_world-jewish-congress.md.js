import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Jewish Congress","description":"","frontmatter":{"title":"World Jewish Congress","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","diaspora","gaza","advocacy"],"sources":["raw/badlands-news-brief-362.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/world-jewish-congress.md","filePath":"entities/world-jewish-congress.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-jewish-congress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-jewish-congress" tabindex="-1">World Jewish Congress <a class="header-anchor" href="#world-jewish-congress" aria-label="Permalink to &quot;World Jewish Congress&quot;">​</a></h1><p>The World Jewish Congress (WJC) is an international Jewish organization whose president, <a href="/entities/ronald-lauder">Ronald Lauder</a>, publicly criticized Israeli Finance Minister <a href="/entities/bezalel-smotrich">Bezalel Smotrich</a> at a WJC conference held in Jerusalem in May 2025.[1]</p><p>The conference was attended by various Jewish delegations from around the world as well as Israeli Foreign Minister <a href="/entities/gideon-saar">Gideon Sa&#39;ar</a>.[1] Lauder told the gathering that &quot;all the good things that Israel is doing are being destroyed by Smotrich,&quot; because the finance minister&#39;s statements about starving the population of Gaza and destroying the enclave &quot;were played all over the world,&quot; and asked why Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> had not stopped him.[1] Much of the audience applauded, while Sa&#39;ar responded that he &quot;took note&quot; of the criticism.[1]</p><p>Badlands commentary treated the episode — alongside the shooting incident involving foreign diplomats in the West Bank the same week — as evidence that Israel&#39;s international reputation was suffering and that pressure was tightening on Netanyahu.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Based Oklahoma, An African Ambush, &amp; An Allegedly Big Beautiful Bill&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-362" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-362</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-jewish-congress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldJewishCongress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldJewishCongress as default
};
