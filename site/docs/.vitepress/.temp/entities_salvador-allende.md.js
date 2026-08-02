import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Salvador Allende","description":"","frontmatter":{"title":"Salvador Allende","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["chile","cold-war","coup","socialism"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/salvador-allende.md","filePath":"entities/salvador-allende.md","lastUpdated":null}');
const _sfc_main = { name: "entities/salvador-allende.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="salvador-allende" tabindex="-1">Salvador Allende <a class="header-anchor" href="#salvador-allende" aria-label="Permalink to &quot;Salvador Allende&quot;">​</a></h1><p>Salvador Allende (1908–1973) was a Chilean physician and socialist politician who served as President of Chile from 1970 until his overthrow and death in the September 11, 1973 military coup led by General <a href="/entities/augusto-pinochet">Augusto Pinochet</a>. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Allende&#39;s overthrow is presented as a key episode of <a href="/entities/afl-cio">AFL-CIO</a>-involvement in covert U.S. regime change.</p><h2 id="the-1973-chilean-coup" tabindex="-1">The 1973 Chilean coup <a class="header-anchor" href="#the-1973-chilean-coup" aria-label="Permalink to &quot;The 1973 Chilean coup&quot;">​</a></h2><p>The article quotes Tim Shorrock&#39;s 2003 <em>The Nation</em> piece &quot;Labor&#39;s Cold War,&quot; which states that September 11, 1973 was &quot;the day Chilean President Salvador Allende was overthrown in a bloody military coup that ended a brief experiment in democratic socialism and took the lives of Allende and thousands of Chilean workers, students and political activists.&quot; Shorrock recounts that the AFL-CIO &quot;played a key role in the US campaign, led by the Nixon Administration and the Central Intelligence Agency, to destabilize Chile.&quot;</p><p>From 1971 to 1973, the AFL-CIO&#39;s <a href="/entities/american-institute-for-free-labor-development">American Institute for Free Labor Development</a> &quot;channeled millions of dollars to right-wing unions and political parties opposed to Allende&#39;s socialist agenda,&quot; helping finance the revolt by Chile&#39;s professional class and providing the pretext for Pinochet&#39;s violent crackdown and seventeen-year dictatorship.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/salvador-allende.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const salvadorAllende = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  salvadorAllende as default
};
