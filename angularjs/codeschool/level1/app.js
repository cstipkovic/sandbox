(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'lorem ipsum',
            images: []
        },
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'lorem ipsum',
            images: [
                'Dodecahedron.jpg',
                'Dodecahedron-thumb.jpg'
            ]
        },
        {
            name: 'Penagonal Gem',
            price: 5.95,
            description: 'lorem ipsum',
            images: [
                'Dodecahedron.jpg',
                'Dodecahedron-thumb.jpg'
            ]
        },
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'lorem ipsum',
            images: [
                'Dodecahedron.jpg',
                'Dodecahedron-thumb.jpg'
            ]
        }
    ];
})();
