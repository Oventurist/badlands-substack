import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Daily Mail","description":"","frontmatter":{"title":"Daily Mail","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","uk","press","robert-maxwell","israel"],"sources":["raw/badlands-brief-b62.md","raw/badlands-news-brief-378.md"],"confidence":"low"},"headers":[],"relativePath":"entities/daily-mail.md","filePath":"entities/daily-mail.md","lastUpdated":null}');
const _sfc_main = { name: "entities/daily-mail.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="daily-mail" tabindex="-1">Daily Mail <a class="header-anchor" href="#daily-mail" aria-label="Permalink to &quot;Daily Mail&quot;">​</a></h1><p>The Daily Mail is a British newspaper described in Badlands commentary as having been owned by <a href="/entities/robert-maxwell">Robert Maxwell</a>.[1]</p><h2 id="role-in-the-vanunu-affair" tabindex="-1">Role in the Vanunu affair <a class="header-anchor" href="#role-in-the-vanunu-affair" aria-label="Permalink to &quot;Role in the Vanunu affair&quot;">​</a></h2><p>When Maxwell learned in 1985 that Israeli nuclear technician <a href="/entities/mordechai-vanunu">Mordechai Vanunu</a> was shopping evidence of the <a href="/concepts/israeli-nuclear-program">Israeli nuclear program</a> to London news outlets, he had the paper publish several hit pieces designed to discredit and impugn Vanunu&#39;s character.[1] The stories were false but damaging enough to lead many to dismiss Vanunu&#39;s claims as the vindictive acts of a disgruntled scientist.[1]</p><h2 id="reporting-on-the-epstein-filings" tabindex="-1">Reporting on the Epstein filings <a class="header-anchor" href="#reporting-on-the-epstein-filings" aria-label="Permalink to &quot;Reporting on the Epstein filings&quot;">​</a></h2><p>In late December 2023 the Daily Mail reported that former U.S. president <a href="/entities/bill-clinton">Bill Clinton</a> was expected to be named &quot;John Doe 36&quot; when a list of <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a> associates drawn from court filings was made public, and that some 177 people would be identified across hundreds of files in the <a href="/concepts/epstein-court-document-unsealing">court-ordered unsealing</a>.[2] The report was excerpted in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Reckoning of Fake Elections, Fake Wars and Fake Allies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b62</a></li><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/daily-mail.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dailyMail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dailyMail as default
};
