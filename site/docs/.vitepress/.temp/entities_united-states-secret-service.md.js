import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Secret Service","description":"","frontmatter":{"title":"United States Secret Service","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["agency","security","oversight","protective-detail"],"sources":["raw/a-week-to-remember.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/united-states-secret-service.md","filePath":"entities/united-states-secret-service.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-secret-service.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-secret-service" tabindex="-1">United States Secret Service <a class="header-anchor" href="#united-states-secret-service" aria-label="Permalink to &quot;United States Secret Service&quot;">​</a></h1><p>The United States Secret Service is the federal agency responsible for the protection of the president, former presidents, and major presidential candidates, in addition to its financial-crimes mandate. It came under intense scrutiny after the July 13, 2024 assassination attempt on <a href="/entities/donald-trump">Donald Trump</a> at a rally in Butler, Pennsylvania.</p><h2 id="aftermath-of-the-butler-attempt" tabindex="-1">Aftermath of the Butler attempt <a class="header-anchor" href="#aftermath-of-the-butler-attempt" aria-label="Permalink to &quot;Aftermath of the Butler attempt&quot;">​</a></h2><p>The Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> describes the institutional fallout in the days after the shooting. Its director, <a href="/entities/kimberly-cheatle">Kimberly Cheatle</a>, appeared before the <a href="/entities/house-committee-on-oversight-and-accountability">Committee on Oversight and Accountability</a> roughly ten days after the attempt, and resigned the following day.</p><p>The article draws particular attention to Cheatle&#39;s remark during that hearing that Representative <a href="/entities/sheila-jackson-lee">Sheila Jackson Lee</a>, who had died days earlier, &quot;was engaged in oversight of the Secret Service.&quot; <a href="/entities/erik-carlson">Erik Carlson</a> uses this detail to raise questions about the relationship between the agency&#39;s congressional oversight, the failure at Butler, and the rapid sequence of deaths and resignations that followed. The essay does not otherwise examine the Secret Service&#39;s operational conduct on the day of the rally.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-secret-service.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesSecretService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesSecretService as default
};
