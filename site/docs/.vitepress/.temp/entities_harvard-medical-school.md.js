import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harvard Medical School","description":"","frontmatter":{"title":"Harvard Medical School","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["harvard","medicine","morgue","scandal"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/harvard-medical-school.md","filePath":"entities/harvard-medical-school.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harvard-medical-school.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harvard-medical-school" tabindex="-1">Harvard Medical School <a class="header-anchor" href="#harvard-medical-school" aria-label="Permalink to &quot;Harvard Medical School&quot;">​</a></h1><p>Harvard Medical School is the medical faculty of <a href="/entities/harvard-university">Harvard University</a>. Its morgue became the center of a federal criminal case involving the theft and sale of donated human remains.[1]</p><p><a href="/entities/cedric-lodge">Cedric Lodge</a>, the manager of the Harvard Medical School morgue, pleaded guilty in May 2025 to interstate transport of human remains after a five-year scheme in which he stole and sold heads, brains, skins, bones, and other remains, according to a federal indictment obtained by People.[1] The indictment described payments totaling $37,355.16 sent via PayPal to Lodge&#39;s wife by a Pennsylvania buyer, with memos including &quot;head number 7&quot; and &quot;braiiiiiiins.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harvard-medical-school.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harvardMedicalSchool = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harvardMedicalSchool as default
};
