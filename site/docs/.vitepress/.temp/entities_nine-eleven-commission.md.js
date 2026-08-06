import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9/11 Commission","description":"","frontmatter":{"title":"9/11 Commission","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["9-11","congress","investigation"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nine-eleven-commission.md","filePath":"entities/nine-eleven-commission.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nine-eleven-commission.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-11-commission" tabindex="-1">9/11 Commission <a class="header-anchor" href="#_9-11-commission" aria-label="Permalink to &quot;9/11 Commission&quot;">​</a></h1><p>The 9/11 Commission was the body Congress established to investigate government failures surrounding the September 11, 2001 attacks.<a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">[1]</a></p><p>The article introduces the commission as the motive behind <a href="/entities/sandy-berger">Sandy Berger</a>&#39;s removal of classified documents from the National Archives in October 2003: Congress had set up a commission to look into the government&#39;s failures on 9/11, and President <a href="/entities/bill-clinton">Bill Clinton</a> &quot;was really worried about what they would find.&quot;<a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">[1]</a> The documents Berger took detailed how the Clinton administration had responded to the threat of terrorist attacks at the end of 1999.<a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">[1]</a></p><p>What the article argues Clinton feared being revealed was the August 1998 Memorandum of Notification that barred the <a href="/entities/cia">CIA</a> from killing <a href="/entities/osama-bin-laden">Osama Bin Laden</a>, a restriction that former agents said tied their hands when they had him cornered.<a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">[1]</a> Exposure of that memorandum, in the article&#39;s telling, would have laid blame for the attacks that killed thousands of Americans at Clinton&#39;s door.<a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Dereliction of Duty&quot;, URL: <a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-dereliction-of-duty</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nine-eleven-commission.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nineElevenCommission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nineElevenCommission as default
};
