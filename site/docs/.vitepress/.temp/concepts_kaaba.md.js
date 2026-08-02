import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kaaba","description":"","frontmatter":{"title":"Kaaba","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["islam","mecca","abrahamic-religions","arabian-history"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/kaaba.md","filePath":"concepts/kaaba.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/kaaba.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kaaba" tabindex="-1">Kaaba <a class="header-anchor" href="#kaaba" aria-label="Permalink to &quot;Kaaba&quot;">​</a></h1><p>The Kaaba is the stone sanctuary at Mecca that Islam considers mankind&#39;s first house of worship. In the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> it functions as the physical anchor of the region&#39;s sacred history.</p><p>The source states that <a href="/entities/abraham">abraham</a>, after his exile from Mesopotamia by <a href="/entities/nimrod">nimrod</a>, settled in Mecca and constructed a stone sanctuary on the same foundation where his ancestor Adam, of the Garden in <em>Genesis</em>, had built one as a place to worship the one God. Elsewhere the article describes the structure as built by Abraham and his son Ishmael and regarded as a sacred relic.</p><p>The Kaaba&#39;s control is treated as a recurring political fact. <a href="/entities/qusayy-ibn-kilab">qusayy-ibn-kilab</a> united <a href="/concepts/bedouin">bedouin</a> clans to retake it from a syndicate of godless criminals who had seized Mecca, an action that produced the tribe of <a href="/entities/quraysh">quraysh</a>. His grandson <a href="/entities/hashim-ibn-abd-manaf">Hashim</a> later established the practice of feeding pilgrims who had crossed the desert to pray at the Kaaba with a broth mixed with crumbled bread — a tradition of hospitality the source says is still observed in Mecca and was adopted by all great desert sheikhs.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/kaaba.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kaaba = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kaaba as default
};
