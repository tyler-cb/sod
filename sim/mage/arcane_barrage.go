package mage

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (mage *Mage) registerArcaneBarrageSpell() {
	if !mage.Talents.ArcaneBarrage {
		return
	}

	baseCost := .18 * mage.BaseMana

	mage.ArcaneBarrage = mage.RegisterSpell(core.SpellConfig{
		ActionID:     core.ActionID{SpellID: 44781},
		SpellSchool:  core.SpellSchoolFrost,
		ProcMask:     core.ProcMaskSpellDamage,
		Flags:        SpellFlagMage | BarrageSpells,
		MissileSpeed: 24,
		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost: baseCost *
					(1 - .01*float64(mage.Talents.ArcaneFocus)) *
					core.TernaryFloat64(mage.HasMajorGlyph(proto.MageMajorGlyph_GlyphOfArcaneBarrage), .8, 1),
				GCD: core.GCDDefault,
			},
			CD: core.Cooldown{
				Timer:    mage.NewTimer(),
				Duration: time.Second * 3,
			},
		},

		BonusHitRating:   float64(mage.Talents.ArcaneFocus) * core.SpellHitRatingPerHitChance,
		DamageMultiplier: 1 + .04*float64(mage.Talents.TormentTheWeak),
		CritMultiplier:   mage.SpellCritMultiplier(1, mage.bonusCritDamage),
		ThreatMultiplier: 1 - 0.2*float64(mage.Talents.ArcaneSubtlety),

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := sim.Roll(936, 1144) + (2.5/3.5)*spell.SpellPower()
			result := spell.CalcDamage(sim, target, baseDamage, spell.OutcomeMagicHitAndCrit)

			spell.WaitTravelTime(sim, func(sim *core.Simulation) {
				spell.DealDamage(sim, result)
			})
		},
	})
}
