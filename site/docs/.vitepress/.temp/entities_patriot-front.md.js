import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Patriot Front","description":"","frontmatter":{"title":"Patriot Front","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["extremism","domestic-terrorism","narrative","media"],"sources":["raw/badlands-news-brief-208.md"],"confidence":"low"},"headers":[],"relativePath":"entities/patriot-front.md","filePath":"entities/patriot-front.md","lastUpdated":null}');
const _sfc_main = { name: "entities/patriot-front.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="patriot-front" tabindex="-1">Patriot Front <a class="header-anchor" href="#patriot-front" aria-label="Permalink to &quot;Patriot Front&quot;">​</a></h1><p>Patriot Front is a nationalist group routinely cited in American media and government discourse as an example of right-wing domestic extremism.[1]</p><h2 id="invocation-in-the-2023-crackdown-debate" tabindex="-1">Invocation in the 2023 crackdown debate <a class="header-anchor" href="#invocation-in-the-2023-crackdown-debate" aria-label="Permalink to &quot;Invocation in the 2023 crackdown debate&quot;">​</a></h2><p>In July 2023, <a href="/entities/msnbc">MSNBC</a> commentator <a href="/entities/paul-rieckhoff">Paul Rieckhoff</a> named Patriot Front alongside the <a href="/entities/oath-keepers">Oath Keepers</a> when arguing that leaders, messages, messengers and programs were needed to draw Americans &quot;on the fence&quot; into community organizing and non-profit organizations and away from such groups.[1] He paired the call with a demand for a post-9/11 style government crackdown to win a &quot;battle for hearts and minds,&quot; language critics read as equating conservatives and Trump supporters with terrorists.[1]</p><p><a href="/entities/ashe-in-america">Ashe in America</a> characterized the framing as an anti-America First push for a new <a href="/concepts/patriot-act">Patriot Act</a> aimed at suppressing disfavored political speech.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Walls Are Closing in ... Or So We&#39;re Told&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-208" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-208</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/patriot-front.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const patriotFront = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  patriotFront as default
};
