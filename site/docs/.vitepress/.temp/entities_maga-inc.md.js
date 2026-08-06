import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MAGA Inc.","description":"","frontmatter":{"title":"MAGA Inc.","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["super-pac","campaign-finance","donald-trump","republican-party"],"sources":["raw/badlands-news-brief-721.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/maga-inc.md","filePath":"entities/maga-inc.md","lastUpdated":null}');
const _sfc_main = { name: "entities/maga-inc.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maga-inc" tabindex="-1">MAGA Inc. <a class="header-anchor" href="#maga-inc" aria-label="Permalink to &quot;MAGA Inc.&quot;">​</a></h1><p>MAGA Inc. is the main super political action committee affiliated with President <a href="/entities/donald-trump">Donald Trump</a>.[1] As a super PAC it may accept unlimited contributions from individuals and corporations for independent political expenditures, and it functions as the principal outside-money vehicle supporting Trump&#39;s political operation.[1]</p><h2 id="musk-donation-june-2025" tabindex="-1">Musk donation, June 2025 <a class="header-anchor" href="#musk-donation-june-2025" aria-label="Permalink to &quot;Musk donation, June 2025&quot;">​</a></h2><p>Campaign finance filings disclosed that tech billionaire <a href="/entities/elon-musk">Elon Musk</a> donated $5 million to MAGA Inc. on 27 June 2025, despite an ongoing and highly public feud with the president.[1] The same day, Musk gave $5 million each to the Senate Leadership Fund and the Congressional Leadership Fund, the leading super PACs dedicated to boosting Senate and House Republicans respectively.[1] The donations appear to have been made during a lull in the Tesla chief executive&#39;s spat with Trump.[1]</p><p>Badlands commentary treated the disclosure as evidence that the visible antagonism between Trump and Musk is best understood as an information operation rather than a genuine rupture, with the public feud serving as negotiating leverage while the actual bargaining occurs out of view.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Post Mortems, Dog Fights, &amp; Flight Risks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-721" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-721</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maga-inc.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const magaInc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  magaInc as default
};
