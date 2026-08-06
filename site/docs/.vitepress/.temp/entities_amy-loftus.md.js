import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amy Loftus","description":"","frontmatter":{"title":"Amy Loftus","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","sponsor","podcaster","relationships","badlands"],"sources":["raw/badlands-brief-8db.md","raw/badlands-brief-e9a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/amy-loftus.md","filePath":"entities/amy-loftus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amy-loftus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amy-loftus" tabindex="-1">Amy Loftus <a class="header-anchor" href="#amy-loftus" aria-label="Permalink to &quot;Amy Loftus&quot;">​</a></h1><p>Amy Loftus is a songwriter, author and podcaster who teaches about masculine and feminine energies, and who appeared as a sponsor of the <a href="/concepts/badlands-brief">Badlands Brief</a> under the banner &quot;Heal, Marry, &amp; Prosper.&quot;[1]</p><p>Through what are described as Emotional Fitness Memberships and one-to-one sessions, Loftus works with single women to help them step into their feminine energy and, in the framing of her promotional material, allow God to bring the right partner into their life at the right time.[1] Her practice also extends to married clients, whom she coaches on sustaining the relationships they already have.[1]</p><p>Loftus&#39;s &quot;Heal, Marry, &amp; Prosper&quot; sponsorship continued to appear in the Badlands Brief through February 2026.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Hunters Become the Hunted as Traitors Reveal Themselves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-8db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-8db</a></li><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amy-loftus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amyLoftus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amyLoftus as default
};
