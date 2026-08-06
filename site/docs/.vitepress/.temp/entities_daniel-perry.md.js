import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Daniel Perry","description":"","frontmatter":{"title":"Daniel Perry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","pardon","self-defense","blm","veteran"],"sources":["raw/badlands-news-brief-09d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/daniel-perry.md","filePath":"entities/daniel-perry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/daniel-perry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="daniel-perry" tabindex="-1">Daniel Perry <a class="header-anchor" href="#daniel-perry" aria-label="Permalink to &quot;Daniel Perry&quot;">​</a></h1><p>Daniel Perry is a former U.S. Army sergeant who was convicted of murder and sentenced to 25 years in prison for shooting an armed <a href="/entities/black-lives-matter">Black Lives Matter</a> protester who wielded an AK-47, and who was granted a full pardon by Texas Governor <a href="/entities/greg-abbott">Greg Abbott</a> on May 16, 2024.[1]</p><p>Abbott&#39;s proclamation granted Perry a full pardon and restoration of full civil rights of citizenship, and accused Travis County District Attorney <a href="/entities/jose-garza">Jose Garza</a> of directing the lead investigator to withhold exculpatory evidence and of &quot;unethical and biased misuse&quot; of his office in the prosecution.[1]</p><p>The <a href="/entities/texas-board-of-pardons-and-paroles">Texas Board of Pardons and Paroles</a> had earlier that day issued a pardon recommendation, stating that it had &quot;delved into the intricacies&quot; of Perry&#39;s case, reviewing police reports, court records, witness statements, and interviews with people linked to the case, and that it &quot;voted unanimously to recommend a full pardon and restoration of firearm rights.&quot;[1]</p><p>Garza&#39;s office called the board&#39;s decision and the governor&#39;s pardon a &quot;mockery of our legal system,&quot; saying, &quot;Their actions are contrary to the law and demonstrate that there are two classes of people in this state where some lives matter and some lives do not.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Iranian Crashes, Israeli Maneuvers &amp; Trumpian Rhetoric&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/daniel-perry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const danielPerry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  danielPerry as default
};
