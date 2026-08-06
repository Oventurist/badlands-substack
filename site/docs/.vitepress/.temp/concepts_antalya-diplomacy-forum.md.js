import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Antalya Diplomacy Forum","description":"","frontmatter":{"title":"Antalya Diplomacy Forum","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["diplomacy","turkey","middle-east","security-architecture"],"sources":["raw/badlands-brief-625.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/antalya-diplomacy-forum.md","filePath":"concepts/antalya-diplomacy-forum.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/antalya-diplomacy-forum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="antalya-diplomacy-forum" tabindex="-1">Antalya Diplomacy Forum <a class="header-anchor" href="#antalya-diplomacy-forum" aria-label="Permalink to &quot;Antalya Diplomacy Forum&quot;">​</a></h1><p>The Antalya Diplomacy Forum is a Turkish-hosted international conference that, in April 2026, served as the venue at which <a href="/entities/turkey">Turkey</a> hosted <a href="/entities/egypt">Egypt</a>, <a href="/entities/pakistan">Pakistan</a>, and <a href="/entities/saudi-arabia">Saudi Arabia</a> to discuss the <a href="/entities/iran">Iran</a> situation.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> identified those four states as the core of an emerging Middle Eastern &quot;security architecture,&quot; and predicted Iran would eventually join it.[1] In his framing, Egypt is the traditional regional military power, Pakistan is the sole Muslim nuclear-weapons state, Turkey is a NATO member with the largest army in the region, and Saudi Arabia is the lynchpin binding them together alongside the United States.[1]</p><p>He argued that this bloc — backed by Russia, China, and a Europe increasingly souring on <a href="/entities/israel">Israel</a> — represents the only force capable of halting the <a href="/entities/israel-defense-forces">IDF</a>&#39;s campaign toward <a href="/concepts/greater-israel">Greater Israel</a>, and that the conflict could prove the crucible forging the Middle East into a stable region with common interests.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/antalya-diplomacy-forum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const antalyaDiplomacyForum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  antalyaDiplomacyForum as default
};
