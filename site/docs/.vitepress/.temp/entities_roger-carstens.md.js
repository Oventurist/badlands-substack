import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roger Carstens","description":"","frontmatter":{"title":"Roger Carstens","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hostage-diplomacy","state-department","biden-administration"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/roger-carstens.md","filePath":"entities/roger-carstens.md","lastUpdated":null}');
const _sfc_main = { name: "entities/roger-carstens.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="roger-carstens" tabindex="-1">Roger Carstens <a class="header-anchor" href="#roger-carstens" aria-label="Permalink to &quot;Roger Carstens&quot;">​</a></h1><p>Roger Carstens served as the special presidential envoy for hostage affairs during the <a href="/entities/joe-biden">Biden</a> administration, the official responsible for coordinating US efforts to recover Americans detained abroad.[1]</p><p>Carstens featured in reporting on the negotiations that secured the release of Wall Street Journal reporter <a href="/entities/evan-gershkovich">Evan Gershkovich</a> from Russian prison.[1] According to the account, he instructed Gershkovich&#39;s mother, Ella, to approach President Biden at the White House Correspondents&#39; Dinner and urge him to telephone German Chancellor <a href="/entities/olaf-scholz">Olaf Scholz</a>.[1] Biden claimed he had already made the call, but Secretary of State <a href="/entities/antony-blinken">Antony Blinken</a> corrected him; ultimately a signed letter was sent to Scholz instead of a call.[1]</p><p>Badlands commentary framed the scene — the mother of an American prisoner waiting in a handshake line to relay a message from the president&#39;s own hostage negotiator — as evidence that Biden did not grasp the situation and that others were managing US diplomacy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/roger-carstens.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rogerCarstens = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rogerCarstens as default
};
