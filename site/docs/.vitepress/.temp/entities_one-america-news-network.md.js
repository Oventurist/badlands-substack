import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"One America News Network","description":"","frontmatter":{"title":"One America News Network","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","press-freedom","pentagon","journalism"],"sources":["raw/badlands-news-brief-4cf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/one-america-news-network.md","filePath":"entities/one-america-news-network.md","lastUpdated":null}');
const _sfc_main = { name: "entities/one-america-news-network.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="one-america-news-network" tabindex="-1">One America News Network <a class="header-anchor" href="#one-america-news-network" aria-label="Permalink to &quot;One America News Network&quot;">​</a></h1><p>One America News Network (OAN) is an American cable news outlet that, in October 2025, became the only media organization to sign on to the <a href="/entities/pentagon">Pentagon</a>&#39;s new press credentialing policy under Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a>.[1]</p><h2 id="pentagon-press-policy-of-october-2025" tabindex="-1">Pentagon press policy of October 2025 <a class="header-anchor" href="#pentagon-press-policy-of-october-2025" aria-label="Permalink to &quot;Pentagon press policy of October 2025&quot;">​</a></h2><p>Media organizations were given until the evening of Tuesday, October 14, 2025 to decide whether to accept a policy that sought to limit journalists from seeking out information not approved by Pentagon officials, including unclassified material. OAN accepted the terms; every other major outlet — including Fox News, the major broadcast networks, PBS, the <a href="/entities/associated-press">Associated Press</a>, and The Wall Street Journal — refused to have their correspondents sign the policy as a condition of regular credentials.[1]</p><p>Reporters from the refusing outlets turned in their press badges and cleared their workspaces out of the Pentagon on Wednesday, October 15, with many waiting until the 4 p.m. exit deadline to depart. OAN&#39;s decision left it as effectively the sole credentialed resident outlet under the new rules.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Price Floors, Curveballs, &amp; Benevolent Discrimination&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4cf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4cf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/one-america-news-network.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oneAmericaNewsNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oneAmericaNewsNetwork as default
};
