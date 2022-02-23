/**
 * All Dashed
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusAllDashed(x, y)
{
    BonusAll.call(this, x, y);
}

BonusAllDashed.prototype = Object.create(BonusAll.prototype);
BonusAllDashed.prototype.constructor = BonusAllDashed;

/**
 * Duration
 *
 * @type {Number}
 */
BonusAllDashed.prototype.duration = 7500;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusAllDashed.prototype.getEffects = function(avatar)
{
    return [['dashed', 10]];
};

