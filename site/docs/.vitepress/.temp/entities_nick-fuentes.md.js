import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nick Fuentes","description":"","frontmatter":{"title":"Nick Fuentes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["commentator","groypers","right-wing","israel"],"sources":["raw/badlands-brief-7c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nick-fuentes.md","filePath":"entities/nick-fuentes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nick-fuentes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nick-fuentes" tabindex="-1">Nick Fuentes <a class="header-anchor" href="#nick-fuentes" aria-label="Permalink to &quot;Nick Fuentes&quot;">​</a></h1><p>Nick Fuentes is an American political commentator and the figurehead of the online movement known as the Groypers.[1]</p><h2 id="role-in-the-2026-israel-debate" tabindex="-1">Role in the 2026 Israel debate <a class="header-anchor" href="#role-in-the-2026-israel-debate" aria-label="Permalink to &quot;Role in the 2026 Israel debate&quot;">​</a></h2><p>According to <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> writing in the <a href="/concepts/badlands-brief">Badlands Brief</a>, President <a href="/entities/donald-trump">Donald Trump</a>&#39;s appointment of <a href="/entities/mike-huckabee">Mike Huckabee</a> as U.S. Ambassador to <a href="/entities/israel">Israel</a> — the first major appointment of his administration — &quot;triggered Nick Fuentes and the Groypers into the stratosphere.&quot;[1]</p><p>When <a href="/entities/tucker-carlson">Tucker Carlson</a> later interviewed Fuentes, the decision drew significant public backlash, including calls for Carlson&#39;s censorship; Trump responded by defending the principle that people should have access to all information and make up their own minds.[1] The Badlands commentary argued that Trump had deliberately constructed this dialectic in order to force a national conversation about Israel and Zionism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Democratization of Narrative Distribution. And a New War with Iran.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nick-fuentes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nickFuentes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nickFuentes as default
};
