(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),o=r(37),i=r.n(o),c=(r(51),r(52),r.p,r(1));function l(){return Object(c.jsx)("div",{})}var s=r(5),u=r.n(s),h=r(10),p=r(12),d=(r(55),r(56),r(38)),m=r.n(d).a.create();r(74);function g(e){var a=e.pokemonData,r=e.getTypeInfo,n=e.catchAndRelease,t=e.getUserCollection;return Object(c.jsxs)("div",{className:"pokemon-wrapper",children:[Object(c.jsx)("div",{className:"name",children:a.name}),Object(c.jsx)("img",{onMouseOver:function(e){e.target.src="".concat(a.pictures.back)},onMouseOut:function(e){e.target.src="".concat(a.pictures.front)},src:a.pictures.front}),Object(c.jsxs)("div",{className:"height-div",children:["height:",a.height]}),Object(c.jsxs)("div",{className:"width-div",children:["weight:",a.weight]}),Object(c.jsxs)("div",{children:["types:",function(e){var a=[];return e.types?e.types.forEach((function(e){a.push(e.type.name)})):a.push("No type!"),a}(a).map((function(e){return Object(c.jsxs)("span",{className:"type-span",onClick:function(){return r(e)},children:[" ",e]},e)}))]}),a.isCaught&&Object(c.jsx)("button",{onClick:function(){var e=Object(h.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.release(a);case 2:return e.next=4,t();case 4:r.target.hidden=!0;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),children:"Release!"}),!a.isCaught&&Object(c.jsx)("button",{onClick:function(){var e=Object(h.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.catch(a);case 2:return e.next=4,t();case 4:r.target.hidden=!0;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),children:"Catch!"})]})}var b=r(39),f=r.n(b),k=(r(92),function(e){var a=e.userCollection,r=e.sendSearchQuery,t=Object(n.useState)(0),o=Object(p.a)(t,2),i=o[0],l=o[1];return Object(c.jsx)("div",{style:{padding:"0 ".concat(40,"px")},children:Object(c.jsx)(f.a,{requestToChangeActive:l,activeItemIndex:i,numberOfCards:6,gutter:20,leftChevron:Object(c.jsx)("button",{children:"<"}),rightChevron:Object(c.jsx)("button",{children:">"}),outsideChevron:!0,chevronWidth:40,children:a.map((function(e,a){return Object(c.jsxs)("div",{onClick:function(){r(e.name)},children:[Object(c.jsxs)("legend",{className:"pokemon-collection-wrapper",children:[e.name,Object(c.jsx)("img",{src:e.pictures.front})]}),Object(c.jsx)("br",{})]},a)}))})})});r(93);function y(e){var a=e.index,r=e.value,n=e.sendSearchQuery,t=e.setSearchResultList;return Object(c.jsx)("li",{className:"search-result",onClick:function(){n(r),t("")},children:r},a)}r(94);function S(e){var a=e.searchResults,r=e.sendSearchQuery,n=e.setSearchResultList;return a?Object(c.jsx)("ul",{className:"search-list",children:a.map((function(e,a){return Object(c.jsx)(y,{value:e,sendSearchQuery:r,setSearchResultList:n},a)}))}):Object(c.jsx)("p",{})}var j=["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran\u2640","Nidorina","Nidoqueen","Nidoran\u2642","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch\u2019d","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabebe","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka","Blacephalon","Zeraora","Meltan","Melmetal"];function x(e){var a=e.pokemon,r=e.index,n=e.sendSearchQuery;return Object(c.jsx)("li",{className:"pokemon-list-item",onClick:function(){n(a)},children:a},r)}r(95);function v(e){var a=e.pokeList,r=e.sendSearchQuery;return Object(c.jsxs)("ul",{id:"pokemon-type-list",children:[" ",a.map((function(e,a){return Object(c.jsx)(x,{pokemon:e,sendSearchQuery:r},a)}))]})}function w(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),r=a[0],t=a[1],o=Object(n.useState)([]),i=Object(p.a)(o,2),l=i[0],s=i[1],d=Object(n.useState)({}),b=Object(p.a)(d,2),f=b[0],y=b[1],x=Object(n.useState)(!1),w=Object(p.a)(x,2),C=w[0],O=w[1],M=Object(n.useState)([]),P=Object(p.a)(M,2),T=P[0],G=P[1],D=Object(n.useState)([]),L=Object(p.a)(D,2),B=L[0],A=L[1],R=function(e){var a=function(e,a){if(console.log(a),a){var r=a.toLowerCase().split(" ").map((function(e){if(e)return e[0].toUpperCase()+e.substr(1)})).join(" "),n=[],t=0;return e.forEach((function(e){e.substring(0,a.length)===r&&t<6&&(n.push(e),t++)})),n}}(j,e);s(a)},N=function(){var e=Object(h.a)(u.a.mark((function e(a){var r,n,o,i,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"pokemon",r="http://localhost:3001/api/".concat("pokemon","/"),t(""),e.prev=3,n="".concat(r).concat(a),e.next=7,m.get(n);case 7:return o=e.sent,i=o.data,e.next=11,K();case 11:c=e.sent,c.find((function(e){return e.name===a.toLowerCase()}))?(i.isCaught=!0,y(i)):y(i),O("true"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),l=e.t0.message,console.log(l);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(a){return e.apply(this,arguments)}}(),z=function(){var e=Object(h.a)(u.a.mark((function e(a){var r,n,t,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"collection/catch",r="http://localhost:3001/api/".concat("collection/catch","/"),e.prev=2,n="".concat(r),e.next=6,m.post(n,a);case 6:if(t=e.sent,"already caught!"!==(o=t.data)){e.next=10;break}return e.abrupt("return",alert("".concat(a.name," is ").concat(o)));case 10:alert("you caught ".concat(a.name,"!")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=e.t0.message,console.log(i);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(u.a.mark((function e(a){var r,n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"collection/release",r="http://localhost:3001/api/".concat("collection/release","/"),e.prev=2,n="".concat(r).concat(a.id),e.next=6,m.delete(n);case 6:alert("".concat(a.name," was released!")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t=e.t0.message,console.log(t);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}(),H=function(){var e=Object(h.a)(u.a.mark((function e(a){var r,n,t,o,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"type",r="http://localhost:3001/api/".concat("type","/"),O(!1),e.prev=3,n="".concat(r).concat(a),e.next=7,m.get(n);case 7:t=e.sent,o=t.data,i=o.pokemon.map((function(e){return e.pokemon.name})),G(i),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),c=e.t0.message,console.log(c);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}(),K=function(){var e=Object(h.a)(u.a.mark((function e(a){var r,n,t,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"collection",r="http://localhost:3001/api/".concat("collection","/"),e.next=4,m.get(r);case 4:return n=e.sent,t=n.data,console.log(t),o=t.map((function(e){return e.pokemonData})),A(o),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Object(h.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{K()}catch(r){a=r.message,console.log(a)}case 1:case"end":return e.stop()}}),e)})))()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("section",{id:"search-area",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search Pokemon",id:"search-input",value:r,onChange:function(e){var a=e.target.value;t(a),a?R(a):s([])},autoComplete:"off"}),Object(c.jsx)(S,{searchResults:l,sendSearchQuery:N,setSearchResultList:s})]}),C&&Object(c.jsx)("section",{className:"pokemon-presentor",children:Object(c.jsx)(g,{pokemonData:f,catchAndRelease:{catch:z,release:F},getTypeInfo:H,getUserCollection:K})})||Object(c.jsx)("section",{id:"type-list",children:Object(c.jsx)(v,{pokeList:T,sendSearchQuery:N})}),Object(c.jsx)("section",{id:"display-collection",children:Object(c.jsx)(k,{userCollection:B,sendSearchQuery:N})})]})}function C(){return Object(c.jsx)("div",{})}function O(){return Object(c.jsx)("div",{children:Object(c.jsx)(C,{})})}var M=r(43),P=r(2);r(96);var T=function(){return Object(c.jsxs)("div",{className:"404",children:[Object(c.jsx)("h1",{className:"headline",children:"Sorry, we couldn`t fide what you are looking for!"}),Object(c.jsx)("a",{className:"link",href:"localhost:3000",children:"To Home Page"})]})};var G=function(){return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(O,{}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(M.a,{children:Object(c.jsxs)(P.c,{children:[Object(c.jsx)(P.a,{path:"/404",children:Object(c.jsx)(T,{})}),Object(c.jsx)(P.a,{path:"/",children:Object(c.jsx)(w,{})})]})}),Object(c.jsx)(l,{})]})]})},D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,103)).then((function(a){var r=a.getCLS,n=a.getFID,t=a.getFCP,o=a.getLCP,i=a.getTTFB;r(e),n(e),t(e),o(e),i(e)}))};i.a.render(Object(c.jsx)(t.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),D()},51:function(e,a,r){},52:function(e,a,r){},56:function(e,a,r){},74:function(e,a,r){},92:function(e,a,r){},93:function(e,a,r){},94:function(e,a,r){},95:function(e,a,r){},96:function(e,a,r){}},[[102,1,2]]]);
//# sourceMappingURL=main.9b7ddb3d.chunk.js.map