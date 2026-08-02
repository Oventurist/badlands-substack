import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jacobin","description":"","frontmatter":{"title":"Jacobin","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["media","socialism","labor-unions"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/jacobin.md","filePath":"entities/jacobin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jacobin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jacobin" tabindex="-1">Jacobin <a class="header-anchor" href="#jacobin" aria-label="Permalink to &quot;Jacobin&quot;">​</a></h1><p><em>Jacobin</em> is an American socialist magazine that publishes analysis of labor, politics, and the economy. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, <em>Jacobin</em> is cited as a source documenting the <a href="/entities/cia">CIA</a>&#39;s partnership with the <a href="/entities/afl-cio">AFL-CIO</a> — the so-called &quot;AFL-CIA&quot; relationship.</p><h2 id="cited-in-the-article" tabindex="-1">Cited in the article <a class="header-anchor" href="#cited-in-the-article" aria-label="Permalink to &quot;Cited in the article&quot;">​</a></h2><p>The article quotes a <em>Jacobin</em> article (&quot;How the &#39;AFL-CIA&#39; Undermined Labor Movements Abroad&quot;) explaining why the CIA chose to work through American unions: interventionists &quot;realized that if the CIA wanted to influence foreign labor movements, it would be hard for them to do it themselves. But if they could go through the AFL... they would have more success, because workers in other countries would be more likely to trust fellow union members.&quot;</p><p>The article also draws on <em>Jacobin</em>&#39;s reporting on the AFL-CIO&#39;s role in Guyana&#39;s 1962–63 general strike against <a href="/entities/cheddi-jagan">Cheddi Jagan</a>, Brazil&#39;s 1964 coup, and U.S. interference in Venezuela, citing <em>Jacobin</em>&#39;s 2020 piece &quot;Newly Revealed Documents Show How the AFL-CIO Aided US Interference in Venezuela.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jacobin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jacobin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jacobin as default
};
