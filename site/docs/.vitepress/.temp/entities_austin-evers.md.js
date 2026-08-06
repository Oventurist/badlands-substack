import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Austin Evers","description":"","frontmatter":{"title":"Austin Evers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["department-of-justice","political-appointee","mar-a-lago","trump-prosecutions"],"sources":["raw/badlands-news-brief-2b8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/austin-evers.md","filePath":"entities/austin-evers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/austin-evers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="austin-evers" tabindex="-1">Austin Evers <a class="header-anchor" href="#austin-evers" aria-label="Permalink to &quot;Austin Evers&quot;">​</a></h1><p>Austin Evers is a <a href="/entities/department-of-justice">Department of Justice</a> political appointee who became the subject of a January 2024 ethics complaint over his alleged involvement in matters relating to the investigation and prosecution of former President <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><h2 id="america-first-legal-complaint" tabindex="-1">America First Legal complaint <a class="header-anchor" href="#america-first-legal-complaint" aria-label="Permalink to &quot;America First Legal complaint&quot;">​</a></h2><p>On Thursday, January 18, 2024, the watchdog group <a href="/entities/america-first-legal">America First Legal</a> filed a complaint with the Department of Justice seeking a review of Evers&#39;s role in the 2022 <a href="/concepts/mar-a-lago-raid">Mar-a-Lago raid</a> that led to special counsel <a href="/entities/jack-smith">Jack Smith</a>&#39;s ongoing prosecution of Trump.[1]</p><p>In its letter to the DOJ Office of Professional Responsibility, America First Legal wrote that it appeared Evers &quot;was improperly involved in matters relating to the investigation and subsequent prosecution of former President Donald Trump,&quot; and asserted that documents the Department had disclosed to the group demonstrated that Evers &quot;was involved in discussions, briefings, and litigation concerning the Mar-a-Lago raid and may have been involved in discussions directly relevant to the eventual issuance of an indictment.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Congress Limps Along as the Nation Grits Its Teeth&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2b8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2b8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/austin-evers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const austinEvers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  austinEvers as default
};
