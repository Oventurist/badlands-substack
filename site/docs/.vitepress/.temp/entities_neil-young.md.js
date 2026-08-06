import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Neil Young","description":"","frontmatter":{"title":"Neil Young","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["music","agriculture","celebrity-activism"],"sources":["raw/badlands-news-brief-69b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/neil-young.md","filePath":"entities/neil-young.md","lastUpdated":null}');
const _sfc_main = { name: "entities/neil-young.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="neil-young" tabindex="-1">Neil Young <a class="header-anchor" href="#neil-young" aria-label="Permalink to &quot;Neil Young&quot;">​</a></h1><p>Neil Young is a Canadian musician and a co-founder of the concert charity <a href="/entities/farm-aid">Farm Aid</a>, established in 1985 alongside <a href="/entities/willie-nelson">Willie Nelson</a>.[1]</p><h2 id="badlands-characterization" tabindex="-1">Badlands characterization <a class="header-anchor" href="#badlands-characterization" aria-label="Permalink to &quot;Badlands characterization&quot;">​</a></h2><p>Badlands Media pointedly noted Young&#39;s co-founding role — &quot;Farm Aid was also co-founded by Neil Young, by the way&quot; — and described him as &quot;an America-hating Canadian,&quot; part of a broader argument that celebrity agriculture philanthropy has flourished while American family farms have collapsed.[1] The passage also framed foreign purchases of U.S. farmland, &quot;whether it&#39;s the imperialist Chinese, creepy Canadians or anyone else outside our borders,&quot; as damaging to American farms, families, food, and industry.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Calls for Peace as the World Heads Toward War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-69b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-69b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/neil-young.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const neilYoung = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  neilYoung as default
};
