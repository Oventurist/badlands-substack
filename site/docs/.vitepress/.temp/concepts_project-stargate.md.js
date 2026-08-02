import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Project Stargate","description":"","frontmatter":{"title":"Project Stargate","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["ai","infrastructure","trump","tech-policy"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/project-stargate.md","filePath":"concepts/project-stargate.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/project-stargate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="project-stargate" tabindex="-1">Project Stargate <a class="header-anchor" href="#project-stargate" aria-label="Permalink to &quot;Project Stargate&quot;">​</a></h1><p>Project Stargate is described in the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a> as a plan rolled out by <a href="/entities/donald-trump">Donald Trump</a> for the United States to invest $500 billion in <a href="/concepts/artificial-intelligence">AI</a> infrastructure, in partnership with <a href="/entities/oracle">Oracle</a>, <a href="/entities/openai">OpenAI</a> and <a href="/entities/softbank">SoftBank</a>.</p><p>The article introduces Stargate to establish the prominence of <a href="/entities/larry-ellison">Larry Ellison</a> in the administration&#39;s plans, noting that at the same time Trump suggested either <a href="/entities/elon-musk">Elon Musk</a> or Ellison buy <a href="/entities/tiktok">TikTok</a>. <a href="/entities/erik-carlson">Erik Carlson</a> concludes from this that &quot;Ellison is a big part of Trump&#39;s plan going forward,&quot; a claim that in turn underwrites his broader argument that the Ellison family&#39;s acquisition of <a href="/entities/paramount-global">Paramount Global</a> through <a href="/entities/skydance-media">Skydance Media</a> is politically significant rather than merely commercial.</p><p>Stargate also anchors the essay&#39;s closing argument about AI itself: that &quot;just because AI can be used for evil, it doesn&#39;t mean it can&#39;t also be used to do good,&quot; and that America rather than its adversaries should be the power &quot;wielding the AI sword.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/project-stargate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectStargate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  projectStargate as default
};
