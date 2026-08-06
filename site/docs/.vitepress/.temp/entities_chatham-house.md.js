import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chatham House","description":"","frontmatter":{"title":"Chatham House","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["think-tank","united-kingdom","iran","color-revolution"],"sources":["raw/badlands-brief-d9f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/chatham-house.md","filePath":"entities/chatham-house.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chatham-house.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chatham-house" tabindex="-1">Chatham House <a class="header-anchor" href="#chatham-house" aria-label="Permalink to &quot;Chatham House&quot;">​</a></h1><p>Chatham House, the Royal Institute of International Affairs, is a British foreign-policy think tank frequently cited in legacy media analysis of international crises.[1]</p><h2 id="role-in-iran-protest-coverage" tabindex="-1">Role in Iran protest coverage <a class="header-anchor" href="#role-in-iran-protest-coverage" aria-label="Permalink to &quot;Role in Iran protest coverage&quot;">​</a></h2><p>Sanam Vakil, director of Chatham House&#39;s Middle East and North Africa program, was quoted by NBC News on the <a href="/concepts/2026-iran-protests">2026 Iran protests</a>, arguing that Iranians had united in the face of external bombardment without abandoning their grievances against the regime: &quot;Did [Iranians] coming together mean that they suddenly abandoned all of their contentious feelings towards the regime or its leadership? Absolutely not. They&#39;re not mutually exclusive feelings.&quot;[1] She added that Iranians remain united amid challenges &quot;from their governance system and their leadership that isn&#39;t willing to reform or change.&quot;[1]</p><p>Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> flagged Chatham House&#39;s prominence with suspicion, noting that the institution appeared in the Iranian &quot;color revolution&quot; article at the same time analyst Susan Kokinda was describing British imperial influence losing control in the face of <a href="/concepts/sovereign-alliance">Sovereign Alliance</a> moves — &quot;Hey! Chatham House is also cited in that Iranian color revolution article. Weird.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Dueling Color Revolutions, Economic Escalation, &amp; Superseding Somali Scams&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-d9f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-d9f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chatham-house.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chathamHouse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chathamHouse as default
};
