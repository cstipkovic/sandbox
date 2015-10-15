window.Calculator = {
    current: 0,

    add: function () {
        var sum = this.current;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        this.current = sum;

        return this.current;
    },

    subtract: function () {
        var result = this.current;

        for (var i = 0; i < arguments.length; i++) {
            result -= arguments[i];
        }

        this.current = result;

        return this.current;
    },

    reset: function () {
        this.current = 0;
    }
};
