import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ron Perlman","description":"","frontmatter":{"title":"Ron Perlman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hollywood","actors","labor"],"sources":["raw/badlands-news-brief-47a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ron-perlman.md","filePath":"entities/ron-perlman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ron-perlman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ron-perlman" tabindex="-1">Ron Perlman <a class="header-anchor" href="#ron-perlman" aria-label="Permalink to &quot;Ron Perlman&quot;">​</a></h1><p>Ron Perlman is an American actor, described by the <a href="/entities/associated-press">Associated Press</a> as the &quot;hulking, gravel-voiced&quot; star of &quot;Hellboy.&quot;[1]</p><h2 id="role-in-the-2023-strikes" tabindex="-1">Role in the 2023 strikes <a class="header-anchor" href="#role-in-the-2023-strikes" aria-label="Permalink to &quot;Role in the 2023 strikes&quot;">​</a></h2><p>Perlman became an emblem of the animosity surrounding the <a href="/concepts/2023-hollywood-labor-strikes">2023 Hollywood labor strikes</a> after responding to a report that studios aimed to prolong the strike long enough for writers to lose their homes.[1] Leaning into the camera in a since-deleted Instagram live video, he said, &quot;Listen to me, mother-(expletive). There&#39;s a lot of ways to lose your house.&quot;[1] He later clarified the remarks.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The System of Systems Fades ... and Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-47a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-47a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ron-perlman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ronPerlman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ronPerlman as default
};
