import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ezra Cohen Watnick","description":"","frontmatter":{"title":"Ezra Cohen Watnick","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","intelligence","department-of-justice","trump-administration"],"sources":["raw/america-for-sale-part-2.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/ezra-cohen-watnick.md","filePath":"entities/ezra-cohen-watnick.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ezra-cohen-watnick.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ezra-cohen-watnick" tabindex="-1">Ezra Cohen Watnick <a class="header-anchor" href="#ezra-cohen-watnick" aria-label="Permalink to &quot;Ezra Cohen Watnick&quot;">​</a></h1><p>Ezra Cohen Watnick is an American intelligence official who served on the National Security Council early in the first administration of <a href="/entities/donald-trump">Donald Trump</a>. The Badlands Media essay <a href="/concepts/america-for-sale-part-2">America for Sale — Part 2</a> identifies him as the person who briefed congressmen <a href="/entities/bob-goodlatte">Bob Goodlatte</a> and <a href="/entities/trey-gowdy">Trey Gowdy</a> on classified intelligence concerning the <a href="/entities/department-of-justice">DOJ</a> and <a href="/entities/fbi">FBI</a>.</p><p>The identification is offered as the answer to a question posed in Q drop 2462: &quot;Who briefed GOODLATTE &amp; Gowdy on classified intel re: DOJ &amp; FBI?&quot; According to the article, Watnick was General Michael Flynn&#39;s right-hand man, and Trump personally prevented National Security Adviser H.R. McMaster from firing him. After Watnick had gathered sufficient evidence, the essay claims, Trump installed him at the Justice Department for the express purpose of transmitting that classified intelligence to Goodlatte and Gowdy for their congressional investigations. The author states that this evidence is now in the public record and &quot;will be revealed at the perfect time,&quot; and refers readers to his earlier article &quot;We Won&#39;t Forget&quot; for a fuller treatment. These claims are interpretive and contested.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-2" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ezra-cohen-watnick.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ezraCohenWatnick = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ezraCohenWatnick as default
};
