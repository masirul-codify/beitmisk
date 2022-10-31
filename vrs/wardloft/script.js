TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "buttonPause": {
   "horizontalAlign": "center",
   "borderRadius": 0,
   "borderSize": 0,
   "maxWidth": 34,
   "rollOverIconURL": "skin/IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4_rollover.png",
   "class": "IconButton",
   "maxHeight": 34,
   "top": 20,
   "paddingLeft": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4.png",
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "minWidth": 30,
   "shadow": false,
   "click": "this.setComponentVisibility(this.Container_D6015E63_E821_D28C_41EC_7024F3046C63, false, 0, null, null, false)",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "minHeight": 30,
   "right": 20,
   "height": 34,
   "id": "IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4",
   "width": 34,
   "paddingRight": 0
  }
 },
 {
  "partial": false,
  "label": "living-room-new",
  "hfovMin": 60,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_t.jpg",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "label": "to-balcony",
     "hfovMin": 60,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_t.jpg",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149",
       "backwardYaw": 1.67,
       "yaw": 173.67,
       "distance": 1
      }
     ],
     "vfov": 180,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_r_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_r.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "id": "overlay_DF913E9A_D415_3197_41DF_CD3565929A8F",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -25.38,
           "hfov": 20.81,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 52,
              "width": 131
             }
            ]
           },
           "yaw": 173.67
          }
         ],
         "items": [
          {
           "hfov": 20.81,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_0_HS_0_0.png",
              "class": "ImageResourceLevel",
              "height": 104,
              "width": 262
             }
            ]
           },
           "pitch": -25.38,
           "yaw": 173.67
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149, this.camera_B3E58F07_BF1C_F2D8_41CF_54367AD546F9); this.mainPlayList.set('selectedIndex', 0)"
          }
         ]
        }
       ],
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_l_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_l.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_b_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_b.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_u_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_u.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_d_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_d.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_t.jpg",
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_f_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_f.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       }
      }
     ],
     "hfovMax": 140,
     "pitch": 0,
     "id": "panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984",
     "hfov": 360
    },
    "backwardYaw": 173.67,
    "yaw": 1.67,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "label": "dining",
     "hfovMin": 60,
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_t.jpg",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149",
       "backwardYaw": -168.53,
       "yaw": -132.23,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "label": "entrance",
        "hfovMin": 60,
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_t.jpg",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "label": "Entrance-stairs",
           "hfovMin": 60,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_t.jpg",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "partial": false,
              "label": "stairway-fixed",
              "hfovMin": 60,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_t.jpg",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C",
                "backwardYaw": -40.06,
                "yaw": 31.05,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "partial": false,
                 "label": "Stairs",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_t.jpg",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302",
                   "backwardYaw": -20.59,
                   "yaw": 55.15,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "partial": false,
                    "label": "attic-living-room",
                    "hfovMin": 60,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_t.jpg",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8",
                      "backwardYaw": -46.45,
                      "yaw": 166.18,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "partial": false,
                       "label": "terrace-living-room",
                       "hfovMin": 60,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_t.jpg",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE",
                         "backwardYaw": 83.33,
                         "yaw": 107.05,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_F19B4E41_E039_FEC9_41E1_02B03917D9BC",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -21.52,
                             "hfov": 16.19,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 51,
                                "width": 99
                               }
                              ]
                             },
                             "yaw": 107.05
                            }
                           ],
                           "items": [
                            {
                             "hfov": 16.19,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 102,
                                "width": 198
                               }
                              ]
                             },
                             "pitch": -21.52,
                             "yaw": 107.05
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE, this.camera_B3426DD7_BF1C_F178_41D8_923E49A3431F); this.mainPlayList.set('selectedIndex', 4)"
                            }
                           ]
                          }
                         ],
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_t.jpg",
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 140,
                       "pitch": 0,
                       "id": "panorama_E8815B11_E018_2649_41A9_9911B7B86E8D",
                       "hfov": 360
                      },
                      "backwardYaw": 107.05,
                      "yaw": 83.33,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "partial": false,
                       "label": "bedroom-attic",
                       "hfovMin": 60,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_t.jpg",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE",
                         "backwardYaw": -93.23,
                         "yaw": 148.63,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "partial": false,
                          "label": "bathroom-bedroom-attic",
                          "hfovMin": 60,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_t.jpg",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262",
                            "backwardYaw": -86.72,
                            "yaw": -156.76,
                            "distance": 1
                           }
                          ],
                          "vfov": 180,
                          "frames": [
                           {
                            "right": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_r_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_r.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "id": "overlay_E382C5C5_CF1A_324B_41E5_62A9EEC97158",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -36.99,
                                "hfov": 19.45,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel",
                                   "height": 59,
                                   "width": 138
                                  }
                                 ]
                                },
                                "yaw": -156.76
                               }
                              ],
                              "items": [
                               {
                                "hfov": 19.45,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_0_HS_0_0.png",
                                   "class": "ImageResourceLevel",
                                   "height": 118,
                                   "width": 277
                                  }
                                 ]
                                },
                                "pitch": -36.99,
                                "yaw": -156.76
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262, this.camera_B299FFDB_BF1C_F169_41D2_EFBA8438F103); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ]
                             }
                            ],
                            "left": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_l_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_l.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "back": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_b_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_b.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "top": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_u_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_u.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame",
                            "bottom": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_d_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_d.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_t.jpg",
                            "front": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_f_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_f.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMax": 140,
                          "pitch": 0,
                          "id": "panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D",
                          "hfov": 360
                         },
                         "backwardYaw": -156.76,
                         "yaw": -86.72,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "partial": false,
                          "label": "terrace-bedroom",
                          "hfovMin": 60,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_t.jpg",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262",
                            "backwardYaw": -32.63,
                            "yaw": 2.5,
                            "distance": 1
                           }
                          ],
                          "vfov": 180,
                          "frames": [
                           {
                            "right": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_r_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_r.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "id": "overlay_F1B912D1_E038_E7C9_41A6_49E567F32B1B",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -15.51,
                                "hfov": 12.16,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel",
                                   "height": 43,
                                   "width": 71
                                  }
                                 ]
                                },
                                "yaw": 2.5
                               }
                              ],
                              "items": [
                               {
                                "hfov": 12.16,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_0_HS_0_0.png",
                                   "class": "ImageResourceLevel",
                                   "height": 86,
                                   "width": 143
                                  }
                                 ]
                                },
                                "pitch": -15.51,
                                "yaw": 2.5
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262, this.camera_B37D5E15_BF1C_F2F8_41E3_4B407A33DE04); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ]
                             }
                            ],
                            "left": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_l_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_l.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "back": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_b_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_b.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "top": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_u_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_u.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame",
                            "bottom": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_d_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_d.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_t.jpg",
                            "front": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_f_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_f.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMax": 140,
                          "pitch": 0,
                          "id": "panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414",
                          "hfov": 360
                         },
                         "backwardYaw": 2.5,
                         "yaw": -32.63,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_E31DC125_CF26_33C8_41E9_A679D3714D13",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.74,
                             "hfov": 16.07,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 39,
                                "width": 105
                               }
                              ]
                             },
                             "yaw": 148.63
                            }
                           ],
                           "items": [
                            {
                             "hfov": 16.07,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_0_HS_2_0.png",
                                "class": "ImageResourceLevel",
                                "height": 79,
                                "width": 210
                               }
                              ]
                             },
                             "pitch": -29.74,
                             "yaw": 148.63
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE, this.camera_B38A8E91_BF1C_F3F8_41E5_DA5281E52DF7); this.mainPlayList.set('selectedIndex', 4)"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_E3EF3FCD_CF1A_0E58_41C6_BBAE3BDB5A43",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -38.17,
                             "hfov": 14.08,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 51,
                                "width": 101
                               }
                              ]
                             },
                             "yaw": -86.72
                            }
                           ],
                           "items": [
                            {
                             "hfov": 14.08,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_0_HS_1_0.png",
                                "class": "ImageResourceLevel",
                                "height": 102,
                                "width": 203
                               }
                              ]
                             },
                             "pitch": -38.17,
                             "yaw": -86.72
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D, this.camera_B3B0EE9B_BF1C_F3E8_41CC_8BE6E06E32C8); this.setMediaBehaviour(this.playList_B32BEDB6_BF1C_F138_41D7_7100DF343ACA, 0, this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262)"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_E223E765_CF1B_FE48_41BD_2F26DFD1AD97",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -18.49,
                             "hfov": 15.21,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 39,
                                "width": 91
                               }
                              ]
                             },
                             "yaw": -32.63
                            }
                           ],
                           "items": [
                            {
                             "hfov": 15.21,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 79,
                                "width": 182
                               }
                              ]
                             },
                             "pitch": -18.49,
                             "yaw": -32.63
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414, this.camera_B3BD1EA6_BF1C_F3DB_41E2_BACE5A3539A7); this.mainPlayList.set('selectedIndex', 11)"
                            }
                           ]
                          }
                         ],
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_t.jpg",
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 140,
                       "pitch": 0,
                       "id": "panorama_E7E41890_CF2E_12C8_41E1_D0843F900262",
                       "hfov": 360
                      },
                      "backwardYaw": 148.63,
                      "yaw": -93.23,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_E4554835_CF26_71C8_41E0_EEE43280AF80",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -25.2,
                          "hfov": 17.12,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 51,
                             "width": 107
                            }
                           ]
                          },
                          "yaw": 83.33
                         }
                        ],
                        "items": [
                         {
                          "hfov": 17.12,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_0_HS_1_0.png",
                             "class": "ImageResourceLevel",
                             "height": 103,
                             "width": 215
                            }
                           ]
                          },
                          "pitch": -25.2,
                          "yaw": 83.33
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_E8815B11_E018_2649_41A9_9911B7B86E8D, this.camera_B21D6F27_BF1C_F2D9_41E1_2510B25D56B2); this.mainPlayList.set('selectedIndex', 12)"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_E43973F5_CF26_7648_41E6_CEC1A8AB480E",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -20.9,
                          "hfov": 8.2,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 27,
                             "width": 49
                            }
                           ]
                          },
                          "yaw": -93.23
                         }
                        ],
                        "items": [
                         {
                          "hfov": 8.2,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 54,
                             "width": 99
                            }
                           ]
                          },
                          "pitch": -20.9,
                          "yaw": -93.23
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262, this.camera_B2053F32_BF1C_F13B_41E6_26999BBAB070); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_E1144F06_CF6A_0FC8_41DA_63282A8048D4",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -35,
                          "hfov": 16.37,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 54,
                             "width": 113
                            }
                           ]
                          },
                          "yaw": 166.18
                         }
                        ],
                        "items": [
                         {
                          "hfov": 16.37,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_0_HS_2_0.png",
                             "class": "ImageResourceLevel",
                             "height": 109,
                             "width": 227
                            }
                           ]
                          },
                          "pitch": -35,
                          "yaw": 166.18
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8, this.camera_B2157F1C_BF1C_F2E8_41DA_F6B1BBA72B65); this.setMediaBehaviour(this.playList_B32A2DB5_BF1C_F138_41E7_AD8936D340F1, 0, this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE)"
                         }
                        ]
                       }
                      ],
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_t.jpg",
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 140,
                    "pitch": 0,
                    "id": "panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE",
                    "hfov": 360
                   },
                   "backwardYaw": 166.18,
                   "yaw": -46.45,
                   "distance": 1
                  }
                 ],
                 "vfov": 180,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_r_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_r.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_E3701A95_CF2A_36C8_41CA_D071B261736E",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -46.74,
                       "hfov": 16.69,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 138
                         }
                        ]
                       },
                       "yaw": 50.72
                      }
                     ],
                     "items": [
                      {
                       "hfov": 16.69,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_0_HS_2_0.png",
                          "class": "ImageResourceLevel",
                          "height": 118,
                          "width": 277
                         }
                        ]
                       },
                       "pitch": -46.74,
                       "yaw": 50.72
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.setMediaBehaviour(this.playList_B32B4DB7_BF1C_F138_41CB_2FA1FF3CAA71, 0, this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_E4671E4D_CF2A_0E58_41D7_DD33C4CCF3D2",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -41.17,
                       "hfov": 23.26,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_0_HS_1_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 73
                         }
                        ]
                       },
                       "yaw": 55.15
                      }
                     ],
                     "items": [
                      {
                       "hfov": 23.26,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_0_HS_1_0.png",
                          "class": "ImageResourceLevel",
                          "height": 76,
                          "width": 351
                         }
                        ]
                       },
                       "pitch": -41.17,
                       "yaw": 55.15
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302, this.camera_B361EE34_BF1C_F338_41E0_8C14CC296E07); this.setMediaBehaviour(this.playList_B32B4DB7_BF1C_F138_41CB_2FA1FF3CAA71, 0, this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_E47530A5_CF2A_12CB_41E7_601BFDD4AEB8",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -36.52,
                       "hfov": 12.43,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 41,
                          "width": 87
                         }
                        ]
                       },
                       "yaw": -46.45
                      }
                     ],
                     "items": [
                      {
                       "hfov": 12.43,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_0_HS_0_0.png",
                          "class": "ImageResourceLevel",
                          "height": 82,
                          "width": 175
                         }
                        ]
                       },
                       "pitch": -36.52,
                       "yaw": -46.45
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE, this.camera_B36C3E3E_BF1C_F328_41CC_9807539DC083); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ]
                    }
                   ],
                   "left": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_l_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_l.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "back": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_b_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_b.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_u_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_u.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_d_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_d.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_t.jpg",
                   "front": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_f_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_f.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMax": 140,
                 "pitch": 0,
                 "id": "panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8",
                 "hfov": 360
                },
                "backwardYaw": 55.15,
                "yaw": -20.59,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "partial": false,
                 "label": "stairs-to-living-room",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_t.jpg",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302",
                   "backwardYaw": -107.36,
                   "yaw": 102.81,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "partial": false,
                    "label": "living-room",
                    "hfovMin": 60,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_t.jpg",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "partial": false,
                       "label": "bedroom-1-new",
                       "hfovMin": 60,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_t.jpg",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "partial": false,
                          "label": "bedroom-1-Toilet",
                          "hfovMin": 60,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_t.jpg",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655",
                            "backwardYaw": 155.25,
                            "yaw": -85.04,
                            "distance": 1
                           }
                          ],
                          "vfov": 180,
                          "frames": [
                           {
                            "right": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_r_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_r.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "id": "overlay_EB2C19C5_CF3A_F248_41E5_92C0563DE90C",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -31.94,
                                "hfov": 15.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel",
                                   "height": 52,
                                   "width": 103
                                  }
                                 ]
                                },
                                "yaw": -85.04
                               }
                              ],
                              "items": [
                               {
                                "hfov": 15.5,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_0_HS_0_0.png",
                                   "class": "ImageResourceLevel",
                                   "height": 105,
                                   "width": 207
                                  }
                                 ]
                                },
                                "pitch": -31.94,
                                "yaw": -85.04
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655, this.camera_B3EDBF11_BF1C_F2F8_41E4_079B935DCD52); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ]
                             }
                            ],
                            "left": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_l_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_l.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "back": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_b_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_b.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "top": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_u_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_u.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame",
                            "bottom": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_d_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_d.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_t.jpg",
                            "front": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_f_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_f.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMax": 140,
                          "pitch": 0,
                          "id": "panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA",
                          "hfov": 360
                         },
                         "backwardYaw": -85.04,
                         "yaw": 155.25,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "partial": false,
                          "label": "bedroom-1-to-window-new",
                          "hfovMin": 60,
                          "class": "Panorama",
                          "thumbnailUrl": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_t.jpg",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655",
                            "backwardYaw": -102.74,
                            "yaw": 133.45,
                            "distance": 1
                           }
                          ],
                          "vfov": 180,
                          "frames": [
                           {
                            "right": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_r_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_r.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "rollOverDisplay": false,
                              "id": "overlay_EBF6900E_CF3A_71D8_41D8_3B04B9E42639",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -32.77,
                                "hfov": 14.43,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_0_HS_0_0_0_map.gif",
                                   "class": "ImageResourceLevel",
                                   "height": 59,
                                   "width": 97
                                  }
                                 ]
                                },
                                "yaw": 133.45
                               }
                              ],
                              "items": [
                               {
                                "hfov": 14.43,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_0_HS_0_0.png",
                                   "class": "ImageResourceLevel",
                                   "height": 118,
                                   "width": 195
                                  }
                                 ]
                                },
                                "pitch": -32.77,
                                "yaw": 133.45
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655, this.camera_B39E9E67_BF1C_F358_41DF_3E4647066719); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ]
                             }
                            ],
                            "left": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_l_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_l.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "back": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_b_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_b.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "top": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_u_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_u.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame",
                            "bottom": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_d_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_d.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_t.jpg",
                            "front": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_f_hq.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1296,
                               "width": 1296
                              },
                              {
                               "url": "media/panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_f.jpeg",
                               "class": "ImageResourceLevel",
                               "height": 1024,
                               "width": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "hfovMax": 140,
                          "pitch": 0,
                          "id": "panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2",
                          "hfov": 360
                         },
                         "backwardYaw": 133.45,
                         "yaw": -102.74,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858",
                         "backwardYaw": -159.77,
                         "yaw": 71.52,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_EA6CAD75_CF3E_724B_41DA_727B71B9F8CC",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -23.77,
                             "hfov": 9.24,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 29,
                                "width": 57
                               }
                              ]
                             },
                             "yaw": 71.52
                            }
                           ],
                           "items": [
                            {
                             "hfov": 9.24,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_0_HS_2_0.png",
                                "class": "ImageResourceLevel",
                                "height": 59,
                                "width": 114
                               }
                              ]
                             },
                             "pitch": -23.77,
                             "yaw": 71.52
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858, this.camera_B23D4F52_BF1C_F17B_41D9_AE2B76D0D3BB); this.mainPlayList.set('selectedIndex', 1)"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_E87870CE_CF3E_3258_41CB_5758EEDD3C1F",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -32.37,
                             "hfov": 17.07,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_0_HS_1_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 49,
                                "width": 115
                               }
                              ]
                             },
                             "yaw": 155.25
                            }
                           ],
                           "items": [
                            {
                             "hfov": 17.07,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_0_HS_1_0.png",
                                "class": "ImageResourceLevel",
                                "height": 98,
                                "width": 230
                               }
                              ]
                             },
                             "pitch": -32.37,
                             "yaw": 155.25
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA, this.camera_B20D3F3C_BF1C_F128_41DD_7FB55B231328); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_EA0ECF0E_CF3E_0FD8_41DB_FBF58D94B166",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -34.98,
                             "hfov": 13.6,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 48,
                                "width": 94
                               }
                              ]
                             },
                             "yaw": -102.74
                            }
                           ],
                           "items": [
                            {
                             "hfov": 13.6,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 96,
                                "width": 188
                               }
                              ]
                             },
                             "pitch": -34.98,
                             "yaw": -102.74
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2, this.camera_B2353F47_BF1C_F158_41E0_07805706109F); this.setMediaBehaviour(this.playList_B32A6DB5_BF1C_F138_41D8_AA32C0408847, 0, this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655)"
                            }
                           ]
                          }
                         ],
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_t.jpg",
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 140,
                       "pitch": 0,
                       "id": "panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655",
                       "hfov": 360
                      },
                      "backwardYaw": 71.52,
                      "yaw": -159.77,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB",
                      "backwardYaw": -177.59,
                      "yaw": -2.16,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_ED5BF4FE_CF26_1238_41E3_0000368C3ADF",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -27.04,
                          "hfov": 12.76,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 39,
                             "width": 81
                            }
                           ]
                          },
                          "yaw": -2.16
                         }
                        ],
                        "items": [
                         {
                          "hfov": 12.76,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_0_HS_1_0.png",
                             "class": "ImageResourceLevel",
                             "height": 79,
                             "width": 163
                            }
                           ]
                          },
                          "pitch": -27.04,
                          "yaw": -2.16
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB, this.camera_B365EE29_BF1C_F328_41AA_AB07FA963D80); this.setMediaBehaviour(this.playList_B3291DB4_BF1C_F138_41C8_0EDA6F6AA14F, 0, this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858)"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_EE85542E_CF26_11D8_41E9_8AB629D05E57",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -25.76,
                          "hfov": 13.09,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 45,
                             "width": 82
                            }
                           ]
                          },
                          "yaw": -159.77
                         }
                        ],
                        "items": [
                         {
                          "hfov": 13.09,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 91,
                             "width": 165
                            }
                           ]
                          },
                          "pitch": -25.76,
                          "yaw": -159.77
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655, this.camera_B379AE1F_BF1C_F2E8_41DA_409FCC74928D); this.mainPlayList.set('selectedIndex', 3)"
                         }
                        ]
                       }
                      ],
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_t.jpg",
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 135,
                    "pitch": 0,
                    "id": "panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858",
                    "hfov": 360
                   },
                   "backwardYaw": -2.16,
                   "yaw": -177.59,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "partial": false,
                    "label": "bedroom-kids-hallway-to-bathroom",
                    "hfovMin": 60,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_t.jpg",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "partial": false,
                       "label": "bedroom-kids",
                       "hfovMin": 60,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_t.jpg",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2",
                         "backwardYaw": 4.77,
                         "yaw": -172.94,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_ECD3E0FD_CF3E_7238_41E6_18C2A55697AC",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -28.96,
                             "hfov": 17.19,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 49,
                                "width": 111
                               }
                              ]
                             },
                             "yaw": -172.94
                            }
                           ],
                           "items": [
                            {
                             "hfov": 17.19,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 99,
                                "width": 223
                               }
                              ]
                             },
                             "pitch": -28.96,
                             "yaw": -172.94
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2, this.camera_B34CADE2_BF1C_F158_41E3_8AEDE0409FE8); this.setMediaBehaviour(this.playList_B32ADDB4_BF1C_F138_41D7_CADC1139F3CB, 0, this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D)"
                            }
                           ]
                          }
                         ],
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_t.jpg",
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 135,
                       "pitch": 0,
                       "id": "panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D",
                       "hfov": 360
                      },
                      "backwardYaw": -172.94,
                      "yaw": 4.77,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "partial": false,
                       "label": "Kids-bathroomm",
                       "hfovMin": 60,
                       "class": "Panorama",
                       "thumbnailUrl": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_t.jpg",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2",
                         "backwardYaw": -87.28,
                         "yaw": 90.23,
                         "distance": 1
                        }
                       ],
                       "vfov": 180,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "id": "overlay_ECADA0E6_CF3E_1248_41D0_C59BAD79E7AB",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -26.89,
                             "hfov": 14.56,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 54,
                                "width": 92
                               }
                              ]
                             },
                             "yaw": 90.23
                            }
                           ],
                           "items": [
                            {
                             "hfov": 14.56,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 108,
                                "width": 185
                               }
                              ]
                             },
                             "pitch": -26.89,
                             "yaw": 90.23
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2, this.camera_B281CFEB_BF1C_F129_4170_CEC47ECB2792); this.setMediaBehaviour(this.playList_B32ADDB4_BF1C_F138_41D7_CADC1139F3CB, 0, this.panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D)"
                            }
                           ]
                          }
                         ],
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_t.jpg",
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "hfovMax": 140,
                       "pitch": 0,
                       "id": "panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D",
                       "hfov": 360
                      },
                      "backwardYaw": 90.23,
                      "yaw": -87.28,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB",
                      "backwardYaw": 18.23,
                      "yaw": -176.08,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_EDF1DE7D_CF3A_0E3B_41E7_ACD3D5F83D81",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -22.51,
                          "hfov": 11.1,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_0_HS_2_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 49,
                             "width": 68
                            }
                           ]
                          },
                          "yaw": -87.28
                         }
                        ],
                        "items": [
                         {
                          "hfov": 11.1,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_0_HS_2_0.png",
                             "class": "ImageResourceLevel",
                             "height": 99,
                             "width": 136
                            }
                           ]
                          },
                          "pitch": -22.51,
                          "yaw": -87.28
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D, this.camera_B22E9F66_BF1C_F158_41C0_001CB3F07FAC); this.setMediaBehaviour(this.playList_B3573DBC_BF1C_F128_41E3_B34A02DD7EEB, 0, this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2)"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_EB81B823_CF3A_11CF_41E2_8812CA90B3E9",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -33.04,
                          "hfov": 13.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 40,
                             "width": 92
                            }
                           ]
                          },
                          "yaw": 4.77
                         }
                        ],
                        "items": [
                         {
                          "hfov": 13.61,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_0_HS_1_0.png",
                             "class": "ImageResourceLevel",
                             "height": 81,
                             "width": 184
                            }
                           ]
                          },
                          "pitch": -33.04,
                          "yaw": 4.77
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D, this.camera_B226FF5C_BF1C_F168_41D7_965E974A5041); this.mainPlayList.set('selectedIndex', 2)"
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_E99589CE_CF3A_3258_41DA_7C48E8F475D6",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -34.3,
                          "hfov": 14.62,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 43,
                             "width": 100
                            }
                           ]
                          },
                          "yaw": -176.08
                         }
                        ],
                        "items": [
                         {
                          "hfov": 14.62,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 87,
                             "width": 201
                            }
                           ]
                          },
                          "pitch": -34.3,
                          "yaw": -176.08
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB, this.camera_B2567F70_BF1C_F138_41D9_C8D83D4127C0); this.setMediaBehaviour(this.playList_B3291DB4_BF1C_F138_41C8_0EDA6F6AA14F, 0, this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2)"
                         }
                        ]
                       }
                      ],
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_t.jpg",
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 140,
                    "pitch": 0,
                    "id": "panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2",
                    "hfov": 360
                   },
                   "backwardYaw": -176.08,
                   "yaw": 18.23,
                   "distance": 1
                  }
                 ],
                 "vfov": 180,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_r_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_r.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_ED97476D_CF26_1E58_41DD_89319426D7D2",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -30.07,
                       "hfov": 16.04,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 48,
                          "width": 105
                         }
                        ]
                       },
                       "yaw": 102.81
                      }
                     ],
                     "items": [
                      {
                       "hfov": 16.04,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_0_HS_2_0.png",
                          "class": "ImageResourceLevel",
                          "height": 96,
                          "width": 210
                         }
                        ]
                       },
                       "pitch": -30.07,
                       "yaw": 102.81
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302, this.camera_B39A3E72_BF1C_F338_41E7_4CF5F3F2DC0A); this.setMediaBehaviour(this.playList_B32B4DB7_BF1C_F138_41CB_2FA1FF3CAA71, 0, this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_ECAF3F6E_CF3A_0E58_41CE_F151EB5C1D6E",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -36.22,
                       "hfov": 18.53,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 57,
                          "width": 130
                         }
                        ]
                       },
                       "yaw": 18.23
                      }
                     ],
                     "items": [
                      {
                       "hfov": 18.53,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_0_HS_1_0.png",
                          "class": "ImageResourceLevel",
                          "height": 114,
                          "width": 261
                         }
                        ]
                       },
                       "pitch": -36.22,
                       "yaw": 18.23
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2, this.camera_B38C8E87_BF1C_F3D8_41BA_0BFE2C47718D); this.setMediaBehaviour(this.playList_B32ADDB4_BF1C_F138_41D7_CADC1139F3CB, 0, this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_EC4B622E_CF3A_11D8_41CE_69E82570EF75",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -28.34,
                       "hfov": 13.23,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 36,
                          "width": 85
                         }
                        ]
                       },
                       "yaw": -177.59
                      }
                     ],
                     "items": [
                      {
                       "hfov": 13.23,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_0_HS_0_0.png",
                          "class": "ImageResourceLevel",
                          "height": 73,
                          "width": 171
                         }
                        ]
                       },
                       "pitch": -28.34,
                       "yaw": -177.59
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858, this.camera_B3874E7D_BF1C_F329_41C5_42A08971EF78); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ]
                    }
                   ],
                   "left": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_l_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_l.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "back": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_b_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_b.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_u_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_u.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_d_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_d.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_t.jpg",
                   "front": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_f_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_f.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMax": 135,
                 "pitch": 0,
                 "id": "panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB",
                 "hfov": 360
                },
                "backwardYaw": 102.81,
                "yaw": -107.36,
                "distance": 1
               }
              ],
              "vfov": 180,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_r_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_r.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_D02242DE_CF2A_1678_41BC_E9B586DF5686",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -38.36,
                    "hfov": 14.55,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 51,
                       "width": 105
                      }
                     ]
                    },
                    "yaw": -107.36
                   }
                  ],
                  "items": [
                   {
                    "hfov": 14.55,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_2_0.png",
                       "class": "ImageResourceLevel",
                       "height": 103,
                       "width": 211
                      }
                     ]
                    },
                    "pitch": -38.36,
                    "yaw": -107.36
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB, this.camera_B24F3F96_BF1C_F1F8_41E5_598A433CFC87); this.setMediaBehaviour(this.playList_B3291DB4_BF1C_F138_41C8_0EDA6F6AA14F, 0, this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302)"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_D059C6AE_CF2A_3ED8_41E6_7D13E7F1CD28",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -37.78,
                    "hfov": 15.98,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 49,
                       "width": 114
                      }
                     ]
                    },
                    "yaw": 28.49
                   }
                  ],
                  "items": [
                   {
                    "hfov": 15.98,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_1_0.png",
                       "class": "ImageResourceLevel",
                       "height": 98,
                       "width": 229
                      }
                     ]
                    },
                    "pitch": -37.78,
                    "yaw": 28.49
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_EF0F79EE_CF2A_1258_41D6_1F9313DECBC4",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -31.91,
                    "hfov": 25.72,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 67
                      }
                     ]
                    },
                    "yaw": 31.05
                   }
                  ],
                  "items": [
                   {
                    "hfov": 25.72,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_0_0.png",
                       "class": "ImageResourceLevel",
                       "height": 82,
                       "width": 344
                      }
                     ]
                    },
                    "pitch": -31.91,
                    "yaw": 31.05
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C, this.camera_B25FCF7B_BF1C_F128_41E7_9CF034A35DD5); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_E7D12DCD_CF26_7258_41D2_4BB74BEDE707",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -15.94,
                    "hfov": 12.05,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_4_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 32,
                       "width": 71
                      }
                     ]
                    },
                    "yaw": -21.01
                   }
                  ],
                  "items": [
                   {
                    "hfov": 12.05,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_4_0.png",
                       "class": "ImageResourceLevel",
                       "height": 65,
                       "width": 142
                      }
                     ]
                    },
                    "pitch": -15.94,
                    "yaw": -21.01
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.setMediaBehaviour(this.playList_B32A2DB5_BF1C_F138_41E7_AD8936D340F1, 0, this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302)"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_E8F25996_CF29_F2C8_41BC_98AA96E8CE59",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -10.15,
                    "hfov": 17.72,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_3_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 58
                      }
                     ]
                    },
                    "yaw": -20.59
                   }
                  ],
                  "items": [
                   {
                    "hfov": 17.72,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_0_HS_3_0.png",
                       "class": "ImageResourceLevel",
                       "height": 56,
                       "width": 204
                      }
                     ]
                    },
                    "pitch": -10.15,
                    "yaw": -20.59
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8, this.camera_B247EF85_BF1C_F1D8_41D5_36FC2C952D24); this.setMediaBehaviour(this.playList_B32A2DB5_BF1C_F138_41E7_AD8936D340F1, 0, this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302)"
                   }
                  ]
                 }
                ],
                "left": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_l_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_l.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "back": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_b_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_b.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "top": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_u_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_u.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame",
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_d_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_d.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_t.jpg",
                "front": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_f_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_f.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                }
               }
              ],
              "hfovMax": 135,
              "pitch": 0,
              "id": "panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302",
              "hfov": 360
             },
             "backwardYaw": 31.05,
             "yaw": -40.06,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F",
             "backwardYaw": -110.69,
             "yaw": -117.54,
             "distance": 1
            }
           ],
           "vfov": 180,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_r_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_r.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_EE6589A9_E028_2259_41DA_2EEBD1442433",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -40.1,
                 "hfov": 16.93,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 46,
                    "width": 125
                   }
                  ]
                 },
                 "yaw": -117.54
                }
               ],
               "items": [
                {
                 "hfov": 16.93,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_0_HS_0_0.png",
                    "class": "ImageResourceLevel",
                    "height": 92,
                    "width": 251
                   }
                  ]
                 },
                 "pitch": -40.1,
                 "yaw": -117.54
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F, this.camera_B34BBDF7_BF1C_F138_41DA_A9971AFDD0A9); this.mainPlayList.set('selectedIndex', 14)"
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_ECAECAAB_E5CD_C257_41D8_9C0E3739B60A",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -16.2,
                 "hfov": 18.05,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 42,
                    "width": 106
                   }
                  ]
                 },
                 "yaw": -41.26
                }
               ],
               "items": [
                {
                 "hfov": 18.05,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_0_HS_2_0.png",
                    "class": "ImageResourceLevel",
                    "height": 84,
                    "width": 213
                   }
                  ]
                 },
                 "pitch": -16.2,
                 "yaw": -41.26
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.setMediaBehaviour(this.playList_B32B4DB7_BF1C_F138_41CB_2FA1FF3CAA71, 0, this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C)"
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_EF8E07AE_E5CC_4251_41E6_7E347215989F",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -11.74,
                 "hfov": 19.94,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_0_HS_1_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 41
                   }
                  ]
                 },
                 "yaw": -40.06
                }
               ],
               "items": [
                {
                 "hfov": 19.94,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_0_HS_1_0.png",
                    "class": "ImageResourceLevel",
                    "height": 90,
                    "width": 231
                   }
                  ]
                 },
                 "pitch": -11.74,
                 "yaw": -40.06
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302, this.camera_B34F4DEC_BF1C_F128_41E2_5E1D32993E6C); this.setMediaBehaviour(this.playList_B32B4DB7_BF1C_F138_41CB_2FA1FF3CAA71, 0, this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C)"
                }
               ]
              }
             ],
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_l_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_l.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_b_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_b.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_u_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_u.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_d_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_d.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_t.jpg",
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_f_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_f.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             }
            }
           ],
           "hfovMax": 140,
           "pitch": 0,
           "id": "panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C",
           "hfov": 360
          },
          "backwardYaw": -117.54,
          "yaw": -110.69,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787",
          "backwardYaw": 43.83,
          "yaw": -16.39,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "partial": false,
           "label": "entrance-to-kitchen",
           "hfovMin": 60,
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_t.jpg",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F",
             "backwardYaw": 87.35,
             "yaw": 89.81,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "partial": false,
              "label": "bathroom",
              "hfovMin": 60,
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_t.jpg",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B",
                "backwardYaw": 24.02,
                "yaw": 106.06,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "partial": false,
                 "label": "entrance-to-kitchen-middle",
                 "hfovMin": 60,
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_t.jpg",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "partial": false,
                    "label": "kitchen",
                    "hfovMin": 60,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_t.jpg",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690",
                      "backwardYaw": 2.6,
                      "yaw": -97.81,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_D99BA226_CEE6_31C8_41E0_03E67FE66A78",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -23.32,
                          "hfov": 9.52,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 34,
                             "width": 58
                            }
                           ]
                          },
                          "yaw": -97.81
                         }
                        ],
                        "items": [
                         {
                          "hfov": 9.52,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 69,
                             "width": 117
                            }
                           ]
                          },
                          "pitch": -23.32,
                          "yaw": -97.81
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690, this.camera_B2607FBB_BF1C_F128_41D1_7FC59266A0F5); this.setMediaBehaviour(this.playList_B32B9DB6_BF1C_F138_41E1_1E9E3AD64407, 0, this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100)"
                         }
                        ]
                       }
                      ],
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_t.jpg",
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 135,
                    "pitch": 0,
                    "id": "panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100",
                    "hfov": 360
                   },
                   "backwardYaw": -97.81,
                   "yaw": 2.6,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B",
                   "backwardYaw": -1.3,
                   "yaw": 175.51,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059",
                   "backwardYaw": -106.13,
                   "yaw": 157.04,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "partial": false,
                    "label": "maid's-room",
                    "hfovMin": 60,
                    "class": "Panorama",
                    "thumbnailUrl": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_t.jpg",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690",
                      "backwardYaw": -91.74,
                      "yaw": 170.35,
                      "distance": 1
                     }
                    ],
                    "vfov": 180,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "id": "overlay_D9AEE3EE_CEEA_1658_41E4_3CB6613568D5",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -48.6,
                          "hfov": 17.79,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 75,
                             "width": 153
                            }
                           ]
                          },
                          "yaw": 170.35
                         }
                        ],
                        "items": [
                         {
                          "hfov": 17.79,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 151,
                             "width": 306
                            }
                           ]
                          },
                          "pitch": -48.6,
                          "yaw": 170.35
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690, this.camera_B3A57EB0_BF1C_F338_41CB_D28BE2C0C930); this.setMediaBehaviour(this.playList_B32B9DB6_BF1C_F138_41E1_1E9E3AD64407, 0, this.panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB)"
                         }
                        ]
                       }
                      ],
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_t.jpg",
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "hfovMax": 135,
                    "pitch": 0,
                    "id": "panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB",
                    "hfov": 360
                   },
                   "backwardYaw": 170.35,
                   "yaw": -91.74,
                   "distance": 1
                  }
                 ],
                 "vfov": 180,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_r_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_r.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_DB0AD38E_CEEE_36D9_41E8_F6E9C6BDCF10",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -37.33,
                       "hfov": 19.36,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 138
                         }
                        ]
                       },
                       "yaw": -91.74
                      }
                     ],
                     "items": [
                      {
                       "hfov": 19.36,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_3_0.png",
                          "class": "ImageResourceLevel",
                          "height": 118,
                          "width": 277
                         }
                        ]
                       },
                       "pitch": -37.33,
                       "yaw": -91.74
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB, this.camera_B3C42ED9_BF1C_F368_41E6_4D263D905294); this.setMediaBehaviour(this.playList_B3562DBA_BF1C_F128_4171_F59D836E75A4, 0, this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_DB6BD93E_CEEA_7238_419A_3623F311ACDE",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -34.01,
                       "hfov": 14.68,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 44,
                          "width": 100
                         }
                        ]
                       },
                       "yaw": 2.6
                      }
                     ],
                     "items": [
                      {
                       "hfov": 14.68,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_2_0.png",
                          "class": "ImageResourceLevel",
                          "height": 89,
                          "width": 201
                         }
                        ]
                       },
                       "pitch": -34.01,
                       "yaw": 2.6
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100, this.camera_B3AC1EBA_BF1C_F328_41E4_D5F02DA95149); this.mainPlayList.set('selectedIndex', 8)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_D844EC9D_CEEA_12FB_41A4_1BE08F330206",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -42.86,
                       "hfov": 12.37,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 63,
                          "width": 96
                         }
                        ]
                       },
                       "yaw": 157.04
                      }
                     ],
                     "items": [
                      {
                       "hfov": 12.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_1_0.png",
                          "class": "ImageResourceLevel",
                          "height": 127,
                          "width": 192
                         }
                        ]
                       },
                       "pitch": -42.86,
                       "yaw": 157.04
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059, this.camera_B3DC4ECE_BF1C_F368_41E2_EA96CAC7707E); this.setMediaBehaviour(this.playList_B32B1DB7_BF1C_F138_41B7_8CAE39F3658D, 0, this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690)"
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "id": "overlay_D8C776CE_CEEA_3E59_41D7_D1EC54978AAD",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -28.41,
                       "hfov": 11.11,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 42,
                          "width": 71
                         }
                        ]
                       },
                       "yaw": 175.51
                      }
                     ],
                     "items": [
                      {
                       "hfov": 11.11,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_0_HS_0_0.png",
                          "class": "ImageResourceLevel",
                          "height": 85,
                          "width": 143
                         }
                        ]
                       },
                       "pitch": -28.41,
                       "yaw": 175.51
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B, this.camera_B3D44EC4_BF1C_F358_41E0_7D62FFED2F8F); this.mainPlayList.set('selectedIndex', 10)"
                      }
                     ]
                    }
                   ],
                   "left": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_l_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_l.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "back": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_b_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_b.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_u_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_u.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_d_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_d.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_t.jpg",
                   "front": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_f_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_f.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "hfovMax": 135,
                 "pitch": 0,
                 "id": "panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690",
                 "hfov": 360
                },
                "backwardYaw": 157.04,
                "yaw": -106.13,
                "distance": 1
               }
              ],
              "vfov": 180,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_r_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_r.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_D8C639A6_CEEF_F2C8_41BE_575F9957B2DE",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -43.97,
                    "hfov": 17.52,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 138
                      }
                     ]
                    },
                    "yaw": 106.06
                   }
                  ],
                  "items": [
                   {
                    "hfov": 17.52,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_0_HS_1_0.png",
                       "class": "ImageResourceLevel",
                       "height": 118,
                       "width": 277
                      }
                     ]
                    },
                    "pitch": -43.97,
                    "yaw": 106.06
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B, this.camera_B270CFA1_BF1C_F1D8_41D6_1A8AA5E896A0); this.mainPlayList.set('selectedIndex', 10)"
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "id": "overlay_D8FE8CD6_CEEE_1248_41E7_5DEA326A03BF",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -38.71,
                    "hfov": 16.62,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 52,
                       "width": 121
                      }
                     ]
                    },
                    "yaw": -106.13
                   }
                  ],
                  "items": [
                   {
                    "hfov": 16.62,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_0_HS_0_0.png",
                       "class": "ImageResourceLevel",
                       "height": 105,
                       "width": 242
                      }
                     ]
                    },
                    "pitch": -38.71,
                    "yaw": -106.13
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690, this.camera_B2784FAB_BF1C_F128_41D3_5A99B97CCA6C); this.setMediaBehaviour(this.playList_B32B9DB6_BF1C_F138_41E1_1E9E3AD64407, 0, this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059)"
                   }
                  ]
                 }
                ],
                "left": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_l_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_l.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "back": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_b_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_b.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "top": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_u_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_u.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame",
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_d_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_d.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_t.jpg",
                "front": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_f_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_f.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ]
                }
               }
              ],
              "hfovMax": 135,
              "pitch": 0,
              "id": "panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059",
              "hfov": 360
             },
             "backwardYaw": 106.06,
             "yaw": 24.02,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690",
             "backwardYaw": 175.51,
             "yaw": -1.3,
             "distance": 1
            }
           ],
           "vfov": 180,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_r_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_r.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_ECEB5449_E028_62D9_41CD_B7AE2AD53558",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -31.87,
                 "hfov": 20.68,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 59,
                    "width": 138
                   }
                  ]
                 },
                 "yaw": 89.81
                }
               ],
               "items": [
                {
                 "hfov": 20.68,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_0_HS_2_0.png",
                    "class": "ImageResourceLevel",
                    "height": 118,
                    "width": 277
                   }
                  ]
                 },
                 "pitch": -31.87,
                 "yaw": 89.81
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F, this.camera_B3683E48_BF1C_F368_41D2_B27210105EC5); this.mainPlayList.set('selectedIndex', 14)"
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_EDC4AAF9_E028_27B9_41E5_1D67B0D278DC",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -45.67,
                 "hfov": 14.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 51,
                    "width": 119
                   }
                  ]
                 },
                 "yaw": 24.02
                }
               ],
               "items": [
                {
                 "hfov": 14.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_0_HS_1_0.png",
                    "class": "ImageResourceLevel",
                    "height": 102,
                    "width": 239
                   }
                  ]
                 },
                 "pitch": -45.67,
                 "yaw": 24.02
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059, this.camera_B395BE52_BF1C_F378_41CE_759E2C70E6DD); this.setMediaBehaviour(this.playList_B32B1DB7_BF1C_F138_41B7_8CAE39F3658D, 0, this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B)"
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "id": "overlay_EDF8FE39_E029_DEB9_41DF_A1159741C2C4",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -32.54,
                 "hfov": 15.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 44,
                    "width": 107
                   }
                  ]
                 },
                 "yaw": -1.3
                }
               ],
               "items": [
                {
                 "hfov": 15.95,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_0_HS_0_0.png",
                    "class": "ImageResourceLevel",
                    "height": 88,
                    "width": 215
                   }
                  ]
                 },
                 "pitch": -32.54,
                 "yaw": -1.3
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690, this.camera_B3914E5D_BF1C_F368_41E3_E7449797C796); this.setMediaBehaviour(this.playList_B32B9DB6_BF1C_F138_41E1_1E9E3AD64407, 0, this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B)"
                }
               ]
              }
             ],
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_l_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_l.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_b_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_b.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_u_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_u.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_d_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_d.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_t.jpg",
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_f_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_f.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ]
             }
            }
           ],
           "hfovMax": 140,
           "pitch": 0,
           "id": "panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B",
           "hfov": 360
          },
          "backwardYaw": 89.81,
          "yaw": 87.35,
          "distance": 1
         }
        ],
        "vfov": 180,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_r_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_r.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "id": "overlay_EC30F761_E018_2EC9_41E4_DF5A2B0229E8",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -20.47,
              "hfov": 17.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 50,
                 "width": 108
                }
               ]
              },
              "yaw": -16.39
             }
            ],
            "items": [
             {
              "hfov": 17.84,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_0_HS_2_0.png",
                 "class": "ImageResourceLevel",
                 "height": 101,
                 "width": 216
                }
               ]
              },
              "pitch": -20.47,
              "yaw": -16.39
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787, this.camera_B3F43EF2_BF1C_F338_41E4_FB4EB08F05B8); this.mainPlayList.set('selectedIndex', 13)"
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "id": "overlay_EC46AB3A_E018_66BA_41C6_455F97E9B892",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -37.97,
              "hfov": 15.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 49,
                 "width": 115
                }
               ]
              },
              "yaw": 87.35
             }
            ],
            "items": [
             {
              "hfov": 15.94,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_0_HS_1_0.png",
                 "class": "ImageResourceLevel",
                 "height": 98,
                 "width": 230
                }
               ]
              },
              "pitch": -37.97,
              "yaw": 87.35
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B, this.camera_B3FDBEFC_BF1C_F328_41D4_58B16FA666E3); this.mainPlayList.set('selectedIndex', 10)"
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "id": "overlay_ED5F0769_E018_2ED9_41EA_BFFEF5C3E3A8",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -29.31,
              "hfov": 17.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 49,
                 "width": 115
                }
               ]
              },
              "yaw": -110.69
             }
            ],
            "items": [
             {
              "hfov": 17.63,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_0_HS_0_0.png",
                 "class": "ImageResourceLevel",
                 "height": 98,
                 "width": 230
                }
               ]
              },
              "pitch": -29.31,
              "yaw": -110.69
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C, this.camera_B3CDBEE6_BF1C_F358_41E5_3A20C608FF42); this.mainPlayList.set('selectedIndex', 9)"
             }
            ]
           }
          ],
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_l_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_l.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_b_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_b.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_u_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_u.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_d_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_d.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_t.jpg",
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_f_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_f.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ]
          }
         }
        ],
        "hfovMax": 140,
        "pitch": 0,
        "id": "panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F",
        "hfov": 360
       },
       "backwardYaw": -16.39,
       "yaw": 43.83,
       "distance": 1
      }
     ],
     "vfov": 180,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_r_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_r.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "id": "overlay_EB37C2AE_E018_265B_41E0_2854CB92B53E",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22.88,
           "hfov": 11.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 30,
              "width": 69
             }
            ]
           },
           "yaw": -132.23
          }
         ],
         "items": [
          {
           "hfov": 11.32,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_0_HS_1_0.png",
              "class": "ImageResourceLevel",
              "height": 61,
              "width": 139
             }
            ]
           },
           "pitch": -22.88,
           "yaw": -132.23
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149, this.camera_B2684FC6_BF1C_F158_41E3_04F0AD4A2517); this.mainPlayList.set('selectedIndex', 0)"
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "id": "overlay_EC02ACB1_E018_6249_41E7_ECE15D41CCDE",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -27.79,
           "hfov": 15.15,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 39,
              "width": 97
             }
            ]
           },
           "yaw": 43.83
          }
         ],
         "items": [
          {
           "hfov": 15.15,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_0_HS_0_0.png",
              "class": "ImageResourceLevel",
              "height": 79,
              "width": 194
             }
            ]
           },
           "pitch": -27.79,
           "yaw": 43.83
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F, this.camera_B2900FD0_BF1C_F178_41BC_A6F2445CC4E0); this.mainPlayList.set('selectedIndex', 14)"
          }
         ]
        }
       ],
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_l_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_l.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_b_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_b.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_u_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_u.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_d_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_d.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_t.jpg",
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_f_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_f.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ]
       }
      }
     ],
     "hfovMax": 140,
     "pitch": 0,
     "id": "panorama_EAD2246E_E018_22DB_41E5_43E2C067E787",
     "hfov": 360
    },
    "backwardYaw": -132.23,
    "yaw": -168.53,
    "distance": 1
   }
  ],
  "vfov": 180,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_DE820BE6_D415_37BE_41E2_9D30561D82EB",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.08,
        "hfov": 13.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 39,
           "width": 84
          }
         ]
        },
        "yaw": 1.67
       }
      ],
      "items": [
       {
        "hfov": 13.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 79,
           "width": 168
          }
         ]
        },
        "pitch": -20.08,
        "yaw": 1.67
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984, this.camera_B3760E01_BF1C_F2D8_41E0_09EE40470C0A); this.mainPlayList.set('selectedIndex', 7)"
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "id": "overlay_D81333AB_D417_37B5_41D4_C804175D0AD0",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.89,
        "hfov": 11.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 32,
           "width": 70
          }
         ]
        },
        "yaw": -168.53
       }
      ],
      "items": [
       {
        "hfov": 11.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 64,
           "width": 141
          }
         ]
        },
        "pitch": -17.89,
        "yaw": -168.53
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787, this.camera_B3728E0B_BF1C_F2E8_41E7_8CD0D922CD13); this.mainPlayList.set('selectedIndex', 13)"
       }
      ]
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "hfovMax": 130,
  "pitch": 0,
  "id": "panorama_DD526B90_D40B_3792_41D5_48AB6FE20149",
  "hfov": 360
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.22,
   "hfov": 115,
   "yaw": 1.31
  }
 },
 "this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 0
  }
 },
 "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 0
  }
 },
 "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 0
  }
 },
 "this.panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 0
  }
 },
 "this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_E8815B11_E018_2649_41A9_9911B7B86E8D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "media": "this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_E8815B11_E018_2649_41A9_9911B7B86E8D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
  "id": "album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56",
  "label": "Dollhouse album",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56_AlbumPlayList",
   "items": [
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56_0.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Side-1-View",
      "width": 1731,
      "height": 857,
      "class": "Photo",
      "id": "album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56_0",
      "duration": 3000,
      "thumbnailUrl": "media/album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56_0_t.jpg"
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     }
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_DC784B23_CF40_7BD4_41E3_079832D5B178.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Side-2-View",
      "width": 1731,
      "height": 857,
      "class": "Photo",
      "id": "photo_DC784B23_CF40_7BD4_41E3_079832D5B178",
      "duration": 3000,
      "thumbnailUrl": "media/photo_DC784B23_CF40_7BD4_41E3_079832D5B178_t.jpg"
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     }
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/photo_DF577C8C_CF40_7ED3_41DD_E91CE9523378.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "side-3",
      "width": 1731,
      "height": 857,
      "class": "Photo",
      "id": "photo_DF577C8C_CF40_7ED3_41DD_E91CE9523378",
      "duration": 3000,
      "thumbnailUrl": "media/photo_DF577C8C_CF40_7ED3_41DD_E91CE9523378_t.jpg"
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     }
    }
   ]
  },
  "thumbnailUrl": "media/album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56_t.png"
 },
 {
  "class": "PhotoAlbumPlayer",
  "viewerArea": {
   "toolTipFontWeight": "normal",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderRadius": 0,
   "toolTipBorderRadius": 3,
   "progressBarBorderSize": 0,
   "playbackBarProgressBorderRadius": 0,
   "transitionMode": "blending",
   "top": "0%",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadShadow": true,
   "paddingLeft": 0,
   "progressBarOpacity": 1,
   "playbackBarBorderRadius": 0,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "shadow": false,
   "progressOpacity": 1,
   "progressLeft": 0,
   "playbackBarBorderSize": 0,
   "paddingBottom": 0,
   "minHeight": 1,
   "toolTipTextShadowColor": "#000000",
   "height": "100%",
   "toolTipBorderSize": 1,
   "id": "ViewerAreaLabeled_D601BE63_E821_D28C_41CD_D51B2573333F",
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "borderRadius": 0,
   "progressBorderSize": 0,
   "toolTipShadowColor": "#333333",
   "paddingRight": 0,
   "toolTipTextShadowOpacity": 0,
   "borderSize": 0,
   "class": "ViewerArea",
   "width": "100%",
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "toolTipOpacity": 1,
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderSize": 0,
   "playbackBarLeft": 0,
   "progressBorderRadius": 0,
   "playbackBarHeadHeight": 15,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipShadowOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadOpacity": 1,
   "progressBarBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "paddingTop": 0,
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "playbackBarOpacity": 1,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontStyle": "normal",
   "progressHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "left": "0%",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipBorderColor": "#767676",
   "playbackBarRight": 0
  },
  "id": "ViewerAreaLabeled_D601BE63_E821_D28C_41CD_D51B2573333FPhotoAlbumPlayer",
  "buttonNext": {
   "horizontalAlign": "center",
   "borderRadius": 0,
   "borderSize": 0,
   "maxWidth": 50,
   "rollOverIconURL": "skin/IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66_rollover.png",
   "class": "IconButton",
   "maxHeight": 50,
   "top": "45.14%",
   "bottom": "44.86%",
   "paddingLeft": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66.png",
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "minWidth": 40,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "minHeight": 40,
   "right": "2.16%",
   "id": "IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66",
   "width": 150,
   "paddingRight": 0
  },
  "buttonPause": "this.IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4",
  "buttonPrevious": {
   "horizontalAlign": "center",
   "borderRadius": 0,
   "borderSize": 0,
   "maxWidth": 50,
   "rollOverIconURL": "skin/IconButton_D6016E63_E821_D28C_41E7_021622EF28CB_rollover.png",
   "class": "IconButton",
   "maxHeight": 50,
   "top": "45.02%",
   "bottom": "44.98%",
   "paddingLeft": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_D6016E63_E821_D28C_41E7_021622EF28CB.png",
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "minWidth": 40,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_D6016E63_E821_D28C_41E7_021622EF28CB_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "left": "1.36%",
   "minHeight": 40,
   "id": "IconButton_D6016E63_E821_D28C_41E7_021622EF28CB",
   "width": 150,
   "paddingRight": 0
  }
 },
 "this.album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56_0",
 "this.photo_DC784B23_CF40_7BD4_41E3_079832D5B178",
 "this.photo_DF577C8C_CF40_7ED3_41DD_E91CE9523378",
 {
  "class": "PlayList",
  "id": "ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist",
  "items": [
   {
    "media": "this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DD526B90_D40B_3792_41D5_48AB6FE20149_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D21B24DF_CF1A_1278_41DF_FF72ECEA6858_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2ADA34B_CF29_F658_41C5_1D0BDC20606D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2BB0C4E_CF2E_3258_41D0_46AB2E30E655_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E6E176BA_CF29_FE38_41DC_F39FB2909EAE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 4, 5)"
   },
   {
    "media": "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E7E41890_CF2E_12C8_41E1_D0843F900262_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 5, 6)"
   },
   {
    "media": "this.album_DD0BDF72_CF40_3A34_41E9_DCCCF39D1F56",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_D601BE63_E821_D28C_41CD_D51B2573333FPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 6, 7)"
   },
   {
    "media": "this.panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EFC19D66_CF2A_1248_41E1_8338FF7E1AEA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 7, 8)"
   },
   {
    "media": "this.panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DDD6C065_D40F_50B2_41E3_C9A6A4FE8984_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 8, 9)"
   },
   {
    "media": "this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DDE836EB_CEFE_7E58_41D2_1039C63D6100_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 9, 10)"
   },
   {
    "media": "this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E88DCDE4_E018_FDCE_41B0_81AE1F54F31C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 10, 11)"
   },
   {
    "media": "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E897B3A7_E018_2649_41C9_FF9DB79B351B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 11, 12)"
   },
   {
    "media": "this.panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8CA8E8D_E018_5E5E_41E1_73BBFE633414_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 12, 13)"
   },
   {
    "media": "this.panorama_E8815B11_E018_2649_41A9_9911B7B86E8D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_E8815B11_E018_2649_41A9_9911B7B86E8D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 13, 14)"
   },
   {
    "media": "this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EAD2246E_E018_22DB_41E5_43E2C067E787_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 14, 15)"
   },
   {
    "media": "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_EB868C6A_E01B_E2DB_41DC_E6C00E1B588F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 15, 0)"
   }
  ]
 },
 "this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B3291DB4_BF1C_F138_41C8_0EDA6F6AA14F",
  "items": [
   {
    "media": "this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D11442F7_CF1A_1637_41C7_9CF7BF7C55FB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32ADDB4_BF1C_F138_41D7_CADC1139F3CB",
  "items": [
   {
    "media": "this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D2E0B3C5_CF2A_1648_41C0_2433DB6A2AD2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32A6DB5_BF1C_F138_41D8_AA32C0408847",
  "items": [
   {
    "media": "this.panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D27C97D9_CF2E_1E78_41E3_9D169D6F77F2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1.82,
   "hfov": 111,
   "yaw": -49.45
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32A2DB5_BF1C_F138_41E7_AD8936D340F1",
  "items": [
   {
    "media": "this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E6D0F93E_CF2A_3238_41B9_FCB4288878F8_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32BEDB6_BF1C_F138_41D7_7100DF343ACA",
  "items": [
   {
    "media": "this.panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E7EA8134_CF2E_13C8_41E3_E376A0E1B40D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32B9DB6_BF1C_F138_41E1_1E9E3AD64407",
  "items": [
   {
    "media": "this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DF7943FC_CEFE_7639_41B0_D5EB2C489690_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.21,
   "hfov": 110,
   "yaw": -131.1
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32B4DB7_BF1C_F138_41CB_2FA1FF3CAA71",
  "items": [
   {
    "media": "this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D37F2479_CF1A_F238_41DB_8050BBD8B302_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B32B1DB7_BF1C_F138_41B7_8CAE39F3658D",
  "items": [
   {
    "media": "this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DE9BF7B6_CEFE_1EC8_41A1_2802B24B7059_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B3562DBA_BF1C_F128_4171_F59D836E75A4",
  "items": [
   {
    "media": "this.panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C158C50D_CEFE_F3DB_41E3_A67F0FBAD3BB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_camera",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "id": "playList_B3573DBC_BF1C_F128_41E3_B34A02DD7EEB",
  "items": [
   {
    "media": "this.panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D2A786EA_CF2E_1E58_41DD_78518F35894D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "scaleMode": "fit_inside",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044.png",
     "class": "ImageResourceLevel",
     "height": 777,
     "width": 1032
    },
    {
     "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_lq.png",
     "class": "ImageResourceLevel",
     "height": 388,
     "width": 516,
     "grayscale": true
    }
   ]
  },
  "label": "floorplan all",
  "thumbnailUrl": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_t.png",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "class": "Map",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "overlays": [
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FC7189AE_CF6A_72D8_41D7_0EF644D4C527",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_0.png",
        "class": "ImageResourceLevel",
        "height": 95,
        "width": 213
       }
      ]
     },
     "width": 214,
     "height": 96,
     "class": "HotspotMapOverlayImage",
     "x": 431.81,
     "y": -2.2
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "map": {
     "height": 96,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": -2.2,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_0_map.gif",
        "class": "ImageResourceLevel",
        "height": 47,
        "width": 106
       }
      ]
     },
     "width": 214,
     "x": 431.81
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FC4F7C45_CF6A_124B_41A0_074D25EBBB98",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_1.png",
        "class": "ImageResourceLevel",
        "height": 64,
        "width": 143
       }
      ]
     },
     "width": 143.6,
     "height": 64.5,
     "class": "HotspotMapOverlayImage",
     "x": 102.54,
     "y": 13.37
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "map": {
     "height": 64.5,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 13.37,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_1_map.gif",
        "class": "ImageResourceLevel",
        "height": 32,
        "width": 71
       }
      ]
     },
     "width": 143.6,
     "x": 102.54
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FC4CCA1D_CF6A_11F8_41E2_D9BADDF34867",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_2.png",
        "class": "ImageResourceLevel",
        "height": 95,
        "width": 213
       }
      ]
     },
     "width": 214,
     "height": 96,
     "class": "HotspotMapOverlayImage",
     "x": 738.96,
     "y": -5.5
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "map": {
     "height": 96,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": -5.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_2_map.gif",
        "class": "ImageResourceLevel",
        "height": 47,
        "width": 106
       }
      ]
     },
     "width": 214,
     "x": 738.96
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FC58976D_CF6A_1E58_41D0_2204790D5CFB",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_3.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 122.22,
     "y": 277.45
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 0)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 277.45,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_3_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 122.22
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FBF6D004_CF66_71C9_41A6_FF5B28506288",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_4.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 88.41,
     "y": 445.18
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 13)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 445.18,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_4_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 88.41
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FB4AF2B5_CF66_76C8_4194_7F55E194D1C8",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_5.png",
        "class": "ImageResourceLevel",
        "height": 127,
        "width": 128
       }
      ]
     },
     "width": 128.54,
     "height": 127.61,
     "class": "HotspotMapOverlayImage",
     "x": 146.77,
     "y": 628.03
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 8)"
     }
    ],
    "map": {
     "height": 127.61,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 628.03,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_5_map.gif",
        "class": "ImageResourceLevel",
        "height": 63,
        "width": 64
       }
      ]
     },
     "width": 128.54,
     "x": 146.77
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_FC9DD08D_CF66_72DB_41E5_E94EC7C87CBA",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_6.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 469.91,
     "y": 340.15
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 3)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 340.15,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_6_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 469.91
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_F913E935_CF66_73C8_41D9_001905A005CB",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_7.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 444.08,
     "y": 469.33
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 1)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 469.33,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_7_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 444.08
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_F923A9C5_CF7A_3248_41B9_4DF5E1351AB2",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_8.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 463.77,
     "y": 577.89
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 2)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 577.89,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_8_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 463.77
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_F9D9EA9D_CF7A_16F8_41E8_EDCCDF1B8ACE",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_9.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 824.94,
     "y": 286.89
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 4)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 286.89,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_9_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 824.94
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_F66020F5_CF7A_F248_41E0_AD909AF85568",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_10.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 824.94,
     "y": 107.75
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 12)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 107.75,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_10_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 824.94
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_F4CECF25_CF7A_0FC8_41DA_C5AF1378495F",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_11.png",
        "class": "ImageResourceLevel",
        "height": 119,
        "width": 119
       }
      ]
     },
     "width": 120,
     "height": 120,
     "class": "HotspotMapOverlayImage",
     "x": 832.93,
     "y": 418.26
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 5)"
     }
    ],
    "map": {
     "height": 120,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 418.26,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_11_map.gif",
        "class": "ImageResourceLevel",
        "height": 59,
        "width": 59
       }
      ]
     },
     "width": 120,
     "x": 832.93
    }
   },
   {
    "class": "AreaHotspotMapOverlay",
    "rollOverDisplay": false,
    "id": "overlay_F83CC925_CF7E_13C8_41E9_611FEBEC1462",
    "useHandCursor": true,
    "image": {
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_12.png",
        "class": "ImageResourceLevel",
        "height": 102,
        "width": 102
       }
      ]
     },
     "width": 102.6,
     "height": 102.6,
     "class": "HotspotMapOverlayImage",
     "x": 817.59,
     "y": 634.97
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 11)"
     }
    ],
    "map": {
     "height": 102.6,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "offsetY": 0,
     "y": 634.97,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_F89BB256_CF6A_1648_41E3_E0832F679044_HS_12_map.gif",
        "class": "ImageResourceLevel",
        "height": 51,
        "width": 51
       }
      ]
     },
     "width": 102.6,
     "x": 817.59
    }
   }
  ],
  "initialZoomFactor": 1,
  "maximumZoomFactor": 1.2,
  "width": 1032,
  "height": 777,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "id": "map_F89BB256_CF6A_1648_41E3_E0832F679044"
 },
 {
  "class": "MapPlayer",
  "viewerArea": {
   "toolTipFontWeight": "normal",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderRadius": 0,
   "toolTipBorderRadius": 3,
   "progressBarBorderSize": 0,
   "playbackBarProgressBorderRadius": 0,
   "transitionMode": "blending",
   "top": "0%",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadShadow": true,
   "paddingLeft": 0,
   "progressBarOpacity": 1,
   "playbackBarBorderRadius": 0,
   "progressBottom": 2,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarBackgroundOpacity": 1,
   "minWidth": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "shadow": false,
   "progressOpacity": 1,
   "progressLeft": 0,
   "playbackBarBorderSize": 0,
   "paddingBottom": 0,
   "minHeight": 1,
   "toolTipTextShadowColor": "#000000",
   "height": "100%",
   "toolTipBorderSize": 1,
   "id": "ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149",
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "borderRadius": 0,
   "progressBorderSize": 0,
   "toolTipShadowColor": "#333333",
   "paddingRight": 0,
   "toolTipTextShadowOpacity": 0,
   "borderSize": 0,
   "class": "ViewerArea",
   "width": "100%",
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "toolTipOpacity": 1,
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBorderSize": 0,
   "playbackBarLeft": 0,
   "progressBorderRadius": 0,
   "playbackBarHeadHeight": 15,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipShadowOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "toolTipFontFamily": "Arial",
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadOpacity": 1,
   "progressBarBorderColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "paddingTop": 0,
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "playbackBarOpacity": 1,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontStyle": "normal",
   "progressHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "left": "0%",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipBorderColor": "#767676",
   "playbackBarRight": 0
  },
  "id": "ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149MapPlayer",
  "movementMode": "constrained"
 },
 {
  "class": "PlayList",
  "id": "playList_B3507DBE_BF1C_F128_41D7_8CDF8A26D97A",
  "items": [
   {
    "media": "this.map_F89BB256_CF6A_1648_41E3_E0832F679044",
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149MapPlayer",
    "begin": "this.ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149MapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3426DD7_BF1C_F178_41D8_923E49A3431F",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": -96.67
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B34CADE2_BF1C_F158_41E3_8AEDE0409FE8",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": -175.23
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B34F4DEC_BF1C_F128_41E2_5E1D32993E6C",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -148.95
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B34BBDF7_BF1C_F138_41DA_A9971AFDD0A9",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 69.31
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3760E01_BF1C_F2D8_41E0_09EE40470C0A",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": -6.33
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3728E0B_BF1C_F2E8_41E7_8CD0D922CD13",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 47.77
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B37D5E15_BF1C_F2F8_41E3_4B407A33DE04",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 147.37
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B379AE1F_BF1C_F2E8_41DA_409FCC74928D",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -108.48
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B365EE29_BF1C_F328_41AA_AB07FA963D80",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 2.41
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B361EE34_BF1C_F338_41E0_8C14CC296E07",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 159.41
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B36C3E3E_BF1C_F328_41CC_9807539DC083",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": -13.82
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3683E48_BF1C_F368_41D2_B27210105EC5",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -92.65
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B395BE52_BF1C_F378_41CE_759E2C70E6DD",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -73.94
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3914E5D_BF1C_F368_41E3_E7449797C796",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -4.49
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B39E9E67_BF1C_F358_41DF_3E4647066719",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 77.26
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B39A3E72_BF1C_F338_41E7_4CF5F3F2DC0A",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 72.64
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3874E7D_BF1C_F329_41C5_42A08971EF78",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 177.84
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B38C8E87_BF1C_F3D8_41BA_0BFE2C47718D",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 3.92
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B38A8E91_BF1C_F3F8_41E5_DA5281E52DF7",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 86.77
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3B0EE9B_BF1C_F3E8_41CC_8BE6E06E32C8",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 23.24
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3BD1EA6_BF1C_F3DB_41E2_BACE5A3539A7",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -177.5
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3A57EB0_BF1C_F338_41CB_D28BE2C0C930",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 88.26
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3AC1EBA_BF1C_F328_41E4_D5F02DA95149",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 82.19
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3D44EC4_BF1C_F358_41E0_7D62FFED2F8F",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 178.7
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3DC4ECE_BF1C_F368_41E2_EA96CAC7707E",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 73.87
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3C42ED9_BF1C_F368_41E6_4D263D905294",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -9.65
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3CDBEE6_BF1C_F358_41E5_3A20C608FF42",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 62.46
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3F43EF2_BF1C_F338_41E4_FB4EB08F05B8",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -136.17
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3FDBEFC_BF1C_F328_41D4_58B16FA666E3",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -90.19
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3E58F07_BF1C_F2D8_41CF_54367AD546F9",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": -178.33
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B3EDBF11_BF1C_F2F8_41E4_079B935DCD52",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -24.75
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2157F1C_BF1C_F2E8_41DA_F6B1BBA72B65",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 111,
   "yaw": 133.55
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B21D6F27_BF1C_F2D9_41E1_2510B25D56B2",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -72.95
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2053F32_BF1C_F13B_41E6_26999BBAB070",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": -31.37
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B20D3F3C_BF1C_F128_41DD_7FB55B231328",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 94.96
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2353F47_BF1C_F158_41E0_07805706109F",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -46.55
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B23D4F52_BF1C_F17B_41D9_AE2B76D0D3BB",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 20.23
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B226FF5C_BF1C_F168_41D7_965E974A5041",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 7.06
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B22E9F66_BF1C_F158_41C0_001CB3F07FAC",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -89.77
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2567F70_BF1C_F138_41D9_C8D83D4127C0",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -161.77
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B25FCF7B_BF1C_F128_41E7_9CF034A35DD5",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 139.94
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B247EF85_BF1C_F1D8_41D5_36FC2C952D24",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 111,
   "yaw": -124.85
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B24F3F96_BF1C_F1F8_41E5_598A433CFC87",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -77.19
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B270CFA1_BF1C_F1D8_41D6_1A8AA5E896A0",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -155.98
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2784FAB_BF1C_F128_41D3_5A99B97CCA6C",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -22.96
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2607FBB_BF1C_F128_41D1_7FC59266A0F5",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": -177.4
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2684FC6_BF1C_F158_41E3_04F0AD4A2517",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 11.47
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B2900FD0_BF1C_F178_41BC_A6F2445CC4E0",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 110,
   "yaw": 163.61
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B299FFDB_BF1C_F169_41D2_EFBA8438F103",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 93.28
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_B281CFEB_BF1C_F129_4170_CEC47ECB2792",
  "manualRotationSpeed": 800,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "hfov": 115,
   "yaw": 92.72
  }
 },
 {
  "class": "MediaAudio",
  "id": "audio_DD07A255_CF41_EA7C_41DF_365F04396ECE",
  "audio": {
   "mp3Url": "media/audio_DD07A255_CF41_EA7C_41DF_365F04396ECE.mp3",
   "oggUrl": "media/audio_DD07A255_CF41_EA7C_41DF_365F04396ECE.ogg",
   "class": "AudioResource"
  },
  "autoplay": true
 }
], "children": [
 {
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "top": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadow": true,
  "paddingLeft": 0,
  "progressBarOpacity": 1,
  "playbackBarBorderRadius": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "minWidth": 100,
  "playbackBarBorderColor": "#FFFFFF",
  "shadow": false,
  "progressOpacity": 1,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "paddingBottom": 0,
  "minHeight": 50,
  "toolTipTextShadowColor": "#000000",
  "height": "100%",
  "toolTipBorderSize": 1,
  "id": "MainViewer",
  "toolTipPaddingTop": 4,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "borderSize": 0,
  "class": "ViewerArea",
  "width": "100%",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarLeft": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "playbackBarRight": 0
 },
 {
  "horizontalAlign": "center",
  "borderRadius": 0,
  "borderSize": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "top": 62,
  "children": [
   {
    "itemVerticalAlign": "middle",
    "borderRadius": 0,
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 11,
    "itemPaddingTop": 3,
    "borderSize": 0,
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "class": "ThumbnailList",
    "itemBackgroundColorDirection": "vertical",
    "scrollBarVisible": "rollOver",
    "itemBorderRadius": 0,
    "itemBackgroundColorRatios": [],
    "itemThumbnailHeight": 92,
    "itemLabelFontWeight": "normal",
    "itemThumbnailBorderRadius": 50,
    "selectedItemLabelFontWeight": "bold",
    "scrollBarColor": "#FFFFFF",
    "itemPaddingBottom": 3,
    "itemBackgroundOpacity": 0,
    "paddingLeft": 20,
    "itemLabelFontColor": "#FFFFFF",
    "rollOverItemThumbnailShadowBlurRadius": 10,
    "itemBackgroundColor": [],
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "verticalAlign": "top",
    "itemPaddingLeft": 3,
    "itemLabelPosition": "bottom",
    "itemHorizontalAlign": "center",
    "itemPaddingRight": 3,
    "itemLabelFontStyle": "normal",
    "paddingTop": 10,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "itemLabelHorizontalAlign": "center",
    "shadow": false,
    "itemLabelGap": 9,
    "rollOverItemThumbnailShadowOpacity": 0.81,
    "scrollBarOpacity": 0.8,
    "itemLabelTextDecoration": "none",
    "scrollBarWidth": 7,
    "playList": "this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist",
    "rollOverItemThumbnailShadow": true,
    "itemOpacity": 1,
    "itemLabelFontFamily": "Trebuchet MS",
    "layout": "vertical",
    "paddingBottom": 30,
    "backgroundOpacity": 0,
    "minHeight": 1,
    "gap": 12,
    "itemThumbnailShadow": false,
    "itemThumbnailWidth": 92,
    "horizontalAlign": "left",
    "height": "100%",
    "itemMode": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "id": "ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5",
    "paddingRight": 20
   }
  ],
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "backgroundImageUrl": "skin/Container_C8C3C26D_C5C6_524B_4191_0CADA8098322.png",
  "verticalAlign": "top",
  "overflow": "hidden",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadow": false,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "contentOpaque": false,
  "layout": "vertical",
  "paddingBottom": 0,
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "gap": 10,
  "right": 0,
  "height": "75%",
  "id": "Container_C8C3C26D_C5C6_524B_4191_0CADA8098322",
  "width": 148,
  "visible": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "left",
  "borderRadius": 0,
  "borderSize": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "horizontalAlign": "left",
    "borderRadius": 0,
    "borderSize": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "top": "0%",
    "children": [
     {
      "horizontalAlign": "center",
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 52,
      "class": "IconButton",
      "maxHeight": 42,
      "paddingLeft": 0,
      "transparencyActive": true,
      "mode": "toggle",
      "iconURL": "skin/IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84.png",
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84_pressed.png",
      "paddingTop": 0,
      "minWidth": 1,
      "shadow": false,
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "height": 42,
      "id": "IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84",
      "width": 52,
      "paddingRight": 0
     },
     {
      "horizontalAlign": "center",
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_D3B01ABA_C64E_32CE_41E7_6C4176953C29_rollover.png",
      "class": "IconButton",
      "maxHeight": 42,
      "paddingLeft": 0,
      "transparencyActive": true,
      "mode": "push",
      "iconURL": "skin/IconButton_D3B01ABA_C64E_32CE_41E7_6C4176953C29.png",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "minWidth": 1,
      "shadow": false,
      "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=z9ReEjDucN0\", \"_blank\"); newWindow.focus()",
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "height": 42,
      "id": "IconButton_D3B01ABA_C64E_32CE_41E7_6C4176953C29",
      "width": 59,
      "visible": false,
      "paddingRight": 0
     },
     {
      "horizontalAlign": "center",
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_D3B00ABA_C64E_32CE_41D5_3C77C7155614_rollover.png",
      "class": "IconButton",
      "maxHeight": 42,
      "paddingLeft": 0,
      "transparencyActive": true,
      "mode": "push",
      "iconURL": "skin/IconButton_D3B00ABA_C64E_32CE_41D5_3C77C7155614.png",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "minWidth": 1,
      "shadow": false,
      "click": "this.setComponentVisibility(this.Container_D6015E63_E821_D28C_41EC_7024F3046C63, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "height": 42,
      "id": "IconButton_D3B00ABA_C64E_32CE_41D5_3C77C7155614",
      "width": 59,
      "visible": false,
      "paddingRight": 0
     },
     {
      "horizontalAlign": "center",
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_D3B02ABA_C64E_32CE_41BF_8C690A1FDBEC_rollover.png",
      "class": "IconButton",
      "maxHeight": 42,
      "paddingLeft": 0,
      "transparencyActive": true,
      "mode": "push",
      "iconURL": "skin/IconButton_D3B02ABA_C64E_32CE_41BF_8C690A1FDBEC.png",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "minWidth": 1,
      "shadow": false,
      "click": "this.setComponentVisibility(this.Container_A96FA41C_E823_F6B4_41E2_4B24E4513BDA, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "height": 42,
      "id": "IconButton_D3B02ABA_C64E_32CE_41BF_8C690A1FDBEC",
      "width": 52,
      "paddingRight": 0
     },
     {
      "horizontalAlign": "center",
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "class": "IconButton",
      "maxHeight": 42,
      "paddingLeft": 0,
      "transparencyActive": true,
      "mode": "toggle",
      "iconURL": "skin/IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B.png",
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B_pressed.png",
      "paddingTop": 0,
      "minWidth": 1,
      "shadow": false,
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "height": 42,
      "id": "IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B",
      "width": 46,
      "paddingRight": 0
     }
    ],
    "paddingLeft": 14,
    "scrollBarColor": "#000000",
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingTop": 0,
    "width": "74.897%",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "shadow": false,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "left": "0%",
    "layout": "horizontal",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "minHeight": 1,
    "contentOpaque": false,
    "gap": 16,
    "height": "100%",
    "id": "Container_D3B14ABB_C64E_32CE_41E7_1B01EC891E9F",
    "paddingRight": 0
   },
   {
    "horizontalAlign": "center",
    "borderRadius": 0,
    "borderSize": 0,
    "maxWidth": 216,
    "class": "Image",
    "maxHeight": 35,
    "bottom": "22.57%",
    "paddingLeft": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "minWidth": 1,
    "shadow": false,
    "cursor": "hand",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "click": "var newWindow = window.open(\"http://www.spectapp.com/\", \"_blank\"); newWindow.focus()",
    "left": "85.05%",
    "right": "1.07%",
    "minHeight": 1,
    "height": "38.573%",
    "id": "Image_F2FEFEE3_CF6A_0E4F_41B9_14B703282BD7",
    "url": "skin/Image_F2FEFEE3_CF6A_0E4F_41B9_14B703282BD7.png",
    "paddingRight": 0
   }
  ],
  "bottom": "0%",
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "width": "100%",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadow": false,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "left": "0%",
  "layout": "absolute",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "contentOpaque": false,
  "gap": 10,
  "height": 70,
  "id": "Container_D0731EA7_C64E_72C7_41CD_63A5860BC494",
  "paddingRight": 0
 },
 {
  "horizontalAlign": "center",
  "borderRadius": 0,
  "borderSize": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "top": 10,
  "children": [
   {
    "horizontalAlign": "center",
    "borderRadius": 0,
    "borderSize": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "borderRadius": 0,
      "borderSize": 0,
      "class": "HTMLText",
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "paddingLeft": 20,
      "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:26px;\"><B>TITLE</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;\"><B><I>SUBTITLE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\"><B>____________________________________</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in pretium augue. Quisque mollis, leo a vestibulum sodales, nunc est auctor massa, eget tempor nunc sem sit amet felis. Duis eget mi ac augue dapibus feugiat id vitae lacus. Phasellus congue justo vitae quam rutrum dictum. Donec auctor, risus nec sodales ullamcorper, dui neque dignissim quam, ac imperdiet ligula est non enim. Morbi eleifend, enim eu ullamcorper vestibulum, orci nisl convallis libero, cursus dictum dui mi at tortor. Ut euismod nunc id lectus mollis tristique. Duis lacinia pellentesque urna, at dictum velit.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">Aliquam egestas magna porta, lacinia nisl eu, interdum neque. Etiam porta urna nec massa egestas euismod. Sed at lectus leo. Nulla blandit purus ut arcu feugiat, non varius tortor varius. Mauris a sem leo. Nulla eleifend mattis tincidunt. Nullam laoreet, arcu sit amet efficitur luctus, augue libero convallis odio, a pharetra est tellus id tortor. Nunc tincidunt, mauris in posuere pretium, velit velit blandit ipsum, vel tempus eros nisl nec sem. Phasellus placerat ex sed enim pharetra, eu venenatis enim convallis. Morbi dolor urna, semper vitae fermentum in, egestas in enim. Sed id egestas ligula. Sed quis laoreet nulla. Curabitur finibus risus quis velit bibendum mattis. Mauris lacinia, purus eu fermentum tristique, nunc est semper nisi, consectetur varius justo velit nec lorem. Ut aliquam vehicula sapien. Fusce metus libero, placerat vel ultrices quis, dictum et neque.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">In posuere pretium, velit velit blandit ipsum, vel tempus eros nisl nec sem. Phasellus placerat ex sed enim pharetra, eu venenatis enim convallis. Morbi dolor urna, semper vitae fermentum in, egestas in enim. Sed id egestas ligula. Sed quis laoreet nulla. Curabitur finibus risus quis velit bibendum mattis. Mauris lacinia, purus eu fermentum.</SPAN></SPAN></DIV></div>",
      "paddingTop": 20,
      "scrollBarMargin": 2,
      "minWidth": 1,
      "shadow": false,
      "scrollBarOpacity": 0.31,
      "scrollBarWidth": 5,
      "paddingBottom": 20,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "height": "104.52%",
      "width": 298,
      "id": "HTMLText_2B5A1184_3B5E_334E_41AE_D15498841AA2",
      "paddingRight": 20
     }
    ],
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "backgroundImageUrl": "skin/Container_C85DB8A8_C646_5EC9_41DD_E95E2F1A887D.png",
    "verticalAlign": "top",
    "overflow": "hidden",
    "paddingTop": 0,
    "width": "100%",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "shadow": false,
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "layout": "vertical",
    "paddingBottom": 0,
    "backgroundOpacity": 0.6,
    "minHeight": 1,
    "contentOpaque": false,
    "gap": 10,
    "height": "93.699%",
    "id": "Container_C85DB8A8_C646_5EC9_41DD_E95E2F1A887D",
    "visible": false,
    "paddingRight": 0
   }
  ],
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadow": false,
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "contentOpaque": false,
  "layout": "vertical",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "minHeight": 1,
  "gap": 2,
  "right": 150,
  "height": "80%",
  "id": "Container_C7A98B29_E822_B29C_41E3_F2040B820269",
  "width": 300,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "left",
  "borderRadius": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "children": [
   {
    "horizontalAlign": "left",
    "borderRadius": 0,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "top": "15.85%",
    "children": [
     "this.ViewerAreaLabeled_D601BE63_E821_D28C_41CD_D51B2573333F",
     "this.IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66",
     "this.IconButton_D6016E63_E821_D28C_41E7_021622EF28CB",
     "this.IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4"
    ],
    "bottom": "15.37%",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "left": "16%",
    "contentOpaque": false,
    "layout": "absolute",
    "paddingBottom": 0,
    "backgroundOpacity": 1,
    "minHeight": 1,
    "gap": 10,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "right": "18.4%",
    "id": "Container_D601AE62_E821_D28D_41E7_52DE3E12ED20",
    "paddingRight": 0
   }
  ],
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "width": "100%",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "left": "0%",
  "layout": "absolute",
  "paddingBottom": 0,
  "backgroundOpacity": 0.8,
  "minHeight": 1,
  "contentOpaque": false,
  "gap": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "height": "100%",
  "id": "Container_D6015E63_E821_D28C_41EC_7024F3046C63",
  "visible": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "left",
  "borderRadius": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "children": [
   {
    "horizontalAlign": "left",
    "borderRadius": 0,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "top": "12%",
    "children": [
     "this.ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149",
     {
      "horizontalAlign": "center",
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 40,
      "rollOverIconURL": "skin/IconButton_A96FB41C_E823_F6B4_41E2_30570EC870F5_rollover.png",
      "class": "IconButton",
      "maxHeight": 40,
      "top": 0,
      "paddingLeft": 0,
      "transparencyActive": true,
      "iconURL": "skin/IconButton_A96FB41C_E823_F6B4_41E2_30570EC870F5.png",
      "verticalAlign": "middle",
      "mode": "push",
      "paddingTop": 0,
      "minWidth": 1,
      "shadow": false,
      "click": "this.setComponentVisibility(this.Container_A96FA41C_E823_F6B4_41E2_4B24E4513BDA, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "minHeight": 1,
      "right": 0,
      "height": 60,
      "id": "IconButton_A96FB41C_E823_F6B4_41E2_30570EC870F5",
      "width": 60,
      "paddingRight": 0
     }
    ],
    "bottom": "12%",
    "paddingLeft": 30,
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 30,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "scrollBarWidth": 10,
    "left": "43.2%",
    "contentOpaque": false,
    "layout": "absolute",
    "paddingBottom": 30,
    "backgroundOpacity": 0.4,
    "minHeight": 1,
    "gap": 10,
    "backgroundColor": [
     "#CCCCCC",
     "#999999"
    ],
    "right": "0.08%",
    "id": "Container_A96FE41C_E823_F6B4_41DC_B884E8354116",
    "paddingRight": 30
   }
  ],
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "width": "100%",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "scrollBarWidth": 10,
  "left": "0%",
  "layout": "absolute",
  "paddingBottom": 0,
  "backgroundOpacity": 0.7,
  "minHeight": 1,
  "contentOpaque": false,
  "gap": 10,
  "backgroundColor": [
   "#000000"
  ],
  "height": "100%",
  "id": "Container_A96FA41C_E823_F6B4_41E2_4B24E4513BDA",
  "visible": false,
  "paddingRight": 0
 },
 {
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "top": "0%",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadow": true,
  "paddingLeft": 0,
  "progressBarOpacity": 1,
  "playbackBarBorderRadius": 0,
  "progressBottom": 2,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "minWidth": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "shadow": false,
  "progressOpacity": 1,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "paddingBottom": 0,
  "minHeight": 1,
  "toolTipTextShadowColor": "#000000",
  "height": "30%",
  "toolTipBorderSize": 1,
  "id": "MapViewer",
  "toolTipPaddingTop": 4,
  "visible": false,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "toolTipTextShadowOpacity": 0,
  "borderSize": 0,
  "class": "ViewerArea",
  "width": "40%",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarLeft": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "playbackBarBottom": 0,
  "progressBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "left": "0%",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "playbackBarRight": 0
 }
], 
 "horizontalAlign": "left",
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84",
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_DD07A255_CF41_EA7C_41DF_365F04396ECE]); this.syncPlaylists([this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_B3507DBE_BF1C_F128_41D7_8CDF8A26D97A.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B",
 "overflow": "visible",
 "paddingTop": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "minHeight": 20,
 "contentOpaque": false,
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose(true);       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose(false);       }   };   var disposeCallback = function(){       dispose(false);   };   var dispose = function(forceDispose){       if(!playListDispatcher) return;       var media = item.get('media');       if(media.get('class') == 'Video360' && media.get('loop') == true && !forceDispose) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   var mediaDispatcherByParam = mediaDispatcher != undefined;   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){       player = item.get('player');       setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100);   }   this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){    delete window[key]; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "registerKey": function(key, value){    window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else if(component.get('playbackState') == 'playing') component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "getKey": function(key){    return window[key]; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       var a = audios[audio];       if(a.get('state') == 'playing')           a.pause();   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   if(audio.get('state') == 'playing')       audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else if(player.get('state') == 'playing') {               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){    return key in window; }
 },
 "gap": 10,
 "height": "100%",
 "id": "rootPlayer",
 "paddingRight": 0
})