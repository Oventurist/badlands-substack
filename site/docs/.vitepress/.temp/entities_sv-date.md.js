import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"S.V. Date","description":"","frontmatter":{"title":"S.V. Date","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","white-house-press-corps","media"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sv-date.md","filePath":"entities/sv-date.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sv-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="s-v-date" tabindex="-1">S.V. Date <a class="header-anchor" href="#s-v-date" aria-label="Permalink to &quot;S.V. Date&quot;">​</a></h1><p>S.V. Date is a correspondent for <a href="/entities/huffpost">HuffPost</a> who covers the White House. In October 2025 he was publicly rebuked by White House press secretary <a href="/entities/karoline-leavitt">Karoline Leavitt</a>, who characterized him as a &quot;left-wing hack&quot; that &quot;constantly bombards&quot; her phone with questions.[1]</p><h2 id="budapest-exchange" tabindex="-1">Budapest exchange <a class="header-anchor" href="#budapest-exchange" aria-label="Permalink to &quot;Budapest exchange&quot;">​</a></h2><p>Date had texted Leavitt asking whether President <a href="/entities/donald-trump">Donald Trump</a> was &quot;aware of the significance of Budapest&quot; when he agreed to meet Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> in the Hungarian capital for peace talks in the coming weeks.[1] He followed with, &quot;Does he not see why Ukraine might object to that site? Who suggested Budapest?&quot;, noting that the city was where Ukraine agreed in 1994 to surrender the nuclear weapons it had inherited from the Soviet Union in exchange for Russian assurances against the use of military force or economic coercion — the <a href="/concepts/budapest-memorandum">Budapest Memorandum</a>.[1]</p><p>Leavitt answered, &quot;Your mom did.&quot; Date replied, &quot;Is this funny to you?&quot;[1] Leavitt subsequently released the text messages, and the exchange circulated widely.[1] Badlands writers used the episode to argue for the return of public shaming as a legitimate response to what they view as bad-faith journalism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sv-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const svDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  svDate as default
};
