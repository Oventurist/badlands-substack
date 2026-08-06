import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New Right (Israel)","description":"","frontmatter":{"title":"New Right (Israel)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","political-party","knesset"],"sources":["raw/badlands-news-brief-80e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/new-right-party.md","filePath":"entities/new-right-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/new-right-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-right-israel" tabindex="-1">New Right (Israel) <a class="header-anchor" href="#new-right-israel" aria-label="Permalink to &quot;New Right (Israel)&quot;">​</a></h1><p>The New Right is an Israeli political party led by former Prime Minister <a href="/entities/naftali-bennett">Naftali Bennett</a>.[1]</p><h2 id="founding-and-positioning" tabindex="-1">Founding and positioning <a class="header-anchor" href="#founding-and-positioning" aria-label="Permalink to &quot;Founding and positioning&quot;">​</a></h2><p>Founded at the end of 2018, the party branded itself as the &quot;most right-wing&quot; party in Israel in an attempt to supplant <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>&#39;s <a href="/entities/likud">Likud</a>, which had expanded over the years to include many political moderates and centrists.[1] When Bennett ran for Prime Minister in 2021, he branded himself as &quot;10% more right-wing than Netanyahu.&quot;[1]</p><p>While Bennett drew the most right-wing factions of Likud into the New Right, he rejected the Kahanists of <a href="/entities/otzma-yehudit">Otzma Yehudit</a> (&quot;Jewish Power&quot;), led by <a href="/entities/itamar-ben-gvir">Itamar Ben-Gvir</a>, whom he considered too extreme to call allies; Netanyahu was subsequently forced to ally with those radicals for political survival.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musical Fed Chairs, Salvadoran Chess, &amp; Cocktails in the Clink&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-80e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-80e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/new-right-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newRightParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newRightParty as default
};
