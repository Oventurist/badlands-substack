import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thunder Tiger","description":"","frontmatter":{"title":"Thunder Tiger","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["taiwan","drones","defense-industry","uav","ukraine"],"sources":["raw/badlands-news-brief-7d4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/thunder-tiger.md","filePath":"entities/thunder-tiger.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thunder-tiger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thunder-tiger" tabindex="-1">Thunder Tiger <a class="header-anchor" href="#thunder-tiger" aria-label="Permalink to &quot;Thunder Tiger&quot;">​</a></h1><p>Thunder Tiger is a Taichung-based Taiwanese firm involved in unmanned aerial vehicle (UAV) manufacturing.[1] In 2025 it was named as the technology and components supplier under a memorandum of understanding on UAV cooperation signed by Taiwanese, Ukrainian and Polish delegations.[1]</p><p>The agreement was announced at the International Defense Industry Exhibition (MSPO) in Kielce, Poland, and was signed by Taiwan Defense Industry Development Association President Tony Hsu, Polish-Taiwanese Chamber of Commerce founder Bartlomiej Dobosz, and Dmitry Dymyd, a representative of the Lviv Tech Cluster in Ukraine.[1] Under the arrangement Ukraine contributes research and development, Poland provides expertise, and Thunder Tiger supplies technology and components.[1]</p><p>Earlier in 2025 Thunder Tiger unveiled an FPV drone capable of carrying an 81mm mortar as well as a new naval kamikaze drone.[1] The partnership came amid heightened U.S.–China tensions in the South China Sea; Beijing considers all diplomatic ties with <a href="/entities/taiwan">Taiwan</a> a violation of its sovereignty and has opposed military aid to Taipei.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Funding Freezes, Russian Oil, &amp; Imminent Exposes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7d4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7d4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thunder-tiger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thunderTiger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thunderTiger as default
};
