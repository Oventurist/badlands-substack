import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Restrict Act","description":"","frontmatter":{"title":"Restrict Act","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["legislation","free-speech","censorship","surveillance"],"sources":["raw/badlands-news-brief-070.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/restrict-act.md","filePath":"concepts/restrict-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/restrict-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="restrict-act" tabindex="-1">Restrict Act <a class="header-anchor" href="#restrict-act" aria-label="Permalink to &quot;Restrict Act&quot;">​</a></h1><p>The Restrict Act is proposed U.S. legislation that critics in the alternative media characterized as a domestic vehicle for the same speech and device controls being enacted abroad.[1]</p><h2 id="criticism" tabindex="-1">Criticism <a class="header-anchor" href="#criticism" aria-label="Permalink to &quot;Criticism&quot;">​</a></h2><p>In April 2023 commentary comparing the bill to <a href="/entities/ireland">Ireland</a>&#39;s hate speech legislation, <a href="/entities/ryan-delarme">Ryan DeLarme</a> argued that although America is popularly regarded as a beacon of free speech, the Restrict Act would allow &quot;exactly&quot; the sort of criminalization being adopted in Ireland.[1] The core objection was structural rather than textual: because the wording is so vague, the act would give the government discretion to define its own terms after the fact.[1]</p><p>DeLarme placed the Restrict Act in a lineage with the <a href="/concepts/patriot-act">Patriot Act</a>, describing it as following the same totalitarian lines and noting the irony that the earlier law has been used to &quot;legally&quot; target patriots.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sudan Spirals, Epstein Entraps &amp; Banks Bail&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-070" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-070</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/restrict-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const restrictAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  restrictAct as default
};
