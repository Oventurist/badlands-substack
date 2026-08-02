import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rasmussen Reports","description":"","frontmatter":{"title":"Rasmussen Reports","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["organization","polling","media","public-opinion"],"sources":["raw/a-hypnotists-take-on-israel-palestine.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/rasmussen-reports.md","filePath":"entities/rasmussen-reports.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rasmussen-reports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rasmussen-reports" tabindex="-1">Rasmussen Reports <a class="header-anchor" href="#rasmussen-reports" aria-label="Permalink to &quot;Rasmussen Reports&quot;">​</a></h1><p><strong>Rasmussen Reports</strong> is an American public-opinion polling firm that conducts and publishes national surveys on politics, current events, and media trust. It is frequently cited in alternative and conservative media, including the <a href="/entities/badlands-media">Badlands Media</a> corpus, as a counterweight to polling produced by legacy institutions.</p><p>In the essay <a href="/concepts/a-hypnotists-take-on-israel-palestine">&quot;A Hypnotist&#39;s Take on Israel, Palestine, and Q&quot;</a>, <a href="/entities/american-hypnotist">American Hypnotist</a> cites Rasmussen for the finding that 58% of Americans believe the media is deliberately misleading them, and for the related survey framing that a majority of voters agree the media are &quot;the enemy of the people.&quot; The author treats the figure as evidence that <a href="/concepts/operation-mockingbird">Mockingbird</a> programming is failing and predicts it will climb drastically in the following months, while cautioning that many respondents likely still exempt their own preferred outlet from the judgment.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-hypnotists-take-on-israel-palestine" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rasmussen-reports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rasmussenReports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rasmussenReports as default
};
