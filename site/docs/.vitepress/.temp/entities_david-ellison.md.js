import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Ellison","description":"","frontmatter":{"title":"David Ellison","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","hollywood","media","corporate"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-ellison.md","filePath":"entities/david-ellison.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-ellison.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-ellison" tabindex="-1">David Ellison <a class="header-anchor" href="#david-ellison" aria-label="Permalink to &quot;David Ellison&quot;">​</a></h1><p>David Ellison is the head of <a href="/entities/skydance-media">Skydance Media</a> and the son of <a href="/entities/oracle">Oracle</a> cofounder <a href="/entities/larry-ellison">Larry Ellison</a>. In the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, <a href="/entities/erik-carlson">Erik Carlson</a> identifies him as the executive who will effectively control <a href="/entities/paramount-global">Paramount Global</a> once its merger with Skydance is complete, making him a key figure in what the article describes as the <a href="/entities/donald-trump">Trump</a>-aligned takeover of Hollywood.</p><p>Under his leadership, Skydance produced <em>Top Gun: Maverick</em>, the <em>Mission Impossible</em> films and <em>Jack Reacher</em>, along with the television series <em>Reacher</em> and <em>Jack Ryan</em>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-ellison.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidEllison = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidEllison as default
};
