import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brent Bozell","description":"","frontmatter":{"title":"Brent Bozell","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media-criticism","conservative-movement","watchdog-groups"],"sources":["raw/badlands-news-brief-79c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brent-bozell.md","filePath":"entities/brent-bozell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brent-bozell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brent-bozell" tabindex="-1">Brent Bozell <a class="header-anchor" href="#brent-bozell" aria-label="Permalink to &quot;Brent Bozell&quot;">​</a></h1><p>Brent Bozell is the founder and president of the <a href="/entities/media-research-center">Media Research Center</a>, a conservative watchdog organization.[1]</p><p>In May 2023 Bozell publicized MRC findings, obtained through Freedom of Information Act requests, that a <a href="/entities/department-of-homeland-security">Department of Homeland Security</a> counterterrorism grant program was funding a university program that had grouped the Republican Party together with Christian and conservative organizations in the same category as Nazis.[1] Bozell said, &quot;This terrorism task force is engaged in an active effort to demonize and eliminate Christian, conservative, and Republican organizations using federal taxpayer dollars,&quot; and argued that &quot;what we have uncovered calls for criminal prosecution,&quot; adding that the American people needed to know that officials abusing their federal positions would be held accountable.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Target Tumbles, Trump Tops &amp; Feds Fabricate&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-79c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-79c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brent-bozell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brentBozell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brentBozell as default
};
