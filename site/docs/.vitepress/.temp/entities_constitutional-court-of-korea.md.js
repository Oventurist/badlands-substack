import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Constitutional Court of Korea","description":"","frontmatter":{"title":"Constitutional Court of Korea","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["south-korea","judiciary","impeachment"],"sources":["raw/badlands-news-brief-86f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/constitutional-court-of-korea.md","filePath":"entities/constitutional-court-of-korea.md","lastUpdated":null}');
const _sfc_main = { name: "entities/constitutional-court-of-korea.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="constitutional-court-of-korea" tabindex="-1">Constitutional Court of Korea <a class="header-anchor" href="#constitutional-court-of-korea" aria-label="Permalink to &quot;Constitutional Court of Korea&quot;">​</a></h1><p>The Constitutional Court of Korea is South Korea&#39;s highest constitutional tribunal and the body that decides whether a presidential impeachment passed by the <a href="/entities/national-assembly-of-south-korea">National Assembly</a> is upheld.[1]</p><p>After the National Assembly voted 204–85 on Saturday, December 14, 2024 to impeach President <a href="/entities/yoon-suk-yeol">Yoon Suk Yeol</a> over his short-lived <a href="/concepts/2024-south-korea-martial-law-declaration">martial law decree</a>, the case passed to the Constitutional Court.[1] Under the governing procedure the court has up to 180 days to determine whether to dismiss Yoon as president or restore his powers; if he is removed from office, a national election to choose his successor must be held within 60 days.[1] In the interim, Yoon&#39;s presidential powers and duties were suspended and Prime Minister <a href="/entities/han-duck-soo">Han Duck-soo</a> assumed presidential authority.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Media Apologies, Fake &amp; Gay Drones and Trump Appointments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-86f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-86f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/constitutional-court-of-korea.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const constitutionalCourtOfKorea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  constitutionalCourtOfKorea as default
};
