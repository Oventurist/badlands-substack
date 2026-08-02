import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quraysh","description":"","frontmatter":{"title":"Quraysh","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["arabian-history","mecca","tribal-society","islam"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/quraysh.md","filePath":"entities/quraysh.md","lastUpdated":null}');
const _sfc_main = { name: "entities/quraysh.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="quraysh" tabindex="-1">Quraysh <a class="header-anchor" href="#quraysh" aria-label="Permalink to &quot;Quraysh&quot;">​</a></h1><p>The Quraysh were the Meccan tribe into which <a href="/entities/prophet-muhammad">Muhammad</a> was born. According to the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a>, the tribe was formed when <a href="/entities/qusayy-ibn-kilab">qusayy-ibn-kilab</a> brought together a number of <a href="/concepts/bedouin">bedouin</a> nomadic clans and led them in retaking the <a href="/concepts/kaaba">kaaba</a> from a syndicate of godless criminals who had taken control of Mecca. The success of the mission forged a bond among the participating clans, who swore an oath to one another and thereafter identified themselves collectively as Quraysh.</p><p>A map of Arabian tribes in 600 AD reproduced in the article shows the Quraysh occupying and controlling <em>Makkah</em> — Mecca — with the <a href="/entities/banu-hashim">banu-hashim</a> as one of its constituent clans. The same map shows no settlement of significance at the site of modern Riyadh, the seat of the <a href="/entities/house-of-saud">house-of-saud</a>, which lay roughly where <em>al-Yamamah</em> is marked.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/quraysh.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quraysh = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quraysh as default
};
