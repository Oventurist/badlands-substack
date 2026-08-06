import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zachary Taylor","description":"","frontmatter":{"title":"Zachary Taylor","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["president","american-history","whig-party"],"sources":["raw/avoiding-wwiii.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/zachary-taylor.md","filePath":"entities/zachary-taylor.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zachary-taylor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zachary-taylor" tabindex="-1">Zachary Taylor <a class="header-anchor" href="#zachary-taylor" aria-label="Permalink to &quot;Zachary Taylor&quot;">​</a></h1><p><strong>Zachary Taylor</strong> was the twelfth president of the United States, whose 1848 election <a href="/entities/matthew-ehret">Matthew Ehret</a> describes as the second important victory of the nationalist grouping that had rallied for decades around the Whig Party of <a href="/entities/john-quincy-adams">John Quincy Adams</a>.[1]</p><h2 id="presidency-and-death" tabindex="-1">Presidency and death <a class="header-anchor" href="#presidency-and-death" aria-label="Permalink to &quot;Presidency and death&quot;">​</a></h2><p>Taylor followed <a href="/entities/william-henry-harrison">William Harrison</a>, and Ehret asserts that both Whig presidents were poisoned.[1] He notes with evident scepticism that the official cause of Taylor&#39;s death was &quot;too many cherries and cold milk.&quot;[1] Taylor is counted among the five presidents who attempted to revive America&#39;s nationalist system in the six decades after the Second National Bank was killed in 1836 and who died in office.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>The killing of the 2nd National Bank in 1836 followed a mass propaganda campaign that convinced a duped mob it was an instrument of tyranny in America; over the following six decades the only five presidents to make serious efforts toward reviving the nationalist system all died in office.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Avoiding WWIII&quot;, URL: <a href="https://badlands.substack.com/p/avoiding-wwiii" target="_blank" rel="noreferrer">https://badlands.substack.com/p/avoiding-wwiii</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zachary-taylor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zacharyTaylor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zacharyTaylor as default
};
