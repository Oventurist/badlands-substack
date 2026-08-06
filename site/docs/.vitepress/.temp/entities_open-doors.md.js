import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Open Doors","description":"","frontmatter":{"title":"Open Doors","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","christian-persecution","drc","monitoring"],"sources":["raw/badlands-news-brief-457.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/open-doors.md","filePath":"entities/open-doors.md","lastUpdated":null}');
const _sfc_main = { name: "entities/open-doors.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="open-doors" tabindex="-1">Open Doors <a class="header-anchor" href="#open-doors" aria-label="Permalink to &quot;Open Doors&quot;">​</a></h1><p><strong>Open Doors</strong> is an organization that monitors terrorism and the persecution of Christians worldwide.[1]</p><h2 id="reporting-on-the-lubero-massacre" tabindex="-1">Reporting on the Lubero massacre <a class="header-anchor" href="#reporting-on-the-lubero-massacre" aria-label="Permalink to &quot;Reporting on the Lubero massacre&quot;">​</a></h2><p>Open Doors was the source for reporting that seventy Christians were beheaded with machetes by Islamist militants in the <a href="/entities/democratic-republic-of-the-congo">Democratic Republic of the Congo</a> on 13 February 2025.[1] According to the organization, the attackers were members of the <a href="/entities/allied-democratic-forces">Allied Democratic Forces</a>, an affiliate of <a href="/entities/isis">the Islamic State</a>, who rounded up victims from the Lubero district and executed them inside a Protestant church in Kasanga.[1]</p><p>The organization&#39;s account included witness testimony that the rebels shouted &quot;Get out, get out&quot; as they drove Christians from their homes, and that many fled the region afterward.[1] Local figures reported that churches, schools, and health centres had already closed because of the deteriorating security situation, and that families could not retrieve or bury their dead for days.[1]</p><p>Badlands commentary observed that despite the scale of the atrocity, it drew almost no international media attention beyond a Newsweek report.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Climbing Confidence, a Congolese Crisis, &amp; Uncorroborated KGB Claims&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-457" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-457</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/open-doors.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const openDoors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  openDoors as default
};
