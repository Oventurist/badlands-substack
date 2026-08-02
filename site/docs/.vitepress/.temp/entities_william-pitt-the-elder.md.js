import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Pitt the Elder","description":"","frontmatter":{"title":"William Pitt the Elder","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["british-empire","parliament","american-revolution","house-of-lords"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/william-pitt-the-elder.md","filePath":"entities/william-pitt-the-elder.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-pitt-the-elder.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-pitt-the-elder" tabindex="-1">William Pitt the Elder <a class="header-anchor" href="#william-pitt-the-elder" aria-label="Permalink to &quot;William Pitt the Elder&quot;">​</a></h1><p>William Pitt the Elder, Lord Chatham, was a British statesman whose death in 1778 became the subject of celebrated paintings by <a href="/entities/benjamin-west">Benjamin West</a> and <a href="/entities/john-singleton-copley">John Singleton Copley</a>. The Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> treats West&#39;s version as a republican critique of empire disguised as homage — one the British elite admired precisely because, in the author&#39;s view, oligarchs are unable to recognize irony.</p><p>The essay notes that the famous scene is apocryphal: Chatham collapsed in Parliament but died 34 days later in his bedroom. More importantly, it recovers the purpose that brought him there. The Duke of Richmond had on March 23 called for the withdrawal of all British troops from the United States after news that France would assist the American cause; the motion was defeated by 56 votes in the House of Lords. On April 5 Chatham came out to fight the bill and the &quot;soft&quot; lords who would let the Americans go free. His April 7, 1778 speech is quoted at length, including: &quot;My Lords, I rejoice that the grave has not closed upon me; that I am still alive to lift up my voice against the dismemberment of this ancient and most noble monarchy!... while I have sense and memory, I will never consent to deprive the royal offspring of the House of Brunswick, the heirs of the Princess Sophia, of their fairest inheritance... Shall a people, that seventeen years ago was the terror of the world, now stoop so low as to tell its ancient inveterate enemy, take all we have, only give us peace? It is impossible!... if we must fall, let us fall like men!&quot;</p><p>He collapsed in a seizure immediately afterward. <a href="/entities/matthew-ehret">Matthew Ehret</a> concludes that the moment marked not only the death of the man but of &quot;the toxic idea that he devoted his life to.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-pitt-the-elder.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamPittTheElder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamPittTheElder as default
};
