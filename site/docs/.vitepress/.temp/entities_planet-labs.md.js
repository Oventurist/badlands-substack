import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Planet Labs","description":"","frontmatter":{"title":"Planet Labs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["satellite-imagery","osint","iran-war","information-control"],"sources":["raw/badlands-brief-282.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/planet-labs.md","filePath":"entities/planet-labs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/planet-labs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="planet-labs" tabindex="-1">Planet Labs <a class="header-anchor" href="#planet-labs" aria-label="Permalink to &quot;Planet Labs&quot;">​</a></h1><p>Planet Labs is a California-based commercial satellite imagery company. In April 2026 it told customers it would indefinitely withhold satellite imagery of <a href="/entities/iran">Iran</a> and surrounding conflict areas after a request from the U.S. government, which the firm said had asked satellite imagery providers to impose an indefinite restriction on such images.[1]</p><p>The move expanded on a prior policy under which the company delayed release of Middle East imagery by 14 days.[1] The new restriction applies retroactively to images dating back to March 9 and will remain in place until the conflict ends.[1] Planet Labs said the measures are intended to prevent adversaries from using satellite imagery for military purposes against the United States and its allies.[1] The underlying conflict began on February 28, 2026 following U.S. and <a href="/entities/israel">Israeli</a> attacks on Iran, with Tehran responding by striking Israel and U.S. bases in Gulf states.[1]</p><h2 id="badlands-interpretation" tabindex="-1">Badlands interpretation <a class="header-anchor" href="#badlands-interpretation" aria-label="Permalink to &quot;Badlands interpretation&quot;">​</a></h2><p><a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> argued the blackout should be read by asking who benefits, concluding it is not Israel — which he expected to publicize battle damage to claim victimhood and sustain a longer war.[1] In his view, restricting open-source analysts&#39; access to imagery would conceal that Iran has not sustained the damage <a href="/entities/donald-trump">Trump</a> claims, consistent with a theory that Washington and Tehran are cooperating.[1] He raised the alternative that Israel and Iran are in a genuine conflict while Trump exaggerates U.S. involvement for narrative purposes, aiming to wear down the <a href="/entities/israel-defense-forces">IDF</a> and the Israeli public&#39;s appetite for war.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Jesus Walks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-282" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-282</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/planet-labs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const planetLabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  planetLabs as default
};
