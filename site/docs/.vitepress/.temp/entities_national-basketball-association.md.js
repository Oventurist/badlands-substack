import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Basketball Association","description":"","frontmatter":{"title":"National Basketball Association","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nba","sports","speech","corporate-power"],"sources":["raw/badlands-news-brief-547.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-basketball-association.md","filePath":"entities/national-basketball-association.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-basketball-association.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-basketball-association" tabindex="-1">National Basketball Association <a class="header-anchor" href="#national-basketball-association" aria-label="Permalink to &quot;National Basketball Association&quot;">​</a></h1><p>The National Basketball Association (NBA) is the principal professional basketball league in North America. In Badlands Media coverage the league is treated less as a sports body than as an example of a corporate institution that disciplines the speech of the individuals who work under it.[1]</p><p>The central case is that of <a href="/entities/kyrie-irving">Kyrie Irving</a>, who was suspended by the <a href="/entities/brooklyn-nets">Brooklyn Nets</a> in the 2022–23 season after sharing a documentary described as antisemitic and refusing for several media cycles to apologize. Irving apologized on Instagram only after the suspension was handed down, then quietly deleted the apology after being traded to the <a href="/entities/dallas-mavericks">Dallas Mavericks</a> in February 2023.[1]</p><p>Badlands contributor <a href="/entities/absolutetruth1776">absolutetruth1776</a> read that sequence as showing &quot;how the NBA further seeks to control players and their right to free speech,&quot; on the theory that the apology had been a condition of reinstatement rather than a voluntary statement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: State of Confusion, Kamala Mayhem &amp; Boiled Eggs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-547" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-547</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-basketball-association.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalBasketballAssociation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalBasketballAssociation as default
};
