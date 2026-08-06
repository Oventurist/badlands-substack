import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chelsea Manning","description":"","frontmatter":{"title":"Chelsea Manning","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wikileaks","leaks","military-intelligence","espionage-act"],"sources":["raw/badlands-news-brief-322.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/chelsea-manning.md","filePath":"entities/chelsea-manning.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chelsea-manning.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chelsea-manning" tabindex="-1">Chelsea Manning <a class="header-anchor" href="#chelsea-manning" aria-label="Permalink to &quot;Chelsea Manning&quot;">​</a></h1><p>Chelsea Manning is a former United States military intelligence analyst whose transfer of classified material to <a href="/entities/wikileaks">WikiLeaks</a> produced one of the largest publications of classified information in American history.[1]</p><h2 id="role-in-the-wikileaks-disclosures" tabindex="-1">Role in the WikiLeaks disclosures <a class="header-anchor" href="#role-in-the-wikileaks-disclosures" aria-label="Permalink to &quot;Role in the WikiLeaks disclosures&quot;">​</a></h2><p>According to the U.S. government&#39;s account, beginning in late 2009 <a href="/entities/julian-assange">Julian Assange</a> conspired with Manning to use the WikiLeaks website to disclose tens of thousands of activity reports about the war in Afghanistan, hundreds of thousands of reports about the war in Iraq, hundreds of thousands of <a href="/entities/state-department">State Department</a> cables, and assessment briefs of detainees held at the U.S. detention camp at Guantánamo Bay, Cuba.[1] The disclosures took place during President Barack Obama&#39;s first term and form the factual basis of the U.S. charges later brought against Assange.[1]</p><p>Those charges culminated in a June 2024 plea agreement under which Assange pleaded guilty to a single count of conspiracy to obtain and disclose national defense information and was released after five years in a British prison.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;We Have the Source ... And the Sauce&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-322" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-322</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chelsea-manning.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chelseaManning = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chelseaManning as default
};
