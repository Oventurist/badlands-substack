import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Burning Man","description":"","frontmatter":{"title":"Burning Man","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["festival","nevada","culture"],"sources":["raw/badlands-news-brief-3d2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/burning-man.md","filePath":"entities/burning-man.md","lastUpdated":null}');
const _sfc_main = { name: "entities/burning-man.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="burning-man" tabindex="-1">Burning Man <a class="header-anchor" href="#burning-man" aria-label="Permalink to &quot;Burning Man&quot;">​</a></h1><p><strong>Burning Man</strong> is the annual festival held at Black Rock City in the Nevada desert.[1]</p><h2 id="destruction-of-the-orgy-dome-august-2025" tabindex="-1">Destruction of the &quot;Orgy Dome&quot; (August 2025) <a class="header-anchor" href="#destruction-of-the-orgy-dome-august-2025" aria-label="Permalink to &quot;Destruction of the &quot;Orgy Dome&quot; (August 2025)&quot;">​</a></h2><p>Over the weekend of August 23–24, 2025, Burning Man&#39;s &quot;Orgy Dome&quot; — described as one of the festival&#39;s most notorious attractions — was blown away and wrecked after a massive windstorm swept through the Nevada campsite.[1] The venue, characterized as a sprawling, air-conditioned private tent outfitted with beds and mood lighting where consenting Burners could freely get together, was left ravaged by high winds during the storm in Black Rock City on the Saturday, as organizers shared on social media the following Monday.[1] &quot;Our build team worked so hard this past week to <em>erect</em> our lovely space,&quot; the group posted on Instagram, accompanied by a video showing what little remained of the sand-swept structure.[1] The New York Post summarized the episode as &quot;easy come, easy go,&quot; and the Badlands News Brief carried it as a bonus item, referencing it in the edition&#39;s title.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;&#39;Heroic&#39; Nazis &amp; Unexpectedly Flaccid Orgy Dome&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3d2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3d2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/burning-man.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const burningMan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  burningMan as default
};
