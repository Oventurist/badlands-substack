import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Scientology","description":"","frontmatter":{"title":"Scientology","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["religion","cults","coercive-control"],"sources":["raw/badlands-brief-ac2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/scientology.md","filePath":"entities/scientology.md","lastUpdated":null}');
const _sfc_main = { name: "entities/scientology.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scientology" tabindex="-1">Scientology <a class="header-anchor" href="#scientology" aria-label="Permalink to &quot;Scientology&quot;">​</a></h1><p>Scientology is the organization that singer <a href="/entities/joy-villa">Joy Villa</a> targeted with her protest outfit at the <a href="/concepts/68th-annual-grammy-awards">68th Annual Grammy Awards</a> in February 2026, after leaving it following 15 years of membership.[1]</p><p>In an account published in <em>Evie</em> magazine, Villa described the organization as a cult that attributed all of her professional achievements to &quot;auditing, donations, and loyalty to the organization&quot; rather than to God, talent, or perseverance, turning her success into propaganda and her life into marketing.[1] She wrote that while her life inside Scientology looked like a success story from the outside, internally &quot;it was slowly destroying me,&quot; and argued that &quot;silence protects systems of abuse.&quot;[1] Villa framed her departure in terms of religious freedom, saying that no one should be interrogated for praying or punished for seeking a church, and founded The Fearless Joy Foundation to help survivors recover from cult abuse and coercive control.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;NeoCon Goggles &amp; Phantom Whistleblowers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-ac2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-ac2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/scientology.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scientology = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scientology as default
};
