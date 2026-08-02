import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sunni Islam","description":"","frontmatter":{"title":"Sunni Islam","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["islam","sunni-islam","succession","saudi-arabia"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/sunni-islam.md","filePath":"concepts/sunni-islam.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/sunni-islam.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sunni-islam" tabindex="-1">Sunni Islam <a class="header-anchor" href="#sunni-islam" aria-label="Permalink to &quot;Sunni Islam&quot;">​</a></h1><p>Sunni Islam is the majority branch of Islam, comprising by the estimate given in <a href="/concepts/arabian-nights">arabian-nights</a> some 85 to 90 percent of all Muslims. Its defining position, as the source presents it, is that <a href="/entities/prophet-muhammad">Muhammad</a> did not appoint an heir and intended the Muslim community to choose from among themselves the leader most capable of uniting the people under the sacred <em>hadiths</em> — the guidance given by Muhammad on how to live a pious life.</p><p>This principle was expressed in the elective succession of <a href="/entities/abu-bakr">abu-bakr</a> and the other three companions who led the <a href="/concepts/rashidun-caliphate">rashidun-caliphate</a>. Sunni Muslims also apply the phrase <em>Ahl al-Bayt</em>, &quot;People of the House [of the Prophet],&quot; more broadly than the <a href="/concepts/shia-islam">Shia</a>, extending it to all members of the <a href="/entities/banu-hashim">banu-hashim</a>.</p><p>Geographically, the source identifies <a href="/entities/saudi-arabia">saudi-arabia</a>, Jordan and Syria as the Sunni heartland, and notes that these three nations comprise the area the Hashemites regarded as the true Arabia. Saudi Arabia is described as the leader of the Islamic world, though the essay stresses that its rulers are neither <em>sharifs</em> nor Hashemites — the two lineages from which most historical caliphs were drawn.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/sunni-islam.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sunniIslam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sunniIslam as default
};
