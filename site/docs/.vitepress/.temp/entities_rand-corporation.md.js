import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RAND Corporation","description":"","frontmatter":{"title":"RAND Corporation","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["think-tank","military-industrial-complex","war-planning"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/rand-corporation.md","filePath":"entities/rand-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rand-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rand-corporation" tabindex="-1">RAND Corporation <a class="header-anchor" href="#rand-corporation" aria-label="Permalink to &quot;RAND Corporation&quot;">​</a></h1><p>The RAND Corporation is an American research organisation closely associated with U.S. defence planning and strategic modelling.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>In the Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a>, <a href="/entities/matthew-ehret">Matthew Ehret</a> writes that &quot;some Rand Corp think tankers and representatives of the military industrial complex may believe a new world war is an exciting prospect,&quot; and even a winnable endeavour according to their computer-modelled scenarios. The article links this outlook to reporting on a Palantir executive urging Americans to prepare for a three-front war with Russia, China and Iran.</p><p>Ehret rejects the assessment, arguing that &quot;such a war could never be won.&quot; He points to next-generation hypersonic missile technologies unveiled by Russia and China, including underwater drones, as demonstrating that a first-strike monopoly by <a href="/entities/nato">NATO</a> is a pipe dream and that no attack on either power could occur without retaliation destroying every major Western city.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rand-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const randCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  randCorporation as default
};
