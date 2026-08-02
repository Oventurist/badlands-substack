import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brexit","description":"","frontmatter":{"title":"Brexit","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["populism","united-kingdom","anti-establishment","politics"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"concepts/brexit.md","filePath":"concepts/brexit.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/brexit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brexit" tabindex="-1">Brexit <a class="header-anchor" href="#brexit" aria-label="Permalink to &quot;Brexit&quot;">​</a></h1><p>Brexit was the United Kingdom&#39;s referendum decision to withdraw from the <a href="/entities/european-union">European Union</a>. In the Badlands Media corpus it appears chiefly as a marker of the moment when Western populist and anti-establishment sentiment surfaced into open public consciousness.</p><h2 id="role-in-the-media-narrative" tabindex="-1">Role in the media narrative <a class="header-anchor" href="#role-in-the-media-narrative" aria-label="Permalink to &quot;Role in the media narrative&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> argues that internal turbulence had been &quot;simmering in the background of Western society for decades&quot; but &quot;came to the forefront of public consciousness in the wake of both Brexit and the rise of a populist, anti-establishment leader in <a href="/entities/donald-trump">Donald Trump</a>.&quot; The article treats this pairing as the point at which large numbers of ordinary people first perceived the <a href="/concepts/mainstream-media">corporate press</a> as an instrument of social pressure rather than a neutral service — the moment when &quot;the friendly faces of their local news team were suddenly conduits of social pressure.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/brexit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brexit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brexit as default
};
