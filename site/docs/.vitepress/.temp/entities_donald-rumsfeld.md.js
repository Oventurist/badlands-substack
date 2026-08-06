import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Donald Rumsfeld","description":"","frontmatter":{"title":"Donald Rumsfeld","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["neoconservatism","pnac","pentagon","bush-administration"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/donald-rumsfeld.md","filePath":"entities/donald-rumsfeld.md","lastUpdated":null}');
const _sfc_main = { name: "entities/donald-rumsfeld.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="donald-rumsfeld" tabindex="-1">Donald Rumsfeld <a class="header-anchor" href="#donald-rumsfeld" aria-label="Permalink to &quot;Donald Rumsfeld&quot;">​</a></h1><p>Donald Rumsfeld is a former U.S. Secretary of Defense listed by Badlands Media among the members of the <a href="/entities/project-for-the-new-american-century">Project for the New American Century</a>.[1]</p><p>Rumsfeld appears in the article&#39;s roster of PNAC figures alongside <a href="/entities/dick-cheney">Dick Cheney</a>, <a href="/entities/paul-wolfowitz">Paul Wolfowitz</a>, and <a href="/entities/john-bolton">John Bolton</a>, drawn from the neoconservative milieu of the <a href="/entities/american-enterprise-institute">American Enterprise Institute</a> and organized by <a href="/entities/william-kristol">William Kristol</a> and <a href="/entities/robert-kagan">Robert Kagan</a>.[1] The article connects that circle to the post-9/11 <a href="/entities/pentagon">Pentagon</a> planning described by General Wesley Clark, which reportedly envisioned taking out seven countries in five years beginning with Iraq and Syria.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/donald-rumsfeld.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const donaldRumsfeld = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  donaldRumsfeld as default
};
