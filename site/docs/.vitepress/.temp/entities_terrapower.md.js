import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TerraPower","description":"","frontmatter":{"title":"TerraPower","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nuclear","bill-gates","energy","wyoming"],"sources":["raw/badlands-news-brief-68f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/terrapower.md","filePath":"entities/terrapower.md","lastUpdated":null}');
const _sfc_main = { name: "entities/terrapower.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="terrapower" tabindex="-1">TerraPower <a class="header-anchor" href="#terrapower" aria-label="Permalink to &quot;TerraPower&quot;">​</a></h1><p>TerraPower is the nuclear energy company associated with <a href="/entities/bill-gates">Bill Gates</a>, developing advanced reactor designs intended for commercial deployment in the United States.[1]</p><h2 id="reactor-designs-and-wyoming-project" tabindex="-1">Reactor designs and Wyoming project <a class="header-anchor" href="#reactor-designs-and-wyoming-project" aria-label="Permalink to &quot;Reactor designs and Wyoming project&quot;">​</a></h2><p>In a Reddit &quot;Ask Me Anything&quot; session reported on January 17, 2023, Gates said TerraPower had two reactor designs, both using liquid sodium as the coolant and uranium as the fuel — a response to a question about molten salt thorium reactors.[1] He said the company was making &quot;excellent progress&quot; although the war in Ukraine had delayed its uranium fuel supply, and that the first reactor was being built in Wyoming and should be running by 2030.[1] Gates argued the project would make &quot;a huge contribution to climate challenges since it will be low cost and super safe.&quot;[1]</p><h2 id="criticism" tabindex="-1">Criticism <a class="header-anchor" href="#criticism" aria-label="Permalink to &quot;Criticism&quot;">​</a></h2><p><a href="/entities/jordan-sather">Jordan Sather</a> argued that Gates promoted nuclear technology and plant-based meat substitutes because of his large investments in both &quot;green&quot; initiatives, and that nuclear power remains a centralized energy source requiring a meter and a grid — &quot;exactly what the Powers that Be would want.&quot;[1] He contended that its promoters never advocate decentralized zero-point energy technologies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Bidens, UFOs and Vaccines&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-68f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-68f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/terrapower.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terrapower = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  terrapower as default
};
