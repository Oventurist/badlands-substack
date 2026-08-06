import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Scott Adams","description":"","frontmatter":{"title":"Scott Adams","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cartoonist","commentator","media","persuasion"],"sources":["raw/badlands-news-brief-11b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/scott-adams.md","filePath":"entities/scott-adams.md","lastUpdated":null}');
const _sfc_main = { name: "entities/scott-adams.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scott-adams" tabindex="-1">Scott Adams <a class="header-anchor" href="#scott-adams" aria-label="Permalink to &quot;Scott Adams&quot;">​</a></h1><p>Scott Adams is the creator of the Dilbert comic strip and a commentator known for his predictions about American political and social outcomes. In late 2023 he became a peripheral figure in coverage of the killing of Philadelphia journalist <a href="/entities/josh-kruger">Josh Kruger</a>.[1]</p><h2 id="kruger-episode" tabindex="-1">Kruger episode <a class="header-anchor" href="#kruger-episode" aria-label="Permalink to &quot;Kruger episode&quot;">​</a></h2><p>Kruger, a left-wing journalist who frequently mocked conservatives on X, had sarcastically referred to Adams as &quot;Nostradamus&quot; days before his death, mocking Adams&#39;s prediction that people would be dead &quot;within the year&quot; of <a href="/entities/joe-biden">Joe Biden</a>&#39;s election.[1] After Kruger was shot dead in his Philadelphia home in the early hours of October 2, 2023, Adams responded to reports of the killing by claiming he had an alibi — a quip that circulated widely alongside victory laps taken by right-leaning influencers.[1]</p><p><a href="/entities/badlands-media">Badlands Media</a> commentary on the episode, by <a href="/entities/ashe-in-america">Ashe in America</a>, did not begrudge the reaction but argued the focus belonged on the underlying problem of rising urban crime rather than on the irony of the moment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Congressional Chaos, Acceleration &amp; Escalation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/scott-adams.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scottAdams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scottAdams as default
};
