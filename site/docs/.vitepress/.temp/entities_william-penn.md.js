import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Penn","description":"","frontmatter":{"title":"William Penn","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["pennsylvania","quaker","treaty","colonial-america"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/william-penn.md","filePath":"entities/william-penn.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-penn.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-penn" tabindex="-1">William Penn <a class="header-anchor" href="#william-penn" aria-label="Permalink to &quot;William Penn&quot;">​</a></h1><p>William Penn (1644–1718) was the founder of the Pennsylvania colony and the negotiator of the <a href="/concepts/penn-treaty-of-1682">Penn Treaty of 1682</a> with the Delaware natives. In the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a>, <a href="/entities/matthew-ehret">Matthew Ehret</a> describes him as one of the key leaders of the Leibniz and Jonathan Swift networks in America, and notes that the grandfather of the painter <a href="/entities/benjamin-west">Benjamin West</a> was a close friend of Penn.</p><p>Holding sole authority over Pennsylvania under a Crown Charter, Penn was under no legal obligation to compensate the Delaware and could have applied the &quot;might makes right&quot; principle of empire, as was done many times before and after. Instead, according to the source, he committed his territory not to wealth extraction as the British Empire expected but to developing culture, economy and population along the lines earlier set out by John Winthrop Jr. and John Winthrop, and he negotiated an unprecedented treaty paying the Delaware generously and guaranteeing their continued freedom to use the land after European settlement. The historian <a href="/entities/graham-lowry">Graham Lowry</a> is cited as having examined Penn&#39;s work at length in <em>How the Nation Was Won</em>.</p><p>West commemorated the negotiations in a 1771 painting showing textiles and goods — rather than alcohol or guns — being offered beneath the cedar tree where the treaty was signed. The source describes Penn&#39;s treaty as one of the very few that endured and was honored for generations, and links its ethic to the <a href="/concepts/peace-of-westphalia">Peace of Westphalia</a> of 1648 and its principle of the benefit of the other.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-penn.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamPenn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamPenn as default
};
