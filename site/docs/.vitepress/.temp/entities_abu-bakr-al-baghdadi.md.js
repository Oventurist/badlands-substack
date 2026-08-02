import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Abu Bakr al-Baghdadi","description":"","frontmatter":{"title":"Abu Bakr al-Baghdadi","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["isis","iraq","syria","terrorism"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/abu-bakr-al-baghdadi.md","filePath":"entities/abu-bakr-al-baghdadi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/abu-bakr-al-baghdadi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="abu-bakr-al-baghdadi" tabindex="-1">Abu Bakr al-Baghdadi <a class="header-anchor" href="#abu-bakr-al-baghdadi" aria-label="Permalink to &quot;Abu Bakr al-Baghdadi&quot;">​</a></h1><p>Abu Bakr al-Baghdadi (1971–2019) was the leader of the Islamic State of Iraq and Syria (ISIS). In the Badlands Media article &quot;A Conflict of Interest,&quot; al-Baghdadi is cited as the recipient of covert U.S. taxpayer funding funneled through intermediaries such as <a href="/entities/mouza-moustafa">Mouza Moustafa</a> and <a href="/entities/john-mccain">John McCain</a>.</p><p>According to the article, Moustafa served as the &quot;go-between&quot; for McCain and al-Baghdadi, and McCain traveled to Syria in 2013 to meet with ISIS leaders. The source claims that President <a href="/entities/barack-obama">Barack Obama</a> gave these groups his &quot;full approval and blessing,&quot; and that <a href="/entities/hillary-clinton">Hillary Clinton</a> was similarly complicit in the effort to fund and arm ISIS. The article asserts that the U.S. government was simultaneously funding ISIS and claiming to fight it, creating a deliberately contradictory public narrative designed to conceal the covert operation.</p><p>The source does not provide independent verification of the direct meeting between McCain and al-Baghdadi but treats the claim as established fact within its broader framework of systemic corruption. It frames al-Baghdadi as part of the network of &quot;enemies&quot; funded by taxpayer theft, whose activities were enabled by senior U.S. officials acting in what the article describes as a conflict of interest between their public duties and their private allegiances.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/abu-bakr-al-baghdadi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const abuBakrAlBaghdadi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  abuBakrAlBaghdadi as default
};
