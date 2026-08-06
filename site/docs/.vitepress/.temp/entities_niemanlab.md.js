import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NiemanLab","description":"","frontmatter":{"title":"NiemanLab","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","harvard","media-criticism"],"sources":["raw/badlands-brief-740.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/niemanlab.md","filePath":"entities/niemanlab.md","lastUpdated":null}');
const _sfc_main = { name: "entities/niemanlab.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="niemanlab" tabindex="-1">NiemanLab <a class="header-anchor" href="#niemanlab" aria-label="Permalink to &quot;NiemanLab&quot;">​</a></h1><p>NiemanLab is the journalism-industry publication of the Nieman Foundation at Harvard University, covering the business, ethics and technology of news.[1]</p><h2 id="the-atlantic-measles-fiction-story" tabindex="-1">The Atlantic measles fiction story <a class="header-anchor" href="#the-atlantic-measles-fiction-story" aria-label="Permalink to &quot;The Atlantic measles fiction story&quot;">​</a></h2><p>In February 2026, NiemanLab writer <a href="/entities/laura-hazard-owen">Laura Hazard Owen</a> published the account that revealed a viral <a href="/entities/the-atlantic">Atlantic</a> essay by <a href="/entities/elizabeth-bruenig">Elizabeth Bruenig</a> — narrated as a mother&#39;s first-hand experience of her unvaccinated 11-month-old dying of measles — to be a work of fiction built on a composite character.[1] Owen described her own conflicted reaction and questioned whether vaccine-skeptical readers would dismiss the piece as fake.[1] Coverage by <a href="/entities/zerohedge">ZeroHedge</a> carried the finding into wider circulation.[1]</p><p>The episode was cited by <a href="/entities/ashe-in-america">Ashe in America</a> as a rare case of mainstream, institution-aligned journalists holding one of their own to account, even while she criticized the underlying assumption that such essays could change minds.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Aliens. A Fake Kid Dies From Fake Measles. And the Princely Prosecution That Was Promised.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-740" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-740</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/niemanlab.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const niemanlab = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  niemanlab as default
};
