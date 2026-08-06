import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Aaron Rodgers","description":"","frontmatter":{"title":"Aaron Rodgers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nfl","2024-election","vice-presidential-speculation"],"sources":["raw/badlands-news-brief-054.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/aaron-rodgers.md","filePath":"entities/aaron-rodgers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/aaron-rodgers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aaron-rodgers" tabindex="-1">Aaron Rodgers <a class="header-anchor" href="#aaron-rodgers" aria-label="Permalink to &quot;Aaron Rodgers&quot;">​</a></h1><p>Aaron Rodgers is an NFL quarterback, described in coverage as outspoken, who in early 2024 was considered by <a href="/entities/robert-f-kennedy-jr">Robert F. Kennedy Jr.</a> as a possible running mate for Kennedy&#39;s independent presidential campaign.[1]</p><h2 id="vice-presidential-consideration" tabindex="-1">Vice-presidential consideration <a class="header-anchor" href="#vice-presidential-consideration" aria-label="Permalink to &quot;Vice-presidential consideration&quot;">​</a></h2><p>Reporting in March 2024 indicated that Rodgers was out of the running for the vice-presidential slot, with a source close to the campaign saying the prospect of his selection had prompted concerns among donors — some of whom had reportedly threatened to abandon the campaign over the pick.[1] Kennedy was instead expected to name attorney and entrepreneur <a href="/entities/nicole-shanahan">Nicole Shanahan</a>, whose potential to help finance the campaign&#39;s ballot access initiative was cited as a key factor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fani Hunts Alone as Putin Keeps the Throne&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-054" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-054</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/aaron-rodgers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aaronRodgers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aaronRodgers as default
};
