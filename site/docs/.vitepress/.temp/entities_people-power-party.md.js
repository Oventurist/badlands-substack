import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"People Power Party","description":"","frontmatter":{"title":"People Power Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["south-korea","political-party","conservative","yoon-suk-yeol"],"sources":["raw/badlands-news-brief-2f5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/people-power-party.md","filePath":"entities/people-power-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/people-power-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="people-power-party" tabindex="-1">People Power Party <a class="header-anchor" href="#people-power-party" aria-label="Permalink to &quot;People Power Party&quot;">​</a></h1><p>The People Power Party is the conservative governing party of <a href="/entities/south-korea">South Korea</a> and the party of President <a href="/entities/yoon-suk-yeol">Yoon Suk Yeol</a>.[1]</p><h2 id="reaction-to-the-martial-law-declaration" tabindex="-1">Reaction to the martial law declaration <a class="header-anchor" href="#reaction-to-the-martial-law-declaration" aria-label="Permalink to &quot;Reaction to the martial law declaration&quot;">​</a></h2><p>Yoon&#39;s surprise imposition of martial law on December 3, 2024 blindsided the nation, his own People Power Party, and global allies including the United States.[1] The declaration — see the <a href="/concepts/2024-south-korea-martial-law-declaration">2024 South Korea martial law declaration</a> — triggered an outpouring of anger not only from the public but from Yoon&#39;s own party, contributing to widespread calls for his resignation even after he rescinded the decree hours later.[1] A bipartisan parliamentary vote, which by definition included members of the governing party, rejected military rule and forced the withdrawal of troops.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Korea Joins the Shenanigans as Drama Gives Way to Comedy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/people-power-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const peoplePowerParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  peoplePowerParty as default
};
