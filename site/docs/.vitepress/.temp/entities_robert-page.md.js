import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Page (Orange County Registrar of Voters)","description":"","frontmatter":{"title":"Robert Page (Orange County Registrar of Voters)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","california","voter-rolls","doj","hava"],"sources":["raw/badlands-news-brief-899.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-page.md","filePath":"entities/robert-page.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-page.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-page" tabindex="-1">Robert Page <a class="header-anchor" href="#robert-page" aria-label="Permalink to &quot;Robert Page&quot;">​</a></h1><p>Robert Page is the Registrar of Voters for Orange County, California, and the named defendant in a June 2025 federal lawsuit brought by the <a href="/entities/department-of-justice">Justice Department</a>.[1]</p><h2 id="doj-lawsuit" tabindex="-1">DOJ lawsuit <a class="header-anchor" href="#doj-lawsuit" aria-label="Permalink to &quot;DOJ lawsuit&quot;">​</a></h2><p>The Justice Department sued Page, accusing him of refusing to provide records relating to the removal of non-citizens from the county&#39;s voter registration rolls and of failing to maintain an accurate voter list as required under the <a href="/concepts/help-america-vote-act">Help America Vote Act</a> (HAVA).[1]</p><p>Assistant Attorney General <a href="/entities/harmeet-dhillon">Harmeet K. Dhillon</a> of the Civil Rights Division said the case addresses violations of well-established federal election law, stating that &quot;voting by non-citizens is a federal crime, and states and counties that refuse to disclose all requested voter information are in violation of well-established federal elections laws.&quot;[1] Dhillon added that removing non-citizens from the rolls is critical to ensuring California elections are conducted without fraudulent voting, and that the Department would hold non-compliant jurisdictions accountable.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Daddy Issues &amp; Damage Assessments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-899" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-899</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertPage as default
};
