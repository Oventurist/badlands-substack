import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Muriel Bowser","description":"","frontmatter":{"title":"Muriel Bowser","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["washington-dc","january-6","mayors"],"sources":["raw/badlands-news-brief-120.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/muriel-bowser.md","filePath":"entities/muriel-bowser.md","lastUpdated":null}');
const _sfc_main = { name: "entities/muriel-bowser.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="muriel-bowser" tabindex="-1">Muriel Bowser <a class="header-anchor" href="#muriel-bowser" aria-label="Permalink to &quot;Muriel Bowser&quot;">​</a></h1><p>Muriel Bowser is the Mayor of Washington, D.C., and a key figure in the question of National Guard authorization surrounding the events of January 6, 2021.[1] Because the District of Columbia&#39;s Guard is not under a governor&#39;s command, requests for its deployment in the capital involved coordination between the mayor&#39;s office, the White House, and the Department of Defense.[1]</p><h2 id="january-6-2021" tabindex="-1">January 6, 2021 <a class="header-anchor" href="#january-6-2021" aria-label="Permalink to &quot;January 6, 2021&quot;">​</a></h2><p>Deputy Chief of Staff <a href="/entities/anthony-ornato">Anthony Ornato</a> testified to the <a href="/concepts/january-6-committee">January 6 Committee</a> in a January 28, 2022 transcribed interview that he overheard White House Chief of Staff <a href="/entities/mark-meadows">Mark Meadows</a> push Bowser to request as many National Guard troops as she needed to protect the city.[1] President <a href="/entities/donald-trump">Donald Trump</a> had suggested that 10,000 troops would be needed to keep the peace at the rallies and protests scheduled for that day.[1] The transcript recording this exchange was withheld from public release by the committee until 2024.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;J6 Returns to Headlines as Fear Mars AI and Airplanes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-120" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-120</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/muriel-bowser.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const murielBowser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  murielBowser as default
};
