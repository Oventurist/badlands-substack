import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HuffPost","description":"","frontmatter":{"title":"HuffPost","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","white-house-press-corps"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/huffpost.md","filePath":"entities/huffpost.md","lastUpdated":null}');
const _sfc_main = { name: "entities/huffpost.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="huffpost" tabindex="-1">HuffPost <a class="header-anchor" href="#huffpost" aria-label="Permalink to &quot;HuffPost&quot;">​</a></h1><p>HuffPost is an American online news outlet whose White House correspondents cover the daily activity of the executive branch and the press briefing room. In October 2025 the outlet became the subject of a widely circulated exchange with the Trump administration when its correspondent S.V. Date texted questions to White House press secretary <a href="/entities/karoline-leavitt">Karoline Leavitt</a> and she made the exchange public.[1]</p><h2 id="october-2025-dispute-with-the-white-house" tabindex="-1">October 2025 dispute with the White House <a class="header-anchor" href="#october-2025-dispute-with-the-white-house" aria-label="Permalink to &quot;October 2025 dispute with the White House&quot;">​</a></h2><p>Leavitt accused Date of being a &quot;left-wing hack&quot; who &quot;constantly bombards&quot; her phone, after sharing a question the reporter had texted her the previous week.[1] The question concerned whether President <a href="/entities/donald-trump">Donald Trump</a> was &quot;aware of the significance of Budapest&quot; when he agreed to meet Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> in the Hungarian capital for peace talks, and whether Ukraine might object to that venue given the 1994 <a href="/concepts/budapest-memorandum">Budapest Memorandum</a>.[1] Leavitt&#39;s reply — &quot;Your mom did,&quot; in response to the question of who had suggested Budapest — became the episode&#39;s most quoted line, and Date&#39;s follow-up was &quot;Is this funny to you?&quot;[1]</p><p>Badlands commentary treated the exchange approvingly, framing it as an example of the kind of direct public confrontation that the outlet&#39;s writers argue has been missing from conservative engagement with legacy media.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/huffpost.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const huffpost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  huffpost as default
};
