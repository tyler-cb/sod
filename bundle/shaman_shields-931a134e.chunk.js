import{du as e,x as i,T as l,dt as n}from"./detailed_results-b97d85b3.chunk.js";import{i as a}from"./preset_utils-8140e85e.chunk.js";const m={actionId:e=>e.getMatchingSpellActionId([{id:8017,minLevel:1,maxLevel:7},{id:8018,minLevel:8,maxLevel:15},{id:8019,minLevel:16,maxLevel:23},{id:10399,minLevel:24,maxLevel:33},{id:16314,minLevel:34,maxLevel:43},{id:16315,minLevel:44,maxLevel:53},{id:16316,minLevel:54}]),value:e.RockbiterWeapon},t={actionId:e=>e.getMatchingSpellActionId([{id:8024,minLevel:10,maxLevel:17},{id:8027,minLevel:18,maxLevel:25},{id:8030,minLevel:26,maxLevel:35},{id:16339,minLevel:36,maxLevel:45},{id:16341,minLevel:46,maxLevel:55},{id:16342,minLevel:56}]),value:e.FlametongueWeapon},v={actionId:e=>e.getMatchingSpellActionId([{id:8232,minLevel:30,maxLevel:39},{id:8235,minLevel:40,maxLevel:49},{id:10486,minLevel:50,maxLevel:59},{id:16362,minLevel:60}]),value:e.WindfuryWeapon},d={actionId:e=>e.getMatchingSpellActionId([{id:8033,minLevel:20,maxLevel:27},{id:8038,minLevel:28,maxLevel:37},{id:10456,minLevel:38,maxLevel:47},{id:16355,minLevel:48,maxLevel:57},{id:16356,minLevel:58}]),value:e.FrostbrandWeapon},L=()=>a({fieldName:"imbueMh",values:[{value:e.NoImbue,tooltip:"No Main Hand Enchant"},m,v,t,d],showWhen:e=>null!=e.getEquippedItem(i.ItemSlotMainHand),changeEmitter:e=>l.onAny([e.specOptionsChangeEmitter,e.levelChangeEmitter,e.gearChangeEmitter])}),o=()=>a({fieldName:"imbueOh",values:[{value:e.NoImbue,tooltip:"No Off Hand Enchant"},m,v,t,d],showWhen:e=>null!=e.getEquippedItem(i.ItemSlotOffHand),changeEmitter:e=>l.onAny([e.specOptionsChangeEmitter,e.levelChangeEmitter,e.gearChangeEmitter])}),h=()=>a({fieldName:"shield",values:[{value:n.NoShield,tooltip:"No Shield"},{actionId:e=>e.getMatchingSpellActionId([{id:324,minLevel:8,maxLevel:15},{id:325,minLevel:16,maxLevel:23},{id:905,minLevel:24,maxLevel:31},{id:945,minLevel:32,maxLevel:39},{id:8134,minLevel:40,maxLevel:47},{id:10431,minLevel:48,maxLevel:55},{id:10432,minLevel:56}]),value:n.LightningShield}],changeEmitter:e=>l.onAny([e.specOptionsChangeEmitter,e.levelChangeEmitter])});export{h as S,L as a,o as b};
//# sourceMappingURL=shaman_shields-931a134e.chunk.js.map
