import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Restore Britain","description":"","frontmatter":{"title":"Restore Britain","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","immigration","politics","criminal-justice"],"sources":["raw/badlands-brief-52b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/restore-britain.md","filePath":"entities/restore-britain.md","lastUpdated":null}');
const _sfc_main = { name: "entities/restore-britain.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="restore-britain" tabindex="-1">Restore Britain <a class="header-anchor" href="#restore-britain" aria-label="Permalink to &quot;Restore Britain&quot;">​</a></h1><p>Restore Britain is a British political group that in March 2026 drew attention for circulating a hardline policy platform.[1]</p><h2 id="platform" tabindex="-1">Platform <a class="header-anchor" href="#platform" aria-label="Permalink to &quot;Platform&quot;">​</a></h2><p>The platform includes mass deportations of migrants, expanded law-and-order measures, and sweeping cultural policy changes.[1] Reported proposals include deporting large numbers of migrants, restricting practices deemed incompatible with British law, and pursuing significantly tougher criminal penalties, including extreme punitive measures such as executing pedophiles.[1] Some of the reported positions would face significant legal and constitutional barriers under UK law, including human rights protections.[1] The platform generated attention for pushing beyond traditionally accepted policy boundaries in British politics, particularly on immigration and criminal justice.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Golgotha &amp; The Metaverse&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-52b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-52b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/restore-britain.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const restoreBritain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  restoreBritain as default
};
