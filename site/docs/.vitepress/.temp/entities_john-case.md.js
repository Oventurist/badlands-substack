import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Case","description":"","frontmatter":{"title":"John Case","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","attorneys","tina-peters","clemency"],"sources":["raw/badlands-brief-174.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-case.md","filePath":"entities/john-case.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-case.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-case" tabindex="-1">John Case <a class="header-anchor" href="#john-case" aria-label="Permalink to &quot;John Case&quot;">​</a></h1><p>John Case is the attorney representing former Mesa County Clerk <a href="/entities/tina-peters">Tina Peters</a> in her appeals and clemency efforts in Colorado.[1]</p><h2 id="march-2026-statement" tabindex="-1">March 2026 statement <a class="header-anchor" href="#march-2026-statement" aria-label="Permalink to &quot;March 2026 statement&quot;">​</a></h2><p>On Wednesday, March 4, 2026, Case shared a statement with <a href="/entities/badlands-media">Badlands Media</a>&#39;s Ashe Epp responding to Governor <a href="/entities/jared-polis">Jared Polis</a>&#39; public signal that he was considering clemency.[1] The statement said Peters was grateful to Polis for considering her request and quoted the governor&#39;s own line that &quot;Justice in Colorado and America needs to be applied evenly.&quot;[1]</p><p>Case contrasted Peters&#39; imprisonment with the treatment of another public official convicted of the same offense who paid a fine and performed 150 hours of public service — &quot;less than one month of work.&quot;[1] He named Secretary of State <a href="/entities/jena-griswold">Jena Griswold</a>, Attorney General <a href="/entities/phil-weiser">Phil Weiser</a>, and <a href="/entities/dominion-voting-systems">Dominion Voting Systems</a>-aligned election official Matt Crane as &quot;Tina&#39;s political enemies&quot; who had released statements demanding Polis show no mercy, adding that &quot;it will take great courage for Governor Polis to grant Tina clemency, and Tina thanks him.&quot;[1]</p><p>When pressed on whether a clemency application had actually been submitted, a member of the legal team responded only, &quot;There is no missing paperwork.&quot;[1] <a href="/entities/ashe-in-america">Ashe in America</a> noted that this phrasing might reflect the team&#39;s theory that a presidential pardon alone is sufficient to secure Peters&#39; release, and that they had never explicitly stated an application was filed with Polis.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Conflicts, Cartels, &amp; Clemency&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-174" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-174</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-case.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnCase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnCase as default
};
