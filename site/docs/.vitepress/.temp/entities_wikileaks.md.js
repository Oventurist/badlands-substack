import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WikiLeaks","description":"","frontmatter":{"title":"WikiLeaks","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["wikileaks","leaks","podesta-emails","transparency"],"sources":["raw/america-for-sale-part-3.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/wikileaks.md","filePath":"entities/wikileaks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wikileaks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wikileaks" tabindex="-1">WikiLeaks <a class="header-anchor" href="#wikileaks" aria-label="Permalink to &quot;WikiLeaks&quot;">​</a></h1><p>WikiLeaks is the publishing organisation known for releasing large caches of classified and private documents. In the Badlands Media essay <a href="/concepts/america-for-sale-part-3">America for Sale — Part 3</a> it appears as the source of the evidence underpinning the article&#39;s account of <a href="/entities/bill-clinton">Bill Clinton</a>&#39;s 2009 mission to <a href="/entities/north-korea">North Korea</a>.</p><p>According to <a href="/entities/buzzfeed">BuzzFeed News</a>, quoted in the article, a memo describing the meeting between Clinton and <a href="/entities/kim-jong-il">Kim Jong Il</a> was &quot;discovered attached to an email sent to <a href="/entities/john-podesta">John Podesta</a>, who accompanied Clinton on his mission.&quot; Podesta, a former White House chief of staff under Clinton and then head of the Center for American Progress, was at the time of publication serving as campaign chair for <a href="/entities/hillary-clinton">Hillary Clinton</a>&#39;s presidential campaign. BuzzFeed noted that &quot;WikiLeaks has been slowly publishing emails from Podesta&#39;s account, which researchers believe was hacked by Russian hackers.&quot;</p><p>The Badlands author treats the leaked memo — in which Kim invited Clinton to &quot;return often, officially and unofficially&quot; and to holiday in the DPRK — as proof that the friendly relationship between the two men was never meant to become public, and that the hostage negotiation was a cover story.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wikileaks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wikileaks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wikileaks as default
};
