import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pete Chambers","description":"","frontmatter":{"title":"Pete Chambers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["border","protest","veterans","convoy"],"sources":["raw/badlands-news-brief-06d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pete-chambers.md","filePath":"entities/pete-chambers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pete-chambers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pete-chambers" tabindex="-1">Pete Chambers <a class="header-anchor" href="#pete-chambers" aria-label="Permalink to &quot;Pete Chambers&quot;">​</a></h1><p>Dr. Pete Chambers is an American veteran and activist who served as one of the leaders and organizers of the January 2024 <a href="/concepts/take-our-border-back-convoy">&quot;Take Our Border Back&quot; convoy</a> to the southern border.[1] In a written appeal to participants, Chambers invoked the language of the Texas Revolution: &quot;Fellow citizens and compatriots ... I call on you in the name of liberty, of patriotism and everything dear to the American character to come to our aid with all dispatch. If this call is neglected, we are determined to sustain ourselves as long as possible and act like soldiers who never forget what is due to our own honor and that of our country.&quot;[1]</p><p>Chambers has described Americans as &quot;besieged on all sides&quot; by evil &quot;dark forces.&quot;[1] The convoy was widely branded in media coverage as the &quot;Army of God&quot;; <a href="/entities/ashe-in-america">Ashe in America</a> reported that this framing originated from Chambers mentioning in an interview that he had joined &quot;God&#39;s Army,&quot; combined with participants&#39; references to putting on the &quot;Armor of God,&quot; and that no one associated with the event actually called it the Army of God.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Devolution Proofs Abroad and White Pills in the Chaos&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-06d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-06d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pete-chambers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const peteChambers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  peteChambers as default
};
