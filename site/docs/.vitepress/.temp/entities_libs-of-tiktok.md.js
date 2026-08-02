import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Libs of TikTok","description":"","frontmatter":{"title":"Libs of TikTok","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["social-media","doxxing","culture-war","independent-media"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/libs-of-tiktok.md","filePath":"entities/libs-of-tiktok.md","lastUpdated":null}');
const _sfc_main = { name: "entities/libs-of-tiktok.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libs-of-tiktok" tabindex="-1">Libs of TikTok <a class="header-anchor" href="#libs-of-tiktok" aria-label="Permalink to &quot;Libs of TikTok&quot;">​</a></h1><p>Libs of TikTok is a popular American social media account, run by <a href="/entities/chaya-raichik">Chaya Raichik</a>, that reposts videos from progressive users as political commentary.</p><h2 id="the-doxxing-episode" tabindex="-1">The doxxing episode <a class="header-anchor" href="#the-doxxing-episode" aria-label="Permalink to &quot;The doxxing episode&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> recounts that <a href="/entities/taylor-lorenz">Taylor Lorenz</a> &quot;gained a greater degree of notoriety with the American Right after she doxed the popular account Libs of TikTok, and then had the audacity to go on a media tour complaining about online harassment in its wake.&quot; The article presents the sequence as emblematic of what it calls the complete inability of journalists like Lorenz &quot;to self reflect or consider whether or not they are deserving of the ire they&#39;ve invited onto themselves,&quot; and as an instance of corporate journalism functioning as thought-policing rather than accountability reporting.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/libs-of-tiktok.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libsOfTiktok = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libsOfTiktok as default
};
