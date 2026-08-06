import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UN Watch","description":"","frontmatter":{"title":"UN Watch","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-nations","israel","ngo","watchdog","antisemitism"],"sources":["raw/badlands-news-brief-204.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/un-watch.md","filePath":"entities/un-watch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/un-watch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="un-watch" tabindex="-1">UN Watch <a class="header-anchor" href="#un-watch" aria-label="Permalink to &quot;UN Watch&quot;">​</a></h1><p>UN Watch is a Geneva-based non-governmental watchdog organization that monitors the conduct of the <a href="/entities/united-nations">United Nations</a>, particularly its treatment of <a href="/entities/israel">Israel</a>.[1]</p><h2 id="november-2023-criticism-of-un-resolutions" tabindex="-1">November 2023 criticism of UN resolutions <a class="header-anchor" href="#november-2023-criticism-of-un-resolutions" aria-label="Permalink to &quot;November 2023 criticism of UN resolutions&quot;">​</a></h2><p>In November 2023, UN Watch criticized the United Nations for passing multiple resolutions condemning Israel for alleged human rights violations while issuing no condemnation of <a href="/entities/hamas">Hamas</a> or other groups or nations, at a time when antisemitism was rising worldwide.[1]</p><p>Executive director Hillel Neuer said in a press release that &quot;the U.N.&#39;s assault on Israel with a torrent of one-sided resolutions, just one month after the largest massacre of Jews since the Holocaust, and on the 85th anniversary of Kristallnacht, is surreal.&quot;[1] Neuer added that &quot;the only purpose of these eight lopsided condemnations is to demonize the Jewish state,&quot; and that the world should not be deceived that the annual resolutions advance the cause of peace or human rights.[1]</p><p>The UN&#39;s Second Committee, which focuses on economic and financial issues, announced the passage of three such resolutions, including one demanding that Israel cease &quot;exploitation, damage, cause of loss or depletion and endangerment&quot; in the Golan Heights region of Syria.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Narrative Shielding &amp; Biden Bait&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-204" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-204</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/un-watch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unWatch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unWatch as default
};
