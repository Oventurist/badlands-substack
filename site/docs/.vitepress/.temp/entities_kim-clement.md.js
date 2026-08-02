import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kim Clement","description":"","frontmatter":{"title":"Kim Clement","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","prophecy","christianity","trump"],"sources":["raw/are-we-entering-the-millennial-reign.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/kim-clement.md","filePath":"entities/kim-clement.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kim-clement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kim-clement" tabindex="-1">Kim Clement <a class="header-anchor" href="#kim-clement" aria-label="Permalink to &quot;Kim Clement&quot;">​</a></h1><p><strong>Kim Clement</strong> was a Christian prophet whose prophecies are cited in the Badlands Media feature <a href="/concepts/are-we-entering-the-millennial-reign">&quot;Are We Entering the Millennial Reign?&quot;</a> as one of the &quot;unique&quot; data points supporting its eschatological hypothesis. He died on November 23, 2016.</p><h2 id="prophecies-as-described-in-the-corpus" tabindex="-1">Prophecies as described in the corpus <a class="header-anchor" href="#prophecies-as-described-in-the-corpus" aria-label="Permalink to &quot;Prophecies as described in the corpus&quot;">​</a></h2><p><a href="/entities/patriots-in-progress">Patriots in Progress</a> calls Clement&#39;s prophecies &quot;remarkably accurate&quot; and finds it incredible that he made prophecies about <a href="/entities/donald-trump">Donald Trump</a> becoming president over the course of a decade, likely without ever having met him. The article mentions that Clement referred to a possible meeting in June 2015, but states the author could not confirm it.</p><p>The prophecy singled out for discussion is Clement&#39;s statement that &quot;Trump shall become a trumpet.&quot; The author asks whether this was a reference to one of the seven trumpets of the <a href="/concepts/book-of-revelation">book of Revelation</a>, whose judgments feature centrally in the article&#39;s reading of <a href="/concepts/great-tribulation">the Tribulation</a>. He also notes with interest Clement&#39;s mention of a &quot;brilliant plan&quot; that could only be &quot;given by God,&quot; a phrase that resonates within the corpus with <a href="/concepts/q">Q</a>-adjacent language about &quot;the plan.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-we-entering-the-millennial-reign" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kim-clement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kimClement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kimClement as default
};
