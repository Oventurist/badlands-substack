import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Comcast","description":"","frontmatter":{"title":"Comcast","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","corporations","msnbc","cable-television"],"sources":["raw/badlands-news-brief-1f2.md"],"confidence":"high"},"headers":[],"relativePath":"entities/comcast.md","filePath":"entities/comcast.md","lastUpdated":null}');
const _sfc_main = { name: "entities/comcast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="comcast" tabindex="-1">Comcast <a class="header-anchor" href="#comcast" aria-label="Permalink to &quot;Comcast&quot;">​</a></h1><p>Comcast is the American telecommunications and media conglomerate that owns <a href="/entities/nbcuniversal">NBCUniversal</a>.[1]</p><h2 id="_2024-cable-spinoff" tabindex="-1">2024 cable spinoff <a class="header-anchor" href="#_2024-cable-spinoff" aria-label="Permalink to &quot;2024 cable spinoff&quot;">​</a></h2><p>In November 2024, Comcast announced that it would move forward with plans to spin off its NBCUniversal cable television networks, including <a href="/entities/msnbc">MSNBC</a>, CNBC, USA, Oxygen, E!, Syfy and the Golf Channel. Together the assets generated roughly $7 billion in revenue in the twelve months ended September 30, according to the Wall Street Journal.[1]</p><p>The company retained Bravo, the Peacock streaming service and the NBC broadcast network, with executives betting that the remaining assets — broadcast television, sports, movies and theme parks — would be better positioned for growth.[1]</p><p>Commentary noted that the divestiture came as pharmaceutical advertising, a major source of cable ad revenue, faced a prospective crackdown associated with Robert F. Kennedy Jr.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Storm Shadows and the Contours of Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/comcast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const comcast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  comcast as default
};
