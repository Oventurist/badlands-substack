import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Abraham Lincoln","description":"","frontmatter":{"title":"Abraham Lincoln","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["president","civil-war","elections","american-history"],"sources":["raw/always-fight-back.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/abraham-lincoln.md","filePath":"entities/abraham-lincoln.md","lastUpdated":null}');
const _sfc_main = { name: "entities/abraham-lincoln.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="abraham-lincoln" tabindex="-1">Abraham Lincoln <a class="header-anchor" href="#abraham-lincoln" aria-label="Permalink to &quot;Abraham Lincoln&quot;">​</a></h1><p>Abraham Lincoln was the sixteenth President of the United States. In the Badlands Media corpus he appears in the historical survey contained in <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a>, which uses the elections of 1860 and 1864 to argue that disputed and unprecedented elections are a recurring feature of American history.</p><p>The article states that the 1860 election &quot;tore the nation apart,&quot; with South Carolina voting to secede just weeks after Lincoln&#39;s victory, and emphasizes that Lincoln&#39;s name was eliminated from the ballot in ten Southern states, effectively denying him the opportunity to win their electoral votes. The author remarks that this &quot;sounds familiar,&quot; drawing an implicit parallel to twenty-first-century efforts to remove candidates from state ballots, and notes that the election was reported as unprecedented at the time.</p><p>The article further observes that the 1864 wartime election introduced mail-in ballots, and that many contemporaries argued the mail-in system was vulnerable to manipulation, allowing fraudulent votes to be cast and potentially altering the outcome — an early instance of the kind of election skepticism the essay defends as constitutionally protected under the <a href="/concepts/first-amendment">First Amendment</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/abraham-lincoln.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const abrahamLincoln = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  abrahamLincoln as default
};
