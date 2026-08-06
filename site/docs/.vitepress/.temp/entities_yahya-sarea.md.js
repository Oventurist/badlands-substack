import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yahya Sarea","description":"","frontmatter":{"title":"Yahya Sarea","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["houthis","yemen","military-spokesmen","red-sea"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/yahya-sarea.md","filePath":"entities/yahya-sarea.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yahya-sarea.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yahya-sarea" tabindex="-1">Yahya Sarea <a class="header-anchor" href="#yahya-sarea" aria-label="Permalink to &quot;Yahya Sarea&quot;">​</a></h1><p>Yahya Sarea is the military spokesman for the <a href="/entities/houthis">Houthi</a> movement in <a href="/entities/yemen">Yemen</a>.[1]</p><h2 id="statements-on-the-red-sea-clash" tabindex="-1">Statements on the Red Sea clash <a class="header-anchor" href="#statements-on-the-red-sea-clash" aria-label="Permalink to &quot;Statements on the Red Sea clash&quot;">​</a></h2><p>Speaking on the Yemeni television channel Al-Masirah after the December 31, 2023 <a href="/concepts/maersk-container-ship-attack">Maersk container ship attack</a> and the U.S. helicopter response, Sarea confirmed that U.S. forces had killed ten Houthi fighters.[1] He stated: &quot;US enemy forces attacked three boats belonging to the Yemeni Naval Forces, which led to the martyrdom and the loss of ten people from the Naval Forces.&quot;[1]</p><p>Sarea framed the group&#39;s maritime campaign as legitimate, saying its fighters were &quot;performing their humanitarian and moral duty&quot; in deterring Israel-related commercial vessels from transiting the Red Sea &quot;in solidarity and support for the Palestinian people.&quot;[1] A Houthi spokesperson also warned of &quot;consequences and repercussions&quot; for the U.S. strike.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yahya-sarea.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yahyaSarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yahyaSarea as default
};
