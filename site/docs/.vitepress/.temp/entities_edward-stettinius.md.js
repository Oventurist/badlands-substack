import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edward Stettinius","description":"","frontmatter":{"title":"Edward Stettinius","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["state-department","wwii","labor"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"low"},"headers":[],"relativePath":"entities/edward-stettinius.md","filePath":"entities/edward-stettinius.md","lastUpdated":null}');
const _sfc_main = { name: "entities/edward-stettinius.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="edward-stettinius" tabindex="-1">Edward Stettinius <a class="header-anchor" href="#edward-stettinius" aria-label="Permalink to &quot;Edward Stettinius&quot;">​</a></h1><p>Edward Stettinius served as U.S. Secretary of State in the closing period of World War II.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> The article states that under his leadership the <a href="/entities/state-department">State Department</a> explicitly coordinated with American unions to ensure that post-war labor movements aligned with American free-market ideals, preventing Soviet-style worker councils from taking root in Europe.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><p>This coordination is presented as evidence that the AFL&#39;s <a href="/entities/free-trade-union-committee">Free Trade Union Committee</a> work in France and Italy was no ad hoc effort but official policy, in which workers&#39; rights were secondary to corralling foreign workforces into an ideological box.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A More Perfect (Labor) Union&quot;, URL: <a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-more-perfect-labor-union</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/edward-stettinius.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edwardStettinius = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  edwardStettinius as default
};
