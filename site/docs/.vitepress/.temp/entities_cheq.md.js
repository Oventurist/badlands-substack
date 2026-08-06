import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CHEQ","description":"","frontmatter":{"title":"CHEQ","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","cybersecurity","x-corp","bots"],"sources":["raw/badlands-news-brief-214.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cheq.md","filePath":"entities/cheq.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cheq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cheq" tabindex="-1">CHEQ <a class="header-anchor" href="#cheq" aria-label="Permalink to &quot;CHEQ&quot;">​</a></h1><p>CHEQ is an Israeli cybersecurity company cited in Badlands Media commentary as part of what contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> described as a matrix of Israeli software and technology firms underpinning the modern surveillance environment.[1]</p><h2 id="meeting-with-elon-musk" tabindex="-1">Meeting with Elon Musk <a class="header-anchor" href="#meeting-with-elon-musk" aria-label="Permalink to &quot;Meeting with Elon Musk&quot;">​</a></h2><p>CHEQ was reported to have met secretly with <a href="/entities/elon-musk">Elon Musk</a> in 2023, promising to help X (formerly Twitter) rid the platform of bots.[1] Israeli Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> was reported to have attended that meeting as well.[1] Badlands commentary raised the episode alongside the later controversy over the identity-verification vendor <a href="/entities/au10tix">Au10tix</a> as evidence of close commercial ties between X and Israeli technology firms, asking pointedly how the bot-removal effort had worked out.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Weaponized Governments and Embattled Bidens&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-214" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-214</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cheq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cheq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cheq as default
};
