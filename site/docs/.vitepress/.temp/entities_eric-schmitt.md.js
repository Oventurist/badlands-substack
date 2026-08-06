import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eric Schmitt","description":"","frontmatter":{"title":"Eric Schmitt","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["senate","republican-party","missouri","legislation"],"sources":["raw/badlands-brief-144.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/eric-schmitt.md","filePath":"entities/eric-schmitt.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eric-schmitt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eric-schmitt" tabindex="-1">Eric Schmitt <a class="header-anchor" href="#eric-schmitt" aria-label="Permalink to &quot;Eric Schmitt&quot;">​</a></h1><p>Eric Schmitt is a Republican United States Senator from Missouri.[1]</p><h2 id="scam-act" tabindex="-1">SCAM Act <a class="header-anchor" href="#scam-act" aria-label="Permalink to &quot;SCAM Act&quot;">​</a></h2><p>In January 2026 Schmitt introduced the White House-backed Stop Citizenship Abuse and Misrepresentation Act, known as the <a href="/concepts/scam-act">SCAM Act</a>, in direct response to the Minnesota Somali welfare fraud scandal.[1] The bill would expand denaturalization powers by creating a 10-year post-naturalization window — potentially reducible to five — to revoke citizenship for acts such as defrauding the government of $10,000 or more, aggravated felonies, espionage, or terrorist affiliations, retroactively disqualifying an applicant&#39;s &quot;good moral character.&quot;[1] Deputy Chief of Staff <a href="/entities/stephen-miller">Stephen Miller</a> praised the bill and vowed immediate denaturalization and deportation for immigrants involved in the fraud.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;MLKKK Day, Peace Boards and Power Paradigms&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-144" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-144</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eric-schmitt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ericSchmitt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ericSchmitt as default
};
