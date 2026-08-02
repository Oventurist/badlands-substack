import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gangster Rap","description":"","frontmatter":{"title":"Gangster Rap","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["gangster-rap","hip-hop","cia","fbi","cultural-engineering"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/gangster-rap.md","filePath":"concepts/gangster-rap.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/gangster-rap.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gangster-rap" tabindex="-1">Gangster Rap <a class="header-anchor" href="#gangster-rap" aria-label="Permalink to &quot;Gangster Rap&quot;">​</a></h1><p>Gangster rap is the hip-hop subgenre that emerged in the late 1980s. The Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> presents its rise not as an organic artistic development but as an intelligence operation.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> dates the shift to about five years before the <a href="/entities/oj-simpson">O. J. Simpson</a> trial, describing &quot;a drastic change in rap music&quot; in which &quot;rappers rapping about positivity, unity and ending violence shifted to rapping about shooting cops and selling drugs. Gangster rap was born.&quot;</p><p>The article attributes the change to the <a href="/entities/fbi">FBI</a> and <a href="/entities/cia">CIA</a>, stating that the two agencies &quot;were now running record labels&quot; and that &quot;if you were a hip-hop artist and you weren&#39;t rapping about committing crimes and killing cops, there was no place in the rap genre for you.&quot; The purpose, per the source, was demographic and carceral: &quot;gangster rap was designed to influence young black men to pursue a life of crime,&quot; at a time when falling crime rates threatened the profitability of newly privatized prisons.</p><p>The claim forms one arm of a larger scheme the essay describes, alongside the <a href="/concepts/violent-crime-control-and-law-enforcement-act-of-1994">Crime Bill of 1994</a>, CIA drug importation into South Central Los Angeles, and <a href="/concepts/prison-privatization">prison privatization</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/gangster-rap.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gangsterRap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gangsterRap as default
};
