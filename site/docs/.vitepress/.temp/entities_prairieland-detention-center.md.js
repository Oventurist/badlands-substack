import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Prairieland Detention Center","description":"","frontmatter":{"title":"Prairieland Detention Center","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ice","texas","domestic-terrorism","immigration"],"sources":["raw/badlands-brief-095.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/prairieland-detention-center.md","filePath":"entities/prairieland-detention-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/prairieland-detention-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="prairieland-detention-center" tabindex="-1">Prairieland Detention Center <a class="header-anchor" href="#prairieland-detention-center" aria-label="Permalink to &quot;Prairieland Detention Center&quot;">​</a></h1><p>The Prairieland Detention Center is an <a href="/entities/immigration-and-customs-enforcement">Immigration and Customs Enforcement</a> facility in Alvarado, Texas, and the site of a July 4, 2025 attack that produced the first federal prosecution of an <a href="/entities/antifa">Antifa</a> cell as a coordinated group.[1]</p><h2 id="july-4-2025-attack" tabindex="-1">July 4, 2025 attack <a class="header-anchor" href="#july-4-2025-attack" aria-label="Permalink to &quot;July 4, 2025 attack&quot;">​</a></h2><p>Prosecutors said the incident outside the facility involved fireworks used as explosive devices, vandalism and gunfire directed at responding law enforcement.[1] Alvarado Police Lt. Thomas Gross was shot and injured during the confrontation.[1]</p><p>A federal jury in Fort Worth convicted nine defendants for their roles in the attack.[1] Benjamin Song was convicted of attempted murder and firearms offenses; eight defendants were convicted of charges including rioting, providing material support to terrorists, conspiracy to use explosives and using explosives; and Daniel Sanchez-Estrada and Maricela Rueda were convicted on document-concealment counts tied to the investigation.[1] Sentencing had not been announced at the time of reporting.[1] HSI Dallas Special Agent in Charge Travis Pickard described the case as a historic first federal indictment of a coordinated Antifa cell.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Moves and Countermoves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/prairieland-detention-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prairielandDetentionCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prairielandDetentionCenter as default
};
