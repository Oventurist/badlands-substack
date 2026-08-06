import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nick Brown","description":"","frontmatter":{"title":"Nick Brown","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["washington-state","attorney-general","journalism","fraud"],"sources":["raw/badlands-brief.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nick-brown.md","filePath":"entities/nick-brown.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nick-brown.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nick-brown" tabindex="-1">Nick Brown <a class="header-anchor" href="#nick-brown" aria-label="Permalink to &quot;Nick Brown&quot;">​</a></h1><p>Nick Brown is the Attorney General of Washington state.[1]</p><h2 id="warning-to-citizen-journalists" tabindex="-1">Warning to citizen journalists <a class="header-anchor" href="#warning-to-citizen-journalists" aria-label="Permalink to &quot;Warning to citizen journalists&quot;">​</a></h2><p>At the turn of 2026, Brown issued a warning to citizen journalists investigating alleged fraud at Somali-run daycare facilities, stating that uninvited visits, recording, or conduct perceived as harassment could lead to legal consequences, including potential hate-crime-related charges.[1] The warning followed complaints from daycare providers about harassment and safety concerns, and came as independent journalist <a href="/entities/nick-shirley">Nick Shirley</a> prepared a follow-up to his childcare fraud investigation.[1]</p><p>Badlands contributor <a href="/entities/burning-bright">Burning Bright</a> treated such warnings as &quot;reverse indicators&quot; — attorneys general threatening hate crime charges against citizen journalists, he argued, act as signals that reinforce the central premise of the reporting they seek to deter.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iran&#39;s MIC, Our Boy Mam, &amp; Monumental Illumination&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nick-brown.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nickBrown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nickBrown as default
};
