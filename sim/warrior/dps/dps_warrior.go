package dps

import (
	"github.com/wowsims/sod/sim/core"
	"github.com/wowsims/sod/sim/core/proto"
	"github.com/wowsims/sod/sim/warrior"
)

func RegisterDpsWarrior() {
	core.RegisterAgentFactory(
		proto.Player_Warrior{},
		proto.Spec_SpecWarrior,
		func(character *core.Character, options *proto.Player) core.Agent {
			return NewDpsWarrior(character, options)
		},
		func(player *proto.Player, spec interface{}) {
			playerSpec, ok := spec.(*proto.Player_Warrior)
			if !ok {
				panic("Invalid spec value for Warrior!")
			}
			player.Spec = playerSpec
		},
	)
}

type DpsWarrior struct {
	*warrior.Warrior

	Options *proto.Warrior_Options
}

func NewDpsWarrior(character *core.Character, options *proto.Player) *DpsWarrior {
	warOptions := options.GetWarrior()

	war := &DpsWarrior{
		Warrior: warrior.NewWarrior(character, options.TalentsString, warrior.WarriorInputs{
			StanceSnapshot: warOptions.Options.StanceSnapshot,
		}),
		Options: warOptions.Options,
	}

	war.EnableRageBar(core.RageBarOptions{
		StartingRage:   warOptions.Options.StartingRage,
		RageMultiplier: core.TernaryFloat64(war.HasRune(proto.WarriorRune_RuneEndlessRage), 1.25, 1),
	})

	war.EnableAutoAttacks(war, core.AutoAttackOptions{
		MainHand:       war.WeaponFromMainHand(),
		OffHand:        war.WeaponFromOffHand(),
		AutoSwingMelee: true,
		ReplaceMHSwing: war.TryHSOrCleave,
	})

	return war
}

func (war *DpsWarrior) OnGCDReady(sim *core.Simulation) {
	return
}

func (war *DpsWarrior) GetWarrior() *warrior.Warrior {
	return war.Warrior
}

func (war *DpsWarrior) Initialize() {
	war.Warrior.Initialize()

	if war.Options.UseRecklessness {
		war.RegisterRecklessnessCD()
	}

	if war.GetAura("Gladiator Stance") != nil {
		war.GladiatorStanceAura.BuildPhase = core.CharacterBuildPhaseTalents
	} else if war.PrimaryTalentTree == warrior.FuryTree {
		war.BerserkerStanceAura.BuildPhase = core.CharacterBuildPhaseTalents
	} else if war.PrimaryTalentTree == warrior.ArmsTree {
		war.BattleStanceAura.BuildPhase = core.CharacterBuildPhaseTalents
	}
}

func (war *DpsWarrior) Reset(sim *core.Simulation) {
	war.Warrior.Reset(sim)
	if war.GetAura("Gladiator Stance") != nil {
		war.GladiatorStanceAura.Activate(sim)
		war.Stance = warrior.GladiatorStance
	} else if war.PrimaryTalentTree == warrior.FuryTree {
		war.BerserkerStanceAura.Activate(sim)
		war.Stance = warrior.BerserkerStance
	} else if war.PrimaryTalentTree == warrior.ArmsTree {
		war.BattleStanceAura.Activate(sim)
		war.Stance = warrior.BattleStance
	}
}
