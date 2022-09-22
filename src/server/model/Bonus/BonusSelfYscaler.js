/**
 * Yscaler Bonus
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusSelfYscaler(x, y)
{
    BonusSelf.call(this, x, y);
}

BonusSelfYscaler.prototype = Object.create(BonusSelf.prototype);
BonusSelfYscaler.prototype.constructor = BonusSelfYscaler;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusSelfYscaler.prototype.getEffects = function(avatar)
{
    return [['velocity', -BaseAvatar.prototype.velocity]];
};
