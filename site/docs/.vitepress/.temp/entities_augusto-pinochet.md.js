import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Augusto Pinochet","description":"","frontmatter":{"title":"Augusto Pinochet","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["chile","dictatorship","cold-war","coup"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/augusto-pinochet.md","filePath":"entities/augusto-pinochet.md","lastUpdated":null}');
const _sfc_main = { name: "entities/augusto-pinochet.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="augusto-pinochet" tabindex="-1">Augusto Pinochet <a class="header-anchor" href="#augusto-pinochet" aria-label="Permalink to &quot;Augusto Pinochet&quot;">​</a></h1><p>Augusto Pinochet (1915–2006) was a Chilean military officer and general who came to power in the September 11, 1973 coup that overthrew President <a href="/entities/salvador-allende">Salvador Allende</a>, ruling Chile as a dictator for seventeen years until 1990. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Pinochet&#39;s crackdown is described as having been aided by AFL-CIO-funded labor operations.</p><h2 id="role-in-the-1973-coup" tabindex="-1">Role in the 1973 coup <a class="header-anchor" href="#role-in-the-1973-coup" aria-label="Permalink to &quot;Role in the 1973 coup&quot;">​</a></h2><p>The article quotes Tim Shorrock&#39;s <em>The Nation</em> piece, which states that U.S.-government-funded labor aid to right-wing unions &quot;helped finance the revolt by Chile&#39;s professional class and fanned the flames of social unrest that provided the pretext for Gen. Augusto Pinochet&#39;s violent crackdown and the justification for his seventeen-year dictatorship.&quot; The article presents Pinochet&#39;s regime as the beneficiary of the covert labor operations conducted by the <a href="/entities/afl-cio">AFL-CIO</a>&#39;s <a href="/entities/american-institute-for-free-labor-development">American Institute for Free Labor Development</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/augusto-pinochet.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const augustoPinochet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  augustoPinochet as default
};
