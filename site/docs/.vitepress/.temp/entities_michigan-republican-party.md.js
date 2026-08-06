import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michigan Republican Party","description":"","frontmatter":{"title":"Michigan Republican Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["michigan","republican-party","elections","litigation"],"sources":["raw/badlands-news-brief-8fd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michigan-republican-party.md","filePath":"entities/michigan-republican-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michigan-republican-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michigan-republican-party" tabindex="-1">Michigan Republican Party <a class="header-anchor" href="#michigan-republican-party" aria-label="Permalink to &quot;Michigan Republican Party&quot;">​</a></h1><p>The <strong>Michigan Republican Party</strong> is the state affiliate of the national Republican Party in Michigan.[1]</p><h2 id="absentee-ballot-litigation" tabindex="-1">Absentee ballot litigation <a class="header-anchor" href="#absentee-ballot-litigation" aria-label="Permalink to &quot;Absentee ballot litigation&quot;">​</a></h2><p>In December 2025 the party was a plaintiff, alongside the <a href="/entities/republican-national-committee">Republican National Committee</a> and Chesterfield Township Clerk <a href="/entities/cindy-berry">Cindy Berry</a>, in a successful lawsuit over Michigan&#39;s treatment of absentee ballots with mismatched identification numbers.[1] The plaintiffs argued that ballots whose stub number did not match the return envelope number must be rejected, though voters should be given a chance to fix the problem, and the court agreed — holding that election inspectors may count absentee ballots only when the numbers match.[1] The decision rejected the position of Secretary of State <a href="/entities/jocelyn-benson">Jocelyn Benson</a> and Director of Elections <a href="/entities/jonathan-brater">Jonathan Brater</a> that such ballots could be tabulated as &quot;challenged ballots&quot; under decades-old guidance.[1] The case is documented at <a href="/concepts/michigan-absentee-ballot-id-match-ruling">the Michigan absentee ballot ID match ruling</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manic Midterms, Menopausal Marxists, &amp; Musical Pipe Bombs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michigan-republican-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michiganRepublicanParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michiganRepublicanParty as default
};
