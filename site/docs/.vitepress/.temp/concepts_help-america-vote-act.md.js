import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Help America Vote Act","description":"","frontmatter":{"title":"Help America Vote Act","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["legislation","election-administration","voting-technology","centralization"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/help-america-vote-act.md","filePath":"concepts/help-america-vote-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/help-america-vote-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="help-america-vote-act" tabindex="-1">Help America Vote Act <a class="header-anchor" href="#help-america-vote-act" aria-label="Permalink to &quot;Help America Vote Act&quot;">​</a></h1><p>The Help America Vote Act (HAVA) is federal legislation signed in 2002 to modernize United States election administration in the aftermath of the disputed 2000 presidential election between <a href="/entities/al-gore">Al Gore</a> and <a href="/entities/george-w-bush">George W. Bush</a>, which was resolved when the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> halted the Florida recount on equal-protection grounds.</p><p>The essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a> presents HAVA critically, arguing that it &quot;gave birth to the elections industry&quot; and that U.S. elections have since become &quot;increasingly centralized and dependent on private vendors with little meaningful oversight.&quot; The article further asserts that no presidential election since HAVA&#39;s passage has been held without allegations of irregularities, fraud, and corruption from one side of the aisle or the other — citing John Kerry&#39;s 2004 voter-access claims, ACORN&#39;s 2008 admission that only about 450,000 of 1.3 million voter registrations it submitted were legitimate, and the Pew Research Center&#39;s finding that nearly 20 million voters experienced at least one problem in the 2012 election.</p><p>This framing supports the essay&#39;s larger contention that questioning election administration is a normal and bipartisan feature of American politics rather than the intimidating conduct alleged in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a></p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/help-america-vote-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const helpAmericaVoteAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  helpAmericaVoteAct as default
};
