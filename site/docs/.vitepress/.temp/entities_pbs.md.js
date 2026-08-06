import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PBS","description":"","frontmatter":{"title":"PBS","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","public-broadcasting","defunding","congress"],"sources":["raw/badlands-brief-b74.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pbs.md","filePath":"entities/pbs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pbs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pbs" tabindex="-1">PBS <a class="header-anchor" href="#pbs" aria-label="Permalink to &quot;PBS&quot;">​</a></h1><p>PBS (the Public Broadcasting Service) is the American public television network whose federal funding became a target of <a href="/entities/donald-trump">President Trump</a> and congressional Republicans, culminating in cuts that forced programming cancellations in early 2026.[1]</p><h2 id="pbs-news-weekend-cancellation" tabindex="-1">PBS News Weekend cancellation <a class="header-anchor" href="#pbs-news-weekend-cancellation" aria-label="Permalink to &quot;PBS News Weekend cancellation&quot;">​</a></h2><p>PBS News Weekend, the weekend edition of PBS NewsHour that began in 2013, aired its final live broadcast on January 11, 2026, after twelve years on air.[1] Anchor <a href="/entities/john-yang">John Yang</a> announced during the episode that PBS had canceled the program &quot;at least for the foreseeable future&quot; due to the loss of federal funding for public media, and stated that he would depart the network at the end of January.[1]</p><p>Beginning the following weekend, PBS replaced the live weekend newscast with two pre-taped 30-minute single-topic programs produced during the week in order to reduce costs.[1]</p><h2 id="funding-context" tabindex="-1">Funding context <a class="header-anchor" href="#funding-context" aria-label="Permalink to &quot;Funding context&quot;">​</a></h2><p>The cancellation stemmed from a $1.1 billion cut in federal appropriations for the <a href="/entities/corporation-for-public-broadcasting">Corporation for Public Broadcasting</a> (CPB), enacted by the Republican-controlled <a href="/entities/congress">Congress</a> in 2025 in response to Trump&#39;s calls to defund PBS and <a href="/entities/npr">NPR</a> over allegations of liberal bias.[1] The CPB, which distributes federal funds to public broadcasters, has since begun steps toward closure.[1] Badlands framed the episode under the heading &quot;PBS Starts Cutting the Fat … And Nobody Noticed,&quot; noting the near-absence of public reaction to the end of a twelve-year national broadcast.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Epsteinian Stalling, Cartel Convergence &amp; Pirates of the Carib-Iran&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b74" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b74</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pbs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pbs as default
};
