import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Free Speech For People","description":"","frontmatter":{"title":"Free Speech For People","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["advocacy-organization","litigation","lawfare","impeachment"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/free-speech-for-people.md","filePath":"entities/free-speech-for-people.md","lastUpdated":null}');
const _sfc_main = { name: "entities/free-speech-for-people.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="free-speech-for-people" tabindex="-1">Free Speech For People <a class="header-anchor" href="#free-speech-for-people" aria-label="Permalink to &quot;Free Speech For People&quot;">​</a></h1><p>Free Speech For People is a legal advocacy organization that served as counsel to the plaintiffs in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a> According to the essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a> by defendant <a href="/entities/ashe-in-america">Ashe in America</a>, the group launched a campaign to impeach President <a href="/entities/donald-trump">Donald Trump</a> on Inauguration Day, January 20, 2017, announcing the effort in a Washington Post article titled &quot;The Campaign to Impeach President Trump Has Begun.&quot;</p><p>The article cites that history as evidence that the Colorado suit was politically motivated rather than a genuine voter-protection action, and notes that plaintiffs were collectively represented by two law firms and at least six attorneys. Judge <a href="/entities/charlotte-sweeney">Charlotte Sweeney</a>&#39;s finding that a plaintiff witness adopted her identification of the <a href="/entities/useip">United States Election Integrity Plan</a> at the suggestion of plaintiffs&#39; counsel is characterized in the essay as a rebuke of the lawyers as well as the client organizations.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/free-speech-for-people.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const freeSpeechForPeople = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  freeSpeechForPeople as default
};
