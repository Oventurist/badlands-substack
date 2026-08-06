import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Scott Hall","description":"","frontmatter":{"title":"Scott Hall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["georgia","2020-election","fulton-county","coffee-county","rico"],"sources":["raw/badlands-news-brief-881.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/scott-hall.md","filePath":"entities/scott-hall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/scott-hall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scott-hall" tabindex="-1">Scott Hall <a class="header-anchor" href="#scott-hall" aria-label="Permalink to &quot;Scott Hall&quot;">​</a></h1><p>Scott Hall is an Atlanta bail bondsman who became the first of the co-defendants in the Georgia election racketeering case to surrender to authorities.[1]</p><h2 id="role-in-the-georgia-case" tabindex="-1">Role in the Georgia case <a class="header-anchor" href="#role-in-the-georgia-case" aria-label="Permalink to &quot;Role in the Georgia case&quot;">​</a></h2><p>Hall was charged by <a href="/entities/fani-willis">Fulton County District Attorney Fani Willis</a> with crimes related to his alleged involvement in the Coffee County, Georgia, voting systems breach, one of the strands of the sprawling indictment that also named former President <a href="/entities/donald-trump">Donald Trump</a> and seventeen other co-defendants.[1]</p><p>On Tuesday, August 22, 2023, Hall turned himself in at the <a href="/entities/fulton-county">Fulton County</a> jail, becoming the first defendant in the case to do so; reporting treated the mechanics of his surrender as an early signal of how the remaining defendants would be processed.[1] He had signed a bond agreement with Willis the previous day, was given an inmate identification number, and was released after spending roughly an hour at the jail.[1] Coverage suggested his experience would likely demonstrate how most defendants in the case were to be treated.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Walls Are Closing in ... But Not on Us&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-881" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-881</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/scott-hall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scottHall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scottHall as default
};
