import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brandon Tatum","description":"","frontmatter":{"title":"Brandon Tatum","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["influencer","con-inc","tyler-robinson-case","media"],"sources":["raw/badlands-brief-805.md"],"confidence":"low"},"headers":[],"relativePath":"entities/brandon-tatum.md","filePath":"entities/brandon-tatum.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brandon-tatum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brandon-tatum" tabindex="-1">Brandon Tatum <a class="header-anchor" href="#brandon-tatum" aria-label="Permalink to &quot;Brandon Tatum&quot;">​</a></h1><p>Brandon Tatum, known publicly as &quot;Officer Tatum,&quot; is a conservative commentator and former police officer who covered the preliminary proceedings in the <a href="/entities/tyler-robinson">Tyler Robinson</a> case in July 2026.[1]</p><p>Tatum was named alongside <a href="/entities/benny-johnson">Benny Johnson</a> and <a href="/entities/jack-posobiec">Jack Posobiec</a> as one of the influencers who publicly described a very clear video that they said proved definitively that the shooter was Robinson.[1] Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> reported that the group began retreating from that claim after <a href="/entities/canncon">CannCon</a> found the supposedly secret footage displayed on a defense laptop visible in the CourtTV feed, and identified it as the same video already circulating publicly.[1]</p><p>In Badlands analysis, Tatum&#39;s participation formed part of a broader pattern of <a href="/entities/turning-point-usa">Turning Point USA</a>-aligned influencers pressing for a rapid conviction before the defense had any opportunity to present its case.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brandon-tatum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brandonTatum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brandonTatum as default
};
