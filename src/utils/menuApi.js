const menuApi=[
    // 20240125205931
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER

{
    "statusCode": 0,
    "data": {
      "statusMessage": "done successfully",
      "cards": [
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "65797",
                "name": "Leon's - Burgers & Wings (Leon Grill)",
                "city": "Bangalore",
                "slugs": {
                  "restaurant": "leon-grill-koramangala-koramangala",
                  "city": "bangalore"
                },
                "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "30000",
                "costForTwoMessage": "₹300 for two",
                "cuisines": [
                  "American",
                  "Snacks"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                  "restaurantId": "65797",
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3100
                    },
                    {
                      "name": "time"
                    },
                    {
                      "name": "special"
                    }
                  ],
                  "totalFee": 3100,
                  "icon": "v1648635511/Delivery_fee_new_cjxumu",
                  "message": "1.3 kms | ₹31 Delivery fee will apply"
                },
                "parentId": "371281",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+ ratings",
                "sla": {
                  "restaurantId": "65797",
                  "deliveryTime": 46,
                  "minDeliveryTime": 45,
                  "maxDeliveryTime": 50,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "stressFactor": 1,
                  "rainMode": "RAIN_MODE_NONE",
                  "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  "zoneId": 1,
                  "slaString": "45-50 MINS",
                  "lastMileTravelString": "1.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-01-26 04:00:00",
                  "visibility": true,
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "header": "Flat ₹125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹299",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "Flat ₹175 off | Use REPUBLIC175",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹299 | Use code SWIGGYWEEKENDS",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "Flat ₹175 off | Use REPUBLIC175",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "visible": true
                },
                "badges": {
                  
                },
                "slugString": "leon-grill-koramangala-koramangala",
                "multiOutlet": true,
                "isOpen": true,
                "labels": [
                  {
                    "title": "Timings",
                    "message": "null"
                  },
                  {
                    "title": "Address",
                    "message": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95"
                  },
                  {
                    "title": "Cuisines",
                    "message": "American,Snacks"
                  }
                ],
                "totalRatings": 10000,
                "aggregatedDiscountInfoV2": {
                  "header": "Flat ₹125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹299",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "Flat ₹175 off | Use REPUBLIC175",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹299 | Use code SWIGGYWEEKENDS",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "Flat ₹175 off | Use REPUBLIC175",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "couponDetailsCta": "View coupon details"
                },
                "type": "F",
                "nudgeBanners": [
                  {
                    "minValue": 209,
                    "maxValue": 299,
                    "priority": 1,
                    "couponCode": "SWIGGYWEEKENDS",
                    "discountInfo": {
                      "discountType": "Flat",
                      "value": 125
                    },
                    "lockedMessage": "Add items worth ₹<amount> to save ₹125 | Code SWIGGYWEEKENDS",
                    "unlockedMessage": "SWIGGYWEEKENDS Coupon Unlocked! Use it to save ₹125",
                    "logoCtx": {
                      
                    }
                  },
                  {
                    "minValue": 349,
                    "maxValue": 499,
                    "priority": 2,
                    "couponCode": "REPUBLIC175",
                    "discountInfo": {
                      "discountType": "Flat",
                      "value": 175
                    },
                    "lockedMessage": "Add items worth ₹<amount> to save ₹175 | Code REPUBLIC175",
                    "unlockedMessage": "REPUBLIC175 Coupon Unlocked! Use it to save ₹175",
                    "logoCtx": {
                      
                    }
                  }
                ],
                "headerBanner": {
                  "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/65797"
                },
                "expectationNotifiers": [
                  {
                    "text": "1.3 kms | ₹31 Delivery fee will apply",
                    "icon": {
                      "imageId": "v1648635511/Delivery_fee_new_cjxumu"
                    },
                    "popup": {
                      "cta": {
                        
                      }
                    },
                    "type": "DISTANCE_FEE_NON_FOOD_LM",
                    "enrichedText": "<b>1.3 kms</b> | ₹31 Delivery fee will apply",
                    "halfCardPopup": {
                      "halfCardPopupHeader": {
                        
                      }
                    }
                  }
                ],
                "generalPurposeInfoListV2": [
                  {
                    "cta": {
                      "info": {
                        "recordings": {
                          
                        }
                      },
                      "linkCta": {
                        
                      }
                    }
                  }
                ],
                "ratingSlab": "RATING_SLAB_5",
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "hasBestsellerItems": true,
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "latLong": "12.93465826,77.61622146",
                "hasKidscategoryItems": true
              },
              "analytics": {
                
              }
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
              "sectionId": "POP_UP_CROUTON_MENU"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              "layout": {
                "rows": 1,
                "columns": 5,
                "horizontalScrollEnabled": true,
                "itemSpacing": 12,
                "lineSpacing": 10,
                "widgetPadding": {
                  
                },
                "containerStyle": {
                  "containerPadding": {
                    "left": 10,
                    "right": 10,
                    "bottom": 16
                  }
                },
                "scrollBar": {
                  
                }
              },
              "id": "offerCollectionWidget_UX4",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  "offers": [
                    {
                      "info": {
                        "header": "FLAT ₹125 OFF",
                        "offerTag": "FLAT DEAL",
                        "offerTagColor": "#E46D47",
                        "offerIds": [
                          "556b6439-53b6-4a90-871a-0a7eb0ee49b3"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE SWIGGYWEEKENDS",
                        "description": "ABOVE ₹299",
                        "offerType": "offers",
                        "restId": "65797",
                        "offerLogo": "offers/generic",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT ₹175 OFF",
                        "offerTag": "FLAT DEAL",
                        "offerTagColor": "#E46D47",
                        "offerIds": [
                          "51b9c26b-f32d-47ba-a592-af34c33021de"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE REPUBLIC175",
                        "description": "ABOVE ₹499",
                        "offerType": "offers",
                        "restId": "65797",
                        "offerLogo": "offers/generic",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "20% OFF UPTO ₹125",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                        "offerIds": [
                          "b1f08fcb-a865-44ae-9332-779929c87779"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE KOTAK125",
                        "description": "ABOVE ₹500",
                        "offerType": "offers",
                        "restId": "65797",
                        "offerLogo": "rng/md/ads/production/4abdba6754dfedb04324150e316a4004",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT ₹100 OFF",
                        "offerTag": "FLAT DEAL",
                        "offerTagColor": "#E46D47",
                        "offerIds": [
                          "36de2669-879b-421c-bb22-6466214d623f"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE FLATDEAL",
                        "description": "ABOVE ₹499",
                        "offerType": "offers",
                        "restId": "65797",
                        "offerLogo": "offers/generic",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT ₹120 OFF",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                        "offerIds": [
                          "0681e750-4d60-4066-9e7d-be11d720f180"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE AXIS120",
                        "description": "ABOVE ₹500",
                        "offerType": "offers",
                        "restId": "65797",
                        "offerLogo": "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    }
                  ],
                  "habitMilestoneInfo": {
                    "callout": {
                      
                    }
                  }
                }
              }
            }
          }
        },
        {
          "groupedCard": {
            "cardGroupMap": {
              "REGULAR": {
                "cards": [
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        "badges": {
                          
                        },
                        "vegOnlyDetails": {
                          "imageId": "AutoVegOnly_qkjowj",
                          "title": "Showing only vegetarian options.",
                          "description": "Tap on the VEG ONLY button to turn off the setting"
                        },
                        "topRatedFilter": {
                          
                        },
                        "kidsCategoryFilter": {
                          "attributes": {
                            "displayText": "Kids Favourites",
                            "tooltip": {
                              "enabled": true,
                              "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                            }
                          }
                        },
                        "vegFilter": {
                          "attributes": {
                            "displayText": "VEG"
                          }
                        },
                        "nonvegFilter": {
                          "attributes": {
                            "displayText": "NONVEG"
                          }
                        }
                      },
                      "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        "sectionId": "MENU_FILTER_TOGGLE"
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Leon Gourmet ( Burgers and Sides )",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656414",
                                "name": "Double Lamb Cheese Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Two smashed lamb patties with house seasoning, double cheese, sliced gherkins, onions, lettuce, tomato and gourmet sauce nestled on a toasted bun",
                                "imageId": "9dcc39adff467230c6981b067b432524",
                                "inStock": 1,
                                "price": 48900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050860",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648848",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648849",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648850",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "13 ratings",
                                    "ratingCountV2": "13"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656459",
                                "name": "Single Lamb Cheese Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | A succulent smashed lamb patty with house seasoning, cheese, sliced gherkins, onions, lettuce, tomato and gourmet sauce on a toasted bun",
                                "imageId": "57a1bdfe8ff2e0c1d2f90bb734d006d0",
                                "inStock": 1,
                                "price": 34900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051405",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648941",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648942",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648943",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656462",
                                "name": "Tender Hot Chicken Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Leon's juicy hot chicken tenders with cabbage slaw, sliced gherkins, lettuce, and gourmet sauce",
                                "imageId": "ccb74f434ff4dca9f80cd20aa07e20e1",
                                "inStock": 1,
                                "price": 32900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051414",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648944",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648945",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648946",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656444",
                                "name": "Korean Chicken Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Korean style fried chicken glazed with tantalizing gochujang sauce, topped with toasted sesame seeds that sits over red cabbage slaw with lettuce, cheese and gourmet sauce on a fluffy toasted bun",
                                "imageId": "31a5a5d5939505e7bf0fadf5356362d6",
                                "inStock": 1,
                                "price": 32900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051174",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648920",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648921",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648922",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "28 ratings",
                                    "ratingCountV2": "28"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656407",
                                "name": "Chilli Cheese Chicken Tikka Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Authentic and delicious chicken tikka breast marinated in house with various spices, lettuce, tomato, onions, sliced gherkins, cheese and gourmet sauce in a toasted bun",
                                "imageId": "fdaf6d9c04401710c7f31498ec9a9986",
                                "inStock": 1,
                                "price": 32900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050795",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648835",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648837",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648838",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656443",
                                "name": "Korean Cheese Delight Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Korean style fried gooey cheese patty glazed with gochujang sauce, topped with toasted sesame seeds that sits over red cabbage slaw, with lettuce, cheese and gourmet sauce on a toasted bun",
                                "imageId": "1471afc70a7852b3987dc456573dd168",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 32900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051171",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648914",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648918",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656448",
                                "name": "Korean Paneer Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Korean style fried paneer patty glazed with gochujang sauce, topped with toasted sesame seeds that sits over red cabbage slaw, with lettuce, cheese and gourmet sauce on a toasted bun",
                                "imageId": "6a0b44d6fbff2a05ae133c479d66f1bf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051202",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648923",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121648925",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656450",
                                "name": "Korean Veg Supreme Burger",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Korean style fried veg patty, glazed with gochujang sauce, topped with toasted sesame seeds that sits over red cabbage slaw, with lettuce, cheese and gourmet sauce on a toasted bun",
                                "imageId": "fd5a865c7310527520aead4e08c5cf5c",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136945",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136946",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136947",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656446",
                                "name": "Lamb Loaded fries",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Fries loaded with grilled smash lamb patty, onions, sliced gherkins, cheese and gourmet sauce",
                                "imageId": "8c624d59f69282607ee3004d95a6f555",
                                "inStock": 1,
                                "price": 39900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656445",
                                "name": "Korean Chicken Loaded fries",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Fries loaded with Korean style fried chicken popcorn, sliced gherkins and gourmet sauce",
                                "imageId": "8974f19b34f4ed4387dbdccb02205956",
                                "inStock": 1,
                                "price": 34900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "1.6",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656449",
                                "name": "Korean Paneer Loaded fries",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Fries loaded with Korean style paneer, sliced gherkins and gourmet sauce",
                                "imageId": "ca6646c55154048a3aa04a4bab940e65",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 31900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125081692",
                                "name": "8pc Onion Rings",
                                "category": "Leon Gourmet ( Burgers and Sides )",
                                "description": "Serves 1 | Cut onion rings battered with a subtle blend of spice and fried until golden and crispy",
                                "imageId": "22443e63a0efba967ff67405ca18f7aa",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Leon Burgers and Burger Combos",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102546396",
                                "name": "Peri Peri Paneer Burger Combo",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Save 27% with this combo of peri-peri paneer burger + 8 Pcs potato pops with fries & 250 Ml Beverage.",
                                "imageId": "6acfb4ac9e821a36bda5082a520e2a58",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 34133,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051361",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051363",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051359",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "65 ratings",
                                    "ratingCountV2": "65"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102546395",
                                "name": "Veggie Supreme Burger Combo",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Save 23% with this combo of Veggie supreme burger+ 8 Pcs potato pops with fries & 250 Ml beverage.",
                                "imageId": "803bb61382eaccaf79ce905cca5c7a08",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30933,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051428",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051429",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051427",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "125 ratings",
                                    "ratingCountV2": "125"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772784",
                                "name": "Grilled Lamb Burger Combo",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Save 14% with this combo of grilled lamb burger combo, our signature grilled lamb burger patty topped with crunchy lettuce, cheese, and onions served with garlic mayo on a toasted burger bun served with 2pc of peri peri chicken wings, along with fries & 250 Ml beverage.",
                                "imageId": "56366856919b9b8574f3b6ac2c13636b",
                                "inStock": 1,
                                "price": 46000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051052",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051054",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051049",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "47 ratings",
                                    "ratingCountV2": "47"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772864",
                                "name": "Grilled Peri Peri Chicken Burger Combo",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Save 12% with this combo, our peri peri chicken burger fresh grilled peri peri chicken fillet, crunchy lettuce, cheese, onions, sliced tomatoes, and signature sauce on a toasted burger bun served with 2pc of peri peri chicken wings, fries & 250 Ml beverage.",
                                "imageId": "f13d50a49a9bf73c0d24dc897db8a820",
                                "inStock": 1,
                                "price": 34857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051073",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051074",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051071",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "92 ratings",
                                    "ratingCountV2": "92"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102546397",
                                "name": "Jumbo Royal Burger Combo",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Save 17% with this combo of Jumbo royal chicken burger + 2 pcs Hot & Spicy Chicken wings with Fries & 250 Ml Beverage",
                                "imageId": "9041462c7b56ad9299c9c9fc38d76bbd",
                                "inStock": 1,
                                "price": 47095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051150",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051151",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051147",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "238 ratings",
                                    "ratingCountV2": "238"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102546394",
                                "name": "Chicken Fillet Burger Combo",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Save 22% with this combo of chicken fillet burger + 2 Pcs h&s wings with fries & 250 Ml Beverage.",
                                "imageId": "d303a2ab99078ca611713fe46035d815",
                                "inStock": 1,
                                "price": 38857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050728",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050730",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050727",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "1038 ratings",
                                    "ratingCountV2": "1038"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110527952",
                                "name": "All American Veg Cheese Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Our delicious mix veggie patty with crunchy lettuce cheese chipotle mayo in a toasted burger bun serving size: 320 Gms energy: 837 K Cal.",
                                "imageId": "f4e5e074b24951d468817a718c60cdb5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 24857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136881",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136882",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "79 ratings",
                                    "ratingCountV2": "79"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110569749",
                                "name": "Peri Peri Paneer Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Its a cottage cheese patty burger breaded with peri peri spice garnished sriacha sauce",
                                "imageId": "0fae88226c8d7ad94a3c41fbf62c62e3",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 20658,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136949",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136952",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "896 ratings",
                                    "ratingCountV2": "896"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "17212196",
                                "name": "Veggie Jumbo Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Its a potato based patty burger with green peas and carrot garnished with tomato onions and chesse serving size: 271 Gms energy: 814 K Cal.",
                                "imageId": "b46fc205eca198afedd4f114d3f20cd7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 21800,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136907",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136908",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "759 ratings",
                                    "ratingCountV2": "759"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117301657",
                                "name": "Veggie Supreme Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Delightful veg patty, layered with cheese, crunchy lettuce and jalapeno sauce on a toasted burger bun serving size: 162 Gms energy: 398 K Cal.",
                                "imageId": "235d8018a62c25c8cae661f90a82d746",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 15571,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051426",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051425",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "309 ratings",
                                    "ratingCountV2": "309"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "126102532",
                                "name": "Spicy Aloo Tikki Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Serves 1",
                                "imageId": "f4849514f3e72985c51329b907f27899",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11320,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110527948",
                                "name": "Aloo Tikki Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "A flavourful mix of marinated onions, crowned with a satisfying potato masala tikki patty. A classic twist that's comfort and taste in every bite.",
                                "imageId": "243860c96351bbdd266f07e6ffb32f78",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10277,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050555",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050553",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "104 ratings",
                                    "ratingCountV2": "104"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108305338",
                                "name": "Grilled Spicy Lamb Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Its a grilled soft and juicy lamb patty burger garnished with lettuce ,onions ,tomato & cheese serving size: 297 Gms energy: 596 K Cal.",
                                "imageId": "32a56812a47bb475598d58ef5267b823",
                                "inStock": 1,
                                "price": 29586,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051087",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051083",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051084",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051079",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "551 ratings",
                                    "ratingCountV2": "551"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108305337",
                                "name": "Grilled Peri Peri Chicken Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "It's a grilled peri peri fillet burger garnished with onions tomatoes and peri peri sauce serving size: 245 Gms energy: 390 K Cal.",
                                "imageId": "b8f72c8289a12541e33242c1663ab635",
                                "inStock": 1,
                                "price": 20857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131137005",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131137006",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131137007",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131137009",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "32 ratings",
                                    "ratingCountV2": "32"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108305339",
                                "name": "Jumbo Royal Chicken Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "It's a double fillet crunchy burger garnished with pickle gerkins and cheese serving size: 366 Gms energy: 738 K Cal.",
                                "imageId": "2d88d18c674b71d3b6777d03c3db6b50",
                                "inStock": 1,
                                "price": 33067,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051165",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051161",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051162",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051156",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "335 ratings",
                                    "ratingCountV2": "335"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110527980",
                                "name": "Louisiana Chicken Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Big, thick, crunchy and juicy fried chicken fillet, topped with chicken bacon, crispy onion and Louisiana mayo on a toasted burger bun serving size: 289 Gms energy: 487.05 K Cal.",
                                "imageId": "a8474c2c44cb3ca359ab3030006bf0bf",
                                "inStock": 1,
                                "price": 27733,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051221",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051219",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051220",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051217",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "411 ratings",
                                    "ratingCountV2": "411"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108305336",
                                "name": "Chilli Cheese Chicken Fillet Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "It's a crunchy juicy fillet burger garnised with jalepenos serving size: 249 Gms energy: 738 K Cal.",
                                "imageId": "3bc48cc676d9834e28c0f58a50941cfe",
                                "inStock": 1,
                                "price": 26133,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136887",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136888",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136889",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136890",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "1333 ratings",
                                    "ratingCountV2": "1333"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117301658",
                                "name": "Chicken Fillet Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Big, thick, crunchy and juicy fried chicken fillet, lettuce, signature sauce on a toasted burger bun serving size: 232 Gms energy: 451.9 K Cal.",
                                "imageId": "19e37f4ea1613fe129534d0d6c2447d6",
                                "inStock": 1,
                                "price": 22838,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136921",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136922",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136923",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136924",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "4017 ratings",
                                    "ratingCountV2": "4017"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110527966",
                                "name": "Classic Chicken Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "Fresh hand-breaded crispy 100% chicken breast with crunchy lettuce, and mayo in a toasted burger bun serving size: 90 Gms energy: 290 K Cal.",
                                "imageId": "0715c56fde6da6f00847088235c100f5",
                                "inStock": 1,
                                "price": 14743,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050832",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050828",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050831",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050824",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "755 ratings",
                                    "ratingCountV2": "755"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110527958",
                                "name": "Chicken Strip Burger",
                                "category": "Leon Burgers and Burger Combos",
                                "description": "2 spicy 100% chicken strips\", crunchy lettuce and mayo served with a toasted burger bun serving size: 87 Gms energy: 287 K Cal.",
                                "imageId": "5c941ab0013286237944c4168ed22011",
                                "inStock": 1,
                                "price": 12600,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050782",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050780",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050781",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050778",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "459 ratings",
                                    "ratingCountV2": "459"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Hot & Spicy Chicken",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "17212168",
                                "name": "Hot & Spicy Wings Bucket",
                                "category": "Hot & Spicy Chicken",
                                "description": "Serves 1 | 16pcs Hot & Spicy Wings",
                                "imageId": "0beb9a04a6eae6afdff9628fc1974d13",
                                "inStock": 1,
                                "price": 39900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115597507",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115597506",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "210 ratings",
                                    "ratingCountV2": "210"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110527993",
                                "name": "5pcs Hot & Spicy Chicken Drumstick",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our fresh and famous h&s chicken drumstick in our spicy marinade fried to perfection serving size:600 Gms energy per 100 Gms:191.66 K Cal.",
                                "imageId": "3814203f760a51214565f8510a1e13a0",
                                "inStock": 1,
                                "price": 50900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050500",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050496",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050498",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "32 ratings",
                                    "ratingCountV2": "32"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656396",
                                "name": "8Pc Hot and Spicy Wings",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our fresh and famous hot & spicy chicken wings in our spicy marinade fried to perfection serving size:440 Gms energy per 100 Gms: 174.54 K Cal.",
                                "imageId": "0f377a0eb08935c862ec35c40a244ce4",
                                "inStock": 1,
                                "price": 32200,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "122 ratings",
                                    "ratingCountV2": "122"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656386",
                                "name": "4Pc Hot and Spicy Wings",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our fresh and famous hot & spicy chicken wings in our spicy marinade fried to perfection serving size:220 Gms energy per 100 Gms:174.54 K Cal.",
                                "imageId": "0f377a0eb08935c862ec35c40a244ce4",
                                "inStock": 1,
                                "price": 17100,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "196 ratings",
                                    "ratingCountV2": "196"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113892521",
                                "name": "4pc Hot & Spicy Chicken",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our fresh and famous hot & spicy chicken in our spicy marinade fried to perfection serving size: 400 Gms energy per 100 Gms:197.5 K Cal.",
                                "imageId": "46d35b660d537f5a4200c0ed01062a35",
                                "inStock": 1,
                                "price": 45676,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "32 ratings",
                                    "ratingCountV2": "32"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113892524",
                                "name": "2pc Hot & Spicy Chicken",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our fresh and famous hot & spicy chicken in our spicy marinade fried to perfection serving size:190 Gms energy per 100 Gms:197.5 K Cal.",
                                "imageId": "48a6b7c8e58470271408075dc74114e9",
                                "inStock": 1,
                                "price": 24000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "96 ratings",
                                    "ratingCountV2": "96"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "130919028",
                                "name": "1 Pc Hot & Spicy Chicken",
                                "category": "Hot & Spicy Chicken",
                                "description": "Serves 1",
                                "imageId": "76d35535f7102f9460a65d6100c8554d",
                                "inStock": 1,
                                "price": 12457,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "238 ratings",
                                    "ratingCountV2": "238"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "130919024",
                                "name": "12Pcs Chicken Strips",
                                "category": "Hot & Spicy Chicken",
                                "description": "Serves 1 | Our 100% chicken boneless strips hand breaded and deep fried served.",
                                "imageId": "ca3f690fca13a79e2f80fee630a85acd",
                                "inStock": 1,
                                "price": 54900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656389",
                                "name": "6Pcs Chicken Strips",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our 100% chicken boneless strips hand breaded and deep fried served.",
                                "imageId": "ca3f690fca13a79e2f80fee630a85acd",
                                "inStock": 1,
                                "price": 29900,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "22 ratings",
                                    "ratingCountV2": "22"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656381",
                                "name": "3Pcs Chicken Strips",
                                "category": "Hot & Spicy Chicken",
                                "description": "Our 100% chicken boneless strips hand breaded and deep fried served.",
                                "imageId": "ca3f690fca13a79e2f80fee630a85acd",
                                "inStock": 1,
                                "price": 17500,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Peri Peri Chicken",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656398",
                                "name": "8pc Peri Peri wings",
                                "category": "Peri Peri Chicken",
                                "description": "Ours soft juicy, spicy & tangy peri peri chicken wings in our signature marinade grilled to perfection serving size:310 Gms energy per 100 Gms:204.51 K Cal.",
                                "imageId": "020c84604c2432e07f39e840229178ce",
                                "inStock": 1,
                                "price": 32181,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050531",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050523",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050527",
                                    "groupName": "Choose Your Fries",
                                    "choices": [
                                      {
                                        "id": "101954224",
                                        "name": "Chicken Popcorn Loaded Fries",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954225",
                                        "name": "Cheesy House Fries Veg",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954226",
                                        "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                        "price": 25600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954227",
                                        "name": "Falafel Fries With Garlic Sauce",
                                        "price": 15571,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "54 ratings",
                                    "ratingCountV2": "54"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113829520",
                                "name": "4pc Peri Peri Wings",
                                "category": "Peri Peri Chicken",
                                "description": "Ours soft juicy, spicy & tangy peri peri chicken wings in our signature marinade grilled to perfection serving size:155 Gms energy per 100 Gms:204.51 K Cal.",
                                "imageId": "f7493f1471ffd339cc9727e1e9ff51f7",
                                "inStock": 1,
                                "price": 17100,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "137 ratings",
                                    "ratingCountV2": "137"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772556",
                                "name": "5pcs Peri Peri Chicken Drumstick",
                                "category": "Peri Peri Chicken",
                                "description": "Our fresh and famous peri peri chicken drumstick in our signature marinade grilled to perfection serving size:490 Gms energy per 100 Gms:206.12 K Cal.",
                                "imageId": "d37793576f829e6dca7c68e12c143047",
                                "inStock": 1,
                                "price": 50920,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "London Doners",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "107942440",
                                "name": "Peri Peri Chicken Wrap",
                                "category": "London Doners",
                                "description": "Its chunks of juicy grilled chicken strips on a bed of fresh salad mix garnished with chilli sauce serving size: 326 Gms energy: 320 K Cal.",
                                "imageId": "4edd31a00c198d9f260e140044ec44b2",
                                "inStock": 1,
                                "price": 24857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051319",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051314",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051316",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051311",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "336 ratings",
                                    "ratingCountV2": "336"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "107942416",
                                "name": "Falafel Doner Wrap",
                                "category": "London Doners",
                                "description": "Its chunks of soft and crunchy falafel on a bed of freshly cut salad mix garnished with spicy chilli, doner & hummus sauce serving size: 367 Gms energy: 325 K Cal.",
                                "imageId": "3fac51c66172dec071e7b3622a34376a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17600,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136914",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136915",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136916",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "758 ratings",
                                    "ratingCountV2": "758"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "107942413",
                                "name": "Falafel Doner Pitta",
                                "category": "London Doners",
                                "description": "4 Pcs falafel, lettuce, tomato, cabbage, cucumber, onion, capsicum, red cabbage, hummus, homemade chilli & garlic sauce in a toasted pitta bread serving size: 410 Gms energy: 480 K Cal.",
                                "imageId": "e3356e4a9d13d31e264e06a4bf320509",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17600,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136869",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136870",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136872",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "624 ratings",
                                    "ratingCountV2": "624"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656457",
                                "name": "Peri-Peri Paneer Wrap",
                                "category": "London Doners",
                                "description": "Deep fried peri peri paneer patty, lettuce, tomato, cucumber, onion, hummus, homemade chilli & garlic sauce in a tortilla wrap serving size: 315 Gms energy: 432 K Cal.",
                                "imageId": "05fbb0b7a98ca5738d5c6a2461b18021",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 21800,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136990",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136992",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136994",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "259 ratings",
                                    "ratingCountV2": "259"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "107942418",
                                "name": "Chicken Doner Wrap",
                                "category": "London Doners",
                                "description": "Grilled chicken with lettuce, tomato, cabbage, cucumber, onion, capsicum, red cabbage, hummus, homemade chilli & garlic sauce in a tortilla wrap serving size: 304 Gms energy: 320 K Cal.",
                                "imageId": "c3b2aebe12625786b043d960f676d25d",
                                "inStock": 1,
                                "price": 24857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131137021",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131137022",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131137023",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131137026",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "1164 ratings",
                                    "ratingCountV2": "1164"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "107942407",
                                "name": "Chicken Doner Pitta",
                                "category": "London Doners",
                                "description": "It's a grilled pita with full of fresh veggies, hummus and chunks of spicy chicken doner meat garnished with chilli garlic sauce serving size: 410 Gms energy: 485 K Cal.",
                                "imageId": "72979bbc51fd972d5554879b661366c3",
                                "inStock": 1,
                                "price": 26286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050624",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050621",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050623",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050616",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "1281 ratings",
                                    "ratingCountV2": "1281"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656439",
                                "name": "Hummus With Chicken and Pitta",
                                "category": "London Doners",
                                "description": "Its a grilled pita bread with hummus sauce and crunchy chicken doner meat serving size: 27 Gms energy: 340 K Cal.",
                                "imageId": "9283958683905eb26cbe659fb0715494",
                                "inStock": 1,
                                "price": 22400,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136876",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136877",
                                    "groupName": "Veg Snacks Option",
                                    "choices": [
                                      {
                                        "id": "106050264",
                                        "name": "8pc Onion Rings",
                                        "price": 18900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954191",
                                        "name": "Crispy Pizza Strips",
                                        "price": 16610,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954194",
                                        "name": "Paneer Popcorn Medium",
                                        "price": 16600,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954192",
                                        "name": "Jalapeno Poppers",
                                        "price": 14533,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954193",
                                        "name": "Peri Peri Fries Medium",
                                        "price": 11400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 5,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136878",
                                    "groupName": "Non Veg Snacks Options",
                                    "choices": [
                                      {
                                        "id": "101954254",
                                        "name": "4pc Hot And Spicy Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "102415987",
                                        "name": "1 Pc Hot & Spicy Chicken",
                                        "price": 12457,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954257",
                                        "name": "8 Pcs Chicken Nuggets",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954258",
                                        "name": "4pc Peri Peri Wings",
                                        "price": 17129,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954255",
                                        "name": "4 Pcs Chicken Nuggets",
                                        "price": 12600,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954256",
                                        "name": "3pcs Chicken Strips",
                                        "price": 17500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 6,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136879",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "1322 ratings",
                                    "ratingCountV2": "1322"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Leon Loaded Fries",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656425",
                                "name": "Fries with Chilli Garlic Sauce",
                                "category": "Leon Loaded Fries",
                                "description": "French fries topped with homemade chilli & garlic sauce serving size: 145 Gms energy: 301 K Cal.",
                                "imageId": "63e1040c62632f8257420810e3db7b4b",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 15571,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050975",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050970",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050973",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "223 ratings",
                                    "ratingCountV2": "223"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "18392616",
                                "name": "Cheesy House Fries Veg",
                                "category": "Leon Loaded Fries",
                                "description": "Loaded fries topped with grilled peppers and onions, jalapeno cheese sauce serving size: 175 Gms energy: 361 K Cal.",
                                "imageId": "a2ae90db25b5d1fdfd50a61916faf035",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16610,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050602",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050604",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "619 ratings",
                                    "ratingCountV2": "619"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656420",
                                "name": "Falafel Fries with Garlic Sauce",
                                "category": "Leon Loaded Fries",
                                "description": "Loaded fries with 4 Pcs falafel smashed topped with homemade chilli & garlic sauce serving size: 289 Gms energy: 455 K Cal.",
                                "imageId": "1a81bd1489590a36df19cec84424e327",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18200,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "278 ratings",
                                    "ratingCountV2": "278"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "61835042",
                                "name": "Paneer Popcorn Loaded Fries",
                                "category": "Leon Loaded Fries",
                                "description": "Serves 1",
                                "imageId": "d1f50eef98cf65dac14ecf0cf7fd67b0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 21800,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136899",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136901",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "119 ratings",
                                    "ratingCountV2": "119"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "17212184",
                                "name": "Chicken Popcorn Loaded Fries",
                                "category": "Leon Loaded Fries",
                                "description": "Loaded fries with 12 Pcs chicken popcorn, homemade chilli & garlic sauce serving size: 235 Gms energy: 431 K Cal.",
                                "imageId": "164e41e7fdd78d3120a617c34499ff87",
                                "inStock": 1,
                                "price": 26286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050763",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050767",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "1388 ratings",
                                    "ratingCountV2": "1388"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45581044",
                                "name": "Doner Chicken Fries With Chilli Garlic Sauce",
                                "category": "Leon Loaded Fries",
                                "description": "Loaded fries with grilled doner chicken, homemade chilli garlic sauce serving size: 235 Gms energy: 421 K Cal.",
                                "imageId": "3f15cb116a00398571fc40ab8443de71",
                                "inStock": 1,
                                "price": 26286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050846",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050852",
                                    "groupName": "Pick Your Burger",
                                    "choices": [
                                      {
                                        "id": "101954221",
                                        "name": "Aloo Tikki Burger",
                                        "price": 10277,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954223",
                                        "name": "Chicken Strip Burger",
                                        "price": 11004,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "279 ratings",
                                    "ratingCountV2": "279"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Leon Biryani Bowl & Platter",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772621",
                                "name": "Falafel Biryani Platter",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "5 Pieces falafel, half pitta, salad, freshly prepared biryani rice served as a complete meal serving size: 632 Gms energy: 519 K Cal.",
                                "imageId": "959b73b60fedd558e9eb7bab1279df7f",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28548,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050899",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050893",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "44 ratings",
                                    "ratingCountV2": "44"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772574",
                                "name": "Chicken Doner Biryani Platter",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "Grilled donner chicken, half pitta, salad, and freshly prepared biryani served as a complete meal serving size: 562 Gms energy: 368 K Cal.",
                                "imageId": "e5f543f85ee978ef3eb9b311b952ba99",
                                "inStock": 1,
                                "price": 29867,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050610",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050607",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "80 ratings",
                                    "ratingCountV2": "80"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772615",
                                "name": "Chicken Popcorn Biryani Platter.",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "12pc Chicken popcorn, half pitta, salad, freshly prepared biryani rice served as a complete meal serving size: 562 Gms energy: 401 K Cal.",
                                "imageId": "e5f543f85ee978ef3eb9b311b952ba99",
                                "inStock": 1,
                                "price": 29867,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115050742",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115050739",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "193 ratings",
                                    "ratingCountV2": "193"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772875",
                                "name": "Peri Peri Wings Biryani Platter",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "4 Pieces tender & juicy peri peri chicken wings, half pitta, salad, freshly prepared biryani rice served as a complete meal serving size: 562 Gms energy: 422 K Cal.",
                                "imageId": "7291ac8d911d741ef317965b71032bd4",
                                "inStock": 1,
                                "price": 29857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051382",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051377",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "81 ratings",
                                    "ratingCountV2": "81"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772818",
                                "name": "Paneer Popcorn Biryani Bowl",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "12 Pieces of crispy paneer popcorn served on bowl of freshly prepared biryani rice.",
                                "imageId": "defa237ca68138c07209587e3ad893ca",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27904,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136960",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136961",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772587",
                                "name": "Chicken Popcorn Biryani Bowl",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "12 Pieces of hot & spicy crunchy chicken popcorn served on bowl of freshly prepared biryani rice.",
                                "imageId": "ec6f894431ffae2e0ca84c6e7286bc6a",
                                "inStock": 1,
                                "price": 27904,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "131136864",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136865",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "112 ratings",
                                    "ratingCountV2": "112"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772825",
                                "name": "Paneer Popcorn Biryani Platter",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "12 Pieces paneer popcorn, half pitta, salad, freshly prepared biryani rice served as a complete meal serving size: 562 Gms energy: 543 K Cal.",
                                "imageId": "fbe9c075dca6f87adf9416ad4b441591",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29867,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051262",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115051260",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "42 ratings",
                                    "ratingCountV2": "42"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772834",
                                "name": "Peri Peri Chicken Biryani Bowl",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "Soft, juicy, spicy and tangy peri peri chicken drumstick served with bowl of freshly prepared biryani rice.",
                                "imageId": "07ca37c0626a0ad0900c0e762e0cf292",
                                "inStock": 1,
                                "price": 26952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051302",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136936",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656438",
                                "name": "Hot and Crispy Chicken Biryani Bowl",
                                "category": "Leon Biryani Bowl & Platter",
                                "description": "Crunchy, tender and juicy chicken drumstick served on bowl of freshly prepared biryani rice.",
                                "imageId": "d599c5945a7dc1833dc3236983e5fe57",
                                "inStock": 1,
                                "price": 26952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115051116",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "131136982",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "34 ratings",
                                    "ratingCountV2": "34"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Snacks",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113212638",
                                "name": "Paneer Popcorn Large",
                                "category": "Snacks",
                                "description": "Fresh bite-sized paneer seasoned with our spicy marinade, deep fried to perfection",
                                "imageId": "339420007182485ebd1763012f14e573",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 24857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113212639",
                                "name": "Paneer Popcorn Medium",
                                "category": "Snacks",
                                "description": "Fresh bite-sized paneer seasoned with our spicy marinade, deep fried to perfection serving size:110 Gms energy per 100 Gms : 225.45 K Cal.",
                                "imageId": "339420007182485ebd1763012f14e573",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16610,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "17212210",
                                "name": "Crispy Pizza Strips",
                                "category": "Snacks",
                                "description": "8pc crispy, 100% mozzarella pizza strips serving size:143 Gms energy: 346 K Cal.",
                                "imageId": "1338de5e1628c6dadb14fcbb19fa284b",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16610,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "447 ratings",
                                    "ratingCountV2": "447"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "17212209",
                                "name": "Jalapeno Poppers",
                                "category": "Snacks",
                                "description": "8 Pcs crispy, golden Jalapeno cheese poppers serving size:112 Gms energy: 320 K Cal.",
                                "imageId": "b7f4ada05124901cd31f8cc962630902",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14533,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "375 ratings",
                                    "ratingCountV2": "375"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113828397",
                                "name": "Peri Peri Fries Large",
                                "category": "Snacks",
                                "description": "Deliciously seasoned peri peri fries, crispy and crunch on the outside, fluffy and hot on the inside serving size: 135 Gms energy: 390.17 K Cal.",
                                "imageId": "0d321edc2f844b287d2d989e26ebd6bc",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14533,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "77 ratings",
                                    "ratingCountV2": "77"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113828399",
                                "name": "Peri Peri Fries Medium",
                                "category": "Snacks",
                                "description": "Deliciously seasoned peri peri fries, crispy and crunch on the outside, fluffy and hot on the inside serving size: 110g Gms energy: 317.92 K Cal.",
                                "imageId": "08cbe1f05d15b879b20136bfc1b56c1e",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11419,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "70 ratings",
                                    "ratingCountV2": "70"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104772719",
                                "name": "French Fries Large",
                                "category": "Snacks",
                                "description": "Deliciously seasoned fries, crispy and crunch on the outside, fluffy and hot on the inside serving size: 135 Gms energy: 387.35 K Cal.",
                                "imageId": "c06b3ef1b14ad18052b57e48d598f686",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12457,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "109 ratings",
                                    "ratingCountV2": "109"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113828398",
                                "name": "French Fries Medium",
                                "category": "Snacks",
                                "description": "Deliciously seasoned fries, crispy and crunch on the outside, fluffy and hot on the inside serving size: 110 Gms energy: 315.62 K Cal.",
                                "imageId": "c06b3ef1b14ad18052b57e48d598f686",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9862,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "126 ratings",
                                    "ratingCountV2": "126"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113212640",
                                "name": "Chicken Popcorn Large",
                                "category": "Snacks",
                                "description": "Fresh tender bite-sized 100% chicken breast seasoned with our spicy marinade hand breaded and deep fried to perfection.",
                                "imageId": "b9f256ecba774f07365db89bff33d882",
                                "inStock": 1,
                                "price": 26560,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "71 ratings",
                                    "ratingCountV2": "71"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "113212641",
                                "name": "Chicken Popcorn Medium",
                                "category": "Snacks",
                                "description": "Fresh tender bite-sized 100% chicken breast seasoned with our spicy marinade hand breaded and deep fried to perfection.",
                                "imageId": "b9f256ecba774f07365db89bff33d882",
                                "inStock": 1,
                                "price": 18582,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  "text": "Bestseller",
                                  "textColor": "#ffffff",
                                  "topBackgroundColor": "#d53d4c",
                                  "bottomBackgroundColor": "#b02331"
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "isBestseller": true,
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "171 ratings",
                                    "ratingCountV2": "171"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "17212216",
                                "name": "8 Pcs Chicken Nuggets",
                                "category": "Snacks",
                                "description": "Chicken nuggets serving size:136 Gms energy: 361.66 K Cal.",
                                "imageId": "d5b51d397edd3a738b989515274bb893",
                                "inStock": 1,
                                "price": 17129,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "755 ratings",
                                    "ratingCountV2": "755"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "107942399",
                                "name": "4 Pcs Chicken Nuggets",
                                "category": "Snacks",
                                "description": "Chicken nuggets serving size:68 Gms energy: 180.83 K Cal.",
                                "imageId": "d5b51d397edd3a738b989515274bb893",
                                "inStock": 1,
                                "price": 8564,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "59 ratings",
                                    "ratingCountV2": "59"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Beverages",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "98453516",
                                "name": "Sprite 330ml",
                                "category": "Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "23 ratings",
                                    "ratingCountV2": "23"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656463",
                                "name": "Zero coke 330ml",
                                "category": "Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "50 ratings",
                                    "ratingCountV2": "50"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "94738105",
                                "name": "Leon Grill's Mineral Water Bottle (1000ml)",
                                "category": "Beverages",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 2857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "16 ratings",
                                    "ratingCountV2": "16"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Desserts",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "110594742",
                                "name": "Chocolate Brownie",
                                "category": "Desserts",
                                "imageId": "d8284c33622b1232440ca36a521b1f9d",
                                "inStock": 1,
                                "price": 6000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "345 ratings",
                                    "ratingCountV2": "345"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125656410",
                                "name": "Chocolate mousse",
                                "category": "Desserts",
                                "imageId": "3fd06ed6979f77c732d1ae978bcbee34",
                                "inStock": 1,
                                "price": 6000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "232 ratings",
                                    "ratingCountV2": "232"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Dips/Sauces",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "126308443",
                                "name": "Gourmet Sauce",
                                "category": "Dips/Sauces",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 3000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45581115",
                                "name": "Chilli Sauce",
                                "category": "Dips/Sauces",
                                "description": "Fresh red chillies and garlic along with good tang of tomato.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 2500,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "24 ratings",
                                    "ratingCountV2": "24"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45581117",
                                "name": "Chilli Garlic Mayo",
                                "category": "Dips/Sauces",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 2500,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "207 ratings",
                                    "ratingCountV2": "207"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "45581111",
                                "name": "Garlic Mayo",
                                "category": "Dips/Sauces",
                                "description": "Our signature dip enhanced with fresh garlic.",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 2500,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "355 ratings",
                                    "ratingCountV2": "355"
                                  }
                                },
                                "isKidcategory": true
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "93108894",
                                "name": "Sriracha Sauce",
                                "category": "Dips/Sauces",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 2500,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "54 ratings",
                                    "ratingCountV2": "54"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Leon Breakfast",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "127939609",
                                "name": "Peri Peri Paneer Burger .",
                                "category": "Leon Breakfast",
                                "description": "Serves 1 | Its a cottage cheese patty burger breaded with peri peri spice garnished sriacha sauce",
                                "imageId": "aeb984aaa310015bc1f3ed487e374c60",
                                "isVeg": 1,
                                "price": 20600,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "121877929",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877930",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877931",
                                    "groupName": "Choose your veg add-ons",
                                    "choices": [
                                      {
                                        "id": "101954199",
                                        "name": "Hashbrown",
                                        "price": 7000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877932",
                                    "groupName": "Choose Your Beverages option",
                                    "choices": [
                                      {
                                        "id": "101954201",
                                        "name": "Sparkling Ice tea",
                                        "price": 12800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954202",
                                        "name": "Hazel Nut Cold  Cofee",
                                        "price": 17900,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954200",
                                        "name": "Irish Cold Cofee",
                                        "price": 12800,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "896 ratings",
                                    "ratingCountV2": "896"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "127642800",
                                "name": "Veggie Supreme Burger .",
                                "category": "Leon Breakfast",
                                "description": "Serves 1 | Delightful veg patty, layered with cheese, crunchy lettuce and jalapeno sauce on a toasted burger bun serving size: 162 Gms energy: 398 K Cal.",
                                "imageId": "235d8018a62c25c8cae661f90a82d746",
                                "isVeg": 1,
                                "price": 15571,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "121191194",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121191192",
                                    "groupName": "Choose your veg add-ons",
                                    "choices": [
                                      {
                                        "id": "101954199",
                                        "name": "Hashbrown",
                                        "price": 7000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121191193",
                                    "groupName": "Choose Your Beverages option",
                                    "choices": [
                                      {
                                        "id": "101954201",
                                        "name": "Sparkling Ice tea",
                                        "price": 12800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954202",
                                        "name": "Hazel Nut Cold  Cofee",
                                        "price": 17900,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954200",
                                        "name": "Irish Cold Cofee",
                                        "price": 12800,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "127939608",
                                "name": "Chicken Fillet Burger .",
                                "category": "Leon Breakfast",
                                "description": "Serves 1 | Big, thick, crunchy and juicy fried chicken fillet, lettuce, signature sauce on a toasted burger bun serving size: 232 Gms energy: 451.9 K Cal.",
                                "imageId": "19e37f4ea1613fe129534d0d6c2447d6",
                                "price": 22800,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "121877924",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877925",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877926",
                                    "groupName": "Choose your veg add-ons",
                                    "choices": [
                                      {
                                        "id": "101954199",
                                        "name": "Hashbrown",
                                        "price": 7000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877927",
                                    "groupName": "Choose Your Non-veg Addons",
                                    "choices": [
                                      {
                                        "id": "101954239",
                                        "name": "Chicken Nuggets (4pc)",
                                        "price": 8560,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954236",
                                        "name": "Sausages (2pc)",
                                        "price": 7500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954237",
                                        "name": "Chicken Bacon (2pc)",
                                        "price": 8500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954238",
                                        "name": "Scrambeled Eggs",
                                        "price": 5900,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121877928",
                                    "groupName": "Choose Your Beverages option",
                                    "choices": [
                                      {
                                        "id": "101954201",
                                        "name": "Sparkling Ice tea",
                                        "price": 12800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954202",
                                        "name": "Hazel Nut Cold  Cofee",
                                        "price": 17900,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954200",
                                        "name": "Irish Cold Cofee",
                                        "price": 12800,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "4017 ratings",
                                    "ratingCountV2": "4017"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "127642795",
                                "name": "Classic Chicken Burger .",
                                "category": "Leon Breakfast",
                                "description": "Serves 1 | Fresh hand-breaded crispy 100% chicken breast with crunchy lettuce, and mayo in a toasted burger bun serving size: 9 Gms energy: 290 K Cal.",
                                "imageId": "0715c56fde6da6f00847088235c100f5",
                                "price": 14743,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "121191190",
                                    "groupName": "Meal Option",
                                    "choices": [
                                      {
                                        "id": "101954195",
                                        "name": "Regular Fries + 250ml Coke",
                                        "price": 9900,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121191191",
                                    "groupName": "Choose Your Desserts",
                                    "choices": [
                                      {
                                        "id": "101954196",
                                        "name": "Chocolate Mousse",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954197",
                                        "name": "Chocolate Brownie",
                                        "price": 6000,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 2,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121191188",
                                    "groupName": "Choose your veg add-ons",
                                    "choices": [
                                      {
                                        "id": "101954199",
                                        "name": "Hashbrown",
                                        "price": 7000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121191187",
                                    "groupName": "Choose Your Non-veg Addons",
                                    "choices": [
                                      {
                                        "id": "101954239",
                                        "name": "Chicken Nuggets (4pc)",
                                        "price": 8560,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954236",
                                        "name": "Sausages (2pc)",
                                        "price": 7500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954237",
                                        "name": "Chicken Bacon (2pc)",
                                        "price": 8500,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954238",
                                        "name": "Scrambeled Eggs",
                                        "price": 5900,
                                        "inStock": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 4,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "121191189",
                                    "groupName": "Choose Your Beverages option",
                                    "choices": [
                                      {
                                        "id": "101954201",
                                        "name": "Sparkling Ice tea",
                                        "price": 12800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954202",
                                        "name": "Hazel Nut Cold  Cofee",
                                        "price": 17900,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "101954200",
                                        "name": "Irish Cold Cofee",
                                        "price": 12800,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 3,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "755 ratings",
                                    "ratingCountV2": "755"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "127642794",
                                "name": "Chocolate Brownie .",
                                "category": "Leon Breakfast",
                                "description": "Serves 1",
                                "imageId": "d8284c33622b1232440ca36a521b1f9d",
                                "price": 6000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG",
                                  "portionSize": "Serves 1"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "345 ratings",
                                    "ratingCountV2": "345"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        "type": "FSSAI",
                        "imageId": "fssai_final_edss9i",
                        "text": [
                          "License No. 11218334000498"
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        "name": "Leon's - Burgers & Wings (Leon Grill)",
                        "area": "Koramangala",
                        "completeAddress": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "firstOffsetRequest": true,
      "isQCLink": false
    },
    "tid": "2f54f82d-de50-4b0b-b402-09b7605002d3",
    "sid": "bsk43c52-ed00-4174-9186-87308870ab2f",
    "deviceId": "d40b8c32-76d2-9739-ecd0-a53395f36179",
    "csrfToken": "AyrA7sUi15pO-NfNw2Fsfl4aH-gTgwaCX4_hQFJo"
  }
];

export default menuApi