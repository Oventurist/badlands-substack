import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Narrative Warfare","description":"","frontmatter":{"title":"Narrative Warfare","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["information-war","badlands-media","narrative","media"],"sources":["raw/badlands-blitz-episode-12.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/narrative-warfare.md","filePath":"concepts/narrative-warfare.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/narrative-warfare.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="narrative-warfare" tabindex="-1">Narrative Warfare <a class="header-anchor" href="#narrative-warfare" aria-label="Permalink to &quot;Narrative Warfare&quot;">​</a></h1><p><strong>Narrative Warfare</strong> is one of the core analytical frames used by <a href="/entities/badlands-media">Badlands Media</a> commentators, referring to conflict waged through competing stories and information operations rather than — or alongside — kinetic force.[1] It was named as one of three central subjects of the twelfth episode of <a href="/concepts/the-blitz">The Blitz</a>, &quot;The Fake and Gay, but Also Real and Serious War,&quot; published 28 March 2026.[1]</p><h2 id="treatment-in-the-blitz-episode-12" tabindex="-1">Treatment in The Blitz Episode 12 <a class="header-anchor" href="#treatment-in-the-blitz-episode-12" aria-label="Permalink to &quot;Treatment in The Blitz Episode 12&quot;">​</a></h2><p>In that episode, hosts <a href="/entities/burning-bright">Burning Bright</a> and <a href="/entities/ashe-in-america">Ashe in America</a> used the contradictory public accounts of the Iranian Ayatollah — characterised in the episode&#39;s framing as &quot;fake and gay, but also real and possibly not gay,&quot; and, per <a href="/entities/donald-trump">Donald Trump</a>, &quot;actually probably gay, according to what he&#39;s been told&quot; — as a case study.[1] The episode&#39;s premise is that a story can be simultaneously a manufactured psychological operation and a real, serious event with real consequences, and that distinguishing the layers is the practical work of narrative warfare analysis.[1]</p><p>The hosts presented the discussion as a corrective for a world, and specifically a <a href="/concepts/truth-community">Truth Community</a>, that they argue has &quot;quite forgotten&quot; narrative warfare along with <a href="/concepts/sovereign-disentanglement">sovereign disentanglement</a> and <a href="/concepts/first-principles">first principles</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Blitz Episode 12&quot;, URL: <a href="https://badlands.substack.com/p/badlands-blitz-episode-12" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-blitz-episode-12</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/narrative-warfare.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const narrativeWarfare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  narrativeWarfare as default
};
