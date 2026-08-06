import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Greg Brockman","description":"","frontmatter":{"title":"Greg Brockman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["openai","technology","litigation"],"sources":["raw/badlands-brief-95a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/greg-brockman.md","filePath":"entities/greg-brockman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/greg-brockman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="greg-brockman" tabindex="-1">Greg Brockman <a class="header-anchor" href="#greg-brockman" aria-label="Permalink to &quot;Greg Brockman&quot;">​</a></h1><p>Greg Brockman is the president of <a href="/entities/openai">OpenAI</a>. He was named in the relief sought by <a href="/entities/elon-musk">Elon Musk</a> in Musk&#39;s lawsuit against OpenAI and chief executive <a href="/entities/sam-altman">Sam Altman</a>: Musk asked for the removal of both Altman and Brockman, alongside as much as $134 billion in ill-gotten gains and a reversal of OpenAI&#39;s 2025 restructuring.[1]</p><p>A federal jury rejected Musk&#39;s claims in May 2026 after less than two hours of deliberation, and U.S. District Judge <a href="/entities/yvonne-gonzalez-rogers">Yvonne Gonzalez Rogers</a> adopted the advisory jury&#39;s finding that Altman and OpenAI were not liable, leaving the requested leadership changes unrealized.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Sorry for using state power to unlawfully punish your wrong think. Friends?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-95a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-95a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/greg-brockman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gregBrockman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gregBrockman as default
};
