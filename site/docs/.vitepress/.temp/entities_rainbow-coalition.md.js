import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rainbow Coalition","description":"","frontmatter":{"title":"Rainbow Coalition","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["civil-rights","organizations","jesse-jackson"],"sources":["raw/badlands-brief-8db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rainbow-coalition.md","filePath":"entities/rainbow-coalition.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rainbow-coalition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rainbow-coalition" tabindex="-1">Rainbow Coalition <a class="header-anchor" href="#rainbow-coalition" aria-label="Permalink to &quot;Rainbow Coalition&quot;">​</a></h1><p>The Rainbow Coalition is the civil rights advocacy organization founded and led by the Rev. <a href="/entities/jesse-jackson">Jesse Jackson</a>.[1]</p><h2 id="relationship-with-donald-trump" tabindex="-1">Relationship with Donald Trump <a class="header-anchor" href="#relationship-with-donald-trump" aria-label="Permalink to &quot;Relationship with Donald Trump&quot;">​</a></h2><p>In a Truth Social tribute posted after Jackson&#39;s death at age 84 in February 2026, President <a href="/entities/donald-trump">Donald Trump</a> said he had known Jackson well long before entering politics and had helped him along the way, including by providing free office space for the Rainbow Coalition in the Trump Building at 40 Wall Street.[1] Trump said his assistance to Jackson also extended to criminal justice reform, securing long-term funding for Historically Black Colleges and Universities, and supporting Opportunity Zones.[1] Trump described Jackson as &quot;a good man&quot; with &quot;lots of personality, grit, and street smarts&quot; and &quot;a force of nature like few others before him,&quot; and noted Jackson&#39;s uncredited role in helping elect <a href="/entities/barack-obama">Barack Obama</a> despite their personal differences.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Hunters Become the Hunted as Traitors Reveal Themselves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-8db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-8db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rainbow-coalition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rainbowCoalition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rainbowCoalition as default
};
