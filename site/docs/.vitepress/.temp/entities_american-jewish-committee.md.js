import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Jewish Committee","description":"","frontmatter":{"title":"American Jewish Committee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["advocacy","washington-dc","gaza","foreign-policy"],"sources":["raw/badlands-news-brief-362.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/american-jewish-committee.md","filePath":"entities/american-jewish-committee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-jewish-committee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-jewish-committee" tabindex="-1">American Jewish Committee <a class="header-anchor" href="#american-jewish-committee" aria-label="Permalink to &quot;American Jewish Committee&quot;">​</a></h1><p>The American Jewish Committee (AJC) is a Jewish advocacy organization that hosted the event underway at the <a href="/entities/capital-jewish-museum">Capital Jewish Museum</a> in Washington, D.C. on the night of May 21, 2025, when two Israeli embassy staff members were shot and killed outside.[1]</p><p>The AJC event was described as a gathering for young Jewish professionals who work in foreign policy, and included a panel discussion focused on finding humanitarian solutions for Gaza.[1] The two victims were shot &quot;at close range&quot; as they were leaving the event; a 30-year-old Chicago man, <a href="/entities/elias-rodriguez">Elias Rodriguez</a>, was taken into custody.[1]</p><p>Badlands commentary by <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> flagged the AJC panel&#39;s Gaza humanitarian focus as one of the details that made the incident feel to him like a possible false flag operation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Based Oklahoma, An African Ambush, &amp; An Allegedly Big Beautiful Bill&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-362" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-362</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-jewish-committee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanJewishCommittee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanJewishCommittee as default
};
