import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Betty Rosa","description":"","frontmatter":{"title":"Betty Rosa","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","new-york","regulator"],"sources":["raw/badlands-brief-414.md"],"confidence":"low"},"headers":[],"relativePath":"entities/betty-rosa.md","filePath":"entities/betty-rosa.md","lastUpdated":null}');
const _sfc_main = { name: "entities/betty-rosa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="betty-rosa" tabindex="-1">Betty Rosa <a class="header-anchor" href="#betty-rosa" aria-label="Permalink to &quot;Betty Rosa&quot;">​</a></h1><p>Betty Rosa is the New York State Education Commissioner.[1]</p><h2 id="role-in-the-salamanca-ai-robot-controversy" tabindex="-1">Role in the Salamanca AI robot controversy <a class="header-anchor" href="#role-in-the-salamanca-ai-robot-controversy" aria-label="Permalink to &quot;Role in the Salamanca AI robot controversy&quot;">​</a></h2><p>In July 2026 Rosa intervened in the controversy over the <a href="/entities/salamanca-city-central-school-district">Salamanca City Central School District</a>&#39;s plan to place an AI-powered humanoid robot from <a href="/entities/realbotix">Realbotix</a> in classrooms. She noted a discrepancy in the district&#39;s account: officials said the robot would not deliver instruction, but a board presentation described it as a &quot;tutoring platform.&quot;[1]</p><p>The pilot was subsequently paused, and remains on hold while the district works out enhanced data-privacy agreements with the state.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narcissistic Sociopathy &amp; Rebranded Sex Robots For Kids&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-414" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-414</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/betty-rosa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bettyRosa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bettyRosa as default
};
