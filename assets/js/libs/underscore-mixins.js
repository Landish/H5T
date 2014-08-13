_.mixin({


    /**
     * Get Window Location Hash
     *
     * If no {hash} param is passed, it will return the current hash.
     * Otherwise it will check if passed {hash} param is equal to location hash.
     * @param hash
     * @returns {string}
     */
    hash: function(hash) {
      return _.isUndefined(hash) ? window.location.hash : '#' + hash === window.location.hash;
    },

    /**
     * Get URL Parameter Name
     * @param name
     * @returns {Array|{index: number, input: string}|string}
     */
    param: function(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    },

    /**
     * Render HTML Template
     * @param template
     * @param data
     * @returns {*}
     */
    render: function(template, data) {
        return _.template(template, data, { interpolate: /\{\{(.+?)\}\}/g, escape: /\{\{(.+?)\}\}/g, evaluate: /\{\{(.+?)\}\}/g });
    },

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