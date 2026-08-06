import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Gates","description":"","frontmatter":{"title":"Robert Gates","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cia","pentagon","intelligence","defense-secretary"],"sources":["raw/badlands-news-brief-53d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-gates.md","filePath":"entities/robert-gates.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-gates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-gates" tabindex="-1">Robert Gates <a class="header-anchor" href="#robert-gates" aria-label="Permalink to &quot;Robert Gates&quot;">​</a></h1><p>Robert Gates is a former <a href="/entities/cia">Central Intelligence Agency</a> analyst who rose through the intelligence bureaucracy and later served as Secretary of Defense under both George W. Bush and <a href="/entities/barack-obama">Barack Obama</a>.[1]</p><h2 id="role-in-cia-politicization-claims" tabindex="-1">Role in CIA politicization claims <a class="header-anchor" href="#role-in-cia-politicization-claims" aria-label="Permalink to &quot;Role in CIA politicization claims&quot;">​</a></h2><p>In the account of former CIA officer <a href="/entities/john-gentry">John Gentry</a>, the politicization of the ostensibly non-partisan CIA first became a live issue in the 1990s under Gates, who is alleged to have ordered intelligence reports to be skewed so as to support the political narratives favored by elected officials.[1] Gentry presents this episode as the beginning of a longer trajectory that accelerated sharply during the Obama years, when new structures, policies and incentives were said to have been institutionalized to align the agency&#39;s culture with the administration&#39;s political agenda.[1] Gates&#39;s service as defense secretary across administrations of both parties is cited as evidence of the continuity of the national-security establishment across nominally opposed presidencies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ramaswamy Takes Stock and the War Machine Rumbles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-53d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-53d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-gates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertGates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertGates as default
};
