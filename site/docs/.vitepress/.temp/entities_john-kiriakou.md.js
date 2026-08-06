import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Kiriakou","description":"","frontmatter":{"title":"John Kiriakou","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cia","whistleblower","media","iran"],"sources":["raw/badlands-brief-095.md"],"confidence":"low"},"headers":[],"relativePath":"entities/john-kiriakou.md","filePath":"entities/john-kiriakou.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-kiriakou.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-kiriakou" tabindex="-1">John Kiriakou <a class="header-anchor" href="#john-kiriakou" aria-label="Permalink to &quot;John Kiriakou&quot;">​</a></h1><p>John Kiriakou is a former officer of the <a href="/entities/cia">Central Intelligence Agency</a> who, by 2026, appeared as a commentator on international broadcast programs including RT.[1]</p><p>On an RT program aired March 15, 2026, Kiriakou said he was &quot;genuinely worried&quot; about the safety of journalist <a href="/entities/tucker-carlson">Tucker Carlson</a>.[1] His concern followed Carlson&#39;s claim that the CIA might pursue a criminal referral under the <a href="/concepts/foreign-agents-registration-act">Foreign Agents Registration Act</a> relating to communications with individuals in <a href="/entities/iran">Iran</a> before the outbreak of the war.[1] Badlands coverage presented Kiriakou&#39;s warning as corroboration, from someone with agency experience, that the pressure on Carlson was more than rhetorical.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Moves and Countermoves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-kiriakou.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnKiriakou = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnKiriakou as default
};
