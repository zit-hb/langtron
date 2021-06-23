/**
 * Probability Bonus
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusGameProbability(x, y)
{
    BonusGame.call(this, x, y);
}

BonusGameProbability.prototype = Object.create(BonusGame.prototype);
BonusGameProbability.prototype.constructor = BonusGameProbability;

/**
 * Duration
 *
 * @type {Number}
 */
BonusGameProbability.prototype.duration = 0;

/**
 * Get probability
 *
 * @param {Game} game
 *
 * @return {Number}
 */
BonusGameProbability.prototype.getProbability = function (game)
{
    var ratio = 1 - game.getAliveAvatars().count() / game.getPresentAvatars().count();

    if (ratio < 0.5) {
        return this.probability;
    }

    return Math.round((BaseBonus.prototype.probability - ratio) * 10) / 10;
};

/**
 * Apply on
 */
BonusGameProbability.prototype.on = function()
{
    bonusManager = this.target.bonusManager;
    bonusManager.bonusPopingTime = 100;

    setTimeout(function() {
        bonusManager.bonusPopingTime = bonusManager.originalBonusPopingTime;
    }, 2500);
};
