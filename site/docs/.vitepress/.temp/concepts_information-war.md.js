import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Information War (Info War)","description":"","frontmatter":{"title":"Information War (Info War)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["info-war","narrative-warfare","badlands-media","truth-community"],"sources":["raw/badlands-media-weekly-show-schedule-36d.md"],"confidence":"high"},"headers":[],"relativePath":"concepts/information-war.md","filePath":"concepts/information-war.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/information-war.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The Information War (often shortened to &quot;Info War&quot;) is a recurring framing within <a href="/entities/badlands-media">badlands-media</a> for the struggle over narratives and public perception between alternative and mainstream sources.[1] The network&#39;s Trash Talk show (Tuesday &amp; Thursday, 8am ET), hosted by Patrick Gunnels and J.B. White, ranges across &quot;the Information War&quot; alongside pop culture and entertainment.[1] The NCSWIC Podcast (Sunday, 7:30pm ET) takes &quot;a deep dive into new Info War topics every week.&quot;[1] Badlands Media positions its overall mission as helping &quot;our collective of citizen journalists take back the narrative from the MSM,&quot; i.e., winning the information war.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Weekly Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/information-war.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const informationWar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  informationWar as default
};
