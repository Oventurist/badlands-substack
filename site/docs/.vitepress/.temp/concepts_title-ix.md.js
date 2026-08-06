import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Title IX","description":"","frontmatter":{"title":"Title IX","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["federal-law","education","womens-sports","civil-rights"],"sources":["raw/badlands-news-brief-054.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/title-ix.md","filePath":"concepts/title-ix.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/title-ix.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="title-ix" tabindex="-1">Title IX <a class="header-anchor" href="#title-ix" aria-label="Permalink to &quot;Title IX&quot;">​</a></h1><p>Title IX is the federal statute that guarantees equal opportunity for men and women in college education and sports.[1]</p><h2 id="application-to-transgender-competition" tabindex="-1">Application to transgender competition <a class="header-anchor" href="#application-to-transgender-competition" aria-label="Permalink to &quot;Application to transgender competition&quot;">​</a></h2><p>In March 2024 Title IX became the legal basis for a class-action lawsuit brought by more than a dozen female athletes against the <a href="/entities/national-collegiate-athletic-association">NCAA</a> over its policies allowing transgender athletes to compete in women&#39;s events and use female locker rooms.[1] The complaint alleges that the NCAA and Georgia Tech, which hosted the 2022 NCAA Swimming Championships, knowingly violated the statute when <a href="/entities/lia-thomas">Lia Thomas</a> competed in and won the women&#39;s 500-yard freestyle title.[1]</p><p>Reported as the first federal action of its kind, the suit asks a court to read Title IX as rendering biological males ineligible to compete against female athletes, to require the NCAA to revoke awards given to trans athletes in women&#39;s competitions and reassign them to female contenders, and to award damages for pain and suffering, mental and emotional distress, anxiety and costs.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fani Hunts Alone as Putin Keeps the Throne&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-054" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-054</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/title-ix.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const titleIx = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  titleIx as default
};
