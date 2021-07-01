/**
 * Invincible Bonus
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusSelfInvincible(x, y)
{
    BonusSelf.call(this, x, y);
}

BonusSelfInvincible.prototype = Object.create(BonusSelf.prototype);
BonusSelfInvincible.prototype.constructor = BonusSelfInvincible;

/**
 * Duration
 *
 * @type {Number}
 */
BonusSelfInvincible.prototype.duration = 7500;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusSelfInvincible.prototype.getEffects = function(avatar)
{
    return [
        ['invincible', true],
        ['velocity', -0.25 * BaseAvatar.prototype.velocity]
    ];
};
