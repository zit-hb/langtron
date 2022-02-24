/**
 * Explosion Bonus
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusSelfExplode(x, y)
{
    BonusSelf.call(this, x, y);
}

BonusSelfExplode.prototype = Object.create(BonusSelf.prototype);
BonusSelfExplode.prototype.constructor = BonusSelfExplode;

/**
 * Duration
 *
 * @type {Number}
 */
BonusSelfExplode.prototype.duration = 100;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusSelfExplode.prototype.getEffects = function(avatar)
{
    return [['radius', 3]];
};
