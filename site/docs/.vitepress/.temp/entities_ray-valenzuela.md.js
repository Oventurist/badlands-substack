import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ray Valenzuela","description":"","frontmatter":{"title":"Ray Valenzuela","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","arizona","maricopa-county","witness"],"sources":["raw/badlands-news-brief-862.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ray-valenzuela.md","filePath":"entities/ray-valenzuela.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ray-valenzuela.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ray-valenzuela" tabindex="-1">Ray Valenzuela <a class="header-anchor" href="#ray-valenzuela" aria-label="Permalink to &quot;Ray Valenzuela&quot;">​</a></h1><p>Ray Valenzuela is a <a href="/entities/maricopa-county">Maricopa County</a> elections official who appeared as the defense&#39;s sole witness in the second phase of <a href="/entities/kari-lake">Kari Lake</a>&#39;s 2022 election challenge trial.[1]</p><h2 id="role-in-lake-v-hobbs" tabindex="-1">Role in Lake v. Hobbs <a class="header-anchor" href="#role-in-lake-v-hobbs" aria-label="Permalink to &quot;Role in Lake v. Hobbs&quot;">​</a></h2><p>After the plaintiffs rested their case on May 18, 2023, the defendants in <a href="/concepts/lake-v-hobbs">Lake v. Hobbs et al.</a> immediately moved for summary judgment without presenting a defense.[1] Following what Badlands Media described as an impassioned back-and-forth, the judge declined the motion, and the defense then called Valenzuela as its only witness.[1] Attorney Liddy conducted the direct examination, with Lake&#39;s attorneys scheduled to cross-examine Valenzuela the following day.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kari Counters, Elites Gather &amp; Data Talks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-862" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-862</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ray-valenzuela.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rayValenzuela = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rayValenzuela as default
};
