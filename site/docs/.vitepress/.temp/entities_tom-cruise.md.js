import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tom Cruise","description":"","frontmatter":{"title":"Tom Cruise","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hollywood","film","actors","skydance"],"sources":["raw/a-new-hollywood.md"],"confidence":"low"},"headers":[],"relativePath":"entities/tom-cruise.md","filePath":"entities/tom-cruise.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tom-cruise.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tom-cruise" tabindex="-1">Tom Cruise <a class="header-anchor" href="#tom-cruise" aria-label="Permalink to &quot;Tom Cruise&quot;">​</a></h1><p>Tom Cruise is the American film star whose work anchors much of the <a href="/entities/skydance-media">Skydance Media</a> and <a href="/entities/paramount-global">Paramount</a> catalog.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> In &quot;A New Hollywood,&quot; <a href="/entities/erik-carlson">Erik Carlson</a> observes that Skydance&#39;s productions — <em>Top Gun: Maverick</em>, the <em>Mission Impossible</em> franchise and <em>Jack Reacher</em> — share Cruise as their common theme, and that Paramount+ in recent years &quot;almost seems like a Tom Cruise streaming app.&quot;<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><p>Carlson asks directly whether Cruise &quot;is one of the good guys,&quot; and whether there is a faction of <a href="/entities/hollywood">Hollywood</a> trying to warn the public of possible dangers and open its eyes to future events.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> He points to <em>Mission Impossible: Dead Reckoning</em>, released in summer 2023, whose villain is a powerful AI system, as a film that must have been in production well before AI became a popular talking point.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> He also recalls that the original <em>Top Gun</em>, released in 1986 under President <a href="/entities/ronald-reagan">Ronald Reagan</a>, was the biggest military recruiting tool ever created.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New Hollywood&quot;, URL: <a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-hollywood</a></li></ol></div>`);
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
