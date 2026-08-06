import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Human Artistry Campaign","description":"","frontmatter":{"title":"Human Artistry Campaign","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["artificial-intelligence","copyright","creators","advocacy"],"sources":["raw/badlands-brief-0a2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/human-artistry-campaign.md","filePath":"entities/human-artistry-campaign.md","lastUpdated":null}');
const _sfc_main = { name: "entities/human-artistry-campaign.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="human-artistry-campaign" tabindex="-1">Human Artistry Campaign <a class="header-anchor" href="#human-artistry-campaign" aria-label="Permalink to &quot;Human Artistry Campaign&quot;">​</a></h1><p>The Human Artistry Campaign is an advocacy coalition representing creators and performers in disputes over generative artificial intelligence and intellectual property.[1]</p><h2 id="opposition-to-seedance-2-0" tabindex="-1">Opposition to Seedance 2.0 <a class="header-anchor" href="#opposition-to-seedance-2-0" aria-label="Permalink to &quot;Opposition to Seedance 2.0&quot;">​</a></h2><p>Following <a href="/entities/bytedance">ByteDance</a>&#39;s release of the AI video model <a href="/concepts/seedance-2-0">Seedance 2.0</a> in February 2026, the campaign issued a statement reported by <em>Deadline</em> declaring that &quot;the launch of Seedance 2.0 is an attack on every creator around the world.&quot;[1] It continued: &quot;Stealing human creators&#39; work in an attempt to replace them with AI-generated slop is destructive to our culture: stealing isn&#39;t innovation. These unauthorized <a href="/concepts/deepfake">deepfakes</a> and voice clones of actors violate the most basic aspects of personal autonomy and should be deeply concerning to everyone. Authorities should use every legal tool at their disposal to stop this wholesale theft.&quot;[1]</p><p>The statement amplified cease-and-desist letters already sent to ByteDance by <a href="/entities/disney">Walt Disney</a> and <a href="/entities/paramount-global">Paramount</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Virtual Smash &amp; Grab &amp; Another Impeachment Hoax&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/human-artistry-campaign.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const humanArtistryCampaign = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  humanArtistryCampaign as default
};
