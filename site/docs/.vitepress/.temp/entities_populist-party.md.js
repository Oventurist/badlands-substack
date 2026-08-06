import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Populist Party","description":"","frontmatter":{"title":"Populist Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["politics","income-tax","19th-century"],"sources":["raw/1913.md"],"confidence":"low"},"headers":[],"relativePath":"entities/populist-party.md","filePath":"entities/populist-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/populist-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="populist-party" tabindex="-1">Populist Party <a class="header-anchor" href="#populist-party" aria-label="Permalink to &quot;Populist Party&quot;">​</a></h1><p>The Populist Party (People&#39;s Party) is presented in the article as a key political vehicle in the push for a federal income tax and, ultimately, central banking.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>During the late nineteenth century, various groups including the Populist Party favored the establishment of an income tax at the federal level.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> The article asserts that the party was formed by former slave owners in the aftermath of the Civil War and that it demanded a graduated income tax in its 1892 platform, mirroring the Democratic Party led by William Jennings Bryan, who advocated for the income tax law passed in 1894 and proposed an income tax in the 1908 platform.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The article frames this agitation as a response to the <a href="/concepts/long-depression">Long Depression</a>, which it says was damaging the rich and powerful, who therefore needed something to permanently suppress the citizens.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> In 1910, the leaders of the Populist Party convinced <a href="/entities/nelson-aldrich">Nelson W. Aldrich</a>, then leader of the Republican Party, to transform the entire monetary system of the United States — a plan hatched at the <a href="/entities/jekyll-island-club">Jekyll Island Club</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/populist-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const populistParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  populistParty as default
};
