import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ohio Organizing Collaborative","description":"","frontmatter":{"title":"Ohio Organizing Collaborative","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nonprofit","voter-mobilization","ohio","federal-investigation"],"sources":["raw/badlands-brief-6b4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ohio-organizing-collaborative.md","filePath":"entities/ohio-organizing-collaborative.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ohio-organizing-collaborative.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ohio-organizing-collaborative" tabindex="-1">Ohio Organizing Collaborative <a class="header-anchor" href="#ohio-organizing-collaborative" aria-label="Permalink to &quot;Ohio Organizing Collaborative&quot;">​</a></h1><p>The Ohio Organizing Collaborative is a nonprofit organizing network that became the focal point of a federal probe into voter mobilization activity in 2026.[1]</p><h2 id="role-in-the-federal-probe" tabindex="-1">Role in the federal probe <a class="header-anchor" href="#role-in-the-federal-probe" aria-label="Permalink to &quot;Role in the federal probe&quot;">​</a></h2><p>Federal officials issued a subpoena to <a href="/entities/america-votes">America Votes</a> as part of a widening investigation tied to the Ohio Organizing Collaborative, according to sources familiar with the matter.[1] A former director and board member of the organization described the scope of the probe as extensive and wide-ranging.[1] Badlands linked the inquiry to the broader voting-rights network investigations running in parallel with the <a href="/concepts/skid-row-voter-fraud-investigation">Skid Row voter fraud investigation</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Deliberate Discombobulation Driving Transformational Change&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6b4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6b4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ohio-organizing-collaborative.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ohioOrganizingCollaborative = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ohioOrganizingCollaborative as default
};
