import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Satoshi Action Fund","description":"","frontmatter":{"title":"Satoshi Action Fund","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bitcoin","advocacy","policy"],"sources":["raw/badlands-news-brief-42e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/satoshi-action-fund.md","filePath":"entities/satoshi-action-fund.md","lastUpdated":null}');
const _sfc_main = { name: "entities/satoshi-action-fund.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="satoshi-action-fund" tabindex="-1">Satoshi Action Fund <a class="header-anchor" href="#satoshi-action-fund" aria-label="Permalink to &quot;Satoshi Action Fund&quot;">​</a></h1><p>The Satoshi Action Fund is a Bitcoin policy advocacy organization co-founded by <a href="/entities/dennis-porter">Dennis Porter</a>, who serves as its chief executive officer.[1]</p><h2 id="role-in-the-strategic-reserve-debate" tabindex="-1">Role in the strategic reserve debate <a class="header-anchor" href="#role-in-the-strategic-reserve-debate" aria-label="Permalink to &quot;Role in the strategic reserve debate&quot;">​</a></h2><p>In July 2024, Porter said that credible sources indicated <a href="/entities/donald-trump">Donald Trump</a> might declare <a href="/concepts/bitcoin">Bitcoin</a> a &quot;strategic reserve asset&quot; at a Bitcoin conference in Nashville, a prospect analysts called a potential watershed moment for the asset.[1] Porter publicly argued that adding Bitcoin to the U.S. Treasury as a strategic reserve was &quot;a no brainer&quot; and that once the United States did so, other nations would follow — the core of the case for a <a href="/concepts/us-bitcoin-strategic-reserve">US Bitcoin strategic reserve</a>.[1] Badlands writer <a href="/entities/burning-bright">Burning Bright</a> connected the speculation to Bitcoin&#39;s price rise following the <a href="/concepts/2024-crowdstrike-global-outage">CrowdStrike global outage</a> and to Trump&#39;s earlier framing of Bitcoin and Bitcoin mining as a national security matter.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Change of Batter, Indeed …&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-42e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-42e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/satoshi-action-fund.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const satoshiActionFund = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  satoshiActionFund as default
};
