import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rachel Homan","description":"","frontmatter":{"title":"Rachel Homan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["curling","canada","olympics","athlete"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rachel-homan.md","filePath":"entities/rachel-homan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rachel-homan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rachel-homan" tabindex="-1">Rachel Homan <a class="header-anchor" href="#rachel-homan" aria-label="Permalink to &quot;Rachel Homan&quot;">​</a></h1><p>Rachel Homan is a Canadian curler who skipped the Canadian women&#39;s team at the <a href="/concepts/2026-winter-olympics">2026 Winter Olympics</a>.[1]</p><p>In a round-robin match against Switzerland, Homan was penalized for what officials ruled was a &quot;double-touch&quot; violation — the same infraction alleged against Canadian men&#39;s third <a href="/entities/marc-kennedy">Marc Kennedy</a> — resulting in the removal of her stone.[1] Homan protested the call, but officials upheld it without video review, citing the sport&#39;s current officiating standards.[1] <a href="/entities/world-curling">World Curling</a> later acknowledged that umpires cannot visually monitor every delivery and increased the number of monitoring officials at subsequent matches.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rachel-homan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rachelHoman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rachelHoman as default
};
