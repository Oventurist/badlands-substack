import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vandenberg Space Force Base","description":"","frontmatter":{"title":"Vandenberg Space Force Base","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-military","space-force","california","missile-testing"],"sources":["raw/badlands-news-brief-8bd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vandenberg-space-force-base.md","filePath":"entities/vandenberg-space-force-base.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vandenberg-space-force-base.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vandenberg-space-force-base" tabindex="-1">Vandenberg Space Force Base <a class="header-anchor" href="#vandenberg-space-force-base" aria-label="Permalink to &quot;Vandenberg Space Force Base&quot;">​</a></h1><p>Vandenberg Space Force Base is a United States military installation in California used for space launches and ballistic missile test launches.[1]</p><h2 id="role-in-the-november-2024-icbm-test" tabindex="-1">Role in the November 2024 ICBM test <a class="header-anchor" href="#role-in-the-november-2024-icbm-test" aria-label="Permalink to &quot;Role in the November 2024 ICBM test&quot;">​</a></h2><p>Vandenberg was the launch site for a scheduled test of an unarmed <a href="/concepts/minuteman-iii">Minuteman III</a> intercontinental ballistic missile in the hours after polls closed on Election Day, November 5, 2024. The launch window ran from 11:01 p.m. to 5:01 a.m. Pacific Time, and the missile was to travel about 4,200 miles from the base to Kwajalein Atoll in the North Pacific, a flight of roughly 22 minutes.[1]</p><p>Military officials described the exercise as routine and scheduled years in advance, intended to demonstrate the readiness of US nuclear forces and confidence in the nation&#39;s nuclear deterrence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: A New Golden Age Begins ...?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vandenberg-space-force-base.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vandenbergSpaceForceBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vandenbergSpaceForceBase as default
};
