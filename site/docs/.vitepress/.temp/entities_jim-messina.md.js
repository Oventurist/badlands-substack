import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jim Messina","description":"","frontmatter":{"title":"Jim Messina","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["democrats","campaigns","2028-election","political-strategy"],"sources":["raw/badlands-brief-9eb.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jim-messina.md","filePath":"entities/jim-messina.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jim-messina.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jim-messina" tabindex="-1">Jim Messina <a class="header-anchor" href="#jim-messina" aria-label="Permalink to &quot;Jim Messina&quot;">​</a></h1><p>Jim Messina is a Democratic political strategist best known as the manager of <a href="/entities/barack-obama">Barack Obama</a>&#39;s 2012 presidential campaign.[1] In March 2026 he became a prominent voice in the internal Democratic debate over how the party should position itself for the 2028 presidential cycle.[1]</p><h2 id="_2028-strategy-warning" tabindex="-1">2028 strategy warning <a class="header-anchor" href="#_2028-strategy-warning" aria-label="Permalink to &quot;2028 strategy warning&quot;">​</a></h2><p>Speaking to <a href="/entities/axios">Axios</a> amid reporting on a Democratic identity crisis, Messina argued that opposition to <a href="/entities/donald-trump">Donald Trump</a> would not carry the party beyond the midterms: &quot;You can&#39;t win a presidential election on opposition alone. The midterms are going to be 85-90% driven by voter opposition to Trump and maybe 10-15% based on what Dems stand for…We cannot rely on that same calculation to win in 2028.&quot;[1]</p><p>His comment reflected a wider argument among Democratic strategists that the party has been defined primarily by anti-Trump positioning and must articulate a broader affirmative agenda, with some favoring a pivot to working-class economic issues and others urging continued emphasis on social and cultural policy priorities.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Dems Demand a Post-Trump Strategy as Hamas Haggles for Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9eb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9eb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jim-messina.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jimMessina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jimMessina as default
};
