import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Leon Panetta","description":"","frontmatter":{"title":"Leon Panetta","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["secretary-of-defense","cia","benghazi"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/leon-panetta.md","filePath":"entities/leon-panetta.md","lastUpdated":null}');
const _sfc_main = { name: "entities/leon-panetta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="leon-panetta" tabindex="-1">Leon Panetta <a class="header-anchor" href="#leon-panetta" aria-label="Permalink to &quot;Leon Panetta&quot;">​</a></h1><p>Leon Panetta served as Secretary of Defense under <a href="/entities/barack-obama">President Obama</a> from 2011 to 2013, and previously as Director of the <a href="/entities/cia">CIA</a> from 2009 to 2011. In the Badlands Media article &quot;A Dereliction of Duty,&quot; Panetta is identified as the Secretary of Defense who was present at the White House on the night of the September 11, 2012 Benghazi attack.</p><p>According to the article, Panetta was in the White House meeting with Obama, the Chairman of the Joint Chiefs of Staff, and the National Security Advisor when the attack on the U.S. consulate in <a href="/concepts/benghazi">Benghazi</a> was underway. The source cites The Hill, noting that Panetta testified that at 6pm he had identified &quot;three distinct capabilities&quot; to deploy to Benghazi, and by 7pm he &quot;issued the order to deploy the identified assets.&quot;</p><p>The article claims that despite this order, the military assets were never deployed. It asserts that the order was obstructed by <a href="/entities/hillary-clinton">Hillary Clinton</a>, who convened a deputies meeting at 7:30 pm while Obama and Panetta were absent. According to the source, Clinton&#39;s apparent &quot;first concern&quot; was the diplomatic impact a rescue mission might have with the Libyan government, and her State Department emphasized that any deployment of U.S. forces into Libya needed approval from the Libyan government.</p><p>The article frames Panetta as a participant in the cover-up, claiming that his presence at the White House meeting and subsequent disappearance from the scene was a &quot;classic cover your ass political play&quot; designed to ensure he would not take the blame for the failure to respond. It asserts that the military was ready to respond but was never given the order because the Obama administration was more concerned with protecting the covert weapons operation than with saving American lives.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/leon-panetta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leonPanetta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  leonPanetta as default
};
