import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Epic Games","description":"","frontmatter":{"title":"Epic Games","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["antitrust","technology","litigation","app-stores"],"sources":["raw/badlands-news-brief-040.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/epic-games.md","filePath":"entities/epic-games.md","lastUpdated":null}');
const _sfc_main = { name: "entities/epic-games.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="epic-games" tabindex="-1">Epic Games <a class="header-anchor" href="#epic-games" aria-label="Permalink to &quot;Epic Games&quot;">​</a></h1><p>Epic Games is the American video game developer behind <em>Fortnite</em> and the plaintiff in a landmark antitrust suit against <a href="/entities/google">Google</a> over control of the Android app ecosystem.[1]</p><h2 id="litigation-against-google" tabindex="-1">Litigation against Google <a class="header-anchor" href="#litigation-against-google" aria-label="Permalink to &quot;Litigation against Google&quot;">​</a></h2><p>Epic sued Google, accusing it of monopolizing how consumers access applications on Android devices and how they pay for in-app transactions.[1] In 2023 Epic persuaded a San Francisco jury that Google had unlawfully stifled competition through its controls over app distribution and payments.[1] As a remedy, Epic asked the court to require Google to allow consumers to download apps from third-party app stores — including Epic&#39;s own — and from other internet sources, and urged the judge to let developers tell users about alternative in-app payment options.[1]</p><p>The remedies phase was heard by U.S. District Judge <a href="/entities/james-donato">James Donato</a> in San Francisco.[1] The <a href="/entities/federal-trade-commission">Federal Trade Commission</a> filed a friend-of-the-court brief in August 2024 arguing that federal judges &quot;may order whatever relief is necessary to restore the competition eliminated by the illegal conduct,&quot; without endorsing Epic&#39;s specific proposals.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Regime is Totally Winning Amidst Continued Meltdown&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-040" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-040</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/epic-games.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const epicGames = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  epicGames as default
};
