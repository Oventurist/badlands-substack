import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ross Perot","description":"","frontmatter":{"title":"Ross Perot","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["politics","third-party","1992-election","media-bias"],"sources":["raw/badlands-news-brief-19a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ross-perot.md","filePath":"entities/ross-perot.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ross-perot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ross-perot" tabindex="-1">Ross Perot <a class="header-anchor" href="#ross-perot" aria-label="Permalink to &quot;Ross Perot&quot;">​</a></h1><p>Ross Perot was an American businessman who ran as a third-party candidate in the 1992 United States presidential election.[1]</p><h2 id="role-in-badlands-media-criticism" tabindex="-1">Role in Badlands media criticism <a class="header-anchor" href="#role-in-badlands-media-criticism" aria-label="Permalink to &quot;Role in Badlands media criticism&quot;">​</a></h2><p>In the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, <a href="/entities/ashe-in-america">Ashe in America</a> recounted that as a young teen she recognized the overt bias of news organizations during the 1992 campaign, when authoritative media mocked voters who were considering Perot, insisting that &quot;only a fool would throw away their vote on a third party candidate.&quot;[1] Her parents voted for Perot, and the episode became a formative moment that solidified her desire to become a journalist.[1]</p><p>She recalled arguing in a 1995 journalism-school entrance essay that Headline News would prove the downfall of an informed American populace, because once audiences are convinced they can get the truth from a headline, whoever writes the headlines defines what is true.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ceasefires, Olive Branches ... and Scare Events?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ross-perot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rossPerot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rossPerot as default
};
