import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Linda Sun","description":"","frontmatter":{"title":"Linda Sun","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york","china","foreign-agent","prosecution"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/linda-sun.md","filePath":"entities/linda-sun.md","lastUpdated":null}');
const _sfc_main = { name: "entities/linda-sun.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="linda-sun" tabindex="-1">Linda Sun <a class="header-anchor" href="#linda-sun" aria-label="Permalink to &quot;Linda Sun&quot;">​</a></h1><p>Linda Sun, 41, is a former New York state government official who was charged in September 2024 with acting as an illegal agent of the Chinese government.[1] She and her husband, Chris Hu, 40, were arrested on Tuesday, September 3, 2024, and both pleaded not guilty during an initial court appearance in Brooklyn that afternoon.[1]</p><p>Sun held numerous posts in New York state government, including deputy chief of staff to Governor <a href="/entities/kathy-hochul">Kathy Hochul</a>.[1] Federal prosecutors said she used those positions to further Beijing&#39;s agenda in exchange for compensation and gifts worth millions of dollars.[1]</p><p>In an interview on WNYC, Hochul said she was outraged and shocked by Sun&#39;s alleged behavior, stating that her office had fired Sun the previous year after discovering evidence of misconduct and had reported her actions to authorities immediately: &quot;I&#39;m furious, and I&#39;m outraged and absolutely shocked at how brazen her behavior was… It was a betrayal of trust—the trust of government, the trust of the people.&quot;[1] Former Governor <a href="/entities/andrew-cuomo">Andrew Cuomo</a>, in whose administration Sun had also served, likewise responded to the charges.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/linda-sun.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lindaSun = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lindaSun as default
};
