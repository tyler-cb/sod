import{dh as a,dp as e,ad as t,q as s,bB as l,bC as n,bK as i,aa as r,dq as o,o as c,c as d,ab as p,E as S,a as u,S as f,aC as m,j as I,C as h,aq as g,a$ as k}from"./detailed_results-b97d85b3.chunk.js";import{m as P,a as w,r as b,b as B,c as v,d as A,e as O,A as T,f as C,F as E,g as F,h as H,R as D,D as R,I as y}from"./preset_utils-8140e85e.chunk.js";const M={items:[{id:211507},{id:209686},{id:215365},{id:15340,randomSuffix:1993},{id:211509,enchant:847,rune:414799},{id:209578,enchant:823},{id:211455,rune:414684},{id:209685},{id:209684,rune:417157},{id:210795,enchant:247},{id:20426},{id:209668},{id:21566},{id:211450},{id:209561,enchant:723},{},{id:209576}]},U={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2912,rank:1}}},doAtValue:{const:{val:"-3.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:417157}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{dotIsActive:{spellId:{spellId:414684}}},rhs:{const:{val:"False"}}}},castSpell:{spellId:{spellId:414684}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{dotIsActive:{spellId:{spellId:8926,rank:4}}},rhs:{const:{val:"False"}}}},castSpell:{spellId:{spellId:8926,rank:4}}}},{action:{castSpell:{spellId:{spellId:5179,rank:4}}}}]},q=P("Blank",{items:[]}),x=P("Phase 1",M),W=x,j=w("Phase 1",U),N={name:"Phase 1",data:a.create({talentsString:"50005003021"})},L=N,K=e.create({innervateTarget:t.create()}),_=s.create({flask:l.FlaskUnknown,food:n.FoodUnknown,mainHandImbue:i.BlackfathomManaOil}),G=r.create({arcaneBrilliance:!0,aspectOfTheLion:!0,divineSpirit:!0,giftOfTheWild:o.TristateEffectImproved,moonkinAura:!0,powerWordFortitude:o.TristateEffectImproved}),V=c.create({blessingOfKings:!0,blessingOfWisdom:o.TristateEffectImproved}),$=d.create({}),z=p.create({faerieFire:!0,judgementOfWisdom:!0}),J={distanceFromTarget:18,profession1:S.Engineering,profession2:S.Tailoring},Q=b(f.SpecBalanceDruid,{cssClass:"balance-druid-sim-ui",cssScheme:"druid",knownIssues:[],epStats:[u.StatIntellect,u.StatSpirit,u.StatSpellPower,u.StatArcanePower,u.StatNaturePower,u.StatSpellHit,u.StatSpellCrit,u.StatSpellHaste,u.StatMP5],epReferenceStat:u.StatSpellPower,displayStats:[u.StatHealth,u.StatMana,u.StatStamina,u.StatIntellect,u.StatSpirit,u.StatSpellPower,u.StatSpellHit,u.StatSpellCrit,u.StatSpellHaste,u.StatMP5],defaults:{gear:W.gear,epWeights:B.fromMap({[u.StatIntellect]:.43,[u.StatSpirit]:.34,[u.StatSpellPower]:1,[u.StatArcanePower]:.49,[u.StatNaturePower]:.51,[u.StatSpellCrit]:.82,[u.StatSpellHaste]:.8,[u.StatMP5]:0}),consumes:_,talents:L.data,specOptions:K,raidBuffs:G,partyBuffs:$,individualBuffs:V,debuffs:z,other:J},playerIconInputs:[],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[v,A,O,...T,...C,...E,...F,...H],otherInputs:{inputs:[D,R]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[N],rotations:[j],gear:[q,x]},autoRotation:()=>j.rotation.rotation,raidSimPresets:[{spec:f.SpecBalanceDruid,tooltip:m[f.SpecBalanceDruid],defaultName:"Balance",iconUrl:I(h.ClassDruid,0),talents:L.data,specOptions:K,consumes:_,otherDefaults:J,defaultFactionRaces:{[g.Unknown]:k.RaceUnknown,[g.Alliance]:k.RaceNightElf,[g.Horde]:k.RaceTauren},defaultGear:{[g.Unknown]:{},[g.Alliance]:{1:W.gear},[g.Horde]:{1:W.gear}}}]});class X extends y{constructor(a,e){super(a,e,Q)}}export{X as B};
//# sourceMappingURL=sim-66083199.chunk.js.map
