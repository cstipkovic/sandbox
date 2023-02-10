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

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.review.push(this.review);
        }
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'lorem ipsum',
            images: [],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product',
                    author: 'aa@bb.com'
                },
                {
                    stars: 3,
                    body: 'Good product',
                    author: 'bla@cc.com'
                }
            ]
        },
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'lorem ipsum',
            images: [
                'Dodecahedron.jpg',
                'Dodecahedron-thumb.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product',
                    author: 'aa@bb.com'
                },
                {
                    stars: 3,
                    body: 'Good product',
                    author: 'bla@cc.com'
                }
            ]
        },
        {
            name: 'Penagonal Gem',
            price: 5.95,
            description: 'lorem ipsum',
            images: [
                'Dodecahedron.jpg',
                'Dodecahedron-thumb.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product',
                    author: 'aa@bb.com'
                },
                {
                    stars: 3,
                    body: 'Good product',
                    author: 'bla@cc.com'
                }
            ]
        },
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'lorem ipsum',
            images: [
                'Dodecahedron.jpg',
                'Dodecahedron-thumb.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product',
                    author: 'aa@bb.com'
                },
                {
                    stars: 3,
                    body: 'Good product',
                    author: 'bla@cc.com'
                }
            ]
        }
    ];
})();
