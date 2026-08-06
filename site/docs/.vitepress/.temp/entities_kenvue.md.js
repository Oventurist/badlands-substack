import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kenvue","description":"","frontmatter":{"title":"Kenvue","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["corporations","mergers","pharmaceuticals","tylenol"],"sources":["raw/badlands-news-brief-448.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kenvue.md","filePath":"entities/kenvue.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kenvue.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kenvue" tabindex="-1">Kenvue <a class="header-anchor" href="#kenvue" aria-label="Permalink to &quot;Kenvue&quot;">​</a></h1><p>Kenvue is an American consumer health company, best known as the manufacturer of the pain reliever Tylenol.[1]</p><h2 id="_2025-acquisition-by-kimberly-clark" tabindex="-1">2025 acquisition by Kimberly-Clark <a class="header-anchor" href="#_2025-acquisition-by-kimberly-clark" aria-label="Permalink to &quot;2025 acquisition by Kimberly-Clark&quot;">​</a></h2><p>In November 2025, <a href="/entities/kimberly-clark">Kimberly-Clark</a> announced plans to acquire Kenvue in a cash-and-stock deal valued at roughly $48.7 billion, reported in the press as a $40 billion merger. Kenvue&#39;s shares rose approximately 20 percent on the announcement, while Kimberly-Clark&#39;s fell about 14.5 percent in late-afternoon trading — a decline that would have been the acquirer&#39;s worst single session since October 16, 1987.[1]</p><p>Analyst reaction to the combination was mixed, with some forecasting short-term pressure on the acquirer&#39;s stock and others describing the merger as &quot;strategically transformative.&quot;[1]</p><p>Badlands commentary treated the deal as an instance of large-scale corporate consolidation preceding a debt-driven collapse of overextended firms, a pattern described as the &quot;Too Small to Fail&quot; thesis.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Victim Cards, Foreign Inference, &amp; Chessboard Stans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-448" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-448</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kenvue.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kenvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kenvue as default
};
