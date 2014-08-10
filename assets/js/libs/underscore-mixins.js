_.mixin({

    /**
     * Converts JS Object into HTML Attributes
     * @param obj
     * @returns {string}
     * @source https://gist.github.com/Landish/33a47e5c1a02d5ef2457
     */
    toAttrs: function(obj) {
        return _.map(obj,function(value, attr) {
            return attr + '="' + value + '"';
        }).join(' ');
    },
    /**
     * Format Money
     * @param amount
     * @param n
     * @param x
     * @param s
     * @param c
     * @returns {string}
     */
    formatMoney : function(amount, n, x, s, c) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
            num = amount.toFixed(Math.max(0, ~~n));
        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    },
    /**
     * Console Log
     * @param message
     * @returns {*}
     */
    log: function(message) {
        return console.log(message);
    },
    /**
     * Console Warn
     * @param message
     * @returns {*}
     */
    warn: function(message) {
        return console.warn(message);
    },
    /**
     * Console Error
     * @param message
     * @returns {*}
     */
    error: function(message) {
        return console.error(message);
    },
    /**
     * Console Info
     * @param message
     * @returns {*}
     */
    info: function(message) {
        return console.info(message);
    }

});