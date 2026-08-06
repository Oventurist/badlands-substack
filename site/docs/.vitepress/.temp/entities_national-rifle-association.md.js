import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Rifle Association","description":"","frontmatter":{"title":"National Rifle Association","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["gun-rights","trump","endorsement","second-amendment"],"sources":["raw/badlands-news-brief-09d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-rifle-association.md","filePath":"entities/national-rifle-association.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-rifle-association.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-rifle-association" tabindex="-1">National Rifle Association <a class="header-anchor" href="#national-rifle-association" aria-label="Permalink to &quot;National Rifle Association&quot;">​</a></h1><p>The National Rifle Association (NRA) is the American gun-rights organization that endorsed <a href="/entities/donald-trump">Donald Trump</a> at its annual meeting in Texas in May 2024.[1]</p><p>Trump followed the endorsement with a speech to thousands of NRA members stoking fears that the government under <a href="/entities/joe-biden">Joe Biden</a> was &quot;coming for your guns,&quot; alongside a monologue set to dramatic music that The Daily Beast described as resembling a song favored by <a href="/concepts/qanon">QAnon</a> adherents.[1] In the address Trump hailed the reversal of <em>Roe v. Wade</em> as an &quot;amazing thing,&quot; compared himself to Al Capone, and insisted that &quot;genius&quot; runs in his bloodline.[1]</p><p>As the speech wound down, sentimental instrumental music began to play and Trump delivered a grim message that America is &quot;a failing nation&quot;: &quot;Now we are a nation in decline. We are a failing nation. We are a nation that has the highest inflation in 58 years, where banks are collapsing, and interest rates are skyrocketing.&quot;[1]</p><p>Badlands contributor <a href="/entities/burning-bright">Burning Bright</a> focused on one aside from the NRA speech — &quot;You know there is a genius to what I&#39;m doing. You do know that? I go from here to there, and it all comes back into a beautiful picture.&quot; — treating it as direct acknowledgement that Trump&#39;s public speaking style is highly intentional.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Iranian Crashes, Israeli Maneuvers &amp; Trumpian Rhetoric&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-rifle-association.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalRifleAssociation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalRifleAssociation as default
};
