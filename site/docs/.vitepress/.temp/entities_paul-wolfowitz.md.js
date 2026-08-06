import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Wolfowitz","description":"","frontmatter":{"title":"Paul Wolfowitz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["neoconservatism","pnac","bush-administration"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/paul-wolfowitz.md","filePath":"entities/paul-wolfowitz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-wolfowitz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-wolfowitz" tabindex="-1">Paul Wolfowitz <a class="header-anchor" href="#paul-wolfowitz" aria-label="Permalink to &quot;Paul Wolfowitz&quot;">​</a></h1><p>Paul Wolfowitz is a neoconservative official listed by Badlands Media among the members of the <a href="/entities/project-for-the-new-american-century">Project for the New American Century</a>, the think tank founded in 1997 by <a href="/entities/william-kristol">William Kristol</a> and <a href="/entities/robert-kagan">Robert Kagan</a> with ties to the <a href="/entities/american-enterprise-institute">American Enterprise Institute</a>.[1]</p><p>Alongside <a href="/entities/dick-cheney">Dick Cheney</a>, <a href="/entities/john-bolton">John Bolton</a>, and <a href="/entities/donald-rumsfeld">Donald Rumsfeld</a>, Wolfowitz belonged to the group whose signatories heavily staffed the George W. Bush administration.[1] The article ties PNAC&#39;s program of <a href="/concepts/pax-americana">Pax Americana</a> and its designs on Iraq, Iran, Libya, and Syria to the events that ended in the ouster of <a href="/entities/bashar-al-assad">Bashar al-Assad</a> in December 2024.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-wolfowitz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulWolfowitz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulWolfowitz as default
};
