import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Larry Ellison","description":"","frontmatter":{"title":"Larry Ellison","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","tech","trump-ally","ai"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/larry-ellison.md","filePath":"entities/larry-ellison.md","lastUpdated":null}');
const _sfc_main = { name: "entities/larry-ellison.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="larry-ellison" tabindex="-1">Larry Ellison <a class="header-anchor" href="#larry-ellison" aria-label="Permalink to &quot;Larry Ellison&quot;">​</a></h1><p>Larry Ellison is the cofounder of the technology company <a href="/entities/oracle">Oracle</a> and, in the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, is described as &quot;a well-known and very wealthy <a href="/entities/donald-trump">Trump</a> ally and financial supporter.&quot; His son <a href="/entities/david-ellison">David Ellison</a> runs <a href="/entities/skydance-media">Skydance Media</a>, the production company merging with <a href="/entities/paramount-global">Paramount Global</a> — a chain of ownership the article treats as central to a pro-Trump realignment of Hollywood.</p><p>The source notes that Ellison is simultaneously in the news through Project Stargate, Trump&#39;s plan for the United States to invest $500 billion in AI infrastructure in partnership with Oracle, OpenAI and SoftBank, and that Trump suggested either <a href="/entities/elon-musk">Elon Musk</a> or Ellison buy <a href="/entities/tiktok">TikTok</a>. Carlson concludes that &quot;Ellison is a big part of Trump&#39;s plan going forward.&quot;</p><h2 id="the-cia-stooge-allegation" tabindex="-1">The &quot;CIA stooge&quot; allegation <a class="header-anchor" href="#the-cia-stooge-allegation" aria-label="Permalink to &quot;The &quot;CIA stooge&quot; allegation&quot;">​</a></h2><p>The article acknowledges that some within the &quot;truther community,&quot; or people pretending to belong to it, describe Ellison as a <a href="/entities/cia">CIA</a> stooge. Carlson&#39;s response is that &quot;everyone within the American tech space has some past connection to DARPA and/or the CIA,&quot; which in his view does not establish that such figures are currently working against Trump or that they &quot;haven&#39;t had their strings cut.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/larry-ellison.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const larryEllison = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  larryEllison as default
};
