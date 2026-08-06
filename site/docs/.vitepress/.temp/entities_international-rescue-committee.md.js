import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Rescue Committee (IRC)","description":"","frontmatter":{"title":"International Rescue Committee (IRC)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","humanitarian","ebola","drc","public-health"],"sources":["raw/badlands-brief-2c5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/international-rescue-committee.md","filePath":"entities/international-rescue-committee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/international-rescue-committee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-rescue-committee-irc" tabindex="-1">International Rescue Committee (IRC) <a class="header-anchor" href="#international-rescue-committee-irc" aria-label="Permalink to &quot;International Rescue Committee (IRC)&quot;">​</a></h1><p>The International Rescue Committee (IRC) is an international humanitarian aid organization active in the <a href="/entities/democratic-republic-of-the-congo">Democratic Republic of the Congo</a>.[1]</p><p>During the <a href="/concepts/2026-ebola-outbreak">2026 Ebola outbreak</a> of the Bundibugyo strain, the IRC warned that &quot;the warning signs are flashing red,&quot; stating that the epidemic was outpacing responders.[1] The organization called for relaxing import restrictions on personal protective equipment and for rapid funding to support health workers and safe burial teams.[1]</p><p>Badlands commentary, in particular from <a href="/entities/ashe-in-america">Ashe in America</a>, treated the IRC&#39;s warnings alongside those of the <a href="/entities/world-health-organization">WHO</a> as part of a pattern of public-health fearmongering.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bioweapons Sneak Into the News Cycle as Israeli Shenanigans Ensue&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2c5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2c5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/international-rescue-committee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalRescueCommittee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internationalRescueCommittee as default
};
