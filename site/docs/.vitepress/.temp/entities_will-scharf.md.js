import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Will Scharf","description":"","frontmatter":{"title":"Will Scharf","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["white-house","washington-dc","trump-administration"],"sources":["raw/badlands-brief-a1a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/will-scharf.md","filePath":"entities/will-scharf.md","lastUpdated":null}');
const _sfc_main = { name: "entities/will-scharf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="will-scharf" tabindex="-1">Will Scharf <a class="header-anchor" href="#will-scharf" aria-label="Permalink to &quot;Will Scharf&quot;">​</a></h1><p>Will Scharf is chair of the <a href="/entities/national-capital-planning-commission">National Capital Planning Commission</a>, the federal body that reviews construction and planning projects in Washington, D.C.[1]</p><h2 id="role-in-the-white-house-ballroom-approval" tabindex="-1">Role in the White House ballroom approval <a class="header-anchor" href="#role-in-the-white-house-ballroom-approval" aria-label="Permalink to &quot;Role in the White House ballroom approval&quot;">​</a></h2><p>Scharf presided over the commission&#39;s 8-1 vote approving President <a href="/entities/donald-trump">Donald Trump</a>&#39;s plan to build a new <a href="/concepts/white-house-ballroom">White House ballroom</a>.[1] Addressing the volume of public comment the panel received, Scharf said many submissions raised matters outside the commission&#39;s authority — including funding, demolition, and political criticism — and summarized the point by saying, &quot;We are not some sort of free-ranging ballroom justice commission.&quot;[1] The statement served to delimit the panel&#39;s remit to planning and design questions.[1]</p><p>After the vote, Trump publicly thanked the commission on <a href="/entities/truth-social">Truth Social</a>, highlighting the 8-1 margin and noting that Sen. <a href="/entities/rand-paul">Rand Paul</a> had voted in favor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;American Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a1a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a1a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/will-scharf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const willScharf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  willScharf as default
};
