import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tom Cruise","description":"","frontmatter":{"title":"Tom Cruise","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","hollywood","actor","predictive-programming"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/tom-cruise.md","filePath":"entities/tom-cruise.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tom-cruise.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tom-cruise" tabindex="-1">Tom Cruise <a class="header-anchor" href="#tom-cruise" aria-label="Permalink to &quot;Tom Cruise&quot;">​</a></h1><p>Tom Cruise is an American film actor whose work the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a> treats as the connective tissue of the <a href="/entities/skydance-media">Skydance Media</a> catalogue. The article observes that Skydance produced <em>Top Gun: Maverick</em>, the <em>Mission Impossible</em> franchise and <em>Jack Reacher</em>, and asks what they have in common — answering: &quot;Tom Cruise.&quot; It adds that even before the Skydance–<a href="/entities/paramount-global">Paramount Global</a> merger closed, Paramount+ had for a couple of years seemed &quot;like a Tom Cruise streaming app.&quot;</p><p><a href="/entities/erik-carlson">Erik Carlson</a> singles out <em>Mission Impossible: Dead Reckoning</em>, released in the summer of 2023 roughly six months after ChatGPT&#39;s late-2022 launch, whose plot requires the team to save the world from a powerful <a href="/concepts/artificial-intelligence">AI</a> system that could be used to take over the world if it fell into the wrong hands. Because production must have begun well before AI became a popular talking point, Carlson reads the film as a warning — an instance of predictive programming — and asks whether Cruise is &quot;one of the good guys&quot; and whether a faction of Hollywood is trying to open the public&#39;s eyes to future events.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tom-cruise.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomCruise = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tomCruise as default
};
