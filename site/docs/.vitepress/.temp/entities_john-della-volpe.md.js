import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Della Volpe","description":"","frontmatter":{"title":"John Della Volpe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["polling","harvard","youth-vote","elections"],"sources":["raw/badlands-news-brief-6bc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-della-volpe.md","filePath":"entities/john-della-volpe.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-della-volpe.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-della-volpe" tabindex="-1">John Della Volpe <a class="header-anchor" href="#john-della-volpe" aria-label="Permalink to &quot;John Della Volpe&quot;">​</a></h1><p>John Della Volpe is the polling director at the Harvard Kennedy Institute of Politics, known for his research on the political attitudes and turnout behavior of young American voters.[1]</p><h2 id="_2023-warning-on-youth-turnout" tabindex="-1">2023 warning on youth turnout <a class="header-anchor" href="#_2023-warning-on-youth-turnout" aria-label="Permalink to &quot;2023 warning on youth turnout&quot;">​</a></h2><p>In an analysis circulated in the summer of 2023, Della Volpe pointed to the difficulties the Democratic Party faced with voters between the ages of 18 and 29 heading into the 2024 cycle.[1] &quot;Nearly every sign that made me confident in historic levels of youth participation in 2018, 2020, and 2022 — is now flashing red,&quot; he wrote, adding that &quot;the ground is more fertile for voting when youth believe voting makes a tangible difference.&quot;[1]</p><p>His analysis was cited by <a href="/entities/the-hill">The Hill</a> as compounding party anxieties about the <a href="/concepts/democratic-party-decline-among-young-voters">decline of Democratic support among young voters</a>, a bloc that had been pivotal to President <a href="/entities/joe-biden">Joe Biden</a>&#39;s 2020 victory.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Smith Slips, China Encroaches &amp; Trump Preps&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6bc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6bc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-della-volpe.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnDellaVolpe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnDellaVolpe as default
};
