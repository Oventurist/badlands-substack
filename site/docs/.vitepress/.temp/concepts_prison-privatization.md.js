import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Prison Privatization","description":"","frontmatter":{"title":"Prison Privatization","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["prison-privatization","mass-incarceration","clinton","profit-motive"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/prison-privatization.md","filePath":"concepts/prison-privatization.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/prison-privatization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="prison-privatization" tabindex="-1">Prison Privatization <a class="header-anchor" href="#prison-privatization" aria-label="Permalink to &quot;Prison Privatization&quot;">​</a></h1><p>Prison privatization — the transfer of prison operations to private companies operating for profit — is presented in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as the economic engine behind a cluster of 1980s and 1990s events that the article regards as coordinated.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> dates the shift to the presidency of <a href="/entities/bill-clinton">Bill Clinton</a>, writing that &quot;under President Bill Clinton, the prison system was becoming privatized,&quot; which &quot;meant that private companies would start to run America&#39;s prison system for a profit.&quot; The difficulty he identifies is that crime was simultaneously declining, so that &quot;the people who benefitted from prisons being full needed the trend to change course.&quot;</p><p>From this premise the article derives a chain of interventions: the <a href="/concepts/violent-crime-control-and-law-enforcement-act-of-1994">Crime Bill of 1994</a>, which lengthened sentences for non-violent drug offenders; the promotion of <a href="/concepts/gangster-rap">gangster rap</a> by the <a href="/entities/fbi">FBI</a> and <a href="/entities/cia">CIA</a> to encourage criminality among young black men; and CIA importation of drugs from South and Central America into South Central Los Angeles, giving dealers such as <a href="/entities/rick-ross">Rick Ross</a> product to sell and prosecutors offences to charge. &quot;The drug trade in turn filled the US private prisons,&quot; the source concludes, with kickbacks flowing to the politicians who passed the enabling legislation.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/prison-privatization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prisonPrivatization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prisonPrivatization as default
};
