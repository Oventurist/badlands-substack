import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tom Liddy","description":"","frontmatter":{"title":"Tom Liddy","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","attorney","maricopa-county","elections"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/tom-liddy.md","filePath":"entities/tom-liddy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tom-liddy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tom-liddy" tabindex="-1">Tom Liddy <a class="header-anchor" href="#tom-liddy" aria-label="Permalink to &quot;Tom Liddy&quot;">​</a></h1><p>Tom Liddy is an American attorney who served as Civil Division Chief of the <a href="/entities/maricopa-county-attorneys-office">Maricopa County Attorney&#39;s Office</a>, in which capacity he was the county&#39;s chief civil lawyer during the disputed 2022 general election. He is the son of <a href="/entities/g-gordon-liddy">G. Gordon Liddy</a>, the Watergate conspirator and later radio host, and was himself a radio talk show host before entering county service — <a href="/entities/kitty-gillespie">Kitty Gillespie</a> notes in <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> that she &quot;worked with Tom back in the day when he was a radio talk show host,&quot; adding only, &quot;No comment.&quot;</p><h2 id="the-2022-election" tabindex="-1">The 2022 election <a class="header-anchor" href="#the-2022-election" aria-label="Permalink to &quot;The 2022 election&quot;">​</a></h2><p>Liddy was the addressee of the November 19, 2022 letter from Assistant Attorney General <a href="/entities/jennifer-wright">Jennifer Wright</a>, which set out three categories of alleged non-compliance by <a href="/entities/maricopa-county">Maricopa County</a> — ballot-on-demand printer configuration failures at at least 60 voting locations, deficient election-day check-out procedures, and the mishandling of <a href="/concepts/door-3-ballots">&quot;Door 3&quot;</a> ballots — and requested a response before the county submitted its official canvass to the <a href="/entities/arizona-secretary-of-state">Secretary of State</a>.</p><p>Days earlier, on November 18, the Kari Lake War Room account had publicized Liddy&#39;s reply to a volunteer for <a href="/entities/kari-lake">Kari Lake</a> under the caption, &quot;We&#39;ve asked Maricopa County for answers. This is what we get in return.&quot; The post drew over 13,000 likes and became the subject of national reporting on whether Lake&#39;s Republican National Committee lawyer had threatened Liddy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tom-liddy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomLiddy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tomLiddy as default
};
