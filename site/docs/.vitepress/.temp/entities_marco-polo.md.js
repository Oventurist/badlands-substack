import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marco Polo","description":"","frontmatter":{"title":"Marco Polo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["research-group","citizen-journalism","swalwell","opposition-research"],"sources":["raw/badlands-brief-949.md","raw/badlands-news-brief-3c3.md"],"confidence":"low"},"headers":[],"relativePath":"entities/marco-polo.md","filePath":"entities/marco-polo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/marco-polo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marco-polo" tabindex="-1">Marco Polo <a class="header-anchor" href="#marco-polo" aria-label="Permalink to &quot;Marco Polo&quot;">​</a></h1><p>Marco Polo is a research group cited by Badlands for its open-source investigative work on political figures.[1]</p><p>In April 2026, Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> credited &quot;the homies over at Marco Polo&quot; with identifying the young woman appearing in a viral video involving Rep. <a href="/entities/eric-swalwell">Eric Swalwell</a>, noting that the identified individual&#39;s social media consisted largely of sexually explicit content.[1] Ashe thanked the group and posed follow-up questions about the identity of the other participants and who was filming.[1]</p><h2 id="biden-laptop-report" tabindex="-1">Biden Laptop report <a class="header-anchor" href="#biden-laptop-report" aria-label="Permalink to &quot;Biden Laptop report&quot;">​</a></h2><p>Marco Polo published a comprehensive report on the contents of <a href="/entities/hunter-biden">Hunter Biden</a>&#39;s laptop in October 2022, and that document included <a href="/entities/joe-biden">Joe Biden</a>&#39;s &quot;Robert.L.Peters&quot; pseudonym on page 159.[2] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> cited this in August 2023 to argue that the House Republicans then expressing outrage over the pseudonymous emails should have known about the alias months earlier, since the report had been sent to every one of them multiple times.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Exposes Traitors; Peace Talks in Pakistan&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-949" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-949</a></li><li>Badlands Brief — &quot;Badlands News Brief: From Hunter to NATO, It&#39;s All About Ukraine&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/marco-polo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marcoPolo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marcoPolo as default
};
