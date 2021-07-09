/**
 * Big All Color Black
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusAllColorBlack(x, y)
{
    BonusAll.call(this, x, y);

    this.getColor = this.getColor.bind(this);
}

BonusAllColorBlack.prototype = Object.create(BonusAll.prototype);
BonusAllColorBlack.prototype.constructor = BonusAllColorBlack;

/**
 * Duration
 *
 * @type {Number}
 */
BonusAllColorBlack.prototype.duration = 7500;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusAllColorBlack.prototype.getEffects = function(avatar)
{
    return [['color', this.getColor(avatar)]];
};

/**
 * Get color
 *
 * @param {Avatar} avatar
 *
 * @return {String}
 */
BonusAllColorBlack.prototype.getColor = function(avatar)
{
    return '#000000';
};
