import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CLAP Food Import Program","description":"","frontmatter":{"title":"CLAP Food Import Program","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["venezuela","corruption","food-aid","bribery"],"sources":["raw/badlands-brief-95a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/clap-food-import-program.md","filePath":"concepts/clap-food-import-program.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/clap-food-import-program.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="clap-food-import-program" tabindex="-1">CLAP Food Import Program <a class="header-anchor" href="#clap-food-import-program" aria-label="Permalink to &quot;CLAP Food Import Program&quot;">​</a></h1><p>The CLAP program is Venezuela&#39;s subsidized food import and distribution scheme, operated under the government of <a href="/entities/nicolas-maduro">Nicolás Maduro</a>. It became the focus of a U.S. federal bribery investigation centered on <a href="/entities/alex-saab">Alex Saab</a>.[1]</p><p>Federal prosecutors have investigated Saab&#39;s alleged role in a bribery scheme connected to the CLAP program, identifying him as &quot;Co-Conspirator 1&quot; in a Miami-based case involving allegations that shell companies were used to secure inflated food contracts through bribery.[1] The CLAP allegations formed part of the broader body of U.S. criminal exposure cited when Venezuela deported Saab to the United States in May 2026.[1]</p><p>Badlands commentary situates the CLAP case within a larger dispute over Venezuelan energy and government corruption, alongside the <a href="/entities/pdvsa">PDVSA</a> indictments of the mid-2010s, arguing that the prosecutions cut in more than one direction politically.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Sorry for using state power to unlawfully punish your wrong think. Friends?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-95a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-95a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/clap-food-import-program.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clapFoodImportProgram = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  clapFoodImportProgram as default
};
