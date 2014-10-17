'use strict';

angular.module('buoneForchette.recipes', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/recipes', {
                    templateUrl: 'recipes/recipes.html',
                    controller: 'RecipesCtrl',
                    controllerAs: 'ctrl'
                });
            }])

        .filter('categ', [function () {
                return function (recipes, filterCateg) {
                    var filtered = [];
                    for (var i = 0; i < recipes.length; i++) {
                        var recipe = recipes[i];
                        if (filterCateg.categ !== '') {
                            if (filterCateg.subCateg !== '') {
                                if (recipe.categ === filterCateg.categ && recipe.subCateg === filterCateg.subCateg) {
                                    filtered.push(recipe);
                                }
                            }else{
                                if (recipe.categ === filterCateg.categ) {
                                    filtered.push(recipe);
                                }
                            }
                        }else{
                            filtered.push(recipe);
                        }
                    }
                    return filtered;
                };
            }])

        .controller('RecipesCtrl', ['filterFilter', function (filterFilter) {
                var self = this;
                self.recipes = [
                    {id: 1, name: 'Risotto ai Funghi', desc: 'Il risotto ai funghi porcini è un classico primo piatto autunnale dal gustoso e aromatico sapore dovuto alla presenza del re dei funghi: il porcino.', categ: 'Primi', subCateg: 'Risotti', img: 'img/risotto_ai_funghi.jpg'},
                    {id: 2, name: 'Spaghetti alla Carbonara', desc: 'Le uova, il guanciale e il pepe, conferiscono un gusto intenso e avvolgente agli spaghetti alla carbonara.', categ: 'Primi', subCateg: 'Pasta', img: 'img/spaghetti_alla_carbonara.jpg'},
                    {id: 3, name: 'Penne all\'Arrabbiata', desc: 'Le penne all’arrabbiata fanno parte della tradizione culinaria Romana, che ci regala un altro piatto fatto proprio, nonostante sia stato preparato in molte altre regioni italiane; una specialità semplice dai sapori decisi.', categ: 'Primi', subCateg: 'Pasta', img: 'img/penne_all_arrabbiata.jpg'},
                    {id: 4, name: 'Risotto allo Zafferano', desc: 'Nel Nord d’Italia il risotto allo zafferano è sicuramente il più diffuso e preferito da giovani e buongustai, in quanto semplice da preparare, gustoso, leggero e colorato. ', categ: 'Primi', subCateg: 'Risotti', img: 'img/risotto_allo_zafferano.jpg'},
                    {id: 5, name: 'Spaghetti Aglio e Olio', desc: 'Gli spaghetti aglio, olio e peperoncino è sicuramente la ricetta più semplice della cucina italiana ma allo stesso tempo, per risultare davvero buona deve essere preparata per bene.', categ: 'Primi', subCateg: 'Pasta', img: 'img/spaghetti_aglio_e_olio.jpg'}
                ];
                self.filterCateg =
                        {
                            categ: '',
                            subCateg: ''
                        };
                self.setFilterCateg = function (filterCateg) {
                    self.filterCateg = filterCateg;
                };
            }]);