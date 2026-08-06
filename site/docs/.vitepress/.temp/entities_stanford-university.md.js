import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stanford University","description":"","frontmatter":{"title":"Stanford University","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["censorship","academia","elections","disinformation"],"sources":["raw/badlands-brief-a1a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stanford-university.md","filePath":"entities/stanford-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stanford-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stanford-university" tabindex="-1">Stanford University <a class="header-anchor" href="#stanford-university" aria-label="Permalink to &quot;Stanford University&quot;">​</a></h1><p>Stanford University is a private American research university that a <a href="/entities/house-judiciary-committee">House Judiciary Committee</a> interim staff report identified as a participant in coordinated censorship activity spanning domestic and foreign programs.[1]</p><h2 id="allegations-in-the-house-judiciary-report" tabindex="-1">Allegations in the House Judiciary report <a class="header-anchor" href="#allegations-in-the-house-judiciary-report" aria-label="Permalink to &quot;Allegations in the House Judiciary report&quot;">​</a></h2><p>The committee&#39;s report on Brazil&#39;s censorship regime stated that the Brazilian network coordinates with similar foreign censorship regimes and with Stanford University.[1] It alleged that Stanford previously played a central role in &quot;laundering US government censorship requests&quot; to social media companies in an effort to influence the 2020 US election, serving as an intermediary layer between federal officials and platform trust-and-safety teams.[1]</p><p>According to the committee, the university&#39;s involvement has since shifted in character: rather than enabling domestic censorship, it is alleged to have moved toward aiding foreign censorship efforts, including those associated with Brazilian Supreme Court Justice <a href="/entities/alexandre-de-moraes">Alexandre de Moraes</a>.[1] The committee framed that migration as part of a broader pattern in which pressure on American speech is routed through non-US institutions and courts, raising <a href="/concepts/first-amendment">First Amendment</a> concerns that domestic legal limits alone may not address.[1]</p><p>The committee said it would continue oversight of these relationships and pursue legislative responses to counter foreign censorship threats.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;American Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a1a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a1a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stanford-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stanfordUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stanfordUniversity as default
};
