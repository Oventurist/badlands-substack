import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Skydance Media","description":"","frontmatter":{"title":"Skydance Media","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","media","hollywood","corporate"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/skydance-media.md","filePath":"entities/skydance-media.md","lastUpdated":null}');
const _sfc_main = { name: "entities/skydance-media.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="skydance-media" tabindex="-1">Skydance Media <a class="header-anchor" href="#skydance-media" aria-label="Permalink to &quot;Skydance Media&quot;">​</a></h1><p>Skydance Media is an American film and television production company run by <a href="/entities/david-ellison">David Ellison</a>, the son of <a href="/entities/oracle">Oracle</a> cofounder <a href="/entities/larry-ellison">Larry Ellison</a>. In the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, <a href="/entities/erik-carlson">Erik Carlson</a> identifies Skydance as the vehicle through which allies of <a href="/entities/donald-trump">Donald Trump</a> are acquiring control of <a href="/entities/paramount-global">Paramount Global</a>, with which it is in the process of merging.</p><p>The article lists Skydance&#39;s film credits as <em>Top Gun: Maverick</em>, the <em>Mission Impossible</em> franchise and <em>Jack Reacher</em>, noting that the common theme among them is <a href="/entities/tom-cruise">Tom Cruise</a>. Its television output is said to include <em>Reacher</em>, about an ex-military police major who uses his skills to solve crimes, and <em>Jack Ryan</em>, in which a <a href="/entities/cia">CIA</a> analyst goes into the field to save America from foreign threats. Carlson reads this concentration of intelligence-agency and military-heroic programming as a signal that Trump intends to reform rather than dismantle the CIA, and as evidence that Hollywood &quot;has already been infiltrated by Trump&#39;s people.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/skydance-media.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skydanceMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  skydanceMedia as default
};
