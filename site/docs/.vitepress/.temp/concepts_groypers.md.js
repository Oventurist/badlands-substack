import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Groypers","description":"","frontmatter":{"title":"Groypers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["right-wing","online-movements","israel","maga"],"sources":["raw/badlands-brief-7c6.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/groypers.md","filePath":"concepts/groypers.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/groypers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="groypers" tabindex="-1">Groypers <a class="header-anchor" href="#groypers" aria-label="Permalink to &quot;Groypers&quot;">​</a></h1><p>The Groypers are an online right-wing movement associated with commentator <a href="/entities/nick-fuentes">Nick Fuentes</a>, known for aggressive criticism of establishment conservatism and of U.S. support for <a href="/entities/israel">Israel</a>.[1]</p><h2 id="role-in-2026-controversies" tabindex="-1">Role in 2026 controversies <a class="header-anchor" href="#role-in-2026-controversies" aria-label="Permalink to &quot;Role in 2026 controversies&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> wrote that President <a href="/entities/donald-trump">Donald Trump</a>&#39;s appointment of <a href="/entities/mike-huckabee">Mike Huckabee</a> as ambassador to Israel &quot;triggered Nick Fuentes and the Groypers into the stratosphere,&quot; and argued the appointment was a deliberate signal.[1] He further described the &quot;extra thirsty Groyper brigade&quot; as a target audience for media attacks on <a href="/entities/jared-kushner">Jared Kushner</a>, architect of the <a href="/concepts/abraham-accords">Abraham Accords</a>.[1]</p><p>The movement&#39;s prominence grew after <a href="/entities/tucker-carlson">Tucker Carlson</a> interviewed Fuentes, which prompted backlash and calls for Carlson&#39;s censorship.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Democratization of Narrative Distribution. And a New War with Iran.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/groypers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const groypers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  groypers as default
};
