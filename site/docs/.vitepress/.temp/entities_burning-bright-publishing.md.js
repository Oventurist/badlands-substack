import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Burning Bright Publishing","description":"","frontmatter":{"title":"Burning Bright Publishing","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["publishing","badlands-media","culture","fiction"],"sources":["raw/badlands-news-brief-721.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/burning-bright-publishing.md","filePath":"entities/burning-bright-publishing.md","lastUpdated":null}');
const _sfc_main = { name: "entities/burning-bright-publishing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="burning-bright-publishing" tabindex="-1">Burning Bright Publishing <a class="header-anchor" href="#burning-bright-publishing" aria-label="Permalink to &quot;Burning Bright Publishing&quot;">​</a></h1><p>Burning Bright Publishing is an independent American publishing house associated with the <a href="/entities/badlands-media">Badlands Media</a> orbit and with the host <a href="/entities/burning-bright">Burning Bright</a>.[1] Its stated premise is that &quot;politics is culture, and culture starts with stories,&quot; positioning fiction publishing as a front in what Badlands describes as the &quot;War of Stories.&quot;[1]</p><h2 id="saving-seoul-sword-punk-1" tabindex="-1">Saving Seoul: Sword Punk 1 <a class="header-anchor" href="#saving-seoul-sword-punk-1" aria-label="Permalink to &quot;Saving Seoul: Sword Punk 1&quot;">​</a></h2><p>The imprint&#39;s debut novel is <em>Saving Seoul</em>, a martial arts epic following Akio Prince, a fighter battling a crime syndicate in a near-future Far East.[1] It is the first book in the <em>Sword Punk Trilogy</em>.[1] The launch was funded through a Kickstarter campaign running through 31 August 2025, with backers offered a signed, leatherbound collector&#39;s edition.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Post Mortems, Dog Fights, &amp; Flight Risks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-721" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-721</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/burning-bright-publishing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const burningBrightPublishing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  burningBrightPublishing as default
};
