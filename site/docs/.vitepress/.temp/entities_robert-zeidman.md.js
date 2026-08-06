import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Zeidman","description":"","frontmatter":{"title":"Robert Zeidman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["election-integrity","litigation","mypillow","2020-election"],"sources":["raw/badlands-news-brief-58e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-zeidman.md","filePath":"entities/robert-zeidman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-zeidman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-zeidman" tabindex="-1">Robert Zeidman <a class="header-anchor" href="#robert-zeidman" aria-label="Permalink to &quot;Robert Zeidman&quot;">​</a></h1><p><strong>Robert Zeidman</strong> is a software engineer from Las Vegas, Nevada, known for taking up <a href="/entities/mike-lindell">Mike Lindell</a>&#39;s &quot;Prove Mike Wrong Challenge,&quot; a contest in which Lindell offered $5 million to anyone who could demonstrate that data he presented did not reflect Chinese interference in the 2020 United States presidential election.[1]</p><h2 id="the-5-million-arbitration-award" tabindex="-1">The $5 million arbitration award <a class="header-anchor" href="#the-5-million-arbitration-award" aria-label="Permalink to &quot;The $5 million arbitration award&quot;">​</a></h2><p>An arbitration panel ruled in Zeidman&#39;s favor in 2023, awarding him the $5 million prize after he disputed the data underlying Lindell&#39;s claims.[1] On July 23, 2025, the U.S. Court of Appeals for the 8th Circuit voided that award, holding that the arbitration panel had overstepped its authority.[1] Lindell, founder of <a href="/entities/mypillow">MyPillow</a>, called the ruling &quot;a great day for our country&quot; and said it &quot;opens the door to getting rid of these electronic voting machines and getting paper ballots, hand-counted.&quot;[1]</p><p>Badlands commentary noted that during Lindell&#39;s <a href="/concepts/coomer-v-lindell">trial brought by Eric Coomer</a> the previous month, Lindell&#39;s attorneys had argued against admitting testimony about the Zeidman dispute precisely because the award was under appeal, warning that the jury could be prejudiced; the judge denied the motion while preserving the issue for appeal, meaning the 8th Circuit&#39;s reversal may strengthen Lindell&#39;s post-trial position.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pardon Probes &amp; Russia Gate Redux&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-58e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-58e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-zeidman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertZeidman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertZeidman as default
};
