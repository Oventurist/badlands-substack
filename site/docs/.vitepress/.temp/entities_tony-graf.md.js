import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tony Graf","description":"","frontmatter":{"title":"Tony Graf","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","utah","charlie-kirk-case"],"sources":["raw/badlands-brief-774.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tony-graf.md","filePath":"entities/tony-graf.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tony-graf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tony-graf" tabindex="-1">Tony Graf <a class="header-anchor" href="#tony-graf" aria-label="Permalink to &quot;Tony Graf&quot;">​</a></h1><p>Tony Graf is the Utah judge presiding over the prosecution of <a href="/entities/tyler-robinson">Tyler Robinson</a>, the man accused of assassinating <a href="/entities/charlie-kirk">Charlie Kirk</a>.[1]</p><p>On June 1, 2026, Graf handed the defense two significant pretrial defeats.[1] He ruled that Robinson&#39;s July preliminary hearing would remain open to the public and the media, rejecting defense efforts to close portions of the proceedings.[1] He also declined to halt the case while Robinson appealed a separate ruling that allowed cameras in the courtroom.[1]</p><p>The July 6–10 hearing over which Graf will preside is expected to be the most substantial public presentation of evidence in the case to date.[1] A separate hearing was scheduled for June 12 to address defense claims that prosecutors improperly influenced public opinion through media comments about the case.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weaponization Woes &amp; Bailing on the Bromance&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-774" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-774</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tony-graf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tonyGraf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tonyGraf as default
};
