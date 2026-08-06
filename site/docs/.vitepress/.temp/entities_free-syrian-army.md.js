import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Free Syrian Army","description":"","frontmatter":{"title":"Free Syrian Army","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","militants","proxy-war","middle-east"],"sources":["raw/badlands-news-brief-7a5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/free-syrian-army.md","filePath":"entities/free-syrian-army.md","lastUpdated":null}');
const _sfc_main = { name: "entities/free-syrian-army.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="free-syrian-army" tabindex="-1">Free Syrian Army <a class="header-anchor" href="#free-syrian-army" aria-label="Permalink to &quot;Free Syrian Army&quot;">​</a></h1><p>The <strong>Free Syrian Army</strong> (FSA) is an armed Syrian opposition formation that fought the government of <a href="/entities/bashar-al-assad">Bashar al-Assad</a> during the Syrian civil war. In coverage of the December 2024 collapse of the Syrian government, the FSA was described as US-armed and as advancing on <a href="/entities/damascus">Damascus</a> alongside <a href="/entities/hayat-tahrir-al-sham">Hayat Tahrir al-Sham</a> jihadists while the Syrian Army stood down.[1]</p><h2 id="role-in-the-fall-of-damascus" tabindex="-1">Role in the fall of Damascus <a class="header-anchor" href="#role-in-the-fall-of-damascus" aria-label="Permalink to &quot;Role in the fall of Damascus&quot;">​</a></h2><p>Over the weekend of the offensive, FSA militants and HTS fighters took the Syrian capital, after which the anti-Assad forces declared Assad deposed and claimed control over the country&#39;s government.[1] Badlands commentary placed the FSA within a broader pattern in which extremist and opposition groups were characterised as propped up by what the outlet calls the Western globalist hegemony, and treated the group&#39;s US sponsorship as evidence that the <a href="/concepts/fall-of-the-assad-regime">fall of the Assad regime</a> was an externally driven regime-change operation rather than a spontaneous uprising.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Damascus Has Fallen ... Cui Bono?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/free-syrian-army.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const freeSyrianArmy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  freeSyrianArmy as default
};
