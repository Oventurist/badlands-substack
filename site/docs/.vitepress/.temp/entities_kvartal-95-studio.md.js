import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kvartal 95 Studio","description":"","frontmatter":{"title":"Kvartal 95 Studio","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","zelensky","media","mindich"],"sources":["raw/badlands-brief-6f4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kvartal-95-studio.md","filePath":"entities/kvartal-95-studio.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kvartal-95-studio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kvartal-95-studio" tabindex="-1">Kvartal 95 Studio <a class="header-anchor" href="#kvartal-95-studio" aria-label="Permalink to &quot;Kvartal 95 Studio&quot;">​</a></h1><p>Kvartal 95 Studio is a Ukrainian film and television production company founded by <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> in 2003.[1] The studio produced <em>Servant of the People</em>, the television series in which Zelensky starred as a high school history teacher who runs for president of Ukraine and wins — a role that preceded his real-world election to the presidency.[1]</p><p>Ukrainian businessman <a href="/entities/timur-mindich">Timur Mindich</a>, whose alleged ties to members of Ukraine&#39;s 2026 government reshuffle drew scrutiny, is a co-owner of the studio.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Illegal Psychological Warfare Campaigns &amp; Misprision of Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6f4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6f4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kvartal-95-studio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kvartal95Studio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kvartal95Studio as default
};
