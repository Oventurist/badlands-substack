import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Qusayy ibn Kilab","description":"","frontmatter":{"title":"Qusayy ibn Kilab","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["arabian-history","mecca","quraysh","kaaba"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/qusayy-ibn-kilab.md","filePath":"entities/qusayy-ibn-kilab.md","lastUpdated":null}');
const _sfc_main = { name: "entities/qusayy-ibn-kilab.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qusayy-ibn-kilab" tabindex="-1">Qusayy ibn Kilab <a class="header-anchor" href="#qusayy-ibn-kilab" aria-label="Permalink to &quot;Qusayy ibn Kilab&quot;">​</a></h1><p>Qusayy ibn Kilab was the grandfather of <a href="/entities/hashim-ibn-abd-manaf">Hashim</a> and an ancestor of <a href="/entities/prophet-muhammad">Muhammad</a>. In the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> he appears as the leader who united many <a href="/concepts/bedouin">bedouin</a> nomadic clans and led them in retaking the <a href="/concepts/kaaba">kaaba</a> — described as a stone structure built by <a href="/entities/abraham">abraham</a> and his son Ishmael and regarded as a sacred relic — from a syndicate of godless criminals who had seized control of Mecca.</p><p>The success of that campaign, the source states, forged a lasting bond among the participating clans, who swore an oath to one another and from that point identified as the tribe of <a href="/entities/quraysh">quraysh</a>. Qusayy&#39;s example of strength exercised in defence rather than predation is presented in the article as the model his grandson Hashim would follow.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/qusayy-ibn-kilab.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qusayyIbnKilab = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qusayyIbnKilab as default
};
