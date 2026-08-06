import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Sentry","description":"","frontmatter":{"title":"The Sentry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","drc","corruption","minerals","advocacy"],"sources":["raw/badlands-news-brief-03a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-sentry.md","filePath":"entities/the-sentry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-sentry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-sentry" tabindex="-1">The Sentry <a class="header-anchor" href="#the-sentry" aria-label="Permalink to &quot;The Sentry&quot;">​</a></h1><p>The Sentry is a Washington-based non-profit founded in 2016 by George Clooney and other Hollywood figures, focused on corruption and illicit finance in Africa.[1]</p><h2 id="_2025-congressional-testimony-on-the-drc" tabindex="-1">2025 congressional testimony on the DRC <a class="header-anchor" href="#_2025-congressional-testimony-on-the-drc" aria-label="Permalink to &quot;2025 congressional testimony on the DRC&quot;">​</a></h2><p>At a March 2025 subcommittee hearing convened by the <a href="/entities/house-foreign-affairs-committee">House Foreign Affairs Committee</a>, Sentry policy adviser Sasha Lezhnev urged Washington to counter what he described as China&#39;s exploitation of corruption in the <a href="/entities/democratic-republic-of-the-congo">Democratic Republic of the Congo</a>.[1] &quot;The biggest obstacle to eliminating mining abuses is the system of kleptocracy in the DRC,&quot; Lezhnev said, adding that &quot;the system of state capture allows ruling elites and their commercial partners to personally profit while leaving the population to suffer.&quot;[1] He called on the United States to take steps to stop China&#39;s &quot;illicit exploitation&quot; in the country.[1]</p><p>The testimony came as the Trump administration was considering a minerals deal with the DRC intended to counter Chinese dominance of critical minerals supply chains.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-03a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-03a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-sentry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theSentry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theSentry as default
};
