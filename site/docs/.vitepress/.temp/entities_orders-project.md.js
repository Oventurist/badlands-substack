import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Orders Project","description":"","frontmatter":{"title":"Orders Project","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military-justice","illegal-orders","boat-strikes","legal-aid"],"sources":["raw/badlands-news-brief-7e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/orders-project.md","filePath":"entities/orders-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/orders-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="orders-project" tabindex="-1">Orders Project <a class="header-anchor" href="#orders-project" aria-label="Permalink to &quot;Orders Project&quot;">​</a></h1><p>The Orders Project is an organization that provides free legal advice to military personnel concerned about the lawfulness of orders they may be asked to carry out. It is run by the National Institute of Military Justice, whose president is Frank Rosenblatt.[1]</p><h2 id="boat-strike-inquiries-late-2025" tabindex="-1">Boat strike inquiries (late 2025) <a class="header-anchor" href="#boat-strike-inquiries-late-2025" aria-label="Permalink to &quot;Boat strike inquiries (late 2025)&quot;">​</a></h2><p>In late 2025 the Orders Project recorded an uptick in calls amid growing apprehension among U.S. service members that they might be asked to execute an illegal order, following reports that Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> had ordered troops to &quot;kill everybody&quot; in a September 2025 boat strike and had authorized a follow-up strike.[1] The callers included staff officers involved in planning strikes on supposed drug-carrying boats and personnel responsible for designating those aboard the vessels as threats in order to justify the attacks.[1]</p><p>A reported classified Justice Department memo from the summer of 2025 preemptively argued that U.S. troops involved in the strikes would not be in legal jeopardy, yet service members appeared far more concerned than usual that the military was exposing them to legal harm.[1] Rosenblatt said the questions were novel: &quot;They have questions, because this didn&#39;t come up before. This was never an issue throughout both administrations of the global war on terror in Iraq or Afghanistan.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Corruption Within Corruption &amp; A Offer of Free Elections&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/orders-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ordersProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ordersProject as default
};
