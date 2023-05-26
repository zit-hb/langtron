/**
 * Escapes the special HTML characters `&`, `<`, `>`, `"`, and `'`.
 * 
 * @param {string} s
 * @returns {string}
 */
function htmlEscape(s) {
    return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

/**
 * An interpolation function that can be used as a tagged template.
 * Properly HTML-escapes all values while keeping the literals as-is.
 * 
 * @param {string[]} literals
 * @param  {...any} values 
 * @returns {string}
 */
function interpolate(literals, ...values) {
    let interpolated = literals[0];
    for (let i = 1; i < literals.length; i++) {
        interpolated += htmlEscape(String(values[i - 1])) + literals[i];
    }
    return interpolated;
}

/**
 * Kill Log Controller
 *
 * @param {Object} $scope
 * @param {Object} $interpolate
 * @param {SocketClient} client
 */
function KillLogController($scope, $interpolate, client)
{
    if (!$scope.game) { return; }

    AbstractController.call(this, $scope);

    this.client    = client;
    this.game      = $scope.game;
    this.element   = document.getElementById('kill-log-feed');
    this.templates = {
        suicide: ({ deadPlayer }) => interpolate`<span style="color: ${deadPlayer.color}">${deadPlayer.name}</span> committed suicide`,
        kill: ({ deadPlayer, killerPlayer }) => interpolate`<span style="color: ${deadPlayer.color}">${deadPlayer.name}</span> was killed by <span style="color: ${killerPlayer.color}">${killerPlayer.name}</span>`,
        crash: ({ deadPlayer, killerPlayer }) => interpolate`<span style="color: ${deadPlayer.color}">${deadPlayer.name}</span> crashed on <span style="color: ${killerPlayer.color}">${killerPlayer.name}</span>`,
        wall: ({ deadPlayer }) => interpolate`<span style="color: ${deadPlayer.color}">${deadPlayer.name}</span> crashed on the wall`,
    };

    this.clear = this.clear.bind(this);
    this.onDie = this.onDie.bind(this);

    this.client.on('die', this.onDie);
    this.client.on('round:new', this.clear);
}

KillLogController.prototype = Object.create(AbstractController.prototype);
KillLogController.prototype.constructor = KillLogController;

/**
 * On die
 *
 * @param {Event} e
 */
KillLogController.prototype.onDie = function(e)
{
    var avatar = this.game.avatars.getById(e.detail[0]);

    if (avatar) {
        this.display(new MessageDie(avatar, e.detail[1] ? this.game.avatars.getById(e.detail[1]) : null, e.detail[2]));
    }
};

/**
 * Display the given message
 *
 * @param {string} message
 */
KillLogController.prototype.display = function(message) {
    var content = '<span class="message-icon icon-dead"></span>' + this.templates[message.type](message),
        item    = this.element.children[0];

    item.innerHTML = content;
    this.element.appendChild(item);
};

/**
 * Clear
 */
KillLogController.prototype.clear = function()
{
    for (var i = this.element.children.length - 1; i >= 0; i--) {
        this.element.children[i].innerHTML = '';
    }
};
