var market_config;
(function() {
    var __STRINGS__;
    
    market_config = {
        groups: {
            "market-controls": {
                combine: true,
                comboBase: "/combo/_",
                root: "/tradingpost/game/js/controls/",
                modules: {
                    "market-itemgrid": {
                        path: "itemgrid.3310824482.js",
                        requires: ["node", "event", "transition", "widget-base", "base", "lib-coins"]
                    },
                    "market-itemgrid-sort": {
                        path: "itemgrid-sort.125758115.js",
                        requires: ["base-build", "plugin"]
                    },
                    "market-itemgrid-filter": {
                        path: "itemgrid-filter.2222969562.js",
                        requires: ["base-build", "plugin", "node", "autocomplete-base", "autocomplete-filters"]
                    },
                    "market-itemgrid-prices": {
                        path: "itemgrid-prices.3718117909.js",
                        requires: ["plugin", "base-build", "io-base", "json-parse", "lib-coins", "node"]
                    },
                    "market-listings": {
                        path: "listings.691629048.js",
                        requires: ["node", "widget-base", "base", "lib-coins"]
                    },
                    "market-listings-highlighter": {
                        path: "listings-highlighter.3339239668.js",
                        requires: ["base", "base-build", "plugin", "node"]
                    },
                    "market-listings-calculator": {
                        path: "listings-calculator.223960964.js",
                        requires: ["plugin", "base", "base-build"]
                    },
                    "market-listings-checkboxes": {
                        path: "listings-checkboxes.208197983.js",
                        requires: ["base", "plugin", "node-base", "node-event-delegate"]
                    }
                }
            },
            "market-me": {
                combine: true,
                comboBase: "/combo/_",
                root: "/tradingpost/game/js/me/",
                modules: {
                    "market-me": {
                        path: "me.47128892.js",
                        requires: ["node", "datatable", "datatable-datasource", "datasource-io", "datasource-jsonschema", "game-api", "exchange-footer", "lib-neterror", "market-icon-tooltips", "ac-select", "lib-pagination", "datatable-coin-nodes"]
                    },
                    "market-me-buying": {
                        path: "me-buying.2549156962.js",
                        requires: ["io-base", "event-delegate"]
                    },
                    "market-me-selling": {
                        path: "me-selling.898045293.js",
                        requires: ["io-base", "event-delegate"]
                    },
                    "market-me-bought": {
                        path: "me-bought.584381056.js"
                    },
                    "market-me-sold": {
                        path: "me-sold.180493531.js"
                    }
                }
            },
            "market-sell": {
                combine: true,
                comboBase: "/combo/_",
                root: "/tradingpost/game/js/sell/",
                modules: {
                    "market-sell-inventory": {
                        path: "sell-inventory.1897377614.js",
                        requires: ["node", "event-custom", "io-base", "json-parse", "game-api"]
                    },
                    "market-sell-form": {
                        path: "sell-form.512447271.js",
                        requires: ["node", "event", "number-input", "lib-coins", "game-api", "exchange-footer", "coin-input"]
                    },
                    "market-sell-quick": {
                        path: "sell-quick.3652871645.js",
                        requires: ["node", "event", "io-base", "json-parse", "lib-coins", "market-sell-form"]
                    },
                    "market-sell-submit": {
                        path: "sell-submit.2611768585.js",
                        requires: ["node", "event", "game-api", "market-sell-form"]
                    },
                    "market-sell": {
                        path: "sell.2066904097.js",
                        requires: ["node", "event", "ac-select", "market-itemgrid", "market-itemgrid-sort", "market-itemgrid-filter", "market-itemgrid-prices", "market-sell-inventory", "market-sell-form", "market-sell-quick", "market-sell-submit"]
                    }
                }
            },
            "market-buy": {
                combine: true,
                comboBase: "/combo/_",
                root: "/tradingpost/game/js/buy/",
                modules: {
                    "market-buy-shared": {
                        path: "buy.816957667.js",
                        requires: ["node", "game-api", "exchange-footer", "market-buy-sidebar", "market-icon-tooltips", "number-input", "market-listings"]
                    },
                    "market-buy-sidebar": {
                        path: "buy-sidebar.1993341908.js",
                        requires: ["node", "game-api", "array-extras", "cookie"]
                    },
                    "market-buy-instant": {
                        path: "buy-instant.398254444.js",
                        requires: ["node-base", "event-base", "event-delegate", "market-buy-shared", "market-buy-instant-purchasing", "market-buy-instant-listings"]
                    },
                    "market-buy-instant-purchasing": {
                        path: "buy-instant-purchasing.1491257041.js",
                        requires: ["node", "io-base", "json-parse", "event", "array-extras", "market-buy-instant-results", "gallery-event-nav-keys", "lib-neterror"]
                    },
                    "market-buy-instant-results": {
                        path: "buy-instant-results.2096592496.js",
                        requires: ["node", "event", "overlay", "lib-coins"]
                    },
                    "market-buy-instant-listings": {
                        path: "buy-instant-listings.778548680.js",
                        requires: ["event-base", "event-custom", "market-listings", "market-listings-highlighter", "market-listings-calculator", "market-listings-checkboxes", "io-base"]
                    },
                    "market-buy-instant-financing": {
                        path: "buy-instant-financing.80761480.js",
                        requires: ["node", "transition", "io-base", "json-parse", "market-buy-instant-financing-submit"]
                    },
                    "market-buy-instant-financing-submit": {
                        path: "buy-instant-financing-submit.2866493015.js",
                        requires: ["node", "event", "io-base", "querystring-stringify", "lib-neterror"]
                    },
                    "market-buy-persistent": {
                        path: "buy-persistent.718535179.js",
                        requires: ["io-form", "json-parse", "overlay", "market-buy-persistent-pricing", "market-buy-shared", "lib-neterror"]
                    },
                    "market-buy-persistent-pricing": {
                        path: "buy-persistent-pricing.3990874176.js",
                        requires: ["node", "number-input", "lib-coins", "coin-input"]
                    }
                }
            },
            market: {
                combine: true,
                comboBase: "/combo/_",
                root: "/tradingpost/game/js/",
                modules: {
                    "market-home": {
                        path: "home.3952982837.js",
                        requires: ["event-custom", "exchange-footer", "game-api", "market-search-form", "market-icon-tooltips", "market-home-trends"]
                    },
                    "market-home-trends": {
                        path: "home-trends.1043376374.js",
                        requires: ["node", "event", "game-api", "event-delegate", "transition", "io-base", "json-parse", "lib-neterror"]
                    },
                    "market-search-results": {
                        path: "search-results.3235256128.js",
                        requires: ["node", "event-delegate", "datatable", "datatable-datasource", "datatable-remotesort-plugin", "datasource-io", "datasource-jsonschema", "exchange-footer", "market-search-form", "lib-neterror", "market-icon-tooltips", "lib-coins", "lib-pagination", "datatable-coin-nodes", "querystring"]
                    },
                    "market-search-form": {
                        path: "search-form.478873218.js",
                        requires: ["node", "event", "autocomplete", "autocomplete-highlighters", "event-valuechange", "transition", "ac-select", "number-input"]
                    },
                    "market-icon-tooltips": {
                        path: "icon-tooltips.757808586.js",
                        requires: ["node-base", "event-delegate", "game-api", "event-mouseenter"]
                    },
                    "market-header-tooltips": {
                        path: "header-tooltips.2220463855.js",
                        requires: ["node-base", "game-api", "event-delegate"]
                    },
                    "market-header": {
                        path: "header.3508559.js",
                        requires: ["node-base", "game-api", "event-delegate", "market-header-tooltips"],
                        condition: {
                            name: "market-header",
                            trigger: "exchange-header",
                            test: function () {
                                return true;
                            }
                        }
                    },
                    "datatable-footer-plugin": {
                        path: "datatable-footer.4276271292.js",
                        requires: ["plugin", "node", "event-custom", "base-build"],
                        condition: {
                            name: "datatable-footer-plugin",
                            trigger: "datatable-base",
                            test: function () {
                                return true;
                            }
                        }
                    },
                    "datatable-remotesort-plugin": {
                        path: "datatable-remotesort.2243763907.js",
                        requires: ["plugin", "node", "event-custom", "base-build", "datatable-base"]
                    }
                }
            }
        }
    };
}());