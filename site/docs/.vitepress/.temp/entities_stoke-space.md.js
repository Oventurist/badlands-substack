import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stoke Space","description":"","frontmatter":{"title":"Stoke Space","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["space","rockets","openai","venture-capital","aerospace"],"sources":["raw/badlands-news-brief-674.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stoke-space.md","filePath":"entities/stoke-space.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stoke-space.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stoke-space" tabindex="-1">Stoke Space <a class="header-anchor" href="#stoke-space" aria-label="Permalink to &quot;Stoke Space&quot;">​</a></h1><p>Stoke Space is an American rocket manufacturer developing reusable launch vehicles. In 2025 the company became the focus of reported acquisition and investment talks involving <a href="/entities/openai">OpenAI</a> chief executive <a href="/entities/sam-altman">Sam Altman</a>.[1]</p><h2 id="reported-openai-approach" tabindex="-1">Reported OpenAI approach <a class="header-anchor" href="#reported-openai-approach" aria-label="Permalink to &quot;Reported OpenAI approach&quot;">​</a></h2><p>According to reporting by the Wall Street Journal, Altman explored assembling funds either to acquire or to partner with a rocket company, a move that would have positioned him to compete against <a href="/entities/elon-musk">Elon Musk</a>&#39;s <a href="/entities/spacex">SpaceX</a>.[1] Altman reached out to at least one rocket maker — Stoke Space — during the summer of 2025, and the discussions intensified in the fall.[1]</p><p>Among the proposals under consideration was a series of equity investments by OpenAI in Stoke Space that would ultimately leave OpenAI with a controlling stake, an arrangement that would have totaled billions of dollars over time.[1] People close to OpenAI subsequently said the talks were no longer active.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>The reported approach came as Altman and OpenAI faced market headwinds after striking hundreds of billions of dollars in computing deals without publicly explaining how the company would finance the build-out.[1] OpenAI declared an internal &quot;code red&quot; in early December 2025 aimed at improving ChatGPT after it began losing market share to Google&#39;s Gemini chatbot.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Exiles in Qatar &amp; Assets of Fear&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-674" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-674</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stoke-space.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stokeSpace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stokeSpace as default
};
