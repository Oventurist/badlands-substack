import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nimrod","description":"","frontmatter":{"title":"Nimrod","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["babylon","abrahamic-religions","occultism","idolatry"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/nimrod.md","filePath":"entities/nimrod.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nimrod.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nimrod" tabindex="-1">Nimrod <a class="header-anchor" href="#nimrod" aria-label="Permalink to &quot;Nimrod&quot;">​</a></h1><p>Nimrod is the ancient Babylonian king who, according to the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a>, stands as the archetypal antagonist of monotheism. The source states that all three major religions, as well as Greek and Roman historians, describe him as the great-grandson of Noah, a wicked king who claimed to be God, promoted idolatry — including polytheism and blood magic — and constructed the Tower of Babel. In the Quran he is written as having set himself against the will of God.</p><p>Warned by his astrologers that a baby descended from Noah would be born who would end idolatry, Nimrod ordered the slaughter of all newborns in Mesopotamia. The child was <a href="/entities/abraham">abraham</a>, whose mother escaped into the wilderness to give birth.</p><p>When Abraham later confronted him, Nimrod ordered him burned at the stake, fire being one of the principal objects of his godless worship. Abraham emerged unscathed. Fearing for his rule, Nimrod challenged him to a public debate, staging the execution of one prisoner and the pardon of another to demonstrate his own power over life and death, and was undone by Abraham&#39;s question about making the sun rise in the west. He banished Abraham from his kingdom.</p><p>The article connects Nimrod&#39;s Babylon to its wider argument about the <a href="/concepts/bedouin">bedouin</a> oral tradition, noting that Bedouin accounts of ancient Babylon — including the origins of blood magic and the gods worshipped there — entered the Quran without corroboration in the Bible or older texts and were only confirmed by twentieth-century archaeology. The 1832 painting &quot;Nimrod&quot; by David Scott is reproduced in the article.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nimrod.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nimrod = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nimrod as default
};
