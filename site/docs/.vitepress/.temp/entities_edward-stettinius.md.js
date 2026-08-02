import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edward Stettinius","description":"","frontmatter":{"title":"Edward Stettinius","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["state-department","world-war-ii","labor-unions"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/edward-stettinius.md","filePath":"entities/edward-stettinius.md","lastUpdated":null}');
const _sfc_main = { name: "entities/edward-stettinius.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="edward-stettinius" tabindex="-1">Edward Stettinius <a class="header-anchor" href="#edward-stettinius" aria-label="Permalink to &quot;Edward Stettinius&quot;">​</a></h1><p>Edward Stettinius (1900–1949) was an American businessman and government official who served as U.S. Secretary of State from 1944 to 1945 under President Franklin D. Roosevelt and as the first United States Ambassador to the United Nations. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Stettinius is cited as an official who explicitly coordinated U.S. labor policy in post-war Europe.</p><h2 id="role-in-labor-coordination" tabindex="-1">Role in labor coordination <a class="header-anchor" href="#role-in-labor-coordination" aria-label="Permalink to &quot;Role in labor coordination&quot;">​</a></h2><p>The article states that &quot;the State Department, under Secretary of State Edward Stettinius, explicitly coordinated with unions to ensure post-war labor movements aligned with American free-market ideals, preventing Soviet-style worker councils from taking root.&quot; This coordination is presented as part of the effort — alongside the <a href="/entities/cia">nascent CIA</a> and the <a href="/entities/american-federation-of-labor">AFL&#39;s</a> Free Trade Union Committee — to corral worker organizations into an ideological box aligned with American interests.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
