import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jim VandeHei","description":"","frontmatter":{"title":"Jim VandeHei","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","axios","politico"],"sources":["raw/badlands-news-brief-19a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jim-vandehei.md","filePath":"entities/jim-vandehei.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jim-vandehei.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jim-vandehei" tabindex="-1">Jim VandeHei <a class="header-anchor" href="#jim-vandehei" aria-label="Permalink to &quot;Jim VandeHei&quot;">​</a></h1><p>Jim VandeHei is an American media executive and co-founder of both <a href="/entities/axios">Axios</a> and Politico.[1]</p><h2 id="defense-of-the-trump–morning-joe-meeting" tabindex="-1">Defense of the Trump–Morning Joe meeting <a class="header-anchor" href="#defense-of-the-trump–morning-joe-meeting" aria-label="Permalink to &quot;Defense of the Trump–Morning Joe meeting&quot;">​</a></h2><p>After the November 2024 meeting between President-elect <a href="/entities/donald-trump">Donald Trump</a> and the <a href="/entities/morning-joe">Morning Joe</a> hosts <a href="/entities/joe-scarborough">Joe Scarborough</a> and <a href="/entities/mika-brzezinski">Mika Brzezinski</a> drew a furious public reaction, VandeHei defended the hosts on social media, writing: &quot;It is insane for critics to NOT think all of us in the media need to know more so we can share/report more.&quot;[1]</p><p>Associated Press coverage characterized such defenses as sounding &quot;quaint,&quot; on the grounds that Morning Joe is not traditional journalism and that the episode illustrated the broader displacement of impartial fact-finding by opinionated news.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ceasefires, Olive Branches ... and Scare Events?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jim-vandehei.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jimVandehei = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jimVandehei as default
};
