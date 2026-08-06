import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank of China","description":"","frontmatter":{"title":"Bank of China","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","banking","finance","corruption"],"sources":["raw/badlands-news-brief-688.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bank-of-china.md","filePath":"entities/bank-of-china.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bank-of-china.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bank-of-china" tabindex="-1">Bank of China <a class="header-anchor" href="#bank-of-china" aria-label="Permalink to &quot;Bank of China&quot;">​</a></h1><p>The Bank of China is one of the People&#39;s Republic of China&#39;s largest state-owned commercial banks and a central institution in the country&#39;s financial sector.[1] In Badlands Media coverage it features primarily as the institution formerly headed by <a href="/entities/liu-liange">Liu Liange</a>, who served as its chairman for four years until resigning in March 2023 — weeks before Chinese authorities disclosed that he was facing corruption charges.[1]</p><h2 id="corruption-case" tabindex="-1">Corruption case <a class="header-anchor" href="#corruption-case" aria-label="Permalink to &quot;Corruption case&quot;">​</a></h2><p>In November 2024, Xinhua News Agency reported that Liu had received a suspended death sentence for accepting bribes worth nearly $17 million and for illegally issuing loans while at the bank.[1] The case was presented as part of a broader anti-corruption crackdown ordered by <a href="/entities/xi-jinping">Xi Jinping</a> across China&#39;s approximately $60 trillion financial sector, a campaign that had already produced a suspended death sentence for former deputy central bank governor <a href="/entities/fan-yifei">Fan Yifei</a> in October 2024.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p><a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a>, writing in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, used the Bank of China case to argue that Beijing&#39;s willingness to execute corrupt bankers stood in contrast to Western practice, suggesting half-seriously that America &quot;send all of our corrupt bankers to Beijing,&quot; and reading the crackdown as consistent with the <a href="/concepts/sovereign-alliance">sovereign alliance</a> thesis.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Threats, Panic and Signal in the Engineered Noise&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-688" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-688</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bank-of-china.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankOfChina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankOfChina as default
};
