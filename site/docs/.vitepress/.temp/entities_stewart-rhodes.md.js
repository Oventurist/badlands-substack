import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stewart Rhodes","description":"","frontmatter":{"title":"Stewart Rhodes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["january-6","oath-keepers","seditious-conspiracy"],"sources":["raw/badlands-brief-ea5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stewart-rhodes.md","filePath":"entities/stewart-rhodes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stewart-rhodes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stewart-rhodes" tabindex="-1">Stewart Rhodes <a class="header-anchor" href="#stewart-rhodes" aria-label="Permalink to &quot;Stewart Rhodes&quot;">​</a></h1><p>Stewart Rhodes is the founder of the <a href="/entities/oath-keepers">Oath Keepers</a>, convicted of seditious conspiracy in connection with the January 6, 2021 Capitol riot.[1]</p><h2 id="legal-status" tabindex="-1">Legal status <a class="header-anchor" href="#legal-status" aria-label="Permalink to &quot;Legal status&quot;">​</a></h2><p>Rhodes was not pardoned in the earlier round of January 6 clemency issued in 2026, leaving his conviction intact while many other defendants were released.[1] In April 2026 the <a href="/entities/justice-department">Justice Department</a> asked the US Court of Appeals for the District of Columbia Circuit to vacate the seditious conspiracy convictions against Oath Keepers and <a href="/entities/proud-boys">Proud Boys</a> leaders, including Rhodes, and to allow prosecutors to permanently drop the indictments.[1] The motion was signed by US Attorney <a href="/entities/jeanine-pirro">Jeanine Pirro</a>, who framed dismissal as being in the interest of justice.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Criminal Referrals &amp; Big, Fat Hugs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-ea5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-ea5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stewart-rhodes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stewartRhodes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stewartRhodes as default
};
