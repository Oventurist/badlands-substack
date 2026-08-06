import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ilia Topuria","description":"","frontmatter":{"title":"Ilia Topuria","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ufc","sports","freedom-250"],"sources":["raw/badlands-brief-708.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ilia-topuria.md","filePath":"entities/ilia-topuria.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ilia-topuria.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ilia-topuria" tabindex="-1">Ilia Topuria <a class="header-anchor" href="#ilia-topuria" aria-label="Permalink to &quot;Ilia Topuria&quot;">​</a></h1><p>Ilia Topuria is a mixed martial artist who held the UFC lightweight world championship going into <a href="/concepts/ufc-freedom-250">UFC Freedom 250</a> in June 2026.[1]</p><h2 id="loss-at-freedom-250" tabindex="-1">Loss at Freedom 250 <a class="header-anchor" href="#loss-at-freedom-250" aria-label="Permalink to &quot;Loss at Freedom 250&quot;">​</a></h2><p>Topuria lost the lightweight title to American challenger <a href="/entities/justin-gaethje">Justin Gaethje</a> at the White House event on June 14, 2026, in a bout Badlands commentary described as an amazing match that would &quot;live in infamy.&quot;[1] The card was held on the South Lawn of the <a href="/entities/white-house">White House</a> to mark the United States&#39; 250th anniversary and <a href="/entities/donald-trump">President Donald Trump</a>&#39;s 80th birthday.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;AMERICA IS BACK&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-708" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-708</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ilia-topuria.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iliaTopuria = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  iliaTopuria as default
};
