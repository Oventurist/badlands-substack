import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, renderToString } from "vue/server-renderer";
import { defineComponent, mergeProps, useSSRContext, shallowRef, inject, computed, ref, watch, onUnmounted, reactive, markRaw, readonly, nextTick, h, unref, onMounted, watchEffect, watchPostEffect, onUpdated, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, defineAsyncComponent, provide, toHandlers, withKeys, onBeforeUnmount, useSlots, createSSRApp } from "vue";
import { usePreferredDark, useDark, useMediaQuery, useWindowSize, onKeyStroke, useWindowScroll, useScrollLock } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import * as d3 from "d3";
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", __props.type]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse(`{"lang":"en-US","dir":"ltr","title":"Badlands Wiki","description":"Community-compiled knowledge base of the Badlands Media corpus","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"nav":[{"text":"Home","link":"/"},{"text":"Entities","link":"/entities/"},{"text":"Concepts","link":"/concepts/"},{"text":"Graph","link":"/graph/"}],"sidebar":[{"text":"Entities","collapsible":true,"collapsed":false,"items":[{"text":"101st Airborne Division","link":"/entities/101st-airborne-division"},{"text":"2024 YR4","link":"/entities/2024-yr4"},{"text":"23andMe","link":"/entities/23andme"},{"text":"260th Special Purpose Brigade","link":"/entities/260th-special-purpose-brigade"},{"text":"3rd Separate Assault Brigade","link":"/entities/third-separate-assault-brigade"},{"text":"412 Adel Nero","link":"/entities/412-adel-nero"},{"text":"4th Psychological Operations Group","link":"/entities/4th-psychological-operations-group"},{"text":"60 Minutes","link":"/entities/60-minutes"},{"text":"8VC","link":"/entities/8vc"},{"text":"9/11 Commission","link":"/entities/nine-eleven-commission"},{"text":"Aaron Boone","link":"/entities/aaron-boone"},{"text":"Aaron Bushnell","link":"/entities/aaron-bushnell"},{"text":"Aaron Heitke","link":"/entities/aaron-heitke"},{"text":"Aaron Judge","link":"/entities/aaron-judge"},{"text":"Aaron Lukas","link":"/entities/aaron-lukas"},{"text":"Aaron Maté","link":"/entities/aaron-mate"},{"text":"Aaron Rodgers","link":"/entities/aaron-rodgers"},{"text":"Abbas Araghchi","link":"/entities/abbas-araghchi"},{"text":"Abbas Kamel","link":"/entities/abbas-kamel"},{"text":"Abbe Lowell","link":"/entities/abbe-lowell"},{"text":"ABC News","link":"/entities/abc-news"},{"text":"Abdallah Bou Habib","link":"/entities/abdallah-bou-habib"},{"text":"Abdel Fattah al-Burhan","link":"/entities/abdel-fattah-al-burhan"},{"text":"Abdel Fattah el-Sisi","link":"/entities/abdel-fattah-el-sisi"},{"text":"Abdelhakim Belhadj","link":"/entities/abdelhakim-belhadj"},{"text":"Abdelhakim Belhaj","link":"/entities/abdelhakim-belhaj"},{"text":"Abdourahmane Tchiani","link":"/entities/abdourahmane-tchiani"},{"text":"Abdul El-Sayed","link":"/entities/abdul-el-sayed"},{"text":"Abdul Manan Omari","link":"/entities/abdul-manan-omari"},{"text":"Abdulaziz bin Salman","link":"/entities/abdulaziz-bin-salman"},{"text":"Abdullah Omar Naseef","link":"/entities/abdullah-omar-naseef"},{"text":"Abdussattar Shaikh","link":"/entities/abdussattar-shaikh"},{"text":"Abe Hamadeh","link":"/entities/abe-hamadeh"},{"text":"Abelardo de la Espriella","link":"/entities/abelardo-de-la-espriella"},{"text":"Abercrombie & Fitch","link":"/entities/abercrombie-and-fitch"},{"text":"Abigail Spanberger","link":"/entities/abigail-spanberger"},{"text":"Abraham","link":"/entities/abraham"},{"text":"Abraham Lincoln","link":"/entities/abraham-lincoln"},{"text":"Absolute 1776","link":"/entities/absolute-1776"},{"text":"AbsoluteTruth1776","link":"/entities/absolutetruth1776"},{"text":"Abu Bakr","link":"/entities/abu-bakr"},{"text":"Abu Bakr al-Baghdadi","link":"/entities/abu-bakr-al-baghdadi"},{"text":"Abu Mohammad al-Jolani","link":"/entities/abu-mohammad-al-jolani"},{"text":"Abu-Bilal Al-Manuki","link":"/entities/abu-bilal-al-manuki"},{"text":"Academy of Motion Picture Arts & Sciences","link":"/entities/academy-of-motion-picture-arts-and-sciences"},{"text":"Accountable.US","link":"/entities/accountable-us"},{"text":"Accuracy in Media","link":"/entities/accuracy-in-media"},{"text":"ActBlue","link":"/entities/actblue"},{"text":"Adam Boehler","link":"/entities/adam-boehler"},{"text":"Adam Grant","link":"/entities/adam-grant"},{"text":"Adam Guillette","link":"/entities/adam-guillette"},{"text":"Adam Kinzinger","link":"/entities/adam-kinzinger"},{"text":"Adam Leitman Bailey","link":"/entities/adam-leitman-bailey"},{"text":"Adam Schiff","link":"/entities/adam-schiff"},{"text":"Adeeb Nasir","link":"/entities/adeeb-nasir"},{"text":"Adel Abdulkarim Alabdulkarim","link":"/entities/adel-abdulkarim-alabdulkarim"},{"text":"Adel bin Ahmed Al-Jubeir","link":"/entities/adel-al-jubeir"},{"text":"Adelita Grijalva","link":"/entities/adelita-grijalva"},{"text":"Administrative Office of the U.S. Courts","link":"/entities/administrative-office-of-the-us-courts"},{"text":"Adnan al-Jumaili","link":"/entities/adnan-al-jumaili"},{"text":"ADNOC","link":"/entities/adnoc"},{"text":"Adolf Heusinger","link":"/entities/adolf-heusinger"},{"text":"Adolf Hitler","link":"/entities/adolf-hitler"},{"text":"Adolf Hitler Uunona","link":"/entities/adolf-hitler-uunona"},{"text":"Adrian Fontes","link":"/entities/adrian-fontes"},{"text":"Adrian Paul Aispuro","link":"/entities/adrian-paul-aispuro"},{"text":"Adrienne Watson","link":"/entities/adrienne-watson"},{"text":"Advancing American Freedom","link":"/entities/advancing-american-freedom"},{"text":"Advisory Committee on Immunization Practices (ACIP)","link":"/entities/advisory-committee-on-immunization-practices"},{"text":"Affinity Partners","link":"/entities/affinity-partners"},{"text":"Afghanistan","link":"/entities/afghanistan"},{"text":"AFL-CIO","link":"/entities/afl-cio"},{"text":"African National Congress","link":"/entities/african-national-congress"},{"text":"African Union","link":"/entities/african-union"},{"text":"Afroman","link":"/entities/afroman"},{"text":"Agustin Carstens","link":"/entities/agustin-carstens"},{"text":"Aharon Haliva","link":"/entities/aharon-haliva"},{"text":"Ahmad Tibi","link":"/entities/ahmad-tibi"},{"text":"Ahmed Abu Khatallah","link":"/entities/ahmed-abu-khatallah"},{"text":"Ahmed al-Sharaa","link":"/entities/ahmed-al-sharaa"},{"text":"Ahmed Majdalani","link":"/entities/ahmed-majdalani"},{"text":"Ai Weiwei","link":"/entities/ai-weiwei"},{"text":"Aidar Battalion","link":"/entities/aidar-battalion"},{"text":"Aileen Cannon","link":"/entities/aileen-cannon"},{"text":"Aimee Bock","link":"/entities/aimee-bock"},{"text":"Aimee Harris","link":"/entities/aimee-harris"},{"text":"Aimee Huber","link":"/entities/aimee-huber"},{"text":"Air Force One","link":"/entities/air-force-one"},{"text":"Airbus","link":"/entities/airbus"},{"text":"Aivo Peterson","link":"/entities/aivo-peterson"},{"text":"Al Gore","link":"/entities/al-gore"},{"text":"Al Green","link":"/entities/al-green"},{"text":"Al Jazeera","link":"/entities/al-jazeera"},{"text":"Al Schmidt","link":"/entities/al-schmidt"},{"text":"Al Udeid Air Base","link":"/entities/al-udeid-air-base"},{"text":"Al-Ahli Arab Anglican Hospital","link":"/entities/al-ahli-arab-anglican-hospital"},{"text":"Al-Aqsa Mosque","link":"/entities/al-aqsa-mosque"},{"text":"Al-Haq","link":"/entities/al-haq"},{"text":"Al-Malika","link":"/entities/al-malika"},{"text":"Al-Qaeda","link":"/entities/al-qaeda"},{"text":"Al-Qassam Brigades","link":"/entities/al-qassam-brigades"},{"text":"Al-Shabaab","link":"/entities/al-shabaab"},{"text":"Alameda Research","link":"/entities/alameda-research"},{"text":"Alan Bergman","link":"/entities/alan-bergman"},{"text":"Alan Dershowitz","link":"/entities/alan-dershowitz"},{"text":"Alan Shaw","link":"/entities/alan-shaw"},{"text":"Alan Wilson","link":"/entities/alan-wilson"},{"text":"Alaska Airlines","link":"/entities/alaska-airlines"},{"text":"Alawites","link":"/entities/alawites"},{"text":"Albert Bourla","link":"/entities/albert-bourla"},{"text":"Alberta","link":"/entities/alberta"},{"text":"Alberta Prosperity Project","link":"/entities/alberta-prosperity-project"},{"text":"Alec Baldwin","link":"/entities/alec-baldwin"},{"text":"Alejandro Mayorkas","link":"/entities/alejandro-mayorkas"},{"text":"Alejandro Monteverde","link":"/entities/alejandro-monteverde"},{"text":"Aleksandr Bortnikov","link":"/entities/aleksandr-bortnikov"},{"text":"Aleksandr Khinshtein","link":"/entities/aleksandr-khinshtein"},{"text":"Aleksandr Solzhenitsyn","link":"/entities/aleksandr-solzhenitsyn"},{"text":"Aleksey Danilov","link":"/entities/aleksey-danilov"},{"text":"Aleksey Likhachev","link":"/entities/aleksey-likhachev"},{"text":"Aleksey Rtishchev","link":"/entities/aleksey-rtishchev"},{"text":"Alessandra Serano","link":"/entities/alessandra-serano"},{"text":"Aleutian Islands","link":"/entities/aleutian-islands"},{"text":"Alex Beard","link":"/entities/alex-beard"},{"text":"Alex Jeffrey Pretti","link":"/entities/alex-jeffrey-pretti"},{"text":"Alex Jones","link":"/entities/alex-jones"},{"text":"Alex Mooney","link":"/entities/alex-mooney"},{"text":"Alex Padilla","link":"/entities/alex-padilla"},{"text":"Alex Pfeiffer","link":"/entities/alex-pfeiffer"},{"text":"Alex Saab","link":"/entities/alex-saab"},{"text":"Alex Soros","link":"/entities/alex-soros"},{"text":"Alex Stein","link":"/entities/alex-stein"},{"text":"Alexander Dugin","link":"/entities/alexander-dugin"},{"text":"Alexander Lukashenko","link":"/entities/alexander-lukashenko"},{"text":"Alexander Moiseyev","link":"/entities/alexander-moiseyev"},{"text":"Alexander Ovechkin","link":"/entities/alexander-ovechkin"},{"text":"Alexander Sollfrank","link":"/entities/alexander-sollfrank"},{"text":"Alexander Soros","link":"/entities/alexander-soros"},{"text":"Alexander Stubb","link":"/entities/alexander-stubb"},{"text":"Alexandra Pelosi","link":"/entities/alexandra-pelosi"},{"text":"Alexandre de Moraes","link":"/entities/alexandre-de-moraes"},{"text":"Alexandria Ocasio-Cortez","link":"/entities/alexandria-ocasio-cortez"},{"text":"Alexei Navalny","link":"/entities/alexei-navalny"},{"text":"Alexi Giannoulias","link":"/entities/alexi-giannoulias"},{"text":"Alexus Grynkewich","link":"/entities/alexus-grynkewich"},{"text":"Alfred Mutua","link":"/entities/alfred-mutua"},{"text":"Ali Al-Thawadi","link":"/entities/ali-al-thawadi"},{"text":"Ali Al-Zaidi","link":"/entities/ali-al-zaidi"},{"text":"Ali Bongo","link":"/entities/ali-bongo"},{"text":"Ali ibn Abi Talib","link":"/entities/ali-ibn-abi-talib"},{"text":"Ali Khamenei","link":"/entities/ali-khamenei"},{"text":"Ali Larijani","link":"/entities/ali-larijani"},{"text":"Ali Shamkhani","link":"/entities/ali-shamkhani"},{"text":"Alice Weidel","link":"/entities/alice-weidel"},{"text":"Alien Terrorist Removal Court","link":"/entities/alien-terrorist-removal-court"},{"text":"Alina Chan","link":"/entities/alina-chan"},{"text":"Alina Habba","link":"/entities/alina-habba"},{"text":"All-Domain Anomaly Resolution Office","link":"/entities/all-domain-anomaly-resolution-office"},{"text":"Allen Winsor","link":"/entities/allen-winsor"},{"text":"Alliance Defending Freedom","link":"/entities/alliance-defending-freedom"},{"text":"Alliance Fleuve Congo","link":"/entities/alliance-fleuve-congo"},{"text":"Alliance for Global Justice","link":"/entities/alliance-for-global-justice"},{"text":"Alliance for the Union of Romanians","link":"/entities/alliance-for-the-union-of-romanians"},{"text":"Alliance of Motion Picture and Television Producers","link":"/entities/alliance-of-motion-picture-and-television-producers"},{"text":"Alliance of Sahel States","link":"/entities/alliance-of-sahel-states"},{"text":"Allied Democratic Forces","link":"/entities/allied-democratic-forces"},{"text":"Allison Burroughs","link":"/entities/allison-burroughs"},{"text":"Alnur Mussayev","link":"/entities/alnur-mussayev"},{"text":"Alo Yoga","link":"/entities/alo-yoga"},{"text":"Alois Zwinggi","link":"/entities/alois-zwinggi"},{"text":"Alparslan Bayraktar","link":"/entities/alparslan-bayraktar"},{"text":"Alpha Warrior","link":"/entities/alpha-warrior"},{"text":"Alphabet","link":"/entities/alphabet"},{"text":"AlphaSimplex Group","link":"/entities/alphasimplex-group"},{"text":"Altered State","link":"/entities/altered-state"},{"text":"Alternative for Germany (AfD)","link":"/entities/alternative-for-germany"},{"text":"Alvin Bragg","link":"/entities/alvin-bragg"},{"text":"Alvin Hellerstein","link":"/entities/alvin-hellerstein"},{"text":"Amal Movement","link":"/entities/amal-movement"},{"text":"Amanda Breshears","link":"/entities/amanda-breshears"},{"text":"Amanda Sawyer","link":"/entities/amanda-sawyer"},{"text":"Amara Dukuly","link":"/entities/amara-dukuly"},{"text":"Amazon","link":"/entities/amazon"},{"text":"Amazon Web Services","link":"/entities/amazon-web-services"},{"text":"Ambrose Finnegan","link":"/entities/ambrose-finnegan"},{"text":"AMD","link":"/entities/amd"},{"text":"Amer Ghalib","link":"/entities/amer-ghalib"},{"text":"America First Legal","link":"/entities/america-first-legal"},{"text":"America First Policy Institute","link":"/entities/america-first-policy-institute"},{"text":"America PAC","link":"/entities/america-pac"},{"text":"America Votes","link":"/entities/america-votes"},{"text":"American Academy of Pediatrics","link":"/entities/american-academy-of-pediatrics"},{"text":"American Accountability Foundation","link":"/entities/american-accountability-foundation"},{"text":"American Action Forum","link":"/entities/american-action-forum"},{"text":"American Airlines","link":"/entities/american-airlines"},{"text":"American Bankers Association","link":"/entities/american-bankers-association"},{"text":"American Bar Association","link":"/entities/american-bar-association"},{"text":"American Changle Association","link":"/entities/american-changle-association"},{"text":"American Civil Liberties Union","link":"/entities/american-civil-liberties-union"},{"text":"American Eagle Outfitters","link":"/entities/american-eagle-outfitters"},{"text":"American Energy Alliance","link":"/entities/american-energy-alliance"},{"text":"American Enterprise Institute","link":"/entities/american-enterprise-institute"},{"text":"American Federation of Teachers","link":"/entities/american-federation-of-teachers"},{"text":"American Greatness","link":"/entities/american-greatness"},{"text":"American Hypnotist","link":"/entities/american-hypnotist"},{"text":"American Institute for Free Labor Development","link":"/entities/american-institute-for-free-labor-development"},{"text":"American Israel Public Affairs Committee","link":"/entities/american-israel-public-affairs-committee"},{"text":"American Israel Public Affairs Committee (AIPAC)","link":"/entities/aipac"},{"text":"American Jewish Committee","link":"/entities/american-jewish-committee"},{"text":"American Medical Association","link":"/entities/american-medical-association"},{"text":"American Oversight","link":"/entities/american-oversight"},{"text":"American Petroleum Institute","link":"/entities/american-petroleum-institute"},{"text":"American Postal Workers Union","link":"/entities/american-postal-workers-union"},{"text":"Ami Ayalon","link":"/entities/ami-ayalon"},{"text":"Amichai Chikli","link":"/entities/amichai-chikli"},{"text":"Amichai Eliyahu","link":"/entities/amichai-eliyahu"},{"text":"Amihai Eliyahu","link":"/entities/amihai-eliyahu"},{"text":"Amin Nasser","link":"/entities/amin-nasser"},{"text":"Amir H. Ali","link":"/entities/amir-ali"},{"text":"Amir Ohana","link":"/entities/amir-ohana"},{"text":"Amir Saeid Iravani","link":"/entities/amir-saeid-iravani"},{"text":"Amistad Project","link":"/entities/amistad-project"},{"text":"Amit Aisman","link":"/entities/amit-aisman"},{"text":"Amit Hadad","link":"/entities/amit-hadad"},{"text":"Amit Mehta","link":"/entities/amit-mehta"},{"text":"Amnesty International","link":"/entities/amnesty-international"},{"text":"Amos Hochstein","link":"/entities/amos-hochstein"},{"text":"Amos L. Mazzant","link":"/entities/amos-mazzant"},{"text":"Amsterdam & Partners","link":"/entities/amsterdam-and-partners"},{"text":"Amy Barela","link":"/entities/amy-barela"},{"text":"Amy Coney Barrett","link":"/entities/amy-coney-barrett"},{"text":"Amy Klobuchar","link":"/entities/amy-klobuchar"},{"text":"Amy Loftus","link":"/entities/amy-loftus"},{"text":"Amy Totenberg","link":"/entities/amy-totenberg"},{"text":"Ana Navarro","link":"/entities/ana-navarro"},{"text":"Ana Reyes","link":"/entities/ana-reyes"},{"text":"Analisa Torres","link":"/entities/analisa-torres"},{"text":"Anatoly Chubais","link":"/entities/anatoly-chubais"},{"text":"Anders Kompass","link":"/entities/anders-kompass"},{"text":"Andre Dickens","link":"/entities/andre-dickens"},{"text":"Andre Hoffmann","link":"/entities/andre-hoffmann"},{"text":"Andrea Delmastro","link":"/entities/andrea-delmastro"},{"text":"Andrea Mitchell","link":"/entities/andrea-mitchell"},{"text":"Andreessen Horowitz","link":"/entities/andreessen-horowitz"},{"text":"Andrei Derkach","link":"/entities/andrei-derkach"},{"text":"Andrej Babiš","link":"/entities/andrej-babis"},{"text":"Andrés Manuel López Obrador","link":"/entities/andres-manuel-lopez-obrador"},{"text":"Andrew Bailey","link":"/entities/andrew-bailey"},{"text":"Andrew Bates","link":"/entities/andrew-bates"},{"text":"Andrew Bosworth","link":"/entities/andrew-bosworth"},{"text":"Andrew Brigida","link":"/entities/andrew-brigida"},{"text":"Andrew Clyde","link":"/entities/andrew-clyde"},{"text":"Andrew Cuomo","link":"/entities/andrew-cuomo"},{"text":"Andrew Ferguson","link":"/entities/andrew-ferguson"},{"text":"Andrew Garbarino","link":"/entities/andrew-garbarino"},{"text":"Andrew Jackson","link":"/entities/andrew-jackson"},{"text":"Andrew Kline","link":"/entities/andrew-kline"},{"text":"Andrew Kolvet","link":"/entities/andrew-kolvet"},{"text":"Andrew Korybko","link":"/entities/andrew-korybko"},{"text":"Andrew McCabe","link":"/entities/andrew-mccabe"},{"text":"Andrew Napolitano","link":"/entities/andrew-napolitano"},{"text":"Andrew Nixon","link":"/entities/andrew-nixon"},{"text":"Andrew Puzder","link":"/entities/andrew-puzder"},{"text":"Andrew Romeo","link":"/entities/andrew-romeo"},{"text":"Andrew Tate","link":"/entities/andrew-tate"},{"text":"Andrew Yang","link":"/entities/andrew-yang"},{"text":"Andrey Belousov","link":"/entities/andrey-belousov"},{"text":"Andrey Stanislavovich Korinets","link":"/entities/andrey-korinets"},{"text":"Andrey Yermak","link":"/entities/andrey-yermak"},{"text":"Andrey Yusov","link":"/entities/andrey-yusov"},{"text":"Andris Spruds","link":"/entities/andris-spruds"},{"text":"Andrius Kubilius","link":"/entities/andrius-kubilius"},{"text":"Andriy Biletsky","link":"/entities/andriy-biletsky"},{"text":"Andriy Melnyk","link":"/entities/andriy-melnyk"},{"text":"Andriy Yermak","link":"/entities/andriy-yermak"},{"text":"Andrzej Duda","link":"/entities/andrzej-duda"},{"text":"Anduril","link":"/entities/anduril"},{"text":"Andy Barr","link":"/entities/andy-barr"},{"text":"Andy Beshear","link":"/entities/andy-beshear"},{"text":"Andy Biggs","link":"/entities/andy-biggs"},{"text":"Andy Burnham","link":"/entities/andy-burnham"},{"text":"Andy Frisella","link":"/entities/andy-frisella"},{"text":"Andy Harris","link":"/entities/andy-harris"},{"text":"Angela Carini","link":"/entities/angela-carini"},{"text":"Angela McArdle","link":"/entities/angela-mcardle"},{"text":"Angela Merkel","link":"/entities/angela-merkel"},{"text":"Angela Paxton","link":"/entities/angela-paxton"},{"text":"Angela Rayner","link":"/entities/angela-rayner"},{"text":"Angelina Jolie","link":"/entities/angelina-jolie"},{"text":"Angelo Carusone","link":"/entities/angelo-carusone"},{"text":"Angie Craig","link":"/entities/angie-craig"},{"text":"Anglican Communion","link":"/entities/anglican-communion"},{"text":"Anglo-Iranian Oil Company","link":"/entities/anglo-iranian-oil-company"},{"text":"Angola","link":"/entities/angola"},{"text":"Anheuser-Busch InBev","link":"/entities/anheuser-busch-inbev"},{"text":"Anna Gomez","link":"/entities/anna-gomez"},{"text":"Anna Kuznetsova","link":"/entities/anna-kuznetsova"},{"text":"Anna Paulina Luna","link":"/entities/anna-paulina-luna"},{"text":"Anne Wojcicki","link":"/entities/anne-wojcicki"},{"text":"Annie Ohana","link":"/entities/annie-ohana"},{"text":"Annie Tomasini","link":"/entities/annie-tomasini"},{"text":"Annunciation Catholic Church","link":"/entities/annunciation-catholic-church"},{"text":"Anonymous","link":"/entities/anonymous"},{"text":"Anouska De Georgiou","link":"/entities/anouska-de-georgiou"},{"text":"ANSWER Coalition","link":"/entities/answer-coalition"},{"text":"Antarctic Impulsive Transient Antenna","link":"/entities/antarctic-impulsive-transient-antenna"},{"text":"Anthony Albanese","link":"/entities/anthony-albanese"},{"text":"Anthony Bernal","link":"/entities/anthony-bernal"},{"text":"Anthony Enzor-DeMeo","link":"/entities/anthony-enzor-demeo"},{"text":"Anthony Fauci","link":"/entities/anthony-fauci"},{"text":"Anthony Guglielmi","link":"/entities/anthony-guglielmi"},{"text":"Anthony Kennedy","link":"/entities/anthony-kennedy"},{"text":"Anthony Ornato","link":"/entities/anthony-ornato"},{"text":"Anthony P. D'Esposito","link":"/entities/anthony-desposito"},{"text":"Anthony Pratt","link":"/entities/anthony-pratt"},{"text":"Anthony Rota","link":"/entities/anthony-rota"},{"text":"Anthony Tata","link":"/entities/anthony-tata"},{"text":"Anthropic","link":"/entities/anthropic"},{"text":"Anti-Defamation League","link":"/entities/anti-defamation-league"},{"text":"Antifa","link":"/entities/antifa"},{"text":"Antiwar.com","link":"/entities/antiwar-com"},{"text":"Anton Gerashchenko","link":"/entities/anton-gerashchenko"},{"text":"Anton Hofreiter","link":"/entities/anton-hofreiter"},{"text":"Antonio Brown","link":"/entities/antonio-brown"},{"text":"António Guterres","link":"/entities/antonio-guterres"},{"text":"Antonio Tajani","link":"/entities/antonio-tajani"},{"text":"Antony Blinken","link":"/entities/antony-blinken"},{"text":"Anwar al-Awlaki","link":"/entities/anwar-al-awlaki"},{"text":"Anwar Gargash","link":"/entities/anwar-gargash"},{"text":"Anwar Sadat","link":"/entities/anwar-sadat"},{"text":"Apple","link":"/entities/apple"},{"text":"Arab League","link":"/entities/arab-league"},{"text":"Archdiocese of San Francisco","link":"/entities/archdiocese-of-san-francisco"},{"text":"Argentina","link":"/entities/argentina"},{"text":"Ari Emanuel","link":"/entities/ari-emanuel"},{"text":"Ariel Henry","link":"/entities/ariel-henry"},{"text":"Ariel Smith","link":"/entities/ariel-smith"},{"text":"Arizona Association of County Recorders","link":"/entities/arizona-association-of-county-recorders"},{"text":"Arizona Attorney General's Office","link":"/entities/arizona-attorney-generals-office"},{"text":"Arizona House Ad Hoc Committee on Oversight, Accountability, and Big Tech","link":"/entities/arizona-house-ad-hoc-committee-on-oversight-accountability-and-big-tech"},{"text":"Arizona Republican Party","link":"/entities/arizona-republican-party"},{"text":"Arizona Secretary of State","link":"/entities/arizona-secretary-of-state"},{"text":"Arizona Supreme Court","link":"/entities/arizona-supreme-court"},{"text":"Armando Codina","link":"/entities/armando-codina"},{"text":"Armed Forces Institute of Pathology","link":"/entities/armed-forces-institute-of-pathology"},{"text":"Armenia","link":"/entities/armenia"},{"text":"Arnon Milchan","link":"/entities/arnon-milchan"},{"text":"Arsene Pujo","link":"/entities/arsene-pujo"},{"text":"Arthur Engoron","link":"/entities/arthur-engoron"},{"text":"Arthur Harris","link":"/entities/arthur-harris"},{"text":"Article III Project","link":"/entities/article-iii-project"},{"text":"Arturo Galansino","link":"/entities/arturo-galansino"},{"text":"Arun Subramanian","link":"/entities/arun-subramanian"},{"text":"Aryeh Lightstone","link":"/entities/aryeh-lightstone"},{"text":"Asahi Shuzo","link":"/entities/asahi-shuzo"},{"text":"Ascension","link":"/entities/ascension"},{"text":"Ascent Nutrition","link":"/entities/ascent-nutrition"},{"text":"Ashe in America","link":"/entities/ashe-in-america"},{"text":"Ashish Jha","link":"/entities/ashish-jha"},{"text":"Ashleigh Merchant","link":"/entities/ashleigh-merchant"},{"text":"Ashley Biden","link":"/entities/ashley-biden"},{"text":"Ashley Moody","link":"/entities/ashley-moody"},{"text":"Ashley St. Clair","link":"/entities/ashley-st-clair"},{"text":"Ashley Williams","link":"/entities/ashley-williams"},{"text":"Asia-Pacific Economic Cooperation","link":"/entities/asia-pacific-economic-cooperation"},{"text":"Asian-American Free Labor Institute","link":"/entities/asian-american-free-labor-institute"},{"text":"Asif Raza Merchant","link":"/entities/asif-raza-merchant"},{"text":"Asim Munir","link":"/entities/asim-munir"},{"text":"ASML","link":"/entities/asml"},{"text":"Aspen Security Forum","link":"/entities/aspen-security-forum"},{"text":"Assad al-Shaibani","link":"/entities/assad-al-shaibani"},{"text":"Assembly of Experts","link":"/entities/assembly-of-experts"},{"text":"Asset Recovery and Management Agency","link":"/entities/asset-recovery-and-management-agency"},{"text":"Assimi Goïta","link":"/entities/assimi-goita"},{"text":"Associated Press","link":"/entities/associated-press"},{"text":"Aston Mack","link":"/entities/aston-mack"},{"text":"AstraZeneca","link":"/entities/astrazeneca"},{"text":"Astrobotic","link":"/entities/astrobotic"},{"text":"AT&T","link":"/entities/at-and-t"},{"text":"Atlanta Police Foundation","link":"/entities/atlanta-police-foundation"},{"text":"Atlantic Council","link":"/entities/atlantic-council"},{"text":"Au10tix","link":"/entities/au10tix"},{"text":"Audit the Vote PA","link":"/entities/audit-the-vote-pa"},{"text":"Audrey Hale","link":"/entities/audrey-hale"},{"text":"Audrey Kurth Cronin","link":"/entities/audrey-kurth-cronin"},{"text":"AUKUS","link":"/entities/aukus"},{"text":"Aurelio Perez-Lugones","link":"/entities/aurelio-perez-lugones"},{"text":"Aurora, Colorado","link":"/entities/aurora-colorado"},{"text":"Austin Evers","link":"/entities/austin-evers"},{"text":"Austin Private Wealth LLC","link":"/entities/austin-private-wealth"},{"text":"Austin Scott","link":"/entities/austin-scott"},{"text":"Austin Tucker Martin","link":"/entities/austin-tucker-martin"},{"text":"Authentic Campaigns","link":"/entities/authentic-campaigns"},{"text":"Autodefensas Unidas de Colombia","link":"/entities/autodefensas-unidas-de-colombia"},{"text":"Autumn Scardina","link":"/entities/autumn-scardina"},{"text":"Avigdor Lieberman","link":"/entities/avigdor-lieberman"},{"text":"Avril Haines","link":"/entities/avril-haines"},{"text":"Awad al-Shammari","link":"/entities/awad-al-shammari"},{"text":"Axios","link":"/entities/axios"},{"text":"Aza Raskin","link":"/entities/aza-raskin"},{"text":"Azerbaijan","link":"/entities/azerbaijan"},{"text":"Aziz Nasirzadeh","link":"/entities/aziz-nasirzadeh"},{"text":"Azov Battalion","link":"/entities/azov-battalion"},{"text":"B-2 Spirit","link":"/entities/b-2-spirit"},{"text":"Bab el-Mandeb Strait","link":"/entities/bab-el-mandeb-strait"},{"text":"Babylon Bee","link":"/entities/babylon-bee"},{"text":"Badlands Book Club","link":"/entities/badlands-book-club"},{"text":"Badlands Media","link":"/entities/badlands-media"},{"text":"Badlands Media Library Channel","link":"/entities/badlands-media-library-channel"},{"text":"Badlands Story Hour","link":"/entities/badlands-story-hour"},{"text":"Bahrain","link":"/entities/bahrain"},{"text":"Baiba Braže","link":"/entities/baiba-braze"},{"text":"Baku-Tbilisi-Ceyhan Pipeline","link":"/entities/baku-tbilisi-ceyhan-pipeline"},{"text":"Balenciaga","link":"/entities/balenciaga"},{"text":"Banastre Tarleton","link":"/entities/banastre-tarleton"},{"text":"Bandar bin Sultan Al Saud","link":"/entities/bandar-bin-sultan-al-saud"},{"text":"Bank for International Settlements","link":"/entities/bank-for-international-settlements"},{"text":"Bank Indonesia","link":"/entities/bank-of-indonesia"},{"text":"Bank of America","link":"/entities/bank-of-america"},{"text":"Bank of Canada","link":"/entities/bank-of-canada"},{"text":"Bank of China","link":"/entities/bank-of-china"},{"text":"Bank of England","link":"/entities/bank-of-england"},{"text":"Bank of North Dakota","link":"/entities/bank-of-north-dakota"},{"text":"Bank of Zambia","link":"/entities/bank-of-zambia"},{"text":"Bankrate","link":"/entities/bankrate"},{"text":"Banu Bakr","link":"/entities/banu-bakr"},{"text":"Barack Obama","link":"/entities/barack-obama"},{"text":"Barak Ravid","link":"/entities/barak-ravid"},{"text":"Barakah Nuclear Power Plant","link":"/entities/barakah-nuclear-power-plant"},{"text":"Barb Byrum","link":"/entities/barb-byrum"},{"text":"Barbara Comstock","link":"/entities/barbara-comstock"},{"text":"Barbara Lee","link":"/entities/barbara-lee"},{"text":"Barclays","link":"/entities/barclays"},{"text":"Bari Weiss","link":"/entities/bari-weiss"},{"text":"BaronHR","link":"/entities/baronhr"},{"text":"Barry Loudermilk","link":"/entities/barry-loudermilk"},{"text":"Barry Moore","link":"/entities/barry-moore"},{"text":"Barry Pollack","link":"/entities/barry-pollack"},{"text":"Barry Zulauf","link":"/entities/barry-zulauf"},{"text":"Barstool Sports","link":"/entities/barstool-sports"},{"text":"Bart De Wever","link":"/entities/bart-de-wever"},{"text":"Baseless Conspiracies","link":"/entities/baseless-conspiracies"},{"text":"Bashar al-Assad","link":"/entities/bashar-al-assad"},{"text":"Bavarian Illuminati","link":"/entities/bavarian-illuminati"},{"text":"Bay Area Rapid Transit","link":"/entities/bay-area-rapid-transit"},{"text":"Bayer AG","link":"/entities/bayer-ag"},{"text":"BBC","link":"/entities/bbc"},{"text":"Becket Law","link":"/entities/becket-law"},{"text":"Becky Pepper-Jackson","link":"/entities/becky-pepper-jackson"},{"text":"Behavioural Insights Team","link":"/entities/behavioural-insights-team"},{"text":"Beicheng Sun","link":"/entities/beicheng-sun"},{"text":"Beirut","link":"/entities/beirut"},{"text":"Belarus","link":"/entities/belarus"},{"text":"Belgium","link":"/entities/belgium"},{"text":"Bellingcat","link":"/entities/bellingcat"},{"text":"Ben Christman","link":"/entities/ben-christman"},{"text":"Ben Crump","link":"/entities/ben-crump"},{"text":"Ben Horowitz","link":"/entities/ben-horowitz"},{"text":"Ben Hubbard","link":"/entities/ben-hubbard"},{"text":"Ben Sabti","link":"/entities/ben-sabti"},{"text":"Ben Shapiro","link":"/entities/ben-shapiro"},{"text":"Benedictine College","link":"/entities/benedictine-college"},{"text":"Benedictines of Mary, Queen of Apostles","link":"/entities/benedictines-of-mary-queen-of-apostles"},{"text":"Benghazi","link":"/entities/benghazi"},{"text":"Benghazi Attack","link":"/entities/benghazi-attack"},{"text":"Benita Pearson","link":"/entities/benita-pearson"},{"text":"Benito Mussolini","link":"/entities/benito-mussolini"},{"text":"Benjamin Franklin","link":"/entities/benjamin-franklin"},{"text":"Benjamin Harrison","link":"/entities/benjamin-harrison"},{"text":"Benjamin Hovland","link":"/entities/benjamin-hovland"},{"text":"Benjamin Netanyahu","link":"/entities/benjamin-netanyahu"},{"text":"Benjamin Song","link":"/entities/benjamin-song"},{"text":"Benjamin Strong","link":"/entities/benjamin-strong"},{"text":"Benjamin West","link":"/entities/benjamin-west"},{"text":"Bennie Thompson","link":"/entities/bennie-thompson"},{"text":"Benny Gantz","link":"/entities/benny-gantz"},{"text":"Benny Johnson","link":"/entities/benny-johnson"},{"text":"Beny Steinmetz","link":"/entities/beny-steinmetz"},{"text":"Benzi Gopstein","link":"/entities/benzi-gopstein"},{"text":"Benzion Gopstein","link":"/entities/benzion-gopstein"},{"text":"Benzion Netanyahu","link":"/entities/benzion-netanyahu"},{"text":"Berkshire Hathaway","link":"/entities/berkshire-hathaway"},{"text":"Bernard C. Cohen","link":"/entities/bernard-c-cohen"},{"text":"Bernard Kerik","link":"/entities/bernard-kerik"},{"text":"Bernard Schwartz","link":"/entities/bernard-schwartz"},{"text":"Bernie Madoff","link":"/entities/bernie-madoff"},{"text":"Bernie Moreno","link":"/entities/bernie-moreno"},{"text":"Bernie Sanders","link":"/entities/bernie-sanders"},{"text":"Beryl Howell","link":"/entities/beryl-howell"},{"text":"Best Buy","link":"/entities/best-buy"},{"text":"Betty McCollum","link":"/entities/betty-mccollum"},{"text":"Betty Rosa","link":"/entities/betty-rosa"},{"text":"Bevelyn Williams","link":"/entities/bevelyn-williams"},{"text":"Beyahad","link":"/entities/beyahad"},{"text":"Bezalel Smotrich","link":"/entities/bezalel-smotrich"},{"text":"BHR Partners","link":"/entities/bhr-partners"},{"text":"Big Dig Synergy","link":"/entities/big-dig-synergy"},{"text":"Bilderberg","link":"/entities/bilderberg"},{"text":"Bill Ackman","link":"/entities/bill-ackman"},{"text":"Bill and Melinda Gates Foundation","link":"/entities/bill-and-melinda-gates-foundation"},{"text":"Bill Barr","link":"/entities/bill-barr"},{"text":"Bill Burck","link":"/entities/bill-burck"},{"text":"Bill Burr","link":"/entities/bill-burr"},{"text":"Bill Cassidy","link":"/entities/bill-cassidy"},{"text":"Bill Clinton","link":"/entities/bill-clinton"},{"text":"Bill de Blasio","link":"/entities/bill-de-blasio"},{"text":"Bill Ferri","link":"/entities/bill-ferri"},{"text":"Bill Gates","link":"/entities/bill-gates"},{"text":"Bill Gates (Maricopa County)","link":"/entities/bill-gates-arizona"},{"text":"Bill Harris","link":"/entities/bill-harris"},{"text":"Bill Kramer","link":"/entities/bill-kramer"},{"text":"Bill Lee","link":"/entities/bill-lee"},{"text":"Bill Maher","link":"/entities/bill-maher"},{"text":"Bill McInturff","link":"/entities/bill-mcinturff"},{"text":"Bill Posey","link":"/entities/bill-posey"},{"text":"Bill Pulte","link":"/entities/bill-pulte"},{"text":"Bill Whitaker","link":"/entities/bill-whitaker"},{"text":"Bill White","link":"/entities/bill-white"},{"text":"Billings Logan International Airport","link":"/entities/billings-logan-international-airport"},{"text":"Biohaven","link":"/entities/biohaven"},{"text":"Bitza","link":"/entities/bitza"},{"text":"Black Basta","link":"/entities/black-basta"},{"text":"Black Lives Matter","link":"/entities/black-lives-matter"},{"text":"Black Lives Matter OKC","link":"/entities/black-lives-matter-okc"},{"text":"BlackRock","link":"/entities/blackrock"},{"text":"Blaise Metreweli","link":"/entities/blaise-metreweli"},{"text":"Blake Masters","link":"/entities/blake-masters"},{"text":"Bloomberg","link":"/entities/bloomberg"},{"text":"Blue Eyes","link":"/entities/blue-eyes"},{"text":"Blue Origin","link":"/entities/blue-origin"},{"text":"Blue Stream Pipeline","link":"/entities/blue-stream-pipeline"},{"text":"Bluesky","link":"/entities/bluesky"},{"text":"BMW","link":"/entities/bmw"},{"text":"Board of Peace","link":"/entities/board-of-peace"},{"text":"Bob Bakish","link":"/entities/bob-bakish"},{"text":"Bob Casey","link":"/entities/bob-casey"},{"text":"Bob Good","link":"/entities/bob-good"},{"text":"Bob Goodlatte","link":"/entities/bob-goodlatte"},{"text":"Bob Iger","link":"/entities/bob-iger"},{"text":"Bob Rae","link":"/entities/bob-rae"},{"text":"Bob Woodward","link":"/entities/bob-woodward"},{"text":"BODE Technologies","link":"/entities/bode-technologies"},{"text":"Bodega and Small Business Group","link":"/entities/bodega-and-small-business-group"},{"text":"Boeing","link":"/entities/boeing"},{"text":"Bohai Harvest RST","link":"/entities/bohai-harvest-rst"},{"text":"Boko Haram","link":"/entities/boko-haram"},{"text":"Bola Tinubu","link":"/entities/bola-tinubu"},{"text":"Boone Cutler","link":"/entities/boone-cutler"},{"text":"Borderland Pride","link":"/entities/borderland-pride"},{"text":"Borderline Dance Team","link":"/entities/borderline-dance-team"},{"text":"Børge Brende","link":"/entities/borge-brende"},{"text":"Boris Berezovsky","link":"/entities/boris-berezovsky"},{"text":"Boris Johnson","link":"/entities/boris-johnson"},{"text":"Boris Pistorius","link":"/entities/boris-pistorius"},{"text":"Boris Sanchez","link":"/entities/boris-sanchez"},{"text":"Boris Yeltsin","link":"/entities/boris-yeltsin"},{"text":"Boston Consulting Group","link":"/entities/boston-consulting-group"},{"text":"Boston Herald","link":"/entities/boston-herald"},{"text":"Bottoms (Colorado gubernatorial candidate)","link":"/entities/bottoms"},{"text":"Brad & Abbey LIVE","link":"/entities/brad-and-abbey-live"},{"text":"Brad Cologero Getz","link":"/entities/brad-cologero-getz"},{"text":"Brad Edwards","link":"/entities/brad-edwards"},{"text":"Brad Garlinghouse","link":"/entities/brad-garlinghouse"},{"text":"Brad Getz","link":"/entities/brad-getz"},{"text":"Brad Raffensperger","link":"/entities/brad-raffensperger"},{"text":"Brad Reese","link":"/entities/brad-reese"},{"text":"Brad Schimel","link":"/entities/brad-schimel"},{"text":"Brad Sherman (Iowa State Representative)","link":"/entities/brad-sherman-iowa"},{"text":"Brad Wenstrup","link":"/entities/brad-wenstrup"},{"text":"Brad Zerbo","link":"/entities/brad-zerbo"},{"text":"Brahm Resnick","link":"/entities/brahm-resnick"},{"text":"Brandon Gill","link":"/entities/brandon-gill"},{"text":"Brandon Johnson","link":"/entities/brandon-johnson"},{"text":"Brandon Scott","link":"/entities/brandon-scott"},{"text":"Brandon Smith","link":"/entities/brandon-smith"},{"text":"Brandon Tatum","link":"/entities/brandon-tatum"},{"text":"Brannon Howse","link":"/entities/brannon-howse"},{"text":"Brazil","link":"/entities/brazil"},{"text":"Bree Fram","link":"/entities/bree-fram"},{"text":"Breitbart","link":"/entities/breitbart"},{"text":"Breitbart News","link":"/entities/breitbart-news"},{"text":"Brenda Lee Brown Armstrong","link":"/entities/brenda-lee-brown-armstrong"},{"text":"Brendan Boyle","link":"/entities/brendan-boyle"},{"text":"Brendan Carr","link":"/entities/brendan-carr"},{"text":"Brendan Whitworth","link":"/entities/brendan-whitworth"},{"text":"Brennan Center for Justice","link":"/entities/brennan-center-for-justice"},{"text":"Brent Bozell","link":"/entities/brent-bozell"},{"text":"Bret Baier","link":"/entities/bret-baier"},{"text":"Bret Burkhart","link":"/entities/bret-burkhart"},{"text":"Brett Kavanaugh","link":"/entities/brett-kavanaugh"},{"text":"Brett McGurk","link":"/entities/brett-mcgurk"},{"text":"Brett Shumate","link":"/entities/brett-shumate"},{"text":"Brewster Kahle","link":"/entities/brewster-kahle"},{"text":"Brian Babin","link":"/entities/brian-babin"},{"text":"Brian Becker","link":"/entities/brian-becker"},{"text":"Brian Birdwell","link":"/entities/brian-birdwell"},{"text":"Brian Burch","link":"/entities/brian-burch"},{"text":"Brian Cole","link":"/entities/brian-cole"},{"text":"Brian Cole Jr.","link":"/entities/brian-cole-jr"},{"text":"Brian Driscoll","link":"/entities/brian-driscoll"},{"text":"Brian Fitzpatrick","link":"/entities/brian-fitzpatrick"},{"text":"Brian Kemp","link":"/entities/brian-kemp"},{"text":"Brian Kilmeade","link":"/entities/brian-kilmeade"},{"text":"Brian Lupo","link":"/entities/brian-lupo"},{"text":"Brian Mast","link":"/entities/brian-mast"},{"text":"Brian Murphy","link":"/entities/brian-murphy"},{"text":"Brian Nugent","link":"/entities/brian-nugent"},{"text":"Brian Schwalb","link":"/entities/brian-schwalb"},{"text":"Brian Sicknick","link":"/entities/brian-sicknick"},{"text":"Brian Stelter","link":"/entities/brian-stelter"},{"text":"Brian Thompson","link":"/entities/brian-thompson"},{"text":"Brianna Moore","link":"/entities/brianna-moore"},{"text":"Brianne Dressen","link":"/entities/brianne-dressen"},{"text":"BRICS","link":"/entities/brics"},{"text":"Bridges Partners LLC","link":"/entities/bridges-partners"},{"text":"Bridget Brink","link":"/entities/bridget-brink"},{"text":"Brigitte Macron","link":"/entities/brigitte-macron"},{"text":"British Government","link":"/entities/british-government"},{"text":"British Intelligence","link":"/entities/british-intelligence"},{"text":"Brittney Griner","link":"/entities/brittney-griner"},{"text":"Brooke Rollins","link":"/entities/brooke-rollins"},{"text":"Brookfield","link":"/entities/brookfield"},{"text":"Brookings Institution","link":"/entities/brookings-institution"},{"text":"Brooklyn Nets","link":"/entities/brooklyn-nets"},{"text":"Brothers of Italy","link":"/entities/brothers-of-italy"},{"text":"Brothers to the Rescue","link":"/entities/brothers-to-the-rescue"},{"text":"Brown University","link":"/entities/brown-university"},{"text":"Brownstein, Hyatt, Farber and Schreck","link":"/entities/brownstein-hyatt-farber-schreck"},{"text":"Brownstone Institute","link":"/entities/brownstone-institute"},{"text":"Bruce Swartz","link":"/entities/bruce-swartz"},{"text":"Bryan A. Vorndran","link":"/entities/bryan-vorndran"},{"text":"Bryan Fair","link":"/entities/bryan-fair"},{"text":"Bryan Kohberger","link":"/entities/bryan-kohberger"},{"text":"Bryan Lupo","link":"/entities/bryan-lupo"},{"text":"Bryan Steil","link":"/entities/bryan-steil"},{"text":"Bryan Stern","link":"/entities/bryan-stern"},{"text":"Bud Light","link":"/entities/bud-light"},{"text":"Buddy Carter","link":"/entities/buddy-carter"},{"text":"Budweiser","link":"/entities/budweiser"},{"text":"Bugsy Siegel","link":"/entities/bugsy-siegel"},{"text":"Bundestag","link":"/entities/bundestag"},{"text":"Bureau of Alcohol, Tobacco, Firearms and Explosives","link":"/entities/bureau-of-alcohol-tobacco-firearms-and-explosives"},{"text":"Bureau of Labor Statistics","link":"/entities/bureau-of-labor-statistics"},{"text":"Burisma","link":"/entities/burisma"},{"text":"Burkina Faso","link":"/entities/burkina-faso"},{"text":"burning bright","link":"/entities/burning-bright"},{"text":"Burning Bright Publishing","link":"/entities/burning-bright-publishing"},{"text":"Burning Glass Institute","link":"/entities/burning-glass-institute"},{"text":"Burning Man","link":"/entities/burning-man"},{"text":"Burundi","link":"/entities/burundi"},{"text":"Bushehr Nuclear Power Plant","link":"/entities/bushehr-nuclear-power-plant"},{"text":"Business Insider","link":"/entities/business-insider"},{"text":"Business Roundtable","link":"/entities/business-roundtable"},{"text":"Butch Wilmore","link":"/entities/butch-wilmore"},{"text":"BuzzFeed","link":"/entities/buzzfeed"},{"text":"Byron Donalds","link":"/entities/byron-donalds"},{"text":"ByteDance","link":"/entities/bytedance"},{"text":"Caitlin Johnstone","link":"/entities/caitlin-johnstone"},{"text":"Calcalist","link":"/entities/calcalist"},{"text":"Cali Cartel","link":"/entities/cali-cartel"},{"text":"California Army National Guard","link":"/entities/california-army-national-guard"},{"text":"California Department of Financial Protection and Innovation","link":"/entities/california-department-of-financial-protection-and-innovation"},{"text":"California Public Utilities Commission","link":"/entities/california-public-utilities-commission"},{"text":"Călin Georgescu","link":"/entities/calin-georgescu"},{"text":"Calley Means","link":"/entities/calley-means"},{"text":"Callisto Group","link":"/entities/callisto-group"},{"text":"Cambodia","link":"/entities/cambodia"},{"text":"Cameron Currie","link":"/entities/cameron-currie"},{"text":"Cameron Kasky","link":"/entities/cameron-kasky"},{"text":"Cameron McGowan Currie","link":"/entities/cameron-mcgowan-currie"},{"text":"Camille Paglia","link":"/entities/camille-paglia"},{"text":"Camp David","link":"/entities/camp-david"},{"text":"Canada","link":"/entities/canada"},{"text":"Canada 2020","link":"/entities/canada-2020"},{"text":"Canadian Anti-Hate Network","link":"/entities/canadian-anti-hate-network"},{"text":"Canadian Armed Forces","link":"/entities/canadian-armed-forces"},{"text":"Canadian Broadcasting Corporation","link":"/entities/canadian-broadcasting-corporation"},{"text":"Canadian Security Intelligence Service","link":"/entities/canadian-security-intelligence-service"},{"text":"Candace Owens","link":"/entities/candace-owens"},{"text":"canncon","link":"/entities/canncon"},{"text":"Cantor Fitzgerald","link":"/entities/cantor-fitzgerald"},{"text":"CapCut","link":"/entities/capcut"},{"text":"Capital Jewish Museum","link":"/entities/capital-jewish-museum"},{"text":"Capital Research Center","link":"/entities/capital-research-center"},{"text":"Capitol Police Board","link":"/entities/capitol-police-board"},{"text":"Career Colleges and Schools of Texas","link":"/entities/career-colleges-and-schools-of-texas"},{"text":"Cargill","link":"/entities/cargill"},{"text":"Carl Nichols","link":"/entities/carl-nichols"},{"text":"Carl Reiner","link":"/entities/carl-reiner"},{"text":"Carlo Maria Viganò","link":"/entities/carlo-maria-vigano"},{"text":"Carlos Andrés Pérez","link":"/entities/carlos-andres-perez"},{"text":"Carlos de Oliveira","link":"/entities/carlos-de-oliveira"},{"text":"Carlos Slim","link":"/entities/carlos-slim"},{"text":"Carmen Lineberger","link":"/entities/carmen-lineberger"},{"text":"Carnegie Endowment for International Peace","link":"/entities/carnegie-endowment-for-international-peace"},{"text":"Carnegie Mellon Institute for Strategy and Technology","link":"/entities/carnegie-mellon-institute-for-strategy-and-technology"},{"text":"Caroline Ellison","link":"/entities/caroline-ellison"},{"text":"Caroline Kennedy","link":"/entities/caroline-kennedy"},{"text":"Carolyn Stewart","link":"/entities/carolyn-stewart"},{"text":"Carrie Coyner","link":"/entities/carrie-coyner"},{"text":"Carrier Strike Group Twelve","link":"/entities/carrier-strike-group-twelve"},{"text":"Cartel de los Soles","link":"/entities/cartel-de-los-soles"},{"text":"Carter Page","link":"/entities/carter-page"},{"text":"Casey DeSantis","link":"/entities/casey-desantis"},{"text":"Casimir Pulaski","link":"/entities/casimir-pulaski"},{"text":"Caspian Pipeline Consortium","link":"/entities/caspian-pipeline-consortium"},{"text":"Cassidy Hutchinson","link":"/entities/cassidy-hutchinson"},{"text":"Catherine Almonte Da Costa","link":"/entities/catherine-almonte-da-costa"},{"text":"Catherine Engelbrecht","link":"/entities/catherine-engelbrecht"},{"text":"Catherine Herridge","link":"/entities/catherine-herridge"},{"text":"Catherine M. Salinas","link":"/entities/catherine-salinas"},{"text":"Catherine the Great","link":"/entities/catherine-the-great"},{"text":"Catholic Community Services of Southern Arizona","link":"/entities/catholic-community-services-of-southern-arizona"},{"text":"CatholicVote","link":"/entities/catholicvote"},{"text":"Cathy Harris","link":"/entities/cathy-harris"},{"text":"Cato Networks","link":"/entities/cato-networks"},{"text":"Cavalier Johnson","link":"/entities/cavalier-johnson"},{"text":"CBS","link":"/entities/cbs"},{"text":"CBS News","link":"/entities/cbs-news"},{"text":"Cea Weaver","link":"/entities/cea-weaver"},{"text":"Cecil Rhodes","link":"/entities/cecil-rhodes"},{"text":"Cecile de Jongh","link":"/entities/cecile-de-jongh"},{"text":"Cecilia M. Altonaga","link":"/entities/cecilia-altonaga"},{"text":"Cedric Lodge","link":"/entities/cedric-lodge"},{"text":"Cedric Richmond","link":"/entities/cedric-richmond"},{"text":"CEFC China Energy","link":"/entities/cefc-china-energy"},{"text":"Celeste Malloy","link":"/entities/celeste-malloy"},{"text":"CelticCapri Corp","link":"/entities/celticcapri-corp"},{"text":"Center for American Rights","link":"/entities/center-for-american-rights"},{"text":"Center for Countering Digital Hate","link":"/entities/center-for-countering-digital-hate"},{"text":"Center for European Policy Analysis (CEPA)","link":"/entities/center-for-european-policy-analysis"},{"text":"Center for Humane Technology","link":"/entities/center-for-humane-technology"},{"text":"Center for Third World Organizing","link":"/entities/center-for-third-world-organizing"},{"text":"Center to Advance Security in America","link":"/entities/center-to-advance-security-in-america"},{"text":"Centers for Disease Control and Prevention","link":"/entities/centers-for-disease-control-and-prevention"},{"text":"Centers for Medicare & Medicaid Services","link":"/entities/centers-for-medicare-and-medicaid-services"},{"text":"Central African Republic","link":"/entities/central-african-republic"},{"text":"Central Bank of Iran","link":"/entities/central-bank-of-iran"},{"text":"Central Bank of Iraq","link":"/entities/central-bank-of-iraq"},{"text":"Central Florida Tourism Oversight District","link":"/entities/central-florida-tourism-oversight-district"},{"text":"Central Intelligence Agency","link":"/entities/cia"},{"text":"Central Military Commission","link":"/entities/central-military-commission"},{"text":"Centre for Migration Control","link":"/entities/centre-for-migration-control"},{"text":"CERN","link":"/entities/cern"},{"text":"Cesar Aguilar","link":"/entities/cesar-aguilar"},{"text":"César Jáuregui Moreno","link":"/entities/cesar-jauregui-moreno"},{"text":"Chabad","link":"/entities/chabad"},{"text":"Chabad-Lubavitch","link":"/entities/chabad-lubavitch"},{"text":"Chad","link":"/entities/chad"},{"text":"Chad Augustin","link":"/entities/chad-augustin"},{"text":"Chad Bianco","link":"/entities/chad-bianco"},{"text":"Chad Chronister","link":"/entities/chad-chronister"},{"text":"Chad Wolf","link":"/entities/chad-wolf"},{"text":"Chagos Islands","link":"/entities/chagos-islands"},{"text":"Challenger, Gray & Christmas","link":"/entities/challenger-gray-and-christmas"},{"text":"Chamath Palihapitiya","link":"/entities/chamath-palihapitiya"},{"text":"Chanel Pfahl","link":"/entities/chanel-pfahl"},{"text":"Charles Breyer","link":"/entities/charles-breyer"},{"text":"Charles de Gaulle","link":"/entities/charles-de-gaulle"},{"text":"Charles Falconer","link":"/entities/charles-falconer"},{"text":"Charles Flynn","link":"/entities/charles-flynn"},{"text":"Charles Kushner","link":"/entities/charles-kushner"},{"text":"Charles Littlejohn","link":"/entities/charles-littlejohn"},{"text":"Charles Manson","link":"/entities/charles-manson"},{"text":"Charles McGonigal","link":"/entities/charles-mcgonigal"},{"text":"Charles Michel","link":"/entities/charles-michel"},{"text":"Charles Nenner","link":"/entities/charles-nenner"},{"text":"Charles Q. Brown Jr.","link":"/entities/charles-q-brown"},{"text":"Charles University","link":"/entities/charles-university"},{"text":"Charlie Berens","link":"/entities/charlie-berens"},{"text":"Charlie Kirk","link":"/entities/charlie-kirk"},{"text":"Charlie Skelton","link":"/entities/charlie-skelton"},{"text":"Charlie Spies","link":"/entities/charlie-spies"},{"text":"Charlotte Sweeney","link":"/entities/charlotte-sweeney"},{"text":"Charter Communications","link":"/entities/charter-communications"},{"text":"ChatGPT","link":"/entities/chatgpt"},{"text":"Chatham House","link":"/entities/chatham-house"},{"text":"Chauntyll Allen","link":"/entities/chauntyll-allen"},{"text":"Chaya Raichik","link":"/entities/chaya-raichik"},{"text":"Ché Alexander","link":"/entities/che-alexander"},{"text":"Check My Ads","link":"/entities/check-my-ads"},{"text":"Cheddi Jagan","link":"/entities/cheddi-jagan"},{"text":"Chelsea Manning","link":"/entities/chelsea-manning"},{"text":"Chen Zhi","link":"/entities/chen-zhi"},{"text":"CHEQ","link":"/entities/cheq"},{"text":"Cheri Oz","link":"/entities/cheri-oz"},{"text":"Chevening Programme","link":"/entities/chevening-programme"},{"text":"Chevron","link":"/entities/chevron"},{"text":"Cheyenne Hunt","link":"/entities/cheyenne-hunt"},{"text":"Children's Health Defense","link":"/entities/childrens-health-defense"},{"text":"China","link":"/entities/china"},{"text":"China Institute of Atomic Energy","link":"/entities/china-institute-of-atomic-energy"},{"text":"Chinese Communist Party","link":"/entities/chinese-communist-party"},{"text":"Chinese Ministry of National Defense","link":"/entities/chinese-ministry-of-national-defense"},{"text":"Chip Roy","link":"/entities/chip-roy"},{"text":"Chiquita Brands International","link":"/entities/chiquita-brands-international"},{"text":"Cho Tae-yul","link":"/entities/cho-tae-yul"},{"text":"Choi Sang-mok","link":"/entities/choi-sang-mok"},{"text":"Chosen Company","link":"/entities/chosen-company"},{"text":"Chris Beall","link":"/entities/chris-beall"},{"text":"Chris Christie","link":"/entities/chris-christie"},{"text":"Chris Cillizza","link":"/entities/chris-cillizza"},{"text":"Chris Coons","link":"/entities/chris-coons"},{"text":"Chris Cuomo","link":"/entities/chris-cuomo"},{"text":"Chris Deluzio","link":"/entities/chris-deluzio"},{"text":"Chris Elston","link":"/entities/chris-elston"},{"text":"Chris Hipkins","link":"/entities/chris-hipkins"},{"text":"Chris Kachouroff","link":"/entities/chris-kachouroff"},{"text":"Chris Kise","link":"/entities/chris-kise"},{"text":"Chris Krebs","link":"/entities/chris-krebs"},{"text":"Chris Landau","link":"/entities/chris-landau"},{"text":"Chris Murray","link":"/entities/chris-murray"},{"text":"Chris Nassetta","link":"/entities/chris-nassetta"},{"text":"Chris Paul","link":"/entities/chris-paul"},{"text":"Chris Pavlovski","link":"/entities/chris-pavlovski"},{"text":"Chris Van Hollen","link":"/entities/chris-van-hollen"},{"text":"Chris Wright","link":"/entities/chris-wright"},{"text":"Chrissy Houlahan","link":"/entities/chrissy-houlahan"},{"text":"Christian Lindner","link":"/entities/christian-lindner"},{"text":"Christian Malanga","link":"/entities/christian-malanga"},{"text":"Christina Koch","link":"/entities/christina-koch"},{"text":"Christine Fang","link":"/entities/christine-fang"},{"text":"Christine Geiger","link":"/entities/christine-geiger"},{"text":"Christopher Cooper","link":"/entities/christopher-cooper"},{"text":"Christopher Fox","link":"/entities/christopher-fox"},{"text":"Christopher Luxon","link":"/entities/christopher-luxon"},{"text":"Christopher Miller","link":"/entities/christopher-miller"},{"text":"Christopher Porter","link":"/entities/christopher-porter"},{"text":"Christopher Ruddy","link":"/entities/christopher-ruddy"},{"text":"Christopher Rufo","link":"/entities/christopher-rufo"},{"text":"Christopher Steele","link":"/entities/christopher-steele"},{"text":"Christopher Stevens","link":"/entities/christopher-stevens"},{"text":"Christopher Waller","link":"/entities/christopher-waller"},{"text":"Christopher Wray","link":"/entities/christopher-wray"},{"text":"Christy McCormick","link":"/entities/christy-mccormick"},{"text":"Chrystia Freeland","link":"/entities/chrystia-freeland"},{"text":"Chuck Grassley","link":"/entities/chuck-grassley"},{"text":"Chuck Gray","link":"/entities/chuck-gray"},{"text":"Chuck Schumer","link":"/entities/chuck-schumer"},{"text":"Chuck Todd","link":"/entities/chuck-todd"},{"text":"Chunghwa Telecom","link":"/entities/chunghwa-telecom"},{"text":"Church Committee","link":"/entities/church-committee"},{"text":"Church of Nigeria","link":"/entities/church-of-nigeria"},{"text":"Church of the Holy Sepulchre","link":"/entities/church-of-the-holy-sepulchre"},{"text":"Cilia Flores","link":"/entities/cilia-flores"},{"text":"Cincinnati Children's Hospital","link":"/entities/cincinnati-childrens-hospital"},{"text":"Cindy Berry","link":"/entities/cindy-berry"},{"text":"Cisco Systems","link":"/entities/cisco-systems"},{"text":"Citgo","link":"/entities/citgo"},{"text":"Cities Church","link":"/entities/cities-church"},{"text":"Citigroup","link":"/entities/citigroup"},{"text":"Citizens for Responsibility and Ethics in Washington","link":"/entities/citizens-for-responsibility-and-ethics-in-washington"},{"text":"Citizens Redistricting Commission","link":"/entities/citizens-redistricting-commission"},{"text":"City of London","link":"/entities/city-of-london"},{"text":"Civil Military Coordination Centre","link":"/entities/civil-military-coordination-centre"},{"text":"CK Hutchison","link":"/entities/ck-hutchison"},{"text":"Claire Woodall","link":"/entities/claire-woodall"},{"text":"Claire Woodall-Vogg","link":"/entities/claire-woodall-vogg"},{"text":"Clan del Golfo","link":"/entities/clan-del-golfo"},{"text":"Clarence Thomas","link":"/entities/clarence-thomas"},{"text":"Claudia Sheinbaum","link":"/entities/claudia-sheinbaum"},{"text":"Claudia Tenney","link":"/entities/claudia-tenney"},{"text":"Claudine Gay","link":"/entities/claudine-gay"},{"text":"Claudio Manuel Neves Valente","link":"/entities/claudio-manuel-neves-valente"},{"text":"Clay Higgins","link":"/entities/clay-higgins"},{"text":"Clay Parikh","link":"/entities/clay-parikh"},{"text":"Clean Wisconsin","link":"/entities/clean-wisconsin"},{"text":"Cleta Mitchell","link":"/entities/cleta-mitchell"},{"text":"Clif High","link":"/entities/clif-high"},{"text":"Clinton Foundation","link":"/entities/clinton-foundation"},{"text":"Clinton Global Initiative","link":"/entities/clinton-global-initiative"},{"text":"Club for Growth","link":"/entities/club-for-growth"},{"text":"CNBC","link":"/entities/cnbc"},{"text":"CNCERT/CC","link":"/entities/cncert-cc"},{"text":"CNN","link":"/entities/cnn"},{"text":"CNOOC","link":"/entities/cnooc"},{"text":"Coalition Provisional Authority","link":"/entities/coalition-provisional-authority"},{"text":"Coca-Cola","link":"/entities/coca-cola"},{"text":"CodePink","link":"/entities/codepink"},{"text":"Coinbase","link":"/entities/coinbase"},{"text":"Coindesk","link":"/entities/coindesk"},{"text":"Cole Thomas Allen","link":"/entities/cole-thomas-allen"},{"text":"Colin Carroll","link":"/entities/colin-carroll"},{"text":"Colin McDonald","link":"/entities/colin-mcdonald"},{"text":"Collective Security Treaty Organization","link":"/entities/collective-security-treaty-organization"},{"text":"Colleen Kollar-Kotelly","link":"/entities/colleen-kollar-kotelly"},{"text":"Colleen McMahon","link":"/entities/colleen-mcmahon"},{"text":"Collin Rugg","link":"/entities/collin-rugg"},{"text":"Colombia","link":"/entities/colombia"},{"text":"Colorado","link":"/entities/colorado"},{"text":"Colorado County Clerks Association","link":"/entities/colorado-county-clerks-association"},{"text":"Colorado Court of Appeals","link":"/entities/colorado-court-of-appeals"},{"text":"Colorado Department of Corrections","link":"/entities/colorado-department-of-corrections"},{"text":"Colorado Department of Elections","link":"/entities/colorado-department-of-elections"},{"text":"Colorado Department of State","link":"/entities/colorado-department-of-state"},{"text":"Colorado Education Association","link":"/entities/colorado-education-association"},{"text":"Colorado Newsline","link":"/entities/colorado-newsline"},{"text":"Colorado Public Radio","link":"/entities/colorado-public-radio"},{"text":"Colorado Republican Party","link":"/entities/colorado-republican-party"},{"text":"Colorado Supreme Court","link":"/entities/colorado-supreme-court"},{"text":"Colossal Biosciences","link":"/entities/colossal-biosciences"},{"text":"Colossus 1","link":"/entities/colossus-1"},{"text":"Colton Moore","link":"/entities/colton-moore"},{"text":"Columbia University","link":"/entities/columbia-university"},{"text":"Combined Maritime Forces","link":"/entities/combined-maritime-forces"},{"text":"Comcast","link":"/entities/comcast"},{"text":"COMELEC (Commission on Elections, Philippines)","link":"/entities/comelec"},{"text":"Commission on Presidential Debates","link":"/entities/commission-on-presidential-debates"},{"text":"Committee for the First Amendment","link":"/entities/committee-for-the-first-amendment"},{"text":"Committee on House Administration","link":"/entities/committee-on-house-administration"},{"text":"Committee to Investigate Russia","link":"/entities/committee-to-investigate-russia"},{"text":"Committee to Protect Journalists","link":"/entities/committee-to-protect-journalists"},{"text":"Commodity Futures Trading Commission","link":"/entities/commodity-futures-trading-commission"},{"text":"Common Cause","link":"/entities/common-cause"},{"text":"Commonwealth of Nations","link":"/entities/commonwealth-of-nations"},{"text":"Communist China","link":"/entities/communist-china"},{"text":"Community of Sant'Egidio","link":"/entities/community-of-santegidio"},{"text":"Condé Nast","link":"/entities/conde-nast"},{"text":"Condoleezza Rice","link":"/entities/condoleezza-rice"},{"text":"Conflict, Stability and Security Fund","link":"/entities/conflict-stability-and-security-fund"},{"text":"Congo River Alliance","link":"/entities/congo-river-alliance"},{"text":"Congress","link":"/entities/congress"},{"text":"Congressional Budget Office","link":"/entities/congressional-budget-office"},{"text":"Congressional Cannabis Caucus","link":"/entities/congressional-cannabis-caucus"},{"text":"Congressional Hispanic Caucus","link":"/entities/congressional-hispanic-caucus"},{"text":"Congressional Research Service","link":"/entities/congressional-research-service"},{"text":"Connor Hellebuyck","link":"/entities/connor-hellebuyck"},{"text":"Conor McGregor","link":"/entities/conor-mcgregor"},{"text":"Conscious Strength","link":"/entities/conscious-strength"},{"text":"Conservative Partnership Institute","link":"/entities/conservative-partnership-institute"},{"text":"Conservative Party of Canada","link":"/entities/conservative-party-of-canada"},{"text":"Conservative Political Action Conference","link":"/entities/conservative-political-action-conference"},{"text":"Conservative Treehouse","link":"/entities/conservative-treehouse"},{"text":"Consortium News","link":"/entities/consortium-news"},{"text":"Conspiracy of Truth","link":"/entities/conspiracy-of-truth"},{"text":"Constellation Energy","link":"/entities/constellation-energy"},{"text":"Constitutional Court of Korea","link":"/entities/constitutional-court-of-korea"},{"text":"Consumer Financial Protection Bureau","link":"/entities/consumer-financial-protection-bureau"},{"text":"Cook Political Report","link":"/entities/cook-political-report"},{"text":"Corey Lewandowski","link":"/entities/corey-lewandowski"},{"text":"Cori Bush","link":"/entities/cori-bush"},{"text":"Corie Barry","link":"/entities/corie-barry"},{"text":"Corina Yoris","link":"/entities/corina-yoris"},{"text":"Corneille Nangaa","link":"/entities/corneille-nangaa"},{"text":"Cornell University School of Industrial and Labor Relations","link":"/entities/cornell-university-school-of-industrial-and-labor-relations"},{"text":"Corporation for Public Broadcasting","link":"/entities/corporation-for-public-broadcasting"},{"text":"Correct the Record","link":"/entities/correct-the-record"},{"text":"Corruption Investigation Office for High-ranking Officials (South Korea)","link":"/entities/corruption-investigation-office"},{"text":"Cory Booker","link":"/entities/cory-booker"},{"text":"Cory Mills","link":"/entities/cory-mills"},{"text":"Cosmos Mystery Area","link":"/entities/cosmos-mystery-area"},{"text":"Costs of War Project","link":"/entities/costs-of-war-project"},{"text":"Council for Inclusive Capitalism","link":"/entities/council-for-inclusive-capitalism"},{"text":"Council of Europe","link":"/entities/council-of-europe"},{"text":"Council on American-Islamic Relations","link":"/entities/council-on-american-islamic-relations"},{"text":"Council on Foreign Relations","link":"/entities/council-on-foreign-relations"},{"text":"Courtney Kramer","link":"/entities/courtney-kramer"},{"text":"Cracker Barrel","link":"/entities/cracker-barrel"},{"text":"Craig Greenberg","link":"/entities/craig-greenberg"},{"text":"Craig Maceri","link":"/entities/craig-maceri"},{"text":"Craig Mason","link":"/entities/craig-mason"},{"text":"Creative Artists Agency","link":"/entities/creative-artists-agency"},{"text":"Credit Suisse","link":"/entities/credit-suisse"},{"text":"Crimea","link":"/entities/crimea"},{"text":"Cristhian Ortega-Lopez","link":"/entities/cristhian-ortega-lopez"},{"text":"CrowdStrike","link":"/entities/crowdstrike"},{"text":"Crown Prosecution Service","link":"/entities/crown-prosecution-service"},{"text":"Crystal Palace F.C.","link":"/entities/crystal-palace-fc"},{"text":"Cuba","link":"/entities/cuba"},{"text":"Culture of Change","link":"/entities/culture-of-change"},{"text":"Curt Weldon","link":"/entities/curt-weldon"},{"text":"Curtis Sliwa","link":"/entities/curtis-sliwa"},{"text":"Customs and Border Protection","link":"/entities/customs-and-border-protection"},{"text":"CVS Health","link":"/entities/cvs-health"},{"text":"Cybersecurity and Infrastructure Security Agency","link":"/entities/cisa"},{"text":"Cybersecurity and Infrastructure Security Agency","link":"/entities/cybersecurity-and-infrastructure-security-agency"},{"text":"Cyprus","link":"/entities/cyprus"},{"text":"Cyril Ramaphosa","link":"/entities/cyril-ramaphosa"},{"text":"Czech Republic","link":"/entities/czech-republic"},{"text":"D. John Sauer","link":"/entities/d-john-sauer"},{"text":"D.C. Circuit Court of Appeals","link":"/entities/dc-circuit-court-of-appeals"},{"text":"Dade Phelan","link":"/entities/dade-phelan"},{"text":"Daily Caller","link":"/entities/daily-caller"},{"text":"Daily Mail","link":"/entities/daily-mail"},{"text":"Dali (container ship)","link":"/entities/dali"},{"text":"Dallas Mavericks","link":"/entities/dallas-mavericks"},{"text":"Damar Hamlin","link":"/entities/damar-hamlin"},{"text":"Damascus","link":"/entities/damascus"},{"text":"Damian Williams","link":"/entities/damian-williams"},{"text":"Dan \\"Razin\\" Caine","link":"/entities/dan-caine"},{"text":"Dan Bongino","link":"/entities/dan-bongino"},{"text":"Dan Caldwell","link":"/entities/dan-caldwell"},{"text":"Dan Crenshaw","link":"/entities/dan-crenshaw"},{"text":"Dan Driscoll","link":"/entities/dan-driscoll"},{"text":"Dan Gertler","link":"/entities/dan-gertler"},{"text":"Dan Goldman","link":"/entities/dan-goldman"},{"text":"Dan Scavino","link":"/entities/dan-scavino"},{"text":"Dan Sullivan","link":"/entities/dan-sullivan"},{"text":"Dana Barnes","link":"/entities/dana-barnes"},{"text":"Dana Bash","link":"/entities/dana-bash"},{"text":"Dana Nessel","link":"/entities/dana-nessel"},{"text":"Dana Walden","link":"/entities/dana-walden"},{"text":"Dana White","link":"/entities/dana-white"},{"text":"Dana Williamson","link":"/entities/dana-williamson"},{"text":"Daniel Goodwyn","link":"/entities/daniel-goodwyn"},{"text":"Daniel Hagari","link":"/entities/daniel-hagari"},{"text":"Daniel Jernigan","link":"/entities/daniel-jernigan"},{"text":"Daniel Levitt","link":"/entities/daniel-levitt"},{"text":"Daniel Noboa","link":"/entities/daniel-noboa"},{"text":"Daniel Penny","link":"/entities/daniel-penny"},{"text":"Daniel Perry","link":"/entities/daniel-perry"},{"text":"Daniel Richman","link":"/entities/daniel-richman"},{"text":"Daniel S. Pearson","link":"/entities/daniel-pearson"},{"text":"Daniel Turner","link":"/entities/daniel-turner"},{"text":"Danielle Sassoon","link":"/entities/danielle-sassoon"},{"text":"Danielle Smith","link":"/entities/danielle-smith"},{"text":"Danny Danon","link":"/entities/danny-danon"},{"text":"Danny Werfel","link":"/entities/danny-werfel"},{"text":"Darin Selnick","link":"/entities/darin-selnick"},{"text":"Dario Amodei","link":"/entities/dario-amodei"},{"text":"Dark Storm Team","link":"/entities/dark-storm-team"},{"text":"DARPA","link":"/entities/darpa"},{"text":"Darrell Issa","link":"/entities/darrell-issa"},{"text":"Darren Beattie","link":"/entities/darren-beattie"},{"text":"Darrin Bell","link":"/entities/darrin-bell"},{"text":"Darryl Cooper","link":"/entities/darryl-cooper"},{"text":"Darya Dugina","link":"/entities/darya-dugina"},{"text":"Dave Abrams","link":"/entities/dave-abrams"},{"text":"Dave Calhoun","link":"/entities/dave-calhoun"},{"text":"Dave Chappelle","link":"/entities/dave-chappelle"},{"text":"Dave Joyce","link":"/entities/dave-joyce"},{"text":"Dave McCormick","link":"/entities/dave-mccormick"},{"text":"Dave Portnoy","link":"/entities/dave-portnoy"},{"text":"Dave Ramsey","link":"/entities/dave-ramsey"},{"text":"Dave Rubin","link":"/entities/dave-rubin"},{"text":"David Ames Wells","link":"/entities/david-ames-wells"},{"text":"David Banks","link":"/entities/david-banks"},{"text":"David Barnea","link":"/entities/david-barnea"},{"text":"David Becker","link":"/entities/david-becker"},{"text":"David Ben-Gurion","link":"/entities/david-ben-gurion"},{"text":"David Boies","link":"/entities/david-boies"},{"text":"David Bratslavsky","link":"/entities/david-bratslavsky"},{"text":"David Brock","link":"/entities/david-brock"},{"text":"David Cameron","link":"/entities/david-cameron"},{"text":"David Cole","link":"/entities/david-cole"},{"text":"David Cook","link":"/entities/david-cook"},{"text":"David Crowley","link":"/entities/david-crowley"},{"text":"David DePape","link":"/entities/david-depape"},{"text":"David Djaïz","link":"/entities/david-djaiz"},{"text":"David Ellison","link":"/entities/david-ellison"},{"text":"David Faber","link":"/entities/david-faber"},{"text":"David Grusch","link":"/entities/david-grusch"},{"text":"David Hause","link":"/entities/david-hause"},{"text":"David Hogg","link":"/entities/david-hogg"},{"text":"David J. Bolter","link":"/entities/david-j-bolter"},{"text":"David Lammy","link":"/entities/david-lammy"},{"text":"David Lebryk","link":"/entities/david-lebryk"},{"text":"David Legates","link":"/entities/david-legates"},{"text":"David Maland","link":"/entities/david-maland"},{"text":"David Morens","link":"/entities/david-morens"},{"text":"David Perdue","link":"/entities/david-perdue"},{"text":"David Plouffe","link":"/entities/david-plouffe"},{"text":"David Pressman","link":"/entities/david-pressman"},{"text":"David Sacks","link":"/entities/david-sacks"},{"text":"David Schoen","link":"/entities/david-schoen"},{"text":"David Shafer","link":"/entities/david-shafer"},{"text":"David Sheen","link":"/entities/david-sheen"},{"text":"David Shipley","link":"/entities/david-shipley"},{"text":"David Solomon","link":"/entities/david-solomon"},{"text":"David Steiner","link":"/entities/david-steiner"},{"text":"David Urias","link":"/entities/david-urias"},{"text":"David Weiss","link":"/entities/david-weiss"},{"text":"David Whitehead","link":"/entities/david-whitehead"},{"text":"David Zaslav","link":"/entities/david-zaslav"},{"text":"Dawn Addis","link":"/entities/dawn-addis"},{"text":"Dawn Buckingham","link":"/entities/dawn-buckingham"},{"text":"Dawn Engoron","link":"/entities/dawn-engoron"},{"text":"DC Bar","link":"/entities/dc-bar"},{"text":"DC Draino","link":"/entities/dc-draino"},{"text":"De La Rue PLC","link":"/entities/de-la-rue"},{"text":"Deamonte Kendrick","link":"/entities/deamonte-kendrick"},{"text":"Dean Phillips","link":"/entities/dean-phillips"},{"text":"Dean Pregerson","link":"/entities/dean-pregerson"},{"text":"Dean Roy","link":"/entities/dean-roy"},{"text":"Deanna Adkins","link":"/entities/deanna-adkins"},{"text":"Deb Haaland","link":"/entities/deb-haaland"},{"text":"Debbie Wasserman Schultz","link":"/entities/debbie-wasserman-schultz"},{"text":"Deborah Birx","link":"/entities/deborah-birx"},{"text":"Debra Steidel Wall","link":"/entities/debra-steidel-wall"},{"text":"Debrina Kawam","link":"/entities/debrina-kawam"},{"text":"DeCarlos Brown Jr.","link":"/entities/decarlos-brown-jr"},{"text":"Decision Desk HQ","link":"/entities/decision-desk-hq"},{"text":"Declan Kelly","link":"/entities/declan-kelly"},{"text":"Dee Snider","link":"/entities/dee-snider"},{"text":"Deena Hinshaw","link":"/entities/deena-hinshaw"},{"text":"Deerfield School District 109","link":"/entities/deerfield-school-district-109"},{"text":"Defected","link":"/entities/defected"},{"text":"Defender of the Republic","link":"/entities/defender-of-the-republic"},{"text":"Defense Council (Iran)","link":"/entities/defense-council-iran"},{"text":"Defense Counterintelligence Command","link":"/entities/defense-counterintelligence-command"},{"text":"Defense Intelligence Agency","link":"/entities/defense-intelligence-agency"},{"text":"Defense Priorities","link":"/entities/defense-priorities"},{"text":"Delcy Rodríguez","link":"/entities/delcy-rodriguez"},{"text":"Delta Air Lines","link":"/entities/delta-air-lines"},{"text":"Delta State University","link":"/entities/delta-state-university"},{"text":"Demand Progress","link":"/entities/demand-progress"},{"text":"Democracy Docket","link":"/entities/democracy-docket"},{"text":"Democracy Forward","link":"/entities/democracy-forward"},{"text":"Democratic Majority for Israel","link":"/entities/democratic-majority-for-israel"},{"text":"Democratic National Committee","link":"/entities/democratic-national-committee"},{"text":"Democratic Party","link":"/entities/democratic-party"},{"text":"Democratic Party of Korea","link":"/entities/democratic-party-of-korea"},{"text":"Democratic Republic of the Congo","link":"/entities/democratic-republic-of-the-congo"},{"text":"Democratic Socialists of America","link":"/entities/democratic-socialists-of-america"},{"text":"Denmark","link":"/entities/denmark"},{"text":"Dennis M. Lynch Arena","link":"/entities/dennis-m-lynch-arena"},{"text":"Dennis Montgomery","link":"/entities/dennis-montgomery"},{"text":"Dennis Porter","link":"/entities/dennis-porter"},{"text":"Denver","link":"/entities/denver"},{"text":"Denver City Council","link":"/entities/denver-city-council"},{"text":"Denver District Court","link":"/entities/denver-district-court"},{"text":"Denver Police Department","link":"/entities/denver-police-department"},{"text":"Denys Shmyhal","link":"/entities/denys-shmyhal"},{"text":"Denys Yaroslavskyi","link":"/entities/denys-yaroslavskyi"},{"text":"Department of Agriculture","link":"/entities/department-of-agriculture"},{"text":"Department of Commerce","link":"/entities/department-of-commerce"},{"text":"Department of Defense Office of Inspector General","link":"/entities/department-of-defense-office-of-inspector-general"},{"text":"Department of Education","link":"/entities/department-of-education"},{"text":"Department of Energy","link":"/entities/department-of-energy"},{"text":"Department of Health and Human Services","link":"/entities/department-of-health-and-human-services"},{"text":"Department of Homeland Security","link":"/entities/department-of-homeland-security"},{"text":"Department of Housing and Urban Development","link":"/entities/department-of-housing-and-urban-development"},{"text":"Department of Justice","link":"/entities/department-of-justice"},{"text":"Department of Justice Office of Inspector General","link":"/entities/department-of-justice-office-of-inspector-general"},{"text":"Department of Labor","link":"/entities/department-of-labor"},{"text":"Department of the Interior","link":"/entities/department-of-the-interior"},{"text":"Department of Veterans Affairs","link":"/entities/department-of-veterans-affairs"},{"text":"Department of War","link":"/entities/department-of-war"},{"text":"Derek Chauvin","link":"/entities/derek-chauvin"},{"text":"Derek Harvey","link":"/entities/derek-harvey"},{"text":"Derrick Van Orden","link":"/entities/derrick-van-orden"},{"text":"Deutsche Bank","link":"/entities/deutsche-bank"},{"text":"Development Finance Corporation","link":"/entities/development-finance-corporation"},{"text":"Devendra Fadnavis","link":"/entities/devendra-fadnavis"},{"text":"Devin Haney","link":"/entities/devin-haney"},{"text":"Devin Nunes","link":"/entities/devin-nunes"},{"text":"Devon Archer","link":"/entities/devon-archer"},{"text":"DGSE","link":"/entities/dgse"},{"text":"Diana DeGette","link":"/entities/diana-degette"},{"text":"Dianna Gibson","link":"/entities/dianna-gibson"},{"text":"Dianne Feinstein","link":"/entities/dianne-feinstein"},{"text":"Dick Cheney","link":"/entities/dick-cheney"},{"text":"Dick Durbin","link":"/entities/dick-durbin"},{"text":"Die Linke","link":"/entities/die-linke"},{"text":"Diego Garcia","link":"/entities/diego-garcia"},{"text":"Digital Dollar Project","link":"/entities/digital-dollar-project"},{"text":"Digital Forensic Research Lab","link":"/entities/digital-forensic-research-lab"},{"text":"Digital World Acquisition Corp","link":"/entities/digital-world-acquisition-corp"},{"text":"Dimona","link":"/entities/dimona"},{"text":"Dinesh D'Souza","link":"/entities/dinesh-dsouza"},{"text":"Diosdado Cabello","link":"/entities/diosdado-cabello"},{"text":"Director's Initiative Group","link":"/entities/directors-initiative-group"},{"text":"Disney","link":"/entities/disney"},{"text":"District of Columbia National Guard","link":"/entities/district-of-columbia-national-guard"},{"text":"Dmitri Mehlhorn","link":"/entities/dmitri-mehlhorn"},{"text":"Dmitry Gordon","link":"/entities/dmitry-gordon"},{"text":"Dmitry Korchinsky","link":"/entities/dmitry-korchinsky"},{"text":"Dmitry Medvedev","link":"/entities/dmitry-medvedev"},{"text":"Dmitry Peskov","link":"/entities/dmitry-peskov"},{"text":"Dmitry Polyansky","link":"/entities/dmitry-polyansky"},{"text":"Dmytro Kuleba","link":"/entities/dmytro-kuleba"},{"text":"DOGE (Department of Government Efficiency)","link":"/entities/doge"},{"text":"Doha Forum","link":"/entities/doha-forum"},{"text":"Dominic Cummings","link":"/entities/dominic-cummings"},{"text":"Dominic LeBlanc","link":"/entities/dominic-leblanc"},{"text":"Dominion Voting Systems","link":"/entities/dominion-voting-systems"},{"text":"Don Bacon","link":"/entities/don-bacon"},{"text":"Don Davis","link":"/entities/don-davis"},{"text":"Don Lemon","link":"/entities/don-lemon"},{"text":"Donald Palmer","link":"/entities/donald-palmer"},{"text":"Donald Rumsfeld","link":"/entities/donald-rumsfeld"},{"text":"Donald Trump","link":"/entities/donald-trump"},{"text":"Donald Trump Jr.","link":"/entities/donald-trump-jr"},{"text":"Donald Tusk","link":"/entities/donald-tusk"},{"text":"Donald Wakeford","link":"/entities/donald-wakeford"},{"text":"Donda Sports","link":"/entities/donda-sports"},{"text":"Doug Band","link":"/entities/doug-band"},{"text":"Doug Burgum","link":"/entities/doug-burgum"},{"text":"Doug Ducey","link":"/entities/doug-ducey"},{"text":"Doug Emhoff","link":"/entities/doug-emhoff"},{"text":"Doug Ford","link":"/entities/doug-ford"},{"text":"Douglas Macgregor","link":"/entities/douglas-macgregor"},{"text":"Douglas Wise","link":"/entities/douglas-wise"},{"text":"Douglass Mackey","link":"/entities/douglass-mackey"},{"text":"Dow Chemical","link":"/entities/dow-chemical"},{"text":"DP World","link":"/entities/dp-world"},{"text":"Drew Ensign","link":"/entities/drew-ensign"},{"text":"Drew Sullivan","link":"/entities/drew-sullivan"},{"text":"Drug Enforcement Administration","link":"/entities/drug-enforcement-administration"},{"text":"Druze","link":"/entities/druze"},{"text":"Druzhba Pipeline","link":"/entities/druzhba-pipeline"},{"text":"Duane Davis","link":"/entities/duane-davis"},{"text":"Duke University","link":"/entities/duke-university"},{"text":"Dustin Burrows","link":"/entities/dustin-burrows"},{"text":"Dusty Johnson","link":"/entities/dusty-johnson"},{"text":"Dutch East India Company","link":"/entities/dutch-east-india-company"},{"text":"Dwayne Johnson","link":"/entities/dwayne-johnson"},{"text":"Dwight Eisenhower","link":"/entities/dwight-eisenhower"},{"text":"Dylan Mulvaney","link":"/entities/dylan-mulvaney"},{"text":"Dyno Nobel","link":"/entities/dyno-nobel"},{"text":"E. Jean Carroll","link":"/entities/e-jean-carroll"},{"text":"E*Trade","link":"/entities/e-trade"},{"text":"Earthjustice","link":"/entities/earthjustice"},{"text":"Eastern Economic Forum","link":"/entities/eastern-economic-forum"},{"text":"Eaton Fire","link":"/entities/eaton-fire"},{"text":"Ebrahim Raisi","link":"/entities/ebrahim-raisi"},{"text":"Ebrahim Zolfaghari","link":"/entities/ebrahim-zolfaghari"},{"text":"EcoHealth Alliance","link":"/entities/ecohealth-alliance"},{"text":"Economic Community of West African States (ECOWAS)","link":"/entities/ecowas"},{"text":"Economic Development Administration","link":"/entities/economic-development-administration"},{"text":"Economic Freedom Fighters","link":"/entities/economic-freedom-fighters"},{"text":"Ecuador","link":"/entities/ecuador"},{"text":"Ed Dowd","link":"/entities/ed-dowd"},{"text":"Ed Gallrein","link":"/entities/ed-gallrein"},{"text":"Ed Martin","link":"/entities/ed-martin"},{"text":"Edison Research","link":"/entities/edison-research"},{"text":"Edith Wilson","link":"/entities/edith-wilson"},{"text":"Edmundo González","link":"/entities/edmundo-gonzalez"},{"text":"Eduardo Flores-Ruiz","link":"/entities/eduardo-flores-ruiz"},{"text":"Edward Alden","link":"/entities/edward-alden"},{"text":"Edward Bernays","link":"/entities/edward-bernays"},{"text":"Edward Caban","link":"/entities/edward-caban"},{"text":"Edward Coristine","link":"/entities/edward-coristine"},{"text":"Edward Hackerman","link":"/entities/edward-hackerman"},{"text":"Edward Stettinius","link":"/entities/edward-stettinius"},{"text":"Edwin Meese III","link":"/entities/edwin-meese-iii"},{"text":"EFG International","link":"/entities/efg-international"},{"text":"Efraim Halevy","link":"/entities/efraim-halevy"},{"text":"Egmont Group","link":"/entities/egmont-group"},{"text":"Egypt","link":"/entities/egypt"},{"text":"Ehud Barak","link":"/entities/ehud-barak"},{"text":"Eknath Shinde","link":"/entities/eknath-shinde"},{"text":"Ekrem Imamoglu","link":"/entities/ekrem-imamoglu"},{"text":"El Salvador","link":"/entities/el-salvador"},{"text":"Elayna J. Youchah","link":"/entities/elayna-youchah"},{"text":"Elbridge Colby","link":"/entities/elbridge-colby"},{"text":"Election Assistance Commission","link":"/entities/election-assistance-commission"},{"text":"Election Infrastructure Information Sharing and Analysis Center","link":"/entities/ei-isac"},{"text":"Election Systems & Software","link":"/entities/election-systems-software"},{"text":"Election Truth Alliance","link":"/entities/election-truth-alliance"},{"text":"Electronic Arts","link":"/entities/electronic-arts"},{"text":"Electronic Registration Information Center (ERIC)","link":"/entities/electronic-registration-information-center"},{"text":"Elena Baturina","link":"/entities/elena-baturina"},{"text":"Elena Kagan","link":"/entities/elena-kagan"},{"text":"Elena Lasconi","link":"/entities/elena-lasconi"},{"text":"Eleni Kounalakis","link":"/entities/eleni-kounalakis"},{"text":"Eli Cohen","link":"/entities/eli-cohen"},{"text":"Eli Crane","link":"/entities/eli-crane"},{"text":"Eli Feldstein","link":"/entities/eli-feldstein"},{"text":"Eli Lilly","link":"/entities/eli-lilly"},{"text":"Eli Sharabi","link":"/entities/eli-sharabi"},{"text":"Elias Law Group","link":"/entities/elias-law-group"},{"text":"Elias Rodriguez","link":"/entities/elias-rodriguez"},{"text":"Eliezer Feldstein","link":"/entities/eliezer-feldstein"},{"text":"Elijah Boyd","link":"/entities/elijah-boyd"},{"text":"Elise Stefanik","link":"/entities/elise-stefanik"},{"text":"Elissa Slotkin","link":"/entities/elissa-slotkin"},{"text":"Elizabeth Bruenig","link":"/entities/elizabeth-bruenig"},{"text":"Elizabeth Prelogar","link":"/entities/elizabeth-prelogar"},{"text":"Elizabeth Warren","link":"/entities/elizabeth-warren"},{"text":"Elizabeth Yore","link":"/entities/elizabeth-yore"},{"text":"Ellen DeGeneres","link":"/entities/ellen-degeneres"},{"text":"Elliot Williams","link":"/entities/elliot-williams"},{"text":"Elon Musk","link":"/entities/elon-musk"},{"text":"Elvis Amoroso","link":"/entities/elvis-amoroso"},{"text":"Emanuel Fabian","link":"/entities/emanuel-fabian"},{"text":"Emerald Robinson","link":"/entities/emerald-robinson"},{"text":"Emerson College","link":"/entities/emerson-college"},{"text":"Emerson College Polling","link":"/entities/emerson-college-polling"},{"text":"Emil Bove","link":"/entities/emil-bove"},{"text":"Emily Gabriella Sommer","link":"/entities/emily-gabriella-sommer"},{"text":"Emma-Jo Morris","link":"/entities/emma-jo-morris"},{"text":"Emmanuel Macron","link":"/entities/emmanuel-macron"},{"text":"Emmerson Mnangagwa","link":"/entities/emmerson-mnangagwa"},{"text":"Endeavor","link":"/entities/endeavor"},{"text":"Enforcement Directorate","link":"/entities/enforcement-directorate"},{"text":"Enrique Tarrio","link":"/entities/enrique-tarrio"},{"text":"Environmental Defense Fund","link":"/entities/environmental-defense-fund"},{"text":"Environmental Protection Agency","link":"/entities/environmental-protection-agency"},{"text":"Enzo Fernández","link":"/entities/enzo-fernandez"},{"text":"Epic Games","link":"/entities/epic-games"},{"text":"Episcopal Church of Jerusalem and the Middle East","link":"/entities/episcopal-church-of-jerusalem-and-the-middle-east"},{"text":"Equalize","link":"/entities/equalize"},{"text":"Erebor","link":"/entities/erebor"},{"text":"Erez Reuveni","link":"/entities/erez-reuveni"},{"text":"Eric Adams","link":"/entities/eric-adams"},{"text":"Eric Ciaramella","link":"/entities/eric-ciaramella"},{"text":"Eric Coomer","link":"/entities/eric-coomer"},{"text":"Eric Garcetti","link":"/entities/eric-garcetti"},{"text":"Eric Holder","link":"/entities/eric-holder"},{"text":"Eric Johnson","link":"/entities/eric-johnson"},{"text":"Eric Olson","link":"/entities/eric-olson"},{"text":"Eric Schmitt","link":"/entities/eric-schmitt"},{"text":"Eric Swalwell","link":"/entities/eric-swalwell"},{"text":"Eric Tostrud","link":"/entities/eric-tostrud"},{"text":"Eric Trump","link":"/entities/eric-trump"},{"text":"Eric Weinstein","link":"/entities/eric-weinstein"},{"text":"Éric Zemmour","link":"/entities/eric-zemmour"},{"text":"Erica Carr","link":"/entities/erica-carr"},{"text":"Erich Speckin","link":"/entities/erich-speckin"},{"text":"Erick Eiting","link":"/entities/erick-eiting"},{"text":"Erik Brynjolfsson","link":"/entities/erik-brynjolfsson"},{"text":"Erik Carlson","link":"/entities/erik-carlson"},{"text":"Erik Prince","link":"/entities/erik-prince"},{"text":"Erik Siebert","link":"/entities/erik-siebert"},{"text":"Erika Kirk","link":"/entities/erika-kirk"},{"text":"Erika McEntarfer","link":"/entities/erika-mcentarfer"},{"text":"Erin Burnett","link":"/entities/erin-burnett"},{"text":"Ernest Ramirez","link":"/entities/ernest-ramirez"},{"text":"Errol Musk","link":"/entities/errol-musk"},{"text":"eSafety Commissioner (Australia)","link":"/entities/esafety-commissioner"},{"text":"Esmaeil Baqaei","link":"/entities/esmaeil-baqaei"},{"text":"Espen Barth Eide","link":"/entities/espen-barth-eide"},{"text":"ETH Zurich Center for Security Studies","link":"/entities/eth-zurich-center-for-security-studies"},{"text":"Eurasian Economic Union","link":"/entities/eurasian-economic-union"},{"text":"Eurasian Times","link":"/entities/eurasian-times"},{"text":"Euroclear","link":"/entities/euroclear"},{"text":"European Anti-Fraud Office (OLAF)","link":"/entities/european-anti-fraud-office"},{"text":"European Commission","link":"/entities/european-commission"},{"text":"European Council","link":"/entities/european-council"},{"text":"European Food Safety Authority","link":"/entities/european-food-safety-authority"},{"text":"European Medicines Agency","link":"/entities/european-medicines-agency"},{"text":"European Parliament","link":"/entities/european-parliament"},{"text":"European People's Party","link":"/entities/european-peoples-party"},{"text":"European Union","link":"/entities/european-union"},{"text":"Evalend Shipping","link":"/entities/evalend-shipping"},{"text":"Evan Corcoran","link":"/entities/evan-corcoran"},{"text":"Evan Gershkovich","link":"/entities/evan-gershkovich"},{"text":"Evergreen Group","link":"/entities/evergreen-group"},{"text":"Everpeak Hospitality","link":"/entities/everpeak-hospitality"},{"text":"Expert Forum","link":"/entities/expert-forum"},{"text":"Exxon Mobil","link":"/entities/exxon-mobil"},{"text":"ExxonMobil","link":"/entities/exxonmobil"},{"text":"Eyal Yakoby","link":"/entities/eyal-yakoby"},{"text":"Eyal Zamir","link":"/entities/eyal-zamir"},{"text":"Eye of the Storm","link":"/entities/eye-of-the-storm"},{"text":"Ezekiel Emanuel","link":"/entities/ezekiel-emanuel"},{"text":"Ezra Cohen Watnick","link":"/entities/ezra-cohen-watnick"},{"text":"F-35 Lightning II","link":"/entities/f-35"},{"text":"Fabian Society","link":"/entities/fabian-society"},{"text":"Facebook","link":"/entities/facebook"},{"text":"Facebook Agile Silicon Team (FAST)","link":"/entities/facebook-agile-silicon-team"},{"text":"Fair Fight","link":"/entities/fair-fight"},{"text":"Fairfax Bar & Grill","link":"/entities/fairfax-bar-and-grill"},{"text":"Fairfax County Public Schools","link":"/entities/fairfax-county-public-schools"},{"text":"Faisal bin Farhan","link":"/entities/faisal-bin-farhan"},{"text":"Faisal Mekdad","link":"/entities/faisal-mekdad"},{"text":"Fan Yifei","link":"/entities/fan-yifei"},{"text":"Fani Willis","link":"/entities/fani-willis"},{"text":"Fannie Mae","link":"/entities/fannie-mae"},{"text":"Farm Aid","link":"/entities/farm-aid"},{"text":"Fatah","link":"/entities/fatah"},{"text":"Faustin-Archange Touadéra","link":"/entities/faustin-touadera"},{"text":"FCI Tallahassee","link":"/entities/fci-tallahassee"},{"text":"February 17 Brigade","link":"/entities/february-17-brigade"},{"text":"Federal Aviation Administration","link":"/entities/federal-aviation-administration"},{"text":"Federal Bureau of Investigation (FBI)","link":"/entities/fbi"},{"text":"Federal Bureau of Prisons","link":"/entities/federal-bureau-of-prisons"},{"text":"Federal Communications Commission","link":"/entities/federal-communications-commission"},{"text":"Federal Correctional Institution, Tucson","link":"/entities/fci-tucson"},{"text":"Federal Deposit Insurance Corporation","link":"/entities/federal-deposit-insurance-corporation"},{"text":"Federal Election Commission","link":"/entities/federal-election-commission"},{"text":"Federal Emergency Management Agency (FEMA)","link":"/entities/fema"},{"text":"Federal Housing Finance Agency","link":"/entities/federal-housing-finance-agency"},{"text":"Federal Office for the Protection of the Constitution (BfV)","link":"/entities/federal-office-for-the-protection-of-the-constitution"},{"text":"Federal Open Market Committee","link":"/entities/federal-open-market-committee"},{"text":"Federal Railroad Administration","link":"/entities/federal-railroad-administration"},{"text":"Federal Reserve","link":"/entities/federal-reserve"},{"text":"Federal Reserve Bank of New York","link":"/entities/federal-reserve-bank-of-new-york"},{"text":"Federal Security Service","link":"/entities/federal-security-service"},{"text":"Federal Security Service (FSB)","link":"/entities/fsb"},{"text":"Federal Trade Commission","link":"/entities/federal-trade-commission"},{"text":"Federalist Society","link":"/entities/federalist-society"},{"text":"Federation of German Industries (BDI)","link":"/entities/federation-of-german-industries"},{"text":"Feeding Our Future","link":"/entities/feeding-our-future"},{"text":"Felix Bauckholt","link":"/entities/felix-bauckholt"},{"text":"Félix Tshisekedi","link":"/entities/felix-tshisekedi"},{"text":"Ferdinand Marcos Jr.","link":"/entities/ferdinand-marcos-jr"},{"text":"Fernando Villavicencio","link":"/entities/fernando-villavicencio"},{"text":"Fernwood Foundation","link":"/entities/fernwood-foundation"},{"text":"Ferran Torres","link":"/entities/ferran-torres"},{"text":"Fidelity Investments","link":"/entities/fidelity-investments"},{"text":"Fidesz","link":"/entities/fidesz"},{"text":"FIFA","link":"/entities/fifa"},{"text":"Financial Crimes Enforcement Network","link":"/entities/financial-crimes-enforcement-network"},{"text":"Financial Times","link":"/entities/financial-times"},{"text":"FinCEN Office of the Whistleblower","link":"/entities/fincen-office-of-the-whistleblower"},{"text":"Finland","link":"/entities/finland"},{"text":"Fire Point","link":"/entities/fire-point"},{"text":"Firefox","link":"/entities/firefox"},{"text":"First Choice Women's Resource Centers","link":"/entities/first-choice-womens-resource-centers"},{"text":"First Republic Bank","link":"/entities/first-republic-bank"},{"text":"First Ukrainian Division","link":"/entities/first-ukrainian-division"},{"text":"Fitch Ratings","link":"/entities/fitch-ratings"},{"text":"Five Eyes","link":"/entities/five-eyes"},{"text":"Fiverr","link":"/entities/fiverr"},{"text":"Flexport","link":"/entities/flexport"},{"text":"Florence Pan","link":"/entities/florence-pan"},{"text":"Florida Board of Governors","link":"/entities/florida-board-of-governors"},{"text":"Florida State University","link":"/entities/florida-state-university"},{"text":"FNSEA","link":"/entities/fnsea"},{"text":"Folarin Balogun","link":"/entities/folarin-balogun"},{"text":"Food and Drug Administration (FDA)","link":"/entities/food-and-drug-administration"},{"text":"Football Association","link":"/entities/football-association"},{"text":"Forbes","link":"/entities/forbes"},{"text":"Ford F-150 Lightning","link":"/entities/ford-f-150-lightning"},{"text":"Ford Motor Company","link":"/entities/ford-motor-company"},{"text":"Fordow Fuel Enrichment Plant","link":"/entities/fordow-fuel-enrichment-plant"},{"text":"Foreign Affairs","link":"/entities/foreign-affairs"},{"text":"Foreign Intelligence Service (SVR)","link":"/entities/foreign-intelligence-service"},{"text":"Foreign Intelligence Service of Russia (SVR)","link":"/entities/foreign-intelligence-service-of-russia"},{"text":"Forrester","link":"/entities/forrester"},{"text":"Fort Bliss","link":"/entities/fort-bliss"},{"text":"Fort Knox","link":"/entities/fort-knox"},{"text":"Fortress Investment Group","link":"/entities/fortress-investment-group"},{"text":"Fouad Shokr","link":"/entities/fouad-shokr"},{"text":"Foundation for Freedom Online","link":"/entities/foundation-for-freedom-online"},{"text":"Foundation for Individual Rights and Expression","link":"/entities/foundation-for-individual-rights-and-expression"},{"text":"Founders Fund","link":"/entities/founders-fund"},{"text":"Founding Fathers","link":"/entities/founding-fathers"},{"text":"Fox Business","link":"/entities/fox-business"},{"text":"Fox Corporation","link":"/entities/fox-corporation"},{"text":"Fox News","link":"/entities/fox-news"},{"text":"Fox Varian","link":"/entities/fox-varian"},{"text":"Fran Drescher","link":"/entities/fran-drescher"},{"text":"France","link":"/entities/france"},{"text":"Francesca Hong","link":"/entities/francesca-hong"},{"text":"Francey Hakes","link":"/entities/francey-hakes"},{"text":"Francis Chipimo","link":"/entities/francis-chipimo"},{"text":"Francis Collins","link":"/entities/francis-collins"},{"text":"Francois Chauvancy","link":"/entities/francois-chauvancy"},{"text":"Frank Bisignano","link":"/entities/frank-bisignano"},{"text":"Frank Giustra","link":"/entities/frank-giustra"},{"text":"Frank Kendall","link":"/entities/frank-kendall"},{"text":"Frank Luntz","link":"/entities/frank-luntz"},{"text":"Frank Richard Ahlgren III","link":"/entities/frank-richard-ahlgren-iii"},{"text":"Frank Sesno","link":"/entities/frank-sesno"},{"text":"Frank-Walter Steinmeier","link":"/entities/frank-walter-steinmeier"},{"text":"Frankie Val","link":"/entities/frankie-val"},{"text":"Franklin D. Roosevelt","link":"/entities/franklin-d-roosevelt"},{"text":"FrankSpeech","link":"/entities/frankspeech"},{"text":"Fred Fleitz","link":"/entities/fred-fleitz"},{"text":"Freddie Mac","link":"/entities/freddie-mac"},{"text":"Freddy Ivan Jandres-Parada","link":"/entities/freddy-ivan-jandres-parada"},{"text":"Freddy Ñáñez","link":"/entities/freddy-nanez"},{"text":"Free Democratic Party (FDP)","link":"/entities/free-democratic-party"},{"text":"Free Enterprise Project","link":"/entities/free-enterprise-project"},{"text":"Free Speech For People","link":"/entities/free-speech-for-people"},{"text":"Free Syrian Army","link":"/entities/free-syrian-army"},{"text":"Free Trade Union Committee","link":"/entities/free-trade-union-committee"},{"text":"Freedom 250","link":"/entities/freedom-250"},{"text":"Freedom Flotilla Coalition","link":"/entities/freedom-flotilla-coalition"},{"text":"Freedom Party of Austria","link":"/entities/freedom-party-of-austria"},{"text":"Freemasonry","link":"/entities/freemasonry"},{"text":"French Hill","link":"/entities/french-hill"},{"text":"Friedrich Merz","link":"/entities/friedrich-merz"},{"text":"FTI Consulting","link":"/entities/fti-consulting"},{"text":"FTX","link":"/entities/ftx"},{"text":"Fuad Shukr","link":"/entities/fuad-shukr"},{"text":"Fulton County","link":"/entities/fulton-county"},{"text":"Fulton County Special Purpose Grand Jury","link":"/entities/fulton-county-special-purpose-grand-jury"},{"text":"Fusion GPS","link":"/entities/fusion-gps"},{"text":"Future Forward","link":"/entities/future-forward"},{"text":"G. Gordon Liddy","link":"/entities/g-gordon-liddy"},{"text":"G.K. Chesterton","link":"/entities/gk-chesterton"},{"text":"G20","link":"/entities/g20"},{"text":"G7","link":"/entities/g7"},{"text":"Gabon","link":"/entities/gabon"},{"text":"Gabriel Attal","link":"/entities/gabriel-attal"},{"text":"GAESA","link":"/entities/gaesa"},{"text":"Gal Luft","link":"/entities/gal-luft"},{"text":"Gali Baharav-Miara","link":"/entities/gali-baharav-miara"},{"text":"Gallup","link":"/entities/gallup"},{"text":"Game Theory (Badlands Media)","link":"/entities/game-theory-show"},{"text":"Game Theory (show)","link":"/entities/game-theory"},{"text":"GameStop","link":"/entities/gamestop"},{"text":"Garland Favorito","link":"/entities/garland-favorito"},{"text":"Garrett Ziegler","link":"/entities/garrett-ziegler"},{"text":"GART","link":"/entities/gart"},{"text":"Gary Bettman","link":"/entities/gary-bettman"},{"text":"Gary Gensler","link":"/entities/gary-gensler"},{"text":"Gary Peters","link":"/entities/gary-peters"},{"text":"Gary Shapley","link":"/entities/gary-shapley"},{"text":"Gary Webb","link":"/entities/gary-webb"},{"text":"Gates Foundation","link":"/entities/gates-foundation"},{"text":"GATX Corporation","link":"/entities/gatx-corporation"},{"text":"Gavin Newsom","link":"/entities/gavin-newsom"},{"text":"Gavin Wilde","link":"/entities/gavin-wilde"},{"text":"Gayle King","link":"/entities/gayle-king"},{"text":"Gaza","link":"/entities/gaza"},{"text":"Gaza Executive Board","link":"/entities/gaza-executive-board"},{"text":"Gaza Humanitarian Foundation","link":"/entities/gaza-humanitarian-foundation"},{"text":"Gazprom","link":"/entities/gazprom"},{"text":"gCaptain","link":"/entities/gcaptain"},{"text":"Geert Wilders","link":"/entities/geert-wilders"},{"text":"Gene Deal","link":"/entities/gene-deal"},{"text":"Gene Hamilton","link":"/entities/gene-hamilton"},{"text":"General Motors","link":"/entities/general-motors"},{"text":"General Services Administration","link":"/entities/general-services-administration"},{"text":"Genghis Khan","link":"/entities/genghis-khan"},{"text":"Geopolitics with Ghost","link":"/entities/geopolitics-with-ghost"},{"text":"George Alan Kelly","link":"/entities/george-alan-kelly"},{"text":"George Floyd","link":"/entities/george-floyd"},{"text":"George H.W. Bush","link":"/entities/george-hw-bush"},{"text":"George Kent","link":"/entities/george-kent"},{"text":"George L. Russell III","link":"/entities/george-l-russell-iii"},{"text":"George Mason University","link":"/entities/george-mason-university"},{"text":"George Santos","link":"/entities/george-santos"},{"text":"George Simion","link":"/entities/george-simion"},{"text":"George Soros","link":"/entities/george-soros"},{"text":"George Steinbrenner","link":"/entities/george-steinbrenner"},{"text":"George Stephanopoulos","link":"/entities/george-stephanopoulos"},{"text":"George W. Bush","link":"/entities/george-w-bush"},{"text":"George Washington","link":"/entities/george-washington"},{"text":"George Washington University","link":"/entities/george-washington-university"},{"text":"Georges Bergès","link":"/entities/georges-berges"},{"text":"Georgia Bureau of Investigation","link":"/entities/georgia-bureau-of-investigation"},{"text":"Georgia Court of Appeals","link":"/entities/georgia-court-of-appeals"},{"text":"Georgia Senate","link":"/entities/georgia-senate"},{"text":"Georgia State Election Board","link":"/entities/georgia-state-election-board"},{"text":"Georgian Dream","link":"/entities/georgian-dream"},{"text":"Georgy Mazurashu","link":"/entities/georgy-mazurashu"},{"text":"Gerald Ford","link":"/entities/gerald-ford"},{"text":"German Galushchenko","link":"/entities/german-galushchenko"},{"text":"Germany","link":"/entities/germany"},{"text":"Gershon Hacohen","link":"/entities/gershon-hacohen"},{"text":"Gewerkschaft der Polizei","link":"/entities/gewerkschaft-der-polizei"},{"text":"Ghazala Hashmi","link":"/entities/ghazala-hashmi"},{"text":"Ghislaine Maxwell","link":"/entities/ghislaine-maxwell"},{"text":"Gholamreza Soleimani","link":"/entities/gholamreza-soleimani"},{"text":"Ghost of Patrick Henry","link":"/entities/ghost-of-patrick-henry"},{"text":"GhostofBasedPatrickHenry","link":"/entities/ghostofbasedpatrickhenry"},{"text":"Gideon Saar","link":"/entities/gideon-saar"},{"text":"Gigafactory Berlin-Brandenburg","link":"/entities/gigafactory-berlin-brandenburg"},{"text":"Gila Gamliel","link":"/entities/gila-gamliel"},{"text":"Gilbert Chagoury","link":"/entities/gilbert-chagoury"},{"text":"Gilbert Clark Jr.","link":"/entities/gilbert-clark-jr"},{"text":"Gina Raimondo","link":"/entities/gina-raimondo"},{"text":"Giorgia Meloni","link":"/entities/giorgia-meloni"},{"text":"Giovanni Gentile","link":"/entities/giovanni-gentile"},{"text":"Giuseppe Cavo Dragone","link":"/entities/giuseppe-cavo-dragone"},{"text":"GiveSendGo","link":"/entities/givesendgo"},{"text":"Gladstone AI","link":"/entities/gladstone-ai"},{"text":"Glen Doherty","link":"/entities/glen-doherty"},{"text":"Glencore","link":"/entities/glencore"},{"text":"Glenn Greenwald","link":"/entities/glenn-greenwald"},{"text":"Glenn Youngkin","link":"/entities/glenn-youngkin"},{"text":"Glenton Gilzean","link":"/entities/glenton-gilzean"},{"text":"Global Engagement Center","link":"/entities/global-engagement-center"},{"text":"Global Harmony Consortium","link":"/entities/global-harmony-consortium"},{"text":"Global Risk Advisors","link":"/entities/global-risk-advisors"},{"text":"Global Times","link":"/entities/global-times"},{"text":"GlobalFoundries","link":"/entities/globalfoundries"},{"text":"GlobalX","link":"/entities/globalx"},{"text":"Glock","link":"/entities/glock"},{"text":"Gloria Johnson","link":"/entities/gloria-johnson"},{"text":"Gloria Romero","link":"/entities/gloria-romero"},{"text":"GMoney","link":"/entities/gmoney"},{"text":"God Izraelov","link":"/entities/god-izraelov"},{"text":"Goldman Sachs","link":"/entities/goldman-sachs"},{"text":"Gonzalo Lira","link":"/entities/gonzalo-lira"},{"text":"GOOD Meat","link":"/entities/good-meat"},{"text":"Google","link":"/entities/google"},{"text":"Google Threat Analysis Group","link":"/entities/google-threat-analysis-group"},{"text":"Gordie Howe International Bridge","link":"/entities/gordie-howe-international-bridge"},{"text":"Gosha Rubchinskiy","link":"/entities/gosha-rubchinskiy"},{"text":"Government Accountability Office","link":"/entities/government-accountability-office"},{"text":"Government Communications Security Bureau","link":"/entities/government-communications-security-bureau"},{"text":"Goya Foods","link":"/entities/goya-foods"},{"text":"Goznak","link":"/entities/goznak"},{"text":"Grace Ocean","link":"/entities/grace-ocean"},{"text":"Graham Lowry","link":"/entities/graham-lowry"},{"text":"Graham Platner","link":"/entities/graham-platner"},{"text":"Great Lakes Neighbors United","link":"/entities/great-lakes-neighbors-united"},{"text":"Greece","link":"/entities/greece"},{"text":"Green Street","link":"/entities/green-street"},{"text":"Green Zone","link":"/entities/green-zone"},{"text":"Greenland","link":"/entities/greenland"},{"text":"Greg Abbott","link":"/entities/greg-abbott"},{"text":"Greg Brockman","link":"/entities/greg-brockman"},{"text":"Greg Casar","link":"/entities/greg-casar"},{"text":"Greg Gutfeld","link":"/entities/greg-gutfeld"},{"text":"Greg Price","link":"/entities/greg-price"},{"text":"Gregg Phillips","link":"/entities/gregg-phillips"},{"text":"Gregory Becker","link":"/entities/gregory-becker"},{"text":"Gregory Bovino","link":"/entities/gregory-bovino"},{"text":"Gremi Media","link":"/entities/gremi-media"},{"text":"Greta Thunberg","link":"/entities/greta-thunberg"},{"text":"Greta Van Susteren","link":"/entities/greta-van-susteren"},{"text":"Gretchen Whitmer","link":"/entities/gretchen-whitmer"},{"text":"Grey Bull Rescue Foundation","link":"/entities/grey-bull-rescue-foundation"},{"text":"Grimes","link":"/entities/grimes"},{"text":"Grok","link":"/entities/grok"},{"text":"Grover Cleveland","link":"/entities/grover-cleveland"},{"text":"GSK","link":"/entities/gsk"},{"text":"Guantánamo Bay","link":"/entities/guantanamo-bay"},{"text":"Guidehouse","link":"/entities/guidehouse"},{"text":"Guido Crosetto","link":"/entities/guido-crosetto"},{"text":"Guinea-Bissau","link":"/entities/guinea-bissau"},{"text":"Gulf Cartel","link":"/entities/gulf-cartel"},{"text":"Gulf Clan","link":"/entities/gulf-clan"},{"text":"Gulf Cooperation Council","link":"/entities/gulf-cooperation-council"},{"text":"Gulf of Oman","link":"/entities/gulf-of-oman"},{"text":"Gun Owners of America","link":"/entities/gun-owners-of-america"},{"text":"Gun Violence Archive","link":"/entities/gun-violence-archive"},{"text":"Guo Jiakun","link":"/entities/guo-jiakun"},{"text":"Gustavo Petro","link":"/entities/gustavo-petro"},{"text":"Guttmacher Institute","link":"/entities/guttmacher-institute"},{"text":"Guy Berger","link":"/entities/guy-berger"},{"text":"Guy Reschenthaler","link":"/entities/guy-reschenthaler"},{"text":"Guyana","link":"/entities/guyana"},{"text":"Gwynne Wilcox","link":"/entities/gwynne-wilcox"},{"text":"Haaretz","link":"/entities/haaretz"},{"text":"Habsburg Dynasty","link":"/entities/habsburg-dynasty"},{"text":"Hadas Klein","link":"/entities/hadas-klein"},{"text":"Hailey Davidson","link":"/entities/hailey-davidson"},{"text":"Haiti","link":"/entities/haiti"},{"text":"Hakan Fidan","link":"/entities/hakan-fidan"},{"text":"Hakeem Jeffries","link":"/entities/hakeem-jeffries"},{"text":"Halle Berry","link":"/entities/halle-berry"},{"text":"Halliburton","link":"/entities/halliburton"},{"text":"Halyna Hutchins","link":"/entities/halyna-hutchins"},{"text":"Hamad bin Isa Al Khalifa","link":"/entities/hamad-bin-isa-al-khalifa"},{"text":"Hamad bin Khalifa Al Thani","link":"/entities/hamad-bin-khalifa-al-thani"},{"text":"Hamas","link":"/entities/hamas"},{"text":"Hamilton P. Fox III","link":"/entities/hamilton-p-fox"},{"text":"Hampshire Police","link":"/entities/hampshire-police"},{"text":"Hampton Creek","link":"/entities/hampton-creek"},{"text":"Hamtramck","link":"/entities/hamtramck"},{"text":"Han Duck-soo","link":"/entities/han-duck-soo"},{"text":"Hannah Dugan","link":"/entities/hannah-dugan"},{"text":"Hannah Gutierrez-Reed","link":"/entities/hannah-gutierrez-reed"},{"text":"Hannah Natanson","link":"/entities/hannah-natanson"},{"text":"Hanoch Milwidsky","link":"/entities/hanoch-milwidsky"},{"text":"Hansjörg Wyss","link":"/entities/hansjorg-wyss"},{"text":"Hanwha Ocean","link":"/entities/hanwha-ocean"},{"text":"Haredi Judaism","link":"/entities/haredi-judaism"},{"text":"Harley Pasternak","link":"/entities/harley-pasternak"},{"text":"Harmeet Dhillon","link":"/entities/harmeet-dhillon"},{"text":"Harold Daggett","link":"/entities/harold-daggett"},{"text":"Harold McQuaker","link":"/entities/harold-mcquaker"},{"text":"Harold Medina","link":"/entities/harold-medina"},{"text":"Harris Faulkner","link":"/entities/harris-faulkner"},{"text":"Harrison Butker","link":"/entities/harrison-butker"},{"text":"Harrison County Board of Education","link":"/entities/harrison-county-board-of-education"},{"text":"Harrison Deal","link":"/entities/harrison-deal"},{"text":"Harrison Floyd","link":"/entities/harrison-floyd"},{"text":"Harrison Smith","link":"/entities/harrison-smith"},{"text":"Harry Dent","link":"/entities/harry-dent"},{"text":"Harry Dunn","link":"/entities/harry-dunn"},{"text":"Harry Enten","link":"/entities/harry-enten"},{"text":"Harry Leinenweber","link":"/entities/harry-leinenweber"},{"text":"Harry Sargeant III","link":"/entities/harry-sargeant-iii"},{"text":"Hart Research Associates","link":"/entities/hart-research-associates"},{"text":"Harvard Medical School","link":"/entities/harvard-medical-school"},{"text":"Harvard University","link":"/entities/harvard-university"},{"text":"Harvard-Harris Poll","link":"/entities/harvard-harris-poll"},{"text":"Harvey Weinstein","link":"/entities/harvey-weinstein"},{"text":"Hasan Piker","link":"/entities/hasan-piker"},{"text":"Hashemites","link":"/entities/hashemites"},{"text":"Hashim ibn Abd Manaf","link":"/entities/hashim-ibn-abd-manaf"},{"text":"Hassan Nasrallah","link":"/entities/hassan-nasrallah"},{"text":"Hassan Rouhani","link":"/entities/hassan-rouhani"},{"text":"Hassan Sheikh Mohamud","link":"/entities/hassan-sheikh-mohamud"},{"text":"Hayat Tahrir al-Sham","link":"/entities/hayat-tahrir-al-sham"},{"text":"Haytham Ali Tabatabai","link":"/entities/haytham-ali-tabatabai"},{"text":"Haywood Talcove","link":"/entities/haywood-talcove"},{"text":"He Lifeng","link":"/entities/he-lifeng"},{"text":"Health Information Sharing and Analysis Center","link":"/entities/health-information-sharing-and-analysis-center"},{"text":"Health Resources and Services Administration","link":"/entities/health-resources-and-services-administration"},{"text":"Heartland Institute","link":"/entities/heartland-institute"},{"text":"Heather Honey","link":"/entities/heather-honey"},{"text":"Héctor Rusthenford Guerrero Flores","link":"/entities/hector-guerrero-flores"},{"text":"Heidi Beirich","link":"/entities/heidi-beirich"},{"text":"Helen McCaw","link":"/entities/helen-mccaw"},{"text":"Helima Croft","link":"/entities/helima-croft"},{"text":"Hellfire Club","link":"/entities/hellfire-club"},{"text":"Helsinge","link":"/entities/helsinge"},{"text":"Henrik Sass Larsen","link":"/entities/henrik-sass-larsen"},{"text":"Henry Cuellar","link":"/entities/henry-cuellar"},{"text":"Henry Kissinger","link":"/entities/henry-kissinger"},{"text":"Henry Ndukuba","link":"/entities/henry-ndukuba"},{"text":"Henry Nowak","link":"/entities/henry-nowak"},{"text":"Henry Wallace","link":"/entities/henry-wallace"},{"text":"Herbert Kickl","link":"/entities/herbert-kickl"},{"text":"Heritage Foundation","link":"/entities/heritage-foundation"},{"text":"Hersh Goldberg-Polin","link":"/entities/hersh-goldberg-polin"},{"text":"Herut Party","link":"/entities/herut-party"},{"text":"Herzi Halevi","link":"/entities/herzi-halevi"},{"text":"Herzl Halevi","link":"/entities/herzl-halevi"},{"text":"Hesder Yeshivas","link":"/entities/hesder-yeshivas"},{"text":"Hess Corporation","link":"/entities/hess-corporation"},{"text":"Hezbollah","link":"/entities/hezbollah"},{"text":"Hilary Cass","link":"/entities/hilary-cass"},{"text":"Hillandale Farms","link":"/entities/hillandale-farms"},{"text":"Hillary Clinton","link":"/entities/hillary-clinton"},{"text":"Hillary Rudy","link":"/entities/hillary-rudy"},{"text":"Hillcrest High School","link":"/entities/hillcrest-high-school"},{"text":"Hillsborough County Sheriff's Office","link":"/entities/hillsborough-county-sheriffs-office"},{"text":"Hilton Worldwide","link":"/entities/hilton-worldwide"},{"text":"Hindenburg Research","link":"/entities/hindenburg-research"},{"text":"Holly at Altitude","link":"/entities/holly-at-altitude"},{"text":"Hollywood","link":"/entities/hollywood"},{"text":"Holtec International","link":"/entities/holtec-international"},{"text":"Home Depot","link":"/entities/home-depot"},{"text":"Home Office","link":"/entities/home-office"},{"text":"Homeland Security Investigations","link":"/entities/homeland-security-investigations"},{"text":"Honduras","link":"/entities/honduras"},{"text":"Honest Elections Project Action","link":"/entities/honest-elections-project-action"},{"text":"Hope Has No Borders","link":"/entities/hope-has-no-borders"},{"text":"HOPS-315","link":"/entities/hops-315"},{"text":"Horace Cooper","link":"/entities/horace-cooper"},{"text":"Horizon Worlds","link":"/entities/horizon-worlds"},{"text":"Hossein Amir-Abdollahian","link":"/entities/hossein-amir-abdollahian"},{"text":"Hossein Amirabdollahian","link":"/entities/hossein-amirabdollahian"},{"text":"Hossein Salami","link":"/entities/hossein-salami"},{"text":"Hostages and Missing Families Forum","link":"/entities/hostages-and-missing-families-forum"},{"text":"Hou Yu-ih","link":"/entities/hou-yu-ih"},{"text":"House Administration Subcommittee on Oversight","link":"/entities/house-administration-subcommittee-on-oversight"},{"text":"House Appropriations Committee","link":"/entities/house-appropriations-committee"},{"text":"House Armed Services Committee","link":"/entities/house-armed-services-committee"},{"text":"House Committee on Oversight and Accountability","link":"/entities/house-committee-on-oversight-and-accountability"},{"text":"House Energy and Commerce Committee","link":"/entities/house-energy-and-commerce-committee"},{"text":"House Ethics Committee","link":"/entities/house-ethics-committee"},{"text":"House Financial Services Committee","link":"/entities/house-financial-services-committee"},{"text":"House Foreign Affairs Committee","link":"/entities/house-foreign-affairs-committee"},{"text":"House Freedom Caucus","link":"/entities/house-freedom-caucus"},{"text":"House Intelligence Committee","link":"/entities/house-intelligence-committee"},{"text":"House Judiciary Committee","link":"/entities/house-judiciary-committee"},{"text":"House of Commons of Canada","link":"/entities/house-of-commons-of-canada"},{"text":"House of Saud","link":"/entities/house-of-saud"},{"text":"House Oversight Committee","link":"/entities/house-oversight-committee"},{"text":"House Permanent Select Committee on Intelligence","link":"/entities/house-permanent-select-committee-on-intelligence"},{"text":"House Rules Committee","link":"/entities/house-rules-committee"},{"text":"House Select Committee on Assassinations","link":"/entities/house-select-committee-on-assassinations"},{"text":"House Select Committee on Benghazi","link":"/entities/house-select-committee-on-benghazi"},{"text":"House Select Subcommittee on the Coronavirus Pandemic","link":"/entities/house-select-subcommittee-on-the-coronavirus-pandemic"},{"text":"House Speakership Holdouts (America First Congressmen)","link":"/entities/house-freedom-caucus-holdouts"},{"text":"House Ways and Means Committee","link":"/entities/house-ways-and-means-committee"},{"text":"House Weaponization Committee","link":"/entities/house-weaponization-committee"},{"text":"Houthis","link":"/entities/houthis"},{"text":"Howard Lutnick","link":"/entities/howard-lutnick"},{"text":"Howard Rubin","link":"/entities/howard-rubin"},{"text":"HS Dent Investment Management","link":"/entities/hs-dent-investment-management"},{"text":"Huawei","link":"/entities/huawei"},{"text":"HuffPost","link":"/entities/huffpost"},{"text":"Hugging Face","link":"/entities/hugging-face"},{"text":"Hugh Evans","link":"/entities/hugh-evans"},{"text":"Hugh Hewitt","link":"/entities/hugh-hewitt"},{"text":"Hugo Carvajal","link":"/entities/hugo-carvajal"},{"text":"Hugo Chávez","link":"/entities/hugo-chavez"},{"text":"Hulk Hogan","link":"/entities/hulk-hogan"},{"text":"HUMA (Harvard University Muslim Alumni)","link":"/entities/huma-harvard-university-muslim-alumni"},{"text":"Huma Abedin","link":"/entities/huma-abedin"},{"text":"Human Artistry Campaign","link":"/entities/human-artistry-campaign"},{"text":"Human Events","link":"/entities/human-events"},{"text":"Human Rights Activists News Agency (HRANA)","link":"/entities/human-rights-activists-news-agency"},{"text":"Humberto Acosta","link":"/entities/humberto-acosta"},{"text":"Humza Yousaf","link":"/entities/humza-yousaf"},{"text":"Hungary","link":"/entities/hungary"},{"text":"Hunter Biden","link":"/entities/hunter-biden"},{"text":"Huntleigh USA","link":"/entities/huntleigh-usa"},{"text":"Hussein Kanani","link":"/entities/hussein-kanani"},{"text":"Hussein Salameh","link":"/entities/hussein-salameh"},{"text":"i24 News","link":"/entities/i24-news"},{"text":"Ian Carroll","link":"/entities/ian-carroll"},{"text":"Ian Sams","link":"/entities/ian-sams"},{"text":"Ian Smith","link":"/entities/ian-smith"},{"text":"Ian Telfer","link":"/entities/ian-telfer"},{"text":"IBM","link":"/entities/ibm"},{"text":"Ibrahim Aqil","link":"/entities/ibrahim-aqil"},{"text":"Ibrahim Traoré","link":"/entities/ibrahim-traore"},{"text":"Ice Cube","link":"/entities/ice-cube"},{"text":"ICTS International","link":"/entities/icts-international"},{"text":"Idit Silman","link":"/entities/idit-silman"},{"text":"Idris Elba","link":"/entities/idris-elba"},{"text":"Igor Danchenko","link":"/entities/igor-danchenko"},{"text":"Igor Kirillov","link":"/entities/igor-kirillov"},{"text":"Igor Kolomoisky","link":"/entities/igor-kolomoisky"},{"text":"Ihor Kolomoisky","link":"/entities/ihor-kolomoisky"},{"text":"Ihor Kolomoyskyi","link":"/entities/ihor-kolomoyskyi"},{"text":"Ilham Aliyev","link":"/entities/ilham-aliyev"},{"text":"Ilhan Omar","link":"/entities/ilhan-omar"},{"text":"Ilia Topuria","link":"/entities/ilia-topuria"},{"text":"Ilie Bolojan","link":"/entities/ilie-bolojan"},{"text":"Illinois National Guard","link":"/entities/illinois-national-guard"},{"text":"ILR Labor Action Tracker","link":"/entities/ilr-labor-action-tracker"},{"text":"Ilya Sorokin","link":"/entities/ilya-sorokin"},{"text":"Imane Khelif","link":"/entities/imane-khelif"},{"text":"Imelda Cuellar","link":"/entities/imelda-cuellar"},{"text":"Immigration and Customs Enforcement","link":"/entities/immigration-and-customs-enforcement"},{"text":"Imran Khan","link":"/entities/imran-khan"},{"text":"India","link":"/entities/india"},{"text":"Indian Oil Corporation","link":"/entities/indian-oil-corporation"},{"text":"Indivisible","link":"/entities/indivisible"},{"text":"Indonesia","link":"/entities/indonesia"},{"text":"Infowars","link":"/entities/infowars"},{"text":"Inger Andersen","link":"/entities/inger-andersen"},{"text":"Ingo Gerhartz","link":"/entities/ingo-gerhartz"},{"text":"Instagram","link":"/entities/instagram"},{"text":"Institute for National Security Studies (INSS)","link":"/entities/institute-for-national-security-studies"},{"text":"Institute for the Analysis of Global Security","link":"/entities/institute-for-the-analysis-of-global-security"},{"text":"Institute of Muslim Minority Affairs","link":"/entities/institute-of-muslim-minority-affairs"},{"text":"Institutional Revolutionary Party (PRI)","link":"/entities/pri"},{"text":"Intel","link":"/entities/intel"},{"text":"Intelligence Community Inspector General","link":"/entities/intelligence-community-inspector-general"},{"text":"Inter-Services Intelligence","link":"/entities/inter-services-intelligence"},{"text":"Interfax","link":"/entities/interfax"},{"text":"Internal Revenue Service","link":"/entities/internal-revenue-service"},{"text":"International Association of Machinists and Aerospace Workers","link":"/entities/international-association-of-machinists-and-aerospace-workers"},{"text":"International Atomic Energy Agency","link":"/entities/international-atomic-energy-agency"},{"text":"International Boxing Association","link":"/entities/international-boxing-association"},{"text":"International Court of Justice","link":"/entities/international-court-of-justice"},{"text":"International Criminal Court","link":"/entities/international-criminal-court"},{"text":"International Energy Agency","link":"/entities/international-energy-agency"},{"text":"International Fact-Checking Network","link":"/entities/international-fact-checking-network"},{"text":"International Holocaust Remembrance Alliance","link":"/entities/international-holocaust-remembrance-alliance"},{"text":"International Institute for Strategic Studies","link":"/entities/international-institute-for-strategic-studies"},{"text":"International Longshoremen's Association","link":"/entities/international-longshoremens-association"},{"text":"International Maritime Organization","link":"/entities/international-maritime-organization"},{"text":"International Media Investments","link":"/entities/international-media-investments"},{"text":"International Monetary Fund","link":"/entities/imf"},{"text":"International Monetary Fund","link":"/entities/international-monetary-fund"},{"text":"International NGO Safety Organisation","link":"/entities/international-ngo-safety-organisation"},{"text":"International Olympic Committee","link":"/entities/international-olympic-committee"},{"text":"International Organization for Migration","link":"/entities/international-organization-for-migration"},{"text":"International Rescue Committee (IRC)","link":"/entities/international-rescue-committee"},{"text":"International Resources Holding","link":"/entities/international-resources-holding"},{"text":"International Security Assistance Force","link":"/entities/international-security-assistance-force"},{"text":"International Stabilization Force","link":"/entities/international-stabilization-force"},{"text":"International Tin Supply Chain Initiative (ITSCI)","link":"/entities/international-tin-supply-chain-initiative"},{"text":"Internet Archive","link":"/entities/internet-archive"},{"text":"Internews","link":"/entities/internews"},{"text":"Interpol","link":"/entities/interpol"},{"text":"Interpublic Group","link":"/entities/interpublic-group"},{"text":"Intesa Sanpaolo","link":"/entities/intesa-sanpaolo"},{"text":"Intuitive Machines","link":"/entities/intuitive-machines"},{"text":"Ipsos","link":"/entities/ipsos"},{"text":"Irakli Kobakhidze","link":"/entities/irakli-kobakhidze"},{"text":"Iran","link":"/entities/iran"},{"text":"Iran International","link":"/entities/iran-international"},{"text":"Iraq","link":"/entities/iraq"},{"text":"Iraq and Afghanistan Veterans of America","link":"/entities/iraq-and-afghanistan-veterans-of-america"},{"text":"Ireland","link":"/entities/ireland"},{"text":"Irene Berger","link":"/entities/irene-berger"},{"text":"Irgun","link":"/entities/irgun"},{"text":"Iryna Zarutska","link":"/entities/iryna-zarutska"},{"text":"Isaac Herzog","link":"/entities/isaac-herzog"},{"text":"Isaiah Hodgson","link":"/entities/isaiah-hodgson"},{"text":"Isfahan","link":"/entities/isfahan"},{"text":"Isidor Straus","link":"/entities/isidor-straus"},{"text":"ISIS","link":"/entities/isis"},{"text":"ISIS-K","link":"/entities/isis-k"},{"text":"Islamic Revolutionary Guard Corps","link":"/entities/islamic-revolutionary-guard-corps"},{"text":"Islamic Society of Greater Houston","link":"/entities/islamic-society-of-greater-houston"},{"text":"Islamic State","link":"/entities/islamic-state"},{"text":"Ismail Haniyeh","link":"/entities/ismail-haniyeh"},{"text":"Israel","link":"/entities/israel"},{"text":"Israel Defense Forces","link":"/entities/israel-defense-forces"},{"text":"Israel Ganz","link":"/entities/israel-ganz"},{"text":"Israel Hayom","link":"/entities/israel-hayom"},{"text":"Israel Justice Ministry","link":"/entities/israel-justice-ministry"},{"text":"Israel Katz","link":"/entities/israel-katz"},{"text":"Israel Prison Service","link":"/entities/israel-prison-service"},{"text":"Israeli High Court of Justice","link":"/entities/israeli-high-court-of-justice"},{"text":"Israeli Ministry of Foreign Affairs","link":"/entities/israeli-ministry-of-foreign-affairs"},{"text":"Israeli Police","link":"/entities/israeli-police"},{"text":"Israeli Settler Movement","link":"/entities/israeli-settler-movement"},{"text":"Israeli Supreme Court","link":"/entities/israeli-supreme-court"},{"text":"Issa Asad","link":"/entities/issa-asad"},{"text":"Istanbul","link":"/entities/istanbul"},{"text":"Italian Mafia","link":"/entities/italian-mafia"},{"text":"Italy","link":"/entities/italy"},{"text":"Itamar Ben Gvir","link":"/entities/itamar-ben-gvir"},{"text":"Iván Cepeda","link":"/entities/ivan-cepeda"},{"text":"Iván Duque","link":"/entities/ivan-duque"},{"text":"Ivan Glasenberg","link":"/entities/ivan-glasenberg"},{"text":"Ivan Osterman","link":"/entities/ivan-osterman"},{"text":"Ivan Provorov","link":"/entities/ivan-provorov"},{"text":"Ivanka Trump","link":"/entities/ivanka-trump"},{"text":"Ivor Caplin","link":"/entities/ivor-caplin"},{"text":"Ivory Coast","link":"/entities/ivory-coast"},{"text":"iVoteIsrael","link":"/entities/ivoteisrael"},{"text":"J. Alex Halderman","link":"/entities/j-alex-halderman"},{"text":"J. Christian Adams","link":"/entities/j-christian-adams"},{"text":"J. Christopher Giancarlo","link":"/entities/j-christopher-giancarlo"},{"text":"J. E. Dyer","link":"/entities/j-e-dyer"},{"text":"J. P. Morgan","link":"/entities/jp-morgan"},{"text":"J.B. White","link":"/entities/j-b-white"},{"text":"J.K. Rowling","link":"/entities/jk-rowling"},{"text":"Jacinda Ardern","link":"/entities/jacinda-ardern"},{"text":"Jack Bergman","link":"/entities/jack-bergman"},{"text":"Jack Black","link":"/entities/jack-black"},{"text":"Jack Hughes","link":"/entities/jack-hughes"},{"text":"Jack Phillips","link":"/entities/jack-phillips"},{"text":"Jack Posobiec","link":"/entities/jack-posobiec"},{"text":"Jack Smith","link":"/entities/jack-smith"},{"text":"Jack Teixeira","link":"/entities/jack-teixeira"},{"text":"Jackson Hewitt","link":"/entities/jackson-hewitt"},{"text":"Jacky Rosen","link":"/entities/jacky-rosen"},{"text":"Jacob Chansley","link":"/entities/jacob-chansley"},{"text":"Jacob Frank","link":"/entities/jacob-frank"},{"text":"Jacob Frey","link":"/entities/jacob-frey"},{"text":"Jacob Rothschild","link":"/entities/jacob-rothschild"},{"text":"Jacob Zuma","link":"/entities/jacob-zuma"},{"text":"Jacquemain Shabani","link":"/entities/jacquemain-shabani"},{"text":"Jagmeet Singh","link":"/entities/jagmeet-singh"},{"text":"Jaguar Wright","link":"/entities/jaguar-wright"},{"text":"Jahi Wise","link":"/entities/jahi-wise"},{"text":"Jaime Harrison","link":"/entities/jaime-harrison"},{"text":"Jair Bolsonaro","link":"/entities/jair-bolsonaro"},{"text":"Jake Hoffman","link":"/entities/jake-hoffman"},{"text":"Jake Shields","link":"/entities/jake-shields"},{"text":"Jake Sullivan","link":"/entities/jake-sullivan"},{"text":"Jake Tapper","link":"/entities/jake-tapper"},{"text":"Jalisco New Generation Cartel","link":"/entities/jalisco-new-generation-cartel"},{"text":"JAMA","link":"/entities/jama"},{"text":"Jamaal Bowman","link":"/entities/jamaal-bowman"},{"text":"Jamal Bryant","link":"/entities/jamal-bryant"},{"text":"Jamal Khashoggi","link":"/entities/jamal-khashoggi"},{"text":"James Baker","link":"/entities/james-baker"},{"text":"James Biden","link":"/entities/james-biden"},{"text":"James Boasberg","link":"/entities/james-boasberg"},{"text":"James Clapper","link":"/entities/james-clapper"},{"text":"James Clayton","link":"/entities/james-clayton"},{"text":"James Comer","link":"/entities/james-comer"},{"text":"James Comey","link":"/entities/james-comey"},{"text":"James Dennehy","link":"/entities/james-dennehy"},{"text":"James Dickinson","link":"/entities/james-dickinson"},{"text":"James Donato","link":"/entities/james-donato"},{"text":"James Erdman III","link":"/entities/james-erdman-iii"},{"text":"James Kabarebe","link":"/entities/james-kabarebe"},{"text":"James Lankford","link":"/entities/james-lankford"},{"text":"James Lindsay","link":"/entities/james-lindsay"},{"text":"James Madison","link":"/entities/james-madison"},{"text":"James Madison High School","link":"/entities/james-madison-high-school"},{"text":"James McCormack","link":"/entities/james-mccormack"},{"text":"James O'Keefe","link":"/entities/james-okeefe"},{"text":"James Percival","link":"/entities/james-percival"},{"text":"James Stavridis","link":"/entities/james-stavridis"},{"text":"James Talarico","link":"/entities/james-talarico"},{"text":"James Uthmeier","link":"/entities/james-uthmeier"},{"text":"James Wolfe","link":"/entities/james-wolfe"},{"text":"Jamie Dimon","link":"/entities/jamie-dimon"},{"text":"Jamie McDonald","link":"/entities/jamie-mcdonald"},{"text":"Jamie Raskin","link":"/entities/jamie-raskin"},{"text":"Jamieson Greer","link":"/entities/jamieson-greer"},{"text":"Janai Nelson","link":"/entities/janai-nelson"},{"text":"Jane Goodall","link":"/entities/jane-goodall"},{"text":"Janel Brandtjen","link":"/entities/janel-brandtjen"},{"text":"Janet Murguía","link":"/entities/janet-murguia"},{"text":"Janet Reno","link":"/entities/janet-reno"},{"text":"Janet Yellen","link":"/entities/janet-yellen"},{"text":"Janisse Quiñones","link":"/entities/janisse-quinones"},{"text":"Japan","link":"/entities/japan"},{"text":"Jared Dowell","link":"/entities/jared-dowell"},{"text":"Jared Huffman","link":"/entities/jared-huffman"},{"text":"Jared Kushner","link":"/entities/jared-kushner"},{"text":"Jared Moskowitz","link":"/entities/jared-moskowitz"},{"text":"Jared Polis","link":"/entities/jared-polis"},{"text":"Jasmine Crockett","link":"/entities/jasmine-crockett"},{"text":"Jason Crow","link":"/entities/jason-crow"},{"text":"Jason Galanis","link":"/entities/jason-galanis"},{"text":"Jason Lowery","link":"/entities/jason-lowery"},{"text":"Jason Miyares","link":"/entities/jason-miyares"},{"text":"Jason Murray","link":"/entities/jason-murray"},{"text":"Jason Reding Quinones","link":"/entities/jason-reding-quinones"},{"text":"Jason Smith","link":"/entities/jason-smith"},{"text":"Javier Milei","link":"/entities/javier-milei"},{"text":"Jay Bhattacharya","link":"/entities/jay-bhattacharya"},{"text":"Jay Bratt","link":"/entities/jay-bratt"},{"text":"Jay Clayton","link":"/entities/jay-clayton"},{"text":"Jay Inslee","link":"/entities/jay-inslee"},{"text":"Jay Jones","link":"/entities/jay-jones"},{"text":"Jay-Z (Shawn Carter)","link":"/entities/jay-z"},{"text":"JB Pritzker","link":"/entities/jb-pritzker"},{"text":"JB White","link":"/entities/jb-white"},{"text":"JBS","link":"/entities/jbs"},{"text":"JD Vance","link":"/entities/jd-vance"},{"text":"Jean-Claude Juncker","link":"/entities/jean-claude-juncker"},{"text":"Jeanine Pirro","link":"/entities/jeanine-pirro"},{"text":"Jeanne Bourgault","link":"/entities/jeanne-bourgault"},{"text":"Jeanne Shaheen","link":"/entities/jeanne-shaheen"},{"text":"Jeb Bush","link":"/entities/jeb-bush"},{"text":"Jed Rakoff","link":"/entities/jed-rakoff"},{"text":"Jeddah","link":"/entities/jeddah"},{"text":"Jeff Asher","link":"/entities/jeff-asher"},{"text":"Jeff Bezos","link":"/entities/jeff-bezos"},{"text":"Jeff Clark","link":"/entities/jeff-clark"},{"text":"Jeff Crank","link":"/entities/jeff-crank"},{"text":"Jeff DeWit","link":"/entities/jeff-dewit"},{"text":"Jeff Horwitt","link":"/entities/jeff-horwitt"},{"text":"Jeff Landry","link":"/entities/jeff-landry"},{"text":"Jeff Merkley","link":"/entities/jeff-merkley"},{"text":"Jeff Sessions","link":"/entities/jeff-sessions"},{"text":"Jeff Zink","link":"/entities/jeff-zink"},{"text":"Jeff Zucker","link":"/entities/jeff-zucker"},{"text":"Jefferson Davis","link":"/entities/jefferson-davis"},{"text":"Jeffrey Epstein","link":"/entities/jeffrey-epstein"},{"text":"Jeffrey Gelfound","link":"/entities/jeffrey-gelfound"},{"text":"Jeffrey Goldberg","link":"/entities/jeffrey-goldberg"},{"text":"Jeffrey Kruse","link":"/entities/jeffrey-kruse"},{"text":"Jeffrey McConney","link":"/entities/jeffrey-mcconney"},{"text":"Jeffrey Sachs","link":"/entities/jeffrey-sachs"},{"text":"Jeffrey Taubenberger","link":"/entities/jeffrey-taubenberger"},{"text":"Jekyll Island Club","link":"/entities/jekyll-island-club"},{"text":"Jelly Roll","link":"/entities/jelly-roll"},{"text":"Jen Easterly","link":"/entities/jen-easterly"},{"text":"Jen Psaki","link":"/entities/jen-psaki"},{"text":"Jena Griswold","link":"/entities/jena-griswold"},{"text":"Jenna Ellis","link":"/entities/jenna-ellis"},{"text":"Jennifer Homendy","link":"/entities/jennifer-homendy"},{"text":"Jennifer Lopez","link":"/entities/jennifer-lopez"},{"text":"Jennifer Palmieri","link":"/entities/jennifer-palmieri"},{"text":"Jennifer Wright","link":"/entities/jennifer-wright"},{"text":"Jens Stoltenberg","link":"/entities/jens-stoltenberg"},{"text":"Jens-Frederik Nielsen","link":"/entities/jens-frederik-nielsen"},{"text":"Jensen Huang","link":"/entities/jensen-huang"},{"text":"Jeopardy!","link":"/entities/jeopardy"},{"text":"Jeremy Bash","link":"/entities/jeremy-bash"},{"text":"Jeremy Boreing","link":"/entities/jeremy-boreing"},{"text":"Jeremy Brown","link":"/entities/jeremy-brown"},{"text":"Jeremy Corbyn","link":"/entities/jeremy-corbyn"},{"text":"Jerome Powell","link":"/entities/jerome-powell"},{"text":"Jerrold Nadler","link":"/entities/jerrold-nadler"},{"text":"Jerry Martin","link":"/entities/jerry-martin"},{"text":"Jerusalem News Syndicate","link":"/entities/jerusalem-news-syndicate"},{"text":"Jes Staley","link":"/entities/jes-staley"},{"text":"Jesse Binnall","link":"/entities/jesse-binnall"},{"text":"Jesse Jackson","link":"/entities/jesse-jackson"},{"text":"Jesse Morgan","link":"/entities/jesse-morgan"},{"text":"Jesse Watters","link":"/entities/jesse-watters"},{"text":"Jesse Weber","link":"/entities/jesse-weber"},{"text":"Jessica Aber","link":"/entities/jessica-aber"},{"text":"Jessica Reed Kraus","link":"/entities/jessica-reed-kraus"},{"text":"Jessica Rosenworcel","link":"/entities/jessica-rosenworcel"},{"text":"Jessica Tisch","link":"/entities/jessica-tisch"},{"text":"Jesuits","link":"/entities/jesuits"},{"text":"Jewish Defense League","link":"/entities/jewish-defense-league"},{"text":"Jewish Mafia","link":"/entities/jewish-mafia"},{"text":"Jewish National Fund-KKL","link":"/entities/jewish-national-fund-kkl"},{"text":"Jewish News Syndicate","link":"/entities/jewish-news-syndicate"},{"text":"JFK Jr.","link":"/entities/jfk-jr"},{"text":"Jia Bei Zhu","link":"/entities/jia-bei-zhu"},{"text":"Jia Cobb","link":"/entities/jia-cobb"},{"text":"Jigar Shah","link":"/entities/jigar-shah"},{"text":"Jill Biden","link":"/entities/jill-biden"},{"text":"Jim Acosta","link":"/entities/jim-acosta"},{"text":"Jim Biden","link":"/entities/jim-biden"},{"text":"Jim Caviezel","link":"/entities/jim-caviezel"},{"text":"Jim Clyburn","link":"/entities/jim-clyburn"},{"text":"Jim Cramer","link":"/entities/jim-cramer"},{"text":"Jim Farley","link":"/entities/jim-farley"},{"text":"Jim Himes","link":"/entities/jim-himes"},{"text":"Jim Jordan","link":"/entities/jim-jordan"},{"text":"Jim Messina","link":"/entities/jim-messina"},{"text":"Jim VandeHei","link":"/entities/jim-vandehei"},{"text":"Jimmy \\"Barbecue\\" Cherizier","link":"/entities/jimmy-cherizier"},{"text":"Jimmy Carter","link":"/entities/jimmy-carter"},{"text":"Jimmy Goodrich","link":"/entities/jimmy-goodrich"},{"text":"Jimmy Kimmel","link":"/entities/jimmy-kimmel"},{"text":"Jinchao Wei","link":"/entities/jinchao-wei"},{"text":"João Goulart","link":"/entities/joao-goulart"},{"text":"Joaquin Castro","link":"/entities/joaquin-castro"},{"text":"Jocelyn Benson","link":"/entities/jocelyn-benson"},{"text":"Jochen Kopelke","link":"/entities/jochen-kopelke"},{"text":"Jodie Ginsberg","link":"/entities/jodie-ginsberg"},{"text":"Joe Biden","link":"/entities/joe-biden"},{"text":"Joe diGenova","link":"/entities/joe-digenova"},{"text":"Joe Francescon","link":"/entities/joe-francescon"},{"text":"Joe Kent","link":"/entities/joe-kent"},{"text":"Joe Lange","link":"/entities/joe-lange"},{"text":"Joe Lonsdale","link":"/entities/joe-lonsdale"},{"text":"Joe Oltmann","link":"/entities/joe-oltmann"},{"text":"Joe Rogan","link":"/entities/joe-rogan"},{"text":"Joe Rossi","link":"/entities/joe-rossi"},{"text":"Joe Scarborough","link":"/entities/joe-scarborough"},{"text":"Joe Tacopina","link":"/entities/joe-tacopina"},{"text":"Joe Walsh","link":"/entities/joe-walsh"},{"text":"Joel Cano","link":"/entities/joel-cano"},{"text":"Johann Wadephul","link":"/entities/johann-wadephul"},{"text":"Johanna Sjoberg","link":"/entities/johanna-sjoberg"},{"text":"John \\"Tig\\" Tiegen","link":"/entities/john-tiegen"},{"text":"John Adams","link":"/entities/john-adams"},{"text":"John Allen (Bernalillo County Sheriff)","link":"/entities/john-allen-sheriff"},{"text":"John Anthony Castro","link":"/entities/john-anthony-castro"},{"text":"John Barnett","link":"/entities/john-barnett"},{"text":"John Barrasso","link":"/entities/john-barrasso"},{"text":"John Bass","link":"/entities/john-bass"},{"text":"John Bel Edwards","link":"/entities/john-bel-edwards"},{"text":"John Bolton","link":"/entities/john-bolton"},{"text":"John Brennan","link":"/entities/john-brennan"},{"text":"John C. Bonifaz","link":"/entities/john-c-bonifaz"},{"text":"John Case","link":"/entities/john-case"},{"text":"John Chell","link":"/entities/john-chell"},{"text":"John Clarke","link":"/entities/john-clarke"},{"text":"John Cleese","link":"/entities/john-cleese"},{"text":"John Cornyn","link":"/entities/john-cornyn"},{"text":"John Deere","link":"/entities/john-deere"},{"text":"John Della Volpe","link":"/entities/john-della-volpe"},{"text":"John Drake","link":"/entities/john-drake"},{"text":"John Durham","link":"/entities/john-durham"},{"text":"John F. Kennedy","link":"/entities/john-f-kennedy"},{"text":"John F. Kennedy Center for the Performing Arts","link":"/entities/john-f-kennedy-center-for-the-performing-arts"},{"text":"John Ferguson","link":"/entities/john-ferguson"},{"text":"John Fetterman","link":"/entities/john-fetterman"},{"text":"John G. Trump","link":"/entities/john-g-trump"},{"text":"John Gentry","link":"/entities/john-gentry"},{"text":"John Griffin","link":"/entities/john-griffin"},{"text":"John Healey","link":"/entities/john-healey"},{"text":"John Helmer","link":"/entities/john-helmer"},{"text":"John Hickenlooper","link":"/entities/john-hickenlooper"},{"text":"John Hoffman","link":"/entities/john-hoffman"},{"text":"John Huber","link":"/entities/john-huber"},{"text":"John J. Durham","link":"/entities/john-j-durham"},{"text":"John Johnson Jr.","link":"/entities/john-johnson-jr"},{"text":"John K. Hurley","link":"/entities/john-k-hurley"},{"text":"John Kelly","link":"/entities/john-kelly"},{"text":"John Kerry","link":"/entities/john-kerry"},{"text":"John King","link":"/entities/john-king"},{"text":"John Kirby","link":"/entities/john-kirby"},{"text":"John Kiriakou","link":"/entities/john-kiriakou"},{"text":"John Konrad","link":"/entities/john-konrad"},{"text":"John Lauro","link":"/entities/john-lauro"},{"text":"John M. Martinis","link":"/entities/john-martinis"},{"text":"John Mann","link":"/entities/john-mann"},{"text":"John McCain","link":"/entities/john-mccain"},{"text":"John Morgan","link":"/entities/john-morgan"},{"text":"John Negroponte","link":"/entities/john-negroponte"},{"text":"John Nolte","link":"/entities/john-nolte"},{"text":"John P. Carlin","link":"/entities/john-p-carlin"},{"text":"John Podesta","link":"/entities/john-podesta"},{"text":"John Poulos","link":"/entities/john-poulos"},{"text":"John Quincy Adams","link":"/entities/john-quincy-adams"},{"text":"John R. Hannah Jr.","link":"/entities/john-r-hannah-jr"},{"text":"John Ratcliffe","link":"/entities/john-ratcliffe"},{"text":"John Reid","link":"/entities/john-reid"},{"text":"John Reimberg","link":"/entities/john-reimberg"},{"text":"John Roberts","link":"/entities/john-roberts"},{"text":"John Sarcone III","link":"/entities/john-sarcone"},{"text":"John Singleton Copley","link":"/entities/john-singleton-copley"},{"text":"John Solomon","link":"/entities/john-solomon"},{"text":"John Sopko","link":"/entities/john-sopko"},{"text":"John Thaler","link":"/entities/john-thaler"},{"text":"John Thune","link":"/entities/john-thune"},{"text":"John Woeltz","link":"/entities/john-woeltz"},{"text":"John Yang","link":"/entities/john-yang"},{"text":"Johnnie Kallas","link":"/entities/johnnie-kallas"},{"text":"Johnny Gaudreau","link":"/entities/johnny-gaudreau"},{"text":"Johnny Q","link":"/entities/johnny-q"},{"text":"Johnson & Johnson","link":"/entities/johnson-and-johnson"},{"text":"Joint Arctic Command","link":"/entities/joint-arctic-command"},{"text":"Joint Base Charleston","link":"/entities/joint-base-charleston"},{"text":"Joint Chiefs of Staff","link":"/entities/joint-chiefs-of-staff"},{"text":"Joint Task Force Vulcan","link":"/entities/joint-task-force-vulcan"},{"text":"Joko Widodo","link":"/entities/joko-widodo"},{"text":"Jon Burns","link":"/entities/jon-burns"},{"text":"Jon Herold","link":"/entities/jon-herold"},{"text":"Jon Ossoff","link":"/entities/jon-ossoff"},{"text":"Jon Tester","link":"/entities/jon-tester"},{"text":"Jon Voight","link":"/entities/jon-voight"},{"text":"Jonas Gahr Støre","link":"/entities/jonas-gahr-store"},{"text":"Jonathan Brater","link":"/entities/jonathan-brater"},{"text":"Jonathan Chait","link":"/entities/jonathan-chait"},{"text":"Jonathan Conricus","link":"/entities/jonathan-conricus"},{"text":"Jonathan Diller","link":"/entities/jonathan-diller"},{"text":"Jonathan Drake","link":"/entities/jonathan-drake"},{"text":"Jonathan Gilliam","link":"/entities/jonathan-gilliam"},{"text":"Jonathan Greenblatt","link":"/entities/jonathan-greenblatt"},{"text":"Jonathan Li","link":"/entities/jonathan-li"},{"text":"Jonathan Majors","link":"/entities/jonathan-majors"},{"text":"Jonathan Mitchell","link":"/entities/jonathan-mitchell"},{"text":"Jonathan Pollard","link":"/entities/jonathan-pollard"},{"text":"Jonathan Rinderknecht","link":"/entities/jonathan-rinderknecht"},{"text":"Jonathan Swan","link":"/entities/jonathan-swan"},{"text":"Jonathan Turley","link":"/entities/jonathan-turley"},{"text":"Jordan","link":"/entities/jordan"},{"text":"Jordan Bardella","link":"/entities/jordan-bardella"},{"text":"Jordan Fuchs","link":"/entities/jordan-fuchs"},{"text":"Jordan Neely","link":"/entities/jordan-neely"},{"text":"Jordan Sather","link":"/entities/jordan-sather"},{"text":"Jordan Seidhom","link":"/entities/jordan-seidhom"},{"text":"Jörg Urban","link":"/entities/joerg-urban"},{"text":"Jorge Glas","link":"/entities/jorge-glas"},{"text":"Jorge Masvidal","link":"/entities/jorge-masvidal"},{"text":"Jorge Miguel Vasquez","link":"/entities/jorge-miguel-vasquez"},{"text":"Jorge Rodríguez","link":"/entities/jorge-rodriguez"},{"text":"José \\"Pepe\\" Figueres","link":"/entities/jose-figueres"},{"text":"Jose Alba","link":"/entities/jose-alba"},{"text":"José Andrés","link":"/entities/jose-andres"},{"text":"Jose Antonio Ibarra","link":"/entities/jose-antonio-ibarra"},{"text":"José Francisco Ruiz Massieu","link":"/entities/jose-francisco-ruiz-massieu"},{"text":"Jose Garza","link":"/entities/jose-garza"},{"text":"José Raúl Mulino","link":"/entities/jose-raul-mulino"},{"text":"Josep Borrell","link":"/entities/josep-borrell"},{"text":"Joseph A. Ladapo","link":"/entities/joseph-ladapo"},{"text":"Joseph Aoun","link":"/entities/joseph-aoun"},{"text":"Joseph B. Edlow","link":"/entities/joseph-b-edlow"},{"text":"Joseph DiGenova","link":"/entities/joseph-digenova"},{"text":"Joseph Fischer","link":"/entities/joseph-fischer"},{"text":"Joseph Kabila","link":"/entities/joseph-kabila"},{"text":"Joseph St. Clair","link":"/entities/joseph-st-clair"},{"text":"Joseph Wu","link":"/entities/joseph-wu"},{"text":"Joseph Ziegler","link":"/entities/joseph-ziegler"},{"text":"Josh Gottheimer","link":"/entities/josh-gottheimer"},{"text":"Josh Green","link":"/entities/josh-green"},{"text":"Josh Hammer","link":"/entities/josh-hammer"},{"text":"Josh Hawley","link":"/entities/josh-hawley"},{"text":"Josh Kruger","link":"/entities/josh-kruger"},{"text":"Josh Reid","link":"/entities/josh-reid"},{"text":"Josh Shapiro","link":"/entities/josh-shapiro"},{"text":"Josh Yoder","link":"/entities/josh-yoder"},{"text":"Joshua Dean","link":"/entities/josh-dean"},{"text":"Journal of Muslim Minority Affairs","link":"/entities/journal-of-muslim-minority-affairs"},{"text":"Joy Reid","link":"/entities/joy-reid"},{"text":"Joy Villa","link":"/entities/joy-villa"},{"text":"Joyce Beatty","link":"/entities/joyce-beatty"},{"text":"Joycelyn Wade","link":"/entities/joycelyn-wade"},{"text":"JPMorgan Chase","link":"/entities/jpmorgan-chase"},{"text":"Juan Andres Donato Bautista","link":"/entities/juan-andres-donato-bautista"},{"text":"Juan Ciscomani","link":"/entities/juan-ciscomani"},{"text":"Juan García Abrego","link":"/entities/juan-garcia-abrego"},{"text":"Juan Guaidó","link":"/entities/juan-guaido"},{"text":"Juan José Zúñiga","link":"/entities/juan-jose-zuniga"},{"text":"Juan Merchan","link":"/entities/juan-merchan"},{"text":"Juan Orlando Hernández","link":"/entities/juan-orlando-hernandez"},{"text":"Juan Tobay Robles","link":"/entities/juan-tobay-robles"},{"text":"Judicial Watch","link":"/entities/judicial-watch"},{"text":"Judy Shelton","link":"/entities/judy-shelton"},{"text":"Julia Wendell","link":"/entities/julia-wendell"},{"text":"Julian Assange","link":"/entities/julian-assange"},{"text":"Julian's Rum","link":"/entities/julians-rum"},{"text":"Julie Chavez Rodriguez","link":"/entities/julie-chavez-rodriguez"},{"text":"Julie Kelly","link":"/entities/julie-kelly"},{"text":"Julie Watts","link":"/entities/julie-watts"},{"text":"Julio Rivera","link":"/entities/julio-rivera"},{"text":"Julius Baer","link":"/entities/julius-baer"},{"text":"Julius Malema","link":"/entities/julius-malema"},{"text":"Juraj Cintula","link":"/entities/juraj-cintula"},{"text":"Just Human","link":"/entities/just-human"},{"text":"Just the News","link":"/entities/just-the-news"},{"text":"Justice Democrats","link":"/entities/justice-democrats"},{"text":"Justice Department","link":"/entities/justice-department"},{"text":"Justin Deschamps","link":"/entities/justin-deschamps"},{"text":"Justin Eichorn","link":"/entities/justin-eichorn"},{"text":"Justin Fairfax","link":"/entities/justin-fairfax"},{"text":"Justin Gaethje","link":"/entities/justin-gaethje"},{"text":"Justin Heap","link":"/entities/justin-heap"},{"text":"Justin Jones","link":"/entities/justin-jones"},{"text":"Justin Pearson","link":"/entities/justin-pearson"},{"text":"Justin Sun","link":"/entities/justin-sun"},{"text":"Justin Trudeau","link":"/entities/justin-trudeau"},{"text":"Justin Walker","link":"/entities/justin-walker"},{"text":"K.P. Sharma Oli","link":"/entities/kp-sharma-oli"},{"text":"Kaiser Permanente","link":"/entities/kaiser-permanente"},{"text":"Kaitlan Collins","link":"/entities/kaitlan-collins"},{"text":"Kaja Kallas","link":"/entities/kaja-kallas"},{"text":"Kalshi","link":"/entities/kalshi"},{"text":"Kamala Harris","link":"/entities/kamala-harris"},{"text":"Kamoto Copper Company","link":"/entities/kamoto-copper-company"},{"text":"Kansas Senate","link":"/entities/kansas-senate"},{"text":"Kanye West","link":"/entities/kanye-west"},{"text":"Kara McGee","link":"/entities/kara-mcgee"},{"text":"Karen Bass","link":"/entities/karen-bass"},{"text":"Karen Gibson","link":"/entities/karen-gibson"},{"text":"Karen Henderson","link":"/entities/karen-henderson"},{"text":"Karen Read","link":"/entities/karen-read"},{"text":"Kari Lake","link":"/entities/kari-lake"},{"text":"Karim Khan","link":"/entities/karim-khan"},{"text":"Karim Sadjadpour","link":"/entities/karim-sadjadpour"},{"text":"Karin Immergut","link":"/entities/karin-immergut"},{"text":"Karine Jean-Pierre","link":"/entities/karine-jean-pierre"},{"text":"Karl Nehammer","link":"/entities/karl-nehammer"},{"text":"Karol Nawrocki","link":"/entities/karol-nawrocki"},{"text":"Karoline Leavitt","link":"/entities/karoline-leavitt"},{"text":"Kash Patel","link":"/entities/kash-patel"},{"text":"Kasie Hunt","link":"/entities/kasie-hunt"},{"text":"Kassym-Jomart Tokayev","link":"/entities/kassym-jomart-tokayev"},{"text":"Kastle Systems","link":"/entities/kastle-systems"},{"text":"Kat Cammack","link":"/entities/kat-cammack"},{"text":"Kata'ib Hizballah","link":"/entities/kataib-hizballah"},{"text":"Katanga Mining","link":"/entities/katanga-mining"},{"text":"Katherine Clark","link":"/entities/katherine-clark"},{"text":"Katherine Maher","link":"/entities/katherine-maher"},{"text":"Kathleen Hicks","link":"/entities/kathleen-hicks"},{"text":"Kathryn Kaminski","link":"/entities/kathryn-kaminski"},{"text":"Kathryn Ruemmler","link":"/entities/kathryn-ruemmler"},{"text":"Kathy Chung","link":"/entities/kathy-chung"},{"text":"Kathy Hochul","link":"/entities/kathy-hochul"},{"text":"Katie Hobbs","link":"/entities/katie-hobbs"},{"text":"Katie Porter","link":"/entities/katie-porter"},{"text":"Katrina Pierson","link":"/entities/katrina-pierson"},{"text":"Katy Perry","link":"/entities/katy-perry"},{"text":"Kazakhstan","link":"/entities/kazakhstan"},{"text":"Kazan","link":"/entities/kazan"},{"text":"Kazatomprom","link":"/entities/kazatomprom"},{"text":"KCBS 740 AM","link":"/entities/kcbs-740-am"},{"text":"Keir Starmer","link":"/entities/keir-starmer"},{"text":"Keith Ellison","link":"/entities/keith-ellison"},{"text":"Keith Gill","link":"/entities/keith-gill"},{"text":"Keith Kellogg","link":"/entities/keith-kellogg"},{"text":"Keith Rockwell","link":"/entities/keith-rockwell"},{"text":"Kelly Armstrong","link":"/entities/kelly-armstrong"},{"text":"Kelly Loeffler","link":"/entities/kelly-loeffler"},{"text":"Kelly Magsamen","link":"/entities/kelly-magsamen"},{"text":"Kemi Badenoch","link":"/entities/kemi-badenoch"},{"text":"Ken Buck","link":"/entities/ken-buck"},{"text":"Ken Paxton","link":"/entities/ken-paxton"},{"text":"Kendra Biggs","link":"/entities/kendra-biggs"},{"text":"Kennedy Family","link":"/entities/kennedy-family"},{"text":"Kenneth Chesebro","link":"/entities/kenneth-chesebro"},{"text":"Kenneth Lay","link":"/entities/kenneth-lay"},{"text":"Kenvue","link":"/entities/kenvue"},{"text":"Kenya","link":"/entities/kenya"},{"text":"Ketanji Brown Jackson","link":"/entities/ketanji-brown-jackson"},{"text":"Kevin Chalker","link":"/entities/kevin-chalker"},{"text":"Kevin Clinesmith","link":"/entities/kevin-clinesmith"},{"text":"Kevin Diana","link":"/entities/kevin-diana"},{"text":"Kevin Feige","link":"/entities/kevin-feige"},{"text":"Kevin Hassett","link":"/entities/kevin-hassett"},{"text":"Kevin Hern","link":"/entities/kevin-hern"},{"text":"Kevin McCarthy","link":"/entities/kevin-mccarthy"},{"text":"Kevin McGurn","link":"/entities/kevin-mcgurn"},{"text":"Kevin Moncla","link":"/entities/kevin-moncla"},{"text":"Kevin Morris","link":"/entities/kevin-morris"},{"text":"Kevin O'Connor","link":"/entities/kevin-oconnor"},{"text":"Kevin Roberts","link":"/entities/kevin-roberts"},{"text":"Kevin Warsh","link":"/entities/kevin-warsh"},{"text":"Kevork Almassian","link":"/entities/kevork-almassian"},{"text":"Khaled Meshaal","link":"/entities/khaled-meshaal"},{"text":"Khalid Abdullah Tariq al-Mansour","link":"/entities/khalid-al-mansour"},{"text":"Khalid bin Salman","link":"/entities/khalid-bin-salman"},{"text":"Khalid Sheikh Mohammed","link":"/entities/khalid-sheikh-mohammed"},{"text":"Khalil al-Hayya","link":"/entities/khalil-al-hayya"},{"text":"Kharg Island","link":"/entities/kharg-island"},{"text":"Khawaja Asif","link":"/entities/khawaja-asif"},{"text":"Khmeimim Air Base","link":"/entities/khmeimim-air-base"},{"text":"Kid Rock","link":"/entities/kid-rock"},{"text":"Kilmar Abrego Garcia","link":"/entities/kilmar-abrego-garcia"},{"text":"Kim Clement","link":"/entities/kim-clement"},{"text":"Kim Davis","link":"/entities/kim-davis"},{"text":"Kim Gardner","link":"/entities/kim-gardner"},{"text":"Kim Guilfoyle","link":"/entities/kim-guilfoyle"},{"text":"Kim Jong Il","link":"/entities/kim-jong-il"},{"text":"Kim Jong Un","link":"/entities/kim-jong-un"},{"text":"Kim Reynolds","link":"/entities/kim-reynolds"},{"text":"Kim Yo Jong","link":"/entities/kim-yo-jong"},{"text":"Kim Yong-hyun","link":"/entities/kim-yong-hyun"},{"text":"Kim Yong-nam","link":"/entities/kim-yong-nam"},{"text":"Kimberly Cheatle","link":"/entities/kimberly-cheatle"},{"text":"Kimberly Yee","link":"/entities/kimberly-yee"},{"text":"Kimberly Zapata","link":"/entities/kimberly-zapata"},{"text":"Kimberly-Clark","link":"/entities/kimberly-clark"},{"text":"King Abdullah II","link":"/entities/king-abdullah-ii"},{"text":"King Charles III","link":"/entities/king-charles-iii"},{"text":"King Faisal of Saudi Arabia","link":"/entities/king-faisal"},{"text":"King George III","link":"/entities/king-george-iii"},{"text":"King Harald V of Norway","link":"/entities/harald-v-of-norway"},{"text":"King Salman","link":"/entities/king-salman"},{"text":"Kingsley Wilson","link":"/entities/kingsley-wilson"},{"text":"Kip Hawley","link":"/entities/kip-hawley"},{"text":"Kirill Dmitriev","link":"/entities/kirill-dmitriev"},{"text":"Kirk Elliott","link":"/entities/kirk-elliott"},{"text":"Kirk Tanner","link":"/entities/kirk-tanner"},{"text":"Kirsty Coventry","link":"/entities/kirsty-coventry"},{"text":"Kitty Gillespie","link":"/entities/kitty-gillespie"},{"text":"Klaus Iohannis","link":"/entities/klaus-iohannis"},{"text":"Klaus Schwab","link":"/entities/klaus-schwab"},{"text":"Knesset","link":"/entities/knesset"},{"text":"KNOWiNK","link":"/entities/knowink"},{"text":"Knowledge Based","link":"/entities/knowledge-based"},{"text":"Koichi Hagiuda","link":"/entities/koichi-hagiuda"},{"text":"Konstantin Zhevago","link":"/entities/konstantin-zhevago"},{"text":"Koos Party","link":"/entities/koos-party"},{"text":"Korean Central News Agency","link":"/entities/korean-central-news-agency"},{"text":"Kremlin","link":"/entities/kremlin"},{"text":"Kris Boyd","link":"/entities/kris-boyd"},{"text":"Kris Mayes","link":"/entities/kris-mayes"},{"text":"Kris Paronto","link":"/entities/kris-paronto"},{"text":"Kristen Nagle","link":"/entities/kristen-nagle"},{"text":"Kristen Simmons","link":"/entities/kristen-simmons"},{"text":"Kristen Welker","link":"/entities/kristen-welker"},{"text":"Kristi Noem","link":"/entities/kristi-noem"},{"text":"Kristian Andersen","link":"/entities/kristian-andersen"},{"text":"Kriton Lentoudis","link":"/entities/kriton-lentoudis"},{"text":"Kurdistan Workers Party","link":"/entities/kurdistan-workers-party"},{"text":"Kurds","link":"/entities/kurds"},{"text":"Kursk Nuclear Power Plant","link":"/entities/kursk-nuclear-power-plant"},{"text":"Kurt Olsen","link":"/entities/kurt-olsen"},{"text":"Kuwait","link":"/entities/kuwait"},{"text":"Kvartal 95 Studio","link":"/entities/kvartal-95-studio"},{"text":"Kyiv International Institute of Sociology","link":"/entities/kyiv-international-institute-of-sociology"},{"text":"Kyiv-Pechersk Lavra","link":"/entities/kyiv-pechersk-lavra"},{"text":"Kyle Gass","link":"/entities/kyle-gass"},{"text":"Kyrie Irving","link":"/entities/kyrie-irving"},{"text":"Kyrylo Budanov","link":"/entities/kyrylo-budanov"},{"text":"L. Louise Lucas","link":"/entities/louise-lucas"},{"text":"Labour Party (United Kingdom)","link":"/entities/labour-party"},{"text":"Lachlan Murdoch","link":"/entities/lachlan-murdoch"},{"text":"Lai Ching-te","link":"/entities/lai-ching-te"},{"text":"Laken Riley","link":"/entities/laken-riley"},{"text":"Lana Nusseibeh","link":"/entities/lana-nusseibeh"},{"text":"Lance Twiggs","link":"/entities/lance-twiggs"},{"text":"Landya McCafferty","link":"/entities/landya-mccafferty"},{"text":"Lane Kirkland","link":"/entities/lane-kirkland"},{"text":"Lara Logan","link":"/entities/lara-logan"},{"text":"Lara Trump","link":"/entities/lara-trump"},{"text":"Larry Devoe","link":"/entities/larry-devoe"},{"text":"Larry Ellison","link":"/entities/larry-ellison"},{"text":"Larry Fink","link":"/entities/larry-fink"},{"text":"Larry Johnson","link":"/entities/larry-johnson"},{"text":"Larry Kudlow","link":"/entities/larry-kudlow"},{"text":"Larry Nassar","link":"/entities/larry-nassar"},{"text":"Larry Page","link":"/entities/larry-page"},{"text":"Larry Summers","link":"/entities/larry-summers"},{"text":"Latakia","link":"/entities/latakia"},{"text":"Latham & Watkins","link":"/entities/latham-and-watkins"},{"text":"Latin Patriarchate of Jerusalem","link":"/entities/latin-patriarchate-of-jerusalem"},{"text":"Latvia","link":"/entities/latvia"},{"text":"Laura A. Jacobs","link":"/entities/laura-a-jacobs"},{"text":"Laura Dehmlow","link":"/entities/laura-dehmlow"},{"text":"Laura Dogu","link":"/entities/laura-dogu"},{"text":"Laura Hazard Owen","link":"/entities/laura-hazard-owen"},{"text":"Laura Ingraham","link":"/entities/laura-ingraham"},{"text":"Laura Kelly","link":"/entities/laura-kelly"},{"text":"Laura Loomer","link":"/entities/laura-loomer"},{"text":"Lauren Boebert","link":"/entities/lauren-boebert"},{"text":"Lauren Chen","link":"/entities/lauren-chen"},{"text":"Lauren Southern","link":"/entities/lauren-southern"},{"text":"Laurence Tribe","link":"/entities/laurence-tribe"},{"text":"Laurent Lamothe","link":"/entities/laurent-lamothe"},{"text":"Lauryn Hill","link":"/entities/lauryn-hill"},{"text":"LaVar Charleston","link":"/entities/lavar-charleston"},{"text":"Law & Crime","link":"/entities/law-and-crime"},{"text":"Law and Justice","link":"/entities/law-and-justice"},{"text":"Lawrence O'Donnell","link":"/entities/lawrence-odonnell"},{"text":"Lawrence Petroni","link":"/entities/lawrence-petroni"},{"text":"Lawrence Tabak","link":"/entities/lawrence-tabak"},{"text":"Lawrence Wilkerson","link":"/entities/lawrence-wilkerson"},{"text":"Laxman Narasimhan","link":"/entities/laxman-narasimhan"},{"text":"League for Social Reconstruction","link":"/entities/league-for-social-reconstruction"},{"text":"League of Nations","link":"/entities/league-of-nations"},{"text":"League of United Latin American Citizens","link":"/entities/league-of-united-latin-american-citizens"},{"text":"League of Women Voters Colorado","link":"/entities/league-of-women-voters-colorado"},{"text":"League of Women Voters Education Fund","link":"/entities/league-of-women-voters-education-fund"},{"text":"Leah B. Foley","link":"/entities/leah-foley"},{"text":"Lebanese Armed Forces","link":"/entities/lebanese-armed-forces"},{"text":"Lebanon","link":"/entities/lebanon"},{"text":"Lee Harvey Oswald","link":"/entities/lee-harvey-oswald"},{"text":"Lee Jae-myung","link":"/entities/lee-jae-myung"},{"text":"Lee Zeldin","link":"/entities/lee-zeldin"},{"text":"Lega Nord","link":"/entities/lega-nord"},{"text":"Lehava","link":"/entities/lehava"},{"text":"Lehi (Stern Gang)","link":"/entities/lehi"},{"text":"Lehman Brothers","link":"/entities/lehman-brothers"},{"text":"Leo Wise","link":"/entities/leo-wise"},{"text":"Leon County Sheriff's Office","link":"/entities/leon-county-sheriffs-office"},{"text":"Leon Panetta","link":"/entities/leon-panetta"},{"text":"Leonard Blavatnik","link":"/entities/leonard-blavatnik"},{"text":"Leonard Leo","link":"/entities/leonard-leo"},{"text":"Leonie Brinkema","link":"/entities/leonie-brinkema"},{"text":"Les Wexner","link":"/entities/les-wexner"},{"text":"Leshon Johnson","link":"/entities/leshon-johnson"},{"text":"Lesley Wolf","link":"/entities/lesley-wolf"},{"text":"Leslie Kean","link":"/entities/leslie-kean"},{"text":"Letitia James","link":"/entities/letitia-james"},{"text":"Lev Parnas","link":"/entities/lev-parnas"},{"text":"Lev Tahor","link":"/entities/lev-tahor"},{"text":"Levada Center","link":"/entities/levada-center"},{"text":"Lewis Kaplan","link":"/entities/lewis-kaplan"},{"text":"Lex Fridman","link":"/entities/lex-fridman"},{"text":"LexisNexis","link":"/entities/lexisnexis"},{"text":"Li Shangfu","link":"/entities/li-shangfu"},{"text":"Lia Thomas","link":"/entities/lia-thomas"},{"text":"Liam Cunningham","link":"/entities/liam-cunningham"},{"text":"Lianys Torres Rivera","link":"/entities/lianys-torres-rivera"},{"text":"Liberal Democratic Party","link":"/entities/liberal-democratic-party"},{"text":"Liberal Party of Canada","link":"/entities/liberal-party-of-canada"},{"text":"Libertarian Party","link":"/entities/libertarian-party"},{"text":"Liberty Strategic Capital","link":"/entities/liberty-strategic-capital"},{"text":"Liberty Vote","link":"/entities/liberty-vote"},{"text":"LIBRE Party","link":"/entities/libre-party"},{"text":"Libs of TikTok","link":"/entities/libs-of-tiktok"},{"text":"Libyan Emergency Task Force","link":"/entities/libyan-emergency-task-force"},{"text":"Libyan Islamic Fighting Group (LIFG)","link":"/entities/libyan-islamic-fighting-group"},{"text":"Lidl","link":"/entities/lidl"},{"text":"Lightning Labs","link":"/entities/lightning-labs"},{"text":"Likud","link":"/entities/likud"},{"text":"Likud Party","link":"/entities/likud-party"},{"text":"Lin Jian","link":"/entities/lin-jian"},{"text":"Lincoln Project","link":"/entities/lincoln-project"},{"text":"Linda McMahon","link":"/entities/linda-mcmahon"},{"text":"Linda Sun","link":"/entities/linda-sun"},{"text":"Linda Thomas-Greenfield","link":"/entities/linda-thomas-greenfield"},{"text":"Linda Yaccarino","link":"/entities/linda-yaccarino"},{"text":"Lindsey Graham","link":"/entities/lindsey-graham"},{"text":"Lindsey Halligan","link":"/entities/lindsey-halligan"},{"text":"Lionel Messi","link":"/entities/lionel-messi"},{"text":"Lionsgate","link":"/entities/lionsgate"},{"text":"Lip-Bu Tan","link":"/entities/lip-bu-tan"},{"text":"Lipka Tatars","link":"/entities/lipka-tatars"},{"text":"Liridon Rexhepi","link":"/entities/liridon-rexhepi"},{"text":"Lisa B. Lench","link":"/entities/lisa-b-lench"},{"text":"Lisa Cook","link":"/entities/lisa-cook"},{"text":"Lisa Monaco","link":"/entities/lisa-monaco"},{"text":"Lisa Murkowski","link":"/entities/lisa-murkowski"},{"text":"Lisa Page","link":"/entities/lisa-page"},{"text":"Listen to Michigan","link":"/entities/listen-to-michigan"},{"text":"Litani River","link":"/entities/litani-river"},{"text":"Little St. James","link":"/entities/little-st-james"},{"text":"Liu Liange","link":"/entities/liu-liange"},{"text":"Liu Zhenli","link":"/entities/liu-zhenli"},{"text":"Live Nation Entertainment","link":"/entities/live-nation-entertainment"},{"text":"Liz Cheney","link":"/entities/liz-cheney"},{"text":"Liz Crokin","link":"/entities/liz-crokin"},{"text":"Liz Harrington","link":"/entities/liz-harrington"},{"text":"Liz Magill","link":"/entities/liz-magill"},{"text":"Liz Willner","link":"/entities/liz-willner"},{"text":"Lizzo","link":"/entities/lizzo"},{"text":"Lloyd Austin","link":"/entities/lloyd-austin"},{"text":"Lloyd Doggett","link":"/entities/lloyd-doggett"},{"text":"Lockheed Martin","link":"/entities/lockheed-martin"},{"text":"Lonna Drewes","link":"/entities/lonna-drewes"},{"text":"Loral Corporation","link":"/entities/loral-corporation"},{"text":"Lord Miles Routledge","link":"/entities/lord-miles-routledge"},{"text":"Loren AliKhan","link":"/entities/loren-alikhan"},{"text":"Loren Merchan","link":"/entities/loren-merchan"},{"text":"Loretta Biggs","link":"/entities/loretta-biggs"},{"text":"Loretta Lynch","link":"/entities/loretta-lynch"},{"text":"Loretta Preska","link":"/entities/loretta-preska"},{"text":"Lori Chavez-DeRemer","link":"/entities/lori-chavez-deremer"},{"text":"Lorna Schofield","link":"/entities/lorna-schofield"},{"text":"Los Angeles City Council","link":"/entities/los-angeles-city-council"},{"text":"Los Angeles County Sheriff's Department","link":"/entities/los-angeles-county-sheriffs-department"},{"text":"Los Angeles Department of Water and Power","link":"/entities/los-angeles-department-of-water-and-power"},{"text":"Los Angeles Dodgers","link":"/entities/los-angeles-dodgers"},{"text":"Los Angeles Police Department (LAPD)","link":"/entities/lapd"},{"text":"Los Angeles Times","link":"/entities/los-angeles-times"},{"text":"Los Choneros","link":"/entities/los-choneros"},{"text":"Los Lobos","link":"/entities/los-lobos"},{"text":"Louis DeJoy","link":"/entities/louis-dejoy"},{"text":"Louis Freeh","link":"/entities/louis-freeh"},{"text":"Louisiana","link":"/entities/louisiana"},{"text":"Lugansk People's Republic","link":"/entities/lugansk-peoples-republic"},{"text":"Luis Arce","link":"/entities/luis-arce"},{"text":"Luis Carlos Sarmiento","link":"/entities/luis-carlos-sarmiento"},{"text":"Luis De Javier","link":"/entities/luis-de-javier"},{"text":"Luis Delgado","link":"/entities/luis-delgado"},{"text":"Lululemon","link":"/entities/lululemon"},{"text":"Lunden Roberts","link":"/entities/lunden-roberts"},{"text":"Luton Town","link":"/entities/luton-town"},{"text":"Lynn Adelman","link":"/entities/lynn-adelman"},{"text":"Lynn Forester de Rothschild","link":"/entities/lynn-forester-de-rothschild"},{"text":"M23","link":"/entities/m23"},{"text":"M23 Rebels","link":"/entities/m23-rebels"},{"text":"Ma'aden (Saudi Arabian Mining Company)","link":"/entities/maaden"},{"text":"Mac Warner","link":"/entities/mac-warner"},{"text":"Maciej Wasik","link":"/entities/maciej-wasik"},{"text":"Mack Beggs","link":"/entities/mack-beggs"},{"text":"Madeleine McCann","link":"/entities/madeleine-mccann"},{"text":"Madhu Gottumukkala","link":"/entities/madhu-gottumukkala"},{"text":"Maersk","link":"/entities/maersk"},{"text":"MAGA Inc.","link":"/entities/maga-inc"},{"text":"Maggie Goodlander","link":"/entities/maggie-goodlander"},{"text":"Maggie Haberman","link":"/entities/maggie-haberman"},{"text":"Mahamadou Sana","link":"/entities/mahamadou-sana"},{"text":"Maharashtra","link":"/entities/maharashtra"},{"text":"Mahmoud Abbas","link":"/entities/mahmoud-abbas"},{"text":"Mahmoud Ahmadinejad","link":"/entities/mahmoud-ahmadinejad"},{"text":"Mahmoud Khalil","link":"/entities/mahmoud-khalil"},{"text":"Main Directorate of Intelligence (GUR)","link":"/entities/main-directorate-of-intelligence"},{"text":"Main Directorate of Intelligence of Ukraine (GUR)","link":"/entities/main-directorate-of-intelligence-of-ukraine"},{"text":"Maine","link":"/entities/maine"},{"text":"Majid Takht-Ravanchi","link":"/entities/majid-takht-ravanchi"},{"text":"Make America Healthy Again Commission","link":"/entities/make-america-healthy-again-commission"},{"text":"Mali","link":"/entities/mali"},{"text":"Manfredo Martin-Michael Madrigal III","link":"/entities/manfredo-martin-michael-madrigal-iii"},{"text":"Manhattan District Attorney's Office","link":"/entities/manhattan-district-attorneys-office"},{"text":"Mansour bin Zayed Al Nahyan","link":"/entities/mansour-bin-zayed-al-nahyan"},{"text":"Mao Ning","link":"/entities/mao-ning"},{"text":"Mao Zedong","link":"/entities/mao-zedong"},{"text":"Mar-a-Lago","link":"/entities/mar-a-lago"},{"text":"Mara Gay","link":"/entities/mara-gay"},{"text":"Marathon Digital","link":"/entities/marathon-digital"},{"text":"Marc Andreessen","link":"/entities/marc-andreessen"},{"text":"Marc Benioff","link":"/entities/marc-benioff"},{"text":"Marc Caputo","link":"/entities/marc-caputo"},{"text":"Marc Elias","link":"/entities/marc-elias"},{"text":"Marc Guehi","link":"/entities/marc-guehi"},{"text":"Marc Kennedy","link":"/entities/marc-kennedy"},{"text":"Marc Rich","link":"/entities/marc-rich"},{"text":"Marcel Ciolacu","link":"/entities/marcel-ciolacu"},{"text":"Marco Polo","link":"/entities/marco-polo"},{"text":"Marco Rubio","link":"/entities/marco-rubio"},{"text":"Margaret Brennan","link":"/entities/margaret-brennan"},{"text":"Margaret Love","link":"/entities/margaret-love"},{"text":"Margarita Simonyan","link":"/entities/margarita-simonyan"},{"text":"Maria Cantwell","link":"/entities/maria-cantwell"},{"text":"María Corina Machado","link":"/entities/maria-corina-machado"},{"text":"Maria Langan-Riekhof","link":"/entities/maria-langan-riekhof"},{"text":"Maria Lvova-Belova","link":"/entities/maria-lvova-belova"},{"text":"Maria Zakharova","link":"/entities/maria-zakharova"},{"text":"Maricopa County","link":"/entities/maricopa-county"},{"text":"Maricopa County Attorney's Office","link":"/entities/maricopa-county-attorneys-office"},{"text":"Maricopa County Board of Supervisors","link":"/entities/maricopa-county-board-of-supervisors"},{"text":"Maricopa County Superior Court","link":"/entities/maricopa-county-superior-court"},{"text":"Maricopa County Tabulation and Election Center (MCTEC)","link":"/entities/mctec"},{"text":"Marie Yovanovitch","link":"/entities/marie-yovanovitch"},{"text":"Marie-Thérèse Kaiser","link":"/entities/marie-therese-kaiser"},{"text":"Marina Abramovic","link":"/entities/marina-abramovic"},{"text":"Marine Le Pen","link":"/entities/marine-le-pen"},{"text":"Mario Ruiz Massieu","link":"/entities/mario-ruiz-massieu"},{"text":"Marion Koopmans","link":"/entities/marion-koopmans"},{"text":"Marion Maréchal","link":"/entities/marion-marechal"},{"text":"Marjorie Taylor Greene","link":"/entities/marjorie-taylor-greene"},{"text":"Mark Brnovich","link":"/entities/mark-brnovich"},{"text":"Mark Carney","link":"/entities/mark-carney"},{"text":"Mark Dimondstein","link":"/entities/mark-dimondstein"},{"text":"Mark Epstein","link":"/entities/mark-epstein"},{"text":"Mark Esper","link":"/entities/mark-esper"},{"text":"Mark Finchem","link":"/entities/mark-finchem"},{"text":"Mark Fisher","link":"/entities/mark-fisher"},{"text":"Mark Green","link":"/entities/mark-green"},{"text":"Mark Guzzetta","link":"/entities/mark-guzzetta"},{"text":"Mark Kelly","link":"/entities/mark-kelly"},{"text":"Mark Levin","link":"/entities/mark-levin"},{"text":"Mark Levine","link":"/entities/mark-levine"},{"text":"Mark Meadows","link":"/entities/mark-meadows"},{"text":"Mark Milley","link":"/entities/mark-milley"},{"text":"Mark Moran","link":"/entities/mark-moran"},{"text":"Mark Pomerantz","link":"/entities/mark-pomerantz"},{"text":"Mark Regev","link":"/entities/mark-regev"},{"text":"Mark Rowley","link":"/entities/mark-rowley"},{"text":"Mark Rutte","link":"/entities/mark-rutte"},{"text":"Mark Scarsi","link":"/entities/mark-scarsi"},{"text":"Mark Shapiro","link":"/entities/mark-shapiro"},{"text":"Mark Warner","link":"/entities/mark-warner"},{"text":"Mark Zuckerberg","link":"/entities/mark-zuckerberg"},{"text":"Mark Zwonitzer","link":"/entities/mark-zwonitzer"},{"text":"Markwayne Mullin","link":"/entities/markwayne-mullin"},{"text":"Mars, Incorporated","link":"/entities/mars-incorporated"},{"text":"Marsha Blackburn","link":"/entities/marsha-blackburn"},{"text":"Martha MacCallum","link":"/entities/martha-maccallum"},{"text":"Martin Armstrong","link":"/entities/martin-armstrong"},{"text":"Martin Luther King Jr.","link":"/entities/martin-luther-king-jr"},{"text":"Marty Makary","link":"/entities/marty-makary"},{"text":"Martyna Bohuslavets","link":"/entities/martyna-bohuslavets"},{"text":"Maru Campos","link":"/entities/maru-campos"},{"text":"Marvel Studios","link":"/entities/marvel-studios"},{"text":"Marvin Dunn","link":"/entities/marvin-dunn"},{"text":"Mary Bowden","link":"/entities/mary-bowden"},{"text":"Mary Erdoes","link":"/entities/mary-erdoes"},{"text":"Mary Grace","link":"/entities/mary-grace"},{"text":"Mary Moriarty","link":"/entities/mary-moriarty"},{"text":"Maryellen Noreika","link":"/entities/maryellen-noreika"},{"text":"Masayoshi Son","link":"/entities/masayoshi-son"},{"text":"Masoud Pezeshkian","link":"/entities/masoud-pezeshkian"},{"text":"Massachusetts","link":"/entities/massachusetts"},{"text":"Massachusetts Institute of Technology","link":"/entities/massachusetts-institute-of-technology"},{"text":"Massachusetts Registry of Motor Vehicles","link":"/entities/massachusetts-registry-of-motor-vehicles"},{"text":"Massad Boulos","link":"/entities/massad-boulos"},{"text":"Mastercard","link":"/entities/mastercard"},{"text":"Masterpiece Cakeshop","link":"/entities/masterpiece-cakeshop"},{"text":"Mateusz Morawiecki","link":"/entities/mateusz-morawiecki"},{"text":"Mathias Krull","link":"/entities/mathias-krull"},{"text":"Mats Ljungqvist","link":"/entities/mats-ljungqvist"},{"text":"Matt Crane","link":"/entities/matt-crane"},{"text":"Matt Gaetz","link":"/entities/matt-gaetz"},{"text":"Matt Klein","link":"/entities/matt-klein"},{"text":"Matt Olsen","link":"/entities/matt-olsen"},{"text":"Matt Taibbi","link":"/entities/matt-taibbi"},{"text":"Matt Trump","link":"/entities/matt-trump"},{"text":"Matteo Salvini","link":"/entities/matteo-salvini"},{"text":"Matthew B. Colangelo","link":"/entities/matthew-colangelo"},{"text":"Matthew Barrett","link":"/entities/matthew-barrett"},{"text":"Matthew Bunn","link":"/entities/matthew-bunn"},{"text":"Matthew Ehret","link":"/entities/matthew-ehret"},{"text":"Matthew Kacsmaryk","link":"/entities/matthew-kacsmaryk"},{"text":"Matthew McCall","link":"/entities/matthew-mccall"},{"text":"Matthew Murray","link":"/entities/matthew-murray"},{"text":"Matthew Platkin","link":"/entities/matthew-platkin"},{"text":"Matthew Reeves","link":"/entities/matthew-reeves"},{"text":"Matthew Ruth","link":"/entities/matthew-ruth"},{"text":"Matthew Trump","link":"/entities/matthew-trump"},{"text":"Matthew Whitaker","link":"/entities/matthew-whitaker"},{"text":"Matthew Woll","link":"/entities/matthew-woll"},{"text":"Matthias Krull","link":"/entities/matthias-krull"},{"text":"Matuš Šutaj Eštok","link":"/entities/matus-sutaj-estok"},{"text":"Maura Finkelstein","link":"/entities/maura-finkelstein"},{"text":"Maureen Callahan","link":"/entities/maureen-callahan"},{"text":"Maureen Comey","link":"/entities/maureen-comey"},{"text":"Maurene Comey","link":"/entities/maurene-comey"},{"text":"Maurice Strong","link":"/entities/maurice-strong"},{"text":"Mauricio Claver-Carone","link":"/entities/mauricio-claver-carone"},{"text":"Mauritius","link":"/entities/mauritius"},{"text":"Max Boot","link":"/entities/max-boot"},{"text":"Max Miller","link":"/entities/max-miller"},{"text":"Max Space","link":"/entities/max-space"},{"text":"Maxine Waters","link":"/entities/maxine-waters"},{"text":"Maya Rudolph","link":"/entities/maya-rudolph"},{"text":"Maya Wiley","link":"/entities/maya-wiley"},{"text":"Mazen Faraya","link":"/entities/mazen-faraya"},{"text":"Mazie Hirono","link":"/entities/mazie-hirono"},{"text":"McCain Institute","link":"/entities/mccain-institute"},{"text":"McDonald's","link":"/entities/mcdonalds"},{"text":"McKinley Minniefield","link":"/entities/mckinley-minniefield"},{"text":"McKinsey & Company","link":"/entities/mckinsey-and-company"},{"text":"McKinsey & Company","link":"/entities/mckinsey"},{"text":"Meagan Wolfe","link":"/entities/meagan-wolfe"},{"text":"Medea Benjamin","link":"/entities/medea-benjamin"},{"text":"Medellín Cartel","link":"/entities/medellin-cartel"},{"text":"Medi-Cal","link":"/entities/medi-cal"},{"text":"Media Matters for America","link":"/entities/media-matters-for-america"},{"text":"Media Matters for America","link":"/entities/media-matters"},{"text":"Media Research Center","link":"/entities/media-research-center"},{"text":"Medical Board of California","link":"/entities/medical-board-of-california"},{"text":"Megyn Kelly","link":"/entities/megyn-kelly"},{"text":"Mehmet Oz","link":"/entities/mehmet-oz"},{"text":"Meir Kahane","link":"/entities/meir-kahane"},{"text":"Meir Shitrit","link":"/entities/meir-shitrit"},{"text":"Mel Gibson","link":"/entities/mel-gibson"},{"text":"Melania Trump","link":"/entities/melania-trump"},{"text":"Melat Kiros","link":"/entities/melat-kiros"},{"text":"Melissa Hortman","link":"/entities/melissa-hortman"},{"text":"Memphis","link":"/entities/memphis"},{"text":"Menachem Mendel Schneerson","link":"/entities/menachem-mendel-schneerson"},{"text":"Menendez Brothers","link":"/entities/menendez-brothers"},{"text":"Merck & Co.","link":"/entities/merck"},{"text":"Meridian Hill Park","link":"/entities/meridian-hill-park"},{"text":"Merit Systems Protection Board","link":"/entities/merit-systems-protection-board"},{"text":"Merrick Garland","link":"/entities/merrick-garland"},{"text":"Mervyn Yan","link":"/entities/mervyn-yan"},{"text":"Mesa County","link":"/entities/mesa-county"},{"text":"Meta Oversight Board","link":"/entities/meta-oversight-board"},{"text":"Meta Platforms","link":"/entities/meta-platforms"},{"text":"Metabiota","link":"/entities/metabiota"},{"text":"Metro Nashville Police Department","link":"/entities/metro-nashville-police-department"},{"text":"Metropolitan Detention Center","link":"/entities/metropolitan-detention-center"},{"text":"Metropolitan Jonathan of Tulchin","link":"/entities/metropolitan-jonathan-of-tulchin"},{"text":"Metropolitan Police","link":"/entities/metropolitan-police"},{"text":"Metropolitan Police Department of the District of Columbia","link":"/entities/metropolitan-police-department-of-the-district-of-columbia"},{"text":"Metropolitan Transportation Authority","link":"/entities/metropolitan-transportation-authority"},{"text":"Mette Frederiksen","link":"/entities/mette-frederiksen"},{"text":"Mexican Drug Cartel","link":"/entities/mexican-drug-cartel"},{"text":"Mexican Senate","link":"/entities/mexican-senate"},{"text":"Mexico","link":"/entities/mexico"},{"text":"Meyer Lansky","link":"/entities/meyer-lansky"},{"text":"Mi Familia Vota","link":"/entities/mi-familia-vota"},{"text":"MI6","link":"/entities/mi6"},{"text":"Miami-Dade College","link":"/entities/miami-dade-college"},{"text":"Micha Kaufman","link":"/entities/micha-kaufman"},{"text":"Michael Atkinson","link":"/entities/michael-atkinson"},{"text":"Michael Avenatti","link":"/entities/michael-avenatti"},{"text":"Michael Baden","link":"/entities/michael-baden"},{"text":"Michael Ben'Ary","link":"/entities/michael-benary"},{"text":"Michael Bennet","link":"/entities/michael-bennet"},{"text":"Michael Benz","link":"/entities/michael-benz"},{"text":"Michael Beschloss","link":"/entities/michael-beschloss"},{"text":"Michael Bloomberg","link":"/entities/michael-bloomberg"},{"text":"Michael Borgschulte","link":"/entities/michael-borgschulte"},{"text":"Michael Chomiak","link":"/entities/michael-chomiak"},{"text":"Michael Cloud","link":"/entities/michael-cloud"},{"text":"Michael Cohen","link":"/entities/michael-cohen"},{"text":"Michael Collins (National Intelligence Council)","link":"/entities/michael-collins-nic"},{"text":"Michael DiMino","link":"/entities/michael-dimino"},{"text":"Michael Ellis","link":"/entities/michael-ellis"},{"text":"Michael Faulkender","link":"/entities/michael-faulkender"},{"text":"Michael Flynn","link":"/entities/michael-flynn"},{"text":"Michael Guest","link":"/entities/michael-guest"},{"text":"Michael Hayden","link":"/entities/michael-hayden"},{"text":"Michael Herzog","link":"/entities/michael-herzog"},{"text":"Michael Horowitz","link":"/entities/michael-horowitz"},{"text":"Michael Hsu","link":"/entities/michael-hsu"},{"text":"Michael Isikoff","link":"/entities/michael-isikoff"},{"text":"Michael Kovats","link":"/entities/michael-kovats"},{"text":"Michael Kratsios","link":"/entities/michael-kratsios"},{"text":"Michael Kurilla","link":"/entities/michael-kurilla"},{"text":"Michael Maloof","link":"/entities/michael-maloof"},{"text":"Michael McAuliffe","link":"/entities/michael-mcauliffe"},{"text":"Michael McCaul","link":"/entities/michael-mccaul"},{"text":"Michael Morell","link":"/entities/michael-morell"},{"text":"Michael Noble","link":"/entities/michael-noble"},{"text":"Michael Patrick Leahy","link":"/entities/michael-patrick-leahy"},{"text":"Michael Regan","link":"/entities/michael-regan"},{"text":"Michael Reiter","link":"/entities/michael-reiter"},{"text":"Michael Roman","link":"/entities/michael-roman"},{"text":"Michael Saylor","link":"/entities/michael-saylor"},{"text":"Michael Seifert","link":"/entities/michael-seifert"},{"text":"Michael Shellenberger","link":"/entities/michael-shellenberger"},{"text":"Michael Simon","link":"/entities/michael-simon"},{"text":"Michael Sussmann","link":"/entities/michael-sussmann"},{"text":"Michael Whatley","link":"/entities/michael-whatley"},{"text":"Michael Wolff","link":"/entities/michael-wolff"},{"text":"Michaela Murphy","link":"/entities/michaela-murphy"},{"text":"Michal Šimečka","link":"/entities/michal-simecka"},{"text":"Michel Aoun","link":"/entities/michel-aoun"},{"text":"Michel Barnier","link":"/entities/michel-barnier"},{"text":"Michel Doukeris","link":"/entities/michel-doukeris"},{"text":"Michel H. Devoret","link":"/entities/michel-devoret"},{"text":"Michele Singer Reiner","link":"/entities/michele-singer-reiner"},{"text":"Michelle Behnke","link":"/entities/michelle-behnke"},{"text":"Michelle Childs","link":"/entities/michelle-childs"},{"text":"Michelle Dewitt","link":"/entities/michelle-dewitt"},{"text":"Michelle Lujan Grisham","link":"/entities/michelle-lujan-grisham"},{"text":"Michelle Obama","link":"/entities/michelle-obama"},{"text":"Michelle Wu","link":"/entities/michelle-wu"},{"text":"Michelle Zajko","link":"/entities/michelle-zajko"},{"text":"Michigan Department of Civil Rights","link":"/entities/michigan-department-of-civil-rights"},{"text":"Michigan Republican Party","link":"/entities/michigan-republican-party"},{"text":"Michl Binderbauer","link":"/entities/michl-binderbauer"},{"text":"Mickey Cohen","link":"/entities/mickey-cohen"},{"text":"Micron Technology","link":"/entities/micron-technology"},{"text":"Microsoft","link":"/entities/microsoft"},{"text":"MicroStrategy","link":"/entities/microstrategy"},{"text":"Mid Vermont Christian School","link":"/entities/mid-vermont-christian-school"},{"text":"Middle East Council on Global Affairs","link":"/entities/middle-east-council-on-global-affairs"},{"text":"Middle East Eye","link":"/entities/middle-east-eye"},{"text":"Middle East Institute","link":"/entities/middle-east-institute"},{"text":"Middle East Monitor","link":"/entities/middle-east-monitor"},{"text":"Midnight Mission","link":"/entities/midnight-mission"},{"text":"Miguel Cardona","link":"/entities/miguel-cardona"},{"text":"Miguel Diaz-Canel","link":"/entities/miguel-diaz-canel"},{"text":"Miguel Recarey","link":"/entities/miguel-recarey"},{"text":"Miguel Rodríguez Torres","link":"/entities/miguel-rodriguez-torres"},{"text":"Mika Brzezinski","link":"/entities/mika-brzezinski"},{"text":"Mike Benz","link":"/entities/mike-benz"},{"text":"Mike Bost","link":"/entities/mike-bost"},{"text":"Mike Boudreaux","link":"/entities/mike-boudreaux"},{"text":"Mike Braun","link":"/entities/mike-braun"},{"text":"Mike Davis","link":"/entities/mike-davis"},{"text":"Mike DeWine","link":"/entities/mike-dewine"},{"text":"Mike Harris","link":"/entities/mike-harris"},{"text":"Mike Howell","link":"/entities/mike-howell"},{"text":"Mike Huckabee","link":"/entities/mike-huckabee"},{"text":"Mike Jeffries","link":"/entities/mike-jeffries"},{"text":"Mike Johnson","link":"/entities/mike-johnson"},{"text":"Mike Johnston","link":"/entities/mike-johnston"},{"text":"Mike Lawler","link":"/entities/mike-lawler"},{"text":"Mike Lee","link":"/entities/mike-lee"},{"text":"Mike Lindell","link":"/entities/mike-lindell"},{"text":"Mike Pence","link":"/entities/mike-pence"},{"text":"Mike Pompeo","link":"/entities/mike-pompeo"},{"text":"Mike Quigley","link":"/entities/mike-quigley"},{"text":"Mike Roman","link":"/entities/mike-roman"},{"text":"Mike Rounds","link":"/entities/mike-rounds"},{"text":"Mike Sauschuck","link":"/entities/mike-sauschuck"},{"text":"Mike Simpson","link":"/entities/mike-simpson"},{"text":"Mike Thompson","link":"/entities/mike-thompson"},{"text":"Mike Turner","link":"/entities/mike-turner"},{"text":"Mike Waltz","link":"/entities/mike-waltz"},{"text":"Mikhail Brodsky","link":"/entities/mikhail-brodsky"},{"text":"Mikhail Gorbachev","link":"/entities/mikhail-gorbachev"},{"text":"Mikhail Kasyanov","link":"/entities/mikhail-kasyanov"},{"text":"Mikhail Khodorkovsky","link":"/entities/mikhail-khodorkovsky"},{"text":"Mikhail Mishustin","link":"/entities/mikhail-mishustin"},{"text":"Mikhail Ulyanov","link":"/entities/mikhail-ulyanov"},{"text":"Miki Bowman","link":"/entities/miki-bowman"},{"text":"Mikie Sherrill","link":"/entities/mikie-sherrill"},{"text":"Miles Taylor","link":"/entities/miles-taylor"},{"text":"Miller Lite","link":"/entities/miller-lite"},{"text":"Milwaukee Election Commission","link":"/entities/milwaukee-election-commission"},{"text":"Milwaukee Police Department","link":"/entities/milwaukee-police-department"},{"text":"Ministry of Justice of Russia","link":"/entities/ministry-of-justice-russia"},{"text":"Minneapolis","link":"/entities/minneapolis"},{"text":"Minneapolis Police Department","link":"/entities/minneapolis-police-department"},{"text":"Minnesota","link":"/entities/minnesota"},{"text":"Minnesota Anti-War Committee","link":"/entities/minnesota-anti-war-committee"},{"text":"Minnesota National Guard","link":"/entities/minnesota-national-guard"},{"text":"Minnesota Wild","link":"/entities/minnesota-wild"},{"text":"Minor Cooper Keith","link":"/entities/minor-cooper-keith"},{"text":"Minoru Kihara","link":"/entities/minoru-kihara"},{"text":"Minouche Shafik","link":"/entities/minouche-shafik"},{"text":"Mint Sandstorm","link":"/entities/mint-sandstorm"},{"text":"Miraflores Palace","link":"/entities/miraflores-palace"},{"text":"Miriam Adelson","link":"/entities/miriam-adelson"},{"text":"Mishal Al-Sabah","link":"/entities/mishal-al-sabah"},{"text":"Mississippi","link":"/entities/mississippi"},{"text":"Mitch McConnell","link":"/entities/mitch-mcconnell"},{"text":"Mitt Romney","link":"/entities/mitt-romney"},{"text":"Mo Gawdat","link":"/entities/mo-gawdat"},{"text":"Mo Ivory","link":"/entities/mo-ivory"},{"text":"Moderna","link":"/entities/moderna"},{"text":"Modernity News","link":"/entities/modernity-news"},{"text":"Mohamed Bazoum","link":"/entities/mohamed-bazoum"},{"text":"Mohamed bin Zayed Al Nahyan","link":"/entities/mohamed-bin-zayed-al-nahyan"},{"text":"Mohamed Hamdan Dagalo","link":"/entities/mohamed-hamdan-dagalo"},{"text":"Mohammad Bagher Ghalibaf","link":"/entities/mohammad-bagher-ghalibaf"},{"text":"Mohammad Bagher Zolghadr","link":"/entities/mohammad-bagher-zolghadr"},{"text":"Mohammad Baqer Saad Dawood Al-Saadi","link":"/entities/mohammad-baqer-al-saadi"},{"text":"Mohammad Mosaddegh","link":"/entities/mohammad-mosaddegh"},{"text":"Mohammad Reza Pahlavi","link":"/entities/mohammad-reza-pahlavi"},{"text":"Mohammad Reza Zahedi","link":"/entities/mohammad-reza-zahedi"},{"text":"Mohammad Yaqub","link":"/entities/mohammad-yaqub"},{"text":"Mohammad-Reza Farzin","link":"/entities/mohammad-reza-farzin"},{"text":"Mohammed al-Bukhaiti","link":"/entities/mohammed-al-bukhaiti"},{"text":"Mohammed bin Abdulrahman Al Thani","link":"/entities/mohammed-bin-abdulrahman-al-thani"},{"text":"Mohammed bin Nayef","link":"/entities/mohammed-bin-nayef"},{"text":"Mohammed bin Salman","link":"/entities/mohammed-bin-salman"},{"text":"Mohammed bin Saud","link":"/entities/mohammed-bin-saud"},{"text":"Mohammed bin Zayed","link":"/entities/mohammed-bin-zayed"},{"text":"Mohammed Deif","link":"/entities/mohammed-deif"},{"text":"Mohammed Shia al-Sudani","link":"/entities/mohammed-shia-al-sudani"},{"text":"Mojtaba Khamenei","link":"/entities/mojtaba-khamenei"},{"text":"Moldova","link":"/entities/moldova"},{"text":"Mollie Hemingway","link":"/entities/mollie-hemingway"},{"text":"Mongolia","link":"/entities/mongolia"},{"text":"Monica Isham","link":"/entities/monica-isham"},{"text":"Monica Lewinsky","link":"/entities/monica-lewinsky"},{"text":"Monica Márquez","link":"/entities/monica-marquez"},{"text":"Monsanto","link":"/entities/monsanto"},{"text":"Montana Legislature","link":"/entities/montana-legislature"},{"text":"Montpelier","link":"/entities/montpelier"},{"text":"Moon Jae-in","link":"/entities/moon-jae-in"},{"text":"Mopani Mining","link":"/entities/mopani-mining"},{"text":"Mordechai Vanunu","link":"/entities/mordechai-vanunu"},{"text":"Morena","link":"/entities/morena"},{"text":"Morgan Geyser","link":"/entities/morgan-geyser"},{"text":"Morgan McSweeney","link":"/entities/morgan-mcsweeney"},{"text":"Morgan Ortagus","link":"/entities/morgan-ortagus"},{"text":"Morgan Ricks","link":"/entities/morgan-ricks"},{"text":"Morgan Stanley","link":"/entities/morgan-stanley"},{"text":"Morning Consult","link":"/entities/morning-consult"},{"text":"Morning Joe","link":"/entities/morning-joe"},{"text":"Morocco","link":"/entities/morocco"},{"text":"Morris Brown College","link":"/entities/morris-brown-college"},{"text":"Mosab Hassan Yousef","link":"/entities/mosab-hassan-yousef"},{"text":"Moshe Gafni","link":"/entities/moshe-gafni"},{"text":"Mossad","link":"/entities/mossad"},{"text":"Mouaz Moustafa","link":"/entities/mouaz-moustafa"},{"text":"Mount Hermon","link":"/entities/mount-hermon"},{"text":"Mount St. Helens","link":"/entities/mount-st-helens"},{"text":"Mountain Pass Mine","link":"/entities/mountain-pass-mine"},{"text":"Moussa Abu Marzouk","link":"/entities/moussa-abu-marzouk"},{"text":"Moussa Salaou Barmou","link":"/entities/moussa-salaou-barmou"},{"text":"Movement for Black Lives","link":"/entities/movement-for-black-lives"},{"text":"Moxila Upadhyaya","link":"/entities/moxila-upadhyaya"},{"text":"Mozilla","link":"/entities/mozilla"},{"text":"MP Materials","link":"/entities/mp-materials"},{"text":"MQ-9 Reaper","link":"/entities/mq-9-reaper"},{"text":"MS-13","link":"/entities/ms-13"},{"text":"MSNBC","link":"/entities/msnbc"},{"text":"Muammar Gaddafi","link":"/entities/muammar-gaddafi"},{"text":"Muhammad","link":"/entities/muhammad"},{"text":"Muhammad bin Nayef","link":"/entities/muhammad-bin-nayef"},{"text":"Muhammad ibn Abd al-Wahhab","link":"/entities/muhammad-ibn-abd-al-wahhab"},{"text":"Mujahideen","link":"/entities/mujahideen"},{"text":"Multi-State Information Sharing and Analysis Center","link":"/entities/multi-state-information-sharing-and-analysis-center"},{"text":"Munich Security Conference","link":"/entities/munich-security-conference"},{"text":"Munroe Bergdorf","link":"/entities/munroe-bergdorf"},{"text":"Muriel Bowser","link":"/entities/muriel-bowser"},{"text":"Murray Rothbard","link":"/entities/murray-rothbard"},{"text":"Muslim Brotherhood","link":"/entities/muslim-brotherhood"},{"text":"Muslim Students Association","link":"/entities/muslim-students-association"},{"text":"Muslim World League","link":"/entities/muslim-world-league"},{"text":"Mustafa Abdul Jalil","link":"/entities/mustafa-abdul-jalil"},{"text":"Mustafa al-Hawsawi","link":"/entities/mustafa-al-hawsawi"},{"text":"Mustafa al-Imam","link":"/entities/mustafa-al-imam"},{"text":"Mustafa Kasubhai","link":"/entities/mustafa-kasubhai"},{"text":"Mutanda Mining","link":"/entities/mutanda-mining"},{"text":"Myanmar","link":"/entities/myanmar"},{"text":"Mykhailo Drapatyi","link":"/entities/mykhailo-drapatyi"},{"text":"Mykhailo Fedorov","link":"/entities/mykhailo-fedorov"},{"text":"Mykhailo Podolyak","link":"/entities/mykhailo-podolyak"},{"text":"Mykola Zlochevsky","link":"/entities/mykola-zlochevsky"},{"text":"Myong Joun","link":"/entities/myong-joun"},{"text":"MyPillow","link":"/entities/mypillow"},{"text":"NAACP","link":"/entities/naacp"},{"text":"Naama Lazimi","link":"/entities/naama-lazimi"},{"text":"Nabatieh","link":"/entities/nabatieh"},{"text":"Nabih Berri","link":"/entities/nabih-berri"},{"text":"Nadav Argaman","link":"/entities/nadav-argaman"},{"text":"Naftali Bennett","link":"/entities/naftali-bennett"},{"text":"Naftogaz","link":"/entities/naftogaz"},{"text":"Naim Kassem","link":"/entities/naim-kassem"},{"text":"Naim Qassem","link":"/entities/naim-qassem"},{"text":"Najd","link":"/entities/najd"},{"text":"Nancy Cano","link":"/entities/nancy-cano"},{"text":"Nancy Faeser","link":"/entities/nancy-faeser"},{"text":"Nancy Mace","link":"/entities/nancy-mace"},{"text":"Nancy Pelosi","link":"/entities/nancy-pelosi"},{"text":"Narendra Modi","link":"/entities/narendra-modi"},{"text":"NASA","link":"/entities/nasa"},{"text":"Nassau County Police Department","link":"/entities/nassau-county-police-department"},{"text":"Nasser Bourita","link":"/entities/nasser-bourita"},{"text":"Natalie Winters","link":"/entities/natalie-winters"},{"text":"Natan Sharansky","link":"/entities/natan-sharansky"},{"text":"Natanz Nuclear Facility","link":"/entities/natanz-nuclear-facility"},{"text":"Nate Silver","link":"/entities/nate-silver"},{"text":"Nathan Hochman","link":"/entities/nathan-hochman"},{"text":"Nathan Mileikowsky","link":"/entities/nathan-mileikowsky"},{"text":"Nathan of Gaza","link":"/entities/nathan-of-gaza"},{"text":"Nathan Wade","link":"/entities/nathan-wade"},{"text":"National Alliance","link":"/entities/national-alliance"},{"text":"National Amusements","link":"/entities/national-amusements"},{"text":"National Anti-Corruption Bureau of Ukraine","link":"/entities/national-anti-corruption-bureau-of-ukraine"},{"text":"National Archives and Records Administration","link":"/entities/national-archives-and-records-administration"},{"text":"National Assembly of South Korea","link":"/entities/national-assembly-of-south-korea"},{"text":"National Assembly of Venezuela","link":"/entities/national-assembly-of-venezuela"},{"text":"National Basketball Association","link":"/entities/national-basketball-association"},{"text":"National Beef","link":"/entities/national-beef"},{"text":"National Capital Planning Commission","link":"/entities/national-capital-planning-commission"},{"text":"National Center for Public Policy Research","link":"/entities/national-center-for-public-policy-research"},{"text":"National Center on Sexual Exploitation","link":"/entities/national-center-on-sexual-exploitation"},{"text":"National Collegiate Athletic Association","link":"/entities/national-collegiate-athletic-association"},{"text":"National Council of Resistance of Iran","link":"/entities/national-council-of-resistance-of-iran"},{"text":"National Counterterrorism Center","link":"/entities/national-counterterrorism-center"},{"text":"National Economic Council","link":"/entities/national-economic-council"},{"text":"National Education Association","link":"/entities/national-education-association"},{"text":"National Electoral Council (Venezuela)","link":"/entities/national-electoral-council"},{"text":"National Endowment for Democracy","link":"/entities/national-endowment-for-democracy"},{"text":"National Film Administration (China)","link":"/entities/national-film-administration"},{"text":"National Football League","link":"/entities/national-football-league"},{"text":"National Geospatial-Intelligence Agency","link":"/entities/national-geospatial-intelligence-agency"},{"text":"National Guard","link":"/entities/national-guard"},{"text":"National Health Service","link":"/entities/nhs"},{"text":"National Hockey League","link":"/entities/national-hockey-league"},{"text":"National Institute of Allergy and Infectious Diseases (NIAID)","link":"/entities/national-institute-of-allergy-and-infectious-diseases"},{"text":"National Institutes of Health","link":"/entities/national-institutes-of-health"},{"text":"National Integrated Circuit Industry Investment Fund","link":"/entities/national-integrated-circuit-industry-investment-fund"},{"text":"National Intelligence Council","link":"/entities/national-intelligence-council"},{"text":"National Iranian Oil Company","link":"/entities/national-iranian-oil-company"},{"text":"National Labor Relations Board","link":"/entities/national-labor-relations-board"},{"text":"National Legal and Policy Center","link":"/entities/national-legal-and-policy-center"},{"text":"National Liberation Army (ELN)","link":"/entities/national-liberation-army"},{"text":"National Monetary Commission","link":"/entities/national-monetary-commission"},{"text":"National Nuclear Security Administration","link":"/entities/national-nuclear-security-administration"},{"text":"National Oceanic and Atmospheric Administration","link":"/entities/national-oceanic-and-atmospheric-administration"},{"text":"National Park Service","link":"/entities/national-park-service"},{"text":"National People's Congress","link":"/entities/national-peoples-congress"},{"text":"National Rally","link":"/entities/national-rally"},{"text":"National Reconnaissance Office","link":"/entities/national-reconnaissance-office"},{"text":"National Republican Congressional Committee","link":"/entities/national-republican-congressional-committee"},{"text":"National Response Center","link":"/entities/national-response-center"},{"text":"National Review","link":"/entities/national-review"},{"text":"National Rifle Association","link":"/entities/national-rifle-association"},{"text":"National Science Foundation","link":"/entities/national-science-foundation"},{"text":"National Security Agency","link":"/entities/national-security-agency"},{"text":"National Security and Defense Council of Ukraine","link":"/entities/national-security-and-defense-council-of-ukraine"},{"text":"National Security Archive","link":"/entities/national-security-archive"},{"text":"National Security Council","link":"/entities/national-security-council"},{"text":"National Students for Justice in Palestine","link":"/entities/national-students-for-justice-in-palestine"},{"text":"National Transportation Safety Board","link":"/entities/national-transportation-safety-board"},{"text":"National Trust for Historic Preservation","link":"/entities/national-trust-for-historic-preservation"},{"text":"National Weather Service","link":"/entities/national-weather-service"},{"text":"NativePath","link":"/entities/nativepath"},{"text":"NATO","link":"/entities/nato"},{"text":"Natural News","link":"/entities/natural-news"},{"text":"Nayib Bukele","link":"/entities/nayib-bukele"},{"text":"NBC News","link":"/entities/nbc-news"},{"text":"NBCUniversal","link":"/entities/nbcuniversal"},{"text":"NCSWIC Podcast","link":"/entities/ncswic-podcast"},{"text":"Neal Froneman","link":"/entities/neal-froneman"},{"text":"Neal Katyal","link":"/entities/neal-katyal"},{"text":"Negev Nuclear Research Center","link":"/entities/negev-nuclear-research-center"},{"text":"Neifred Zerpa-Acosta","link":"/entities/neifred-zerpa-acosta"},{"text":"Neil Barofsky","link":"/entities/neil-barofsky"},{"text":"Neil Gorsuch","link":"/entities/neil-gorsuch"},{"text":"Neil Hopper","link":"/entities/neil-hopper"},{"text":"Neil Young","link":"/entities/neil-young"},{"text":"Nekima Levy Armstrong","link":"/entities/nekima-levy-armstrong"},{"text":"Nelson Peltz","link":"/entities/nelson-peltz"},{"text":"Nelson W. Aldrich","link":"/entities/nelson-aldrich"},{"text":"Nemesio Oseguera Cervantes (El Mencho)","link":"/entities/el-mencho"},{"text":"Neomi Rao","link":"/entities/neomi-rao"},{"text":"Nepal","link":"/entities/nepal"},{"text":"Nerdeen Kiswani","link":"/entities/nerdeen-kiswani"},{"text":"Nervis Villalobos","link":"/entities/nervis-villalobos"},{"text":"Netflix","link":"/entities/netflix"},{"text":"Netherlands","link":"/entities/netherlands"},{"text":"Network of Central Banks and Supervisors for Greening the Financial System","link":"/entities/network-of-central-banks-and-supervisors-for-greening-the-financial-system"},{"text":"Neuralink","link":"/entities/neuralink"},{"text":"Nevada Republican Party","link":"/entities/nevada-republican-party"},{"text":"Never Back Down","link":"/entities/never-back-down"},{"text":"Neville Roy Singham","link":"/entities/neville-roy-singham"},{"text":"New Caledonia","link":"/entities/new-caledonia"},{"text":"New Jersey","link":"/entities/new-jersey"},{"text":"New Popular Front","link":"/entities/new-popular-front"},{"text":"New Right (Israel)","link":"/entities/new-right-party"},{"text":"New York City Police Department","link":"/entities/new-york-city-police-department"},{"text":"New York City Police Department","link":"/entities/nypd"},{"text":"New York Post","link":"/entities/new-york-post"},{"text":"New York State Board of Elections","link":"/entities/new-york-state-board-of-elections"},{"text":"New York Stock Exchange","link":"/entities/new-york-stock-exchange"},{"text":"New York University","link":"/entities/new-york-university"},{"text":"New York Yankees","link":"/entities/new-york-yankees"},{"text":"NewsGuard","link":"/entities/newsguard"},{"text":"Newsmax","link":"/entities/newsmax"},{"text":"Newsweek","link":"/entities/newsweek"},{"text":"Newt Gingrich","link":"/entities/newt-gingrich"},{"text":"Nexstar Media Group","link":"/entities/nexstar-media-group"},{"text":"NHS England","link":"/entities/nhs-england"},{"text":"Nicaragua","link":"/entities/nicaragua"},{"text":"Nick Andersen","link":"/entities/nick-andersen"},{"text":"Nick Brown","link":"/entities/nick-brown"},{"text":"Nick Fuentes","link":"/entities/nick-fuentes"},{"text":"Nick Khan","link":"/entities/nick-khan"},{"text":"Nick Reiner","link":"/entities/nick-reiner"},{"text":"Nick Shirley","link":"/entities/nick-shirley"},{"text":"Nick Sorter","link":"/entities/nick-sorter"},{"text":"Nick Sortor","link":"/entities/nick-sortor"},{"text":"Nicolás Maduro","link":"/entities/nicolas-maduro"},{"text":"Nicolás Maduro Guerra","link":"/entities/nicolas-maduro-guerra"},{"text":"Nicole Malliotakis","link":"/entities/nicole-malliotakis"},{"text":"Nicole Shanahan","link":"/entities/nicole-shanahan"},{"text":"Nicusor Dan","link":"/entities/nicusor-dan"},{"text":"NiemanLab","link":"/entities/niemanlab"},{"text":"Nigel Farage","link":"/entities/nigel-farage"},{"text":"Niger","link":"/entities/niger"},{"text":"Nigeria","link":"/entities/nigeria"},{"text":"Nikkei 225","link":"/entities/nikkei-225"},{"text":"Nikki Haley","link":"/entities/nikki-haley"},{"text":"Nikki Lu","link":"/entities/nikki-lu"},{"text":"Niko House","link":"/entities/niko-house"},{"text":"Nikol Pashinyan","link":"/entities/nikol-pashinyan"},{"text":"Nikola Tesla","link":"/entities/nikola-tesla"},{"text":"Nikolai Patrushev","link":"/entities/nikolai-patrushev"},{"text":"Nikolai Yevmenov","link":"/entities/nikolai-yevmenov"},{"text":"Nimrod","link":"/entities/nimrod"},{"text":"Nina Jankowicz","link":"/entities/nina-jankowicz"},{"text":"Nippon Steel","link":"/entities/nippon-steel"},{"text":"Nir Oz","link":"/entities/nir-oz"},{"text":"Nissim Vaturi","link":"/entities/nissim-vaturi"},{"text":"Nithya Raman","link":"/entities/nithya-raman"},{"text":"Nkosinathi Emmanuel Mthethwa","link":"/entities/nkosinathi-emmanuel-mthethwa"},{"text":"No Labels","link":"/entities/no-labels"},{"text":"Noam Chomsky","link":"/entities/noam-chomsky"},{"text":"Nobel Foundation","link":"/entities/nobel-foundation"},{"text":"Noland Arbaugh","link":"/entities/noland-arbaugh"},{"text":"Nolanda Sue Hill","link":"/entities/nolanda-sue-hill"},{"text":"Non-Aligned Movement","link":"/entities/non-aligned-movement"},{"text":"Noor bin Ladin","link":"/entities/noor-bin-ladin"},{"text":"NORAD","link":"/entities/norad"},{"text":"Norfolk Southern","link":"/entities/norfolk-southern"},{"text":"Norm Eisen","link":"/entities/norm-eisen"},{"text":"North Carolina Supreme Court","link":"/entities/north-carolina-supreme-court"},{"text":"North Korea","link":"/entities/north-korea"},{"text":"North Oil Company","link":"/entities/north-oil-company"},{"text":"Norway","link":"/entities/norway"},{"text":"Notre Dame Cathedral","link":"/entities/notre-dame-cathedral"},{"text":"Nouri Al-Maliki","link":"/entities/nouri-al-maliki"},{"text":"Novak Djokovic","link":"/entities/novak-djokovic"},{"text":"Novavax","link":"/entities/novavax"},{"text":"NPR","link":"/entities/npr"},{"text":"NSO Group","link":"/entities/nso-group"},{"text":"Nuclear Regulatory Commission","link":"/entities/nuclear-regulatory-commission"},{"text":"Nucor Corporation","link":"/entities/nucor-corporation"},{"text":"Nuevo León","link":"/entities/nuevo-leon"},{"text":"Nuno F. G. Loureiro","link":"/entities/nuno-loureiro"},{"text":"Nursultan Nazarbayev","link":"/entities/nursultan-nazarbayev"},{"text":"Nvidia","link":"/entities/nvidia"},{"text":"NXXT Golf","link":"/entities/nxxt-golf"},{"text":"O. J. Simpson","link":"/entities/oj-simpson"},{"text":"O'Keefe Media Group","link":"/entities/okeefe-media-group"},{"text":"Oak McCulloch","link":"/entities/oak-mcculloch"},{"text":"Oakland Unified School District","link":"/entities/oakland-unified-school-district"},{"text":"Oath Keepers","link":"/entities/oath-keepers"},{"text":"Observing Consciousness","link":"/entities/observing-consciousness"},{"text":"OceanGate","link":"/entities/oceangate"},{"text":"Odesa","link":"/entities/odesa"},{"text":"Ofcom","link":"/entities/ofcom"},{"text":"Office for Pandemic Preparedness and Response Policy","link":"/entities/office-for-pandemic-preparedness-and-response-policy"},{"text":"Office of Congressional Workplace Rights","link":"/entities/office-of-congressional-workplace-rights"},{"text":"Office of Disciplinary Counsel","link":"/entities/office-of-disciplinary-counsel"},{"text":"Office of Foreign Assets Control (OFAC)","link":"/entities/office-of-foreign-assets-control"},{"text":"Office of Fusion","link":"/entities/office-of-fusion"},{"text":"Office of Government Ethics","link":"/entities/office-of-government-ethics"},{"text":"Office of Management and Budget","link":"/entities/office-of-management-and-budget"},{"text":"Office of Personnel Management","link":"/entities/office-of-personnel-management"},{"text":"Office of Professional Responsibility","link":"/entities/office-of-professional-responsibility"},{"text":"Office of Refugee Resettlement","link":"/entities/office-of-refugee-resettlement"},{"text":"Office of Science and Technology Policy","link":"/entities/office-of-science-and-technology-policy"},{"text":"Office of Strategic Services","link":"/entities/office-of-strategic-services"},{"text":"Office of the Comptroller of the Currency","link":"/entities/office-of-the-comptroller-of-the-currency"},{"text":"Office of the Director of National Intelligence","link":"/entities/office-of-the-director-of-national-intelligence"},{"text":"Office of the United States Trade Representative","link":"/entities/office-of-the-united-states-trade-representative"},{"text":"Ohio","link":"/entities/ohio"},{"text":"Ohio Organizing Collaborative","link":"/entities/ohio-organizing-collaborative"},{"text":"Olaf Scholz","link":"/entities/olaf-scholz"},{"text":"Oleg Deripaska","link":"/entities/oleg-deripaska"},{"text":"Oleksandr Syrskyi","link":"/entities/oleksandr-syrskyi"},{"text":"Oleksandr Turchynov","link":"/entities/oleksandr-turchynov"},{"text":"Oleksii Reznikov","link":"/entities/oleksii-reznikov"},{"text":"Olga Stefanishina","link":"/entities/olga-stefanishina"},{"text":"Oliver Anthony","link":"/entities/oliver-anthony"},{"text":"Olivia Chow","link":"/entities/olivia-chow"},{"text":"Oman","link":"/entities/oman"},{"text":"Omar García Harfuch","link":"/entities/omar-garcia-harfuch"},{"text":"Omarosa Manigault Newman","link":"/entities/omarosa-manigault-newman"},{"text":"Omer Maxim Neutra","link":"/entities/omer-neutra"},{"text":"Omnicare","link":"/entities/omnicare"},{"text":"Omnicom","link":"/entities/omnicom"},{"text":"One America News Network","link":"/entities/one-america-news-network"},{"text":"Ontario","link":"/entities/ontario"},{"text":"Ontario Human Rights Commission","link":"/entities/ontario-human-rights-commission"},{"text":"Open Doors","link":"/entities/open-doors"},{"text":"Open Society Foundations","link":"/entities/open-society-foundations"},{"text":"OpenAI","link":"/entities/openai"},{"text":"OpenTheBooks","link":"/entities/openthebooks"},{"text":"OpenVAERS","link":"/entities/openvaers"},{"text":"Operation Underground Railroad","link":"/entities/operation-underground-railroad"},{"text":"Oracle","link":"/entities/oracle"},{"text":"Oran Alexander Routh","link":"/entities/oran-routh"},{"text":"Orders Project","link":"/entities/orders-project"},{"text":"Organization of Islamic Cooperation","link":"/entities/organization-of-islamic-cooperation"},{"text":"Organization of the Petroleum Exporting Countries (OPEC)","link":"/entities/opec"},{"text":"Organization of Ukrainian Nationalists","link":"/entities/organization-of-ukrainian-nationalists"},{"text":"Organized Crime and Corruption Reporting Project","link":"/entities/organized-crime-and-corruption-reporting-project"},{"text":"Ori Solomon","link":"/entities/ori-solomon"},{"text":"Orion Critical Mineral Consortium","link":"/entities/orion-critical-mineral-consortium"},{"text":"Osama Bin Laden","link":"/entities/osama-bin-laden"},{"text":"Oscar Underwood","link":"/entities/oscar-underwood"},{"text":"Oskar Eriksson","link":"/entities/oskar-eriksson"},{"text":"Otto von Bismarck","link":"/entities/otto-von-bismarck"},{"text":"Ottoman Empire","link":"/entities/ottoman-empire"},{"text":"Otzma Yehudit","link":"/entities/otzma-yehudit"},{"text":"Oversight Project","link":"/entities/oversight-project"},{"text":"Owen Schroyer","link":"/entities/owen-schroyer"},{"text":"Oxy Vinyls","link":"/entities/oxy-vinyls"},{"text":"Pablo Escobar","link":"/entities/pablo-escobar"},{"text":"Pacific Gas and Electric","link":"/entities/pacific-gas-and-electric"},{"text":"PacWest Bancorp","link":"/entities/pacwest-bancorp"},{"text":"Pakistan","link":"/entities/pakistan"},{"text":"Palantir","link":"/entities/palantir"},{"text":"Palau","link":"/entities/palau"},{"text":"Palestinian Authority","link":"/entities/palestinian-authority"},{"text":"Palestinian Center for Policy and Survey Research","link":"/entities/palestinian-center-for-policy-and-survey-research"},{"text":"Palestinian Islamic Jihad","link":"/entities/palestinian-islamic-jihad"},{"text":"Palisade Research","link":"/entities/palisade-research"},{"text":"Palisades Nuclear Plant","link":"/entities/palisades-nuclear-plant"},{"text":"Palmer Luckey","link":"/entities/palmer-luckey"},{"text":"Pam Bondi","link":"/entities/pam-bondi"},{"text":"Pamela Evette","link":"/entities/pamela-evette"},{"text":"Panama","link":"/entities/panama"},{"text":"Panama Canal","link":"/entities/panama-canal"},{"text":"Pandemic Response Accountability Committee","link":"/entities/pandemic-response-accountability-committee"},{"text":"Paolo Ardoino","link":"/entities/paolo-ardoino"},{"text":"Paramount Global","link":"/entities/paramount-global"},{"text":"Party for Freedom (PVV)","link":"/entities/party-for-freedom"},{"text":"Party for Socialism and Liberation","link":"/entities/party-for-socialism-and-liberation"},{"text":"Pasadena Fire Department","link":"/entities/pasadena-fire-department"},{"text":"Pat Ryder","link":"/entities/pat-ryder"},{"text":"Patel Patriot","link":"/entities/patel-patriot"},{"text":"Patel Patriot Rumble Channel","link":"/entities/patel-patriot-rumble-channel"},{"text":"Patriarchs and Heads of the Churches in Jerusalem","link":"/entities/patriarchs-and-heads-of-the-churches-in-jerusalem"},{"text":"Patricia Krenwinkel","link":"/entities/patricia-krenwinkel"},{"text":"Patrick Bet-David","link":"/entities/patrick-bet-david"},{"text":"Patrick Byrne","link":"/entities/patrick-byrne"},{"text":"Patrick Gary Schlegel","link":"/entities/patrick-gary-schlegel"},{"text":"Patrick Gunnels","link":"/entities/patrick-gunnels"},{"text":"Patrick McHenry","link":"/entities/patrick-mchenry"},{"text":"Patrick Moore","link":"/entities/patrick-moore"},{"text":"Patrick Morrisey","link":"/entities/patrick-morrisey"},{"text":"Patrick Schiltz","link":"/entities/patrick-schiltz"},{"text":"Patriot Front","link":"/entities/patriot-front"},{"text":"Patriots in Progress","link":"/entities/patriots-in-progress"},{"text":"Patti Davis","link":"/entities/patti-davis"},{"text":"Patty Murray","link":"/entities/patty-murray"},{"text":"Patty Stemler","link":"/entities/patty-stemler"},{"text":"Paul Abbate","link":"/entities/paul-abbate"},{"text":"Paul Atkins","link":"/entities/paul-atkins"},{"text":"Paul Bremer","link":"/entities/paul-bremer"},{"text":"Paul Byron","link":"/entities/paul-byron"},{"text":"Paul Engelmayer","link":"/entities/paul-engelmayer"},{"text":"Paul Fleuret","link":"/entities/paul-fleuret"},{"text":"Paul Gosar","link":"/entities/paul-gosar"},{"text":"Paul Kagame","link":"/entities/paul-kagame"},{"text":"Paul Keary","link":"/entities/paul-keary"},{"text":"Paul Kessler","link":"/entities/paul-kessler"},{"text":"Paul Offit","link":"/entities/paul-offit"},{"text":"Paul Pate","link":"/entities/paul-pate"},{"text":"Paul Pelosi","link":"/entities/paul-pelosi"},{"text":"Paul Renner","link":"/entities/paul-renner"},{"text":"Paul Rieckhoff","link":"/entities/paul-rieckhoff"},{"text":"Paul Rouleau","link":"/entities/paul-rouleau"},{"text":"Paul Ryan","link":"/entities/paul-ryan"},{"text":"Paul Stanley","link":"/entities/paul-stanley"},{"text":"Paul Waldman","link":"/entities/paul-waldman"},{"text":"Paul Warburg","link":"/entities/paul-warburg"},{"text":"Paul Whelan","link":"/entities/paul-whelan"},{"text":"Paul Wolfowitz","link":"/entities/paul-wolfowitz"},{"text":"Paul-Henri Sandaogo Damiba","link":"/entities/paul-henri-sandaogo-damiba"},{"text":"Paula Xinis","link":"/entities/paula-xinis"},{"text":"Paulina Gutierrez","link":"/entities/paulina-gutierrez"},{"text":"Pavel Durov","link":"/entities/pavel-durov"},{"text":"PBS","link":"/entities/pbs"},{"text":"PDD Holdings","link":"/entities/pdd-holdings"},{"text":"PDVSA","link":"/entities/pdvsa"},{"text":"Pecos Wellness","link":"/entities/pecos-wellness"},{"text":"Pedro Sánchez","link":"/entities/pedro-sanchez"},{"text":"Penelope Convertino","link":"/entities/penelope-convertino"},{"text":"Penn Biden Center","link":"/entities/penn-biden-center"},{"text":"Pennsylvania Department of State","link":"/entities/pennsylvania-department-of-state"},{"text":"Penny Wong","link":"/entities/penny-wong"},{"text":"People for the Ethical Treatment of Animals (PETA)","link":"/entities/peta"},{"text":"People Power Party","link":"/entities/people-power-party"},{"text":"People's Bank of China","link":"/entities/peoples-bank-of-china"},{"text":"People's Forum","link":"/entities/peoples-forum"},{"text":"People's Liberation Army","link":"/entities/peoples-liberation-army"},{"text":"Pepe Escobar","link":"/entities/pepe-escobar"},{"text":"Pepe Lives Matter","link":"/entities/pepe-lives-matter"},{"text":"Percy Sutton","link":"/entities/percy-sutton"},{"text":"Perkins Coie","link":"/entities/perkins-coie"},{"text":"Permanent Joint Board on Defense","link":"/entities/permanent-joint-board-on-defense"},{"text":"Pete Aguilar","link":"/entities/pete-aguilar"},{"text":"Pete Buttigieg","link":"/entities/pete-buttigieg"},{"text":"Pete Chambers","link":"/entities/pete-chambers"},{"text":"Pete Flores","link":"/entities/pete-flores"},{"text":"Pete Hegseth","link":"/entities/pete-hegseth"},{"text":"Pete Hoekstra","link":"/entities/pete-hoekstra"},{"text":"Pete Sessions","link":"/entities/pete-sessions"},{"text":"Peter Bernegger","link":"/entities/peter-bernegger"},{"text":"Peter Doocy","link":"/entities/peter-doocy"},{"text":"Péter Magyar","link":"/entities/peter-magyar"},{"text":"Peter Mandelson","link":"/entities/peter-mandelson"},{"text":"Peter Marks","link":"/entities/peter-marks"},{"text":"Peter Navarro","link":"/entities/peter-navarro"},{"text":"Peter Schweizer","link":"/entities/peter-schweizer"},{"text":"Peter Strzok","link":"/entities/peter-strzok"},{"text":"Peter Szijjarto","link":"/entities/peter-szijjarto"},{"text":"Peter Thiel","link":"/entities/peter-thiel"},{"text":"Peter Ticktin","link":"/entities/peter-ticktin"},{"text":"Petr Fiala","link":"/entities/petr-fiala"},{"text":"Petr Pavel","link":"/entities/petr-pavel"},{"text":"Petro Poroshenko","link":"/entities/petro-poroshenko"},{"text":"Petteri Orpo","link":"/entities/petteri-orpo"},{"text":"Pew Research Center","link":"/entities/pew-research-center"},{"text":"Pfizer","link":"/entities/pfizer"},{"text":"Phil Banks","link":"/entities/phil-banks"},{"text":"Phil Giraldi","link":"/entities/phil-giraldi"},{"text":"Phil Murphy","link":"/entities/phil-murphy"},{"text":"Phil Weiser","link":"/entities/phil-weiser"},{"text":"Philadelphia Flyers","link":"/entities/philadelphia-flyers"},{"text":"Philip Banks III","link":"/entities/philip-banks-iii"},{"text":"Philip Brimmer","link":"/entities/philip-brimmer"},{"text":"Philip Dormitzer","link":"/entities/philip-dormitzer"},{"text":"Philip Murray","link":"/entities/philip-murray"},{"text":"Phill Kline","link":"/entities/phill-kline"},{"text":"Phinance Technologies","link":"/entities/phinance-technologies"},{"text":"Phoenix Ikner","link":"/entities/phoenix-ikner"},{"text":"Physicians Committee for Responsible Medicine","link":"/entities/physicians-committee-for-responsible-medicine"},{"text":"Picower Family","link":"/entities/picower-family"},{"text":"Pierbattista Pizzaballa","link":"/entities/pierbattista-pizzaballa"},{"text":"Pierre Beaudry","link":"/entities/pierre-beaudry"},{"text":"Pierre Kory","link":"/entities/pierre-kory"},{"text":"Pierre Poilievre","link":"/entities/pierre-poilievre"},{"text":"Piers Morgan","link":"/entities/piers-morgan"},{"text":"Pima County Sheriff's Department","link":"/entities/pima-county-sheriffs-department"},{"text":"Pinchas Wallerstein","link":"/entities/pinchas-wallerstein"},{"text":"Pittsburgh Steelers","link":"/entities/pittsburgh-steelers"},{"text":"PJM Interconnection","link":"/entities/pjm-interconnection"},{"text":"Planet Labs","link":"/entities/planet-labs"},{"text":"Planned Parenthood","link":"/entities/planned-parenthood"},{"text":"Pluralis","link":"/entities/pluralis"},{"text":"PMA Group","link":"/entities/pma-group"},{"text":"PNC Financial Services Group","link":"/entities/pnc-financial-services-group"},{"text":"Pokrovsk","link":"/entities/pokrovsk"},{"text":"Poland","link":"/entities/poland"},{"text":"Police Scotland","link":"/entities/police-scotland"},{"text":"Police Service of Northern Ireland","link":"/entities/police-service-of-northern-ireland"},{"text":"Polisario Front","link":"/entities/polisario-front"},{"text":"Politico","link":"/entities/politico"},{"text":"Polymarket","link":"/entities/polymarket"},{"text":"Pope Francis","link":"/entities/pope-francis"},{"text":"Pope Leo XIV","link":"/entities/pope-leo-xiv"},{"text":"Popular Front for the Liberation of Palestine","link":"/entities/popular-front-for-the-liberation-of-palestine"},{"text":"Populist Party","link":"/entities/populist-party"},{"text":"Pornhub","link":"/entities/pornhub"},{"text":"Port Authority of New York and New Jersey","link":"/entities/port-authority-of-new-york-and-new-jersey"},{"text":"Port of Baltimore","link":"/entities/port-of-baltimore"},{"text":"Port Washington","link":"/entities/port-washington"},{"text":"Power Forward Communities","link":"/entities/power-forward-communities"},{"text":"Power the Future","link":"/entities/power-the-future"},{"text":"Prairieland Detention Center","link":"/entities/prairieland-detention-center"},{"text":"Pramila Jayapal","link":"/entities/pramila-jayapal"},{"text":"Pras Michel","link":"/entities/pras-michel"},{"text":"Praying Medic","link":"/entities/praying-medic"},{"text":"Premier Election Solutions","link":"/entities/premier-election-solutions"},{"text":"Premier League","link":"/entities/premier-league"},{"text":"President's Council of Advisors on Science and Technology (PCAST)","link":"/entities/presidents-council-of-advisors-on-science-and-technology"},{"text":"President's Intelligence Advisory Board","link":"/entities/presidents-intelligence-advisory-board"},{"text":"Prestige Biotech","link":"/entities/prestige-biotech"},{"text":"Prince Alwaleed bin Talal","link":"/entities/prince-alwaleed-bin-talal"},{"text":"Prince Andrew","link":"/entities/prince-andrew"},{"text":"Prince Holding Group","link":"/entities/prince-holding-group"},{"text":"Priscilla Almodovar","link":"/entities/priscilla-almodovar"},{"text":"PrivatBank","link":"/entities/privatbank"},{"text":"Progressive Slovakia","link":"/entities/progressive-slovakia"},{"text":"Project for the New American Century","link":"/entities/project-for-the-new-american-century"},{"text":"Project Veritas","link":"/entities/project-veritas"},{"text":"Protect Democracy","link":"/entities/protect-democracy"},{"text":"Protix","link":"/entities/protix"},{"text":"Proud Boys","link":"/entities/proud-boys"},{"text":"Public Interest Legal Foundation","link":"/entities/public-interest-legal-foundation"},{"text":"Public Investment Fund","link":"/entities/public-investment-fund"},{"text":"Public Opinion Strategies","link":"/entities/public-opinion-strategies"},{"text":"Public Square","link":"/entities/public-square"},{"text":"Puerto Rico","link":"/entities/puerto-rico"},{"text":"Pujo Committee","link":"/entities/pujo-committee"},{"text":"Punchbowl News","link":"/entities/punchbowl-news"},{"text":"Purdue Pharma","link":"/entities/purdue-pharma"},{"text":"PwC","link":"/entities/pwc"},{"text":"Q Link Wireless","link":"/entities/q-link-wireless"},{"text":"Qamishli","link":"/entities/qamishli"},{"text":"Qantas","link":"/entities/qantas"},{"text":"Qasim al-Aboudi","link":"/entities/qasim-al-aboudi"},{"text":"Qassem Soleimani","link":"/entities/qassem-soleimani"},{"text":"Qatar","link":"/entities/qatar"},{"text":"Qualcomm","link":"/entities/qualcomm"},{"text":"Quality Learning Center","link":"/entities/quality-learning-center"},{"text":"Quds Force","link":"/entities/quds-force"},{"text":"Quincy Institute for Responsible Statecraft","link":"/entities/quincy-institute-for-responsible-statecraft"},{"text":"Quraysh","link":"/entities/quraysh"},{"text":"R. Kelly","link":"/entities/r-kelly"},{"text":"Raben Group","link":"/entities/raben-group"},{"text":"Rabita Trust","link":"/entities/rabita-trust"},{"text":"Rachel Crandall","link":"/entities/rachel-crandall"},{"text":"Rachel Homan","link":"/entities/rachel-homan"},{"text":"Rachel Maddow","link":"/entities/rachel-maddow"},{"text":"Radoslaw Sikorski","link":"/entities/radoslaw-sikorski"},{"text":"Rafael Grossi","link":"/entities/rafael-grossi"},{"text":"Rafah","link":"/entities/rafah"},{"text":"Rafah Border Crossing","link":"/entities/rafah-border-crossing"},{"text":"Rahamim \\"Rami\\" Shy","link":"/entities/rahamim-shy"},{"text":"Rahm Emanuel","link":"/entities/rahm-emanuel"},{"text":"Rahmanullah Lakanwal","link":"/entities/rahmanullah-lakanwal"},{"text":"Rain Country Dance Association","link":"/entities/rain-country-dance-association"},{"text":"Rainbow Coalition","link":"/entities/rainbow-coalition"},{"text":"Raising a Nation","link":"/entities/raising-a-nation"},{"text":"Raland J. Brunson","link":"/entities/raland-brunson"},{"text":"Ralph Baric","link":"/entities/ralph-baric"},{"text":"Ralph Blumenthal","link":"/entities/ralph-blumenthal"},{"text":"Ralph Hise","link":"/entities/ralph-hise"},{"text":"Ralph Norman","link":"/entities/ralph-norman"},{"text":"Ralph Northam","link":"/entities/ralph-northam"},{"text":"Ralph Pezzullo","link":"/entities/ralph-pezzullo"},{"text":"Ramzan Kadyrov","link":"/entities/ramzan-kadyrov"},{"text":"RAND Corporation","link":"/entities/rand-corporation"},{"text":"Rand Paul","link":"/entities/rand-paul"},{"text":"Randolph Dilloway","link":"/entities/randolph-dilloway"},{"text":"Randy Fine","link":"/entities/randy-fine"},{"text":"Randy Guynn","link":"/entities/randy-guynn"},{"text":"Randy Levine","link":"/entities/randy-levine"},{"text":"Raphael Warnock","link":"/entities/raphael-warnock"},{"text":"Rapid Response Network","link":"/entities/rapid-response-network"},{"text":"Rapid Support Forces","link":"/entities/rapid-support-forces"},{"text":"Rashida Tlaib","link":"/entities/rashida-tlaib"},{"text":"Rasmussen Reports","link":"/entities/rasmussen-reports"},{"text":"RateFi","link":"/entities/ratefi"},{"text":"RattlerGator Report","link":"/entities/rattlergator-report"},{"text":"Rattlesnake Meat Company","link":"/entities/rattlesnake-meat-company"},{"text":"Raúl Castro","link":"/entities/raul-castro"},{"text":"Raúl Guillermo Rodríguez Castro","link":"/entities/raul-guillermo-rodriguez-castro"},{"text":"Raúl Salinas","link":"/entities/raul-salinas"},{"text":"Raulito Castro","link":"/entities/raulito-castro"},{"text":"Ray Dalio","link":"/entities/ray-dalio"},{"text":"Ray Donovan (DEA)","link":"/entities/ray-donovan-dea"},{"text":"Ray Epps","link":"/entities/ray-epps"},{"text":"Ray McGovern","link":"/entities/ray-mcgovern"},{"text":"Ray S. Jennings","link":"/entities/ray-jennings"},{"text":"Ray Valenzuela","link":"/entities/ray-valenzuela"},{"text":"Raytheon","link":"/entities/raytheon"},{"text":"Raz Zimmt","link":"/entities/raz-zimmt"},{"text":"Realbotix","link":"/entities/realbotix"},{"text":"RealClear Investigations","link":"/entities/realclear-investigations"},{"text":"Reality Labs","link":"/entities/reality-labs"},{"text":"Recep Tayyip Erdogan","link":"/entities/recep-tayyip-erdogan"},{"text":"Reconquête","link":"/entities/reconquete"},{"text":"RedBird Capital Partners","link":"/entities/redbird-capital-partners"},{"text":"Redes Energéticas Nacionais","link":"/entities/redes-energeticas-nacionais"},{"text":"Reduxx","link":"/entities/reduxx"},{"text":"Reed Hastings","link":"/entities/reed-hastings"},{"text":"Reedy Creek Improvement District","link":"/entities/reedy-creek-improvement-district"},{"text":"Refinery29","link":"/entities/refinery29"},{"text":"Regina Barrow","link":"/entities/regina-barrow"},{"text":"Regina Wallace-Jones","link":"/entities/regina-wallace-jones"},{"text":"Reid Hoffman","link":"/entities/reid-hoffman"},{"text":"Reince Priebus","link":"/entities/reince-priebus"},{"text":"Reinhard Gehlen","link":"/entities/reinhard-gehlen"},{"text":"Religious Zionism Party","link":"/entities/religious-zionism-party"},{"text":"Remark Holdings","link":"/entities/remark-holdings"},{"text":"Remix News","link":"/entities/remix-news"},{"text":"Renee Erickson","link":"/entities/renee-erickson"},{"text":"Renee Nicole Good","link":"/entities/renee-nicole-good"},{"text":"Republic Services","link":"/entities/republic-services"},{"text":"Republican National Committee","link":"/entities/republican-national-committee"},{"text":"Republican Party","link":"/entities/republican-party"},{"text":"Republican Voters Against Trump","link":"/entities/republican-voters-against-trump"},{"text":"Reserve Bank of India","link":"/entities/reserve-bank-of-india"},{"text":"Responsible Minerals Initiative (RMI)","link":"/entities/responsible-minerals-initiative"},{"text":"Restore Britain","link":"/entities/restore-britain"},{"text":"Reuters","link":"/entities/reuters"},{"text":"Reuven Rivlin","link":"/entities/reuven-rivlin"},{"text":"Rex Tillerson","link":"/entities/rex-tillerson"},{"text":"Reza Pahlavi","link":"/entities/reza-pahlavi"},{"text":"Rheinmetall","link":"/entities/rheinmetall"},{"text":"Richard Barron","link":"/entities/richard-barron"},{"text":"Richard Blumenthal","link":"/entities/richard-blumenthal"},{"text":"Richard Branson","link":"/entities/richard-branson"},{"text":"Richard Dawkins","link":"/entities/richard-dawkins"},{"text":"Richard Dearlove","link":"/entities/richard-dearlove"},{"text":"Richard Grenell","link":"/entities/richard-grenell"},{"text":"Richard Holden","link":"/entities/richard-holden"},{"text":"Richard Lawless","link":"/entities/richard-lawless"},{"text":"Richard Leon","link":"/entities/richard-leon"},{"text":"Richard Marles","link":"/entities/richard-marles"},{"text":"Richard Mosley","link":"/entities/richard-mosley"},{"text":"Richard Nixon","link":"/entities/richard-nixon"},{"text":"Richard Reid","link":"/entities/richard-reid"},{"text":"Rick Crawford","link":"/entities/rick-crawford"},{"text":"Rick Rieder","link":"/entities/rick-rieder"},{"text":"Rick Ross","link":"/entities/rick-ross"},{"text":"Rick Scott","link":"/entities/rick-scott"},{"text":"Ricky Gervais","link":"/entities/ricky-gervais"},{"text":"Riley Gaines","link":"/entities/riley-gaines"},{"text":"Rima Hassan","link":"/entities/rima-hassan"},{"text":"Rinat Akhmetov","link":"/entities/rinat-akhmetov"},{"text":"RipperSec","link":"/entities/rippersec"},{"text":"Ripple","link":"/entities/ripple"},{"text":"Rishi Sunak","link":"/entities/rishi-sunak"},{"text":"Riyadh","link":"/entities/riyadh"},{"text":"RMS Titanic","link":"/entities/rms-titanic"},{"text":"Ro Khanna","link":"/entities/ro-khanna"},{"text":"Roadrunner Charters","link":"/entities/roadrunner-charters"},{"text":"Rob Bauer","link":"/entities/rob-bauer"},{"text":"Rob Bonta","link":"/entities/rob-bonta"},{"text":"Rob Flaherty","link":"/entities/rob-flaherty"},{"text":"Rob Reiner","link":"/entities/rob-reiner"},{"text":"Rob Walker","link":"/entities/rob-walker"},{"text":"Robb Pitts","link":"/entities/robb-pitts"},{"text":"Robby Mook","link":"/entities/robby-mook"},{"text":"Robby Starbuck","link":"/entities/robby-starbuck"},{"text":"Robert Barnes","link":"/entities/robert-barnes"},{"text":"Robert Birchum","link":"/entities/robert-birchum"},{"text":"Robert Califf","link":"/entities/robert-califf"},{"text":"Robert Card","link":"/entities/robert-card"},{"text":"Robert Conrad Jr.","link":"/entities/robert-conrad-jr"},{"text":"Robert Costello","link":"/entities/robert-costello"},{"text":"Robert Davis","link":"/entities/robert-davis"},{"text":"Robert Dorgan","link":"/entities/robert-dorgan"},{"text":"Robert F. Kennedy Jr.","link":"/entities/robert-f-kennedy-jr"},{"text":"Robert Fico","link":"/entities/robert-fico"},{"text":"Robert Garcia","link":"/entities/robert-garcia"},{"text":"Robert Garry","link":"/entities/robert-garry"},{"text":"Robert Gates","link":"/entities/robert-gates"},{"text":"Robert Hur","link":"/entities/robert-hur"},{"text":"Robert J. Conrad","link":"/entities/robert-conrad"},{"text":"Robert Kagan","link":"/entities/robert-kagan"},{"text":"Robert Malley","link":"/entities/robert-malley"},{"text":"Robert Malone","link":"/entities/robert-malone"},{"text":"Robert Maxwell","link":"/entities/robert-maxwell"},{"text":"Robert McBurney","link":"/entities/robert-mcburney"},{"text":"Robert McElroy","link":"/entities/robert-mcelroy"},{"text":"Robert Menendez","link":"/entities/robert-menendez"},{"text":"Robert Monroe","link":"/entities/robert-monroe"},{"text":"Robert Mueller","link":"/entities/robert-mueller"},{"text":"Robert O'Brien","link":"/entities/robert-obrien"},{"text":"Robert Page (Orange County Registrar of Voters)","link":"/entities/robert-page"},{"text":"Robert Pitman","link":"/entities/robert-pitman"},{"text":"Robert Redfield","link":"/entities/robert-redfield"},{"text":"Robert Storch","link":"/entities/robert-storch"},{"text":"Robert Unanue","link":"/entities/robert-unanue"},{"text":"Robert Winnett","link":"/entities/robert-winnett"},{"text":"Robert Zeidman","link":"/entities/robert-zeidman"},{"text":"Robert Zoellick","link":"/entities/robert-zoellick"},{"text":"Robin Niblett","link":"/entities/robin-niblett"},{"text":"Robin Rosenberg","link":"/entities/robin-rosenberg"},{"text":"Robin Westman","link":"/entities/robin-westman"},{"text":"Roblox","link":"/entities/roblox"},{"text":"Rodney Hinton Jr.","link":"/entities/rodney-hinton-jr"},{"text":"Rodney King","link":"/entities/rodney-king"},{"text":"Roger Ailes","link":"/entities/roger-ailes"},{"text":"Roger Alejandro Pinate Martinez","link":"/entities/roger-alejandro-pinate-martinez"},{"text":"Roger Alejandro Piñate Martinez","link":"/entities/roger-pinate"},{"text":"Roger Carstens","link":"/entities/roger-carstens"},{"text":"Roger Stone","link":"/entities/roger-stone"},{"text":"Roger Ver","link":"/entities/roger-ver"},{"text":"Roger Wicker","link":"/entities/roger-wicker"},{"text":"Rohit Chopra","link":"/entities/rohit-chopra"},{"text":"Rolling Stone","link":"/entities/rolling-stone"},{"text":"Roman Abramovich","link":"/entities/roman-abramovich"},{"text":"Roman Chervinsky","link":"/entities/roman-chervinsky"},{"text":"Romania","link":"/entities/romania"},{"text":"Ron Brown","link":"/entities/ron-brown"},{"text":"Ron Dermer","link":"/entities/ron-dermer"},{"text":"Ron DeSantis","link":"/entities/ron-desantis"},{"text":"Ron Hanks","link":"/entities/ron-hanks"},{"text":"Ron Johnson","link":"/entities/ron-johnson"},{"text":"Ron Klain","link":"/entities/ron-klain"},{"text":"Ron Paul","link":"/entities/ron-paul"},{"text":"Ron Perlman","link":"/entities/ron-perlman"},{"text":"Ron Wyden","link":"/entities/ron-wyden"},{"text":"Ronald Lauder","link":"/entities/ronald-lauder"},{"text":"Ronald Reagan","link":"/entities/ronald-reagan"},{"text":"Ronan Farrow","link":"/entities/ronan-farrow"},{"text":"Ronen Bar","link":"/entities/ronen-bar"},{"text":"Ronna McDaniel","link":"/entities/ronna-mcdaniel"},{"text":"Rosa Brooks","link":"/entities/rosa-brooks"},{"text":"Rosa DeLauro","link":"/entities/rosa-delauro"},{"text":"Rosatom","link":"/entities/rosatom"},{"text":"Rose Girone","link":"/entities/rose-girone"},{"text":"Rose Montoya","link":"/entities/rose-montoya"},{"text":"Rosemont Seneca Partners","link":"/entities/rosemont-seneca-partners"},{"text":"Rosenblatt Securities","link":"/entities/rosenblatt-securities"},{"text":"Rosfinmonitoring","link":"/entities/rosfinmonitoring"},{"text":"Rosneft","link":"/entities/rosneft"},{"text":"Ross Perot","link":"/entities/ross-perot"},{"text":"Rossano Sasso","link":"/entities/rossano-sasso"},{"text":"Roswell, New Mexico","link":"/entities/roswell-new-mexico"},{"text":"Rothschild & Co","link":"/entities/rothschild-and-co"},{"text":"Rothschild Family","link":"/entities/rothschild-family"},{"text":"Royal Academy of Fine Arts","link":"/entities/royal-academy-of-fine-arts"},{"text":"Royal Air Force","link":"/entities/royal-air-force"},{"text":"RSB Logistics Services","link":"/entities/rsb-logistics-services"},{"text":"RT","link":"/entities/rt"},{"text":"Ruben Gallego","link":"/entities/ruben-gallego"},{"text":"Ruby Calvert","link":"/entities/ruby-calvert"},{"text":"Ruckus Society","link":"/entities/ruckus-society"},{"text":"Rudy Giuliani","link":"/entities/rudy-giuliani"},{"text":"Rugpull Radio","link":"/entities/rugpull-radio"},{"text":"Rumble","link":"/entities/rumble"},{"text":"Runbeck Election Services","link":"/entities/runbeck-election-services"},{"text":"Rupert Murdoch","link":"/entities/rupert-murdoch"},{"text":"Rushingbrook Children's Choir","link":"/entities/rushingbrook-childrens-choir"},{"text":"Ruslan Aleksandrovich Peretyatko","link":"/entities/ruslan-peretyatko"},{"text":"Ruslan Kravchenko","link":"/entities/ruslan-kravchenko"},{"text":"Russ Vought","link":"/entities/russ-vought"},{"text":"Russell Brand","link":"/entities/russell-brand"},{"text":"Russia","link":"/entities/russia"},{"text":"Russia Today (RT)","link":"/entities/russia-today"},{"text":"Russian Defense Ministry","link":"/entities/russian-defense-ministry"},{"text":"Russian Foreign Ministry","link":"/entities/russian-foreign-ministry"},{"text":"Russian Investigative Committee","link":"/entities/russian-investigative-committee"},{"text":"Russian Ministry of Defence","link":"/entities/russian-ministry-of-defence"},{"text":"Russian Ministry of Defence","link":"/entities/russian-ministry-of-defense"},{"text":"Rwanda","link":"/entities/rwanda"},{"text":"Ryan Chew","link":"/entities/ryan-chew"},{"text":"Ryan Corbett","link":"/entities/ryan-corbett"},{"text":"Ryan DeLarme","link":"/entities/ryan-delarme"},{"text":"Ryan Garcia","link":"/entities/ryan-garcia"},{"text":"Ryan Long","link":"/entities/ryan-long"},{"text":"Ryan Macias","link":"/entities/ryan-macias"},{"text":"Ryan Matta","link":"/entities/ryan-matta"},{"text":"Ryan Petersen","link":"/entities/ryan-petersen"},{"text":"Ryan Routh","link":"/entities/ryan-routh"},{"text":"Ryan Walters","link":"/entities/ryan-walters"},{"text":"Ryan Wesley Routh","link":"/entities/ryan-wesley-routh"},{"text":"Ryan Zinke","link":"/entities/ryan-zinke"},{"text":"S. Jaishankar","link":"/entities/s-jaishankar"},{"text":"S.V. Date","link":"/entities/sv-date"},{"text":"Saad Hariri","link":"/entities/saad-hariri"},{"text":"Sabbatai Zevi","link":"/entities/sabbatai-zevi"},{"text":"Sable Offshore","link":"/entities/sable-offshore"},{"text":"Sabrina Singh","link":"/entities/sabrina-singh"},{"text":"Sackler Family","link":"/entities/sackler-family"},{"text":"Sacramento County Sheriff's Office","link":"/entities/sacramento-county-sheriffs-office"},{"text":"SAG-AFTRA","link":"/entities/sag-aftra"},{"text":"Sai Varshith Kandula","link":"/entities/sai-varshith-kandula"},{"text":"Saint Anselm College","link":"/entities/saint-anselm-college"},{"text":"Saint Paul","link":"/entities/saint-paul"},{"text":"Salamanca City Central School District","link":"/entities/salamanca-city-central-school-district"},{"text":"Saleh al-Arouri","link":"/entities/saleh-al-arouri"},{"text":"Saleha Abedin","link":"/entities/saleha-abedin"},{"text":"Salesforce","link":"/entities/salesforce"},{"text":"Salim Ahmed Said","link":"/entities/salim-ahmed-said"},{"text":"Salim Said","link":"/entities/salim-said"},{"text":"Salinas Family","link":"/entities/salinas-family"},{"text":"Sally Buzbee","link":"/entities/sally-buzbee"},{"text":"Sally Kornbluth","link":"/entities/sally-kornbluth"},{"text":"Sally Yates","link":"/entities/sally-yates"},{"text":"Salman bin Abdulaziz","link":"/entities/salman-bin-abdulaziz"},{"text":"Salome Zourabichvili","link":"/entities/salome-zourabichvili"},{"text":"Salt Lake City Police Department","link":"/entities/salt-lake-city-police-department"},{"text":"Sam Altman","link":"/entities/sam-altman"},{"text":"Sam Bankman-Fried","link":"/entities/sam-bankman-fried"},{"text":"Sam Bregman","link":"/entities/sam-bregman"},{"text":"Sam Brown","link":"/entities/sam-brown"},{"text":"Sam J. Myers","link":"/entities/sam-j-myers"},{"text":"Sam Neill","link":"/entities/sam-neill"},{"text":"Samantha Power","link":"/entities/samantha-power"},{"text":"Samsung Electronics","link":"/entities/samsung-electronics"},{"text":"Samuel Alito","link":"/entities/samuel-alito"},{"text":"Samuel García Sepúlveda","link":"/entities/samuel-garcia-sepulveda"},{"text":"Samuel Morse","link":"/entities/samuel-morse"},{"text":"San Antonio Police Department","link":"/entities/san-antonio-police-department"},{"text":"San Francisco Pride","link":"/entities/san-francisco-pride"},{"text":"San Francisco State University","link":"/entities/san-francisco-state-university"},{"text":"Sanae Takaichi","link":"/entities/sanae-takaichi"},{"text":"Sandy Berger","link":"/entities/sandy-berger"},{"text":"Sara Netanyahu","link":"/entities/sara-netanyahu"},{"text":"Sara Rodriguez","link":"/entities/sara-rodriguez"},{"text":"Sara Tindall Ghazal","link":"/entities/sara-tindall-ghazal"},{"text":"Sarah B. Wallace","link":"/entities/sarah-b-wallace"},{"text":"Sarah Beckstrom","link":"/entities/sarah-beckstrom"},{"text":"Sarah Huckabee Sanders","link":"/entities/sarah-huckabee-sanders"},{"text":"Sarah Mullally","link":"/entities/sarah-mullally"},{"text":"Sarah Ransome","link":"/entities/sarah-ransome"},{"text":"Sarah Wallace","link":"/entities/sarah-wallace"},{"text":"Satoshi Action Fund","link":"/entities/satoshi-action-fund"},{"text":"Satoshi Nakamoto","link":"/entities/satoshi-nakamoto"},{"text":"Saturday Night Live","link":"/entities/saturday-night-live"},{"text":"Sauce and Effect","link":"/entities/sauce-and-effect"},{"text":"Saucon Valley School District","link":"/entities/saucon-valley-school-district"},{"text":"Saudi Arabia","link":"/entities/saudi-arabia"},{"text":"Saudi Arabian Military Industries (SAMI)","link":"/entities/saudi-arabian-military-industries"},{"text":"Saudi Aramco","link":"/entities/saudi-aramco"},{"text":"Saudi Public Investment Fund","link":"/entities/saudi-public-investment-fund"},{"text":"Savannah Hernandez","link":"/entities/savannah-hernandez"},{"text":"SavePulse","link":"/entities/savepulse"},{"text":"Saxon Aerospace","link":"/entities/saxon-aerospace"},{"text":"Scattered Spider","link":"/entities/scattered-spider"},{"text":"Schutzstaffel (SS)","link":"/entities/schutzstaffel"},{"text":"Scientology","link":"/entities/scientology"},{"text":"SCO Development Bank","link":"/entities/sco-development-bank"},{"text":"Scot McAfee","link":"/entities/scot-mcafee"},{"text":"Scott Adams","link":"/entities/scott-adams"},{"text":"Scott Bennett","link":"/entities/scott-bennett"},{"text":"Scott Bessent","link":"/entities/scott-bessent"},{"text":"Scott Borgerson","link":"/entities/scott-borgerson"},{"text":"Scott Gessler","link":"/entities/scott-gessler"},{"text":"Scott Hall","link":"/entities/scott-hall"},{"text":"Scott Horton","link":"/entities/scott-horton"},{"text":"Scott Jarrett","link":"/entities/scott-jarrett"},{"text":"Scott Jennings","link":"/entities/scott-jennings"},{"text":"Scott Kupor","link":"/entities/scott-kupor"},{"text":"Scott Leiendecker","link":"/entities/scott-leiendecker"},{"text":"Scott McAfee","link":"/entities/scott-mcafee"},{"text":"Scott Presler","link":"/entities/scott-presler"},{"text":"Scott Ritter","link":"/entities/scott-ritter"},{"text":"Scott Shepard","link":"/entities/scott-shepard"},{"text":"Scott Stapp","link":"/entities/scott-stapp"},{"text":"Scott Turner","link":"/entities/scott-turner"},{"text":"Scott Varholak","link":"/entities/scott-varholak"},{"text":"Scottish National Party","link":"/entities/scottish-national-party"},{"text":"Scottish Police Federation","link":"/entities/scottish-police-federation"},{"text":"Scouting America","link":"/entities/scouting-america"},{"text":"Sde Teiman","link":"/entities/sde-teiman"},{"text":"Sde Teiman Detention Facility","link":"/entities/sde-teiman-detention-facility"},{"text":"Sean \\"Diddy\\" Combs","link":"/entities/sean-combs"},{"text":"Sean Curran","link":"/entities/sean-curran"},{"text":"Sean Duffy","link":"/entities/sean-duffy"},{"text":"Sean Hannity","link":"/entities/sean-hannity"},{"text":"Sean Morgan","link":"/entities/sean-morgan"},{"text":"Sean O'Brien","link":"/entities/sean-obrien"},{"text":"Sean Parnell","link":"/entities/sean-parnell"},{"text":"Sean Plankey","link":"/entities/sean-plankey"},{"text":"Sean Spicer","link":"/entities/sean-spicer"},{"text":"Sean Vitka","link":"/entities/sean-vitka"},{"text":"Sebastian Gorka","link":"/entities/sebastian-gorka"},{"text":"Sebin (Bolivarian National Intelligence Service)","link":"/entities/sebin"},{"text":"Second Bank of the United States","link":"/entities/second-bank-of-the-united-states"},{"text":"Securities and Exchange Commission","link":"/entities/securities-and-exchange-commission"},{"text":"Security Service of Ukraine","link":"/entities/security-service-of-ukraine"},{"text":"Sedition Hunters","link":"/entities/sedition-hunters"},{"text":"Select Committee on the Chinese Communist Party","link":"/entities/select-committee-on-the-chinese-communist-party"},{"text":"Select Subcommittee on the Coronavirus Pandemic","link":"/entities/select-subcommittee-on-the-coronavirus-pandemic"},{"text":"Semion Mogilevich","link":"/entities/semion-mogilevich"},{"text":"Senate Appropriations Committee","link":"/entities/senate-appropriations-committee"},{"text":"Senate Armed Services Committee","link":"/entities/senate-armed-services-committee"},{"text":"Senate Finance Committee","link":"/entities/senate-finance-committee"},{"text":"Senate Foreign Relations Committee","link":"/entities/senate-foreign-relations-committee"},{"text":"Senate Homeland Security and Governmental Affairs Committee","link":"/entities/senate-homeland-security-and-governmental-affairs-committee"},{"text":"Senate Homeland Security Committee","link":"/entities/senate-homeland-security-committee"},{"text":"Senate Intelligence Committee","link":"/entities/senate-intelligence-committee"},{"text":"Senate Judiciary Committee","link":"/entities/senate-judiciary-committee"},{"text":"Senate Sergeant at Arms","link":"/entities/senate-sergeant-at-arms"},{"text":"Seneca Nation of Indians","link":"/entities/seneca-nation-of-indians"},{"text":"Senegal","link":"/entities/senegal"},{"text":"SentinelOne","link":"/entities/sentinelone"},{"text":"Sequoia Voting Systems","link":"/entities/sequoia-voting-systems"},{"text":"Serge Monast","link":"/entities/serge-monast"},{"text":"Sergei Kurzin","link":"/entities/sergei-kurzin"},{"text":"Sergei Lavrov","link":"/entities/sergei-lavrov"},{"text":"Sergei Shoigu","link":"/entities/sergei-shoigu"},{"text":"Sergey Brin","link":"/entities/sergey-brin"},{"text":"Sergey Filimonov","link":"/entities/sergey-filimonov"},{"text":"Sergey Glazyev","link":"/entities/sergey-glazyev"},{"text":"Sergey Guriev","link":"/entities/sergey-guriev"},{"text":"Sergey Lavrov","link":"/entities/sergey-lavrov"},{"text":"Sergey Naryshkin","link":"/entities/sergey-naryshkin"},{"text":"Sergey Ryabkov","link":"/entities/sergey-ryabkov"},{"text":"Sergey Shestakov","link":"/entities/sergey-shestakov"},{"text":"Sergii Koretskyi","link":"/entities/sergii-koretskyi"},{"text":"Sergio Gore","link":"/entities/sergio-gore"},{"text":"Serious Fraud Office","link":"/entities/serious-fraud-office"},{"text":"Service Employees International Union","link":"/entities/seiu"},{"text":"Seth Keshel","link":"/entities/seth-keshel"},{"text":"Seth Rich","link":"/entities/seth-rich"},{"text":"Seymour Hersh","link":"/entities/seymour-hersh"},{"text":"Shaiel Ben-Ephraim","link":"/entities/shaiel-ben-ephraim"},{"text":"Shalanda Young","link":"/entities/shalanda-young"},{"text":"Shalom Lipner","link":"/entities/shalom-lipner"},{"text":"Shamsud-Din Jabbar","link":"/entities/shamsud-din-jabbar"},{"text":"Shane Tamura","link":"/entities/shane-tamura"},{"text":"Shanghai Cooperation Organisation","link":"/entities/shanghai-cooperation-organisation"},{"text":"Shanghai Cooperation Organization","link":"/entities/shanghai-cooperation-organization"},{"text":"Shanghai Petroleum and Natural Gas Exchange","link":"/entities/shanghai-petroleum-and-natural-gas-exchange"},{"text":"Shannon Stevenson","link":"/entities/shannon-stevenson"},{"text":"Sharlene Alexander","link":"/entities/sharlene-alexander"},{"text":"Shas","link":"/entities/shas"},{"text":"Shawn Fain","link":"/entities/shawn-fain"},{"text":"Sheena Wright","link":"/entities/sheena-wright"},{"text":"Shehbaz Sharif","link":"/entities/shehbaz-sharif"},{"text":"Sheila Jackson Lee","link":"/entities/sheila-jackson-lee"},{"text":"Shein","link":"/entities/shein"},{"text":"Sheldon Adelson","link":"/entities/sheldon-adelson"},{"text":"Sheldon Whitehouse","link":"/entities/sheldon-whitehouse"},{"text":"Shenna Bellows","link":"/entities/shenna-bellows"},{"text":"Sheri Davis","link":"/entities/sheri-davis"},{"text":"Sheri Redstone","link":"/entities/sheri-redstone"},{"text":"Sherri Ann Charleston","link":"/entities/sherri-ann-charleston"},{"text":"Shigeru Ishiba","link":"/entities/shigeru-ishiba"},{"text":"Shin Bet","link":"/entities/shin-bet"},{"text":"Shinzo Abe","link":"/entities/shinzo-abe"},{"text":"Shirley Weber","link":"/entities/shirley-weber"},{"text":"Shlomo Karhi","link":"/entities/shlomo-karhi"},{"text":"Shlomo Kramer","link":"/entities/shlomo-kramer"},{"text":"Show Faith by Works, LLC","link":"/entities/show-faith-by-works"},{"text":"Showtime","link":"/entities/showtime"},{"text":"Sibanye-Stillwater","link":"/entities/sibanye-stillwater"},{"text":"Sidney Powell","link":"/entities/sidney-powell"},{"text":"Sigal Chattah","link":"/entities/sigal-chattah"},{"text":"Signal Foundation","link":"/entities/signal-foundation"},{"text":"Signature Bank","link":"/entities/signature-bank"},{"text":"Silicon Valley Bank","link":"/entities/silicon-valley-bank"},{"text":"Silver Lake Partners","link":"/entities/silver-lake-partners"},{"text":"Silvio Berlusconi","link":"/entities/silvio-berlusconi"},{"text":"Simón Bolívar","link":"/entities/simon-bolivar"},{"text":"Simon Esler","link":"/entities/simon-esler"},{"text":"Simon Harris","link":"/entities/simon-harris"},{"text":"Simon Wiesenthal Center","link":"/entities/simon-wiesenthal-center"},{"text":"Simona Halperin","link":"/entities/simona-halperin"},{"text":"Simone Biles","link":"/entities/simone-biles"},{"text":"Sinaloa Cartel","link":"/entities/sinaloa-cartel"},{"text":"Sinclair Broadcast Group","link":"/entities/sinclair-broadcast-group"},{"text":"Siobhian Brown","link":"/entities/siobhian-brown"},{"text":"Sisters of Perpetual Indulgence","link":"/entities/sisters-of-perpetual-indulgence"},{"text":"SITREP","link":"/entities/sitrep"},{"text":"Skydance","link":"/entities/skydance"},{"text":"Skydance Media","link":"/entities/skydance-media"},{"text":"SkyFall","link":"/entities/skyfall"},{"text":"Sloan Rachmuth","link":"/entities/sloan-rachmuth"},{"text":"Slovakia","link":"/entities/slovakia"},{"text":"Smackover Lithium","link":"/entities/smackover-lithium"},{"text":"Small Business Administration","link":"/entities/small-business-administration"},{"text":"Smartmatic","link":"/entities/smartmatic"},{"text":"Smedley Butler","link":"/entities/smedley-butler"},{"text":"Smiths Detection","link":"/entities/smiths-detection"},{"text":"Snoop Dogg","link":"/entities/snoop-dogg"},{"text":"Snopes","link":"/entities/snopes"},{"text":"Social Democratic Party (Romania)","link":"/entities/social-democratic-party-romania"},{"text":"Social Democratic Party of Germany (SPD)","link":"/entities/social-democratic-party-of-germany"},{"text":"Social Security Administration","link":"/entities/social-security-administration"},{"text":"SoftBank","link":"/entities/softbank"},{"text":"Solar Orbiter","link":"/entities/solar-orbiter"},{"text":"Solidarity Center","link":"/entities/solidarity-center"},{"text":"Solyndra","link":"/entities/solyndra"},{"text":"Somalia","link":"/entities/somalia"},{"text":"Somaliland","link":"/entities/somaliland"},{"text":"Sonia Sotomayor","link":"/entities/sonia-sotomayor"},{"text":"Sony","link":"/entities/sony"},{"text":"Sonya Jaquez Lewis","link":"/entities/sonya-jaquez-lewis"},{"text":"Sophia Brill","link":"/entities/sophia-brill"},{"text":"Soros Economic Development Fund","link":"/entities/soros-economic-development-fund"},{"text":"South Africa","link":"/entities/south-africa"},{"text":"South Korea","link":"/entities/south-korea"},{"text":"South Pars Gas Field","link":"/entities/south-pars-gas-field"},{"text":"Southeastern Legal Foundation","link":"/entities/southeastern-legal-foundation"},{"text":"Southern District of New York","link":"/entities/southern-district-of-new-york"},{"text":"Southern Poverty Law Center","link":"/entities/southern-poverty-law-center"},{"text":"Space Development Agency","link":"/entities/space-development-agency"},{"text":"Space Weather Prediction Center","link":"/entities/space-weather-prediction-center"},{"text":"SpaceX","link":"/entities/spacex"},{"text":"SpaceXAI","link":"/entities/spacexai"},{"text":"Spain","link":"/entities/spain"},{"text":"Special Air Service","link":"/entities/special-air-service"},{"text":"Special Inspector General for Afghanistan Reconstruction","link":"/entities/special-inspector-general-for-afghanistan-reconstruction"},{"text":"Specialized Anti-Corruption Prosecutor's Office (SAPO)","link":"/entities/specialized-anti-corruption-prosecutors-office"},{"text":"Spellbreakers","link":"/entities/spellbreakers"},{"text":"Spencer Cox","link":"/entities/spencer-cox"},{"text":"Spencer Pratt","link":"/entities/spencer-pratt"},{"text":"Spirit AeroSystems","link":"/entities/spirit-aerosystems"},{"text":"Spirit Airlines","link":"/entities/spirit-airlines"},{"text":"Sports Illustrated","link":"/entities/sports-illustrated"},{"text":"Sports Talk","link":"/entities/sports-talk"},{"text":"Sports Talk (Badlands Media)","link":"/entities/sports-talk-badlands"},{"text":"Spotify","link":"/entities/spotify"},{"text":"St. Paul Police Department","link":"/entities/st-paul-police-department"},{"text":"Stacey Abrams","link":"/entities/stacey-abrams"},{"text":"Stacey Graves","link":"/entities/stacey-graves"},{"text":"Stacey Plaskett","link":"/entities/stacey-plaskett"},{"text":"Stan Deal","link":"/entities/stan-deal"},{"text":"Standard & Poor's","link":"/entities/standard-and-poors"},{"text":"Standard Oil","link":"/entities/standard-oil"},{"text":"Stanford Internet Observatory","link":"/entities/stanford-internet-observatory"},{"text":"Stanford University","link":"/entities/stanford-university"},{"text":"Stanley Woodward","link":"/entities/stanley-woodward"},{"text":"Star Center","link":"/entities/star-center"},{"text":"Star News Digital Media","link":"/entities/star-news-digital-media"},{"text":"Starbucks","link":"/entities/starbucks"},{"text":"Starbucks Workers United","link":"/entities/starbucks-workers-united"},{"text":"Starlink","link":"/entities/starlink"},{"text":"State Department","link":"/entities/state-department"},{"text":"State Duma","link":"/entities/state-duma"},{"text":"State Street","link":"/entities/state-street"},{"text":"Statista","link":"/entities/statista"},{"text":"Stefan Halper","link":"/entities/stefan-halper"},{"text":"Stefan Homburg","link":"/entities/stefan-homburg"},{"text":"Stella Assange","link":"/entities/stella-assange"},{"text":"Stellantis","link":"/entities/stellantis"},{"text":"Stepan Bandera","link":"/entities/stepan-bandera"},{"text":"Stephanie Pope","link":"/entities/stephanie-pope"},{"text":"Stephanie Savell","link":"/entities/stephanie-savell"},{"text":"Stephanie Wissel","link":"/entities/stephanie-wissel"},{"text":"Stephen Binhak","link":"/entities/stephen-binhak"},{"text":"Stephen Colbert","link":"/entities/stephen-colbert"},{"text":"Stephen Feinberg","link":"/entities/stephen-feinberg"},{"text":"Stephen Kampyongo","link":"/entities/stephen-kampyongo"},{"text":"Stephen Locher","link":"/entities/stephen-locher"},{"text":"Stephen Miller","link":"/entities/stephen-miller"},{"text":"Stephen Miran","link":"/entities/stephen-miran"},{"text":"Stephen Richer","link":"/entities/stephen-richer"},{"text":"Stephen Sund","link":"/entities/stephen-sund"},{"text":"Stephen Wilson","link":"/entities/stephen-wilson"},{"text":"Stephen Yekel","link":"/entities/stephen-yekel"},{"text":"Steve Baker","link":"/entities/steve-baker"},{"text":"Steve Bannon","link":"/entities/steve-bannon"},{"text":"Steve Cogswell","link":"/entities/steve-cogswell"},{"text":"Steve Descano","link":"/entities/steve-descano"},{"text":"Steve Feinberg","link":"/entities/steve-feinberg"},{"text":"Steve Kwast","link":"/entities/steve-kwast"},{"text":"Steve Marshall","link":"/entities/steve-marshall"},{"text":"Steve Ricchetti","link":"/entities/steve-ricchetti"},{"text":"Steve Sadow","link":"/entities/steve-sadow"},{"text":"Steve Scalise","link":"/entities/steve-scalise"},{"text":"Steve Schleiker","link":"/entities/steve-schleiker"},{"text":"Steve Toth","link":"/entities/steve-toth"},{"text":"Steve Witkoff","link":"/entities/steve-witkoff"},{"text":"Steve Wozniak","link":"/entities/steve-wozniak"},{"text":"Steven Cheung","link":"/entities/steven-cheung"},{"text":"Steven Mnuchin","link":"/entities/steven-mnuchin"},{"text":"Steven Simon","link":"/entities/steven-simon"},{"text":"Stewart Rhodes","link":"/entities/stewart-rhodes"},{"text":"Stian Jenssen","link":"/entities/stian-jenssen"},{"text":"Stoke Space","link":"/entities/stoke-space"},{"text":"StopAntisemitism","link":"/entities/stopantisemitism"},{"text":"Stormy Daniels","link":"/entities/stormy-daniels"},{"text":"Stormy Patriot Joe","link":"/entities/stormy-patriot-joe"},{"text":"Stranger Things","link":"/entities/stranger-things"},{"text":"Stuart Symington","link":"/entities/stuart-symington"},{"text":"Stuart Varney","link":"/entities/stuart-varney"},{"text":"Stuart W. Bowen Jr.","link":"/entities/stuart-w-bowen-jr"},{"text":"Studio 8 Hair Lab","link":"/entities/studio-8-hair-lab"},{"text":"Stuttgart Ballet","link":"/entities/stuttgart-ballet"},{"text":"Subrahmanyam Jaishankar","link":"/entities/subrahmanyam-jaishankar"},{"text":"Sudan","link":"/entities/sudan"},{"text":"Sudan Liberation Movement-Army","link":"/entities/sudan-liberation-movement-army"},{"text":"Sudanese Armed Forces","link":"/entities/sudanese-armed-forces"},{"text":"Sue Mi Terry","link":"/entities/sue-mi-terry"},{"text":"Suella Braverman","link":"/entities/suella-braverman"},{"text":"Suez Company","link":"/entities/suez-company"},{"text":"Suhail Mohamed al-Mazrouei","link":"/entities/suhail-al-mazrouei"},{"text":"Suhas Subramanyam","link":"/entities/suhas-subramanyam"},{"text":"Sullivan & Cromwell","link":"/entities/sullivan-and-cromwell"},{"text":"Sultan Ahmed bin Sulayem","link":"/entities/sultan-ahmed-bin-sulayem"},{"text":"Sultan al Jaber","link":"/entities/sultan-al-jaber"},{"text":"Summit News","link":"/entities/summit-news"},{"text":"Sumner Redstone","link":"/entities/sumner-redstone"},{"text":"Sundar Pichai","link":"/entities/sundar-pichai"},{"text":"Sunita Williams","link":"/entities/sunita-williams"},{"text":"Sunny Hostin","link":"/entities/sunny-hostin"},{"text":"Sunrise Movement","link":"/entities/sunrise-movement"},{"text":"Support Group for Islam and Muslims (JNIM)","link":"/entities/jnim"},{"text":"Supreme Court of Russia","link":"/entities/supreme-court-of-russia"},{"text":"Supreme Court of the United States","link":"/entities/supreme-court-of-the-united-states"},{"text":"Supreme Court of Ukraine","link":"/entities/supreme-court-of-ukraine"},{"text":"Supreme National Security Council (Iran)","link":"/entities/supreme-national-security-council-iran"},{"text":"Surangel Whipps Jr.","link":"/entities/surangel-whipps-jr"},{"text":"Susan Collins","link":"/entities/susan-collins"},{"text":"Susan Escallier","link":"/entities/susan-escallier"},{"text":"Susan Illston","link":"/entities/susan-illston"},{"text":"Susan Kokinda","link":"/entities/susan-kokinda"},{"text":"Susan Monarez","link":"/entities/susan-monarez"},{"text":"Susan Rice","link":"/entities/susan-rice"},{"text":"Susan Smith","link":"/entities/susan-smith"},{"text":"Susan Wojcicki","link":"/entities/susan-wojcicki"},{"text":"Susie Wiles","link":"/entities/susie-wiles"},{"text":"Svetlana Grinchuk","link":"/entities/svetlana-grinchuk"},{"text":"SWAPO","link":"/entities/swapo"},{"text":"Sweden","link":"/entities/sweden"},{"text":"Sydney Sweeney","link":"/entities/sydney-sweeney"},{"text":"Syed Abedin","link":"/entities/syed-abedin"},{"text":"Sylvain Itte","link":"/entities/sylvain-itte"},{"text":"Sylvester Stallone","link":"/entities/sylvester-stallone"},{"text":"Syria","link":"/entities/syria"},{"text":"Syrian Democratic Council","link":"/entities/syrian-democratic-council"},{"text":"Syrian Democratic Forces","link":"/entities/syrian-democratic-forces"},{"text":"Syrian Emergency Task Force","link":"/entities/syrian-emergency-task-force"},{"text":"Syrian Observatory for Human Rights","link":"/entities/syrian-observatory-for-human-rights"},{"text":"TAE Technologies","link":"/entities/tae-technologies"},{"text":"Tafari Campbell","link":"/entities/tafari-campbell"},{"text":"Tahnoon bin Zayed Al Nahyan","link":"/entities/tahnoon-bin-zayed-al-nahyan"},{"text":"Taiwan","link":"/entities/taiwan"},{"text":"Taiwan Coast Guard Administration","link":"/entities/taiwan-coast-guard-administration"},{"text":"Taiwan Semiconductor Manufacturing Company","link":"/entities/tsmc"},{"text":"Taking It Back","link":"/entities/taking-it-back"},{"text":"Tal Heinrich","link":"/entities/tal-heinrich"},{"text":"Taliban","link":"/entities/taliban"},{"text":"Tamim bin Hamad Al Thani","link":"/entities/tamim-bin-hamad-al-thani"},{"text":"Tammany Hall","link":"/entities/tammany-hall"},{"text":"Tammy Bruce","link":"/entities/tammy-bruce"},{"text":"Tan Kefei","link":"/entities/tan-kefei"},{"text":"Tanya Chutkan","link":"/entities/tanya-chutkan"},{"text":"Tara Lee Rodas","link":"/entities/tara-lee-rodas"},{"text":"Tarek William Saab","link":"/entities/tarek-william-saab"},{"text":"Target","link":"/entities/target"},{"text":"Target Corporation","link":"/entities/target-corporation"},{"text":"Tartus","link":"/entities/tartus"},{"text":"Tartus Naval Base","link":"/entities/tartus-naval-base"},{"text":"Tashella Dickerson","link":"/entities/tashella-dickerson"},{"text":"Task Force KleptoCapture","link":"/entities/task-force-kleptocapture"},{"text":"Task Force to Eliminate Fraud","link":"/entities/task-force-to-eliminate-fraud"},{"text":"Tasnim News Agency","link":"/entities/tasnim-news-agency"},{"text":"TASS","link":"/entities/tass"},{"text":"Tate Reeves","link":"/entities/tate-reeves"},{"text":"Tauqeer Hussain","link":"/entities/tauqeer-hussain"},{"text":"Taylor Lorenz","link":"/entities/taylor-lorenz"},{"text":"Taylor Swift","link":"/entities/taylor-swift"},{"text":"Teamsters","link":"/entities/teamsters"},{"text":"TechCrunch","link":"/entities/techcrunch"},{"text":"Techno Fog","link":"/entities/techno-fog"},{"text":"Ted Cruz","link":"/entities/ted-cruz"},{"text":"Ted Kaczynski","link":"/entities/ted-kaczynski"},{"text":"Ted Kaufman","link":"/entities/ted-kaufman"},{"text":"Ted Lieu","link":"/entities/ted-lieu"},{"text":"Ted Peters","link":"/entities/ted-peters"},{"text":"Teddy Cook","link":"/entities/teddy-cook"},{"text":"Tedros Adhanom Ghebreyesus","link":"/entities/tedros-adhanom-ghebreyesus"},{"text":"Telegram","link":"/entities/telegram"},{"text":"Telis Mistakidis","link":"/entities/telis-mistakidis"},{"text":"Temple Institute","link":"/entities/temple-institute"},{"text":"Temu","link":"/entities/temu"},{"text":"Tenacious D","link":"/entities/tenacious-d"},{"text":"Tencent","link":"/entities/tencent"},{"text":"Teneo Holdings","link":"/entities/teneo-holdings"},{"text":"Tenet Media","link":"/entities/tenet-media"},{"text":"Terence McKenna","link":"/entities/terence-mckenna"},{"text":"Teresa Stokes","link":"/entities/teresa-stokes"},{"text":"Teresa Youngblut","link":"/entities/teresa-youngblut"},{"text":"TerraPower","link":"/entities/terrapower"},{"text":"TerraVolta","link":"/entities/terravolta"},{"text":"Terrence Banks","link":"/entities/terrence-banks"},{"text":"Terrence Bradley","link":"/entities/terrence-bradley"},{"text":"Territorial Center for Recruitment","link":"/entities/territorial-center-for-recruitment"},{"text":"Terryl Farnsworth","link":"/entities/terryl-farnsworth"},{"text":"Tesla","link":"/entities/tesla"},{"text":"Tesla, Inc.","link":"/entities/tesla-inc"},{"text":"Tether","link":"/entities/tether"},{"text":"Texas A&M University at Galveston","link":"/entities/texas-am-university-at-galveston"},{"text":"Texas Attorney General's Office","link":"/entities/texas-attorney-generals-office"},{"text":"Texas Board of Pardons and Paroles","link":"/entities/texas-board-of-pardons-and-paroles"},{"text":"Texas Commerce Bank","link":"/entities/texas-commerce-bank"},{"text":"Texas Department of Public Safety","link":"/entities/texas-department-of-public-safety"},{"text":"Texas Majority PAC","link":"/entities/texas-majority-pac"},{"text":"Texas National Bank","link":"/entities/texas-national-bank"},{"text":"Texas National Guard","link":"/entities/texas-national-guard"},{"text":"Texas Senate","link":"/entities/texas-senate"},{"text":"Texas Supreme Court","link":"/entities/texas-supreme-court"},{"text":"Thad Cochran","link":"/entities/thad-cochran"},{"text":"Thames Valley Police","link":"/entities/thames-valley-police"},{"text":"The Activist Post","link":"/entities/activist-post"},{"text":"The Atlantic","link":"/entities/the-atlantic"},{"text":"The Boring Company","link":"/entities/the-boring-company"},{"text":"The Bunker","link":"/entities/the-bunker"},{"text":"The Cradle","link":"/entities/the-cradle"},{"text":"The Daily Wire","link":"/entities/daily-wire"},{"text":"The Debrief","link":"/entities/the-debrief"},{"text":"The Drugs Store (Vancouver)","link":"/entities/the-drugs-store"},{"text":"The Earth Chronicles","link":"/entities/the-earth-chronicles"},{"text":"The Economist","link":"/entities/the-economist"},{"text":"The Elections Group","link":"/entities/the-elections-group"},{"text":"The Epoch Times","link":"/entities/epoch-times"},{"text":"The Epoch Times","link":"/entities/the-epoch-times"},{"text":"The Federalist","link":"/entities/the-federalist"},{"text":"The Federalist Papers (website)","link":"/entities/the-federalist-papers-website"},{"text":"The Free Press","link":"/entities/the-free-press"},{"text":"The Friggin' Friday Night Show!","link":"/entities/the-friggin-friday-night-show"},{"text":"The Gateway Pundit","link":"/entities/the-gateway-pundit"},{"text":"The Grayzone","link":"/entities/the-grayzone"},{"text":"The Guardian","link":"/entities/the-guardian"},{"text":"The Hershey Company","link":"/entities/hershey-company"},{"text":"The Hill","link":"/entities/the-hill"},{"text":"The Hollywood Reporter","link":"/entities/the-hollywood-reporter"},{"text":"The Independent","link":"/entities/the-independent"},{"text":"The Intercept","link":"/entities/the-intercept"},{"text":"The Jerusalem Post","link":"/entities/jerusalem-post"},{"text":"The Kate Awakening","link":"/entities/the-kate-awakening"},{"text":"The Lancet","link":"/entities/the-lancet"},{"text":"The Libertarian Institute","link":"/entities/the-libertarian-institute"},{"text":"The Liberty Den","link":"/entities/the-liberty-den"},{"text":"The Lincoln Project","link":"/entities/the-lincoln-project"},{"text":"The Moscow Times","link":"/entities/the-moscow-times"},{"text":"The National Pulse","link":"/entities/the-national-pulse"},{"text":"The New York Times","link":"/entities/new-york-times"},{"text":"The New Yorker","link":"/entities/new-yorker"},{"text":"The Onion","link":"/entities/the-onion"},{"text":"The Pentagon","link":"/entities/pentagon"},{"text":"The Philadelphia Inquirer","link":"/entities/philadelphia-inquirer"},{"text":"The Post Millennial","link":"/entities/the-post-millennial"},{"text":"The Satanic Temple","link":"/entities/satanic-temple"},{"text":"The Scotsman","link":"/entities/the-scotsman"},{"text":"The Sentry","link":"/entities/the-sentry"},{"text":"The Sun","link":"/entities/the-sun"},{"text":"The Telegraph","link":"/entities/the-telegraph"},{"text":"The Times of Israel","link":"/entities/times-of-israel"},{"text":"The Vanguard Group","link":"/entities/vanguard-group"},{"text":"The Verge","link":"/entities/the-verge"},{"text":"The View","link":"/entities/the-view"},{"text":"The Washington Examiner","link":"/entities/washington-examiner"},{"text":"The Washington Post","link":"/entities/washington-post"},{"text":"The Western Journal","link":"/entities/western-journal"},{"text":"The White House","link":"/entities/white-house"},{"text":"Thell Reed","link":"/entities/thell-reed"},{"text":"Theo Von","link":"/entities/theo-von"},{"text":"Theodore Chuang","link":"/entities/theodore-chuang"},{"text":"Theresa Counts Burke","link":"/entities/theresa-counts-burke"},{"text":"TheStormHasArrived","link":"/entities/thestormhasarrived"},{"text":"Thiel Capital","link":"/entities/thiel-capital"},{"text":"Thierry Breton","link":"/entities/thierry-breton"},{"text":"Third Way","link":"/entities/third-way"},{"text":"Thom Tillis","link":"/entities/thom-tillis"},{"text":"Thomas Bollyky","link":"/entities/thomas-bollyky"},{"text":"Thomas DiNapoli","link":"/entities/thomas-dinapoli"},{"text":"Thomas Donlon","link":"/entities/thomas-donlon"},{"text":"Thomas Haldenwang","link":"/entities/thomas-haldenwang"},{"text":"Thomas Hicks","link":"/entities/thomas-hicks"},{"text":"Thomas Jolly","link":"/entities/thomas-jolly"},{"text":"Thomas Malthus","link":"/entities/thomas-malthus"},{"text":"Thomas Manger","link":"/entities/thomas-manger"},{"text":"Thomas Massie","link":"/entities/thomas-massie"},{"text":"Thomas Matthew Crooks","link":"/entities/thomas-matthew-crooks"},{"text":"Thomas More Society","link":"/entities/thomas-more-society"},{"text":"Thomas Schaller","link":"/entities/thomas-schaller"},{"text":"Thorbjørn Jagland","link":"/entities/thorbjorn-jagland"},{"text":"Three Mile Island Nuclear Power Plant","link":"/entities/three-mile-island-nuclear-power-plant"},{"text":"Thunder Tiger","link":"/entities/thunder-tiger"},{"text":"Ticketmaster","link":"/entities/ticketmaster"},{"text":"Tiffany Red","link":"/entities/tiffany-red"},{"text":"Tiffany Trump","link":"/entities/tiffany-trump"},{"text":"TikTok","link":"/entities/tiktok"},{"text":"Tim Ballard","link":"/entities/tim-ballard"},{"text":"Tim Burchett","link":"/entities/tim-burchett"},{"text":"Tim Cook","link":"/entities/tim-cook"},{"text":"Tim Davie","link":"/entities/tim-davie"},{"text":"Tim Kaine","link":"/entities/tim-kaine"},{"text":"Tim Kennedy","link":"/entities/tim-kennedy"},{"text":"Tim Pool","link":"/entities/tim-pool"},{"text":"Tim Walz","link":"/entities/tim-walz"},{"text":"Time Magazine","link":"/entities/time-magazine"},{"text":"Timothy Courchaine","link":"/entities/timothy-courchaine"},{"text":"Timothy Kelly","link":"/entities/timothy-kelly"},{"text":"Timothy Parlatore","link":"/entities/timothy-parlatore"},{"text":"Timothy Pearson","link":"/entities/timothy-pearson"},{"text":"Timothy Thibault","link":"/entities/timothy-thibault"},{"text":"Timur Mindich","link":"/entities/timur-mindich"},{"text":"Tina Kotek","link":"/entities/tina-kotek"},{"text":"Tina Peters","link":"/entities/tina-peters"},{"text":"Tisza Party","link":"/entities/tisza-party"},{"text":"TJ Ducklo","link":"/entities/tj-ducklo"},{"text":"TMZ","link":"/entities/tmz"},{"text":"Todd Blanche","link":"/entities/todd-blanche"},{"text":"Todd Gilbert","link":"/entities/todd-gilbert"},{"text":"Todd Lyons","link":"/entities/todd-lyons"},{"text":"Todd Young","link":"/entities/todd-young"},{"text":"Tom Alexandrovich","link":"/entities/tom-alexandrovich"},{"text":"Tom Barrack","link":"/entities/tom-barrack"},{"text":"Tom Brady","link":"/entities/tom-brady"},{"text":"Tom Cole","link":"/entities/tom-cole"},{"text":"Tom Cotton","link":"/entities/tom-cotton"},{"text":"Tom Cruise","link":"/entities/tom-cruise"},{"text":"Tom Donilon","link":"/entities/tom-donilon"},{"text":"Tom Emmer","link":"/entities/tom-emmer"},{"text":"Tom Fitton","link":"/entities/tom-fitton"},{"text":"Tom Homan","link":"/entities/tom-homan"},{"text":"Tom Liddy","link":"/entities/tom-liddy"},{"text":"Tom Lockyer","link":"/entities/tom-lockyer"},{"text":"Tom Tiffany","link":"/entities/tom-tiffany"},{"text":"Tomi Lahren","link":"/entities/tomi-lahren"},{"text":"Tommy Pigott","link":"/entities/tommy-pigott"},{"text":"Tommy Robinson","link":"/entities/tommy-robinson"},{"text":"Toni Atkins","link":"/entities/toni-atkins"},{"text":"Tony Blair","link":"/entities/tony-blair"},{"text":"Tony Bobulinski","link":"/entities/tony-bobulinski"},{"text":"Tony Buzbee","link":"/entities/tony-buzbee"},{"text":"Tony Dofat","link":"/entities/tony-dofat"},{"text":"Tony Dokoupil","link":"/entities/tony-dokoupil"},{"text":"Tony Gonzales","link":"/entities/tony-gonzales"},{"text":"Tony Graf","link":"/entities/tony-graf"},{"text":"Torres del Paine National Park","link":"/entities/torres-del-paine-national-park"},{"text":"Tortuguita","link":"/entities/tortuguita"},{"text":"TotalEnergies","link":"/entities/totalenergies"},{"text":"Tracie Porter","link":"/entities/tracie-porter"},{"text":"Trafigura","link":"/entities/trafigura"},{"text":"Tran Thanh Man","link":"/entities/tran-thanh-man"},{"text":"Transgender Michigan","link":"/entities/transgender-michigan"},{"text":"Transitional National Council","link":"/entities/transitional-national-council"},{"text":"Transnistria","link":"/entities/transnistria"},{"text":"Transportation Security Administration","link":"/entities/transportation-security-administration"},{"text":"Trash Talk","link":"/entities/trash-talk"},{"text":"Travis King","link":"/entities/travis-king"},{"text":"Tren de Aragua","link":"/entities/tren-de-aragua"},{"text":"Trevor McFadden","link":"/entities/trevor-mcfadden"},{"text":"Trevor Noah","link":"/entities/trevor-noah"},{"text":"Trey Gowdy","link":"/entities/trey-gowdy"},{"text":"Trey Reed","link":"/entities/trey-reed"},{"text":"Trey Yingst","link":"/entities/trey-yingst"},{"text":"Tricia McLaughlin","link":"/entities/tricia-mclaughlin"},{"text":"Tricontinental","link":"/entities/tricontinental"},{"text":"Trilateral Commission","link":"/entities/trilateral-commission"},{"text":"Tristan Harris","link":"/entities/tristan-harris"},{"text":"Tristan Tate","link":"/entities/tristan-tate"},{"text":"Troy Edgar","link":"/entities/troy-edgar"},{"text":"Tru Reporting","link":"/entities/tru-reporting"},{"text":"True the Vote","link":"/entities/true-the-vote"},{"text":"Trump Administration","link":"/entities/trump-administration"},{"text":"Trump Library Foundation","link":"/entities/trump-library-foundation"},{"text":"Trump Media and Technology Group","link":"/entities/trump-media-and-technology-group"},{"text":"Trump Organization","link":"/entities/trump-organization"},{"text":"TruReporting","link":"/entities/trureporting"},{"text":"Trusted News Initiative","link":"/entities/trusted-news-initiative"},{"text":"Truth Social","link":"/entities/truth-social"},{"text":"Tucker Carlson","link":"/entities/tucker-carlson"},{"text":"Tucker Carlson Network","link":"/entities/tucker-carlson-network"},{"text":"Tucker Obenshain","link":"/entities/tucker-obenshain"},{"text":"Tudor Dixon","link":"/entities/tudor-dixon"},{"text":"Tulsi Gabbard","link":"/entities/tulsi-gabbard"},{"text":"Tupac Shakur","link":"/entities/tupac-shakur"},{"text":"Turi King","link":"/entities/turi-king"},{"text":"Turkey","link":"/entities/turkey"},{"text":"Turki Al Faisal","link":"/entities/turki-al-faisal"},{"text":"Turkish National Intelligence Organization (MIT)","link":"/entities/turkish-national-intelligence-organization"},{"text":"Turkish Petroleum Corporation (TPAO)","link":"/entities/turkish-petroleum-corporation"},{"text":"TurkStream Pipeline","link":"/entities/turkstream-pipeline"},{"text":"Turning Point Action","link":"/entities/turning-point-action"},{"text":"Turning Point USA","link":"/entities/turning-point-usa"},{"text":"Twitter","link":"/entities/twitter"},{"text":"Tyler Bowyer","link":"/entities/tyler-bowyer"},{"text":"Tyler Cherry","link":"/entities/tyler-cherry"},{"text":"Tyler Perry","link":"/entities/tyler-perry"},{"text":"Tyler Robinson","link":"/entities/tyler-robinson"},{"text":"Tyler Vargas-Andrews","link":"/entities/tyler-vargas-andrews"},{"text":"Tyrone Woods","link":"/entities/tyrone-woods"},{"text":"Tyson Foods","link":"/entities/tyson-foods"},{"text":"U.K. Parliament","link":"/entities/uk-parliament"},{"text":"U.S. Agency for Global Media","link":"/entities/us-agency-for-global-media"},{"text":"U.S. Attorney's Office for the Eastern District of New York","link":"/entities/us-attorneys-office-eastern-district-of-new-york"},{"text":"U.S. Attorney's Office for the Eastern District of Virginia","link":"/entities/eastern-district-of-virginia-us-attorneys-office"},{"text":"U.S. Bancorp","link":"/entities/us-bancorp"},{"text":"U.S. Central Command","link":"/entities/us-central-command"},{"text":"U.S. Chamber of Commerce","link":"/entities/us-chamber-of-commerce"},{"text":"U.S. Court of Appeals for the D.C. Circuit","link":"/entities/us-court-of-appeals-for-the-dc-circuit"},{"text":"U.S. Court of International Trade","link":"/entities/us-court-of-international-trade"},{"text":"U.S. Department of Labor","link":"/entities/us-department-of-labor"},{"text":"U.S. Department of the Treasury","link":"/entities/us-department-of-the-treasury"},{"text":"U.S. Department of Transportation","link":"/entities/us-department-of-transportation"},{"text":"U.S. District Court for the Northern District of Texas","link":"/entities/us-district-court-for-the-northern-district-of-texas"},{"text":"U.S. House of Representatives","link":"/entities/us-house-of-representatives"},{"text":"U.S. Oil & Gas Association","link":"/entities/us-oil-and-gas-association"},{"text":"UBS","link":"/entities/ubs"},{"text":"UCLA Health","link":"/entities/ucla-health"},{"text":"UK Ministry of Defence","link":"/entities/uk-ministry-of-defence"},{"text":"Ukraine","link":"/entities/ukraine"},{"text":"Ukrainian Orthodox Church","link":"/entities/ukrainian-orthodox-church"},{"text":"Ukrenergo","link":"/entities/ukrenergo"},{"text":"Ulrich Thoden","link":"/entities/ulrich-thoden"},{"text":"Ulta Beauty","link":"/entities/ulta-beauty"},{"text":"Ultimate Fighting Championship","link":"/entities/ufc"},{"text":"Umkhonto we Sizwe Party (MKP)","link":"/entities/umkhonto-we-sizwe-party"},{"text":"UN Watch","link":"/entities/un-watch"},{"text":"UN Women","link":"/entities/un-women"},{"text":"Unidentified Aerial Phenomena Task Force","link":"/entities/unidentified-aerial-phenomena-task-force"},{"text":"UnidosUS","link":"/entities/unidosus"},{"text":"UNIFIL","link":"/entities/unifil"},{"text":"Unilever","link":"/entities/unilever"},{"text":"Union Pacific","link":"/entities/union-pacific"},{"text":"United Airlines","link":"/entities/united-airlines"},{"text":"United Arab Emirates","link":"/entities/united-arab-emirates"},{"text":"United Auto Workers (UAW)","link":"/entities/united-auto-workers"},{"text":"United Fruit Company","link":"/entities/united-fruit-company"},{"text":"United Kingdom","link":"/entities/united-kingdom"},{"text":"United Launch Alliance","link":"/entities/united-launch-alliance"},{"text":"United Nations","link":"/entities/united-nations"},{"text":"United Nations Assistance Mission in Afghanistan","link":"/entities/united-nations-assistance-mission-in-afghanistan"},{"text":"United Nations General Assembly","link":"/entities/united-nations-general-assembly"},{"text":"United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA)","link":"/entities/unrwa"},{"text":"United Nations Security Council","link":"/entities/united-nations-security-council"},{"text":"United Parcel Service","link":"/entities/united-parcel-service"},{"text":"United States Africa Command","link":"/entities/africom"},{"text":"United States Air Force","link":"/entities/united-states-air-force"},{"text":"United States Army","link":"/entities/united-states-army"},{"text":"United States Army Medical Research Institute of Infectious Diseases","link":"/entities/united-states-army-medical-research-institute-of-infectious-diseases"},{"text":"United States Border Patrol","link":"/entities/united-states-border-patrol"},{"text":"United States Border Patrol","link":"/entities/us-border-patrol"},{"text":"United States Capitol Police","link":"/entities/united-states-capitol-police"},{"text":"United States Census Bureau","link":"/entities/united-states-census-bureau"},{"text":"United States Central Command","link":"/entities/centcom"},{"text":"United States Coast Guard","link":"/entities/us-coast-guard"},{"text":"United States Congress","link":"/entities/us-congress"},{"text":"United States Court of Appeals for the Ninth Circuit","link":"/entities/united-states-court-of-appeals-for-the-ninth-circuit"},{"text":"United States Cyber Command","link":"/entities/us-cyber-command"},{"text":"United States Department of Agriculture","link":"/entities/usda"},{"text":"United States Department of Defense","link":"/entities/department-of-defense"},{"text":"United States Department of Education","link":"/entities/education-department"},{"text":"United States District Court for the District of Colorado","link":"/entities/us-district-court-of-colorado"},{"text":"United States District Court for the District of Columbia","link":"/entities/dc-district-court"},{"text":"United States European Command","link":"/entities/united-states-european-command"},{"text":"United States Geological Survey","link":"/entities/united-states-geological-survey"},{"text":"United States House of Representatives","link":"/entities/house-of-representatives"},{"text":"United States House Oversight Committee","link":"/entities/united-states-house-oversight-committee"},{"text":"United States Institute of Peace","link":"/entities/united-states-institute-of-peace"},{"text":"United States Judicial Conference","link":"/entities/united-states-judicial-conference"},{"text":"United States Marine Corps","link":"/entities/united-states-marine-corps"},{"text":"United States Maritime Alliance","link":"/entities/united-states-maritime-alliance"},{"text":"United States Military","link":"/entities/us-military"},{"text":"United States Military Academy at West Point","link":"/entities/west-point"},{"text":"United States Navy","link":"/entities/united-states-navy"},{"text":"United States Navy","link":"/entities/us-navy"},{"text":"United States Northern Command","link":"/entities/united-states-northern-command"},{"text":"United States Postal Service","link":"/entities/united-states-postal-service"},{"text":"United States Secret Service","link":"/entities/united-states-secret-service"},{"text":"United States Secret Service","link":"/entities/us-secret-service"},{"text":"United States Senate","link":"/entities/united-states-senate"},{"text":"United States Senate","link":"/entities/us-senate"},{"text":"United States Southern Command","link":"/entities/united-states-southern-command"},{"text":"United States Space Command","link":"/entities/united-states-space-command"},{"text":"United States Space Force","link":"/entities/united-states-space-force"},{"text":"United States Special Operations Command","link":"/entities/united-states-special-operations-command"},{"text":"United Torah Judaism","link":"/entities/united-torah-judaism"},{"text":"UnitedHealthcare","link":"/entities/unitedhealthcare"},{"text":"Universal Meditech Inc.","link":"/entities/universal-meditech"},{"text":"University of California, Los Angeles (UCLA)","link":"/entities/ucla"},{"text":"University of Delaware","link":"/entities/university-of-delaware"},{"text":"University of Florida","link":"/entities/university-of-florida"},{"text":"University of Nevada, Las Vegas","link":"/entities/university-of-nevada-las-vegas"},{"text":"University of Pennsylvania","link":"/entities/university-of-pennsylvania"},{"text":"Unjected","link":"/entities/unjected"},{"text":"Upside Foods","link":"/entities/upside-foods"},{"text":"Uralvagonzavod","link":"/entities/uralvagonzavod"},{"text":"Uranium One","link":"/entities/uranium-one"},{"text":"UrAsia Energy","link":"/entities/urasia-energy"},{"text":"Uri Berliner","link":"/entities/uri-berliner"},{"text":"Ursula von der Leyen","link":"/entities/ursula-von-der-leyen"},{"text":"US Africa Command","link":"/entities/us-africa-command"},{"text":"US Americas Command","link":"/entities/us-americas-command"},{"text":"US Court of Appeals for the Eighth Circuit","link":"/entities/us-court-of-appeals-for-the-eighth-circuit"},{"text":"US Court of Appeals for the Federal Circuit","link":"/entities/us-court-of-appeals-for-the-federal-circuit"},{"text":"US Court of Appeals for the Fifth Circuit","link":"/entities/fifth-circuit-court-of-appeals"},{"text":"US Court of Appeals for the Fifth Circuit","link":"/entities/us-court-of-appeals-for-the-fifth-circuit"},{"text":"US Court of Appeals for the Ninth Circuit","link":"/entities/us-court-of-appeals-for-the-ninth-circuit"},{"text":"US Embassy in Caracas","link":"/entities/us-embassy-in-caracas"},{"text":"US Embassy in Moscow","link":"/entities/us-embassy-in-moscow"},{"text":"US Fifth Fleet","link":"/entities/us-fifth-fleet"},{"text":"US Forces Korea","link":"/entities/us-forces-korea"},{"text":"US Freedom Flyers","link":"/entities/us-freedom-flyers"},{"text":"US International Command","link":"/entities/us-international-command"},{"text":"US Marshals Service","link":"/entities/us-marshals-service"},{"text":"US Naval Academy","link":"/entities/us-naval-academy"},{"text":"US Southern Command","link":"/entities/us-southern-command"},{"text":"US Steel","link":"/entities/us-steel"},{"text":"US Virgin Islands","link":"/entities/us-virgin-islands"},{"text":"USA Rare Earth","link":"/entities/usa-rare-earth"},{"text":"USAID","link":"/entities/usaid"},{"text":"USCIS","link":"/entities/uscis"},{"text":"USEIP (United States Election Integrity Plan)","link":"/entities/useip"},{"text":"USNI News","link":"/entities/usni-news"},{"text":"USPS Board of Governors","link":"/entities/usps-board-of-governors"},{"text":"USPS Office of Inspector General","link":"/entities/usps-office-of-inspector-general"},{"text":"USS Dwight D. Eisenhower Carrier Strike Group","link":"/entities/uss-dwight-d-eisenhower-carrier-strike-group"},{"text":"USS Gerald R. Ford","link":"/entities/uss-gerald-r-ford"},{"text":"USS Wasp","link":"/entities/uss-wasp"},{"text":"Utah Department of Public Safety","link":"/entities/utah-department-of-public-safety"},{"text":"Utah Republican Party","link":"/entities/utah-republican-party"},{"text":"Utah Valley University","link":"/entities/utah-valley-university"},{"text":"Uvira","link":"/entities/uvira"},{"text":"Uyghurs","link":"/entities/uyghurs"},{"text":"Uzbekistan","link":"/entities/uzbekistan"},{"text":"Vaccine Integrity Project","link":"/entities/vaccine-integrity-project"},{"text":"Vaccines and Related Biological Products Advisory Committee","link":"/entities/vaccines-and-related-biological-products-advisory-committee"},{"text":"Václav Havel","link":"/entities/vaclav-havel"},{"text":"Vadym Pojarskyi","link":"/entities/vadym-pojarskyi"},{"text":"Vadym Pozharskyi","link":"/entities/vadym-pozharskyi"},{"text":"Vadym Skibitsky","link":"/entities/vadym-skibitsky"},{"text":"Valerie Biden","link":"/entities/valerie-biden"},{"text":"Valerie Jarrett","link":"/entities/valerie-jarrett"},{"text":"Valerii Zaluzhnyi","link":"/entities/valerii-zaluzhnyi"},{"text":"Valery Gerasimov","link":"/entities/valery-gerasimov"},{"text":"Valery Solovey","link":"/entities/valery-solovey"},{"text":"Vance Boelter","link":"/entities/vance-boelter"},{"text":"Vandenberg Space Force Base","link":"/entities/vandenberg-space-force-base"},{"text":"Vanessa Guillén","link":"/entities/vanessa-guillen"},{"text":"Vanity Fair","link":"/entities/vanity-fair"},{"text":"Variety","link":"/entities/variety"},{"text":"Vasily Nebenzya","link":"/entities/vasily-nebenzya"},{"text":"Vassily Nebenzia","link":"/entities/vassily-nebenzia"},{"text":"Vasyl Malyuk","link":"/entities/vasyl-malyuk"},{"text":"Vatican","link":"/entities/vatican"},{"text":"Vedant Patel","link":"/entities/vedant-patel"},{"text":"Vem Miller","link":"/entities/vem-miller"},{"text":"Venezuela","link":"/entities/venezuela"},{"text":"Ventura County Sheriff's Office","link":"/entities/ventura-county-sheriffs-office"},{"text":"Věra Jourová","link":"/entities/vera-jourova"},{"text":"Verify the Vote","link":"/entities/verify-the-vote"},{"text":"Verizon","link":"/entities/verizon"},{"text":"Verkhovna Rada","link":"/entities/verkhovna-rada"},{"text":"Vermont","link":"/entities/vermont"},{"text":"Vermont Supreme Court","link":"/entities/vermont-supreme-court"},{"text":"Veterans Today","link":"/entities/veterans-today"},{"text":"Viasat","link":"/entities/viasat"},{"text":"Vice Media","link":"/entities/vice-media"},{"text":"Vickrum Singh Digwa","link":"/entities/vickrum-singh-digwa"},{"text":"Vicky Fogg","link":"/entities/vicky-fogg"},{"text":"Victor Davis Hanson","link":"/entities/victor-davis-hanson"},{"text":"Victoria Alonso","link":"/entities/victoria-alonso"},{"text":"Victoria Nuland","link":"/entities/victoria-nuland"},{"text":"Victoria Spartz","link":"/entities/victoria-spartz"},{"text":"Vietnam","link":"/entities/vietnam"},{"text":"Vigilant News","link":"/entities/vigilant-news"},{"text":"Vijay Gandhi","link":"/entities/vijay-gandhi"},{"text":"Vijay Prashad","link":"/entities/vijay-prashad"},{"text":"Viktor Orbán","link":"/entities/viktor-orban"},{"text":"Viktor Pinchuk","link":"/entities/viktor-pinchuk"},{"text":"Viktor Shokin","link":"/entities/viktor-shokin"},{"text":"Viktor Vekselberg","link":"/entities/viktor-vekselberg"},{"text":"Viktor Yanukovych","link":"/entities/viktor-yanukovych"},{"text":"Vince Fong","link":"/entities/vince-fong"},{"text":"Vince McMahon","link":"/entities/vince-mcmahon"},{"text":"Vincent Bolloré","link":"/entities/vincent-bollore"},{"text":"Vincent Munster","link":"/entities/vincent-munster"},{"text":"Virginia General Assembly","link":"/entities/virginia-general-assembly"},{"text":"Virginia Giuffre","link":"/entities/virginia-giuffre"},{"text":"Virginia Roberts Giuffre","link":"/entities/virginia-roberts-giuffre"},{"text":"Virginia Supreme Court","link":"/entities/virginia-supreme-court"},{"text":"Visa","link":"/entities/visa"},{"text":"Visa Inc.","link":"/entities/visa-inc"},{"text":"Vitali Klitschko","link":"/entities/vitali-klitschko"},{"text":"Vitol","link":"/entities/vitol"},{"text":"Vivek Ramaswamy","link":"/entities/vivek-ramaswamy"},{"text":"Vivian Motzfeldt","link":"/entities/vivian-motzfeldt"},{"text":"Vladimir Kolokoltsev","link":"/entities/vladimir-kolokoltsev"},{"text":"Vladimir Lenin","link":"/entities/vladimir-lenin"},{"text":"Vladimir Putin","link":"/entities/vladimir-putin"},{"text":"Vladimir Saldo","link":"/entities/vladimir-saldo"},{"text":"Vladimir Voronchenko","link":"/entities/vladimir-voronchenko"},{"text":"Voice of America","link":"/entities/voice-of-america"},{"text":"Voices of Israel","link":"/entities/voices-of-israel"},{"text":"Volant Media","link":"/entities/volant-media"},{"text":"Volodymyr Kudrytskyi","link":"/entities/volodymyr-kudrytskyi"},{"text":"Volodymyr Zelensky","link":"/entities/volodymyr-zelensky"},{"text":"Vote from Abroad","link":"/entities/vote-from-abroad"},{"text":"VOZ News","link":"/entities/voz-news"},{"text":"VS Tankers FZE","link":"/entities/vs-tankers-fze"},{"text":"Vuhledar","link":"/entities/vuhledar"},{"text":"Vyacheslav Volodin","link":"/entities/vyacheslav-volodin"},{"text":"W. Neil Eggleston","link":"/entities/w-neil-eggleston"},{"text":"Wael Jalaidan","link":"/entities/wael-jalaidan"},{"text":"Wagner Group","link":"/entities/wagner-group"},{"text":"Walid Al-Kheraiji","link":"/entities/walid-al-kheraiji"},{"text":"Walid bin Attash","link":"/entities/walid-bin-attash"},{"text":"Wall Street Journal","link":"/entities/wall-street-journal"},{"text":"Wall Street Silver","link":"/entities/wall-street-silver"},{"text":"Wally Adeyemo","link":"/entities/wally-adeyemo"},{"text":"Walmart","link":"/entities/walmart"},{"text":"Walt Nauta","link":"/entities/walt-nauta"},{"text":"Walter Reed National Military Medical Center","link":"/entities/walter-reed-national-military-medical-center"},{"text":"Walther Funk","link":"/entities/walther-funk"},{"text":"Wang Wenbin","link":"/entities/wang-wenbin"},{"text":"Wang Xiaohong","link":"/entities/wang-xiaohong"},{"text":"Wang Yi","link":"/entities/wang-yi"},{"text":"War Room","link":"/entities/war-room"},{"text":"WarHamster","link":"/entities/warhamster"},{"text":"Warner Bros. Discovery","link":"/entities/warner-bros-discovery"},{"text":"Warren Commission","link":"/entities/warren-commission"},{"text":"Washington Capitals","link":"/entities/washington-capitals"},{"text":"Washington Post Guild","link":"/entities/washington-post-guild"},{"text":"Washington State University","link":"/entities/washington-state-university"},{"text":"Washington University Transgender Center","link":"/entities/washington-university-transgender-center"},{"text":"Waverly Crenshaw","link":"/entities/waverly-crenshaw"},{"text":"Wayne Gretzky","link":"/entities/wayne-gretzky"},{"text":"Weaponization Working Group","link":"/entities/weaponization-working-group"},{"text":"WeAreRise","link":"/entities/wearerise"},{"text":"Wendy's","link":"/entities/wendys"},{"text":"Wernher von Braun","link":"/entities/wernher-von-braun"},{"text":"Wes Moore","link":"/entities/wes-moore"},{"text":"Wesley Clark","link":"/entities/wesley-clark"},{"text":"Wesley Hunt","link":"/entities/wesley-hunt"},{"text":"West Virginia Republican Party","link":"/entities/west-virginia-republican-party"},{"text":"Western Alliance Bancorporation","link":"/entities/western-alliance-bancorporation"},{"text":"Western Sahara","link":"/entities/western-sahara"},{"text":"What We Missed with Chris Paul","link":"/entities/what-we-missed-with-chris-paul"},{"text":"Wheel of Fortune","link":"/entities/wheel-of-fortune"},{"text":"White Coat Waste Project","link":"/entities/white-coat-waste-project"},{"text":"White House Correspondents' Association","link":"/entities/white-house-correspondents-association"},{"text":"White House Environmental Justice Advisory Council","link":"/entities/white-house-environmental-justice-advisory-council"},{"text":"Whitney Tilson","link":"/entities/whitney-tilson"},{"text":"Wiesław Kukuła","link":"/entities/wieslaw-kukula"},{"text":"WikiLeaks","link":"/entities/wikileaks"},{"text":"Wilhelmina Lancaster","link":"/entities/wilhelmina-lancaster"},{"text":"Will Scharf","link":"/entities/will-scharf"},{"text":"William Alberque","link":"/entities/william-alberque"},{"text":"William Alsup","link":"/entities/william-alsup"},{"text":"William Barber II","link":"/entities/william-barber-ii"},{"text":"William Burns","link":"/entities/william-burns"},{"text":"William Cohen","link":"/entities/william-cohen"},{"text":"William Gilpin","link":"/entities/william-gilpin"},{"text":"William Henry Harrison","link":"/entities/william-henry-harrison"},{"text":"William Johnson","link":"/entities/william-johnson"},{"text":"William Knox D'Arcy","link":"/entities/william-knox-darcy"},{"text":"William Kristol","link":"/entities/william-kristol"},{"text":"William McFarland","link":"/entities/william-mcfarland"},{"text":"William McKinley","link":"/entities/william-mckinley"},{"text":"William Penn","link":"/entities/william-penn"},{"text":"William Pitt the Elder","link":"/entities/william-pitt-the-elder"},{"text":"William Pulte","link":"/entities/william-pulte"},{"text":"William Sessions","link":"/entities/william-sessions"},{"text":"William Temple Franklin","link":"/entities/william-temple-franklin"},{"text":"William Webster","link":"/entities/william-webster"},{"text":"Willie Brown","link":"/entities/willie-brown"},{"text":"Willie Nelson","link":"/entities/willie-nelson"},{"text":"Willow Wind Goods","link":"/entities/willow-wind-goods"},{"text":"Windsor Castle","link":"/entities/windsor-castle"},{"text":"Winged Hussars","link":"/entities/winged-hussars"},{"text":"WinRed","link":"/entities/winred"},{"text":"Winsome Earle-Sears","link":"/entities/winsome-earle-sears"},{"text":"Winston Churchill","link":"/entities/winston-churchill"},{"text":"Wintermute","link":"/entities/wintermute"},{"text":"Wired","link":"/entities/wired"},{"text":"Wisconsin Elections Commission","link":"/entities/wisconsin-elections-commission"},{"text":"Wissam al-Tawil","link":"/entities/wissam-al-tawil"},{"text":"Within Our Lifetime","link":"/entities/within-our-lifetime"},{"text":"Woke Societies","link":"/entities/woke-societies"},{"text":"Woodrow Wilson","link":"/entities/woodrow-wilson"},{"text":"Wopke Hoekstra","link":"/entities/wopke-hoekstra"},{"text":"World Bank","link":"/entities/world-bank"},{"text":"World Central Kitchen","link":"/entities/world-central-kitchen"},{"text":"World Curling","link":"/entities/world-curling"},{"text":"World Economic Forum","link":"/entities/world-economic-forum"},{"text":"World Federation of Advertisers","link":"/entities/world-federation-of-advertisers"},{"text":"World Federation of Trade Unions","link":"/entities/world-federation-of-trade-unions"},{"text":"World Gold Council","link":"/entities/world-gold-council"},{"text":"World Government Summit","link":"/entities/world-government-summit"},{"text":"World Health Organization","link":"/entities/world-health-organization"},{"text":"World Jewish Congress","link":"/entities/world-jewish-congress"},{"text":"World Liberty Financial","link":"/entities/world-liberty-financial"},{"text":"World Professional Association for Transgender Health (WPATH)","link":"/entities/wpath"},{"text":"World Trade Organization","link":"/entities/world-trade-organization"},{"text":"World Wrestling Entertainment","link":"/entities/world-wrestling-entertainment"},{"text":"World Zionist Congress","link":"/entities/world-zionist-congress"},{"text":"World Zionist Organization","link":"/entities/world-zionist-organization"},{"text":"Worldcoin","link":"/entities/worldcoin"},{"text":"Writers Guild of America (WGA)","link":"/entities/writers-guild-of-america"},{"text":"Wuhan Institute of Virology","link":"/entities/wuhan-institute-of-virology"},{"text":"Wuhan Lab","link":"/entities/wuhan-lab"},{"text":"Wyoming House of Representatives","link":"/entities/wyoming-house-of-representatives"},{"text":"X","link":"/entities/x-corp"},{"text":"X (formerly Twitter)","link":"/entities/x-platform"},{"text":"X (Twitter)","link":"/entities/x-twitter"},{"text":"xAI","link":"/entities/xai"},{"text":"Xavier Becerra","link":"/entities/xavier-becerra"},{"text":"Xi Jinping","link":"/entities/xi-jinping"},{"text":"Xiangguo Qiu","link":"/entities/xiangguo-qiu"},{"text":"Xinhua News Agency","link":"/entities/xinhua-news-agency"},{"text":"Xinjiang","link":"/entities/xinjiang"},{"text":"Xóchitl Gálvez","link":"/entities/xochitl-galvez"},{"text":"Yaakov M. Roth","link":"/entities/yaakov-m-roth"},{"text":"Yad Vashem","link":"/entities/yad-vashem"},{"text":"Yahya Sarea","link":"/entities/yahya-sarea"},{"text":"Yahya Sinwar","link":"/entities/yahya-sinwar"},{"text":"Yair Lapid","link":"/entities/yair-lapid"},{"text":"Yair Netanyahu","link":"/entities/yair-netanyahu"},{"text":"Yale University","link":"/entities/yale-university"},{"text":"Yariv Levin","link":"/entities/yariv-levin"},{"text":"Yaroslav Hunka","link":"/entities/yaroslav-hunka"},{"text":"Yasin Akgul","link":"/entities/yasin-akgul"},{"text":"Yasser Arafat","link":"/entities/yasser-arafat"},{"text":"Yechiel Leiter","link":"/entities/yechiel-leiter"},{"text":"Yemen","link":"/entities/yemen"},{"text":"Yemi Mobolade","link":"/entities/yemi-mobolade"},{"text":"Yesh Atid","link":"/entities/yesh-atid"},{"text":"Yesha Council","link":"/entities/yesha-council"},{"text":"Yevgen Korniychuk","link":"/entities/yevgen-korniychuk"},{"text":"Yevgeny Prigozhin","link":"/entities/yevgeny-prigozhin"},{"text":"Yisrael BaAliyah","link":"/entities/yisrael-baaliyah"},{"text":"Yitzchak Ginsburgh","link":"/entities/yitzchak-ginsburgh"},{"text":"Yitzhak Goldknopf","link":"/entities/yitzhak-goldknopf"},{"text":"Yitzhak Kroizer","link":"/entities/yitzhak-kroizer"},{"text":"Yitzhak Rabin","link":"/entities/yitzhak-rabin"},{"text":"Yitzhak Shamir","link":"/entities/yitzhak-shamir"},{"text":"Yoav Gallant","link":"/entities/yoav-gallant"},{"text":"Yoav Kisch","link":"/entities/yoav-kisch"},{"text":"Yoon Suk Yeol","link":"/entities/yoon-suk-yeol"},{"text":"Yosef Mizrachi","link":"/entities/yosef-mizrachi"},{"text":"Yossi Cohen","link":"/entities/yossi-cohen"},{"text":"Young Republican National Federation","link":"/entities/young-republican-national-federation"},{"text":"Young, Gifted & Green","link":"/entities/young-gifted-and-green"},{"text":"Youssef Al Otaiba","link":"/entities/youssef-al-otaiba"},{"text":"YouTube","link":"/entities/youtube"},{"text":"Yukos Oil","link":"/entities/yukos"},{"text":"Yulia Navalnaya","link":"/entities/yulia-navalnaya"},{"text":"Yulia Svyrydenko","link":"/entities/yulia-svyrydenko"},{"text":"Yuliya Mendel","link":"/entities/yuliya-mendel"},{"text":"Yuri Bezmenov","link":"/entities/yuri-bezmenov"},{"text":"Yuri Ushakov","link":"/entities/yuri-ushakov"},{"text":"Yury Pivovarov","link":"/entities/yury-pivovarov"},{"text":"Yury Ushakov","link":"/entities/yury-ushakov"},{"text":"Yuval Noah Harari","link":"/entities/yuval-noah-harari"},{"text":"Yvonne Gonzalez Rogers","link":"/entities/yvonne-gonzalez-rogers"},{"text":"Zabihullah Mujahid","link":"/entities/zabihullah-mujahid"},{"text":"Zachary Charles Newell","link":"/entities/zachary-charles-newell"},{"text":"Zachary Taylor","link":"/entities/zachary-taylor"},{"text":"Zagorsk Optical-Mechanical Plant","link":"/entities/zagorsk-optical-mechanical-plant"},{"text":"zak paine","link":"/entities/zak-paine"},{"text":"Zambia","link":"/entities/zambia"},{"text":"Zamir Kabulov","link":"/entities/zamir-kabulov"},{"text":"Zapata Offshore","link":"/entities/zapata-offshore"},{"text":"Zaporizhzhia Nuclear Power Plant","link":"/entities/zaporizhzhia-nuclear-power-plant"},{"text":"Zaporozhye Nuclear Power Plant","link":"/entities/zaporozhye-nuclear-power-plant"},{"text":"Zbigniew Brzezinski","link":"/entities/zbigniew-brzezinski"},{"text":"Ze'ev Elkin","link":"/entities/ze-ev-elkin"},{"text":"Ze'ev Jabotinsky","link":"/entities/zeev-jabotinsky"},{"text":"Zeagold Foods","link":"/entities/zeagold-foods"},{"text":"Zeit Online","link":"/entities/zeit-online"},{"text":"Zeke Enriquez","link":"/entities/zeke-enriquez"},{"text":"ZeroHedge","link":"/entities/zerohedge"},{"text":"Zhang Youxia","link":"/entities/zhang-youxia"},{"text":"Zhaoyan Wang","link":"/entities/zhaoyan-wang"},{"text":"Zhipu AI","link":"/entities/zhipu-ai"},{"text":"Zhong Nanshan","link":"/entities/zhong-nanshan"},{"text":"Zhong Shaojun","link":"/entities/zhong-shaojun"},{"text":"Ziad Nasreddine","link":"/entities/ziad-nasreddine"},{"text":"Zimbabwe","link":"/entities/zimbabwe"},{"text":"Zohran Mamdani","link":"/entities/zohran-mamdani"},{"text":"Zooey Zephyr","link":"/entities/zooey-zephyr"},{"text":"Zoox","link":"/entities/zoox"},{"text":"Zubayar Al-Bakoush","link":"/entities/zubayar-al-bakoush"},{"text":"Zuzana Čaputová","link":"/entities/zuzana-caputova"}]},{"text":"Concepts","collapsible":true,"collapsed":false,"items":[{"text":"123 Agreement (US–Saudi Civil Nuclear Pact)","link":"/concepts/123-agreement"},{"text":"15-Minute Cities","link":"/concepts/15-minute-cities"},{"text":"1953 Iranian Coup","link":"/concepts/1953-iranian-coup"},{"text":"1964 Brazilian Coup d'État","link":"/concepts/brazilian-coup-1964"},{"text":"1973 Chilean Coup","link":"/concepts/chilean-coup-1973"},{"text":"1992 Los Angeles Riots","link":"/concepts/la-riots-1992"},{"text":"1998 Gallup Poll on Predictions for 2025","link":"/concepts/1998-gallup-poll-on-predictions-for-2025"},{"text":"2017 Intelligence Assessment on Russian Interference","link":"/concepts/2017-intelligence-assessment-on-russian-interference"},{"text":"2017 Intelligence Community Assessment","link":"/concepts/intelligence-community-assessment"},{"text":"2017 Qatar Diplomatic Crisis","link":"/concepts/qatar-diplomatic-crisis-2017"},{"text":"2020 Election Fraud Claims","link":"/concepts/2020-election-fraud-claims"},{"text":"2021 DOJ School Board Memo","link":"/concepts/doj-school-board-memo-2021"},{"text":"2022 Arizona General Election","link":"/concepts/2022-arizona-general-election"},{"text":"2022 Australian Cardiac Death Surge","link":"/concepts/2022-australian-cardiac-death-surge"},{"text":"2022 Midterm Elections","link":"/concepts/2022-midterm-elections"},{"text":"2023 $100 Billion Supplemental Foreign Aid Request","link":"/concepts/2023-supplemental-foreign-aid-request"},{"text":"2023 Biden Visit to Israel","link":"/concepts/2023-biden-visit-to-israel"},{"text":"2023 BRICS Johannesburg Summit","link":"/concepts/2023-brics-johannesburg-summit"},{"text":"2023 Cannon Building Fire Alarm Incident","link":"/concepts/2023-cannon-building-fire-alarm-incident"},{"text":"2023 Car Dealer Letter on EV Mandates","link":"/concepts/2023-car-dealer-letter-on-ev-mandates"},{"text":"2023 CDC Youth Risk Behavior Survey Findings","link":"/concepts/2023-cdc-youth-risk-behavior-survey-findings"},{"text":"2023 China Respiratory Illness Outbreak","link":"/concepts/2023-china-respiratory-illness-outbreak"},{"text":"2023 CNN Trump New Hampshire Town Hall","link":"/concepts/2023-cnn-trump-new-hampshire-town-hall"},{"text":"2023 COVID-19 Vaccine Market Collapse","link":"/concepts/2023-covid-19-vaccine-market-collapse"},{"text":"2023 Debt Ceiling Agreement","link":"/concepts/debt-ceiling-agreement-2023"},{"text":"2023 Defense Department Email Server Exposure","link":"/concepts/2023-defense-department-email-server-exposure"},{"text":"2023 Dublin Riots","link":"/concepts/2023-dublin-riots"},{"text":"2023 Dutch General Election","link":"/concepts/2023-dutch-general-election"},{"text":"2023 F-35B Disappearance in South Carolina","link":"/concepts/2023-f-35b-disappearance-in-south-carolina"},{"text":"2023 FDA Authorization of Updated COVID-19 Vaccines","link":"/concepts/2023-fda-authorization-of-updated-covid-19-vaccines"},{"text":"2023 Gabon Coup","link":"/concepts/2023-gabon-coup"},{"text":"2023 Gasoline Price Surge","link":"/concepts/2023-gasoline-price-surge"},{"text":"2023 Hamas Delegation Visit to Moscow","link":"/concepts/2023-hamas-delegation-visit-to-moscow"},{"text":"2023 Hollywood Labor Strikes","link":"/concepts/2023-hollywood-labor-strikes"},{"text":"2023 House Resolution Condemning College Presidents' Response to Antisemitism","link":"/concepts/2023-house-resolution-condemning-college-presidents-response-to-antisemitism"},{"text":"2023 Israel–Hamas Hostage Exchange","link":"/concepts/2023-israel-hamas-hostage-exchange"},{"text":"2023 Jeddah Peace Summit","link":"/concepts/2023-jeddah-peace-summit"},{"text":"2023 Kremlin Drone Attack","link":"/concepts/2023-kremlin-drone-attack"},{"text":"2023 Louisiana gubernatorial election","link":"/concepts/2023-louisiana-gubernatorial-election"},{"text":"2023 Missing Ammonium Nitrate Shipment","link":"/concepts/2023-missing-ammonium-nitrate-shipment"},{"text":"2023 Mortgage Rate Surge","link":"/concepts/2023-mortgage-rate-surge"},{"text":"2023 Nationwide Emergency Alert Test","link":"/concepts/2023-nationwide-emergency-alert-test"},{"text":"2023 New Zealand general election","link":"/concepts/2023-new-zealand-general-election"},{"text":"2023 Niger Coup","link":"/concepts/2023-niger-coup"},{"text":"2023 North American Aerial Object Shootdowns","link":"/concepts/2023-north-american-aerial-object-shootdowns"},{"text":"2023 NPR Layoffs","link":"/concepts/2023-npr-layoffs"},{"text":"2023 Oath Keepers Seditious Conspiracy Convictions","link":"/concepts/2023-oath-keepers-seditious-conspiracy-convictions"},{"text":"2023 OPEC+ Production Cut","link":"/concepts/2023-opec-production-cut"},{"text":"2023 OpenAI Leadership Crisis","link":"/concepts/2023-openai-leadership-crisis"},{"text":"2023 Pro-Palestinian Capitol Occupation","link":"/concepts/2023-pro-palestinian-capitol-occupation"},{"text":"2023 Rainbow Bridge Crash","link":"/concepts/2023-rainbow-bridge-crash"},{"text":"2023 Riyadh Ukraine Peace Plan Meeting","link":"/concepts/2023-riyadh-ukraine-peace-plan-meeting"},{"text":"2023 Russia-Africa Summit","link":"/concepts/russia-africa-summit-2023"},{"text":"2023 Russian Nationwide Nuclear Drill","link":"/concepts/2023-russian-nationwide-nuclear-drill"},{"text":"2023 Russian-Chinese Naval Patrol off Alaska","link":"/concepts/2023-russian-chinese-naval-patrol-off-alaska"},{"text":"2023 Silicon Valley Bank Run","link":"/concepts/2023-silicon-valley-bank-run"},{"text":"2023 Speaker of the House Election","link":"/concepts/2023-speaker-of-the-house-election"},{"text":"2023 Starr County Border Wall Waiver","link":"/concepts/2023-starr-county-border-wall-waiver"},{"text":"2023 State of the Union Address","link":"/concepts/2023-state-of-the-union"},{"text":"2023 Trump Classified Documents Indictment","link":"/concepts/2023-trump-classified-documents-indictment"},{"text":"2023 U.S. Strikes on Iranian-Linked Targets in Syria","link":"/concepts/2023-us-strikes-on-iranian-linked-targets-in-syria"},{"text":"2023 Ukrainian Corruption Scandal","link":"/concepts/2023-ukrainian-corruption-scandal"},{"text":"2023 Ukrainian Counteroffensive","link":"/concepts/2023-ukrainian-counteroffensive"},{"text":"2023 United Auto Workers Strike","link":"/concepts/2023-united-auto-workers-strike"},{"text":"2023 United States Credit Rating Downgrade","link":"/concepts/2023-united-states-credit-rating-downgrade"},{"text":"2023 US Middle East Military Build-Up","link":"/concepts/2023-us-middle-east-military-build-up"},{"text":"2023 US Senate Delegation Visit to Israel","link":"/concepts/2023-us-senate-delegation-visit-to-israel"},{"text":"2023 US Veto of UN Security Council Gaza Resolution","link":"/concepts/2023-us-veto-of-un-security-council-gaza-resolution"},{"text":"2023 Waco Rally","link":"/concepts/2023-waco-rally"},{"text":"2023 White House Ukraine Aid Messaging Shift","link":"/concepts/2023-white-house-ukraine-aid-messaging-shift"},{"text":"2023 Xi Jinping State Visit to Russia","link":"/concepts/2023-xi-jinping-state-visit-to-russia"},{"text":"2024 Austrian Parliamentary Election","link":"/concepts/2024-austrian-parliamentary-election"},{"text":"2024 Biden Mass Clemency Action","link":"/concepts/2024-biden-mass-clemency-action"},{"text":"2024 Boeing Leadership Overhaul","link":"/concepts/2024-boeing-leadership-overhaul"},{"text":"2024 Bolivian Coup Attempt","link":"/concepts/2024-bolivian-coup-attempt"},{"text":"2024 BRICS Kazan Summit","link":"/concepts/2024-brics-kazan-summit"},{"text":"2024 Caesarea Drone Strike on Netanyahu's Residence","link":"/concepts/2024-caesarea-drone-strike-on-netanyahus-residence"},{"text":"2024 Canada Border Security Funding Package","link":"/concepts/2024-canada-border-security-funding-package"},{"text":"2024 CBS 60 Minutes Harris Interview Edit","link":"/concepts/2024-cbs-60-minutes-harris-interview-edit"},{"text":"2024 Chinese Sanctions on US Defense Companies","link":"/concepts/2024-chinese-sanctions-on-us-defense-companies"},{"text":"2024 Columbia University Protests","link":"/concepts/2024-columbia-university-protests"},{"text":"2024 CrowdStrike Global Outage","link":"/concepts/2024-crowdstrike-global-outage"},{"text":"2024 Democratic National Convention","link":"/concepts/2024-democratic-national-convention"},{"text":"2024 Democratic Primary Calendar Change","link":"/concepts/2024-democratic-primary-calendar-change"},{"text":"2024 DR Congo Coup Attempt","link":"/concepts/2024-dr-congo-coup-attempt"},{"text":"2024 Dueling Border Visits","link":"/concepts/2024-dueling-border-visits"},{"text":"2024 Early Voting","link":"/concepts/2024-early-voting"},{"text":"2024 East and Gulf Coast Dockworker Strike","link":"/concepts/2024-east-and-gulf-coast-dockworker-strike"},{"text":"2024 Election Certification","link":"/concepts/2024-election-certification"},{"text":"2024 European Farmer Protests","link":"/concepts/2024-european-farmer-protests"},{"text":"2024 European Parliament Elections","link":"/concepts/2024-european-parliament-elections"},{"text":"2024 EV Emissions Standards Proposal","link":"/concepts/2024-ev-emissions-standards-proposal"},{"text":"2024 Federal Race and Ethnicity Standards Revision","link":"/concepts/2024-federal-race-and-ethnicity-standards-revision"},{"text":"2024 French Legislative Elections","link":"/concepts/2024-french-legislative-elections"},{"text":"2024 French No-Confidence Vote","link":"/concepts/2024-french-no-confidence-vote"},{"text":"2024 Fulton County Cyberattack","link":"/concepts/2024-fulton-county-cyberattack"},{"text":"2024 G7 Summit in Italy","link":"/concepts/2024-g7-summit-in-italy"},{"text":"2024 German Government Collapse","link":"/concepts/2024-german-government-collapse"},{"text":"2024 Harris Vice-Presidential Selection","link":"/concepts/2024-harris-vice-presidential-selection"},{"text":"2024 HTS Aleppo offensive","link":"/concepts/2024-hts-aleppo-offensive"},{"text":"2024 Human Bird Flu Cases in the US and Australia","link":"/concepts/2024-human-bird-flu-cases-in-the-us-and-australia"},{"text":"2024 Iowa Caucus","link":"/concepts/2024-iowa-caucus"},{"text":"2024 Iran-Pakistan Cross-Border Strikes","link":"/concepts/2024-iran-pakistan-cross-border-strikes"},{"text":"2024 Israel–Hezbollah Escalation","link":"/concepts/2024-israel-hezbollah-escalation"},{"text":"2024 Israel–Iran Intelligence Leak","link":"/concepts/2024-israel-iran-intelligence-leak"},{"text":"2024 Israeli Ground Invasion of Lebanon","link":"/concepts/2024-israeli-ground-invasion-of-lebanon"},{"text":"2024 Israeli Strike on the Iranian Embassy in Damascus","link":"/concepts/2024-israeli-strike-on-iranian-embassy-in-damascus"},{"text":"2024 Izmir Assault on US Soldiers","link":"/concepts/2024-izmir-assault-on-us-soldiers"},{"text":"2024 Kazan Drone Attack","link":"/concepts/2024-kazan-drone-attack"},{"text":"2024 Kerman Bombings","link":"/concepts/2024-kerman-bombings"},{"text":"2024 Kharkiv Offensive","link":"/concepts/2024-kharkiv-offensive"},{"text":"2024 Lebanon Ceasefire","link":"/concepts/2024-lebanon-ceasefire"},{"text":"2024 Lebanon Pager and Walkie-Talkie Attacks","link":"/concepts/2024-lebanon-pager-attacks"},{"text":"2024 Met Gala Pro-Palestine Protest","link":"/concepts/2024-met-gala-pro-palestine-protest"},{"text":"2024 Mexican General Election","link":"/concepts/2024-mexican-general-election"},{"text":"2024 Michigan Republican Primary","link":"/concepts/2024-michigan-republican-primary"},{"text":"2024 Mpox Global Health Emergency","link":"/concepts/2024-mpox-global-health-emergency"},{"text":"2024 Nashville, Illinois Dam Failure","link":"/concepts/2024-nashville-illinois-dam-failure"},{"text":"2024 NATO Washington Summit","link":"/concepts/2024-nato-washington-summit"},{"text":"2024 Nevada Republican Caucuses","link":"/concepts/2024-nevada-republican-caucuses"},{"text":"2024 New Hampshire Democratic Primary","link":"/concepts/2024-new-hampshire-democratic-primary"},{"text":"2024 New Hampshire Republican Primary","link":"/concepts/2024-new-hampshire-republican-primary"},{"text":"2024 Northeast Drone Sightings","link":"/concepts/2024-northeast-drone-sightings"},{"text":"2024 ODNI Election Security Update","link":"/concepts/2024-odni-election-security-update"},{"text":"2024 Pacific Northwest Ballot Box Fires","link":"/concepts/2024-pacific-northwest-ballot-box-fires"},{"text":"2024 Paris Summer Olympics","link":"/concepts/2024-paris-summer-olympics"},{"text":"2024 Pennsylvania Mail Ballot Returns","link":"/concepts/2024-pennsylvania-mail-ballot-returns"},{"text":"2024 Pennsylvania Senate Race","link":"/concepts/2024-pennsylvania-senate-race"},{"text":"2024 Political Absurdity Retrospective","link":"/concepts/2024-political-absurdity-retrospective"},{"text":"2024 Presidential Debate","link":"/concepts/2024-presidential-debate"},{"text":"2024 Pro-Palestinian Campus Protests","link":"/concepts/2024-pro-palestinian-campus-protests"},{"text":"2024 Putin Visit to North Korea and Vietnam","link":"/concepts/2024-putin-visit-to-north-korea-and-vietnam"},{"text":"2024 Republican Election Litigation Campaign","link":"/concepts/2024-republican-election-litigation-campaign"},{"text":"2024 Republican National Convention","link":"/concepts/2024-republican-national-convention"},{"text":"2024 Republican National Security Endorsement of Kamala Harris","link":"/concepts/2024-republican-national-security-endorsement-of-harris"},{"text":"2024 Russian Naval Deployment to Cuba","link":"/concepts/2024-russian-naval-deployment-to-cuba"},{"text":"2024 Russian Presidential Election","link":"/concepts/2024-russian-presidential-election"},{"text":"2024 Saxony State Election","link":"/concepts/2024-saxony-state-election"},{"text":"2024 Senate Border-Ukraine Deal","link":"/concepts/2024-senate-border-ukraine-deal"},{"text":"2024 Sevastopol Missile Attack","link":"/concepts/2024-sevastopol-missile-attack"},{"text":"2024 Slovak Assassination Attempt","link":"/concepts/2024-slovak-assassination-attempt"},{"text":"2024 South African General Election","link":"/concepts/2024-south-african-general-election"},{"text":"2024 South Carolina Republican Primary","link":"/concepts/2024-south-carolina-republican-primary"},{"text":"2024 South Korea Martial Law Declaration","link":"/concepts/2024-south-korea-martial-law-declaration"},{"text":"2024 St. Petersburg International Economic Forum","link":"/concepts/2024-st-petersburg-international-economic-forum"},{"text":"2024 State Capitol Bomb Threat Hoaxes","link":"/concepts/2024-state-capitol-bomb-threat-hoaxes"},{"text":"2024 State Department Report on Israel's Conduct in Gaza","link":"/concepts/2024-state-department-report-on-israels-conduct-in-gaza"},{"text":"2024 Swiss Peace Summit on Ukraine","link":"/concepts/2024-swiss-peace-summit-on-ukraine"},{"text":"2024 TikTok Lawsuit Against the Divest-or-Ban Law","link":"/concepts/2024-tiktok-lawsuit-against-the-divest-or-ban-law"},{"text":"2024 Trump Bronx Rally","link":"/concepts/2024-trump-bronx-rally"},{"text":"2024 Trump Mar-a-Lago Bitcoin Mining Meeting","link":"/concepts/2024-trump-mar-a-lago-bitcoin-mining-meeting"},{"text":"2024 Trump McDonald's Visit","link":"/concepts/2024-trump-mcdonalds-visit"},{"text":"2024 Trump presidential transition","link":"/concepts/2024-trump-presidential-transition"},{"text":"2024 Trump Return to Capitol Hill","link":"/concepts/2024-trump-return-to-capitol-hill"},{"text":"2024 Trump Tariff Threat","link":"/concepts/2024-trump-tariff-threat"},{"text":"2024 Trump Vice Presidential Selection","link":"/concepts/2024-trump-vice-presidential-selection"},{"text":"2024 Trump–Harris Presidential Debate","link":"/concepts/2024-trump-harris-presidential-debate"},{"text":"2024 Trump–Zelensky Meeting","link":"/concepts/2024-trump-zelensky-trump-tower-meeting"},{"text":"2024 U.S. Retaliatory Strikes on Iranian-Linked Targets in Iraq and Syria","link":"/concepts/2024-us-retaliatory-strikes-on-iranian-linked-targets"},{"text":"2024 United States General Election","link":"/concepts/2024-us-general-election"},{"text":"2024 US Virgin Islands Republican Caucuses","link":"/concepts/2024-us-virgin-islands-republican-caucuses"},{"text":"2024 US Weapons Holdup to Israel","link":"/concepts/2024-us-weapons-holdup-to-israel"},{"text":"2024 US-Mexico Migration Negotiations","link":"/concepts/2024-us-mexico-migration-negotiations"},{"text":"2024 US–Russia Prisoner Swap","link":"/concepts/2024-us-russia-prisoner-swap"},{"text":"2024 Utah High-Altitude Balloon Intercept","link":"/concepts/2024-utah-high-altitude-balloon-intercept"},{"text":"2024 Venezuelan Presidential Election","link":"/concepts/2024-venezuelan-presidential-election"},{"text":"2024 Vice Presidential Debate","link":"/concepts/2024-vice-presidential-debate"},{"text":"2024 Wall Street Trump Trade","link":"/concepts/2024-wall-street-trump-trade"},{"text":"2024 Zelensky Assassination Plot","link":"/concepts/2024-zelensky-assassination-plot"},{"text":"2025 4 Nations Face-Off","link":"/concepts/4-nations-face-off"},{"text":"2025 AfD Candidate Deaths","link":"/concepts/2025-afd-candidate-deaths"},{"text":"2025 Army 250th Birthday Military Parade","link":"/concepts/2025-army-250th-birthday-military-parade"},{"text":"2025 Beijing Humanoid Robot Half-Marathon","link":"/concepts/2025-beijing-humanoid-robot-half-marathon"},{"text":"2025 Boeing Defense Workers Strike","link":"/concepts/2025-boeing-defense-workers-strike"},{"text":"2025 Burkina Faso Coup Plot","link":"/concepts/2025-burkina-faso-coup-plot"},{"text":"2025 California Redistricting Counterpunch","link":"/concepts/2025-california-redistricting-counterpunch"},{"text":"2025 Canadian Federal Election","link":"/concepts/2025-canadian-federal-election"},{"text":"2025 Caribbean Naval Deployment","link":"/concepts/2025-caribbean-naval-deployment"},{"text":"2025 CDC Mass Layoffs","link":"/concepts/2025-cdc-mass-layoffs"},{"text":"2025 Central Asia Summit","link":"/concepts/central-asia-summit-2025"},{"text":"2025 Colombia Deportation Tariff Standoff","link":"/concepts/2025-colombia-deportation-tariff-standoff"},{"text":"2025 DC Federal Law Enforcement Surge","link":"/concepts/2025-dc-federal-law-enforcement-surge"},{"text":"2025 Emergency Spending Impoundment Dispute","link":"/concepts/2025-emergency-spending-impoundment-dispute"},{"text":"2025 Executive Orders on Flying Cars and Supersonic Flight","link":"/concepts/2025-executive-orders-on-flying-cars-and-supersonic-flight"},{"text":"2025 FDA Synthetic Food Dye Phase-Out","link":"/concepts/2025-fda-synthetic-food-dye-phase-out"},{"text":"2025 Federal Health Agency Communications Pause","link":"/concepts/2025-federal-health-agency-communications-pause"},{"text":"2025 Federal Restrictions on Pediatric Gender-Affirming Care","link":"/concepts/2025-federal-restrictions-on-pediatric-gender-affirming-care"},{"text":"2025 Federal Spending Freeze","link":"/concepts/2025-federal-spending-freeze"},{"text":"2025 Federal Workforce Buyout Offer","link":"/concepts/2025-federal-workforce-buyout-offer"},{"text":"2025 Fronton Border Patrol Shooting Exchange","link":"/concepts/2025-fronton-border-patrol-shooting-exchange"},{"text":"2025 G7 Summit","link":"/concepts/2025-g7-summit"},{"text":"2025 Gaza City Capture Decision","link":"/concepts/2025-gaza-city-capture-decision"},{"text":"2025 Global Health Funding Decline","link":"/concepts/2025-global-health-funding-decline"},{"text":"2025 Iberian Peninsula Power Outage","link":"/concepts/2025-iberian-peninsula-power-outage"},{"text":"2025 ICE Enforcement Surge","link":"/concepts/2025-ice-enforcement-surge"},{"text":"2025 INSA Survey on Freedom of Expression in Germany","link":"/concepts/2025-insa-survey-on-freedom-of-expression-in-germany"},{"text":"2025 Iran Protests","link":"/concepts/2025-iran-protests"},{"text":"2025 Israeli Plan to Seize Gaza","link":"/concepts/2025-israeli-plan-to-seize-gaza"},{"text":"2025 Israeli Strike on Doha","link":"/concepts/2025-israeli-strike-on-doha"},{"text":"2025 Kamchatka Earthquake and Pacific Tsunami","link":"/concepts/2025-kamchatka-earthquake-and-tsunami"},{"text":"2025 Kashmir Terrorist Attack","link":"/concepts/2025-kashmir-terrorist-attack"},{"text":"2025 Knesset Address by Donald Trump","link":"/concepts/2025-knesset-address-by-donald-trump"},{"text":"2025 Lebanese Presidential Election","link":"/concepts/2025-lebanese-presidential-election"},{"text":"2025 Los Angeles Immigration Enforcement Protests","link":"/concepts/2025-los-angeles-immigration-enforcement-protests"},{"text":"2025 Los Angeles Immigration Raids and National Guard Deployment","link":"/concepts/2025-los-angeles-immigration-raids-and-national-guard-deployment"},{"text":"2025 Met Gala","link":"/concepts/2025-met-gala"},{"text":"2025 Mid-Decade Census Order","link":"/concepts/2025-mid-decade-census-order"},{"text":"2025 MiG-31 Hijacking Plot","link":"/concepts/2025-mig-31-hijacking-plot"},{"text":"2025 Military Directive Against Drug Cartels","link":"/concepts/2025-military-directive-against-drug-cartels"},{"text":"2025 Minneapolis Church Shooting","link":"/concepts/2025-minneapolis-church-shooting"},{"text":"2025 Minnesota Lawmaker Shootings","link":"/concepts/2025-minnesota-lawmaker-shootings"},{"text":"2025 Myanmar Earthquake","link":"/concepts/2025-myanmar-earthquake"},{"text":"2025 National Health Care Fraud Takedown","link":"/concepts/2025-national-health-care-fraud-takedown"},{"text":"2025 Nepal Protests","link":"/concepts/2025-nepal-protests"},{"text":"2025 New York City Mayoral Election","link":"/concepts/new-york-city-mayoral-election-2025"},{"text":"2025 Nobel Peace Prize","link":"/concepts/2025-nobel-peace-prize"},{"text":"2025 Nobel Prize in Physics","link":"/concepts/2025-nobel-prize-in-physics"},{"text":"2025 North Carolina Redistricting","link":"/concepts/2025-north-carolina-redistricting"},{"text":"2025 Off-Year Elections","link":"/concepts/2025-off-year-elections"},{"text":"2025 Oman Nuclear Talks","link":"/concepts/2025-oman-nuclear-talks"},{"text":"2025 Overlooked Humanitarian Crises Report","link":"/concepts/2025-overlooked-humanitarian-crises-report"},{"text":"2025 Patriot Interceptor Transfer from Israel to Ukraine","link":"/concepts/2025-patriot-interceptor-transfer-from-israel-to-ukraine"},{"text":"2025 Pentagon Leak Investigation","link":"/concepts/2025-pentagon-leak-investigation"},{"text":"2025 Poland Organ Trafficking Arrest","link":"/concepts/2025-poland-organ-trafficking-arrest"},{"text":"2025 Red Sea Submarine Cable Cuts","link":"/concepts/red-sea-cable-cuts"},{"text":"2025 Rescissions Package","link":"/concepts/2025-rescissions-package"},{"text":"2025 Resumption of US Nuclear Weapons Testing","link":"/concepts/2025-resumption-of-us-nuclear-weapons-testing"},{"text":"2025 Romanian Presidential Election Ban","link":"/concepts/2025-romanian-presidential-election-ban"},{"text":"2025 Russian Victory Day Ceasefire Offer","link":"/concepts/2025-russian-victory-day-ceasefire-offer"},{"text":"2025 Silver Short Squeeze","link":"/concepts/2025-silver-short-squeeze"},{"text":"2025 South Carolina $30 Million Money Laundering Case","link":"/concepts/2025-south-carolina-money-laundering-case"},{"text":"2025 Speaker of the House Election","link":"/concepts/2025-speaker-of-the-house-election"},{"text":"2025 State Department Reorganization","link":"/concepts/2025-state-department-reorganization"},{"text":"2025 Steel and Aluminum Tariffs","link":"/concepts/2025-steel-and-aluminum-tariffs"},{"text":"2025 Straw Donor and Foreign Contributions Investigation Memorandum","link":"/concepts/2025-straw-donor-and-foreign-contributions-investigation-memorandum"},{"text":"2025 Supreme Court Ruling on Alien Enemies Act Deportations","link":"/concepts/2025-supreme-court-ruling-on-alien-enemies-act-deportations"},{"text":"2025 Tarasin Landslide","link":"/concepts/2025-tarasin-landslide"},{"text":"2025 Texas House Speaker Battle","link":"/concepts/2025-texas-house-speaker-battle"},{"text":"2025 Trudeau Resignation","link":"/concepts/2025-trudeau-resignation"},{"text":"2025 Trump Address to a Joint Session of Congress","link":"/concepts/2025-trump-address-to-joint-session-of-congress"},{"text":"2025 Trump Apple Tariff Threat","link":"/concepts/2025-trump-apple-tariff-threat"},{"text":"2025 Trump Elections Executive Order","link":"/concepts/2025-trump-elections-executive-order"},{"text":"2025 Trump–Putin Alaska Summit","link":"/concepts/2025-trump-putin-alaska-summit"},{"text":"2025 Trump–Putin Budapest Summit Announcement","link":"/concepts/2025-trump-putin-budapest-summit-announcement"},{"text":"2025 Turkish C-130 Crash in Georgia","link":"/concepts/2025-turkish-c-130-crash-in-georgia"},{"text":"2025 Ukrainian Drone Attack on Putin's Residence","link":"/concepts/2025-ukrainian-drone-attack-on-putins-residence"},{"text":"2025 Ukrainian Drone Campaign Against Russia","link":"/concepts/2025-ukrainian-drone-campaign-against-russia"},{"text":"2025 Ukrainian Local Election Cancellation","link":"/concepts/2025-ukrainian-local-election-cancellation"},{"text":"2025 UN Two-State Solution Conference","link":"/concepts/2025-un-two-state-solution-conference"},{"text":"2025 US Strike on Venezuelan Coastal Facility","link":"/concepts/2025-us-strike-on-venezuelan-coastal-facility"},{"text":"2025 US Submarine Repositioning","link":"/concepts/2025-us-submarine-repositioning"},{"text":"2025 US–Canada Trade War","link":"/concepts/2025-us-canada-trade-war"},{"text":"2025 US–EU Trade Agreement","link":"/concepts/2025-us-eu-trade-agreement"},{"text":"2025 US–EU Trade Deal","link":"/concepts/2025-us-eu-trade-deal"},{"text":"2025 US–Saudi Arms Deal","link":"/concepts/2025-us-saudi-arms-deal"},{"text":"2025 US–South Korea Trade Agreement","link":"/concepts/2025-us-south-korea-trade-agreement"},{"text":"2025 USAID Contract Cancellations","link":"/concepts/2025-usaid-contract-cancellations"},{"text":"2025 Venezuela Oil Tanker Blockade","link":"/concepts/2025-venezuela-oil-tanker-blockade"},{"text":"2025 Venezuelan Municipal Elections","link":"/concepts/2025-venezuelan-municipal-elections"},{"text":"2025 Wall Street Journal Poll on Democratic Party Favorability","link":"/concepts/2025-wall-street-journal-poll-on-democratic-party-favorability"},{"text":"2025 Washington D.C. National Guard Shooting","link":"/concepts/2025-washington-dc-national-guard-shooting"},{"text":"2025 WEF Investigation into Klaus Schwab","link":"/concepts/2025-wef-investigation-into-klaus-schwab"},{"text":"2025 White House Tylenol and Autism Announcement","link":"/concepts/2025-white-house-tylenol-autism-announcement"},{"text":"2026 Ankara NATO Summit","link":"/concepts/2026-ankara-nato-summit"},{"text":"2026 Appeals Court Ruling on Trump's Election Executive Order","link":"/concepts/2026-appeals-court-ruling-on-trump-election-executive-order"},{"text":"2026 California Gubernatorial Election","link":"/concepts/2026-california-gubernatorial-election"},{"text":"2026 Chinese Military Purge","link":"/concepts/china-military-purge-2026"},{"text":"2026 Colombian Presidential Election","link":"/concepts/2026-colombian-presidential-election"},{"text":"2026 Democrat Primary Civil War","link":"/concepts/2026-democrat-primary-civil-war"},{"text":"2026 Denaturalization Campaign","link":"/concepts/2026-denaturalization-campaign"},{"text":"2026 Ebola Outbreak (Bundibugyo Strain)","link":"/concepts/2026-ebola-outbreak"},{"text":"2026 FIFA World Cup","link":"/concepts/2026-fifa-world-cup"},{"text":"2026 Fiscal Year Budget Sit-In","link":"/concepts/2026-fiscal-year-budget-sit-in"},{"text":"2026 Foreign Military Sales to Israel and Saudi Arabia","link":"/concepts/2026-foreign-military-sales-to-israel-and-saudi-arabia"},{"text":"2026 Fraud Investigation Wave","link":"/concepts/2026-fraud-investigations"},{"text":"2026 G7 Summit","link":"/concepts/2026-g7-summit"},{"text":"2026 Gasoline Price Surge","link":"/concepts/2026-gasoline-price-surge"},{"text":"2026 Global Insider Trading Prosecution","link":"/concepts/2026-global-insider-trading-prosecution"},{"text":"2026 Hungarian Parliamentary Election","link":"/concepts/2026-hungarian-parliamentary-election"},{"text":"2026 Indiana State Senate Primaries","link":"/concepts/2026-indiana-state-senate-primaries"},{"text":"2026 Iran Deal Negotiations","link":"/concepts/2026-iran-deal-negotiations"},{"text":"2026 Iran Protests and Internet Blackout","link":"/concepts/2026-iran-protests"},{"text":"2026 Israeli Elections","link":"/concepts/2026-israeli-elections"},{"text":"2026 Los Angeles Mayoral Election","link":"/concepts/2026-los-angeles-mayoral-election"},{"text":"2026 Midterm Elections","link":"/concepts/2026-midterm-elections"},{"text":"2026 National Defense Strategy","link":"/concepts/2026-national-defense-strategy"},{"text":"2026 Ohio Gubernatorial Election","link":"/concepts/2026-ohio-gubernatorial-election"},{"text":"2026 Oil Price Spike","link":"/concepts/2026-oil-price-spike"},{"text":"2026 Olympic Curling Double-Touch Controversy","link":"/concepts/2026-olympic-curling-double-touch-controversy"},{"text":"2026 Politico Stolen Election Poll","link":"/concepts/2026-politico-stolen-election-poll"},{"text":"2026 Recession Fears","link":"/concepts/2026-recession-fears"},{"text":"2026 Redistricting Battle","link":"/concepts/2026-redistricting-battle"},{"text":"2026 St. Petersburg International Economic Forum","link":"/concepts/2026-st-petersburg-international-economic-forum"},{"text":"2026 State of the Union Address","link":"/concepts/2026-state-of-the-union"},{"text":"2026 Student Immigration Walkouts","link":"/concepts/2026-student-immigration-walkouts"},{"text":"2026 Supreme Court Birthright Citizenship Ruling","link":"/concepts/2026-supreme-court-birthright-citizenship-ruling"},{"text":"2026 Texas Primary Elections","link":"/concepts/2026-texas-primary-elections"},{"text":"2026 Texas Republican Senate Primary Runoff","link":"/concepts/2026-texas-senate-primary-runoff"},{"text":"2026 Trump–Xi Beijing Summit","link":"/concepts/2026-trump-xi-beijing-summit"},{"text":"2026 Turkey-Israel Crisis","link":"/concepts/2026-turkey-israel-crisis"},{"text":"2026 US-Hosted Israel–Lebanon Talks","link":"/concepts/2026-us-hosted-israel-lebanon-talks"},{"text":"2026 US-India Tariff Agreement","link":"/concepts/2026-us-india-tariff-agreement"},{"text":"2026 US-Iran Ceasefire Collapse","link":"/concepts/2026-us-iran-ceasefire-collapse"},{"text":"2026 Venezuela Earthquakes","link":"/concepts/2026-venezuela-earthquakes"},{"text":"2026 White House Correspondents' Dinner Shooting","link":"/concepts/2026-white-house-correspondents-dinner-shooting"},{"text":"2026 Winter Olympics","link":"/concepts/2026-winter-olympics"},{"text":"2026 Winter Olympics Men's Hockey Final (USA–Canada)","link":"/concepts/2026-winter-olympics-mens-hockey-final"},{"text":"2026 Witkoff Abu Dhabi and Istanbul Talks","link":"/concepts/2026-witkoff-abu-dhabi-and-istanbul-talks"},{"text":"2026 World Baseball Classic","link":"/concepts/2026-world-baseball-classic"},{"text":"2028 Los Angeles Olympics","link":"/concepts/2028-los-angeles-olympics"},{"text":"2028 United States Presidential Election","link":"/concepts/2028-united-states-presidential-election"},{"text":"33rd Arab Summit (Bahrain, 2024)","link":"/concepts/arab-summit-2024-bahrain"},{"text":"50501 Protests","link":"/concepts/50501-protests"},{"text":"68th Annual Grammy Awards","link":"/concepts/68th-annual-grammy-awards"},{"text":"Abbey Gate Bombing","link":"/concepts/abbey-gate-bombing"},{"text":"Abraham Accords","link":"/concepts/abraham-accords"},{"text":"Accelerationism","link":"/concepts/accelerationism"},{"text":"ACE Act","link":"/concepts/ace-act"},{"text":"Adamuz Train Collision","link":"/concepts/adamuz-train-collision"},{"text":"Addressing Risks from Chris Krebs and Government Censorship","link":"/concepts/addressing-risks-from-chris-krebs-and-government-censorship"},{"text":"ADHD Medication Cascade","link":"/concepts/adhd-medication-cascade"},{"text":"Administrative Procedure Act","link":"/concepts/administrative-procedure-act"},{"text":"Adult Survivors Act","link":"/concepts/adult-survivors-act"},{"text":"Affordable Care Act","link":"/concepts/affordable-care-act"},{"text":"After School Satan Club","link":"/concepts/after-school-satan-club"},{"text":"Agenda 2030","link":"/concepts/agenda-2030"},{"text":"Agenda 47","link":"/concepts/agenda-47"},{"text":"Agreed Framework","link":"/concepts/agreed-framework"},{"text":"AI Bubble Debate","link":"/concepts/ai-bubble-debate"},{"text":"AI Data Center Compact","link":"/concepts/ai-data-center-compact"},{"text":"AI Hallucination","link":"/concepts/ai-hallucination"},{"text":"AI Pause Open Letter (2023)","link":"/concepts/ai-pause-open-letter"},{"text":"al-Ahli Baptist Hospital Explosion","link":"/concepts/al-ahli-baptist-hospital-explosion"},{"text":"Alaska-Canada Railway","link":"/concepts/alaska-canada-railway"},{"text":"Alberta Separatism","link":"/concepts/alberta-separatism"},{"text":"Albuquerque GOP Headquarters Arson","link":"/concepts/albuquerque-gop-headquarters-arson"},{"text":"Alien Disclosure Op","link":"/concepts/alien-disclosure-op"},{"text":"Alien Enemies Act","link":"/concepts/alien-enemies-act"},{"text":"Alien Tort Statute","link":"/concepts/alien-tort-statute"},{"text":"Allen Texas Mall Shooting","link":"/concepts/allen-texas-mall-shooting"},{"text":"America First Movement","link":"/concepts/america-first-movement"},{"text":"America Party","link":"/concepts/america-party"},{"text":"America's Talent Strategy","link":"/concepts/americas-talent-strategy"},{"text":"American Eagle Sydney Sweeney Ad Controversy","link":"/concepts/american-eagle-sydney-sweeney-ad-controversy"},{"text":"Americana Brands","link":"/concepts/americana-brands"},{"text":"Anderson v. Griswold","link":"/concepts/anderson-v-griswold"},{"text":"Antalya Diplomacy Forum","link":"/concepts/antalya-diplomacy-forum"},{"text":"Anti-Coercion Instrument","link":"/concepts/anti-coercion-instrument"},{"text":"Anti-Government or Anti-Authority Violent Extremism","link":"/concepts/anti-government-anti-authority-violent-extremism"},{"text":"Anti-Weaponization Fund","link":"/concepts/anti-weaponization-fund"},{"text":"Antifa Terrorist Designation","link":"/concepts/antifa-terrorist-designation"},{"text":"Antisemitism","link":"/concepts/antisemitism"},{"text":"Antisemitism Awareness Act","link":"/concepts/antisemitism-awareness-act"},{"text":"App Tracking Transparency","link":"/concepts/app-tracking-transparency"},{"text":"Apple Vision Pro","link":"/concepts/apple-vision-pro"},{"text":"April 2024 Iranian Attack on Israel","link":"/concepts/april-2024-iranian-attack-on-israel"},{"text":"Arab Alternative to Trump's Gaza Plan","link":"/concepts/arab-alternative-to-trump-gaza-plan"},{"text":"Arab Spring","link":"/concepts/arab-spring"},{"text":"Arabic Naming Conventions","link":"/concepts/arabic-naming-conventions"},{"text":"Arctic Frost","link":"/concepts/arctic-frost"},{"text":"Arctic National Wildlife Refuge","link":"/concepts/arctic-national-wildlife-refuge"},{"text":"Argentina 2025 Legislative Elections","link":"/concepts/argentina-2025-legislative-elections"},{"text":"Argentina Bailout Package (2025)","link":"/concepts/argentina-bailout-package-2025"},{"text":"Argentine Austerity Protests (December 2023)","link":"/concepts/argentine-austerity-protests-2023"},{"text":"Argentine Nuclear Plan","link":"/concepts/argentine-nuclear-plan"},{"text":"Arizona Fake Electors Case","link":"/concepts/arizona-fake-electors-case"},{"text":"Arizona Senate Bill 1695","link":"/concepts/arizona-senate-bill-1695"},{"text":"Arkansas Lithium Discovery","link":"/concepts/arkansas-lithium-discovery"},{"text":"Armed Conflict Designation Against Drug Cartels","link":"/concepts/armed-conflict-designation-against-drug-cartels"},{"text":"Arms Export Control Act","link":"/concepts/arms-export-control-act"},{"text":"Artemis II","link":"/concepts/artemis-ii"},{"text":"Article 5 (Collective Defence)","link":"/concepts/article-5"},{"text":"Article 51 of the UN Charter","link":"/concepts/article-51-of-the-un-charter"},{"text":"Artificial General Intelligence","link":"/concepts/artificial-general-intelligence"},{"text":"Artificial Intelligence","link":"/concepts/artificial-intelligence"},{"text":"Artificial Intelligence as Manipulation","link":"/concepts/artificial-intelligence-manipulation"},{"text":"Asch Conformity Experiments","link":"/concepts/asch-conformity-experiments"},{"text":"Assange Extradition Case","link":"/concepts/assange-extradition-case"},{"text":"Assassination of Charlie Kirk","link":"/concepts/assassination-of-charlie-kirk"},{"text":"Assembly Bill 2098","link":"/concepts/assembly-bill-2098"},{"text":"Assistant Attorney General for Fraud","link":"/concepts/assistant-attorney-general-for-fraud"},{"text":"Astana Accords","link":"/concepts/astana-accords"},{"text":"Astana Process","link":"/concepts/astana-process"},{"text":"ATF Stabilizing Brace Rule","link":"/concepts/stabilizing-brace-rule"},{"text":"Athanor Lodge Criminal Network Trial","link":"/concepts/athanor-lodge-criminal-network-trial"},{"text":"Atlantic Charter","link":"/concepts/atlantic-charter"},{"text":"Atomic Energy Act of 1954","link":"/concepts/atomic-energy-act-of-1954"},{"text":"Attempted Assassination of Donald Trump (2024)","link":"/concepts/attempted-assassination-of-donald-trump-2024"},{"text":"Auktionshaus Felzmann Concentration Camp Artefact Auction","link":"/concepts/felzmann-concentration-camp-auction"},{"text":"AUKUS Undersea Drone Program","link":"/concepts/aukus-undersea-drone-program"},{"text":"Automated Clearing House (ACH)","link":"/concepts/automated-clearing-house"},{"text":"Autopen Scandal","link":"/concepts/autopen-scandal"},{"text":"Azerbaijan Airlines Flight J2-8243 Crash","link":"/concepts/azerbaijan-airlines-flight-j2-8243-crash"},{"text":"BA.2.86","link":"/concepts/ba-2-86"},{"text":"Babylon (Book of Revelation)","link":"/concepts/babylon-revelation"},{"text":"Backchannel Diplomacy","link":"/concepts/backchannel-diplomacy"},{"text":"Badlands Brief","link":"/concepts/badlands-brief"},{"text":"Badlands Daily","link":"/concepts/badlands-daily"},{"text":"Badlands News Brief","link":"/concepts/badlands-news-brief"},{"text":"Ballot Harvesting","link":"/concepts/ballot-harvesting"},{"text":"Ballot-on-Demand Printers","link":"/concepts/ballot-on-demand-printers"},{"text":"Ban Congressional Stock Trading Act (S. 1879)","link":"/concepts/ban-congressional-stock-trading-act"},{"text":"Ban the Jab Resolution","link":"/concepts/ban-the-jab-resolution"},{"text":"Bandung Conference","link":"/concepts/bandung-conference"},{"text":"Bank Secrecy Act","link":"/concepts/bank-secrecy-act"},{"text":"Bankman-Fried Second Trial Dismissal","link":"/concepts/bankman-fried-second-trial-dismissal"},{"text":"Barratry","link":"/concepts/barratry"},{"text":"Battle of Bakhmut","link":"/concepts/battle-of-bakhmut"},{"text":"Battle of Gallipoli","link":"/concepts/battle-of-gallipoli"},{"text":"Battle of Quebec","link":"/concepts/battle-of-quebec"},{"text":"Battle of Vienna","link":"/concepts/battle-of-vienna"},{"text":"Bay of Pigs Invasion (Operation Zapata)","link":"/concepts/bay-of-pigs"},{"text":"BBC January 6 Footage Editing Scandal","link":"/concepts/bbc-january-6-footage-editing-scandal"},{"text":"Bedouin","link":"/concepts/bedouin"},{"text":"Beef Packer Antitrust Investigation (2026)","link":"/concepts/beef-packer-antitrust-investigation-2026"},{"text":"Behavioral Health Emergency Assistance Response Division (B-HEARD)","link":"/concepts/b-heard"},{"text":"Belfast Knife Attack and Riots","link":"/concepts/belfast-knife-attack"},{"text":"Belgium Narco-State Controversy","link":"/concepts/belgium-narco-state-controversy"},{"text":"Belgorod Attack","link":"/concepts/belgorod-attack"},{"text":"Belgorod Shelling (December 2023)","link":"/concepts/belgorod-shelling-2023"},{"text":"Belt and Road Initiative","link":"/concepts/belt-and-road-initiative"},{"text":"Benghazi Non-Disclosure Agreements","link":"/concepts/non-disclosure-agreements"},{"text":"Bering Strait Tunnel","link":"/concepts/bering-strait-tunnel"},{"text":"Biden Borrower Defense Student Debt Rule","link":"/concepts/biden-borrower-defense-student-debt-rule"},{"text":"Biden Burisma Bribery Allegation","link":"/concepts/biden-burisma-bribery-allegation"},{"text":"Biden Classified Documents Scandal","link":"/concepts/biden-classified-documents-scandal"},{"text":"Biden Crime Family","link":"/concepts/biden-crime-family"},{"text":"Biden Dictator Remark Controversy (2023)","link":"/concepts/biden-dictator-remark-controversy-2023"},{"text":"Biden Ghostwriter Tapes","link":"/concepts/biden-ghostwriter-tapes"},{"text":"Biden Impeachment Inquiry","link":"/concepts/biden-impeachment-inquiry"},{"text":"Biden LNG Export Permit Pause","link":"/concepts/biden-lng-export-permit-pause"},{"text":"Biden Offshore Drilling Ban","link":"/concepts/biden-offshore-drilling-ban"},{"text":"Biden Pseudonym Emails","link":"/concepts/biden-pseudonym-emails"},{"text":"Biden Supreme Court Reform Proposals","link":"/concepts/biden-supreme-court-reform-proposals"},{"text":"Biden Valley Forge Speech (January 2024)","link":"/concepts/biden-valley-forge-speech"},{"text":"Bidenomics","link":"/concepts/bidenomics"},{"text":"Big Pharma","link":"/concepts/big-pharma"},{"text":"Bipartisan Border Bill of 2024","link":"/concepts/bipartisan-border-bill-2024"},{"text":"Bipartisan Senate Border Security Bill (2024)","link":"/concepts/bipartisan-senate-border-security-bill-2024"},{"text":"Birthright Citizenship","link":"/concepts/birthright-citizenship"},{"text":"Bitcoin 2024 Nashville Conference","link":"/concepts/bitcoin-2024-nashville-conference"},{"text":"Bitcoin 2025 Conference","link":"/concepts/bitcoin-2025-conference"},{"text":"Bitcoin and Blockchain","link":"/concepts/bitcoin"},{"text":"Black Music Month Proclamation (2023)","link":"/concepts/black-music-month-proclamation-2023"},{"text":"Black Sea Grain Initiative","link":"/concepts/black-sea-grain-initiative"},{"text":"Black Support for Trump","link":"/concepts/black-support-for-trump"},{"text":"Black Swan Event","link":"/concepts/black-swan-event"},{"text":"Blackmail Operations","link":"/concepts/blackmail-operations"},{"text":"BlackRock Panama Canal Ports Deal","link":"/concepts/blackrock-panama-canal-ports-deal"},{"text":"Blair Doctrine","link":"/concepts/blair-doctrine"},{"text":"Blockchain","link":"/concepts/blockchain"},{"text":"Bloodbath Hoax","link":"/concepts/bloodbath-hoax"},{"text":"BlueAnon","link":"/concepts/blueanon"},{"text":"Boasberg Memorandum on D.C. Judges","link":"/concepts/boasberg-memorandum-on-dc-judges"},{"text":"Bolshevik Revolution","link":"/concepts/bolshevik-revolution"},{"text":"Bondi Beach Attack","link":"/concepts/bondi-beach-attack"},{"text":"Bondi Beach Mass Shooting","link":"/concepts/bondi-beach-mass-shooting"},{"text":"Book of Revelation","link":"/concepts/book-of-revelation"},{"text":"Born-Alive Abortion Survivors Protection Act","link":"/concepts/born-alive-abortion-survivors-protection-act"},{"text":"Boulder Terror Attack","link":"/concepts/boulder-terror-attack"},{"text":"Bread and Circus","link":"/concepts/bread-and-circus"},{"text":"Breaking History","link":"/concepts/breaking-history"},{"text":"Bretton Woods System","link":"/concepts/bretton-woods-system"},{"text":"Brexit","link":"/concepts/brexit"},{"text":"Brick Tracker","link":"/concepts/brick-tracker"},{"text":"British Columbia Drug Decriminalization Pilot","link":"/concepts/british-columbia-drug-decriminalization-pilot"},{"text":"Brown University Shooting","link":"/concepts/brown-university-shooting"},{"text":"Bud Light Boycott","link":"/concepts/bud-light-boycott"},{"text":"Budapest Memorandum","link":"/concepts/budapest-memorandum"},{"text":"Burke v. Walsh","link":"/concepts/burke-v-walsh"},{"text":"Burqa Ban","link":"/concepts/burqa-ban"},{"text":"Buy Now, Pay Later","link":"/concepts/buy-now-pay-later"},{"text":"Cabal","link":"/concepts/cabal"},{"text":"Caffeine and Cardiometabolic Health Study","link":"/concepts/caffeine-cardiometabolic-health-study"},{"text":"California Budget Deficit (2023)","link":"/concepts/california-budget-deficit-2023"},{"text":"California Dream For All","link":"/concepts/california-dream-for-all"},{"text":"California Proposition 50","link":"/concepts/california-proposition-50"},{"text":"California SB 1174","link":"/concepts/california-sb-1174"},{"text":"California Solar Geoengineering Experiment","link":"/concepts/california-solar-geoengineering-experiment"},{"text":"California v. Trump Administration (National Guard Deployment)","link":"/concepts/california-v-trump-administration-national-guard-deployment"},{"text":"Cameras in Federal Court","link":"/concepts/cameras-in-federal-court"},{"text":"Campbell v. Clinton","link":"/concepts/campbell-v-clinton"},{"text":"Canada Tariff Escalation (2026)","link":"/concepts/canada-tariff-escalation-2026"},{"text":"Canada–China Strategic Partnership (2026)","link":"/concepts/canada-china-strategic-partnership-2026"},{"text":"Canadian Capitulation","link":"/concepts/canadian-capitulation"},{"text":"Canadian Electoral Reform Push (2024)","link":"/concepts/canadian-electoral-reform-push-2024"},{"text":"Canadian Parliament Nazi Veteran Tribute","link":"/concepts/canadian-parliament-nazi-veteran-tribute"},{"text":"Canadian Wildfire Smoke Crisis (2026)","link":"/concepts/canadian-wildfire-smoke-crisis-2026"},{"text":"Cancel Culture","link":"/concepts/cancel-culture"},{"text":"Canola Oil","link":"/concepts/canola-oil"},{"text":"Canvassing","link":"/concepts/canvassing"},{"text":"Capture of Nicolás Maduro","link":"/concepts/capture-of-nicolas-maduro"},{"text":"Cardboard Ayatollah","link":"/concepts/cardboard-ayatollah"},{"text":"CARES Act","link":"/concepts/cares-act"},{"text":"Caribbean Boat Strike War Crime Allegations","link":"/concepts/caribbean-boat-strike-war-crime-allegations"},{"text":"Cartel Convergence","link":"/concepts/cartel-convergence"},{"text":"Cass Review","link":"/concepts/cass-review"},{"text":"Cayo Falcones Boat Incident","link":"/concepts/cayo-falcones-boat-incident"},{"text":"CBDC Anti-Surveillance State Act","link":"/concepts/cbdc-anti-surveillance-state-act"},{"text":"Censorship Industrial Complex","link":"/concepts/censorship-industrial-complex"},{"text":"Censorship Regime","link":"/concepts/censorship-regime"},{"text":"Central Bank Digital Currency (CBDC)","link":"/concepts/central-bank-digital-currency"},{"text":"Central Bank Gold Buying","link":"/concepts/central-bank-gold-buying"},{"text":"Central Banking","link":"/concepts/central-banking"},{"text":"Centralized Media","link":"/concepts/centralized-media"},{"text":"Cerny v. WEC","link":"/concepts/cerny-v-wec"},{"text":"Charles University Shooting","link":"/concepts/charles-university-shooting"},{"text":"Charlie Kirk Memorial","link":"/concepts/charlie-kirk-memorial"},{"text":"ChatGPT Gov","link":"/concepts/chatgpt-gov"},{"text":"Chatham House Rule","link":"/concepts/chatham-house-rule"},{"text":"Chevron Deference","link":"/concepts/chevron-deference"},{"text":"Child Trafficking","link":"/concepts/child-trafficking"},{"text":"Childhood Vaccine Exemptions","link":"/concepts/childhood-vaccine-exemptions"},{"text":"Chiles v. Colorado","link":"/concepts/chiles-v-colorado"},{"text":"Chiles v. Salazar","link":"/concepts/chiles-v-salazar"},{"text":"China AI Data Center Buildout","link":"/concepts/china-ai-data-center-buildout"},{"text":"China Rare Earth Export Restrictions (2025)","link":"/concepts/china-rare-earth-export-restrictions-2025"},{"text":"China Special Maritime Operation off Taiwan (2026)","link":"/concepts/china-special-maritime-operation-2026"},{"text":"China-Taiwan Military Pressure","link":"/concepts/china-taiwan-military-pressure"},{"text":"China–Russia Military Cooperation","link":"/concepts/china-russia-military-cooperation"},{"text":"China's EUV Lithography Program","link":"/concepts/china-euv-lithography-program"},{"text":"Chinese Spy Balloon Incident (2023)","link":"/concepts/chinese-spy-balloon-incident-2023"},{"text":"CHIPS and Science Act","link":"/concepts/chips-and-science-act"},{"text":"Chisholm v. Georgia","link":"/concepts/chisholm-v-georgia"},{"text":"CHNV Parole Program","link":"/concepts/chnv-parole-program"},{"text":"Christian Zionism","link":"/concepts/christian-zionism"},{"text":"Chronic Childhood Illness Commission","link":"/concepts/chronic-childhood-illness-commission"},{"text":"CIA COVID Discovery Team","link":"/concepts/cia-covid-discovery-team"},{"text":"CIA Headquarters Armed Man Incident (2025)","link":"/concepts/cia-headquarters-armed-man-incident-2025"},{"text":"CIA Re-entry into Venezuela (2026)","link":"/concepts/cia-re-entry-into-venezuela-2026"},{"text":"CIA REMVE Assessment on Women","link":"/concepts/cia-remve-assessment-on-women"},{"text":"CIA–Ukraine \\"Spy War\\" Disclosures (2024)","link":"/concepts/cia-ukraine-spy-war-disclosures"},{"text":"Citizen Journalism","link":"/concepts/citizen-journalism"},{"text":"Civil Cyber-Fraud Initiative","link":"/concepts/civil-cyber-fraud-initiative"},{"text":"Civil Rights Act of 1960","link":"/concepts/civil-rights-act-of-1960"},{"text":"Civilization/Stealth Jihad","link":"/concepts/civilization-stealth-jihad"},{"text":"CLAP Food Import Program","link":"/concepts/clap-food-import-program"},{"text":"Classified Documents Mishandling Across the Federal Government","link":"/concepts/classified-documents-mishandling-across-the-federal-government"},{"text":"Clean Air Act","link":"/concepts/clean-air-act"},{"text":"Climate Change Narrative","link":"/concepts/climate-change-narrative"},{"text":"Clinical Presentation and Medical Diagnosis","link":"/concepts/clinical-presentation-and-medical-diagnosis"},{"text":"Clinton Annex","link":"/concepts/clinton-annex"},{"text":"Coalition of the Willing (Ukraine)","link":"/concepts/coalition-of-the-willing"},{"text":"CODEX 9/11","link":"/concepts/codex-911"},{"text":"Coffee County Voting Systems Breach","link":"/concepts/coffee-county-voting-systems-breach"},{"text":"Coinage Act of 1873","link":"/concepts/coinage-act-of-1873"},{"text":"COINTELPRO","link":"/concepts/cointelpro"},{"text":"Collective Mind","link":"/concepts/collective-mind"},{"text":"Collective Situational Awareness","link":"/concepts/collective-situational-awareness"},{"text":"Collective West","link":"/concepts/collective-west"},{"text":"Collectorate","link":"/concepts/collectorate"},{"text":"Colonial Borders in Africa","link":"/concepts/colonial-borders-in-africa"},{"text":"Colonial Scrip","link":"/concepts/colonial-scrip"},{"text":"Color Revolution","link":"/concepts/color-revolution"},{"text":"Colorado Ballot Disqualification Case","link":"/concepts/colorado-ballot-disqualification-case"},{"text":"Colorado Capitol Trump Portrait Dispute","link":"/concepts/colorado-capitol-trump-portrait-dispute"},{"text":"Colorado Springs Nightclub Raid","link":"/concepts/colorado-springs-nightclub-raid"},{"text":"Comey 8647 Indictment","link":"/concepts/comey-8647-indictment"},{"text":"Commercial Driver's Licenses for Immigrants","link":"/concepts/commercial-drivers-licenses-for-immigrants"},{"text":"Commercial Real Estate Crisis","link":"/concepts/commercial-real-estate-crisis"},{"text":"Communism","link":"/concepts/communism"},{"text":"Communist Takeover of America","link":"/concepts/communist-takeover-of-america"},{"text":"Commutation of George Santos's Sentence","link":"/concepts/commutation-of-george-santoss-sentence"},{"text":"Compliance Ladder","link":"/concepts/compliance-ladder"},{"text":"Comprehensive Plan to End the Gaza Conflict","link":"/concepts/comprehensive-plan-to-end-the-gaza-conflict"},{"text":"Comprehensive Strategic Partnership Agreement (Russia–North Korea)","link":"/concepts/comprehensive-strategic-partnership-agreement"},{"text":"Comprehensive Strategic Partnership Treaty (Russia–Iran)","link":"/concepts/comprehensive-strategic-partnership-treaty"},{"text":"Con Inc.","link":"/concepts/con-inc"},{"text":"Conditional Acceptance","link":"/concepts/conditional-acceptance"},{"text":"Congress of Vienna","link":"/concepts/congress-of-vienna"},{"text":"Congressional Paralysis","link":"/concepts/congressional-paralysis"},{"text":"Console Wars Declaration","link":"/concepts/console-wars-declaration"},{"text":"Constitution of Medina","link":"/concepts/constitution-of-medina"},{"text":"Contempt of Congress","link":"/concepts/contempt-of-congress"},{"text":"Continuing Resolution","link":"/concepts/continuing-resolution"},{"text":"Continuity of Government","link":"/concepts/continuity-of-government"},{"text":"Convention of States","link":"/concepts/convention-of-states"},{"text":"Conversion Therapy Bans","link":"/concepts/conversion-therapy-bans"},{"text":"Coomer v. Lindell","link":"/concepts/coomer-v-lindell"},{"text":"Cooperative Threat Reduction Program","link":"/concepts/cooperative-threat-reduction-program"},{"text":"COP28","link":"/concepts/cop28"},{"text":"COP30","link":"/concepts/cop30"},{"text":"Core 5","link":"/concepts/core-5"},{"text":"Corporate Average Fuel Economy Standards","link":"/concepts/corporate-average-fuel-economy-standards"},{"text":"Corporatocracy","link":"/concepts/corporatocracy"},{"text":"Countering Foreign Propaganda and Disinformation Act of 2016","link":"/concepts/countering-foreign-propaganda-and-disinformation-act-of-2016"},{"text":"Cousin Marriage","link":"/concepts/cousin-marriage"},{"text":"Coutts 4","link":"/concepts/coutts-four"},{"text":"COVID Mandates","link":"/concepts/covid-mandates"},{"text":"COVID-19 Emergency Declarations Termination","link":"/concepts/covid-19-emergency-declarations-termination"},{"text":"COVID-19 Lockdowns","link":"/concepts/covid-19-lockdowns"},{"text":"COVID-19 Narrative","link":"/concepts/covid-19-narrative"},{"text":"COVID-19 Vaccine-Associated Psychosis","link":"/concepts/covid-19-vaccine-associated-psychosis"},{"text":"COVID-19 Vaccines","link":"/concepts/covid-19-vaccines"},{"text":"Credit Suisse Collapse Inquiry","link":"/concepts/credit-suisse-collapse-inquiry"},{"text":"Crescent Dunes","link":"/concepts/crescent-dunes"},{"text":"Crime Bill of 1994","link":"/concepts/crime-bill-1994"},{"text":"Crimean Bridge Attack (July 2023)","link":"/concepts/crimean-bridge-attack"},{"text":"Criminal Justice (Incitement to Violence or Hatred) Bill","link":"/concepts/criminal-justice-incitement-to-violence-or-hatred-bill"},{"text":"Crisis Pregnancy Centers","link":"/concepts/crisis-pregnancy-centers"},{"text":"CRISPR","link":"/concepts/crispr"},{"text":"Critical Race Theory","link":"/concepts/critical-race-theory"},{"text":"Crocus City Hall Attack","link":"/concepts/crocus-city-hall-attack"},{"text":"Crossfire Hurricane","link":"/concepts/crossfire-hurricane"},{"text":"CTIL Files","link":"/concepts/ctil-files"},{"text":"Cuba Regime Change Planning 2026","link":"/concepts/cuba-regime-change-planning-2026"},{"text":"Culture War","link":"/concepts/culture-war"},{"text":"Curling v. Raffensperger","link":"/concepts/curling-v-raffensperger"},{"text":"Cybercab","link":"/concepts/cybercab"},{"text":"CYBERCOM–DARPA Memorandum on Cyberwarfare Research","link":"/concepts/cybercom-darpa-memorandum-on-cyberwarfare-research"},{"text":"D.C. Noncitizen Voting Law","link":"/concepts/dc-noncitizen-voting-law"},{"text":"Dark Enlightenment","link":"/concepts/dark-enlightenment"},{"text":"Dark Fleet Tanker Interdictions","link":"/concepts/dark-fleet-tanker-interdictions"},{"text":"David's Corridor","link":"/concepts/davids-corridor"},{"text":"Davos 2026","link":"/concepts/davos-2026"},{"text":"Daylight Saving Time","link":"/concepts/daylight-saving-time"},{"text":"De Minimis Exemption","link":"/concepts/de-minimis-exemption"},{"text":"De-Dollarization","link":"/concepts/de-dollarization"},{"text":"De-Extinction","link":"/concepts/de-extinction"},{"text":"Debel Statue Desecration","link":"/concepts/debel-statue-desecration"},{"text":"Debt Ceiling","link":"/concepts/debt-ceiling"},{"text":"Debt Ceiling X-Date","link":"/concepts/debt-ceiling-x-date"},{"text":"Debt Slavery","link":"/concepts/debt-slavery"},{"text":"December 2024 Continuing Resolution Fight","link":"/concepts/2024-december-continuing-resolution-fight"},{"text":"December 2024 Dow Losing Streak","link":"/concepts/2024-december-dow-losing-streak"},{"text":"Decentralized Media","link":"/concepts/decentralized-media"},{"text":"Declaration of Independence","link":"/concepts/declaration-of-independence"},{"text":"Declaration of Military Accountability","link":"/concepts/declaration-of-military-accountability"},{"text":"Deep State","link":"/concepts/deep-state"},{"text":"Deep State Archipelago","link":"/concepts/deep-state-archipelago"},{"text":"Deep State Burn Cards","link":"/concepts/deep-state-burn-cards"},{"text":"Deep State Cabal","link":"/concepts/deep-state-cabal"},{"text":"Deepfake","link":"/concepts/deepfake"},{"text":"Deepfake Jeffries Sombrero Video","link":"/concepts/deepfake-jeffries-sombrero-video"},{"text":"Defense Contractor Buyback Restrictions","link":"/concepts/defense-contractor-buyback-restrictions"},{"text":"Defense Production Act","link":"/concepts/defense-production-act"},{"text":"Democracy Promotion","link":"/concepts/democracy-promotion"},{"text":"Democratic Party Decline Among Young Voters","link":"/concepts/democratic-party-decline-among-young-voters"},{"text":"Denver Executive Order 152","link":"/concepts/denver-executive-order-152"},{"text":"Department of State v. AIDS Vaccine Advocacy Coalition","link":"/concepts/department-of-state-v-aids-vaccine-advocacy-coalition"},{"text":"Deportation of US Citizen Children (2025)","link":"/concepts/deportation-of-us-citizen-children-2025"},{"text":"Dereliction of Duty","link":"/concepts/dereliction-of-duty"},{"text":"Detroit Ballot Demand (2026)","link":"/concepts/detroit-ballot-demand-2026"},{"text":"devolution","link":"/concepts/devolution"},{"text":"Devolution Power Hour","link":"/concepts/devolution-power-hour"},{"text":"DHS Directive on Deporting Noncitizen Voters","link":"/concepts/dhs-directive-on-deporting-noncitizen-voters"},{"text":"DHS Election Grant Conditions","link":"/concepts/dhs-election-grant-conditions"},{"text":"DHS Israel Boycott Certification Requirement","link":"/concepts/dhs-israel-boycott-certification-requirement"},{"text":"DHS Targeted Violence and Terrorism Prevention Grants","link":"/concepts/dhs-targeted-violence-and-terrorism-prevention-grants"},{"text":"Diamond Alternative Energy v. Environmental Protection Agency","link":"/concepts/diamond-alternative-energy-v-environmental-protection-agency"},{"text":"Digital God","link":"/concepts/digital-god"},{"text":"Digital Services Act","link":"/concepts/digital-services-act"},{"text":"Dirty Break","link":"/concepts/dirty-break"},{"text":"Disaster Opportunism","link":"/concepts/disaster-opportunism"},{"text":"Disbarment of Rudy Giuliani in Washington, D.C.","link":"/concepts/disbarment-of-rudy-giuliani-in-washington-dc"},{"text":"Discharge Petition","link":"/concepts/discharge-petition"},{"text":"Disclosure Defense Theory","link":"/concepts/disclosure-defense-theory"},{"text":"Discombobulator","link":"/concepts/discombobulator"},{"text":"Discord Classified Documents Leak","link":"/concepts/discord-classified-documents-leak"},{"text":"Disinformation","link":"/concepts/disinformation"},{"text":"Disinformation Governance Board","link":"/concepts/disinformation-governance-board"},{"text":"Disney v. DeSantis","link":"/concepts/disney-v-desantis"},{"text":"Dissolution of the Corporation for Public Broadcasting","link":"/concepts/dissolution-of-the-corporation-for-public-broadcasting"},{"text":"Distraction Operations","link":"/concepts/distraction-operations"},{"text":"Diversity, Equity, and Inclusion","link":"/concepts/diversity-equity-and-inclusion"},{"text":"Dobbs Draft Opinion Leak Investigation","link":"/concepts/dobbs-draft-opinion-leak-investigation"},{"text":"Dobbs v. Jackson Women's Health Organization","link":"/concepts/dobbs-v-jackson-womens-health-organization"},{"text":"DoDI 8025.01 (DoD Internet Content Blocking)","link":"/concepts/dodi-8025-01"},{"text":"DOGE Dividend","link":"/concepts/doge-dividend"},{"text":"DOGEQUEST","link":"/concepts/dogequest"},{"text":"Doha Agreement (2020)","link":"/concepts/doha-agreement"},{"text":"DOJ Lawsuit Against Minnesota Sanctuary Policies","link":"/concepts/doj-lawsuit-against-minnesota-sanctuary-policies"},{"text":"DOJ Lawsuit Against the District of Columbia Over Firearm Laws","link":"/concepts/doj-lawsuit-against-dc-firearm-laws"},{"text":"DOJ Lawsuit Against the Maryland Federal Bench","link":"/concepts/doj-lawsuit-against-the-maryland-federal-bench"},{"text":"DOJ Requests for State Voter Lists","link":"/concepts/doj-requests-for-state-voter-lists"},{"text":"DOJ Settlement Slush Fund","link":"/concepts/doj-slush-fund"},{"text":"DOJ Strike Force on ODNI Disclosures","link":"/concepts/doj-odni-strike-force"},{"text":"DOJ Voter Registration List Lawsuits","link":"/concepts/doj-voter-registration-list-lawsuits"},{"text":"DOJ-FBI Epstein Memo","link":"/concepts/doj-fbi-epstein-memo"},{"text":"DOJ–Pentagon Media Leaks Task Force","link":"/concepts/doj-pentagon-media-leaks-task-force"},{"text":"Dojo Supercomputer","link":"/concepts/dojo-supercomputer"},{"text":"Domestic Terrorism","link":"/concepts/domestic-terrorism"},{"text":"Dominion v. Fox News Defamation Lawsuit","link":"/concepts/dominion-v-fox-news-defamation-lawsuit"},{"text":"Donald J. Trump Presidential Library","link":"/concepts/donald-j-trump-presidential-library"},{"text":"Donroe Doctrine","link":"/concepts/donroe-doctrine"},{"text":"Door 3 Ballots","link":"/concepts/door-3-ballots"},{"text":"DR Congo Peace Agreement (2025)","link":"/concepts/dr-congo-peace-agreement-2025"},{"text":"Draft Wayne Gretzky Movement","link":"/concepts/draft-wayne-gretzky-movement"},{"text":"DRC–Rwanda Declaration of Principles","link":"/concepts/drc-rwanda-declaration-of-principles"},{"text":"Dronegate","link":"/concepts/dronegate"},{"text":"Dual-Economic Circulation","link":"/concepts/dual-circulation"},{"text":"Durham Annex","link":"/concepts/durham-annex"},{"text":"Durham House Judiciary Testimony (2023)","link":"/concepts/durham-house-judiciary-testimony-2023"},{"text":"Durham Report","link":"/concepts/durham-report"},{"text":"E. Jean Carroll Defamation Judgment","link":"/concepts/e-jean-carroll-defamation-judgment"},{"text":"East Palestine Train Derailment","link":"/concepts/east-palestine-train-derailment"},{"text":"Eastern Sentry","link":"/concepts/eastern-sentry"},{"text":"Eco-Colonialism","link":"/concepts/eco-colonialism"},{"text":"Eco-Terrorism","link":"/concepts/eco-terrorism"},{"text":"Edible Insects","link":"/concepts/edible-insects"},{"text":"Egypt–Israel Peace Treaty","link":"/concepts/egypt-israel-peace-treaty"},{"text":"Egypt's Gaza Reconstruction Plan","link":"/concepts/egypt-gaza-reconstruction-plan"},{"text":"Egyptian Ceasefire Proposal (2023)","link":"/concepts/egyptian-ceasefire-proposal-2023"},{"text":"El Paso Border Riot Case","link":"/concepts/el-paso-border-riot-case"},{"text":"El Paso Cartel Drone Incursion (2026)","link":"/concepts/el-paso-cartel-drone-incursion-2026"},{"text":"Election Denial","link":"/concepts/election-denial"},{"text":"Election Fraud RICO","link":"/concepts/election-fraud-rico"},{"text":"Election Integrity Army","link":"/concepts/election-integrity-army"},{"text":"Election Reform Campaign","link":"/concepts/election-reform-campaign"},{"text":"Electoral Confidence Preservation Act","link":"/concepts/electoral-confidence-preservation-act"},{"text":"Electoral Count Act","link":"/concepts/electoral-count-act"},{"text":"Electoral Count Reform and Presidential Transition Improvement Act","link":"/concepts/electoral-count-reform-and-presidential-transition-improvement-act"},{"text":"Elliott-Larsen Civil Rights Act","link":"/concepts/elliott-larsen-civil-rights-act"},{"text":"Elon Musk Tesla Pay Package Vote (2024)","link":"/concepts/elon-musk-tesla-pay-package-vote"},{"text":"Elon Musk–Trump X Interview","link":"/concepts/elon-musk-trump-x-interview"},{"text":"Emergencies Act","link":"/concepts/emergencies-act"},{"text":"Emirate of Diriyah","link":"/concepts/emirate-of-diriyah"},{"text":"Endangerment Finding","link":"/concepts/endangerment-finding"},{"text":"Engels Fuel Depot Strike","link":"/concepts/engels-fuel-depot-strike"},{"text":"Ensuring Citizenship Verification and Integrity in Federal Elections","link":"/concepts/ensuring-citizenship-verification-and-integrity-in-federal-elections"},{"text":"EPA Electric Vehicle Mandate","link":"/concepts/epa-electric-vehicle-mandate"},{"text":"Epstein and Maxwell Grand Jury Transcript Unsealing","link":"/concepts/epstein-maxwell-grand-jury-transcript-unsealing"},{"text":"Epstein Court Document Unsealing (2023)","link":"/concepts/epstein-court-document-unsealing"},{"text":"Epstein Files","link":"/concepts/epstein-files"},{"text":"Epstein Files Transparency Act","link":"/concepts/epstein-files-transparency-act"},{"text":"Epstein Library","link":"/concepts/epstein-library"},{"text":"Epstein Narrative","link":"/concepts/epstein-narrative"},{"text":"Epstein-Russian Agent Narrative","link":"/concepts/epstein-russian-agent-narrative"},{"text":"Eric Adams Federal Corruption Case","link":"/concepts/eric-adams-federal-corruption-case"},{"text":"Eric Swalwell Sexual Misconduct Scandal (2026)","link":"/concepts/eric-swalwell-sexual-misconduct-scandal"},{"text":"Erosion of the Postwar International Order","link":"/concepts/erosion-of-the-postwar-international-order"},{"text":"Escalate to De-escalate","link":"/concepts/escalate-to-de-escalate"},{"text":"ESG (Environmental, Social and Governance) Scores","link":"/concepts/esg"},{"text":"Espionage Act","link":"/concepts/espionage-act"},{"text":"ESSER Funds","link":"/concepts/esser-funds"},{"text":"Esther Project","link":"/concepts/esther-project"},{"text":"Ethnic Unity Law","link":"/concepts/ethnic-unity-law"},{"text":"EU €50 Billion Ukraine Facility","link":"/concepts/eu-50-billion-ukraine-facility"},{"text":"EU 2040 Climate Proposal","link":"/concepts/eu-2040-climate-proposal"},{"text":"EU Code of Practice on Disinformation","link":"/concepts/eu-code-of-practice-on-disinformation"},{"text":"EU Russia Sanctions Resistance (2026)","link":"/concepts/eu-russia-sanctions-resistance-2026"},{"text":"Euromaidan","link":"/concepts/euromaidan"},{"text":"European Defense Union","link":"/concepts/european-defense-union"},{"text":"European Democracy Shield","link":"/concepts/european-democracy-shield"},{"text":"European Fuel Supply Crisis (2026)","link":"/concepts/european-fuel-supply-crisis-2026"},{"text":"Event 201","link":"/concepts/event-201"},{"text":"Everything App","link":"/concepts/everything-app"},{"text":"Executive Order 13818","link":"/concepts/executive-order-13818"},{"text":"Executive Order 13848","link":"/concepts/executive-order-13848"},{"text":"Executive Order 13850","link":"/concepts/executive-order-13850"},{"text":"Executive Order 13884","link":"/concepts/executive-order-13884"},{"text":"Executive Order 13961 (Federal Mission Resilience)","link":"/concepts/executive-order-13961"},{"text":"Executive Order 14188","link":"/concepts/executive-order-14188"},{"text":"Executive Order 14248","link":"/concepts/executive-order-14248"},{"text":"Executive Order 14251","link":"/concepts/executive-order-14251"},{"text":"Executive Order 14282","link":"/concepts/executive-order-14282"},{"text":"Executive Order 14339","link":"/concepts/executive-order-14339"},{"text":"Executive Order 14344","link":"/concepts/executive-order-14344"},{"text":"Executive Order 14399","link":"/concepts/executive-order-14399"},{"text":"Executive Order Assuring the Security of the State of Qatar","link":"/concepts/executive-order-assuring-the-security-of-the-state-of-qatar"},{"text":"Executive Order on Institutional Homebuyers","link":"/concepts/executive-order-on-institutional-homebuyers"},{"text":"Executive Order on Safeguarding Venezuelan Oil Revenue","link":"/concepts/safeguarding-venezuelan-oil-revenue-executive-order"},{"text":"External Revenue Service","link":"/concepts/external-revenue-service"},{"text":"FACE Act","link":"/concepts/face-act"},{"text":"Facebook Files","link":"/concepts/facebook-files"},{"text":"Fair Housing Act","link":"/concepts/fair-housing-act"},{"text":"FairTax Act","link":"/concepts/fairtax-act"},{"text":"Fake Iran War","link":"/concepts/fake-iran-war"},{"text":"Fall of the Assad Regime","link":"/concepts/fall-of-the-assad-regime"},{"text":"False Claims Act","link":"/concepts/false-claims-act"},{"text":"False Flag Operation","link":"/concepts/false-flag-operation"},{"text":"Familial DNA Testing at the Border","link":"/concepts/familial-dna-testing-at-the-border"},{"text":"Farmer Bridge Assistance Program","link":"/concepts/farmer-bridge-assistance-program"},{"text":"Fauci Files","link":"/concepts/fauci-files"},{"text":"Fauci Senate Covid Origins Hearing (2026)","link":"/concepts/fauci-senate-covid-origins-hearing-2026"},{"text":"FBI Burn Bags Investigation","link":"/concepts/fbi-burn-bags-investigation"},{"text":"FBI Raid on Hannah Natanson","link":"/concepts/fbi-raid-on-hannah-natanson"},{"text":"FBI Richmond Catholic Memo","link":"/concepts/fbi-richmond-catholic-memo"},{"text":"FBI SCIF Records Cache","link":"/concepts/fbi-scif-records-cache"},{"text":"FBI Subpoenaed Document Production to the House Judiciary Committee","link":"/concepts/fbi-subpoenaed-document-production-to-the-house-judiciary-committee"},{"text":"FBI–IRS Nonprofit Terror Funding Task Force","link":"/concepts/fbi-irs-nonprofit-terror-funding-task-force"},{"text":"FCC Equal-Time Rule","link":"/concepts/fcc-equal-time-rule"},{"text":"FDA Adverse Event Reporting System","link":"/concepts/fda-adverse-event-reporting-system"},{"text":"FDA Blocked Vaccine Safety Studies","link":"/concepts/fda-blocked-vaccine-safety-studies"},{"text":"February 2024 Government Shutdown Standoff","link":"/concepts/february-2024-government-shutdown-standoff"},{"text":"FedAccounts","link":"/concepts/fedaccounts"},{"text":"Federal Anti-Fraud Task Force (2026)","link":"/concepts/federal-anti-fraud-task-force-2026"},{"text":"Federal Death Penalty Expansion (2026)","link":"/concepts/federal-death-penalty-expansion-2026"},{"text":"Federal Gas Tax Suspension Proposal","link":"/concepts/federal-gas-tax-suspension-proposal"},{"text":"Federal Gun Ban for Drug Users","link":"/concepts/federal-gun-ban-for-drug-users"},{"text":"Federal Income Tax","link":"/concepts/federal-income-tax"},{"text":"Federal Organ Donation Review 2026","link":"/concepts/federal-organ-donation-review-2026"},{"text":"Federal Records Act","link":"/concepts/federal-records-act"},{"text":"Federal Research Grant Overhaul","link":"/concepts/federal-research-grant-overhaul"},{"text":"Federal Reserve Act of 1913","link":"/concepts/federal-reserve-act-of-1913"},{"text":"Federalist No. 70","link":"/concepts/federalist-no-70"},{"text":"FedNow","link":"/concepts/fednow"},{"text":"Fentanyl Crisis","link":"/concepts/fentanyl-crisis"},{"text":"Fiat Currency","link":"/concepts/fiat-currency"},{"text":"Fifteenth Amendment","link":"/concepts/fifteenth-amendment"},{"text":"fifth generation warfare","link":"/concepts/fifth-generation-warfare"},{"text":"Filibuster","link":"/concepts/filibuster"},{"text":"Financial Innovation and Technology for the 21st Century Act","link":"/concepts/financial-innovation-and-technology-for-the-21st-century-act"},{"text":"FinCEN Whistleblower Tip Portal","link":"/concepts/fincen-whistleblower-tip-portal"},{"text":"First Amendment","link":"/concepts/first-amendment"},{"text":"First GOP Presidential Debate 2023","link":"/concepts/first-gop-presidential-debate-2023"},{"text":"First Impeachment of Donald Trump","link":"/concepts/first-impeachment-of-donald-trump"},{"text":"First Principles","link":"/concepts/first-principles"},{"text":"First Reconstruction Act","link":"/concepts/first-reconstruction-act"},{"text":"Fiscal Year 2024 Spending Deal","link":"/concepts/fiscal-year-2024-spending-deal"},{"text":"Fischer v. United States","link":"/concepts/fischer-v-united-states"},{"text":"Five Seas Vision","link":"/concepts/five-seas-vision"},{"text":"Flooding of Hamas Tunnels in Gaza","link":"/concepts/flooding-of-hamas-tunnels-in-gaza"},{"text":"Florida Civil Probe into the SPLC","link":"/concepts/florida-civil-probe-into-the-splc"},{"text":"Florida Criminal Probe of the 2016 Russia Assessment","link":"/concepts/florida-criminal-probe-of-2016-russia-assessment"},{"text":"Florida HB 1291","link":"/concepts/florida-hb-1291"},{"text":"Florida HB 269","link":"/concepts/florida-hb-269"},{"text":"Florida Social Media Ban for Minors","link":"/concepts/florida-social-media-ban-for-minors"},{"text":"Florida Ukraine Peace Talks","link":"/concepts/florida-ukraine-peace-talks"},{"text":"Foreign Agents Registration Act","link":"/concepts/foreign-agents-registration-act"},{"text":"Foreign Intelligence Surveillance Act","link":"/concepts/foreign-intelligence-surveillance-act"},{"text":"Foreign Policy Establishment","link":"/concepts/foreign-policy-establishment"},{"text":"Foreign Terrorist Organization designation","link":"/concepts/foreign-terrorist-organization"},{"text":"Fortress Economy","link":"/concepts/fortress-economy"},{"text":"Forward Defense Zone","link":"/concepts/forward-defense-zone"},{"text":"Founders & Foundations (series)","link":"/concepts/founders-and-foundations-series"},{"text":"Four Freedoms","link":"/concepts/four-freedoms"},{"text":"Fourteenth Amendment","link":"/concepts/fourteenth-amendment"},{"text":"Fourth Industrial Revolution","link":"/concepts/fourth-industrial-revolution"},{"text":"Fourth Republican Presidential Debate (2023)","link":"/concepts/fourth-gop-presidential-debate-2023"},{"text":"Fox–Dominion Defamation Settlement","link":"/concepts/fox-dominion-defamation-settlement"},{"text":"Fractional Reserve Lending","link":"/concepts/fractional-reserve-lending"},{"text":"Francis Scott Key Bridge Collapse","link":"/concepts/francis-scott-key-bridge-collapse"},{"text":"Frankism","link":"/concepts/frankism"},{"text":"Frazzledrip","link":"/concepts/frazzledrip"},{"text":"Freedom Convoy","link":"/concepts/freedom-convoy"},{"text":"French Air Conditioning Riots of 2026","link":"/concepts/french-air-conditioning-riots-2026"},{"text":"French Mayors EU Flag Removal","link":"/concepts/french-mayors-eu-flag-removal"},{"text":"Frontiers in Artificial Intelligence for Science, Security and Technology (FASST)","link":"/concepts/frontiers-in-artificial-intelligence-for-science-security-and-technology"},{"text":"Frozen Russian Assets","link":"/concepts/frozen-russian-assets"},{"text":"Fulton County 2020 Election Grand Jury Subpoena","link":"/concepts/fulton-county-2020-election-grand-jury-subpoena"},{"text":"Fulton County Election Raid","link":"/concepts/fulton-county-election-raid"},{"text":"Funeral of Ali Khamenei","link":"/concepts/funeral-of-ali-khamenei"},{"text":"Fusarium graminearum Smuggling Case","link":"/concepts/fusarium-graminearum-smuggling-case"},{"text":"Fusion Science and Technology Roadmap","link":"/concepts/fusion-science-and-technology-roadmap"},{"text":"Future Investment Initiative","link":"/concepts/future-investment-initiative"},{"text":"Future of Work","link":"/concepts/future-of-work"},{"text":"FY2027 National Defense Authorization Act","link":"/concepts/fy2027-national-defense-authorization-act"},{"text":"G2","link":"/concepts/g2"},{"text":"Gaetz Syria Troop Withdrawal Resolution (2023)","link":"/concepts/gaetz-syria-troop-withdrawal-resolution"},{"text":"Gain-of-Function Research","link":"/concepts/gain-of-function-research"},{"text":"Gallup Political Ideology Gender Gap","link":"/concepts/gallup-political-ideology-gender-gap"},{"text":"Gangster Rap","link":"/concepts/gangster-rap"},{"text":"Garland v. Range","link":"/concepts/garland-v-range"},{"text":"GART 2","link":"/concepts/gart-2"},{"text":"GART 3 (Irvine)","link":"/concepts/gart-3"},{"text":"GART Nashville","link":"/concepts/gart-nashville"},{"text":"Gaza Aid Convoy Killings (February 2024)","link":"/concepts/gaza-aid-convoy-killings-2024"},{"text":"Gaza Ceasefire","link":"/concepts/gaza-ceasefire"},{"text":"Gaza Relocation Proposal (2025)","link":"/concepts/gaza-relocation-proposal-2025"},{"text":"Gaza War Third Phase","link":"/concepts/gaza-war-third-phase"},{"text":"Generation Z","link":"/concepts/generation-z"},{"text":"Generational Divide","link":"/concepts/generational-divide"},{"text":"Genesis Mission","link":"/concepts/genesis-mission"},{"text":"GENIUS Act","link":"/concepts/genius-act"},{"text":"Georgia Foreign Agents Law","link":"/concepts/georgia-foreign-agents-law"},{"text":"Georgia Guidestones","link":"/concepts/georgia-guidestones"},{"text":"Georgia House Bill 397","link":"/concepts/georgia-house-bill-397"},{"text":"Georgia Senate Bill 189","link":"/concepts/georgia-senate-bill-189"},{"text":"Geostationary Satellite Data Leak Research","link":"/concepts/geostationary-satellite-data-leak-research"},{"text":"German Child Pornography Decriminalization Bill (2024)","link":"/concepts/german-child-pornography-decriminalization-bill-2024"},{"text":"German East-West Political Divide","link":"/concepts/german-east-west-political-divide"},{"text":"German Industrial Crisis (2026)","link":"/concepts/german-industrial-crisis-2026"},{"text":"German Knife Amnesty Proposal","link":"/concepts/german-knife-amnesty-proposal"},{"text":"German Nuclear Phase-Out","link":"/concepts/german-nuclear-phase-out"},{"text":"Ghost Guns","link":"/concepts/ghost-guns"},{"text":"Ghouta Chemical Attack","link":"/concepts/ghouta-chemical-attack"},{"text":"Glass-Steagall Act","link":"/concepts/glass-steagall"},{"text":"Global Alliance for Responsible Media (GARM)","link":"/concepts/global-alliance-for-responsible-media"},{"text":"Global Cartel","link":"/concepts/global-cartel"},{"text":"Global Crackdown on Far-Left Political Terrorism (2026)","link":"/concepts/global-crackdown-on-far-left-political-terrorism"},{"text":"Global Energy War","link":"/concepts/global-energy-war"},{"text":"Global Golden Age","link":"/concepts/global-golden-age"},{"text":"Global Intelligence Files","link":"/concepts/global-intelligence-files"},{"text":"Global North and Global South","link":"/concepts/global-north-and-global-south"},{"text":"Global Sumud Flotilla","link":"/concepts/global-sumud-flotilla"},{"text":"Globalist Fragility","link":"/concepts/globalist-fragility"},{"text":"Globalist Hegemon","link":"/concepts/globalist-hegemon"},{"text":"Glock Switch","link":"/concepts/glock-switch"},{"text":"Golan Heights","link":"/concepts/golan-heights"},{"text":"Gold Standard","link":"/concepts/gold-standard"},{"text":"Gold Standard (Nuclear Nonproliferation)","link":"/concepts/gold-standard-nonproliferation"},{"text":"Gold Standard Restoration Act","link":"/concepts/gold-standard-restoration-act"},{"text":"Golden Age Infrastructure","link":"/concepts/golden-age-infrastructure"},{"text":"Golden Dome","link":"/concepts/golden-dome"},{"text":"Golden Valley Farms Raid","link":"/concepts/golden-valley-farms-raid"},{"text":"Good Friday Agreement","link":"/concepts/good-friday-agreement"},{"text":"Good Reset","link":"/concepts/good-reset"},{"text":"Google Autocomplete Trump Assassination Controversy","link":"/concepts/google-autocomplete-trump-assassination-controversy"},{"text":"Google Gemini","link":"/concepts/google-gemini"},{"text":"Google Incognito Privacy Settlement","link":"/concepts/google-incognito-privacy-settlement"},{"text":"Google Veo 3","link":"/concepts/google-veo-3"},{"text":"Government Efficiency Commission","link":"/concepts/government-efficiency-commission"},{"text":"Government Funded Media Label","link":"/concepts/government-funded-media-label"},{"text":"Government Gangsters","link":"/concepts/government-gangsters"},{"text":"Government Purchase of Commercially Available Data","link":"/concepts/government-purchase-of-commercially-available-data"},{"text":"Government-Sponsored Censorship","link":"/concepts/government-sponsored-censorship"},{"text":"Grand Conspiracy Probe","link":"/concepts/grand-conspiracy-probe"},{"text":"Great American Restoration Tour","link":"/concepts/great-american-restoration-tour"},{"text":"Great Awakening","link":"/concepts/great-awakening"},{"text":"Great Barrington Declaration","link":"/concepts/great-barrington-declaration"},{"text":"Great Britain Poultry Registration Requirement (2023)","link":"/concepts/great-britain-poultry-registration-requirement"},{"text":"Great Healthcare Plan","link":"/concepts/great-healthcare-plan"},{"text":"Great Migration","link":"/concepts/great-migration"},{"text":"Great Reset","link":"/concepts/great-reset"},{"text":"Greater Idaho Movement","link":"/concepts/greater-idaho-movement"},{"text":"Greater Israel (\\"From the Nile to the Euphrates\\")","link":"/concepts/greater-israel"},{"text":"Greater Israel Project","link":"/concepts/greater-israel-project"},{"text":"Green New Deal","link":"/concepts/green-new-deal"},{"text":"Greenhouse Gas Reduction Fund","link":"/concepts/greenhouse-gas-reduction-fund"},{"text":"Greenland Defense Agreement","link":"/concepts/greenland-defense-agreement"},{"text":"Greenland Tariff Dispute (2026)","link":"/concepts/greenland-tariff-dispute-2026"},{"text":"Grok MechaHitler Incident","link":"/concepts/grok-mechahitler-incident"},{"text":"Groypers","link":"/concepts/groypers"},{"text":"Guardian of the Hormuz Strait","link":"/concepts/guardian-of-the-hormuz-strait"},{"text":"Gulf of Tonkin Incident","link":"/concepts/gulf-of-tonkin-incident"},{"text":"Gun Control Act of 1968","link":"/concepts/gun-control-act-of-1968"},{"text":"GW 231123","link":"/concepts/gw-231123"},{"text":"H-1B Visa Program","link":"/concepts/h-1b-visa-program"},{"text":"H.Res. 500 (Congressional Staff Background Checks)","link":"/concepts/h-res-500"},{"text":"H5N1 Avian Influenza","link":"/concepts/h5n1-avian-influenza"},{"text":"Hague Invasion Act","link":"/concepts/hague-invasion-act"},{"text":"Halderman Report","link":"/concepts/halderman-report"},{"text":"Hands Off! Protests","link":"/concepts/hands-off-protests"},{"text":"Hannibal Directive","link":"/concepts/hannibal-directive"},{"text":"Hantavirus Outbreak (2026)","link":"/concepts/hantavirus-outbreak-2026"},{"text":"Hard Money","link":"/concepts/hard-money"},{"text":"Haredi Conscription Exemption Law","link":"/concepts/haredi-conscription-exemption-law"},{"text":"Harper v. Hall","link":"/concepts/harper-v-hall"},{"text":"Harris Israel Antisemitism Controversy","link":"/concepts/harris-israel-antisemitism-controversy"},{"text":"Harvard/Harris Poll on the Trump Indictment","link":"/concepts/harvard-harris-poll-on-the-trump-indictment"},{"text":"Hatch Act","link":"/concepts/hatch-act"},{"text":"Hate Crime and Public Order (Scotland) Act 2021","link":"/concepts/hate-crime-and-public-order-scotland-act-2021"},{"text":"Hate Speech","link":"/concepts/hate-speech"},{"text":"Havana Syndrome","link":"/concepts/havana-syndrome"},{"text":"He Who Saves His Country Does Not Violate Any Law","link":"/concepts/he-who-saves-his-country-does-not-violate-any-law"},{"text":"Hegelian Dialectic","link":"/concepts/hegelian-dialectic"},{"text":"Helms-Burton Act","link":"/concepts/helms-burton-act"},{"text":"Help America Vote Act","link":"/concepts/help-america-vote-act"},{"text":"Helsinki Accords","link":"/concepts/helsinki-accords"},{"text":"Higgins Memo","link":"/concepts/higgins-memo"},{"text":"Hijacked Consciousness (series)","link":"/concepts/hijacked-consciousness-series"},{"text":"Hollywood Special Ambassadors","link":"/concepts/hollywood-special-ambassadors"},{"text":"Holodomor","link":"/concepts/holodomor"},{"text":"Holy Week","link":"/concepts/holy-week"},{"text":"Hong Kong National Security Law (2024)","link":"/concepts/hong-kong-national-security-law-2024"},{"text":"Honor Culture","link":"/concepts/honor-culture"},{"text":"Hope Florida","link":"/concepts/hope-florida"},{"text":"Hormuz Transit Fee Proposal","link":"/concepts/hormuz-transit-fee-proposal"},{"text":"Horseshoe Theory","link":"/concepts/horseshoe-theory"},{"text":"Hospital das Clínicas da UFMG Delivery Incident","link":"/concepts/hospital-das-clinicas-da-ufmg-delivery-incident"},{"text":"House January 6 Committee","link":"/concepts/january-6-committee"},{"text":"House Resolution 771 (Standing with Israel)","link":"/concepts/house-resolution-771-standing-with-israel"},{"text":"House Resolution 957 on Open-Border Policies","link":"/concepts/house-resolution-957-on-open-border-policies"},{"text":"House Resolution on Disclosure of Congressional Sexual Misconduct Settlements","link":"/concepts/house-resolution-on-disclosure-of-congressional-sexual-misconduct-settlements"},{"text":"Housing Stability and Tenant Protection Act","link":"/concepts/housing-stability-and-tenant-protection-act"},{"text":"Humanitarian City Plan","link":"/concepts/humanitarian-city-plan"},{"text":"Humiliation Ritual","link":"/concepts/humiliation-ritual"},{"text":"Hunter Biden Gun Conviction","link":"/concepts/hunter-biden-gun-conviction"},{"text":"Hunter Biden Laptop","link":"/concepts/hunter-biden-laptop"},{"text":"Hunter Biden Pardon","link":"/concepts/hunter-biden-pardon"},{"text":"Hunter Biden Tax Charges","link":"/concepts/hunter-biden-tax-charges"},{"text":"Hunter Biden v. Internal Revenue Service","link":"/concepts/hunter-biden-v-internal-revenue-service"},{"text":"Hur Report","link":"/concepts/hur-report"},{"text":"Hurricane Helene","link":"/concepts/hurricane-helene"},{"text":"Hurricane Milton","link":"/concepts/hurricane-milton"},{"text":"Hyde Amendment","link":"/concepts/hyde-amendment"},{"text":"IBM Digital Asset Haven","link":"/concepts/ibm-digital-asset-haven"},{"text":"ICC Withdrawal Wave (2025–2026)","link":"/concepts/icc-withdrawal-wave"},{"text":"ICE Congressional Access Suspension","link":"/concepts/ice-congressional-access-suspension"},{"text":"ICE Contempt Proceedings in Minnesota (2026)","link":"/concepts/ice-contempt-proceedings-minnesota-2026"},{"text":"ICE Non-Detained Criminal Docket Disclosure (2024)","link":"/concepts/ice-non-detained-criminal-docket-disclosure-2024"},{"text":"Ideological Subversion","link":"/concepts/ideological-subversion"},{"text":"IGO Anti-Boycott Act (H.R. 867)","link":"/concepts/igo-anti-boycott-act"},{"text":"IHRA Definition of Antisemitism","link":"/concepts/ihra-definition-of-antisemitism"},{"text":"Illegal Immigration Reform and Immigrant Responsibility Act of 1996","link":"/concepts/illegal-immigration-reform-and-immigrant-responsibility-act"},{"text":"Illinois and Chicago National Guard Lawsuit","link":"/concepts/illinois-and-chicago-national-guard-lawsuit"},{"text":"Illinois Ballot Disqualification Case","link":"/concepts/illinois-ballot-disqualification-case"},{"text":"Immigration and Nationality Act","link":"/concepts/immigration-and-nationality-act"},{"text":"Impeachment of Alejandro Mayorkas","link":"/concepts/impeachment-of-alejandro-mayorkas"},{"text":"Imperial presidency","link":"/concepts/imperial-presidency"},{"text":"Inauguration Day 2025 Protest Plans","link":"/concepts/inauguration-day-2025-protest-plans"},{"text":"Incorruptibility","link":"/concepts/incorruptibility"},{"text":"Independent Counsel","link":"/concepts/independent-counsel"},{"text":"Indictment of John Bolton","link":"/concepts/indictment-of-john-bolton"},{"text":"Indictment of Mexican Officials in the Sinaloa Cartel Case","link":"/concepts/indictment-of-mexican-officials-in-the-sinaloa-cartel-case"},{"text":"Inflation","link":"/concepts/inflation"},{"text":"Inflation Reduction Act","link":"/concepts/inflation-reduction-act"},{"text":"Info War Victory Laps","link":"/concepts/info-war-victory-laps"},{"text":"Information War (Info War)","link":"/concepts/information-war"},{"text":"Infowars Bankruptcy Auction","link":"/concepts/infowars-bankruptcy-auction"},{"text":"Infrared Night Vision Contact Lens","link":"/concepts/infrared-night-vision-contact-lens"},{"text":"Infrastructure Investment and Jobs Act","link":"/concepts/infrastructure-investment-and-jobs-act"},{"text":"Insurrection Act","link":"/concepts/insurrection-act"},{"text":"Integrated Country Strategy for Ukraine","link":"/concepts/integrated-country-strategy-for-ukraine"},{"text":"Intelligence Community–Big Tech Revolving Door","link":"/concepts/intelligence-community-big-tech-revolving-door"},{"text":"Interim National Defense Strategic Guidance","link":"/concepts/interim-national-defense-strategic-guidance"},{"text":"Intermediate-Range Nuclear Forces Treaty","link":"/concepts/intermediate-range-nuclear-forces-treaty"},{"text":"International Emergency Economic Powers Act (IEEPA)","link":"/concepts/international-emergency-economic-powers-act"},{"text":"International Security Force (Gaza)","link":"/concepts/international-security-force"},{"text":"International Women of Courage Award","link":"/concepts/international-women-of-courage-award"},{"text":"Intervision","link":"/concepts/intervision"},{"text":"Invisible Enemy","link":"/concepts/invisible-enemy"},{"text":"IOC Female Category Policy","link":"/concepts/ioc-female-category-policy"},{"text":"iOS 19","link":"/concepts/ios-19"},{"text":"Iowa Noncitizen Voter Challenge Ruling","link":"/concepts/iowa-noncitizen-voter-challenge-ruling"},{"text":"Iowa State Capitol Satanic Display Controversy","link":"/concepts/iowa-state-capitol-satanic-display-controversy"},{"text":"Iran $6 Billion Fund Release","link":"/concepts/iran-6-billion-fund-release"},{"text":"Iran Civilian Nuclear Investment Proposal","link":"/concepts/iran-civilian-nuclear-investment-proposal"},{"text":"Iran Continuity of Government Measures (2026)","link":"/concepts/iran-continuity-of-government-measures-2026"},{"text":"Iran General License X","link":"/concepts/iran-general-license-x"},{"text":"Iran Saudi Nuclear Mediation Request (2025)","link":"/concepts/iran-saudi-nuclear-mediation-request-2025"},{"text":"Iran Shadow Fleet","link":"/concepts/iran-shadow-fleet"},{"text":"Iran Suspension of US Talks (2026)","link":"/concepts/iran-suspension-of-us-talks-2026"},{"text":"Iran War","link":"/concepts/iran-war"},{"text":"Iran-Contra Affair","link":"/concepts/iran-contra-affair"},{"text":"Iranian Devolution","link":"/concepts/iranian-devolution"},{"text":"Iranian Hacking Operations Against Trump Associates","link":"/concepts/iranian-hacking-operations-against-trump-associates"},{"text":"Iranian Revolution","link":"/concepts/iranian-revolution"},{"text":"Iraq War","link":"/concepts/iraq-war"},{"text":"Iraq-Syria Crude Oil Pipeline","link":"/concepts/iraq-syria-crude-oil-pipeline"},{"text":"Iraq–Saudi Pipeline (IPSA)","link":"/concepts/iraq-saudi-pipeline"},{"text":"Iron Dome","link":"/concepts/iron-dome"},{"text":"IRS–ICE Taxpayer Data Sharing Agreement","link":"/concepts/irs-ice-taxpayer-data-sharing-agreement"},{"text":"ISIS Weapons Cache Operation in Southern Syria","link":"/concepts/isis-weapons-cache-operation-in-southern-syria"},{"text":"Islamabad Agreement","link":"/concepts/islamabad-agreement"},{"text":"Islamic View of Jesus","link":"/concepts/islamic-view-of-jesus"},{"text":"Israel Lobby","link":"/concepts/israel-lobby"},{"text":"Israel–Lebanon Ceasefire (April 2026)","link":"/concepts/israel-lebanon-ceasefire"},{"text":"Israel–Palestine Conflict","link":"/concepts/israel-palestine-conflict"},{"text":"Israel–Syria Fusion Mechanism","link":"/concepts/israel-syria-fusion-mechanism"},{"text":"Israel–Turkey Deconfliction Mechanism in Syria","link":"/concepts/israel-turkey-deconfliction-mechanism-in-syria"},{"text":"Israeli Arming of Gaza Anti-Hamas Militias","link":"/concepts/israeli-arming-of-gaza-anti-hamas-militias"},{"text":"Israeli Art Students Affair","link":"/concepts/israeli-art-students-affair"},{"text":"Israeli Buffer Zone in Syria","link":"/concepts/israeli-buffer-zone-in-syria"},{"text":"Israeli Influencer Tour Program","link":"/concepts/israeli-influencer-tour-program"},{"text":"Israeli Judicial Overhaul","link":"/concepts/israeli-judicial-overhaul"},{"text":"Israeli Mafia","link":"/concepts/israeli-mafia"},{"text":"Israeli Nuclear Program","link":"/concepts/israeli-nuclear-program"},{"text":"Israeli Summons of the Vatican Envoy (December 2024)","link":"/concepts/israeli-summons-of-the-vatican-envoy-2024"},{"text":"Israeli Troop Withdrawal from Gaza (January 2024)","link":"/concepts/israeli-troop-withdrawal-from-gaza-2024"},{"text":"Italy–Israel Defence Memorandum of Understanding (2003)","link":"/concepts/italy-israel-defence-memorandum-of-understanding"},{"text":"Ivermectin","link":"/concepts/ivermectin"},{"text":"J.D. Vance Baby-Face Memes","link":"/concepts/jd-vance-baby-face-memes"},{"text":"Jan. 6 Excessive Force Lawsuit","link":"/concepts/jan-6-excessive-force-lawsuit"},{"text":"January 2024 Stopgap Funding Bill","link":"/concepts/january-2024-stopgap-funding-bill"},{"text":"January 2025 Los Angeles Wildfires","link":"/concepts/january-2025-los-angeles-wildfires"},{"text":"January 2026 Government Shutdown Standoff","link":"/concepts/january-2026-government-shutdown-standoff"},{"text":"January 5, 2021 Pipe Bombs","link":"/concepts/january-5-2021-pipe-bombs"},{"text":"January 6 Capitol Security Footage Release","link":"/concepts/january-6-capitol-security-footage-release"},{"text":"January 6 Prosecutions","link":"/concepts/january-6-prosecutions"},{"text":"JD Vance 2028 Presidential Planning","link":"/concepts/jd-vance-2028-presidential-planning"},{"text":"Jerusalem Day Flag March","link":"/concepts/jerusalem-day-flag-march"},{"text":"Jesus Is King","link":"/concepts/jesus-is-king"},{"text":"Jewish Terrorism (Israeli Settler Violence)","link":"/concepts/jewish-terrorism"},{"text":"JFK Files Release","link":"/concepts/jfk-files-release"},{"text":"JFK: What the Doctors Saw","link":"/concepts/jfk-what-the-doctors-saw"},{"text":"Jimmy Kimmel Live! Suspension","link":"/concepts/jimmy-kimmel-live-suspension"},{"text":"JN.1 \\"Heart Failure Pandemic\\" Claim","link":"/concepts/jn-1-heart-failure-pandemic-claim"},{"text":"Joe Biden Bribery Allegation","link":"/concepts/joe-biden-bribery-allegation"},{"text":"Joint Comprehensive Plan of Action","link":"/concepts/joint-comprehensive-plan-of-action"},{"text":"JOLTS Report","link":"/concepts/jolts-report"},{"text":"July 2024 US Jobs Report","link":"/concepts/july-2024-us-jobs-report"},{"text":"July 2025 Tariff Letters","link":"/concepts/july-2025-tariff-letters"},{"text":"July 2026 House Vote on Military Aid to Israel","link":"/concepts/july-2026-house-vote-on-military-aid-to-israel"},{"text":"July 2026 Trump Prime Time Election Address","link":"/concepts/july-2026-trump-prime-time-election-address"},{"text":"June 2025 Israeli Strikes on Iran","link":"/concepts/june-2025-israeli-strikes-on-iran"},{"text":"June 2025 Travel Ban Proclamation","link":"/concepts/june-2025-travel-ban-proclamation"},{"text":"June 2026 House Rule Failure","link":"/concepts/june-2026-house-rule-failure"},{"text":"June 2026 Israel-Iran Strike Cancellation","link":"/concepts/june-2026-israel-iran-strike-cancellation"},{"text":"June 2026 Trump–Netanyahu Lebanon Call","link":"/concepts/june-2026-trump-netanyahu-lebanon-call"},{"text":"Just War Theory","link":"/concepts/just-war-theory"},{"text":"Justice Department Indictment over Iranian Hack of the Trump Campaign","link":"/concepts/justice-department-indictment-over-iranian-hack-of-the-trump-campaign"},{"text":"Kabbalah","link":"/concepts/kabbalah"},{"text":"Kahanism","link":"/concepts/kahanism"},{"text":"Kakhovka Dam Destruction","link":"/concepts/kakhovka-dam-destruction"},{"text":"Kansas City Super Bowl Parade Shooting","link":"/concepts/kansas-city-super-bowl-parade-shooting"},{"text":"Kansas Women's Bill of Rights","link":"/concepts/kansas-womens-bill-of-rights"},{"text":"Kanye West Istanbul Concert (2026)","link":"/concepts/kanye-west-istanbul-concert-2026"},{"text":"Kari Lake Election Contest (2022)","link":"/concepts/kari-lake-election-contest-2022"},{"text":"Kayfabe","link":"/concepts/kayfabe"},{"text":"Kazakhstan–United States $4 Billion Locomotive Deal","link":"/concepts/kazakhstan-united-states-locomotive-deal"},{"text":"Ken Paxton Impeachment Trial","link":"/concepts/ken-paxton-impeachment-trial"},{"text":"Keystone Pipeline","link":"/concepts/keystone-pipeline"},{"text":"Kiev Power Crisis (2026)","link":"/concepts/kiev-power-crisis-2026"},{"text":"Killing of Brian Thompson","link":"/concepts/killing-of-brian-thompson"},{"text":"Killing of Hassan Nasrallah","link":"/concepts/killing-of-hassan-nasrallah"},{"text":"Killing of Sa'ad Ra'ad","link":"/concepts/killing-of-saad-raad"},{"text":"Knesset Ritual Abuse Testimony (2025)","link":"/concepts/knesset-ritual-abuse-testimony-2025"},{"text":"Kobayashi Maru","link":"/concepts/kobayashi-maru"},{"text":"Kratom and 7-OH Scheduling","link":"/concepts/kratom"},{"text":"Ku Klux Klan Act","link":"/concepts/ku-klux-klan-act"},{"text":"Ku Klux Klan Act of 1871","link":"/concepts/ku-klux-klan-act-of-1871"},{"text":"Kursk Incursion","link":"/concepts/kursk-incursion"},{"text":"Kursk Liberation Museum","link":"/concepts/kursk-liberation-museum"},{"text":"Kuwait Desalination Plant Attack","link":"/concepts/kuwait-desalination-plant-attack"},{"text":"Lab-Grown Meat","link":"/concepts/lab-grown-meat"},{"text":"Lab-Leak Theory","link":"/concepts/lab-leak-theory"},{"text":"Lagevrio","link":"/concepts/lagevrio"},{"text":"Lahaina Wildfires","link":"/concepts/lahaina-wildfires"},{"text":"Lake v. Hobbs","link":"/concepts/lake-v-hobbs"},{"text":"Laken Riley Act","link":"/concepts/laken-riley-act"},{"text":"Lankford–Rosen Antisemitism Bill (2026)","link":"/concepts/lankford-rosen-antisemitism-bill"},{"text":"Las Vegas Cybertruck Explosion (January 1, 2025)","link":"/concepts/las-vegas-cybertruck-explosion"},{"text":"Las Vegas Illegal Biolab","link":"/concepts/las-vegas-biolab"},{"text":"Las Vegas Shooting","link":"/concepts/las-vegas-shooting"},{"text":"Las Vegas Tourism Decline","link":"/concepts/las-vegas-tourism-decline"},{"text":"Law 26.737","link":"/concepts/law-26737"},{"text":"Lawfare","link":"/concepts/lawfare"},{"text":"Leaked Russian Nuclear Threshold Files","link":"/concepts/leaked-russian-nuclear-threshold-files"},{"text":"Legacy Media","link":"/concepts/legacy-media"},{"text":"Lewiston, Maine Mass Shooting","link":"/concepts/lewiston-maine-mass-shooting"},{"text":"Liberal World Order","link":"/concepts/liberal-world-order"},{"text":"Liberation Day Tariffs","link":"/concepts/liberation-day-tariffs"},{"text":"Liberty Vote Acquisition of Dominion Voting Systems","link":"/concepts/liberty-vote-acquisition-of-dominion-voting-systems"},{"text":"LIBOR","link":"/concepts/libor"},{"text":"Lifeline Program","link":"/concepts/lifeline-program"},{"text":"LifeLog","link":"/concepts/lifelog"},{"text":"Limited Hangout","link":"/concepts/limited-hangout"},{"text":"Lincoln Memorial Reflecting Pool","link":"/concepts/lincoln-memorial-reflecting-pool"},{"text":"Lioness","link":"/concepts/lioness"},{"text":"Live Not by Lies","link":"/concepts/live-not-by-lies"},{"text":"Llama Federal Approval","link":"/concepts/llama-federal-approval"},{"text":"Lobbying","link":"/concepts/lobbying"},{"text":"Local Currency Settlement System","link":"/concepts/local-currency-settlement-system"},{"text":"Long Depression","link":"/concepts/long-depression"},{"text":"Long-Term Military Aid for Ukraine","link":"/concepts/long-term-military-aid-for-ukraine"},{"text":"Loosh","link":"/concepts/loosh"},{"text":"Loudoun County School Bathroom Assault Case","link":"/concepts/loudoun-county-school-bathroom-assault-case"},{"text":"Louisiana Nitrogen Gas Execution of Jessie Hoffman Jr.","link":"/concepts/louisiana-nitrogen-gas-execution"},{"text":"Louisiana Senate Bill 101 (2024)","link":"/concepts/louisiana-senate-bill-101"},{"text":"Louisiana Senate Bill 371","link":"/concepts/louisiana-senate-bill-371"},{"text":"Louisiana Surgical Castration Law","link":"/concepts/louisiana-surgical-castration-law"},{"text":"Louisiana v. Callais","link":"/concepts/louisiana-v-callais"},{"text":"Louisville UPS Plane Crash","link":"/concepts/louisville-ups-plane-crash"},{"text":"Lower Health Care Premiums for All Americans Act","link":"/concepts/lower-health-care-premiums-for-all-americans-act"},{"text":"Ludecke v. Watkins","link":"/concepts/ludecke-v-watkins"},{"text":"Lukeville Port of Entry Closure","link":"/concepts/lukeville-port-of-entry-closure"},{"text":"Lunar Soil Water Extraction","link":"/concepts/lunar-soil-water-extraction"},{"text":"M/V Touska Seizure","link":"/concepts/mv-touska-seizure"},{"text":"M&M's Spokescandies Controversy","link":"/concepts/mms-spokescandies-controversy"},{"text":"MacArthur Park Immigration Operation","link":"/concepts/macarthur-park-immigration-operation"},{"text":"Macro System","link":"/concepts/macro-system"},{"text":"Madleen Flotilla Interception","link":"/concepts/madleen-flotilla-interception"},{"text":"Maduro's Secret Economic Concessions Offer (2025)","link":"/concepts/maduros-secret-economic-concessions-offer-2025"},{"text":"Maersk Container Ship Attack","link":"/concepts/maersk-container-ship-attack"},{"text":"MAGA Coalition","link":"/concepts/maga-coalition"},{"text":"MAGA Mission","link":"/concepts/maga-mission"},{"text":"Mahmoud v. Taylor Montgomery County LGBTQ Books Case","link":"/concepts/montgomery-county-lgbtq-books-case"},{"text":"Mail-In Voting","link":"/concepts/mail-in-voting"},{"text":"Maine Ballot Disqualification of Donald Trump","link":"/concepts/maine-ballot-disqualification"},{"text":"Major Questions Doctrine","link":"/concepts/major-questions-doctrine"},{"text":"Make America Healthy Again","link":"/concepts/make-america-healthy-again"},{"text":"Make Elections Secure Act","link":"/concepts/make-elections-secure-act"},{"text":"Malthusianism","link":"/concepts/malthusianism"},{"text":"Manifest Destiny","link":"/concepts/manifest-destiny"},{"text":"Mann Act","link":"/concepts/mann-act"},{"text":"Manufactured Race Riots (Thirty-Year Cycle)","link":"/concepts/manufactured-race-riots"},{"text":"Mar-a-Lago Raid","link":"/concepts/mar-a-lago-raid"},{"text":"Marbury v. Madison","link":"/concepts/marbury-v-madison"},{"text":"March 2024 $1.2 Trillion Funding Package","link":"/concepts/march-2024-funding-package"},{"text":"March 2024 Partial Spending Package","link":"/concepts/march-2024-partial-spending-package"},{"text":"Marijuana Rescheduling Executive Order","link":"/concepts/marijuana-rescheduling-executive-order"},{"text":"Maritime Security Belt Exercises","link":"/concepts/maritime-security-belt"},{"text":"Mark of the Beast","link":"/concepts/mark-of-the-beast"},{"text":"Marshall Plan","link":"/concepts/marshall-plan"},{"text":"Massachusetts Driver's Licenses for Illegal Aliens","link":"/concepts/massachusetts-drivers-licenses-for-illegal-aliens"},{"text":"Massachusetts High-End Brothel Network Case","link":"/concepts/massachusetts-high-end-brothel-network-case"},{"text":"Massachusetts v. EPA","link":"/concepts/massachusetts-v-epa"},{"text":"MATURE Act","link":"/concepts/mature-act"},{"text":"Maximum Pressure Campaign","link":"/concepts/maximum-pressure-campaign"},{"text":"May 2024 G5 Geomagnetic Storm","link":"/concepts/may-2024-g5-geomagnetic-storm"},{"text":"May 2024 Motion to Vacate Against Speaker Mike Johnson","link":"/concepts/may-2024-motion-to-vacate-against-speaker-mike-johnson"},{"text":"May 2026 Postponement of the U.S. Strike on Iran","link":"/concepts/may-2026-postponement-of-us-strike-on-iran"},{"text":"Mayor's Office to Protect Tenants","link":"/concepts/mayors-office-to-protect-tenants"},{"text":"Media Industrial Complex","link":"/concepts/media-industrial-complex"},{"text":"Media Protectorate","link":"/concepts/media-protectorate"},{"text":"Medicaid","link":"/concepts/medicaid"},{"text":"Medical Cannabis","link":"/concepts/medical-cannabis"},{"text":"Medical Marijuana Rescheduling","link":"/concepts/medical-marijuana-rescheduling"},{"text":"MEGA Act (Make Elections Great Again Act)","link":"/concepts/mega-act"},{"text":"Mega MAGA Fracture Over Robinson Hearing","link":"/concepts/mega-maga-fracture-over-robinson-hearing"},{"text":"Megachile lucifer","link":"/concepts/megachile-lucifer"},{"text":"Megatrends","link":"/concepts/megatrends"},{"text":"Membership Action Plan (MAP)","link":"/concepts/membership-action-plan"},{"text":"Memetics","link":"/concepts/memetics"},{"text":"Memorial Day","link":"/concepts/memorial-day"},{"text":"Memphis Safe Task Force","link":"/concepts/memphis-state-task-force"},{"text":"Menopause Care Equity Act","link":"/concepts/menopause-care-equity-act"},{"text":"Mercator Projection","link":"/concepts/mercator-projection"},{"text":"Meta AI Chatbot Sexual Content Scandal","link":"/concepts/meta-ai-chatbot-sexual-content-scandal"},{"text":"Metaverse","link":"/concepts/metaverse"},{"text":"Mexican Drug Cartels","link":"/concepts/mexican-drug-cartels"},{"text":"MGM-140 Army Tactical Missile System (ATACMS)","link":"/concepts/atacms"},{"text":"Mianyang Fusion Research Facility","link":"/concepts/mianyang-fusion-research-facility"},{"text":"Michigan Absentee Ballot ID Match Ruling","link":"/concepts/michigan-absentee-ballot-id-match-ruling"},{"text":"Michigan Fake Electors Case","link":"/concepts/michigan-fake-electors-case"},{"text":"Michigan State University Shooting","link":"/concepts/michigan-state-university-shooting"},{"text":"Mid-Decade Redistricting","link":"/concepts/mid-decade-redistricting"},{"text":"Migrant Child Labor Exploitation","link":"/concepts/migrant-child-labor-exploitation"},{"text":"Military Commissions Act of 2006","link":"/concepts/military-commissions-act-of-2006"},{"text":"Military Draft","link":"/concepts/military-draft"},{"text":"Military Industrial Complex","link":"/concepts/military-industrial-complex"},{"text":"Millennial Reign","link":"/concepts/millennial-reign"},{"text":"Milwaukee Central Count Facility","link":"/concepts/milwaukee-central-count-facility"},{"text":"Minneapolis ICE Shooting of Renee Nicole Good","link":"/concepts/minneapolis-ice-shooting-of-renee-nicole-good"},{"text":"Minnesota Color Revolution","link":"/concepts/minnesota-color-revolution"},{"text":"Minnesota Somali Fraud Hearings","link":"/concepts/minnesota-somali-fraud-hearings"},{"text":"Minnesota Somali Fraud Scandal","link":"/concepts/minnesota-somali-fraud-scandal"},{"text":"Minuteman III","link":"/concepts/minuteman-iii"},{"text":"Misconduct in Public Office","link":"/concepts/misconduct-in-public-office"},{"text":"Mississippi Income Tax Elimination","link":"/concepts/mississippi-income-tax-elimination"},{"text":"Missouri v. Biden","link":"/concepts/missouri-v-biden"},{"text":"Miyazaki Airport Bomb Explosion","link":"/concepts/miyazaki-airport-bomb-explosion"},{"text":"Mockingbird Media","link":"/concepts/mockingbird-media"},{"text":"Modern-Day Nazis","link":"/concepts/modern-day-nazis"},{"text":"Monarchism (Israeli political movement)","link":"/concepts/monarchism-israeli-political-movement"},{"text":"Monroe Doctrine","link":"/concepts/monroe-doctrine"},{"text":"Montreal Cognitive Assessment","link":"/concepts/montreal-cognitive-assessment"},{"text":"Monty Python's Life of Brian","link":"/concepts/monty-pythons-life-of-brian"},{"text":"Mossad Media","link":"/concepts/mossad-media"},{"text":"Motion to Vacate","link":"/concepts/motion-to-vacate"},{"text":"Muan Airport Jet Crash","link":"/concepts/muan-airport-jet-crash"},{"text":"Multipolar Devolution","link":"/concepts/multipolar-devolution"},{"text":"Multipolar Margin Call","link":"/concepts/multipolar-margin-call"},{"text":"Multipolar War","link":"/concepts/multipolar-war"},{"text":"Multipolar World","link":"/concepts/multipolar-world"},{"text":"Munchausen Syndrome by Proxy","link":"/concepts/munchausen-syndrome-by-proxy"},{"text":"Munitions Acceleration Council","link":"/concepts/munitions-acceleration-council"},{"text":"Murthy v. Missouri","link":"/concepts/murthy-v-missouri"},{"text":"Musk v. OpenAI","link":"/concepts/musk-v-openai"},{"text":"Musk–Bessent White House Altercation","link":"/concepts/musk-bessent-white-house-altercation"},{"text":"NAACP et al. v. USEIP et al.","link":"/concepts/naacp-v-useip"},{"text":"NAFTA","link":"/concepts/nafta"},{"text":"Narrative Convergence","link":"/concepts/narrative-convergence"},{"text":"Narrative Shielding","link":"/concepts/narrative-shielding"},{"text":"Narrative Warfare","link":"/concepts/narrative-warfare"},{"text":"Nashville School Shooting","link":"/concepts/nashville-school-shooting"},{"text":"Nassau County Mask Ban","link":"/concepts/nassau-county-mask-ban"},{"text":"Natalism","link":"/concepts/natalism"},{"text":"National Defense Authorization Act","link":"/concepts/national-defense-authorization-act"},{"text":"National Firearms Act of 1934","link":"/concepts/national-firearms-act-of-1934"},{"text":"National Fraud Enforcement Division","link":"/concepts/national-fraud-enforcement-division"},{"text":"National Popular Vote Interstate Compact","link":"/concepts/national-popular-vote-interstate-compact"},{"text":"National Security Presidential Memorandum 8","link":"/concepts/national-security-presidential-memorandum-8"},{"text":"National Security Presidential Memorandum-7 (NSPM-7)","link":"/concepts/national-security-presidential-memorandum-7"},{"text":"National Special Security Event","link":"/concepts/national-special-security-event"},{"text":"National Vaccine Injury Compensation Program","link":"/concepts/national-vaccine-injury-compensation-program"},{"text":"National Voter Registration Act","link":"/concepts/national-voter-registration-act"},{"text":"Nationwide Injunctions","link":"/concepts/nationwide-injunctions"},{"text":"NATO Force Model","link":"/concepts/nato-force-model"},{"text":"NATO-Funded US Arms Plan for Ukraine","link":"/concepts/nato-funded-us-arms-plan-for-ukraine"},{"text":"Naval Blockade of Iran","link":"/concepts/naval-blockade-of-iran"},{"text":"Navarro Contempt of Congress Trial","link":"/concepts/navarro-contempt-of-congress-trial"},{"text":"Nazi Ratlines","link":"/concepts/ratlines"},{"text":"Nazi Symbols in the Ukrainian Military","link":"/concepts/nazi-symbols-in-ukrainian-military"},{"text":"Neighborhood Checks (Naturalization)","link":"/concepts/neighborhood-checks"},{"text":"Neo-Marxism","link":"/concepts/neo-marxism"},{"text":"Neoconservatives","link":"/concepts/neoconservatives"},{"text":"NEOM","link":"/concepts/neom"},{"text":"Neoplatonism","link":"/concepts/neoplatonism"},{"text":"Net-Zero Rollback","link":"/concepts/net-zero-rollback"},{"text":"Netanyahu Corruption Trial","link":"/concepts/netanyahu-corruption-trial"},{"text":"Never Trump movement","link":"/concepts/never-trump-movement"},{"text":"New Jersey Executive Order No. 12","link":"/concepts/new-jersey-executive-order-12"},{"text":"New Journalism","link":"/concepts/new-journalism"},{"text":"New Manhattan Project","link":"/concepts/new-manhattan-project"},{"text":"New Mexico Public Health Order Suspending Concealed Carry","link":"/concepts/new-mexico-public-health-order-suspending-concealed-carry"},{"text":"New Orleans Bourbon Street Attack (January 1, 2025)","link":"/concepts/new-orleans-bourbon-street-attack"},{"text":"New START Treaty","link":"/concepts/new-start-treaty"},{"text":"New World Order","link":"/concepts/new-world-order"},{"text":"New York City Fiscal Year 2027 Preliminary Budget","link":"/concepts/new-york-city-fiscal-year-2027-preliminary-budget"},{"text":"New York City Migrant Busing Lawsuit","link":"/concepts/new-york-city-migrant-busing-lawsuit"},{"text":"New York City Migrant Crisis","link":"/concepts/new-york-city-migrant-crisis"},{"text":"New York City Migrant Prepaid Card Program","link":"/concepts/new-york-city-migrant-prepaid-card-program"},{"text":"New York Civil Fraud Trial","link":"/concepts/new-york-civil-fraud-trial"},{"text":"New York Declaration","link":"/concepts/new-york-declaration"},{"text":"New York Fashion Week","link":"/concepts/new-york-fashion-week"},{"text":"New York Subway Chokehold Prosecution","link":"/concepts/subway-chokehold-prosecution"},{"text":"NGO Migrant Transport Network","link":"/concepts/ngo-migrant-transport-network"},{"text":"NHS Antisemitism and Racism Review","link":"/concepts/nhs-antisemitism-and-racism-review"},{"text":"NIH Transgender Youth Hormone Study","link":"/concepts/nih-transgender-youth-hormone-study"},{"text":"No Kings Protests","link":"/concepts/no-kings-protests"},{"text":"No Tax on Overtime","link":"/concepts/no-tax-on-overtime"},{"text":"Nominalization","link":"/concepts/nominalization"},{"text":"Noncitizen Voting","link":"/concepts/noncitizen-voting"},{"text":"Nord Stream Sabotage","link":"/concepts/nord-stream-sabotage"},{"text":"Nordio Reforms","link":"/concepts/nordio-reforms"},{"text":"North Carolina Voter ID Law","link":"/concepts/north-carolina-voter-id-law"},{"text":"North Korean Troop Deployment to Russia","link":"/concepts/north-korean-troop-deployment-to-russia"},{"text":"North-South Transport Corridor","link":"/concepts/north-south-transport-corridor"},{"text":"North-South Transportation Corridor","link":"/concepts/north-south-transportation-corridor"},{"text":"Northeast Gasoline Supply Reserve","link":"/concepts/northeast-gasoline-supply-reserve"},{"text":"Not A Bot Program","link":"/concepts/not-a-bot-program"},{"text":"Nova Music Festival","link":"/concepts/nova-music-festival"},{"text":"Nova Music Festival Friendly-Fire Admission","link":"/concepts/nova-music-festival-friendly-fire-admission"},{"text":"November 2023 NBC News Poll","link":"/concepts/november-2023-nbc-news-poll"},{"text":"November 2023 US Emergency Visits to Ukraine","link":"/concepts/november-2023-us-emergency-visits-to-ukraine"},{"text":"Novocherkassk Strike","link":"/concepts/novocherkassk-strike"},{"text":"Nuclear Energy Pivot","link":"/concepts/nuclear-energy-pivot"},{"text":"Nuclear Microreactor","link":"/concepts/nuclear-microreactor"},{"text":"Nuclear Non-Proliferation Treaty","link":"/concepts/nuclear-non-proliferation-treaty"},{"text":"Nuclear Option (Senate Rules Change)","link":"/concepts/nuclear-option"},{"text":"Nuclear Renaissance","link":"/concepts/nuclear-renaissance"},{"text":"Nuclear Scare Event","link":"/concepts/nuclear-scare-event"},{"text":"Nuestra America Convoy","link":"/concepts/nuestra-america-convoy"},{"text":"Nutritious SNAP Act of 2025","link":"/concepts/nutritious-snap-act"},{"text":"Nvidia H20 China Sales Resumption","link":"/concepts/nvidia-h20-china-sales-resumption"},{"text":"o3 Shutdown Refusal Test","link":"/concepts/o3-shutdown-refusal-test"},{"text":"Oak Fire","link":"/concepts/oak-fire"},{"text":"Obama State Department Blocking of FBI Arrests Allegation","link":"/concepts/obama-state-department-blocking-of-fbi-arrests-allegation"},{"text":"Obama-Biden Lawfare Conspiracy Investigation","link":"/concepts/obama-biden-lawfare-conspiracy-investigation"},{"text":"Obama's 2023 Summer Reading List","link":"/concepts/obamas-2023-summer-reading-list"},{"text":"Obamacare Subsidy Lapse","link":"/concepts/obamacare-subsidy-lapse"},{"text":"Obergefell v. Hodges","link":"/concepts/obergefell-v-hodges"},{"text":"Obstruction of an Official Proceeding (18 U.S.C. 1512(c)(2))","link":"/concepts/obstruction-of-an-official-proceeding"},{"text":"October 2020 Intelligence Officials' Letter on the Hunter Biden Laptop","link":"/concepts/october-2020-intelligence-officials-letter-on-the-hunter-biden-laptop"},{"text":"October 2024 Iranian Missile Attack on Israel","link":"/concepts/october-2024-iranian-missile-attack-on-israel"},{"text":"October 2024 Migration and Jobs Comparison","link":"/concepts/october-2024-migration-and-jobs-comparison"},{"text":"October 2025 Federal Reductions in Force","link":"/concepts/october-2025-federal-reductions-in-force"},{"text":"October 2025 Government Shutdown","link":"/concepts/october-2025-government-shutdown"},{"text":"October 7 Attacks","link":"/concepts/october-7-attacks"},{"text":"Octopus Doctrine","link":"/concepts/octopus-doctrine"},{"text":"ODNI COVID-19 Origins Declassification (2026)","link":"/concepts/odni-covid-origins-declassification-2026"},{"text":"Odysseus Lunar Lander Mission","link":"/concepts/odysseus-lunar-lander-mission"},{"text":"Ohio House Bill 68","link":"/concepts/ohio-house-bill-68"},{"text":"Oklahoma City Bombing","link":"/concepts/oklahoma-city-bombing"},{"text":"Old Guard","link":"/concepts/old-guard"},{"text":"One Big Beautiful Bill Act","link":"/concepts/one-big-beautiful-bill-act"},{"text":"One-World Government","link":"/concepts/one-world-government"},{"text":"Online Safety Bill","link":"/concepts/online-safety-bill"},{"text":"Ontario Reagan Tariff Advertisement","link":"/concepts/ontario-reagan-tariff-advertisement"},{"text":"Open-Source Artificial Intelligence","link":"/concepts/open-source-artificial-intelligence"},{"text":"Operation Absolute Resolve","link":"/concepts/operation-absolute-resolve"},{"text":"Operation Arctic Endurance","link":"/concepts/operation-arctic-endurance"},{"text":"Operation Aurora (San Antonio, 2024)","link":"/concepts/operation-aurora"},{"text":"Operation Cyclone","link":"/concepts/operation-cyclone"},{"text":"Operation Economic Fury","link":"/concepts/operation-economic-fury"},{"text":"Operation Endgame","link":"/concepts/operation-endgame"},{"text":"Operation Epic Fury","link":"/concepts/operation-epic-fury"},{"text":"Operation Freedom to Breathe","link":"/concepts/operation-freedom-to-breathe"},{"text":"Operation Gideon","link":"/concepts/operation-gideon"},{"text":"Operation Gideon's Chariots","link":"/concepts/operation-gideons-chariots"},{"text":"Operation Gladio","link":"/concepts/operation-gladio"},{"text":"Operation Golden Dynamite","link":"/concepts/operation-golden-dynamite"},{"text":"Operation Metro Surge","link":"/concepts/operation-metro-surge"},{"text":"Operation Midas","link":"/concepts/operation-midas"},{"text":"Operation Midnight Hammer","link":"/concepts/operation-midnight-hammer"},{"text":"Operation Midway Blitz","link":"/concepts/operation-midway-blitz"},{"text":"Operation Mockingbird","link":"/concepts/operation-mockingbird"},{"text":"Operation Money Flight","link":"/concepts/operation-money-flight"},{"text":"Operation Northern Arrows","link":"/concepts/operation-northern-arrows"},{"text":"Operation Northmoor","link":"/concepts/operation-northmoor"},{"text":"Operation Paperclip","link":"/concepts/operation-paperclip"},{"text":"Operation Prosperity Guardian","link":"/concepts/operation-prosperity-guardian"},{"text":"Operation Spider's Web","link":"/concepts/operation-spiders-web"},{"text":"Operation Tidal Wave","link":"/concepts/operation-tidal-wave"},{"text":"Operation Warp Speed","link":"/concepts/operation-warp-speed"},{"text":"Oregon National Guard Deployment Lawsuit","link":"/concepts/oregon-national-guard-deployment-lawsuit"},{"text":"Organ Transplant System Overhaul","link":"/concepts/organ-transplant-system-overhaul"},{"text":"Organized Retail Theft","link":"/concepts/organized-retail-theft"},{"text":"Oslo Accords","link":"/concepts/oslo-accords"},{"text":"Ouster of Kevin McCarthy","link":"/concepts/ouster-of-kevin-mccarthy"},{"text":"Overtime Pay Tax Deduction","link":"/concepts/overtime-pay-tax-deduction"},{"text":"Overton Window","link":"/concepts/overton-window"},{"text":"Overton's Goalpost","link":"/concepts/overtons-goalpost"},{"text":"Pact of Diriyah","link":"/concepts/pact-of-diriyah"},{"text":"Pager Attack","link":"/concepts/pager-attack"},{"text":"Pahalgam Terror Attack","link":"/concepts/pahalgam-terror-attack"},{"text":"Pale of Settlement","link":"/concepts/pale-of-settlement"},{"text":"Palestinian Statehood","link":"/concepts/palestinian-statehood"},{"text":"Palisades Fire","link":"/concepts/palisades-fire"},{"text":"Palm Sunday","link":"/concepts/palm-sunday"},{"text":"Palmyra Attack on Iowa National Guard Members","link":"/concepts/palmyra-attack-on-iowa-national-guard-members"},{"text":"Pandemic Industrial Complex","link":"/concepts/pandemic-industrial-complex"},{"text":"Panic of 1893","link":"/concepts/panic-of-1893"},{"text":"Panic of 1907","link":"/concepts/panic-of-1907"},{"text":"Papal Conclave","link":"/concepts/papal-conclave"},{"text":"Paramount–Warner Bros. Discovery Merger","link":"/concepts/paramount-warner-bros-discovery-merger"},{"text":"Pardongate","link":"/concepts/pardongate"},{"text":"Parental Rights in Education Act","link":"/concepts/parental-rights-in-education-act"},{"text":"Paris Olympics 2024 Opening Ceremony","link":"/concepts/paris-olympics-2024-opening-ceremony"},{"text":"Parnell Square Stabbing","link":"/concepts/parnell-square-stabbing"},{"text":"Partial Truths","link":"/concepts/partial-truths"},{"text":"Patagonia Wildfires of 2026","link":"/concepts/patagonia-wildfires-2026"},{"text":"Patriot Act","link":"/concepts/patriot-act"},{"text":"Patriot Missile System","link":"/concepts/patriot-missile-system"},{"text":"Paul Pelosi Attack","link":"/concepts/paul-pelosi-attack"},{"text":"Pawtucket Ice Arena Shooting (2026)","link":"/concepts/pawtucket-ice-arena-shooting-2026"},{"text":"Pax Americana","link":"/concepts/pax-americana"},{"text":"Paxlovid","link":"/concepts/paxlovid"},{"text":"Pay to Slay","link":"/concepts/pay-to-slay"},{"text":"Pay-for-Play","link":"/concepts/pay-for-play"},{"text":"Peace of Westphalia","link":"/concepts/peace-of-westphalia"},{"text":"Pearl Harbor Remark Controversy","link":"/concepts/pearl-harbor-remark-controversy"},{"text":"Pediatric Gender Transition Treatment","link":"/concepts/pediatric-gender-transition-treatment"},{"text":"Pedophilia Normalization Agenda","link":"/concepts/pedophilia-normalization-agenda"},{"text":"Pegasus","link":"/concepts/pegasus"},{"text":"Pelican Island Causeway Barge Collision","link":"/concepts/pelican-island-causeway-barge-collision"},{"text":"PELOSI Act","link":"/concepts/pelosi-act"},{"text":"Pelosi Home Exorcism Claim","link":"/concepts/pelosi-home-exorcism-claim"},{"text":"Pence Classified Documents Discovery","link":"/concepts/pence-classified-documents-discovery"},{"text":"Penisgate (2026 Winter Olympics)","link":"/concepts/penisgate"},{"text":"Penn Treaty of 1682","link":"/concepts/penn-treaty-of-1682"},{"text":"Pentagon Pizza Index","link":"/concepts/pentagon-pizza-index"},{"text":"Pentagon Press Credentialing Policy (2025)","link":"/concepts/pentagon-press-credentialing-policy-2025"},{"text":"Pentagon Shutdown Contingency Guidance 2025","link":"/concepts/pentagon-shutdown-contingency-guidance-2025"},{"text":"Pentagon Sustained Campaign Planning Against Iran (2026)","link":"/concepts/pentagon-sustained-campaign-planning-against-iran-2026"},{"text":"Peregrine Mission One","link":"/concepts/peregrine-mission-one"},{"text":"Perestroika","link":"/concepts/perestroika"},{"text":"Petrodollar","link":"/concepts/petrodollar"},{"text":"Pezeshkian Resignation Hoax (2026)","link":"/concepts/pezeshkian-resignation-hoax-2026"},{"text":"Pfizer mRNA Flu Vaccine Trial Results","link":"/concepts/pfizer-mrna-flu-vaccine-trial-results"},{"text":"Phantom Space Strike","link":"/concepts/phantom-space-strike"},{"text":"Pharmaceutical Tariffs (2025)","link":"/concepts/pharmaceutical-tariffs-2025"},{"text":"Philadelphi Corridor","link":"/concepts/philadelphi-corridor"},{"text":"Phoenix Airport Migrant Bussing Story","link":"/concepts/phoenix-airport-migrant-bussing-story"},{"text":"Pig Butchering Scams","link":"/concepts/pig-butchering-scams"},{"text":"PITC Memorandum","link":"/concepts/pitc-memorandum"},{"text":"PizzaGate","link":"/concepts/pizzagate"},{"text":"Plasmic Echo","link":"/concepts/plasmic-echo"},{"text":"Pocket Rescissions","link":"/concepts/pocket-rescissions"},{"text":"Polar Silk Road","link":"/concepts/polar-silk-road"},{"text":"Politicised Dollar Liquidity","link":"/concepts/politicised-dollar-liquidity"},{"text":"Polselli v. Internal Revenue Service","link":"/concepts/polselli-v-internal-revenue-service"},{"text":"Polycrisis","link":"/concepts/polycrisis"},{"text":"Port Sudan Drone Attacks (2025)","link":"/concepts/port-sudan-drone-attacks-2025"},{"text":"Portable Mortgages","link":"/concepts/portable-mortgages"},{"text":"Posse Comitatus Act","link":"/concepts/posse-comitatus-act"},{"text":"Post-COVID Mass Shootings and State Gun Laws","link":"/concepts/post-covid-mass-shootings-and-state-gun-laws"},{"text":"Post-War Gaza Comprehensive Plan","link":"/concepts/post-war-gaza-comprehensive-plan"},{"text":"Postal Savings System","link":"/concepts/postal-savings-system"},{"text":"Powell Renovation Criminal Investigation","link":"/concepts/powell-renovation-criminal-investigation"},{"text":"Power of Siberia 2","link":"/concepts/power-of-siberia-2"},{"text":"Power Paradigm","link":"/concepts/power-paradigm"},{"text":"Prediction Markets","link":"/concepts/prediction-markets"},{"text":"Predictive Programming","link":"/concepts/predictive-programming"},{"text":"Preemptive Pardons","link":"/concepts/preemptive-pardons"},{"text":"Premierato","link":"/concepts/premierato"},{"text":"PREP Act","link":"/concepts/prep-act"},{"text":"President's Daily Brief","link":"/concepts/presidents-daily-brief"},{"text":"Presidential Citizens Medal","link":"/concepts/presidential-citizens-medal"},{"text":"Presidential Immunity","link":"/concepts/presidential-immunity"},{"text":"Presidential Medal of Freedom","link":"/concepts/presidential-medal-of-freedom"},{"text":"Presidential Records Act","link":"/concepts/presidential-records-act"},{"text":"Pressure Campaign for Biden's Withdrawal","link":"/concepts/pressure-campaign-for-bidens-withdrawal"},{"text":"Pressure From Above and Below","link":"/concepts/pressure-from-above-and-below"},{"text":"Price Floors Industrial Policy (2025)","link":"/concepts/price-floors-industrial-policy-2025"},{"text":"Primate Dominance Meta-Analysis","link":"/concepts/primate-dominance-meta-analysis"},{"text":"Prison Privatization","link":"/concepts/prison-privatization"},{"text":"Private Credit","link":"/concepts/private-credit"},{"text":"Pro-Palestinian Airport Caravan Protest (New York, 2023)","link":"/concepts/pro-palestinian-airport-caravan-protest"},{"text":"Process Formalism","link":"/concepts/process-formalism"},{"text":"Project 2025","link":"/concepts/project-2025"},{"text":"Project Esther","link":"/concepts/project-esther"},{"text":"Project Freedom","link":"/concepts/project-freedom"},{"text":"Project Homecoming","link":"/concepts/project-homecoming"},{"text":"Project Stargate","link":"/concepts/project-stargate"},{"text":"Project Verde","link":"/concepts/project-verde"},{"text":"PROMIS software","link":"/concepts/promis-software"},{"text":"Property Tax Relief Push of 2025","link":"/concepts/property-tax-relief-push-of-2025"},{"text":"Prosecutorial Immunity","link":"/concepts/prosecutorial-immunity"},{"text":"Protecting Americans from Foreign Adversary Controlled Applications Act","link":"/concepts/protecting-americans-from-foreign-adversary-controlled-applications-act"},{"text":"Protecting Americans in the IDF Act","link":"/concepts/protecting-americans-in-the-idf-act"},{"text":"Proximal Origin Paper","link":"/concepts/proximal-origin-paper"},{"text":"Prussia","link":"/concepts/prussia"},{"text":"Pskov Drone Attack","link":"/concepts/pskov-drone-attack"},{"text":"Public Banking Option","link":"/concepts/public-banking-option"},{"text":"Public Media Rescission of 2025","link":"/concepts/public-media-rescission-of-2025"},{"text":"Public Service Loan Forgiveness","link":"/concepts/public-service-loan-forgiveness"},{"text":"Purcell Principle","link":"/concepts/purcell-principle"},{"text":"PURSUE (Presidential Unsealing and Reporting System for UAP Encounters)","link":"/concepts/pursue"},{"text":"Q Operation","link":"/concepts/q-operation"},{"text":"Qana Gas Field","link":"/concepts/qana-gas-field"},{"text":"QAnon","link":"/concepts/qanon"},{"text":"QAnon Shaman Lawsuit Over Portland Deployment","link":"/concepts/qanon-shaman-lawsuit-over-portland-deployment"},{"text":"Qatar–Turkey Pipeline","link":"/concepts/qatar-turkey-pipeline"},{"text":"Qualitative Military Edge","link":"/concepts/qualitative-military-edge"},{"text":"Quantum Computing","link":"/concepts/quantum-computing"},{"text":"Quarterly Earnings Reporting","link":"/concepts/quarterly-earnings-reporting"},{"text":"Queer Theory","link":"/concepts/queer-theory"},{"text":"Qui Tam Lawsuit","link":"/concepts/qui-tam"},{"text":"Quid Pro Joe","link":"/concepts/quid-pro-joe"},{"text":"Rabbis' Open Letter on Gaza Hunger (2025)","link":"/concepts/rabbis-open-letter-on-gaza-hunger-2025"},{"text":"Racial Gerrymandering","link":"/concepts/racial-gerrymandering"},{"text":"Racketeer Influenced and Corrupt Organizations Act (RICO)","link":"/concepts/racketeer-influenced-and-corrupt-organizations-act"},{"text":"Rafah Invasion","link":"/concepts/rafah-invasion"},{"text":"Railway Safety Act of 2023","link":"/concepts/railway-safety-act-of-2023"},{"text":"Ranked Choice Voting","link":"/concepts/ranked-choice-voting"},{"text":"Rashidun Caliphate","link":"/concepts/rashidun-caliphate"},{"text":"Rasht-Astara Railway","link":"/concepts/rasht-astara-railway"},{"text":"Razor Blade Throat COVID-19 Resurgence","link":"/concepts/razor-blade-throat-covid-19-resurgence"},{"text":"REAL ID","link":"/concepts/real-id"},{"text":"Real-Time Crime Index","link":"/concepts/real-time-crime-index"},{"text":"Reality Collapse","link":"/concepts/reality-collapse"},{"text":"Reciprocal Trade Agreements Act of 1934","link":"/concepts/reciprocal-trade-agreements-act-of-1934"},{"text":"Recognition of Palestinian Statehood (2025)","link":"/concepts/recognition-of-palestinian-statehood-2025"},{"text":"Red Heifer","link":"/concepts/red-heifer"},{"text":"Red Mirage","link":"/concepts/red-mirage"},{"text":"Red Sea Shipping Crisis","link":"/concepts/red-sea-shipping-crisis"},{"text":"Reference Manual on Scientific Evidence","link":"/concepts/reference-manual-on-scientific-evidence"},{"text":"Reform Pharma","link":"/concepts/reform-pharma"},{"text":"REPO Act","link":"/concepts/repo-act"},{"text":"REPO for Ukrainians Act","link":"/concepts/repo-for-ukrainians-act"},{"text":"Republican Mail Ballot Deadline Lawsuits","link":"/concepts/republican-mail-ballot-deadline-lawsuits"},{"text":"Restrict Act","link":"/concepts/restrict-act"},{"text":"Retail Theft Wave","link":"/concepts/retail-theft-wave"},{"text":"Revenue Act of 1913","link":"/concepts/revenue-act-of-1913"},{"text":"Reverse Kissinger","link":"/concepts/reverse-kissinger"},{"text":"Revisionist Zionism","link":"/concepts/revisionist-zionism"},{"text":"Rheumatic immune-mediated inflammatory diseases and COVID-19 vaccines","link":"/concepts/rheumatic-immune-mediated-inflammatory-diseases-and-covid-19-vaccines"},{"text":"Rhodes Scholarship","link":"/concepts/rhodes-scholarship"},{"text":"Rich Men North of Richmond","link":"/concepts/rich-men-north-of-richmond"},{"text":"Righteous Russia","link":"/concepts/righteous-russia"},{"text":"RINO","link":"/concepts/rino"},{"text":"Ritz-Carlton Purge","link":"/concepts/ritz-carlton-purge"},{"text":"Robinson Preliminary Hearing Rulings (June 2026)","link":"/concepts/robinson-preliminary-hearing-rulings-june-2026"},{"text":"Roe v. Wade","link":"/concepts/roe-v-wade"},{"text":"Rome Statute","link":"/concepts/rome-statute"},{"text":"RS-28 Sarmat","link":"/concepts/rs-28-sarmat"},{"text":"Rule of Five","link":"/concepts/rule-of-five"},{"text":"Rule of Law","link":"/concepts/rule-of-law"},{"text":"Rules Based International Order","link":"/concepts/rules-based-international-order"},{"text":"Rural Digital Opportunity Fund","link":"/concepts/rural-digital-opportunity-fund"},{"text":"Russia-Ukraine War","link":"/concepts/russia-ukraine-war"},{"text":"Russia-Venezuela Strategic Partnership Law","link":"/concepts/russia-venezuela-strategic-partnership-law"},{"text":"Russia–Afghanistan Military Cooperation Agreement (2026)","link":"/concepts/russia-afghanistan-military-cooperation-agreement-2026"},{"text":"Russia–Iran Comprehensive Strategic Partnership Treaty","link":"/concepts/russia-iran-comprehensive-strategic-partnership-treaty"},{"text":"Russia–Ukraine Gas Transit Halt (2025)","link":"/concepts/russia-ukraine-gas-transit-halt-2025"},{"text":"Russiagate Hoax","link":"/concepts/russiagate-hoax"},{"text":"Russian High-Speed Rail Network","link":"/concepts/russian-high-speed-rail-network"},{"text":"Russian Invasion of Ukraine (Special Military Operation)","link":"/concepts/russian-invasion-of-ukraine"},{"text":"Russian Mediation of US-Iran Nuclear Talks","link":"/concepts/russian-mediation-of-us-iran-nuclear-talks"},{"text":"Russian Naval Base in Sudan","link":"/concepts/russian-naval-base-in-sudan"},{"text":"Russian Nuclear Doctrine","link":"/concepts/russian-nuclear-doctrine"},{"text":"Russian Nuclear Strike Plans Leak","link":"/concepts/russian-nuclear-strike-plans-leak"},{"text":"Russian Recognition of the Islamic Emirate of Afghanistan","link":"/concepts/russian-recognition-of-the-islamic-emirate-of-afghanistan"},{"text":"Russian Reset","link":"/concepts/russian-reset"},{"text":"Russian Space Nuclear Weapon Program","link":"/concepts/russian-space-nuclear-weapon-program"},{"text":"Russian Supreme Court LGBTQ Extremism Ruling","link":"/concepts/russian-supreme-court-lgbtq-extremism-ruling"},{"text":"Rust film set shooting","link":"/concepts/rust-film-set-shooting"},{"text":"S&P 500 Index","link":"/concepts/sp-500-index"},{"text":"Sabbateanism","link":"/concepts/sabbateanism"},{"text":"Safe Spaces","link":"/concepts/safe-spaces"},{"text":"Safe Third Country Asylum Agreements","link":"/concepts/safe-third-country-asylum-agreements"},{"text":"Salwa Canal","link":"/concepts/salwa-canal"},{"text":"San Juan de Urabá Mud Volcano Eruption","link":"/concepts/san-juan-de-uraba-mud-volcano"},{"text":"Sanctioning Russia Act","link":"/concepts/sanctioning-russia-act"},{"text":"Sanctions","link":"/concepts/sanctions"},{"text":"Sanctuary Cities and States","link":"/concepts/sanctuary-cities"},{"text":"Sanhedrin","link":"/concepts/sanhedrin"},{"text":"Sarbanes-Oxley Act","link":"/concepts/sarbanes-oxley-act"},{"text":"Satanic Principle of Inversion","link":"/concepts/satanic-inversion"},{"text":"Saudi F-35 Deal","link":"/concepts/saudi-f-35-deal"},{"text":"Saudi Peace Initiative","link":"/concepts/saudi-peace-initiative"},{"text":"Saudi Purge","link":"/concepts/saudi-purge"},{"text":"Saudi Vision 2030","link":"/concepts/saudi-vision-2030"},{"text":"Saudi-Pakistan Defense Pact","link":"/concepts/saudi-pakistan-defense-pact"},{"text":"SAVE Act","link":"/concepts/save-act"},{"text":"SAVE America Act","link":"/concepts/save-america-act"},{"text":"SAVE Plan Litigation","link":"/concepts/save-plan-litigation"},{"text":"SAVE Program","link":"/concepts/save-program"},{"text":"Saving Seoul","link":"/concepts/saving-seoul"},{"text":"SCAM Act","link":"/concepts/scam-act"},{"text":"Scarcity Paradigm","link":"/concepts/scarcity-paradigm"},{"text":"Schengen Area","link":"/concepts/schengen-area"},{"text":"Scientism","link":"/concepts/scientism"},{"text":"Sean Combs Federal Trial","link":"/concepts/sean-combs-federal-trial"},{"text":"Second Amendment","link":"/concepts/second-amendment"},{"text":"Second American Revolution","link":"/concepts/second-american-revolution"},{"text":"Second GOP Presidential Debate (2023)","link":"/concepts/second-gop-presidential-debate-2023"},{"text":"Second Inauguration of Donald Trump","link":"/concepts/second-inauguration-of-donald-trump"},{"text":"Section 117 of the Higher Education Act","link":"/concepts/section-117-higher-education-act"},{"text":"Section 122 of the Trade Act","link":"/concepts/section-122-of-the-trade-act"},{"text":"Section 230","link":"/concepts/section-230"},{"text":"Section 301 of the Trade Act of 1974","link":"/concepts/section-301-of-the-trade-act-of-1974"},{"text":"Section 702 of the Foreign Intelligence Surveillance Act","link":"/concepts/section-702"},{"text":"Secure America Act","link":"/concepts/secure-america-act"},{"text":"Secure Enclave (Program)","link":"/concepts/secure-enclave"},{"text":"Seditious Six","link":"/concepts/seditious-six"},{"text":"Seditious Six Video","link":"/concepts/seditious-six-video"},{"text":"Seedance 2.0","link":"/concepts/seedance-2-0"},{"text":"Seizure of the Tanker Marinera","link":"/concepts/seizure-of-the-tanker-marinera"},{"text":"Senate Bill 73 (California)","link":"/concepts/senate-bill-73"},{"text":"Senate Confirmation Process","link":"/concepts/senate-confirmation-process"},{"text":"Senate Dress Code","link":"/concepts/senate-dress-code"},{"text":"Senior Executive Service","link":"/concepts/senior-executive-service"},{"text":"Sensitive Compartmented Information Facility (SCIF)","link":"/concepts/sensitive-compartmented-information-facility"},{"text":"September 11 Attacks","link":"/concepts/september-11-attacks"},{"text":"September 2023 Government Shutdown Standoff","link":"/concepts/september-2023-government-shutdown-standoff"},{"text":"September 2023 Ukraine Supplemental Spending Request","link":"/concepts/september-2023-ukraine-supplemental-spending-request"},{"text":"September 2024 Federal Reserve Rate Cut","link":"/concepts/september-2024-fed-rate-cut"},{"text":"September 2025 Federal Reserve Rate Cut","link":"/concepts/september-2025-federal-reserve-rate-cut"},{"text":"Seventeenth Amendment","link":"/concepts/seventeenth-amendment"},{"text":"Shadow Banking Empire","link":"/concepts/shadow-banking-empire"},{"text":"Shadow Cabal","link":"/concepts/shadow-cabal"},{"text":"Shadow War","link":"/concepts/shadow-war"},{"text":"Shark Fin Template","link":"/concepts/shark-fin-template"},{"text":"Sharm el-Sheikh Gaza Signing Ceremony (2025)","link":"/concepts/sharm-el-sheikh-gaza-signing-ceremony-2025"},{"text":"Sherman Antitrust Act","link":"/concepts/sherman-antitrust-act"},{"text":"Shia Islam","link":"/concepts/shia-islam"},{"text":"Shield of the Americas","link":"/concepts/shield-of-the-americas"},{"text":"Shoulder-Fired Missiles","link":"/concepts/shoulder-fired-missiles"},{"text":"Siege of Leningrad","link":"/concepts/siege-of-leningrad"},{"text":"Signal (messaging application)","link":"/concepts/signal"},{"text":"Signalgate","link":"/concepts/signalgate"},{"text":"Signature Verification","link":"/concepts/signature-verification"},{"text":"SilkLink Project","link":"/concepts/silklink-project"},{"text":"Six Networks","link":"/concepts/six-networks"},{"text":"Sixteen Year Plan","link":"/concepts/sixteen-year-plan"},{"text":"Sixteenth Amendment","link":"/concepts/sixteenth-amendment"},{"text":"Sixth Amendment","link":"/concepts/sixth-amendment"},{"text":"Skid Row Voter Fraud Investigation","link":"/concepts/skid-row-voter-fraud-investigation"},{"text":"Slender Man Stabbing","link":"/concepts/slender-man-stabbing"},{"text":"Slovak Two-Sexes Constitutional Amendment","link":"/concepts/slovak-two-sexes-constitutional-amendment"},{"text":"Smackover Formation","link":"/concepts/smackover-formation"},{"text":"Small Modular Reactor","link":"/concepts/small-modular-reactor"},{"text":"Smith-Mundt Act","link":"/concepts/smith-mundt-act"},{"text":"Smotrich Doctrine","link":"/concepts/smotrich-doctrine"},{"text":"Smurfing","link":"/concepts/smurfing"},{"text":"Social Engineering","link":"/concepts/social-engineering"},{"text":"Social Media in Strategic Communication","link":"/concepts/social-media-in-strategic-communication"},{"text":"SOFR","link":"/concepts/sofr"},{"text":"Soros District Attorney Funding","link":"/concepts/soros-district-attorney-funding"},{"text":"Sortition","link":"/concepts/sortition"},{"text":"Sound of Freedom","link":"/concepts/sound-of-freedom"},{"text":"South Carolina Medicaid Planned Parenthood Case","link":"/concepts/south-carolina-medicaid-planned-parenthood-case"},{"text":"South Fork Dairy Explosion","link":"/concepts/south-fork-dairy-explosion"},{"text":"Southern Lebanon Annexation Proposal","link":"/concepts/southern-lebanon-annexation-proposal"},{"text":"Southport Riots","link":"/concepts/southport-riots"},{"text":"Sovereign Alliance","link":"/concepts/sovereign-alliance"},{"text":"Sovereign Disentanglement","link":"/concepts/sovereign-disentanglement"},{"text":"Sovereign Pincer","link":"/concepts/sovereign-pincer"},{"text":"Sovereign Trinity","link":"/concepts/sovereign-trinity"},{"text":"Space Data Network Backbone","link":"/concepts/space-data-network-backbone"},{"text":"Spanish Flu","link":"/concepts/spanish-flu"},{"text":"Spatial Disorientation","link":"/concepts/spatial-disorientation"},{"text":"Special Government Employee Status","link":"/concepts/special-government-employee"},{"text":"Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)","link":"/concepts/special-supplemental-nutrition-program-for-women-infants-and-children"},{"text":"Speech Laws","link":"/concepts/speech-laws"},{"text":"Spirit Cooking","link":"/concepts/spirit-cooking"},{"text":"SPLC Federal Fraud Prosecution","link":"/concepts/splc-federal-fraud-prosecution"},{"text":"Spot Bitcoin ETF Approval","link":"/concepts/spot-bitcoin-etf-approval"},{"text":"Springfield, Ohio Haitian Migrant Controversy","link":"/concepts/springfield-ohio-haitian-migrant-controversy"},{"text":"STABLE Act","link":"/concepts/stable-act"},{"text":"Stablecoin","link":"/concepts/stablecoin"},{"text":"Staff Accounting Bulletin 121","link":"/concepts/staff-accounting-bulletin-121"},{"text":"Stakeholder Capitalism","link":"/concepts/stakeholder-capitalism"},{"text":"Stand Down Orders","link":"/concepts/stand-down-orders"},{"text":"Standing and Jurisdiction","link":"/concepts/standing-and-jurisdiction"},{"text":"Starobelsk Dormitory Attack","link":"/concepts/starobelsk-dormitory-attack"},{"text":"Starshield","link":"/concepts/starshield"},{"text":"Starship Flight 11","link":"/concepts/starship-flight-11"},{"text":"START I","link":"/concepts/start-i"},{"text":"State Capture","link":"/concepts/state-capture"},{"text":"State Department Cuba Subversion Report (2026)","link":"/concepts/state-department-cuba-subversion-report-2026"},{"text":"State Department Dissent Memos on Israel Policy","link":"/concepts/state-department-dissent-memos-on-israel-policy"},{"text":"State Department Report on Cuban Support for Radical Left-Wing Activism","link":"/concepts/state-department-report-on-cuban-support-for-radical-left-wing-activism"},{"text":"State Funeral of Jimmy Carter","link":"/concepts/state-funeral-of-jimmy-carter"},{"text":"State Lawsuit Against DOGE (2025)","link":"/concepts/state-lawsuit-against-doge-2025"},{"text":"State of Georgia v. Trump, et al.","link":"/concepts/state-of-georgia-v-trump"},{"text":"State of the Union Address","link":"/concepts/state-of-the-union"},{"text":"State Sponsors of Terrorism List","link":"/concepts/state-sponsors-of-terrorism-list"},{"text":"Steadfast Defender Exercise","link":"/concepts/steadfast-defender-exercise"},{"text":"Steele Dossier","link":"/concepts/steele-dossier"},{"text":"Stockholm Syndrome (political usage)","link":"/concepts/stockholm-syndrome"},{"text":"Stockton 7-Eleven Shoplifting Takedown","link":"/concepts/stockton-7-eleven-shoplifting-takedown"},{"text":"Stop Cop City","link":"/concepts/stop-cop-city"},{"text":"Stop WOKE Act","link":"/concepts/stop-woke-act"},{"text":"Storm Shadow Missile","link":"/concepts/storm-shadow-missile"},{"text":"Strait of Hormuz","link":"/concepts/strait-of-hormuz"},{"text":"Strategic Petroleum Reserve","link":"/concepts/strategic-petroleum-reserve"},{"text":"Strategy of Tension","link":"/concepts/strategy-of-tension"},{"text":"Strengthening American Leadership in Digital Financial Technology","link":"/concepts/strengthening-american-leadership-in-digital-financial-technology"},{"text":"Student Loan Wage Garnishment (2026)","link":"/concepts/student-loan-wage-garnishment"},{"text":"Studio 8 Hair Lab Discrimination Charge","link":"/concepts/studio-8-hair-lab-discrimination-charge"},{"text":"Suicide Dolphins Narrative","link":"/concepts/suicide-dolphins-narrative"},{"text":"Summer of Strikes (2023)","link":"/concepts/summer-of-strikes-2023"},{"text":"Sunni Islam","link":"/concepts/sunni-islam"},{"text":"Supplemental Nutrition Assistance Program","link":"/concepts/supplemental-nutrition-assistance-program"},{"text":"Supplemental Nutrition Assistance Program (SNAP)","link":"/concepts/snap"},{"text":"Supreme Court Emergency Docket","link":"/concepts/supreme-court-emergency-docket"},{"text":"Supreme Court IEEPA Tariff Ruling (February 2026)","link":"/concepts/supreme-court-ieepa-tariff-ruling-2026"},{"text":"Suspicious Activity Report","link":"/concepts/suspicious-activity-report"},{"text":"Sustainable Development Goals","link":"/concepts/sustainable-development-goals"},{"text":"Swatting","link":"/concepts/swatting"},{"text":"Sword Dance","link":"/concepts/sword-dance"},{"text":"Sykes-Picot Agreement","link":"/concepts/sykes-picot-agreement"},{"text":"Syria Sanctions","link":"/concepts/syria-sanctions"},{"text":"Syria–Turkey Counterterrorism Cooperation (2025)","link":"/concepts/syria-turkey-counterterrorism-cooperation-2025"},{"text":"Syriac Palimpsest Bible Chapter Discovery","link":"/concepts/syriac-palimpsest-bible-chapter-discovery"},{"text":"System of Systems","link":"/concepts/system-of-systems"},{"text":"Systemic Racism and Urban Wildlife Study","link":"/concepts/systemic-racism-urban-wildlife-study"},{"text":"TACO Tuesday","link":"/concepts/taco-tuesday"},{"text":"Take It Down Act","link":"/concepts/take-it-down-act"},{"text":"Take Our Border Back Convoy","link":"/concepts/take-our-border-back-convoy"},{"text":"Takings Clause","link":"/concepts/takings-clause"},{"text":"Talisman Sabre","link":"/concepts/talisman-sabre"},{"text":"Target Pride Collection Boycott","link":"/concepts/target-pride-collection-boycott"},{"text":"Task Force on the Declassification of Federal Secrets","link":"/concepts/task-force-on-the-declassification-of-federal-secrets"},{"text":"Tax Relief for American Families and Workers Act","link":"/concepts/tax-relief-for-american-families-and-workers-act"},{"text":"Tax-Free Tips Proposal","link":"/concepts/tax-free-tips"},{"text":"Taxpayer Theft","link":"/concepts/taxpayer-theft"},{"text":"Taybeh Settler Attacks","link":"/concepts/taybeh-settler-attacks"},{"text":"Technological Singularity","link":"/concepts/technological-singularity"},{"text":"Tel Aviv LGBTQ Festival (2026)","link":"/concepts/tel-aviv-lgbtq-festival-2026"},{"text":"Temporary Protected Status","link":"/concepts/temporary-protected-status"},{"text":"Terminally Ill Adults (End of Life) Bill","link":"/concepts/terminally-ill-adults-end-of-life-bill"},{"text":"Tesla Takedown","link":"/concepts/tesla-takedown"},{"text":"Tether Investment in Rumble","link":"/concepts/tether-investment-in-rumble"},{"text":"Texas Border Wall Materials Sale","link":"/concepts/texas-border-wall-materials-sale"},{"text":"Texas Deceptive Trade Practices Act","link":"/concepts/texas-deceptive-trade-practices-act"},{"text":"Texas Investigation of COVID-19 Vaccine Manufacturers","link":"/concepts/texas-investigation-of-covid-19-vaccine-manufacturers"},{"text":"Texas v. Pennsylvania","link":"/concepts/texas-v-pennsylvania"},{"text":"Texas v. Pfizer COVID-19 Vaccine Lawsuit","link":"/concepts/texas-v-pfizer-covid-19-vaccine-lawsuit"},{"text":"THAAD (Terminal High Altitude Area Defense)","link":"/concepts/thaad"},{"text":"The Antichrist","link":"/concepts/the-antichrist"},{"text":"The Apprentice","link":"/concepts/the-apprentice"},{"text":"The Beast","link":"/concepts/the-beast"},{"text":"The Blitz","link":"/concepts/badlands-blitz"},{"text":"The Blitz","link":"/concepts/the-blitz"},{"text":"The Blob","link":"/concepts/the-blob"},{"text":"The Cult of Morpheus","link":"/concepts/the-cult-of-morpheus"},{"text":"The Darkest Path","link":"/concepts/the-darkest-path"},{"text":"The Family (documentary)","link":"/concepts/the-family"},{"text":"The Godfather","link":"/concepts/the-godfather"},{"text":"The Grand Chessboard","link":"/concepts/the-grand-chessboard"},{"text":"The Great Red vs. Blue State Debate","link":"/concepts/great-red-vs-blue-state-debate"},{"text":"The Honeypot Hoax","link":"/concepts/honeypot-hoax"},{"text":"The Hunt for Red October","link":"/concepts/the-hunt-for-red-october"},{"text":"The Iranian Knot","link":"/concepts/the-iranian-knot"},{"text":"The Narrative","link":"/concepts/the-narrative"},{"text":"The New Climate Denial Report","link":"/concepts/the-new-climate-denial-report"},{"text":"The Power of the Powerless","link":"/concepts/the-power-of-the-powerless"},{"text":"The Rapture","link":"/concepts/the-rapture"},{"text":"The Situation Room (Polymarket bar)","link":"/concepts/situation-room-bar"},{"text":"The Starfish and the Spider","link":"/concepts/the-starfish-and-the-spider"},{"text":"The Sum of All Fears","link":"/concepts/the-sum-of-all-fears"},{"text":"The Tribulation","link":"/concepts/the-tribulation"},{"text":"Third Temple","link":"/concepts/third-temple"},{"text":"Thrombosis with Thrombocytopenia Syndrome","link":"/concepts/thrombosis-with-thrombocytopenia-syndrome"},{"text":"Tianjin Declaration","link":"/concepts/tianjin-declaration"},{"text":"Tigers and Flies Campaign","link":"/concepts/tigers-and-flies-campaign"},{"text":"TikTok Ban","link":"/concepts/tiktok-ban"},{"text":"TikTok US Joint Venture Deal","link":"/concepts/tiktok-us-joint-venture-deal"},{"text":"Tim Walz Military Service Controversy","link":"/concepts/tim-walz-military-service-controversy"},{"text":"Timber Sycamore","link":"/concepts/timber-sycamore"},{"text":"Time Person of the Year","link":"/concepts/time-person-of-the-year"},{"text":"Tina Peters Appeal Ruling 2026","link":"/concepts/tina-peters-appeal-ruling-2026"},{"text":"Title 42","link":"/concepts/title-42"},{"text":"Title IX","link":"/concepts/title-ix"},{"text":"Tongo Tongo Ambush","link":"/concepts/tongo-tongo-ambush"},{"text":"Toronto Protocols","link":"/concepts/toronto-protocols"},{"text":"Toronto Rain Tax","link":"/concepts/toronto-rain-tax"},{"text":"Torture Victim Protection Act","link":"/concepts/torture-victim-protection-act"},{"text":"Tower 22 Drone Attack","link":"/concepts/tower-22-drone-attack"},{"text":"Trade Act of 1974","link":"/concepts/trade-act-of-1974"},{"text":"Trade Expansion Act of 1962","link":"/concepts/trade-expansion-act-of-1962"},{"text":"Trail of Tears","link":"/concepts/trail-of-tears"},{"text":"Transgender Athletes","link":"/concepts/transgender-athletes"},{"text":"Transgender Day of Visibility","link":"/concepts/transgender-day-of-visibility"},{"text":"Transgender Military Ban","link":"/concepts/transgender-military-ban"},{"text":"Transhausen by Proxy","link":"/concepts/transhausen-by-proxy"},{"text":"Transhumanism","link":"/concepts/transhumanism"},{"text":"Transition Integrity Project","link":"/concepts/transition-integrity-project"},{"text":"Treasury General Account","link":"/concepts/treasury-general-account"},{"text":"Truman Doctrine","link":"/concepts/truman-doctrine"},{"text":"Trump 2020 Election Case Gag Order","link":"/concepts/trump-2020-election-case-gag-order"},{"text":"Trump Accounts","link":"/concepts/trump-accounts"},{"text":"Trump AI Action Plan","link":"/concepts/trump-ai-action-plan"},{"text":"Trump All-Tariff Policy Proposal (2024)","link":"/concepts/trump-all-tariff-policy-proposal"},{"text":"Trump Broadcast License Revocation Controversy (2026)","link":"/concepts/trump-broadcast-license-revocation-controversy-2026"},{"text":"Trump Cartel Land Strike Proposal","link":"/concepts/trump-cartel-land-strike-proposal"},{"text":"Trump Classified Documents Case","link":"/concepts/trump-classified-documents-case"},{"text":"Trump Classified Map Investigation","link":"/concepts/trump-classified-map-investigation"},{"text":"Trump Comms","link":"/concepts/trump-comms"},{"text":"Trump Firing Squad Execution Proposal","link":"/concepts/trump-firing-squad-execution-proposal"},{"text":"Trump Hush-Money Case","link":"/concepts/trump-hush-money-case"},{"text":"Trump Inaugural Fund Donations (2025)","link":"/concepts/trump-inaugural-fund-donations"},{"text":"Trump January 6 Federal Indictment","link":"/concepts/trump-january-6-indictment"},{"text":"Trump JFK Transparency Campaign Video (January 2024)","link":"/concepts/trump-jfk-transparency-campaign-video"},{"text":"Trump Media–TAE Technologies Fusion Merger","link":"/concepts/trump-media-tae-technologies-fusion-merger"},{"text":"Trump Route for International Peace and Prosperity","link":"/concepts/trump-route-for-international-peace-and-prosperity"},{"text":"Trump Tax Exemption Proposals for Military and First Responders","link":"/concepts/trump-tax-exemption-proposals-for-military-and-first-responders"},{"text":"Trump Transition","link":"/concepts/trump-transition"},{"text":"Trump Transition Security Clearance Plan","link":"/concepts/trump-transition-security-clearance-plan"},{"text":"Trump Twitter Search Warrant","link":"/concepts/trump-twitter-search-warrant"},{"text":"Trump Ukraine Peace Plan","link":"/concepts/trump-ukraine-peace-plan"},{"text":"Trump Universal Tariff Plan","link":"/concepts/trump-universal-tariff-plan"},{"text":"Trump v. Barbara","link":"/concepts/trump-v-barbara"},{"text":"Trump v. Slaughter","link":"/concepts/trump-v-slaughter"},{"text":"Trump v. United States","link":"/concepts/trump-v-united-states"},{"text":"Trump-class Battleship","link":"/concepts/trump-class-battleship"},{"text":"Trump-Musk Narrative Pincer","link":"/concepts/trump-musk-narrative-pincer"},{"text":"Trump–Musk Feud (2025)","link":"/concepts/trump-musk-feud-2025"},{"text":"Trump's Discombobulator","link":"/concepts/trumps-discombobulator"},{"text":"TrumpaMania","link":"/concepts/trumpamania"},{"text":"Trumponomics","link":"/concepts/trumponomics"},{"text":"Truncated mRNA","link":"/concepts/truncated-mrna"},{"text":"Truth Community","link":"/concepts/truth-community"},{"text":"TSA Shoe Removal Policy","link":"/concepts/tsa-shoe-removal-policy"},{"text":"Tucker Carlson Departure from Fox News","link":"/concepts/tucker-carlson-departure-from-fox-news"},{"text":"Tucker Carlson–Putin Interview","link":"/concepts/tucker-carlson-putin-interview"},{"text":"Tucker on Twitter","link":"/concepts/tucker-on-twitter"},{"text":"Tulsi Gabbard Whistleblower Complaint Allegation","link":"/concepts/tulsi-gabbard-whistleblower-complaint-allegation"},{"text":"Tumbler Ridge School Shooting (2026)","link":"/concepts/tumbler-ridge-school-shooting-2026"},{"text":"Turkish F-35 Sale Dispute","link":"/concepts/turkish-f-35-sale-dispute"},{"text":"Türkiye Asset Freezes on Iran (2025)","link":"/concepts/turkiye-asset-freezes-on-iran-2025"},{"text":"Türkiye F-35 Delivery Dispute","link":"/concepts/turkiye-f-35-delivery-dispute"},{"text":"Twelve Day War","link":"/concepts/twelve-day-war"},{"text":"Twenty-Fifth Amendment","link":"/concepts/twenty-fifth-amendment"},{"text":"Twenty-Second Amendment Third-Term Loophole","link":"/concepts/twenty-second-amendment-third-term-loophole"},{"text":"Twitter Files","link":"/concepts/twitter-files"},{"text":"Twitter Rebrand to X","link":"/concepts/twitter-rebrand-to-x"},{"text":"Two-State Solution","link":"/concepts/two-state-solution"},{"text":"Tylenol","link":"/concepts/tylenol"},{"text":"U.S. Security State","link":"/concepts/us-security-state"},{"text":"U.S. Troop Withdrawal from Germany (2026)","link":"/concepts/us-troop-withdrawal-from-germany-2026"},{"text":"U.S.-Funded Biological Laboratories Abroad","link":"/concepts/us-funded-biological-laboratories-abroad"},{"text":"U.S.–Ukraine Minerals Agreement","link":"/concepts/us-ukraine-minerals-agreement"},{"text":"UFC 287","link":"/concepts/ufc-287"},{"text":"UFC Freedom 250","link":"/concepts/ufc-freedom-250"},{"text":"UK Grooming Gangs Scandal","link":"/concepts/grooming-gangs"},{"text":"UK Military Stockpile Depletion","link":"/concepts/uk-military-stockpile-depletion"},{"text":"UK–Ukraine 100 Year Partnership","link":"/concepts/uk-ukraine-100-year-partnership"},{"text":"Ukraine Aid Funding Controversy","link":"/concepts/ukraine-aid-funding-controversy"},{"text":"Ukraine as a Western Weapons Laboratory","link":"/concepts/ukraine-as-a-western-weapons-laboratory"},{"text":"Ukraine Long-Range Missile Debate","link":"/concepts/ukraine-long-range-missile-debate"},{"text":"Ukraine Nuclear Transfer Proposal","link":"/concepts/ukraine-nuclear-transfer-proposal"},{"text":"Ukraine Security Assistance Initiative","link":"/concepts/ukraine-security-assistance-initiative"},{"text":"Ukrainian Drone Program","link":"/concepts/ukrainian-drone-program"},{"text":"Ukrainian Grain Trafficking Dispute","link":"/concepts/ukrainian-grain-trafficking-dispute"},{"text":"Ukrainian Mobilization Crisis","link":"/concepts/ukrainian-mobilization-crisis"},{"text":"Ultra-Millionaire Tax Act","link":"/concepts/ultra-millionaire-tax-act"},{"text":"Ultra-Orthodox Conscription in Israel","link":"/concepts/ultra-orthodox-conscription-in-israel"},{"text":"Uman Rosh Hashanah pilgrimage","link":"/concepts/uman-rosh-hashanah-pilgrimage"},{"text":"UN Declaration of Human Rights","link":"/concepts/universal-declaration-of-human-rights"},{"text":"Unaccompanied Migrant Children","link":"/concepts/unaccompanied-migrant-children"},{"text":"Unacknowledged Special Access Programs","link":"/concepts/unacknowledged-special-access-programs"},{"text":"Uncommitted Movement","link":"/concepts/uncommitted-movement"},{"text":"Undersea Cable Sabotage","link":"/concepts/undersea-cable-sabotage"},{"text":"Unidentified Anomalous Phenomena","link":"/concepts/unidentified-anomalous-phenomena"},{"text":"Uniform Code of Military Justice","link":"/concepts/uniform-code-of-military-justice"},{"text":"Uniformed and Overseas Citizens Absentee Voting Act","link":"/concepts/uocava"},{"text":"Uniparty","link":"/concepts/uniparty"},{"text":"Unite the Kingdom Rally","link":"/concepts/unite-the-kingdom-rally"},{"text":"United Airlines Flight 202 Wheel Well Death","link":"/concepts/united-airlines-flight-202-wheel-well-death"},{"text":"United Nations Security Council Resolution 2803","link":"/concepts/un-security-council-resolution-2803"},{"text":"United States as a Federal Corporation","link":"/concepts/united-states-federal-corporation"},{"text":"United States Constitution","link":"/concepts/us-constitution"},{"text":"United States Mental Health System","link":"/concepts/united-states-mental-health-system"},{"text":"United States Sovereign Wealth Fund","link":"/concepts/united-states-sovereign-wealth-fund"},{"text":"United States v. Apple Antitrust Case","link":"/concepts/united-states-v-apple-antitrust-case"},{"text":"United States v. Google Antitrust Trial","link":"/concepts/united-states-v-google-antitrust-trial"},{"text":"United States v. Hasbajrami","link":"/concepts/united-states-v-hasbajrami"},{"text":"United States v. Nixon","link":"/concepts/united-states-v-nixon"},{"text":"United States v. Skrmetti","link":"/concepts/united-states-v-skrmetti"},{"text":"United States v. Wong Kim Ark","link":"/concepts/united-states-v-wong-kim-ark"},{"text":"United States-Israel Defense Technology Cooperation Initiative","link":"/concepts/united-states-israel-defense-technology-cooperation-initiative"},{"text":"United States–Mexico–Canada Agreement (USMCA)","link":"/concepts/usmca"},{"text":"Universal Injunction","link":"/concepts/universal-injunction"},{"text":"Universal Service Fund","link":"/concepts/universal-service-fund"},{"text":"Uranium One Deal","link":"/concepts/uranium-one-deal"},{"text":"US and Israeli Targeted Killings in Syria and Lebanon (July 2025)","link":"/concepts/us-israeli-targeted-killings-in-syria-and-lebanon-2025"},{"text":"US Biological Warfare Presence in Africa","link":"/concepts/us-biological-warfare-presence-in-africa"},{"text":"US Bitcoin Strategic Reserve","link":"/concepts/us-bitcoin-strategic-reserve"},{"text":"US Energy Cartel","link":"/concepts/us-energy-cartel"},{"text":"US Federal Debt Interest Crisis","link":"/concepts/us-federal-debt-interest-crisis"},{"text":"US Precision Strike Planning Against Iran (2026)","link":"/concepts/us-precision-strike-planning-against-iran-2026"},{"text":"US Push to Acquire Greenland (2026)","link":"/concepts/us-push-to-acquire-greenland-2026"},{"text":"US Sanctions Campaign Against Russian Oligarch Networks","link":"/concepts/us-sanctions-campaign-against-russian-oligarch-networks"},{"text":"US Treasury Department Hack (2024)","link":"/concepts/us-treasury-department-hack-2024"},{"text":"US Withdrawal From 66 International Organizations","link":"/concepts/us-withdrawal-from-66-international-organizations"},{"text":"US-Australia Critical Minerals Agreement","link":"/concepts/us-australia-critical-minerals-agreement"},{"text":"US-China Trade War (2025)","link":"/concepts/us-china-trade-war-2025"},{"text":"US-Europe Trade Tensions","link":"/concepts/us-europe-trade-tensions"},{"text":"US-Funded Global Biolab Program","link":"/concepts/us-funded-global-biolab-program"},{"text":"US-Iran Lebanon Oversight Mechanism","link":"/concepts/us-iran-lebanon-oversight-mechanism"},{"text":"US-Japan Critical Minerals Agreement","link":"/concepts/us-japan-critical-minerals-agreement"},{"text":"US-Japan Energy and Nuclear Agreement 2026","link":"/concepts/us-japan-energy-and-nuclear-agreement-2026"},{"text":"US-Saudi Mutual Defense Treaty Talks","link":"/concepts/us-saudi-mutual-defense-treaty-talks"},{"text":"US-Saudi-Israeli Normalization Pact Talks","link":"/concepts/us-saudi-israeli-normalization-pact-talks"},{"text":"US–DR Congo Critical Minerals Deal","link":"/concepts/us-dr-congo-critical-minerals-deal"},{"text":"US–Houthi Ceasefire Announcement (2025)","link":"/concepts/us-houthi-ceasefire-announcement-2025"},{"text":"US–Iran Memorandum of Understanding","link":"/concepts/us-iran-memorandum-of-understanding"},{"text":"US–Saudi Civilian Nuclear Cooperation Agreement","link":"/concepts/us-saudi-civilian-nuclear-cooperation-agreement"},{"text":"US–Saudi Plan B Agreements","link":"/concepts/us-saudi-plan-b-agreements"},{"text":"US–Türkiye Memorandum of Understanding on Strategic Civil Nuclear Cooperation","link":"/concepts/us-turkiye-memorandum-on-strategic-civil-nuclear-cooperation"},{"text":"US–Ukraine Bilateral Security Agreement (2024)","link":"/concepts/us-ukraine-bilateral-security-agreement-2024"},{"text":"US–Vietnam Trade Agreement (2025)","link":"/concepts/us-vietnam-trade-agreement-2025"},{"text":"USS Liberty Incident","link":"/concepts/uss-liberty-incident"},{"text":"Uvalde School Shooting","link":"/concepts/uvalde-school-shooting"},{"text":"Vaccine Adverse Event Reporting System","link":"/concepts/vaccine-adverse-event-reporting-system"},{"text":"Vatican Border Penalties Decree","link":"/concepts/vatican-border-penalties-decree"},{"text":"Vaxzevria","link":"/concepts/vaxzevria"},{"text":"Venezuela Amnesty Law (2026)","link":"/concepts/venezuela-amnesty-law"},{"text":"Venezuela Model","link":"/concepts/venezuela-model"},{"text":"Venezuela War Powers Resolution","link":"/concepts/venezuela-war-powers-resolution"},{"text":"Venezuelan Devolution","link":"/concepts/venezuelan-devolution"},{"text":"Venezuelan Oil Sector Liberalization (2026)","link":"/concepts/venezuelan-oil-sector-liberalization-2026"},{"text":"Victory Day (Russia)","link":"/concepts/victory-day"},{"text":"Vietnam War","link":"/concepts/vietnam-war"},{"text":"Virginia Commonwealth's Attorney","link":"/concepts/virginia-commonwealths-attorney"},{"text":"Virginia Executive Order 35","link":"/concepts/virginia-executive-order-35"},{"text":"Virginia Redistricting Referendum (2026)","link":"/concepts/virginia-redistricting-referendum-2026"},{"text":"Vision 2030","link":"/concepts/vision-2030"},{"text":"Volhynia Massacres","link":"/concepts/volhynia-massacres"},{"text":"Voter Citizenship Checks Executive Order","link":"/concepts/voter-citizenship-executive-order"},{"text":"Voter Roll–Immigration Data Sharing","link":"/concepts/voter-roll-immigration-data-sharing"},{"text":"Voters Strike Back (NYU Social Justice Law Review, 2015)","link":"/concepts/voters-strike-back"},{"text":"Voting Rights Act of 1965","link":"/concepts/voting-rights-act-of-1965"},{"text":"Wagner Group Mutiny","link":"/concepts/wagner-group-mutiny"},{"text":"Wahhabism","link":"/concepts/wahhabism"},{"text":"Walmart DEI Rollback","link":"/concepts/walmart-dei-rollback"},{"text":"War Economy","link":"/concepts/war-economy"},{"text":"War Is a Racket","link":"/concepts/war-is-a-racket"},{"text":"War on Fraud","link":"/concepts/war-on-fraud"},{"text":"War on Terror","link":"/concepts/war-on-terror"},{"text":"War on the Family","link":"/concepts/war-on-the-family"},{"text":"Warrior Dividends","link":"/concepts/warrior-dividends"},{"text":"Washington DC Search Trend Panic (2025)","link":"/concepts/washington-dc-search-trend-panic"},{"text":"Weaponization Fund","link":"/concepts/weaponization-fund"},{"text":"Weaponization of Government","link":"/concepts/weaponization-of-government"},{"text":"Weimar+ Statement","link":"/concepts/weimar-plus-statement"},{"text":"West Bank Annexation","link":"/concepts/west-bank-annexation"},{"text":"West Bloomfield Synagogue Attack","link":"/concepts/west-bloomfield-synagogue-attack"},{"text":"WHCA Dinner Assassination Attempt Prosecution","link":"/concepts/whca-dinner-assassination-attempt-prosecution"},{"text":"White House Ballroom","link":"/concepts/white-house-ballroom"},{"text":"White House Cocaine Incident","link":"/concepts/white-house-cocaine-incident"},{"text":"White House Correspondents' Association Dinner","link":"/concepts/white-house-correspondents-association-dinner"},{"text":"White House Digital Asset Summit","link":"/concepts/white-house-digital-asset-summit"},{"text":"White House Election Integrity Portal","link":"/concepts/white-house-election-integrity-portal"},{"text":"White House January 6 Webpage","link":"/concepts/white-house-january-6-webpage"},{"text":"White House Underground Complex","link":"/concepts/white-house-underground-complex"},{"text":"White Rural Rage","link":"/concepts/white-rural-rage"},{"text":"White Squall (Q Comm)","link":"/concepts/white-squall"},{"text":"Whitmer Kidnapping Plot Trials","link":"/concepts/whitmer-kidnapping-plot-trials"},{"text":"WHO Pandemic Accord","link":"/concepts/who-pandemic-accord"},{"text":"Why We Vote","link":"/concepts/why-we-vote"},{"text":"Williams v. Florida","link":"/concepts/williams-v-florida"},{"text":"Willis–Wade Cell Phone Records Filing (2024)","link":"/concepts/willis-wade-cell-phone-records-filing"},{"text":"Wireless Festival","link":"/concepts/wireless-festival"},{"text":"Witkoff Framework","link":"/concepts/witkoff-framework"},{"text":"Woke Capital","link":"/concepts/woke-capital"},{"text":"Woke Conditioning","link":"/concepts/woke-conditioning"},{"text":"Wonsan Kalma","link":"/concepts/wonsan-kalma"},{"text":"Wonsan-Kalma Tourist Zone","link":"/concepts/wonsan-kalma-tourist-zone"},{"text":"Working Families Tax Cuts Act","link":"/concepts/working-families-tax-cuts-act"},{"text":"Workplace Brain Monitoring","link":"/concepts/workplace-brain-monitoring"},{"text":"World Happiness Report","link":"/concepts/world-happiness-report"},{"text":"World Press Freedom Day","link":"/concepts/world-press-freedom-day"},{"text":"WPATH Standards of Care","link":"/concepts/wpath-standards-of-care"},{"text":"Wrap-Up Smear","link":"/concepts/wrap-up-smear"},{"text":"WSJ Report on Elon Musk's Drug Use","link":"/concepts/wsj-report-on-elon-musks-drug-use"},{"text":"WWE–UFC Merger","link":"/concepts/wwe-ufc-merger"},{"text":"X Corp. v. Media Matters","link":"/concepts/x-corp-v-media-matters"},{"text":"Xenotransplantation","link":"/concepts/xenotransplantation"},{"text":"Yalta European Strategy Conference","link":"/concepts/yalta-european-strategy-conference"},{"text":"Yellow Vest Movement","link":"/concepts/yellow-vest-movement"},{"text":"Yom Kippur War","link":"/concepts/yom-kippur-war"},{"text":"Yonkers Paternity Test Abortion Lawsuit","link":"/concepts/yonkers-paternity-test-abortion-lawsuit"},{"text":"YouTube Settlement of Trump Lawsuit","link":"/concepts/youtube-settlement-of-trump-lawsuit"},{"text":"Zambian kwacha","link":"/concepts/zambian-kwacha"},{"text":"Zangezur Corridor","link":"/concepts/zangezur-corridor"},{"text":"Zarqa Al Yamama","link":"/concepts/zarqa-al-yamama"},{"text":"Zelensky NATO-or-Nuclear-Weapons Demand","link":"/concepts/zelensky-nato-or-nuclear-weapons-demand"},{"text":"Zero Trust","link":"/concepts/zero-trust"},{"text":"Zero-Based Budgeting","link":"/concepts/zero-based-budgeting"},{"text":"Zionism","link":"/concepts/zionism"},{"text":"Zircon Hypersonic Missile","link":"/concepts/zircon-hypersonic-missile"},{"text":"Zuckerberg Hawaii Bunker","link":"/concepts/zuckerberg-hawaii-bunker"}]}],"search":{"provider":"local","options":{"translations":{"button":{"buttonText":"Search","buttonAriaLabel":"Search"}}}},"footer":{"message":"Sourced from the Badlands Media corpus. Content reflects the views of the original authors."}},"locales":{},"scrollOffset":134,"cleanUrls":true}`));
const __vite_import_meta_env__ = {};
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[?#].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "404.md",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, "").replace(INDEX_OR_EXT_RE, "$1");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function getLocaleForPath(siteData2, relativePath) {
  return Object.keys((siteData2 == null ? void 0 : siteData2.locales) || {}).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = getLocaleForPath(siteData2, relativePath);
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = /* @__PURE__ */ new Set();
function treatAsHtml(filename) {
  var _a;
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts = typeof process === "object" && ((_a = process.env) == null ? void 0 : _a.VITE_EXTRA_EXTENSIONS) || (__vite_import_meta_env__ == null ? void 0 : __vite_import_meta_env__.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(",").forEach((ext2) => KNOWN_EXTENSIONS.add(ext2));
  }
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
function escapeRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance === "force-auto" ? usePreferredDark() : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => appearance === "dark" ? "dark" : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  const hashRef = ref(inBrowser ? location.hash : "");
  if (inBrowser) {
    window.addEventListener("hashchange", () => {
      hashRef.value = location.hash;
    });
  }
  watch(() => route.data, () => {
    hashRef.value = inBrowser ? location.hash : "";
  });
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark,
    hash: computed(() => hashRef.value)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    if (inBrowser && href !== normalizeHref(location.href)) {
      history.replaceState({ scrollPosition: window.scrollY }, "");
      history.pushState({}, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChange ?? router.onAfterRouteChanged) == null ? void 0 : _b(href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a, _b;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        await ((_b = router.onAfterPageLoad) == null ? void 0 : _b.call(router, href));
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState({}, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        const relativePath = inBrowser ? pendingPath.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
        route.data = { ...notFoundPageData, relativePath };
      }
    }
  }
  if (inBrowser) {
    if (history.state === null) {
      history.replaceState({}, "");
    }
    window.addEventListener("click", (e) => {
      if (e.defaultPrevented || !(e.target instanceof Element) || e.target.closest("button") || // temporary fix for docsearch action buttons
      e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
        return;
      const link2 = e.target.closest("a");
      if (!link2 || link2.closest(".vp-raw") || link2.hasAttribute("download") || link2.hasAttribute("target"))
        return;
      const linkHref = link2.getAttribute("href") ?? (link2 instanceof SVGAElement ? link2.getAttribute("xlink:href") : null);
      if (linkHref == null)
        return;
      const { href, origin, pathname, hash, search } = new URL(linkHref, link2.baseURI);
      const currentUrl = new URL(location.href);
      if (origin === currentUrl.origin && treatAsHtml(pathname)) {
        e.preventDefault();
        if (pathname === currentUrl.pathname && search === currentUrl.search) {
          if (hash !== currentUrl.hash) {
            history.pushState({}, "", href);
            window.dispatchEvent(new HashChangeEvent("hashchange", {
              oldURL: currentUrl.href,
              newURL: href
            }));
          }
          if (hash) {
            scrollTo(link2, hash, link2.classList.contains("header-anchor"));
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          go(href);
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      if (e.state === null)
        return;
      const href = normalizeHref(location.href);
      await loadPage(href, e.state && e.state.scrollPosition || 0);
      await ((_a = router.onAfterRouteChange ?? router.onAfterRouteChanged) == null ? void 0 : _a(href));
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { frontmatter, site } = useData$1();
    watch(frontmatter, runCbs, { deep: true, flush: "post" });
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-c79a1216></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-c79a1216"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2, hash } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-d6be1790><p class="code" data-v-d6be1790>${ssrInterpolate(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-d6be1790>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-d6be1790></div><blockquote class="quote" data-v-d6be1790>${ssrInterpolate(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-d6be1790><a class="link"${ssrRenderAttr("href", unref(withBase)(unref(currentLang).link))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-d6be1790>${ssrInterpolate(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-d6be1790"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page, hash } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className))
        continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link: link2 }) => ({
      link: link2,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link: link2, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link2;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack = [];
  data.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min)
      return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent)
      parent.children.push(node);
    else
      result.push(node);
    stack.push(node);
  });
  return result;
}
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem", __props.root ? "root" : "nested"]
      }, _attrs))} data-v-b933a997><!--[-->`);
      ssrRenderList(__props.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-b933a997><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-b933a997>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-b933a997"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-labelledby": "doc-outline-aria-label",
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-a5bbad30><div class="content" data-v-a5bbad30><div class="outline-marker" data-v-a5bbad30></div><div aria-level="2" class="outline-title" id="doc-outline-aria-label" role="heading" data-v-a5bbad30>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-a5bbad30"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": __props.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-3f215769>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-3f215769></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$11, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-3f215769"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link2) => link2.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank"
    );
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: __props.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": __props.noIcon
        }],
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: __props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: __props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(
      () => new Date(page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-e98dd255>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-e98dd255>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-e98dd255"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(
      () => theme2.value.editLink && frontmatter.value.editLink !== false
    );
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(
      () => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-e257564d>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-e257564d>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-e257564d>`);
            _push(ssrRenderComponent(_sfc_main$$, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="vpi-square-pen edit-link-icon" data-v-e257564d${_scopeId}></span> ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode("span", { class: "vpi-square-pen edit-link-icon" }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-e257564d>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" aria-labelledby="doc-footer-aria-label" data-v-e257564d><span class="visually-hidden" id="doc-footer-aria-label" data-v-e257564d>Pager</span><div class="pager" data-v-e257564d>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(ssrRenderComponent(_sfc_main$$, {
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-e257564d${_scopeId}>${(((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page") ?? ""}</span><span class="title" data-v-e257564d${_scopeId}>${unref(control).prev.text ?? ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.prev) || "Previous page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).prev.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-e257564d>`);
          if ((_d = unref(control).next) == null ? void 0 : _d.link) {
            _push(ssrRenderComponent(_sfc_main$$, {
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-e257564d${_scopeId}>${(((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page") ?? ""}</span><span class="title" data-v-e257564d${_scopeId}>${unref(control).next.text ?? ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.next) || "Next page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).next.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-e257564d"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-39a288b8>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-39a288b8>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-39a288b8><div class="aside-curtain" data-v-39a288b8></div><div class="aside-container" data-v-39a288b8><div class="aside-content" data-v-39a288b8>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-39a288b8><div class="content-container" data-v-39a288b8>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-39a288b8>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-39a288b8"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || (props.href ? "a" : "button");
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [__props.size, __props.theme]],
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-fa7799d5"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (__props.image) {
        _push(`<!--[-->`);
        if (typeof __props.image === "string" || "src" in __props.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src),
            alt: __props.alt ?? (typeof __props.image === "string" ? "" : __props.image.alt || "")
          }))} data-v-8426fc1a>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: __props.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light,
            alt: __props.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-8426fc1a"]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": __props.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-4f9c455b><div class="container" data-v-4f9c455b><div class="main" data-v-4f9c455b>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        _push(`<h1 class="heading" data-v-4f9c455b>`);
        if (__props.name) {
          _push(`<span class="name clip" data-v-4f9c455b>${__props.name ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.text) {
          _push(`<span class="text" data-v-4f9c455b>${__props.text ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1>`);
        if (__props.tagline) {
          _push(`<p class="tagline" data-v-4f9c455b>${__props.tagline ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push, _parent);
      if (__props.actions) {
        _push(`<div class="actions" data-v-4f9c455b><!--[-->`);
        ssrRenderList(__props.actions, (action) => {
          _push(`<div class="action" data-v-4f9c455b>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link,
            target: action.target,
            rel: action.rel
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push, _parent);
      _push(`</div>`);
      if (__props.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-4f9c455b><div class="image-container" data-v-4f9c455b><div class="image-bg" data-v-4f9c455b></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (__props.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: __props.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-4f9c455b"]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before")
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after")
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: "VPFeature",
        href: __props.link,
        rel: __props.rel,
        target: __props.target,
        "no-icon": true,
        tag: __props.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-a3976bdc${_scopeId}>`);
            if (typeof __props.icon === "object" && __props.icon.wrap) {
              _push2(`<div class="icon" data-v-a3976bdc${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: __props.icon,
                alt: __props.icon.alt,
                height: __props.icon.height || 48,
                width: __props.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof __props.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: __props.icon,
                alt: __props.icon.alt,
                height: __props.icon.height || 48,
                width: __props.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (__props.icon) {
              _push2(`<div class="icon" data-v-a3976bdc${_scopeId}>${__props.icon ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-a3976bdc${_scopeId}>${__props.title ?? ""}</h2>`);
            if (__props.details) {
              _push2(`<p class="details" data-v-a3976bdc${_scopeId}>${__props.details ?? ""}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.linkText) {
              _push2(`<div class="link-text" data-v-a3976bdc${_scopeId}><p class="link-text-value" data-v-a3976bdc${_scopeId}>${ssrInterpolate(__props.linkText)} <span class="vpi-arrow-right link-text-icon" data-v-a3976bdc${_scopeId}></span></p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof __props.icon === "object" && __props.icon.wrap ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon"
                }, [
                  createVNode(VPImage, {
                    image: __props.icon,
                    alt: __props.icon.alt,
                    height: __props.icon.height || 48,
                    width: __props.icon.width || 48
                  }, null, 8, ["image", "alt", "height", "width"])
                ])) : typeof __props.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 1,
                  image: __props.icon,
                  alt: __props.icon.alt,
                  height: __props.icon.height || 48,
                  width: __props.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : __props.icon ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "icon",
                  innerHTML: __props.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: __props.title
                }, null, 8, ["innerHTML"]),
                __props.details ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "details",
                  innerHTML: __props.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                __props.linkText ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(__props.linkText) + " ", 1),
                    createVNode("span", { class: "vpi-arrow-right link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-a3976bdc"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-a6181336><div class="container" data-v-a6181336><div class="items" data-v-a6181336><!--[-->`);
        ssrRenderList(__props.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-a6181336>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-a6181336"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { width: vw } = useWindowSize({
      initialWidth: 0,
      includeScrollbar: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vp-doc container",
        style: unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {}
      }, _attrs))} data-v-8e2d4988>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeContent.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-8e2d4988"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHome", {
          "external-link-icon-enabled": unref(theme2).externalLinkIcon
        }]
      }, _attrs))} data-v-8b561e3d>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$U, null, {
        "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
            ];
          }
        }),
        "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$R, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      if (unref(frontmatter).markdownStyles !== false) {
        _push(ssrRenderComponent(VPHomeContent, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Content, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Content)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Content, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-8b561e3d"]]);
const _sfc_main$O = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-1428d186>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-1428d186"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-e315a0ad><div class="container" data-v-e315a0ad>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-e315a0ad>${unref(theme2).footer.message ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-e315a0ad>${unref(theme2).footer.copyright ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-e315a0ad"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    ref();
    function closeOnClickOutside(e) {
      var _a;
      if (!((_a = main.value) == null ? void 0 : _a.contains(e.target))) {
        open.value = false;
      }
    }
    watch(open, (value) => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" },
        ref_key: "main",
        ref: main
      }, _attrs))} data-v-8a42e2b4>`);
      if (__props.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-8a42e2b4><span class="menu-text" data-v-8a42e2b4>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</span><span class="vpi-chevron-right icon" data-v-8a42e2b4></span></button>`);
      } else {
        _push(`<button data-v-8a42e2b4>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-8a42e2b4><div class="header" data-v-8a42e2b4><a class="top-link" href="#" data-v-8a42e2b4>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-8a42e2b4>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: __props.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-8a42e2b4"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-a6f0e41e><div class="container" data-v-a6f0e41e>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", __props.open)} aria-controls="VPSidebarNav" data-v-a6f0e41e><span class="vpi-align-left menu-icon" data-v-a6f0e41e></span><span class="menu-text" data-v-a6f0e41e>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-a6f0e41e"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$J = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-1d5665e3><span class="check" data-v-1d5665e3>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-1d5665e3>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1d5665e3"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-sun sun" data-v-5337faa4${_scopeId}></span><span class="vpi-moon moon" data-v-5337faa4${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "vpi-sun sun" }),
              createVNode("span", { class: "vpi-moon moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-5337faa4"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-6c893767>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-6c893767"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-35975db6>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        class: {
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        },
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-35975db6${_scopeId}>${__props.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: __props.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-35975db6"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-69e747b5>`);
      if (__props.text) {
        _push(`<p class="title" data-v-69e747b5>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-69e747b5"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-b98bc113>`);
      if (__props.items) {
        _push(`<div class="items" data-v-b98bc113><!--[-->`);
        ssrRenderList(__props.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-b98bc113"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-cf11d7a2><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", __props.label)} data-v-cf11d7a2>`);
      if (__props.button || __props.icon) {
        _push(`<span class="text" data-v-cf11d7a2>`);
        if (__props.icon) {
          _push(`<span class="${ssrRenderClass([__props.icon, "option-icon"])}" data-v-cf11d7a2></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.button) {
          _push(`<span data-v-cf11d7a2>${__props.button ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="vpi-chevron-down text-icon" data-v-cf11d7a2></span></span>`);
      } else {
        _push(`<span class="vpi-more-horizontal icon" data-v-cf11d7a2></span>`);
      }
      _push(`</button><div class="menu" data-v-cf11d7a2>`);
      _push(ssrRenderComponent(VPMenu, { items: __props.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-cf11d7a2"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const el = ref();
    onMounted(async () => {
      var _a2;
      await nextTick();
      const span = (_a2 = el.value) == null ? void 0 : _a2.children[0];
      if (span instanceof HTMLElement && span.className.startsWith("vpi-social-") && (getComputedStyle(span).maskImage || getComputedStyle(span).webkitMaskImage) === "none") {
        span.style.setProperty(
          "--icon",
          `url('https://api.iconify.design/simple-icons/${props.icon}.svg')`
        );
      }
    });
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}"></span>`;
    });
    {
      typeof props.icon === "string" && ((_a = useSSRContext()) == null ? void 0 : _a.vpSocialIcons.add(props.icon));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "VPSocialLink no-icon",
        href: __props.link,
        "aria-label": __props.ariaLabel ?? (typeof __props.icon === "string" ? __props.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-bd121fe5>${svg.value ?? ""}</a>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-bd121fe5"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-7bc22406><!--[-->`);
      ssrRenderList(__props.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-7bc22406"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-bb2aa2f0${_scopeId}><p class="trans-title" data-v-bb2aa2f0${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
                _push2(`<div class="group" data-v-bb2aa2f0${_scopeId}><div class="item appearance" data-v-bb2aa2f0${_scopeId}><p class="label" data-v-bb2aa2f0${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-bb2aa2f0${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-bb2aa2f0${_scopeId}><div class="item social-links" data-v-bb2aa2f0${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-bb2aa2f0"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: __props.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-e5dd9c1c><span class="container" data-v-e5dd9c1c><span class="top" data-v-e5dd9c1c></span><span class="middle" data-v-e5dd9c1c></span><span class="bottom" data-v-e5dd9c1c></span></span></button>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-e5dd9c1c"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        },
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-e56f3d57${_scopeId}>${__props.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: __props.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-e56f3d57"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("component" in navItem) return false;
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      }
      return navItem.items.some(isChildActive);
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch, !!__props.item.activeMatch) || childrenActive.value
        },
        button: __props.item.text,
        items: __props.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-dc692963><span id="main-nav-aria-label" class="visually-hidden" data-v-dc692963> Main Navigation </span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(_sfc_main$x, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-dc692963"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><span class="vp-icon DocSearch-Search-Icon"></span><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref(translate)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => import("./VPLocalSearchBox.CdIHRNVV.js"));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$v, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$v, { onClick: load }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-0394ad82"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link2 = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-1168a8e4><a class="title"${ssrRenderAttr("href", link2.value ?? unref(normalizeLink$1)(unref(currentLang).link))}${ssrRenderAttr("rel", rel.value)}${ssrRenderAttr("target", target.value)} data-v-1168a8e4>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<span data-v-1168a8e4>${unref(theme2).siteTitle ?? ""}</span>`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<span data-v-1168a8e4>${ssrInterpolate(unref(site).title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-1168a8e4"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: "vpi-languages",
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-88af2de4${_scopeId}><p class="title" data-v-88af2de4${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-88af2de4"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-6aa21345><div class="wrapper" data-v-6aa21345><div class="container" data-v-6aa21345><div class="title" data-v-6aa21345>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-6aa21345><div class="content-body" data-v-6aa21345>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$u, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: __props.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div><div class="divider" data-v-6aa21345><div class="divider-line" data-v-6aa21345></div></div></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-6aa21345"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-b44890b2><p class="text" data-v-b44890b2>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-b44890b2"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: "VPNavScreenMenuLink",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-df37e6dd${_scopeId}>${__props.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: __props.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-df37e6dd"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-3e9c20e4${_scopeId}>${__props.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: __props.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-3e9c20e4"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-8133b170>`);
      if (__props.text) {
        _push(`<p class="title" data-v-8133b170>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-8133b170"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-b9ab8c58><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-b9ab8c58><span class="button-text" data-v-b9ab8c58>${__props.text ?? ""}</span><span class="vpi-plus button-icon" data-v-b9ab8c58></span></button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-b9ab8c58><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-b9ab8c58>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else if ("component" in item) {
          _push(`<div class="item" data-v-b9ab8c58>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null), _parent);
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-b9ab8c58>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-b9ab8c58"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null), _parent);
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-858fe1a4><button class="title" data-v-858fe1a4><span class="vpi-languages icon lang" data-v-858fe1a4></span> ${ssrInterpolate(unref(currentLang).label)} <span class="vpi-chevron-down icon chevron" data-v-858fe1a4></span></button><ul class="list" data-v-858fe1a4><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-858fe1a4>`);
          _push(ssrRenderComponent(_sfc_main$$, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-858fe1a4"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-f2779853><div class="container" data-v-f2779853>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$k, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-f2779853"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-ae24b3ad>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-ae24b3ad"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", __props.item.items && 0)} data-v-b3fd67f8${_scopeId}><div class="indicator" data-v-b3fd67f8${_scopeId}></div>`);
              if (__props.item.link) {
                _push2(ssrRenderComponent(_sfc_main$$, {
                  tag: linkTag.value,
                  class: "link",
                  href: __props.item.link,
                  rel: __props.item.rel,
                  target: __props.item.target
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: __props.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (__props.item.collapsed != null && __props.item.items && __props.item.items.length) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-b3fd67f8${_scopeId}><span class="vpi-chevron-right caret-icon" data-v-b3fd67f8${_scopeId}></span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.item.items && __props.item.items.length) {
              _push2(`<div class="items" data-v-b3fd67f8${_scopeId}>`);
              if (__props.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: __props.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(
                __props.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
                true
              ), {
                tabindex: __props.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                __props.item.link ? (openBlock(), createBlock(_sfc_main$$, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: __props.item.link,
                  rel: __props.item.rel,
                  target: __props.item.target
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: __props.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: __props.item.text
                }, null, 8, ["innerHTML"])),
                __props.item.collapsed != null && __props.item.items && __props.item.items.length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode("span", { class: "vpi-chevron-right caret-icon" })
                ], 32)) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              __props.item.items && __props.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                __props.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: __props.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-b3fd67f8"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<div class="${ssrRenderClass([{ "no-transition": disableTransition.value }, "group"])}" data-v-c40bc020>`);
        _push(ssrRenderComponent(VPSidebarItem, {
          item,
          depth: 0
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c40bc020"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const key = ref(0);
    watch(
      sidebarGroups,
      () => {
        key.value += 1;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: __props.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-319d5ca6><div class="curtain" data-v-319d5ca6></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-319d5ca6><span class="visually-hidden" id="sidebar-aria-label" data-v-319d5ca6> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSidebarGroup, {
          items: unref(sidebarGroups),
          key: key.value
        }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-319d5ca6"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-0b0ada53></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-0b0ada53>${ssrInterpolate(unref(theme2).skipToContentLabel || "Skip to content")}</a><!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-0b0ada53"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-5d98c3a5>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5d98c3a5"]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [__props.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: { default: "normal" },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [__props.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$a, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        mode: "aside",
        tier: __props.tier,
        size: __props.size,
        data: __props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: { default: "Become a sponsor" },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-3d121b4a><div class="container" data-v-3d121b4a><div class="header" data-v-3d121b4a><div class="love" data-v-3d121b4a><span class="vpi-heart icon" data-v-3d121b4a></span></div>`);
      if (__props.message) {
        _push(`<h2 class="message" data-v-3d121b4a>${ssrInterpolate(__props.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-3d121b4a>`);
      _push(ssrRenderComponent(_sfc_main$9, { data: __props.data }, null, _parent));
      _push(`</div>`);
      if (__props.actionLink) {
        _push(`<div class="action" data-v-3d121b4a>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: __props.actionText,
          href: __props.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [__props.size]]
      }, _attrs))} data-v-f3fa364a><div class="profile" data-v-f3fa364a><figure class="avatar" data-v-f3fa364a><img class="avatar-img"${ssrRenderAttr("src", __props.member.avatar)}${ssrRenderAttr("alt", __props.member.name)} data-v-f3fa364a></figure><div class="data" data-v-f3fa364a><h1 class="name" data-v-f3fa364a>${ssrInterpolate(__props.member.name)}</h1>`);
      if (__props.member.title || __props.member.org) {
        _push(`<p class="affiliation" data-v-f3fa364a>`);
        if (__props.member.title) {
          _push(`<span class="title" data-v-f3fa364a>${ssrInterpolate(__props.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.title && __props.member.org) {
          _push(`<span class="at" data-v-f3fa364a> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.org) {
          _push(ssrRenderComponent(_sfc_main$$, {
            class: ["org", { link: __props.member.orgLink }],
            href: __props.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.desc) {
        _push(`<p class="desc" data-v-f3fa364a>${__props.member.desc ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.links) {
        _push(`<div class="links" data-v-f3fa364a>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: __props.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.member.sponsor) {
        _push(`<div class="sp" data-v-f3fa364a>`);
        _push(ssrRenderComponent(_sfc_main$$, {
          class: "sp-link",
          href: __props.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="vpi-heart sp-icon" data-v-f3fa364a${_scopeId}></span> ${ssrInterpolate(__props.member.actionText || "Sponsor")}`);
            } else {
              return [
                createVNode("span", { class: "vpi-heart sp-icon" }),
                createTextVNode(" " + toDisplayString(__props.member.actionText || "Sponsor"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f3fa364a"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-6cb0dbc4><div class="container" data-v-6cb0dbc4><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<div class="item" data-v-6cb0dbc4>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: __props.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$16);
  }
};
const _sfc_main$1 = {
  __name: "GraphView",
  __ssrInlineRender: true,
  setup(__props) {
    const svgEl = ref(null);
    const loading = ref(true);
    const query = ref("");
    const selected = ref(null);
    const COLORS = { entities: "#4f8cff", concepts: "#ffa94d" };
    let sim, svg, g, linkSel, nodeSel, labelSel, zoom, adjacency = {}, degreeOf = {}, topLabelIds = /* @__PURE__ */ new Set(), dataRef = null;
    onMounted(async () => {
      try {
        const res = await fetch(withBase("/graph-data.json"));
        dataRef = await res.json();
        render2(dataRef);
      } catch (e) {
        console.error("graph load failed", e);
        loading.value = false;
      }
    });
    function radius(d) {
      return 5 + Math.sqrt(d.degree) * 1.6;
    }
    function render2(data) {
      var _a, _b;
      const width = Math.max(640, svgEl.value.clientWidth);
      const height = Math.max(520, window.innerHeight - 280);
      svg = d3.select(svgEl.value).attr("viewBox", [0, 0, width, height]);
      degreeOf = {};
      adjacency = {};
      for (const l of data.links) {
        degreeOf[l.source] = (degreeOf[l.source] || 0) + 1;
        degreeOf[l.target] = (degreeOf[l.target] || 0) + 1;
        (adjacency[_a = l.source] || (adjacency[_a] = /* @__PURE__ */ new Set())).add(l.target);
        (adjacency[_b = l.target] || (adjacency[_b] = /* @__PURE__ */ new Set())).add(l.source);
      }
      topLabelIds = new Set(
        [...data.nodes].map((n) => ({ id: n.id, d: degreeOf[n.id] || 1 })).sort((a, b) => b.d - a.d).slice(0, 20).map((x) => x.id)
      );
      const nodes = data.nodes.map((n) => ({ ...n, degree: degreeOf[n.id] || 1 }));
      const links = data.links.map((l) => ({ source: l.source, target: l.target }));
      sim = d3.forceSimulation(nodes).force("link", d3.forceLink(links).id((d) => d.id).distance(95).strength(0.22)).force("charge", d3.forceManyBody().strength(-900)).force("center", d3.forceCenter(width / 2, height / 2)).force("collide", d3.forceCollide().radius((d) => radius(d) + 22)).alphaDecay(0.02);
      zoom = d3.zoom().scaleExtent([0.2, 6]).on("zoom", (ev) => {
        g.attr("transform", ev.transform);
        updateLabels(ev.transform.k);
      });
      svg.call(zoom);
      g = svg.append("g");
      linkSel = g.append("g").selectAll("line").data(links).join("line").attr("stroke", "#555").attr("stroke-opacity", 0.5).attr("stroke-width", 0.7);
      nodeSel = g.append("g").selectAll("circle").data(nodes).join("circle").attr("r", radius).attr("fill", (d) => COLORS[d.section] || "#888").attr("fill-opacity", 0.85).attr("stroke", "#fff").attr("stroke-width", 1).style("cursor", "pointer").call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
      labelSel = g.append("g").selectAll("text").data(nodes).join("text").attr("class", "node-label").attr("text-anchor", "middle").attr("dy", (d) => radius(d) + 13).attr("font-size", 11).attr("fill", "#ddd").attr("stroke", "#111").attr("stroke-width", 0.4).attr("paint-order", "stroke").style("pointer-events", "none").text((d) => d.title);
      nodeSel.append("title").text((d) => d.title);
      nodeSel.on("click", (ev, d) => {
        ev.stopPropagation();
        selectNode(d);
      });
      nodeSel.on("dblclick", (ev, d) => {
        ev.stopPropagation();
        openPage(d);
      });
      svg.on("click", (ev) => {
        if (ev.target === svgEl.value) clearSelection();
      });
      sim.on("tick", () => {
        linkSel.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y).attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
        nodeSel.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
        labelSel.attr("x", (d) => d.x).attr("y", (d) => d.y);
      });
      function dragstarted(ev, d) {
        if (!ev.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged(ev, d) {
        d.fx = ev.x;
        d.fy = ev.y;
      }
      function dragended(ev, d) {
        if (!ev.active) sim.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
      updateLabels(1);
      loading.value = false;
    }
    function neighborsOf(id) {
      return adjacency[id] || /* @__PURE__ */ new Set();
    }
    function selectNode(d) {
      selected.value = d;
      const nbrs = neighborsOf(d.id);
      const selId = d.id;
      nodeSel.attr("fill-opacity", (n) => n.id === selId || nbrs.has(n.id) ? 1 : 0.12).attr("r", (n) => n.id === selId ? radius(n) + 3 : radius(n));
      linkSel.attr(
        "stroke-opacity",
        (l) => l.source.id === selId || l.target.id === selId ? 0.9 : 0.06
      ).attr(
        "stroke-width",
        (l) => l.source.id === selId || l.target.id === selId ? 1.6 : 0.7
      );
      labelSel.attr("font-size", (n) => n.id === selId ? 13 : 10).attr("fill", (n) => n.id === selId ? "#fff" : "#ccc").style(
        "opacity",
        (n) => n.id === selId || nbrs.has(n.id) ? 1 : 0
      );
      const k = Math.max(1.2, d3.zoomTransform(svg.node()).k);
      const t = d3.zoomIdentity.translate(svgEl.value.clientWidth / 2 - d.x * k, svgEl.value.clientHeight / 2 - d.y * k).scale(k);
      svg.transition().duration(350).call(zoom.transform, t);
    }
    function openPage(d) {
      window.location.href = withBase(`/${d.section}/${d.id}`);
    }
    function clearSelection() {
      selected.value = null;
      nodeSel.attr("fill-opacity", 0.85).attr("r", radius);
      linkSel.attr("stroke-opacity", 0.5).attr("stroke-width", 0.7);
      updateLabels(d3.zoomTransform(svg.node()).k);
    }
    function updateLabels(scale) {
      var _a;
      if (!labelSel) return;
      const selId = (_a = selected.value) == null ? void 0 : _a.id;
      const showAll = scale >= 1.6;
      labelSel.style("opacity", (n) => {
        if (selId && (n.id === selId || neighborsOf(selId).has(n.id))) return 1;
        if (showAll) return 0.85;
        if (topLabelIds.has(n.id)) return 0.9;
        return 0;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "graph-wrap" }, _attrs))} data-v-bad4f0f6><div class="graph-toolbar" data-v-bad4f0f6><input${ssrRenderAttr("value", query.value)} class="graph-search" type="search" placeholder="Find a page…" data-v-bad4f0f6><div class="graph-legend" data-v-bad4f0f6><span data-v-bad4f0f6><i class="dot entity" data-v-bad4f0f6></i> Entities</span><span data-v-bad4f0f6><i class="dot concept" data-v-bad4f0f6></i> Concepts</span><span class="hint" data-v-bad4f0f6>tap to select · drag to move · pinch/scroll to zoom</span></div></div><svg class="graph-svg" data-v-bad4f0f6></svg>`);
      if (selected.value) {
        _push(`<div class="graph-action" data-v-bad4f0f6><span class="graph-action-name" data-v-bad4f0f6>${ssrInterpolate(selected.value.title)}</span><a${ssrRenderAttr("href", unref(withBase)(`/${selected.value.section}/${selected.value.id}`))} class="graph-action-open" data-v-bad4f0f6>Open page →</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="graph-loading" data-v-bad4f0f6>Loading graph…</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/GraphView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GraphView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bad4f0f6"]]);
const _sfc_main = {
  __name: "IndexBrowser",
  __ssrInlineRender: true,
  props: {
    section: { type: String, default: "entities" }
  },
  setup(__props) {
    const props = __props;
    const sectionLabel = computed(
      () => props.section === "concepts" ? "Concepts" : "Entities"
    );
    const all = ref([]);
    const query = ref("");
    const category = ref("all");
    const CATEGORY_TAGS = {
      people: ["person", "politician", "president", "author", "journalist", "historian", "actor", "whistleblower"],
      media: ["outlet", "media", "mainstream-media", "cable-news", "newspaper", "magazine", "independent-media", "substack"],
      government: ["agency", "government-agency", "us-government", "congress", "senate", "administration", "judiciary", "military"],
      organizations: ["organization", "international-organization", "advocacy-organization", "think-tank", "institution"],
      business: ["corporate", "bank", "asset-manager", "institutional-investor", "conglomerate", "tech", "finance"]
    };
    const categories = computed(() => {
      const base = [
        { id: "all", label: "All", match: () => true },
        { id: "people", label: "People", match: (i) => i.tags.some((t) => CATEGORY_TAGS.people.includes(t)) },
        { id: "media", label: "Media", match: (i) => i.tags.some((t) => CATEGORY_TAGS.media.includes(t)) },
        { id: "government", label: "Government", match: (i) => i.tags.some((t) => CATEGORY_TAGS.government.includes(t)) },
        { id: "organizations", label: "Orgs", match: (i) => i.tags.some((t) => CATEGORY_TAGS.organizations.includes(t)) },
        { id: "business", label: "Business", match: (i) => i.tags.some((t) => CATEGORY_TAGS.business.includes(t)) }
      ];
      return base.map((c) => ({ ...c, count: all.value.filter((i) => c.match(i)).length }));
    });
    const visible = computed(() => {
      const q = query.value.trim().toLowerCase();
      return all.value.filter((item) => {
        const inCategory = category.value === "all" || categories.value.find((c) => c.id === category.value).match(item);
        if (!inCategory) return false;
        if (!q) return true;
        return item.title.toLowerCase().includes(q) || item.tags.some((t) => t.toLowerCase().includes(q));
      });
    });
    const visibleCount = computed(() => visible.value.length);
    const grouped = computed(() => {
      const groups = /* @__PURE__ */ new Map();
      for (const item of visible.value) {
        const letter = (item.title[0] || "#").toUpperCase();
        if (!groups.has(letter)) groups.set(letter, []);
        groups.get(letter).push(item);
      }
      return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([letter, items]) => ({ letter, items }));
    });
    onMounted(async () => {
      try {
        const res = await fetch(withBase("/index-data.json"));
        const data = await res.json();
        all.value = data.filter((d) => d.section === props.section);
      } catch (e) {
        console.error("index data load failed", e);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ib-wrap" }, _attrs))} data-v-30d5eab8><div class="ib-controls" data-v-30d5eab8><div class="ib-search" data-v-30d5eab8><span class="ib-search-icon" data-v-30d5eab8>⌕</span><input${ssrRenderAttr("value", query.value)} type="search"${ssrRenderAttr("placeholder", `Filter ${sectionLabel.value} by name or category…`)} class="ib-input" data-v-30d5eab8></div><div class="ib-chips" data-v-30d5eab8><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<button class="${ssrRenderClass([{ active: category.value === cat.id }, "ib-chip"])}" data-v-30d5eab8>${ssrInterpolate(cat.label)} <span class="ib-count" data-v-30d5eab8>${ssrInterpolate(cat.count)}</span></button>`);
      });
      _push(`<!--]--></div></div><p class="ib-meta" data-v-30d5eab8>${ssrInterpolate(visibleCount.value)} ${ssrInterpolate(sectionLabel.value.toLowerCase())} shown</p>`);
      if (grouped.value.length === 0) {
        _push(`<div class="ib-empty" data-v-30d5eab8> No matches for &quot;${ssrInterpolate(query.value)}&quot;. Try a different name or category. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(grouped.value, (group) => {
        _push(`<div class="ib-group" data-v-30d5eab8><h3 class="ib-letter" data-v-30d5eab8>${ssrInterpolate(group.letter)}</h3><ul class="ib-list" data-v-30d5eab8><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(`<li class="ib-item" data-v-30d5eab8><a${ssrRenderAttr("href", unref(withBase)(`/${item.section}/${item.id}`))} class="ib-link" data-v-30d5eab8>${ssrInterpolate(item.title)}</a>`);
          if (item.tags.length) {
            _push(`<span class="ib-tags" data-v-30d5eab8><!--[-->`);
            ssrRenderList(item.tags.slice(0, 3), (t) => {
              _push(`<span class="ib-tag" data-v-30d5eab8>${ssrInterpolate(t)}</span>`);
            });
            _push(`<!--]--></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/IndexBrowser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IndexBrowser = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30d5eab8"]]);
const RawTheme = {
  extends: theme,
  enhanceApp({ app }) {
    app.component("GraphView", GraphView);
    app.component("IndexBrowser", IndexBrowser);
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData2, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && attrs.async == null) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ;
      else {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "", vpSocialIcons: /* @__PURE__ */ new Set() };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  useRouter as a,
  createSearchTranslate as c,
  dataSymbol as d,
  escapeRegExp as e,
  inBrowser as i,
  pathToFile as p,
  render,
  useData as u
};
