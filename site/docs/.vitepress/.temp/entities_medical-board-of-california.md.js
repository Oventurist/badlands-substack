import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Medical Board of California","description":"","frontmatter":{"title":"Medical Board of California","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["california","covid-19","censorship","medicine","regulation"],"sources":["raw/badlands-news-brief-2a2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/medical-board-of-california.md","filePath":"entities/medical-board-of-california.md","lastUpdated":null}');
const _sfc_main = { name: "entities/medical-board-of-california.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="medical-board-of-california" tabindex="-1">Medical Board of California <a class="header-anchor" href="#medical-board-of-california" aria-label="Permalink to &quot;Medical Board of California&quot;">​</a></h1><p>The Medical Board of California is the state agency responsible for licensing and disciplining physicians in California. In 2022–2023 it became a central actor in the national dispute over COVID-19 &quot;misinformation&quot; because of the enforcement powers assigned to it under <a href="/concepts/assembly-bill-2098">Assembly Bill 2098</a>.[1]</p><h2 id="role-under-ab-2098" tabindex="-1">Role under AB 2098 <a class="header-anchor" href="#role-under-ab-2098" aria-label="Permalink to &quot;Role under AB 2098&quot;">​</a></h2><p>AB 2098 empowered the Medical Board of California, along with the Osteopathic Medical Board of California, to discipline physicians who &quot;disseminate&quot; information about COVID-19 that is not in line with the &quot;contemporary scientific consensus.&quot;[1] The law was set to take effect on January 1, 2023.[1]</p><p>In late January 2023, a California judge issued a preliminary injunction against the statute, blocking the boards from enforcing its misinformation provisions while litigation proceeded.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands Media contributor <a href="/entities/johnny-q">Johnny Q</a> described the disciplinary regime as forbidding doctors from recommending against COVID vaccination and requiring adherence to treatment protocol guidelines on pain of losing their medical licenses, arguing that this violated patient–doctor confidentiality, right-to-try principles, and the First Amendment.[1] He characterized the injunction as a necessary win, warning that an adverse precedent &quot;will forever destroy the relationship between medical care providers and the people they serve.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Archives, Shifty Schiff, PelosiGate and Durham Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/medical-board-of-california.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const medicalBoardOfCalifornia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  medicalBoardOfCalifornia as default
};
