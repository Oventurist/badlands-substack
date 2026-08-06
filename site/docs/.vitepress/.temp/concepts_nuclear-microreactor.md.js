import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nuclear Microreactor","description":"","frontmatter":{"title":"Nuclear Microreactor","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["nuclear","energy","defense","technology"],"sources":["raw/badlands-brief-0a2.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/nuclear-microreactor.md","filePath":"concepts/nuclear-microreactor.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/nuclear-microreactor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nuclear-microreactor" tabindex="-1">Nuclear Microreactor <a class="header-anchor" href="#nuclear-microreactor" aria-label="Permalink to &quot;Nuclear Microreactor&quot;">​</a></h1><p>A nuclear microreactor is a small, transportable reactor designed to supply power to remote or military locations. The <a href="/entities/pentagon">Department of War</a> has pursued such systems through a demonstration program intended to prove that reactors can be safely relocated in the field.[1]</p><h2 id="first-air-transport-february-2026" tabindex="-1">First air transport, February 2026 <a class="header-anchor" href="#first-air-transport-february-2026" aria-label="Permalink to &quot;First air transport, February 2026&quot;">​</a></h2><p>In February 2026 the United States conducted its first air transport of a nuclear microreactor prototype, a joint <a href="/entities/department-of-energy">Department of Energy</a> and Department of War operation. The demonstration established that the reactor system can be safely moved by aircraft.[1]</p><p>The program traces to an executive order signed by <a href="/entities/donald-trump">Donald Trump</a> on May 23, 2025 directing the deployment of advanced nuclear reactor technologies for national security purposes.[1] Energy Secretary <a href="/entities/chris-wright">Chris Wright</a> called the flight &quot;the next chapter for U.S. energy&quot; and cast it as fulfillment of Trump&#39;s energy dominance pledge.[1]</p><h2 id="strategic-context" tabindex="-1">Strategic context <a class="header-anchor" href="#strategic-context" aria-label="Permalink to &quot;Strategic context&quot;">​</a></h2><p>The test occurred as nuclear &quot;arms race&quot; rhetoric intensified following the expiration of the <a href="/concepts/new-start-treaty">New START</a> treaty, which Senator <a href="/entities/tom-cotton">Tom Cotton</a> described in <em>The Wall Street Journal</em> as an overdue correction rather than a diplomatic failure. No new nuclear weapons policy accompanied the demonstration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Virtual Smash &amp; Grab &amp; Another Impeachment Hoax&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/nuclear-microreactor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nuclearMicroreactor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nuclearMicroreactor as default
};
