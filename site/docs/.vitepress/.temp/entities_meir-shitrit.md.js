import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Meir Shitrit","description":"","frontmatter":{"title":"Meir Shitrit","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","idf","gaza-war","sde-teiman"],"sources":["raw/badlands-brief-559.md"],"confidence":"low"},"headers":[],"relativePath":"entities/meir-shitrit.md","filePath":"entities/meir-shitrit.md","lastUpdated":null}');
const _sfc_main = { name: "entities/meir-shitrit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="meir-shitrit" tabindex="-1">Meir Shitrit <a class="header-anchor" href="#meir-shitrit" aria-label="Permalink to &quot;Meir Shitrit&quot;">​</a></h1><p>Meir Shitrit is one of four <a href="/entities/israel-defense-forces">Israel Defense Forces</a> soldiers arrested in connection with the alleged sexual assault of a Palestinian detainee at the <a href="/entities/sde-teiman">Sde Teiman</a> military detention facility during the Gaza war.[1]</p><p>According to Badlands Media, Shitrit was the only one of the four accused soldiers willing to appear on camera without a mask, giving an interview on Israel Channel 14; the other three appeared on primetime Israeli television with their faces and identities concealed to defend themselves and their conduct.[1] Israeli media coverage elevated the four into public celebrities and folk heroes, while demonstrations supporting them — led in part by members of the <a href="/entities/knesset">Knesset</a> and National Security Minister <a href="/entities/itamar-ben-gvir">Itamar Ben-Gvir</a> — became known as the &quot;Right to Rape&quot; protests.[1] Israeli military prosecutors ultimately dropped the charges against the soldiers, citing evidentiary problems.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narrative Warfare For Your Safety&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-559" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-559</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/meir-shitrit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const meirShitrit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  meirShitrit as default
};
