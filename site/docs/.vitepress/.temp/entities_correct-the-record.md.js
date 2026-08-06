import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Correct the Record","description":"","frontmatter":{"title":"Correct the Record","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["super-pac","politics","social-media","2016-election"],"sources":["raw/a-cancer-on-modern-journalism.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/correct-the-record.md","filePath":"entities/correct-the-record.md","lastUpdated":null}');
const _sfc_main = { name: "entities/correct-the-record.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="correct-the-record" tabindex="-1">Correct the Record <a class="header-anchor" href="#correct-the-record" aria-label="Permalink to &quot;Correct the Record&quot;">​</a></h1><p>Correct the Record was a super PAC created by <a href="/entities/david-brock">David Brock</a> at a cost of millions of dollars, with the purpose of scouring the internet and confronting anyone who posted unflattering comments about <a href="/entities/hillary-clinton">Hillary Clinton</a>.<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a></p><p>The <em>Los Angeles Times</em> reported in May 2016 that Clinton&#39;s well-heeled backers had &quot;opened a new frontier in digital campaigning, one that seems to have been inspired by some of the Internet&#39;s worst instincts,&quot; describing Correct the Record as a super PAC coordinating with the Clinton campaign and spending some $1 million to find and confront social media users posting unflattering messages about the Democratic front-runner.<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a> The paper concluded that the effort &quot;aims to spend a large sum of money to increase the amount of trolling that already exists online.&quot;<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a></p><p>Badlands Media presents the operation as part of the same infrastructure as <a href="/entities/media-matters">Media Matters</a> — a media pressure apparatus built to defend the Democratic establishment.<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Cancer on Modern Journalism&quot;, URL: <a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-cancer-on-modern-journalism</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/correct-the-record.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const correctTheRecord = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  correctTheRecord as default
};
