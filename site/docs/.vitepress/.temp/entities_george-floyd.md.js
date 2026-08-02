import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"George Floyd","description":"","frontmatter":{"title":"George Floyd","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["george-floyd","blm","race-riots","staged-events",2020],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/george-floyd.md","filePath":"entities/george-floyd.md","lastUpdated":null}');
const _sfc_main = { name: "entities/george-floyd.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="george-floyd" tabindex="-1">George Floyd <a class="header-anchor" href="#george-floyd" aria-label="Permalink to &quot;George Floyd&quot;">​</a></h1><p>George Floyd was the black man whose death in police custody in 2020 triggered nationwide Black Lives Matter protests. In the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a>, <a href="/entities/erik-carlson">Erik Carlson</a> treats the Floyd incident as the most recent instance of what he argues is a recurring, engineered pattern of racially divisive events.</p><p>The article characterizes the episode as &quot;very <a href="/entities/rodney-king">Rodney King</a>-like, resulting in a similar reaction,&quot; with BLM protests leading to violence, destruction, and looting. Because the event is close to the present and because so many people now question what they are shown, the source asserts that many readers believe &quot;the Floyd killing was completely staged, or at least, that there&#39;s something not right about it.&quot;</p><p>Floyd occupies the 2020 position in the essay&#39;s proposed thirty-year cycle of manufactured race riots, following the King beating of 1991 and the 1992 Los Angeles riots, the Watts riots of 1965, and the Harlem race riots of 1935. The article attributes the cycle to a <a href="/concepts/cabal">Deep State Cabal</a> playbook premised on the idea that if America went more than thirty years without a racially divisive incident, &quot;racism could possibly start to disappear.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/george-floyd.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const georgeFloyd = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  georgeFloyd as default
};
