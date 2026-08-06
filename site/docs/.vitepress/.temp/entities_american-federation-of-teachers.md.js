import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Federation of Teachers","description":"","frontmatter":{"title":"American Federation of Teachers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["labor","unions","education","immigration","minnesota"],"sources":["raw/badlands-brief-a20.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/american-federation-of-teachers.md","filePath":"entities/american-federation-of-teachers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-federation-of-teachers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-federation-of-teachers" tabindex="-1">American Federation of Teachers <a class="header-anchor" href="#american-federation-of-teachers" aria-label="Permalink to &quot;American Federation of Teachers&quot;">​</a></h1><p>The American Federation of Teachers (AFT) is a national American labor union representing teachers and other education and public-sector employees.[1]</p><h2 id="minnesota-general-strike-endorsement-january-2026" tabindex="-1">Minnesota general strike endorsement (January 2026) <a class="header-anchor" href="#minnesota-general-strike-endorsement-january-2026" aria-label="Permalink to &quot;Minnesota general strike endorsement (January 2026)&quot;">​</a></h2><p>Local and regional AFT affiliates were among the labor organizations — alongside the <a href="/entities/afl-cio">AFL-CIO</a> and <a href="/entities/seiu">SEIU</a> — that publicly endorsed the &quot;ICE Out of Minnesota: Day of Truth and Freedom&quot; statewide economic blackout and general strike called for January 23, 2026 by a coalition of faith leaders and community groups protesting <a href="/concepts/operation-metro-surge">Operation Metro Surge</a>.[1] The action called for no work except emergency services, no school and no shopping, and its organizers demanded <a href="/entities/immigration-and-customs-enforcement">ICE</a> withdrawal from Minnesota, officer punishment over the death of Renée Good, no additional ICE funding, and policies further severing state ties with ICE.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Prosecutions for Democracy &amp; Double-Hatted Peace Panelists&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a20" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a20</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-federation-of-teachers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanFederationOfTeachers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanFederationOfTeachers as default
};
