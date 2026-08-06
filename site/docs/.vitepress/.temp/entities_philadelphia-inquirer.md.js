import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Philadelphia Inquirer","description":"","frontmatter":{"title":"The Philadelphia Inquirer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","newspaper","journalism"],"sources":["raw/badlands-news-brief-254.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/philadelphia-inquirer.md","filePath":"entities/philadelphia-inquirer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/philadelphia-inquirer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-philadelphia-inquirer" tabindex="-1">The Philadelphia Inquirer <a class="header-anchor" href="#the-philadelphia-inquirer" aria-label="Permalink to &quot;The Philadelphia Inquirer&quot;">​</a></h1><p>The Philadelphia Inquirer is the principal daily newspaper of Philadelphia, Pennsylvania, and a source of local investigative reporting cited in <a href="/concepts/badlands-news-brief">Badlands News Brief</a> coverage.[1]</p><h2 id="reporting-on-the-josh-kruger-killing" tabindex="-1">Reporting on the Josh Kruger killing <a class="header-anchor" href="#reporting-on-the-josh-kruger-killing" aria-label="Permalink to &quot;Reporting on the Josh Kruger killing&quot;">​</a></h2><p>In October 2023 the Inquirer reported on the killing of local journalist <a href="/entities/josh-kruger">Josh Kruger</a>, including interviews with the family of the accused, <a href="/entities/robert-davis">Robert Davis</a>.[1] The paper&#39;s reporting carried the family&#39;s assertions that Davis and Kruger had been in a years-long relationship involving drugs beginning when Davis was 15, and that Davis said Kruger had threatened to post sexually explicit videos of him online.[1] The Inquirer also reported the details of the shooting itself and the investigative trail — surveillance video and family tips — that led detectives to name Davis as a suspect.[1]</p><p>The paper&#39;s coverage was the basis on which the story, initially framed nationally as the murder of a journalist, acquired significantly more complicated dimensions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Emotional Programming, Congressional Paralysis &amp; Censorship Reign&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-254" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-254</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/philadelphia-inquirer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const philadelphiaInquirer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  philadelphiaInquirer as default
};
