TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonPause": {
   "transparencyActive": true,
   "top": 20,
   "class": "IconButton",
   "maxWidth": 34,
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingRight": 0,
   "maxHeight": 34,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "minHeight": 30,
   "mode": "push",
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4.png",
   "shadow": false,
   "minWidth": 30,
   "rollOverIconURL": "skin/IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4_rollover.png",
   "backgroundOpacity": 0,
   "right": 20,
   "click": "this.setComponentVisibility(this.Container_D6015E63_E821_D28C_41EC_7024F3046C63, false, 0, null, null, false)",
   "cursor": "hand",
   "width": 34,
   "horizontalAlign": "center",
   "height": 34,
   "id": "IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4",
   "borderRadius": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration"
 },
 {
  "label": "Living-room",
  "thumbnailUrl": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_t.jpg",
  "vfov": 180,
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "hfovMin": 70,
  "hfov": 360,
  "id": "panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "levels": [
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_t.jpg",
    "left": {
     "levels": [
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1296,
       "width": 1296
      },
      {
       "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1024,
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_BC855D8C_B5BF_198E_41E5_11E05DB2CCC5",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 115
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.99,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -27.22,
        "yaw": 76.11
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693, this.camera_C217D656_C97F_4446_41CA_AD2546282FD6); this.setMediaBehaviour(this.playList_C57FC51C_C97F_45CB_41B3_5A81AEACDF94, 0, this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.22,
        "image": {
         "levels": [
          {
           "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 57
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 76.11,
        "hfov": 8.99
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_BC852D8C_B5BF_198E_41E0_2C80246630E9",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 75
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.36,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.47,
        "yaw": -104.08
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25, this.camera_C216864C_C97F_444B_41C2_92FB1A7F5F2B); this.setMediaBehaviour(this.playList_C57F151C_C97F_45CB_41D3_BA603511D0F6, 0, this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.47,
        "image": {
         "levels": [
          {
           "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 20,
           "width": 37
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -104.08,
        "hfov": 6.36
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_BC853D8C_B5BF_198E_41D2_B95D96BD9BC2",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 48,
           "width": 97
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.05,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.65,
        "yaw": -85.68
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748, this.camera_C209965F_C97F_4445_41D6_9BEA87EA0B02); this.setMediaBehaviour(this.playList_C57F551D_C97F_45C5_41C9_8C448EC678F8, 0, this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.65,
        "image": {
         "levels": [
          {
           "url": "media/panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 24,
           "width": 48
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -85.68,
        "hfov": 8.05
       }
      ]
     }
    ]
   }
  ],
  "pitch": 0,
  "adjacentPanoramas": [
   {
    "backwardYaw": 164.06,
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": -104.08,
    "panorama": {
     "label": "to-corridor",
     "thumbnailUrl": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_t.jpg",
     "vfov": 180,
     "hfovMax": 120,
     "class": "Panorama",
     "partial": false,
     "hfovMin": 70,
     "hfov": 360,
     "id": "panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25",
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "right": {
        "levels": [
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_r_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_r.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_b_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_b.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_u_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_u.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_f_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_f.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_d_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_d.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_t.jpg",
       "left": {
        "levels": [
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_l_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_l.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_C29D0691_DFAF_57D5_41EB_9738D2E56C17",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_0_HS_1_0.png",
              "class": "ImageResourceLevel",
              "height": 127,
              "width": 185
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.32,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -28.69,
           "yaw": 100.26
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748, this.camera_C2053686_C97F_44C6_41E8_FCDEC0B753E9); this.setMediaBehaviour(this.playList_C57F551D_C97F_45C5_41C9_8C448EC678F8, 0, this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -28.69,
           "image": {
            "levels": [
             {
              "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 63,
              "width": 92
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 100.26,
           "hfov": 14.32
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_C10177D1_DFAD_5552_41CE_1A44B300B26B",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_0_HS_0_0.png",
              "class": "ImageResourceLevel",
              "height": 102,
              "width": 176
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 13,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -32.97,
           "yaw": -10.68
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB, this.camera_C20FC673_C97F_445E_41B7_E32C8E3CA046); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -32.97,
           "image": {
            "levels": [
             {
              "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 51,
              "width": 88
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -10.68,
           "hfov": 13
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_C12525B8_DFA7_F5D2_41DA_2F989B89C1C5",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_0_HS_2_0.png",
              "class": "ImageResourceLevel",
              "height": 73,
              "width": 173
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 13.94,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -24.19,
           "yaw": 164.06
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A, this.camera_C202867C_C97F_444B_4198_4D3D5985E51F); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -24.19,
           "image": {
            "levels": [
             {
              "url": "media/panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 36,
              "width": 86
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 164.06,
           "hfov": 13.94
          }
         ]
        }
       ]
      }
     ],
     "pitch": 0,
     "adjacentPanoramas": [
      {
       "backwardYaw": 88.36,
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -10.68,
       "panorama": {
        "label": "guest-bathroom",
        "thumbnailUrl": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_t.jpg",
        "vfov": 180,
        "hfovMax": 131,
        "class": "Panorama",
        "partial": false,
        "hfovMin": 69,
        "hfov": 360,
        "id": "panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB",
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "right": {
           "levels": [
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_r_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_r.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_b_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_b.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_u_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_u.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_f_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_f.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_d_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_d.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_t.jpg",
          "left": {
           "levels": [
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_l_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_l.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_B3C468B5_B9F1_5B97_41C3_1328CDDF19DA",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_0_HS_0_0.png",
                 "class": "ImageResourceLevel",
                 "height": 118,
                 "width": 277
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 17.81,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -43,
              "yaw": 88.36
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25, this.camera_C535C610_C97F_47DB_41D5_31B6E5CBFD3B); this.setMediaBehaviour(this.playList_C57F151C_C97F_45CB_41D3_BA603511D0F6, 0, this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -43,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 59,
                 "width": 138
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 88.36,
              "hfov": 17.81
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_B3C478B5_B9F1_5B97_41B5_6169939261AF",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_0_HS_1_0.png",
                 "class": "ImageResourceLevel",
                 "height": 86,
                 "width": 190
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 13.64,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -35.39,
              "yaw": -123.6
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07, this.camera_C529F619_C97F_47CD_41A2_7BAE7103FA9D); this.setMediaBehaviour(this.playList_C570B51D_C97F_45C5_41D6_7E3D8785C446, 0, this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -35.39,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 43,
                 "width": 95
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -123.6,
              "hfov": 13.64
             }
            ]
           }
          ]
         }
        ],
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "backwardYaw": -10.68,
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": 88.36,
          "panorama": "this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25"
         },
         {
          "backwardYaw": 65.56,
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -123.6,
          "panorama": {
           "label": "entrance",
           "thumbnailUrl": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_t.jpg",
           "vfov": 180,
           "hfovMax": 120,
           "class": "Panorama",
           "partial": false,
           "hfovMin": 70,
           "hfov": 360,
           "id": "panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07",
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "right": {
              "levels": [
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_r_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_r.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "back": {
              "levels": [
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_b_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_b.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_u_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_u.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_f_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_f.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_d_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_d.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_t.jpg",
             "left": {
              "levels": [
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_l_hq.jpeg",
                "class": "ImageResourceLevel",
                "height": 1296,
                "width": 1296
               },
               {
                "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_l.jpeg",
                "class": "ImageResourceLevel",
                "height": 1024,
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_C220A64B_C973_DC61_41C9_3E579E36392D",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_0_HS_2_0.png",
                    "class": "ImageResourceLevel",
                    "height": 84,
                    "width": 191
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 13.56,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -36.22,
                 "yaw": 65.56
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB, this.camera_C55A359E_C97F_44C7_41E5_FE0156624DA5); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -36.22,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 42,
                    "width": 95
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 65.56,
                 "hfov": 13.56
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_C220B64B_C973_DC61_41CE_F27D76773C30",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_0_HS_0_0.png",
                    "class": "ImageResourceLevel",
                    "height": 100,
                    "width": 114
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 9.17,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -24.43,
                 "yaw": 96.31
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA, this.camera_C55065B1_C97F_44DA_41E6_AB93B6B1C4CC); this.setMediaBehaviour(this.playList_C5728525_C97F_45C5_41E8_020CB7C22C9D, 0, this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -24.43,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 50,
                    "width": 57
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 96.31,
                 "hfov": 9.17
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_C220864B_C973_DC61_41E4_333E1F63434E",
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_0_HS_3_0.png",
                    "class": "ImageResourceLevel",
                    "height": 114,
                    "width": 198
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 14.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -33.73,
                 "yaw": -135.18
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8, this.camera_C55E95A7_C97F_44C5_41B2_F89474C961EA); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -33.73,
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel",
                    "height": 57,
                    "width": 99
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -135.18,
                 "hfov": 14.5
                }
               ]
              }
             ]
            }
           ],
           "pitch": 0,
           "adjacentPanoramas": [
            {
             "backwardYaw": -123.6,
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 65.56,
             "panorama": "this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB"
            },
            {
             "backwardYaw": -170.6,
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": -135.18,
             "panorama": {
              "label": "kitchen",
              "thumbnailUrl": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_t.jpg",
              "vfov": 180,
              "hfovMax": 125,
              "class": "Panorama",
              "partial": false,
              "hfovMin": 70,
              "hfov": 360,
              "id": "panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8",
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_r_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_r.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_b_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_b.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_u_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_u.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_f_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_f.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_d_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_d.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_t.jpg",
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_l_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_l.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_B9B220B6_B5CB_079A_41CC_A052D5B49856",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_0_HS_0_0.png",
                       "class": "ImageResourceLevel",
                       "height": 110,
                       "width": 125
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 9.44,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -31.13,
                    "yaw": -170.6
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07, this.camera_C56E6559_C97F_444D_41B5_A9C349B0D217); this.setMediaBehaviour(this.playList_C570B51D_C97F_45C5_41D6_7E3D8785C446, 0, this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -31.13,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 55,
                       "width": 62
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -170.6,
                    "hfov": 9.44
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_B913A1A6_B5DB_09BA_41E3_4F820B235A60",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_0_HS_1_0.png",
                       "class": "ImageResourceLevel",
                       "height": 43,
                       "width": 84
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 6.87,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -22.42,
                    "yaw": 170.58
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0, this.camera_C561856E_C97F_4446_41AD_5A303705F6A6); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -22.42,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 21,
                       "width": 42
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 170.58,
                    "hfov": 6.87
                   }
                  ]
                 }
                ]
               }
              ],
              "pitch": 0,
              "adjacentPanoramas": [
               {
                "backwardYaw": -135.18,
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": -170.6,
                "panorama": "this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07"
               },
               {
                "backwardYaw": 169.31,
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": 170.58,
                "panorama": {
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_r_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_r.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_b_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_b.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_u_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_u.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_f_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_f.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_d_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_d.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_t.jpg",
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_l_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_l.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_B8D0A716_B5D9_0A9A_41D9_968A9900E30D",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_0_HS_0_0.png",
                          "class": "ImageResourceLevel",
                          "height": 71,
                          "width": 174
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 13.65,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -27.13,
                       "yaw": 169.31
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8, this.camera_C20CF669_C97F_444D_41D3_930F69D7DE8D); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -27.13,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 35,
                          "width": 87
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 169.31,
                       "hfov": 13.65
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_t.jpg",
                 "label": "maid's-room",
                 "partial": false,
                 "hfov": 360,
                 "vfov": 180,
                 "id": "panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0",
                 "hfovMax": 125,
                 "class": "Panorama",
                 "pitch": 0,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 170.58,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": 169.31,
                   "panorama": "this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8"
                  }
                 ]
                }
               }
              ]
             }
            },
            {
             "backwardYaw": -169.81,
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 96.31,
             "panorama": {
              "label": "to-bedrooms",
              "thumbnailUrl": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_t.jpg",
              "vfov": 180,
              "hfovMax": 120,
              "class": "Panorama",
              "partial": false,
              "hfovMin": 70,
              "hfov": 360,
              "id": "panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA",
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_r_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_r.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_b_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_b.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_u_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_u.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_f_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_f.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_d_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_d.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_t.jpg",
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_l_hq.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1296,
                   "width": 1296
                  },
                  {
                   "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_l.jpeg",
                   "class": "ImageResourceLevel",
                   "height": 1024,
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_C11ABBB1_C953_B421_41D4_D497F40D028E",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_1_0.png",
                       "class": "ImageResourceLevel",
                       "height": 102,
                       "width": 138
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 10.63,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -29.15,
                    "yaw": -169.81
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07, this.camera_C53915F3_C97F_445D_41E5_8122200E6581); this.setMediaBehaviour(this.playList_C570B51D_C97F_45C5_41D6_7E3D8785C446, 0, this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -29.15,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 51,
                       "width": 69
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -169.81,
                    "hfov": 10.63
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_C11AABB1_C953_B421_41E3_B9BF4FFD96E0",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_0_0.png",
                       "class": "ImageResourceLevel",
                       "height": 105,
                       "width": 173
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 12.64,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -34,
                    "yaw": 85.15
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879, this.camera_C546A5EA_C97F_444E_41DC_17FA2291E89C); this.setMediaBehaviour(this.playList_C570851D_C97F_45C5_41E5_AF47158F1158, 0, this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -34,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 52,
                       "width": 86
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 85.15,
                    "hfov": 12.64
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_C11A9BB1_C953_B421_41BA_1CFE92AAB8B8",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_2_0.png",
                       "class": "ImageResourceLevel",
                       "height": 69,
                       "width": 115
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 9.31,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -23.9,
                    "yaw": 1.12
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14, this.camera_C542E5E0_C97F_447B_41D0_C8447C020518); this.setMediaBehaviour(this.playList_C5723525_C97F_45C5_41E0_CD534EB892DD, 0, this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -23.9,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 34,
                       "width": 57
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 1.12,
                    "hfov": 9.31
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_C11A8BB1_C953_B421_41AD_8472A7442A44",
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_3_0.png",
                       "class": "ImageResourceLevel",
                       "height": 51,
                       "width": 85
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.12,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -19.5,
                    "yaw": 176.64
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CF7030B3_DF6D_4BD5_41C7_21EF65EAD77B, this.camera_B997CC11_B5C9_FE96_41E2_CAC423D4C761)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -19.5,
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel",
                       "height": 25,
                       "width": 42
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 176.64,
                    "hfov": 7.12
                   }
                  ]
                 }
                ]
               }
              ],
              "pitch": 0,
              "adjacentPanoramas": [
               {
                "backwardYaw": -175.32,
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": 1.12,
                "panorama": {
                 "label": "corridor-to-bedroom-2-3",
                 "thumbnailUrl": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_t.jpg",
                 "vfov": 180,
                 "hfovMax": 120,
                 "class": "Panorama",
                 "partial": false,
                 "hfovMin": 70,
                 "hfov": 360,
                 "id": "panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14",
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_r_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_r.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_b_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_b.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_u_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_u.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_f_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_f.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_d_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_d.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_t.jpg",
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_l_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_l.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_C342454D_C95F_BC61_41D3_CF2667354425",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_0_HS_2_0.png",
                          "class": "ImageResourceLevel",
                          "height": 118,
                          "width": 226
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 16.5,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -34.08,
                       "yaw": 88.29
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9, this.camera_C54BC5CD_C97F_4445_41DF_B880CCB7EF49); this.setMediaBehaviour(this.playList_C570E51D_C97F_45C5_41CD_9D07173B40E8, 0, this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -34.08,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_0_HS_2_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 113
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 88.29,
                       "hfov": 16.5
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_C343B54D_C95F_BC61_41D9_4E0BFAE50E7B",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_0_HS_1_0.png",
                          "class": "ImageResourceLevel",
                          "height": 102,
                          "width": 210
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 15.06,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -35.67,
                       "yaw": 9.58
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E, this.camera_C55705C4_C97F_44BA_41E7_37EE9A99CBCE); this.setMediaBehaviour(this.playList_C570C51E_C97F_45C7_41BF_9C6C5B82F44F, 0, this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -35.67,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 51,
                          "width": 105
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 9.58,
                       "hfov": 15.06
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_C343954D_C95F_BC61_41DB_E3C1905EA089",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_0_HS_0_0.png",
                          "class": "ImageResourceLevel",
                          "height": 63,
                          "width": 83
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.1,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -14.59,
                       "yaw": -175.32
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA, this.camera_C55425BA_C97F_44CF_41D9_28EC941E1EAE); this.setMediaBehaviour(this.playList_C5728525_C97F_45C5_41E8_020CB7C22C9D, 0, this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -14.59,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 31,
                          "width": 41
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -175.32,
                       "hfov": 7.1
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "pitch": 0,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 1.12,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": -175.32,
                   "panorama": "this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA"
                  },
                  {
                   "backwardYaw": -163.95,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": 9.58,
                   "panorama": {
                    "label": "to-bathroom-bedroom3",
                    "thumbnailUrl": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_t.jpg",
                    "vfov": 180,
                    "hfovMax": 120,
                    "class": "Panorama",
                    "partial": false,
                    "hfovMin": 70,
                    "hfov": 360,
                    "id": "panorama_C2F236F2_C973_FC22_41DC_436041CC958E",
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_t.jpg",
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_C2F3D6F2_C973_FC22_41E8_C89B88335A10",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_0_HS_1_0.png",
                             "class": "ImageResourceLevel",
                             "height": 96,
                             "width": 217
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 14.54,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -40.37,
                          "yaw": -163.95
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14, this.camera_C2F286AD_C97F_44CA_41E2_D2AF6A04E612); this.setMediaBehaviour(this.playList_C5723525_C97F_45C5_41E0_CD534EB892DD, 0, this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -40.37,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 48,
                             "width": 108
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -163.95,
                          "hfov": 14.54
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_C2F3C6F2_C973_FC22_41E5_C1A340D75E3D",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 77,
                             "width": 195
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 14.71,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -30.95,
                          "yaw": -4.18
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0, this.camera_C2FE56A3_C97F_44FD_41B3_27FE3FF4B8B3); this.mainPlayList.set('selectedIndex', 4)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -30.95,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C2F236F2_C973_FC22_41DC_436041CC958E_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 38,
                             "width": 97
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -4.18,
                          "hfov": 14.71
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "pitch": 0,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -175.78,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "yaw": -4.18,
                      "panorama": {
                       "label": "bedrooms3",
                       "thumbnailUrl": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_t.jpg",
                       "vfov": 180,
                       "hfovMax": 130,
                       "class": "Panorama",
                       "partial": false,
                       "hfovMin": 75,
                       "hfov": 360,
                       "id": "panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0",
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_t.jpg",
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_BCAEFD7D_B634_9B3C_41E3_22F8F50C214C",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 92,
                                "width": 182
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 14.01,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -29.17,
                             "yaw": -175.78
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E, this.camera_C52D6623_C97F_47FD_41C6_A2EF7ACA3F9F); this.setMediaBehaviour(this.playList_C570C51E_C97F_45C7_41BF_9C6C5B82F44F, 0, this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -29.17,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 46,
                                "width": 91
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -175.78,
                             "hfov": 14.01
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "pitch": 0,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -4.18,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "yaw": -175.78,
                         "panorama": "this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E"
                        }
                       ]
                      }
                     },
                     {
                      "backwardYaw": 9.58,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "yaw": -163.95,
                      "panorama": "this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14"
                     }
                    ]
                   }
                  },
                  {
                   "backwardYaw": -172.46,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": 88.29,
                   "panorama": {
                    "label": "to-bathroom-bedrooms2",
                    "thumbnailUrl": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_t.jpg",
                    "vfov": 180,
                    "hfovMax": 120,
                    "class": "Panorama",
                    "partial": false,
                    "hfovMin": 70,
                    "hfov": 360,
                    "id": "panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9",
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_t.jpg",
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_C03DC92F_C973_4DC6_41D0_5ACD8B85F62D",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_0_HS_1_0.png",
                             "class": "ImageResourceLevel",
                             "height": 108,
                             "width": 226
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 15.08,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -40.82,
                          "yaw": -172.46
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14, this.camera_C53D25FD_C97F_444A_41E5_09A7890D829A); this.setMediaBehaviour(this.playList_C5723525_C97F_45C5_41E0_CD534EB892DD, 0, this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -40.82,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 54,
                             "width": 113
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -172.46,
                          "hfov": 15.08
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_C03DE92F_C973_4DC6_4193_A0A08659982C",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 55,
                             "width": 140
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 11.22,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -24.7,
                          "yaw": -14.47
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3, this.camera_C531C606_C97F_47C7_41E7_8D8C55AE94A3); this.mainPlayList.set('selectedIndex', 3)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -24.7,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 27,
                             "width": 70
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -14.47,
                          "hfov": 11.22
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "pitch": 0,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 88.29,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "yaw": -172.46,
                      "panorama": "this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14"
                     },
                     {
                      "backwardYaw": 168.99,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "yaw": -14.47,
                      "panorama": {
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_r_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_r.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_b_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_b.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_u_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_u.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_f_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_f.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_d_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_d.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_t.jpg",
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_l_hq.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1296,
                            "width": 1296
                           },
                           {
                            "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_l.jpeg",
                            "class": "ImageResourceLevel",
                            "height": 1024,
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_C5AB09C1_C97F_D461_41C0_6B2C6DB41E5E",
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_0_HS_0_0.png",
                                "class": "ImageResourceLevel",
                                "height": 77,
                                "width": 154
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 11.87,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -28.89,
                             "yaw": 168.99
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9, this.camera_C54E75D7_C97F_4446_41E5_87CE17DB63D3); this.setMediaBehaviour(this.playList_C570E51D_C97F_45C5_41CD_9D07173B40E8, 0, this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3)"
                            }
                           ],
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -28.89,
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel",
                                "height": 38,
                                "width": 77
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 168.99,
                             "hfov": 11.87
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_t.jpg",
                       "label": "bedrooms2",
                       "partial": false,
                       "hfov": 360,
                       "vfov": 180,
                       "id": "panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3",
                       "hfovMax": 125,
                       "class": "Panorama",
                       "pitch": 0,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -14.47,
                         "class": "AdjacentPanorama",
                         "distance": 1,
                         "yaw": 168.99,
                         "panorama": "this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9"
                        }
                       ]
                      }
                     }
                    ]
                   }
                  }
                 ]
                }
               },
               {
                "backwardYaw": 96.43,
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": 85.15,
                "panorama": {
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_r_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_r.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_b_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_b.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_u_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_u.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_f_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_f.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_d_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_d.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_t.jpg",
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_l_hq.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1296,
                      "width": 1296
                     },
                     {
                      "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_l.jpeg",
                      "class": "ImageResourceLevel",
                      "height": 1024,
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_C0CB8C6D_C96F_AC26_41E4_72884A993C71",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_0_HS_1_0.png",
                          "class": "ImageResourceLevel",
                          "height": 96,
                          "width": 144
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 11.57,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -24.61,
                       "yaw": -92.37
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E, this.camera_C5678591_C97F_44DA_41D5_CDEE971C4474); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -24.61,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 48,
                          "width": 72
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -92.37,
                       "hfov": 11.57
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_C0CB9C6D_C96F_AC26_41D7_C01827689139",
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_0_HS_0_0.png",
                          "class": "ImageResourceLevel",
                          "height": 106,
                          "width": 217
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 14.16,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -42.36,
                       "yaw": 96.43
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA, this.camera_C5648582_C97F_44BE_41DE_55FCE6CEBDE2); this.setMediaBehaviour(this.playList_C5728525_C97F_45C5_41E8_020CB7C22C9D, 0, this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879)"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -42.36,
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel",
                          "height": 53,
                          "width": 108
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 96.43,
                       "hfov": 14.16
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_t.jpg",
                 "label": "to-bathroom-bedrooms1",
                 "partial": false,
                 "hfov": 360,
                 "vfov": 180,
                 "id": "panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879",
                 "hfovMax": 120,
                 "class": "Panorama",
                 "pitch": 0,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 85.15,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": 96.43,
                   "panorama": "this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA"
                  },
                  {
                   "backwardYaw": 173.96,
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": -92.37,
                   "panorama": {
                    "label": "bedrooms1",
                    "thumbnailUrl": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_t.jpg",
                    "vfov": 180,
                    "hfovMax": 120,
                    "class": "Panorama",
                    "partial": false,
                    "hfovMin": 70,
                    "hfov": 360,
                    "id": "panorama_C53B0690_C973_DCFE_41D6_994137632F3E",
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_r_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_r.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_b_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_b.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_u_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_u.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_f_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_f.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_d_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_d.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_t.jpg",
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_l_hq.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1296,
                         "width": 1296
                        },
                        {
                         "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_l.jpeg",
                         "class": "ImageResourceLevel",
                         "height": 1024,
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_C538F691_C973_DCFE_41C0_F4B5D542FB8E",
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_0_HS_0_0.png",
                             "class": "ImageResourceLevel",
                             "height": 94,
                             "width": 120
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 9.33,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -28.61,
                          "yaw": 173.96
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879, this.camera_C2F8368F_C97F_44C5_41C9_19BCCE92C28B); this.setMediaBehaviour(this.playList_C570851D_C97F_45C5_41E5_AF47158F1158, 0, this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E)"
                         }
                        ],
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -28.61,
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_C53B0690_C973_DCFE_41D6_994137632F3E_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel",
                             "height": 47,
                             "width": 60
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 173.96,
                          "hfov": 9.33
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "pitch": 0,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -92.37,
                      "class": "AdjacentPanorama",
                      "distance": 1,
                      "yaw": 173.96,
                      "panorama": "this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879"
                     }
                    ]
                   }
                  }
                 ]
                }
               },
               {
                "backwardYaw": 96.31,
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": -169.81,
                "panorama": "this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07"
               }
              ]
             }
            }
           ]
          }
         }
        ]
       }
      },
      {
       "backwardYaw": -104.08,
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": 164.06,
       "panorama": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A"
      },
      {
       "backwardYaw": -170.68,
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": 100.26,
       "panorama": {
        "label": "dining-to-corridor",
        "thumbnailUrl": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_t.jpg",
        "vfov": 180,
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "hfovMin": 70,
        "hfov": 360,
        "id": "panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748",
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "right": {
           "levels": [
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_r_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_r.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "back": {
           "levels": [
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_b_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_b.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_u_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_u.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_f_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_f.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_d_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_d.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_t.jpg",
          "left": {
           "levels": [
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_l_hq.jpeg",
             "class": "ImageResourceLevel",
             "height": 1296,
             "width": 1296
            },
            {
             "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_l.jpeg",
             "class": "ImageResourceLevel",
             "height": 1024,
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_BC13A9EE_B5C9_198A_41E0_963CF44A86B1",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_0_HS_1_0.png",
                 "class": "ImageResourceLevel",
                 "height": 111,
                 "width": 182
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 14.33,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -26.73,
              "yaw": -170.68
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25, this.camera_C2F516B6_C97F_44C7_41D4_430F02CDAC48); this.setMediaBehaviour(this.playList_C57F151C_C97F_45CB_41D3_BA603511D0F6, 0, this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -26.73,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 55,
                 "width": 91
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -170.68,
              "hfov": 14.33
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_BC13C9EE_B5C9_198A_41C2_C4D26957DF92",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_0_HS_0_0.png",
                 "class": "ImageResourceLevel",
                 "height": 78,
                 "width": 107
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 8.93,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.9,
              "yaw": 111.57
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A, this.camera_C2E816C0_C97F_44BB_41C8_63C77966645C); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -18.9,
              "image": {
               "levels": [
                {
                 "url": "media/panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel",
                 "height": 39,
                 "width": 53
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 111.57,
              "hfov": 8.93
             }
            ]
           }
          ]
         }
        ],
        "pitch": 0,
        "adjacentPanoramas": [
         {
          "backwardYaw": 100.26,
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -170.68,
          "panorama": "this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25"
         },
         {
          "backwardYaw": -85.68,
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": 111.57,
          "panorama": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A"
         }
        ]
       }
      }
     ]
    }
   },
   {
    "backwardYaw": -96.58,
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": 76.11,
    "panorama": {
     "label": "Living-room-to-balcony",
     "thumbnailUrl": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_t.jpg",
     "vfov": 180,
     "hfovMax": 120,
     "class": "Panorama",
     "partial": false,
     "hfovMin": 70,
     "hfov": 360,
     "id": "panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693",
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "right": {
        "levels": [
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_r_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_r.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "back": {
        "levels": [
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_b_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_b.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_u_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_u.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_f_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_f.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_d_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_d.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_t.jpg",
       "left": {
        "levels": [
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_l_hq.jpeg",
          "class": "ImageResourceLevel",
          "height": 1296,
          "width": 1296
         },
         {
          "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_l.jpeg",
          "class": "ImageResourceLevel",
          "height": 1024,
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_BEAB14F3_B5C9_0F9A_419C_E78D231BEDBA",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_0_HS_0_0.png",
              "class": "ImageResourceLevel",
              "height": 79,
              "width": 132
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 10.73,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -22.83,
           "yaw": -96.58
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A, this.camera_C2FCB699_C97F_44CA_41CB_43743AB9BB8A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -22.83,
           "image": {
            "levels": [
             {
              "url": "media/panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel",
              "height": 39,
              "width": 66
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -96.58,
           "hfov": 10.73
          }
         ]
        }
       ]
      }
     ],
     "pitch": 0,
     "adjacentPanoramas": [
      {
       "backwardYaw": 76.11,
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -96.58,
       "panorama": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A"
      }
     ]
    }
   },
   {
    "backwardYaw": 111.57,
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": -85.68,
    "panorama": "this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748"
   }
  ]
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -6.54,
   "yaw": 63.79,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 "this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0,
   "hfov": 108
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 "this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C53B0690_C973_DCFE_41D6_994137632F3E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.98,
   "yaw": 70,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 "this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -9.37,
   "yaw": 78.97
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 "this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -7.62,
   "yaw": 19.24,
   "hfov": 120
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "label": "Photo Album",
  "thumbnailUrl": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_t.png",
  "id": "album_E682300A_DF9D_CAB7_41E5_42674421FBDB",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_E682300A_DF9D_CAB7_41E5_42674421FBDB_AlbumPlayList",
   "items": [
    {
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "label": "Reyhan_Balcony 3",
      "duration": 5000,
      "thumbnailUrl": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_0_t.jpg",
      "width": 3000,
      "height": 1688,
      "id": "album_E682300A_DF9D_CAB7_41E5_42674421FBDB_0",
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_to_width",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "label": "Reyhan_Exterior 1 - dusk REVISED 16-9",
      "duration": 5000,
      "thumbnailUrl": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_1_t.jpg",
      "width": 2400,
      "height": 1351,
      "id": "album_E682300A_DF9D_CAB7_41E5_42674421FBDB_1",
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_to_width",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "levels": [
        {
         "url": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "label": "Reyhan_Exterior 2 - day REVISED 16-9",
      "duration": 5000,
      "thumbnailUrl": "media/album_E682300A_DF9D_CAB7_41E5_42674421FBDB_2_t.jpg",
      "width": 3000,
      "height": 1688,
      "id": "album_E682300A_DF9D_CAB7_41E5_42674421FBDB_2",
      "class": "Photo"
     },
     "camera": {
      "scaleMode": "fit_to_width",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem"
    }
   ]
  },
  "class": "PhotoAlbum"
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonNext": {
   "transparencyActive": true,
   "paddingRight": 0,
   "top": "45.14%",
   "maxHeight": 50,
   "maxWidth": 50,
   "borderSize": 0,
   "class": "IconButton",
   "paddingLeft": 0,
   "bottom": "44.86%",
   "paddingTop": 0,
   "verticalAlign": "middle",
   "pressedIconURL": "skin/IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66_pressed.png",
   "minHeight": 40,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66.png",
   "mode": "push",
   "shadow": false,
   "minWidth": 40,
   "rollOverIconURL": "skin/IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66_rollover.png",
   "backgroundOpacity": 0,
   "right": "0.91%",
   "cursor": "hand",
   "width": 150,
   "horizontalAlign": "center",
   "id": "IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66",
   "borderRadius": 0
  },
  "buttonPrevious": {
   "transparencyActive": true,
   "paddingRight": 0,
   "top": "45%",
   "class": "IconButton",
   "maxWidth": 50,
   "borderSize": 0,
   "bottom": "45%",
   "paddingLeft": 0,
   "maxHeight": 50,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "pressedIconURL": "skin/IconButton_D6016E63_E821_D28C_41E7_021622EF28CB_pressed.png",
   "minHeight": 40,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_D6016E63_E821_D28C_41E7_021622EF28CB.png",
   "mode": "push",
   "shadow": false,
   "minWidth": 40,
   "rollOverIconURL": "skin/IconButton_D6016E63_E821_D28C_41E7_021622EF28CB_rollover.png",
   "cursor": "hand",
   "left": "1%",
   "backgroundOpacity": 0,
   "width": 150,
   "horizontalAlign": "center",
   "id": "IconButton_D6016E63_E821_D28C_41E7_021622EF28CB",
   "borderRadius": 0
  },
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4"
 },
 "this.album_E682300A_DF9D_CAB7_41E5_42674421FBDB_0",
 "this.album_E682300A_DF9D_CAB7_41E5_42674421FBDB_1",
 "this.album_E682300A_DF9D_CAB7_41E5_42674421FBDB_2",
 "this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -4.51,
   "yaw": -14.32,
   "hfov": 117
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 "this.panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.86,
   "yaw": 35.08
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "media": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A",
    "camera": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8",
    "camera": "this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E",
    "camera": "this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3",
    "camera": "this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0",
    "camera": "this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.album_E682300A_DF9D_CAB7_41E5_42674421FBDB",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB",
    "camera": "this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0",
    "camera": "this.panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist",
  "items": [
   {
    "media": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A",
    "camera": "this.panorama_BC854D8C_B5BF_198E_41A5_B3D67C5F055A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8",
    "camera": "this.panorama_B9B200B6_B5CB_079A_41D0_A1A7847DCEE8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E",
    "camera": "this.panorama_C53B0690_C973_DCFE_41D6_994137632F3E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3",
    "camera": "this.panorama_C5AB69C1_C97F_D461_41E7_67EFC7EA7CC3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0",
    "camera": "this.panorama_BCAECD7D_B634_9B3C_41D7_C276F28915A0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 4, 5)"
   },
   {
    "media": "this.album_E682300A_DF9D_CAB7_41E5_42674421FBDB",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 5, 6)"
   },
   {
    "media": "this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB",
    "camera": "this.panorama_B3C448B5_B9F1_5B97_41E5_A238D8B84EDB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 6, 7)"
   },
   {
    "media": "this.panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0",
    "camera": "this.panorama_B8B15BF4_B5D9_199E_41BA_E2433C7BC1A0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist, 7, 0)"
   }
  ]
 },
 "this.panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C57FC51C_C97F_45CB_41B3_5A81AEACDF94",
  "items": [
   {
    "media": "this.panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693",
    "camera": "this.panorama_BEAB04F3_B5C9_0F9A_41D6_106658FB3693_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.67,
   "yaw": -1.36,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C57F151C_C97F_45CB_41D3_BA603511D0F6",
  "items": [
   {
    "media": "this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25",
    "camera": "this.panorama_D1CAB521_DF7D_4AF5_41E5_DF12C86F9C25_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.83,
   "yaw": 91.95,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C57F551D_C97F_45C5_41C9_8C448EC678F8",
  "items": [
   {
    "media": "this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748",
    "camera": "this.panorama_BC1399EE_B5C9_198A_41DD_79AEF853E748_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.76,
   "yaw": 43.23,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C570B51D_C97F_45C5_41D6_7E3D8785C446",
  "items": [
   {
    "media": "this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07",
    "camera": "this.panorama_C220E64B_C973_DC61_41E8_9E884D9FFD07_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C570851D_C97F_45C5_41E5_AF47158F1158",
  "items": [
   {
    "media": "this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879",
    "camera": "this.panorama_C0CBBC6C_C96F_AC27_41A3_E17B81F91879_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.71,
   "yaw": -72.68,
   "hfov": 110
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C570E51D_C97F_45C5_41CD_9D07173B40E8",
  "items": [
   {
    "media": "this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9",
    "camera": "this.panorama_C03DD92F_C973_4DC6_41E5_AB53E3BA53D9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C2F236F2_C973_FC22_41DC_436041CC958E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.22,
   "yaw": 0.77,
   "hfov": 110
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C570C51E_C97F_45C7_41BF_9C6C5B82F44F",
  "items": [
   {
    "media": "this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E",
    "camera": "this.panorama_C2F236F2_C973_FC22_41DC_436041CC958E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -19.51,
   "yaw": 53.01,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C5728525_C97F_45C5_41E8_020CB7C22C9D",
  "items": [
   {
    "media": "this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA",
    "camera": "this.panorama_C1154BB0_C953_B43F_41CD_4A266AD4C7EA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1.23,
   "yaw": 79.84,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "playList_C5723525_C97F_45C5_41E0_CD534EB892DD",
  "items": [
   {
    "media": "this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14",
    "camera": "this.panorama_C342654D_C95F_BC61_41E6_F9C9530EAE14_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "scaleMode": "fit_inside",
  "image": {
   "levels": [
    {
     "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4.jpeg",
     "class": "ImageResourceLevel",
     "height": 747,
     "width": 937
    },
    {
     "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_lq.jpeg",
     "class": "ImageResourceLevel",
     "height": 373,
     "width": 468,
     "grayscale": true
    }
   ],
   "class": "ImageResource"
  },
  "label": "floorpla-ivy4",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "overlays": [
   {
    "image": {
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_0.png",
        "class": "ImageResourceLevel",
        "height": 81,
        "width": 102
       }
      ],
      "class": "ImageResource"
     },
     "width": 102.19,
     "height": 81.7,
     "y": 396.32,
     "x": 279.6,
     "class": "HotspotMapOverlayImage"
    },
    "rollOverDisplay": false,
    "id": "overlay_ECA04BED_DFE5_5D72_41BC_B4AD23FBAD1B",
    "useHandCursor": true,
    "class": "AreaHotspotMapOverlay",
    "map": {
     "height": 81.7,
     "y": 396.32,
     "offsetX": 0,
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_0_map.gif",
        "class": "ImageResourceLevel",
        "height": 40,
        "width": 51
       }
      ],
      "class": "ImageResource"
     },
     "width": 102.19,
     "x": 279.6
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.playList_C57FC51C_C97F_45CB_41B3_5A81AEACDF94.set('selectedIndex', 0)"
     }
    ]
   },
   {
    "image": {
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_1.png",
        "class": "ImageResourceLevel",
        "height": 75,
        "width": 76
       }
      ],
      "class": "ImageResource"
     },
     "width": 76.36,
     "height": 75.47,
     "y": 178.12,
     "x": 309.71,
     "class": "HotspotMapOverlayImage"
    },
    "rollOverDisplay": false,
    "id": "overlay_EACF0B8C_DFE5_3DB3_41C0_FF15F0017773",
    "useHandCursor": true,
    "class": "AreaHotspotMapOverlay",
    "map": {
     "height": 75.47,
     "y": 178.12,
     "offsetX": 0,
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_1_map.gif",
        "class": "ImageResourceLevel",
        "height": 37,
        "width": 38
       }
      ],
      "class": "ImageResource"
     },
     "width": 76.36,
     "x": 309.71
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.playList_C57F551D_C97F_45C5_41C9_8C448EC678F8.set('selectedIndex', 0)"
     }
    ]
   },
   {
    "image": {
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_2.png",
        "class": "ImageResourceLevel",
        "height": 94,
        "width": 95
       }
      ],
      "class": "ImageResource"
     },
     "width": 95.95,
     "height": 94.17,
     "y": 99.53,
     "x": 111.33,
     "class": "HotspotMapOverlayImage"
    },
    "rollOverDisplay": false,
    "id": "overlay_EBA4FFDC_DFE4_F553_41E0_3881305F2A57",
    "useHandCursor": true,
    "class": "AreaHotspotMapOverlay",
    "map": {
     "height": 94.17,
     "y": 99.53,
     "offsetX": 0,
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_2_map.gif",
        "class": "ImageResourceLevel",
        "height": 47,
        "width": 47
       }
      ],
      "class": "ImageResource"
     },
     "width": 95.95,
     "x": 111.33
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 1)"
     }
    ]
   },
   {
    "image": {
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_3.png",
        "class": "ImageResourceLevel",
        "height": 95,
        "width": 95
       }
      ],
      "class": "ImageResource"
     },
     "width": 95.95,
     "height": 95.95,
     "y": 232.45,
     "x": 113.33,
     "class": "HotspotMapOverlayImage"
    },
    "rollOverDisplay": false,
    "id": "overlay_EC519B44_DFE3_DEB3_41E8_C5A4EFD02A04",
    "useHandCursor": true,
    "class": "AreaHotspotMapOverlay",
    "map": {
     "height": 95.95,
     "y": 232.45,
     "offsetX": 0,
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_3_map.gif",
        "class": "ImageResourceLevel",
        "height": 47,
        "width": 47
       }
      ],
      "class": "ImageResource"
     },
     "width": 95.95,
     "x": 113.33
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 2)"
     }
    ]
   },
   {
    "image": {
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_4.png",
        "class": "ImageResourceLevel",
        "height": 98,
        "width": 101
       }
      ],
      "class": "ImageResource"
     },
     "width": 101.3,
     "height": 98.63,
     "y": 336.26,
     "x": 93.07,
     "class": "HotspotMapOverlayImage"
    },
    "rollOverDisplay": false,
    "id": "overlay_EAD8F37C_DFE3_4D53_41E1_A6DBB25C3A43",
    "useHandCursor": true,
    "class": "AreaHotspotMapOverlay",
    "map": {
     "height": 98.63,
     "y": 336.26,
     "offsetX": 0,
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_4_map.gif",
        "class": "ImageResourceLevel",
        "height": 49,
        "width": 50
       }
      ],
      "class": "ImageResource"
     },
     "width": 101.3,
     "x": 93.07
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 3)"
     }
    ]
   },
   {
    "image": {
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_5.png",
        "class": "ImageResourceLevel",
        "height": 82,
        "width": 88
       }
      ],
      "class": "ImageResource"
     },
     "width": 88.83,
     "height": 82.59,
     "y": 457.11,
     "x": 191.04,
     "class": "HotspotMapOverlayImage"
    },
    "rollOverDisplay": false,
    "id": "overlay_EBB14A4C_DF9D_5EB3_41C7_0D24EDBB6FE8",
    "useHandCursor": true,
    "class": "AreaHotspotMapOverlay",
    "map": {
     "height": 82.59,
     "y": 457.11,
     "offsetX": 0,
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "image": {
      "levels": [
       {
        "url": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_HS_5_map.gif",
        "class": "ImageResourceLevel",
        "height": 41,
        "width": 44
       }
      ],
      "class": "ImageResource"
     },
     "width": 88.83,
     "x": 191.04
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 4)"
     }
    ]
   }
  ],
  "thumbnailUrl": "media/map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4_t.jpg",
  "fieldOfViewOverlayRadiusScale": 0.3,
  "class": "Map",
  "fieldOfViewOverlayOutsideColor": "#000000",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "initialZoomFactor": 1,
  "maximumZoomFactor": 1.2,
  "height": 747,
  "id": "map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4",
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "width": 937
 },
 {
  "class": "MapPlayer",
  "viewerArea": {
   "toolTipBorderRadius": 3,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "progressBorderColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "top": "0%",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadow": true,
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipShadowVerticalLength": 0,
   "progressBarBorderColor": "#000000",
   "toolTipPaddingLeft": 6,
   "progressOpacity": 1,
   "progressRight": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "paddingBottom": 0,
   "playbackBarHeadShadowColor": "#000000",
   "shadow": false,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressOpacity": 1,
   "height": "100%",
   "toolTipShadowHorizontalLength": 0,
   "id": "ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149",
   "toolTipBorderSize": 1,
   "width": "100%",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "borderRadius": 0,
   "paddingRight": 0,
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "progressLeft": 0,
   "toolTipFontSize": 12,
   "playbackBarHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "progressBorderSize": 0,
   "toolTipPaddingBottom": 4,
   "toolTipOpacity": 1,
   "borderSize": 0,
   "class": "ViewerArea",
   "toolTipShadowOpacity": 1,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipFontColor": "#606060",
   "progressBarBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "paddingTop": 0,
   "playbackBarBorderRadius": 0,
   "minHeight": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadShadowBlurRadius": 3,
   "progressHeight": 10,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarLeft": 0,
   "toolTipFontStyle": "normal",
   "progressBottom": 2,
   "progressBorderRadius": 0,
   "minWidth": 1,
   "progressBackgroundColorRatios": [
    0
   ],
   "progressBarOpacity": 1,
   "right": "0%",
   "playbackBarBottom": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadHeight": 15,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBorderColor": "#767676",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarOpacity": 1,
   "transitionMode": "blending",
   "playbackBarProgressBorderRadius": 0,
   "toolTipFontWeight": "normal"
  },
  "id": "ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149MapPlayer",
  "movementMode": "constrained"
 },
 {
  "class": "PlayList",
  "id": "playList_C573E527_C97F_45C5_41DD_36DD32EF6FF2",
  "items": [
   {
    "media": "this.map_ECA88327_DFE4_CEFE_41E8_08E89D20D1F4",
    "class": "MapPlayListItem",
    "player": "this.ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149MapPlayer",
    "begin": "this.ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149MapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C56E6559_C97F_444D_41B5_A9C349B0D217",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 44.82,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C561856E_C97F_4446_41AD_5A303705F6A6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -10.69
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C5648582_C97F_44BE_41DE_55FCE6CEBDE2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -94.85,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C5678591_C97F_44DA_41D5_CDEE971C4474",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -6.04,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C55A359E_C97F_44C7_41E5_FE0156624DA5",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 56.4,
   "hfov": 117
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C55E95A7_C97F_44C5_41B2_F89474C961EA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 9.4,
   "hfov": 108
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C55065B1_C97F_44DA_41E6_AB93B6B1C4CC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 10.19,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C55425BA_C97F_44CF_41D9_28EC941E1EAE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -178.88,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C55705C4_C97F_44BA_41E7_37EE9A99CBCE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 16.05,
   "hfov": 110
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C54BC5CD_C97F_4445_41DF_B880CCB7EF49",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 7.54,
   "hfov": 110
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C54E75D7_C97F_4446_41E5_87CE17DB63D3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 165.53,
   "hfov": 110
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C542E5E0_C97F_447B_41D0_C8447C020518",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 4.68,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C546A5EA_C97F_444E_41DC_17FA2291E89C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -83.57
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C53915F3_C97F_445D_41E5_8122200E6581",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -83.69,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C53D25FD_C97F_444A_41E5_09A7890D829A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -91.71,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C531C606_C97F_47C7_41E7_8D8C55AE94A3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -11.01
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C535C610_C97F_47DB_41D5_31B6E5CBFD3B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 169.32,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C529F619_C97F_47CD_41A2_7BAE7103FA9D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -114.44,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C52D6623_C97F_47FD_41C6_A2EF7ACA3F9F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 175.82,
   "hfov": 110
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C216864C_C97F_444B_41C2_92FB1A7F5F2B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -15.94,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C217D656_C97F_4446_41CA_AD2546282FD6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 83.42,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C209965F_C97F_4445_41D6_9BEA87EA0B02",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -68.43,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C20CF669_C97F_444D_41D3_930F69D7DE8D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -9.42,
   "hfov": 108
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C20FC673_C97F_445E_41B7_E32C8E3CA046",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -91.64,
   "hfov": 117
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C202867C_C97F_444B_4198_4D3D5985E51F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 75.92,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2053686_C97F_44C6_41E8_FCDEC0B753E9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 9.32,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2F8368F_C97F_44C5_41C9_19BCCE92C28B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 87.63
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2FCB699_C97F_44CA_41CB_43743AB9BB8A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -103.89,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2FE56A3_C97F_44FD_41B3_27FE3FF4B8B3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 4.22,
   "hfov": 120
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2F286AD_C97F_44CA_41E2_D2AF6A04E612",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -170.42,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2F516B6_C97F_44C7_41D4_430F02CDAC48",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -79.74,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_C2E816C0_C97F_44BB_41C8_63C77966645C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 94.32,
   "hfov": 100
  },
  "manualRotationSpeed": 800,
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "top": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingLeft": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "progressRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressOpacity": 1,
  "height": "100%",
  "toolTipShadowHorizontalLength": 0,
  "id": "MainViewer",
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "borderRadius": 0,
  "paddingRight": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "progressLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "progressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 1,
  "borderSize": 0,
  "class": "ViewerArea",
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "playbackBarBorderRadius": 0,
  "minHeight": 50,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "toolTipFontStyle": "normal",
  "progressBottom": 0,
  "progressBorderRadius": 0,
  "minWidth": 100,
  "left": 0,
  "progressBarOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarBottom": 5,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarOpacity": 1,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontWeight": "normal"
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "itemThumbnailShadow": false,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "itemPaddingRight": 3,
    "rollOverItemThumbnailShadow": true,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailHeight": 92,
    "class": "ThumbnailList",
    "itemLabelPosition": "bottom",
    "borderSize": 0,
    "itemMode": "normal",
    "itemHorizontalAlign": "center",
    "itemBackgroundColor": [],
    "itemBackgroundColorRatios": [],
    "scrollBarOpacity": 0.8,
    "paddingLeft": 20,
    "itemLabelFontFamily": "Trebuchet MS",
    "rollOverItemThumbnailShadowBlurRadius": 10,
    "itemPaddingBottom": 3,
    "playList": "this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist",
    "paddingTop": 10,
    "verticalAlign": "top",
    "itemLabelFontWeight": "normal",
    "scrollBarWidth": 7,
    "minHeight": 1,
    "itemLabelGap": 9,
    "rollOverItemThumbnailShadowOpacity": 0.81,
    "itemOpacity": 1,
    "itemLabelFontStyle": "normal",
    "itemThumbnailWidth": 92,
    "paddingBottom": 30,
    "shadow": false,
    "itemLabelFontColor": "#FFFFFF",
    "minWidth": 1,
    "itemBorderRadius": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "itemPaddingTop": 3,
    "itemThumbnailBorderRadius": 50,
    "backgroundOpacity": 0,
    "itemLabelFontSize": 11,
    "itemBackgroundOpacity": 0,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "itemPaddingLeft": 3,
    "itemThumbnailOpacity": 1,
    "scrollBarColor": "#FFFFFF",
    "selectedItemLabelFontWeight": "bold",
    "horizontalAlign": "left",
    "gap": 12,
    "height": "100%",
    "itemVerticalAlign": "middle",
    "id": "ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5",
    "rollOverItemThumbnailShadowHorizontalLength": 0,
    "rollOverItemThumbnailShadowVerticalLength": 0,
    "itemThumbnailScaleMode": "fit_outside",
    "paddingRight": 20
   }
  ],
  "paddingRight": 0,
  "top": 62,
  "backgroundImageUrl": "skin/Container_C8C3C26D_C5C6_524B_4191_0CADA8098322.png",
  "borderSize": 0,
  "class": "Container",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "verticalAlign": "top",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "backgroundOpacity": 0.6,
  "layout": "vertical",
  "right": 0,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "overflow": "hidden",
  "width": 148,
  "horizontalAlign": "center",
  "height": "75%",
  "id": "Container_C8C3C26D_C5C6_524B_4191_0CADA8098322",
  "gap": 10,
  "visible": false,
  "borderRadius": 0
 },
 {
  "contentOpaque": false,
  "paddingRight": 0,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "transparencyActive": true,
      "maxWidth": 42,
      "borderSize": 0,
      "maxHeight": 42,
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "paddingTop": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "minHeight": 1,
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_D3B00ABA_C64E_32CE_41D5_3C77C7155614.png",
      "shadow": false,
      "minWidth": 1,
      "rollOverIconURL": "skin/IconButton_D3B00ABA_C64E_32CE_41D5_3C77C7155614_rollover.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_D6015E63_E821_D28C_41EC_7024F3046C63, true, 0, null, null, false); this.setComponentVisibility(this.Container_D601AE62_E821_D28D_41E7_52DE3E12ED20, true, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_D601BE63_E821_D28C_41CD_D51B2573333F, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_D6016E63_E821_D28C_41E7_021622EF28CB, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4, true, 0, null, null, false)",
      "cursor": "hand",
      "width": 59,
      "horizontalAlign": "center",
      "height": 42,
      "id": "IconButton_D3B00ABA_C64E_32CE_41D5_3C77C7155614",
      "visible": false,
      "borderRadius": 0
     },
     {
      "transparencyActive": true,
      "maxWidth": 42,
      "borderSize": 0,
      "maxHeight": 42,
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "paddingTop": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "pressedIconURL": "skin/IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B_pressed.png",
      "minHeight": 1,
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B.png",
      "shadow": false,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "cursor": "hand",
      "width": 46,
      "horizontalAlign": "center",
      "height": 42,
      "id": "IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B",
      "visible": false,
      "borderRadius": 0
     },
     {
      "transparencyActive": true,
      "maxWidth": 42,
      "borderSize": 0,
      "maxHeight": 42,
      "paddingLeft": 0,
      "paddingRight": 0,
      "class": "IconButton",
      "paddingTop": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "minHeight": 1,
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_D3B02ABA_C64E_32CE_41BF_8C690A1FDBEC.png",
      "shadow": false,
      "minWidth": 1,
      "rollOverIconURL": "skin/IconButton_D3B02ABA_C64E_32CE_41BF_8C690A1FDBEC_rollover.png",
      "backgroundOpacity": 0,
      "click": "this.setComponentVisibility(this.Container_A96FA41C_E823_F6B4_41E2_4B24E4513BDA, true, 0, null, null, false)",
      "cursor": "hand",
      "width": 52,
      "horizontalAlign": "center",
      "height": 42,
      "id": "IconButton_D3B02ABA_C64E_32CE_41BF_8C690A1FDBEC",
      "borderRadius": 0
     }
    ],
    "paddingRight": 0,
    "top": "0%",
    "borderSize": 0,
    "class": "Container",
    "paddingLeft": 14,
    "scrollBarMargin": 2,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "verticalAlign": "middle",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "shadow": false,
    "minWidth": 1,
    "left": "0%",
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "horizontalAlign": "left",
    "height": "100%",
    "id": "Container_D3B14ABB_C64E_32CE_41E7_1B01EC891E9F",
    "width": "85.956%",
    "gap": 16,
    "borderRadius": 0
   },
   {
    "paddingRight": 0,
    "top": "30.07%",
    "maxHeight": 35,
    "maxWidth": 216,
    "borderSize": 0,
    "class": "Image",
    "paddingLeft": 0,
    "bottom": "24.29%",
    "paddingTop": 0,
    "minHeight": 1,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "shadow": false,
    "minWidth": 1,
    "click": "var newWindow = window.open(\"http://www.spectapp.com/\", \"_blank\"); newWindow.focus()",
    "backgroundOpacity": 0,
    "right": "1.66%",
    "cursor": "hand",
    "horizontalAlign": "center",
    "id": "Image_D5BF8DB7_DFD3_E363_41DD_6EFD0F833826",
    "width": "11.201%",
    "url": "skin/Image_D5BF8DB7_DFD3_E363_41DD_6EFD0F833826.png",
    "borderRadius": 0
   }
  ],
  "borderSize": 0,
  "bottom": "0%",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "paddingTop": 0,
  "verticalAlign": "top",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "left": "0%",
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "horizontalAlign": "left",
  "height": 70,
  "id": "Container_D0731EA7_C64E_72C7_41CD_63A5860BC494",
  "width": "100%",
  "gap": 10,
  "borderRadius": 0,
  "scrollBarMargin": 2
 },
 {
  "contentOpaque": false,
  "paddingRight": 0,
  "children": [
   {
    "contentOpaque": false,
    "paddingRight": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "borderSize": 0,
      "class": "HTMLText",
      "paddingLeft": 20,
      "scrollBarOpacity": 0.31,
      "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:26px;\"><B>TITLE</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:16px;\"><B><I>SUBTITLE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\"><B>____________________________________</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in pretium augue. Quisque mollis, leo a vestibulum sodales, nunc est auctor massa, eget tempor nunc sem sit amet felis. Duis eget mi ac augue dapibus feugiat id vitae lacus. Phasellus congue justo vitae quam rutrum dictum. Donec auctor, risus nec sodales ullamcorper, dui neque dignissim quam, ac imperdiet ligula est non enim. Morbi eleifend, enim eu ullamcorper vestibulum, orci nisl convallis libero, cursus dictum dui mi at tortor. Ut euismod nunc id lectus mollis tristique. Duis lacinia pellentesque urna, at dictum velit.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">Aliquam egestas magna porta, lacinia nisl eu, interdum neque. Etiam porta urna nec massa egestas euismod. Sed at lectus leo. Nulla blandit purus ut arcu feugiat, non varius tortor varius. Mauris a sem leo. Nulla eleifend mattis tincidunt. Nullam laoreet, arcu sit amet efficitur luctus, augue libero convallis odio, a pharetra est tellus id tortor. Nunc tincidunt, mauris in posuere pretium, velit velit blandit ipsum, vel tempus eros nisl nec sem. Phasellus placerat ex sed enim pharetra, eu venenatis enim convallis. Morbi dolor urna, semper vitae fermentum in, egestas in enim. Sed id egestas ligula. Sed quis laoreet nulla. Curabitur finibus risus quis velit bibendum mattis. Mauris lacinia, purus eu fermentum tristique, nunc est semper nisi, consectetur varius justo velit nec lorem. Ut aliquam vehicula sapien. Fusce metus libero, placerat vel ultrices quis, dictum et neque.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;\">In posuere pretium, velit velit blandit ipsum, vel tempus eros nisl nec sem. Phasellus placerat ex sed enim pharetra, eu venenatis enim convallis. Morbi dolor urna, semper vitae fermentum in, egestas in enim. Sed id egestas ligula. Sed quis laoreet nulla. Curabitur finibus risus quis velit bibendum mattis. Mauris lacinia, purus eu fermentum.</SPAN></SPAN></DIV></div>",
      "paddingTop": 20,
      "minHeight": 1,
      "scrollBarWidth": 5,
      "paddingBottom": 20,
      "shadow": false,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "width": 298,
      "height": "104.52%",
      "id": "HTMLText_2B5A1184_3B5E_334E_41AE_D15498841AA2",
      "borderRadius": 0,
      "paddingRight": 20
     }
    ],
    "backgroundImageUrl": "skin/Container_C85DB8A8_C646_5EC9_41DD_E95E2F1A887D.png",
    "borderSize": 0,
    "class": "Container",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "verticalAlign": "top",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "shadow": false,
    "minWidth": 1,
    "backgroundOpacity": 0.6,
    "layout": "vertical",
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#000000",
    "overflow": "hidden",
    "horizontalAlign": "center",
    "height": "93.699%",
    "id": "Container_C85DB8A8_C646_5EC9_41DD_E95E2F1A887D",
    "width": "100%",
    "gap": 10,
    "visible": false,
    "borderRadius": 0,
    "scrollBarMargin": 2
   }
  ],
  "top": 10,
  "borderSize": 0,
  "class": "Container",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "verticalAlign": "top",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "layout": "vertical",
  "right": 150,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "width": 300,
  "horizontalAlign": "center",
  "height": "80%",
  "id": "Container_C7A98B29_E822_B29C_41E3_F2040B820269",
  "gap": 2,
  "borderRadius": 0,
  "scrollBarMargin": 2
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "children": [
     {
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "progressBorderColor": "#000000",
      "toolTipBackgroundColor": "#F6F6F6",
      "top": "-0.01%",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "paddingLeft": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadow": true,
      "toolTipShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipShadowVerticalLength": 0,
      "progressBarBorderColor": "#000000",
      "toolTipPaddingLeft": 6,
      "progressOpacity": 1,
      "progressRight": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderSize": 0,
      "paddingBottom": 0,
      "playbackBarHeadShadowColor": "#000000",
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressOpacity": 1,
      "height": "100.008%",
      "toolTipShadowHorizontalLength": 0,
      "id": "ViewerAreaLabeled_D601BE63_E821_D28C_41CD_D51B2573333F",
      "toolTipBorderSize": 1,
      "width": "100.002%",
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowVerticalLength": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "progressLeft": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBorderRadius": 0,
      "toolTipFontSize": 12,
      "playbackBarHeight": 10,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "progressBorderSize": 0,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "borderSize": 0,
      "class": "ViewerArea",
      "toolTipShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipFontColor": "#606060",
      "progressBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "playbackBarBorderRadius": 0,
      "minHeight": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressHeight": 10,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "toolTipFontStyle": "normal",
      "progressBottom": 2,
      "progressBorderRadius": 0,
      "minWidth": 1,
      "left": "-0.01%",
      "progressBarOpacity": 1,
      "playbackBarHeadHeight": 15,
      "playbackBarBottom": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarOpacity": 1,
      "transitionMode": "blending",
      "playbackBarProgressBorderRadius": 0,
      "toolTipFontWeight": "normal"
     },
     "this.IconButton_D6018E63_E821_D28C_41DE_0744C90E8B66",
     "this.IconButton_D6016E63_E821_D28C_41E7_021622EF28CB",
     "this.IconButton_D6017E63_E821_D28C_41EC_75A1EC6A29B4"
    ],
    "gap": 10,
    "paddingRight": 0,
    "top": "12%",
    "borderSize": 0,
    "bottom": "12%",
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "paddingTop": 0,
    "minHeight": 1,
    "verticalAlign": "top",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "minWidth": 1,
    "left": "16%",
    "layout": "absolute",
    "right": "16%",
    "backgroundOpacity": 1,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "horizontalAlign": "left",
    "id": "Container_D601AE62_E821_D28D_41E7_52DE3E12ED20",
    "scrollBarColor": "#000000",
    "borderRadius": 0
   }
  ],
  "height": "100%",
  "gap": 10,
  "paddingRight": 0,
  "top": "0%",
  "borderSize": 0,
  "class": "Container",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "top",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "minWidth": 1,
  "left": "0%",
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.8,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "overflow": "scroll",
  "horizontalAlign": "left",
  "id": "Container_D6015E63_E821_D28C_41EC_7024F3046C63",
  "width": "100%",
  "scrollBarColor": "#000000",
  "visible": false,
  "borderRadius": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "contentOpaque": false,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "children": [
     "this.ViewerAreaLabeled_A96F941C_E823_F6B4_41E6_06D09415B149",
     {
      "transparencyActive": true,
      "top": 0,
      "class": "IconButton",
      "maxWidth": 40,
      "borderSize": 0,
      "paddingLeft": 0,
      "paddingRight": 0,
      "maxHeight": 40,
      "paddingTop": 0,
      "verticalAlign": "middle",
      "minHeight": 1,
      "mode": "push",
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_A96FB41C_E823_F6B4_41E2_30570EC870F5.png",
      "shadow": false,
      "minWidth": 1,
      "rollOverIconURL": "skin/IconButton_A96FB41C_E823_F6B4_41E2_30570EC870F5_rollover.png",
      "backgroundOpacity": 0,
      "right": 0,
      "click": "this.setComponentVisibility(this.Container_A96FA41C_E823_F6B4_41E2_4B24E4513BDA, false, 0, null, null, false)",
      "cursor": "hand",
      "width": 60,
      "horizontalAlign": "center",
      "height": 60,
      "id": "IconButton_A96FB41C_E823_F6B4_41E2_30570EC870F5",
      "borderRadius": 0
     }
    ],
    "gap": 10,
    "paddingRight": 30,
    "top": "12%",
    "borderSize": 0,
    "bottom": "12%",
    "scrollBarMargin": 2,
    "paddingLeft": 30,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "paddingTop": 30,
    "minHeight": 1,
    "verticalAlign": "top",
    "scrollBarWidth": 10,
    "paddingBottom": 30,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "minWidth": 1,
    "left": "15%",
    "layout": "absolute",
    "right": "15%",
    "backgroundOpacity": 1,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "horizontalAlign": "left",
    "id": "Container_A96FE41C_E823_F6B4_41DC_B884E8354116",
    "scrollBarColor": "#000000",
    "borderRadius": 0
   }
  ],
  "height": "100%",
  "gap": 10,
  "paddingRight": 0,
  "top": "0%",
  "borderSize": 0,
  "class": "Container",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "minHeight": 1,
  "verticalAlign": "top",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "minWidth": 1,
  "left": "0%",
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.7,
  "backgroundColor": [
   "#000000"
  ],
  "overflow": "scroll",
  "horizontalAlign": "left",
  "id": "Container_A96FA41C_E823_F6B4_41E2_4B24E4513BDA",
  "width": "100%",
  "scrollBarColor": "#000000",
  "visible": false,
  "borderRadius": 0
 },
 {
  "transparencyActive": true,
  "top": "1.61%",
  "maxWidth": 52,
  "borderSize": 0,
  "maxHeight": 42,
  "paddingLeft": 0,
  "paddingRight": 0,
  "class": "IconButton",
  "paddingTop": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "pressedIconURL": "skin/IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84_pressed.png",
  "mode": "toggle",
  "paddingBottom": 0,
  "iconURL": "skin/IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84.png",
  "shadow": false,
  "minWidth": 1,
  "cursor": "hand",
  "left": "0.39%",
  "backgroundOpacity": 0,
  "width": 53,
  "horizontalAlign": "center",
  "height": 42,
  "id": "IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84",
  "borderRadius": 0
 },
 {
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "top": "0%",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingLeft": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "progressRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressOpacity": 1,
  "height": "30%",
  "toolTipShadowHorizontalLength": 0,
  "id": "MapViewer",
  "toolTipBorderSize": 1,
  "width": "40%",
  "toolTipPaddingTop": 4,
  "visible": false,
  "playbackBarHeadShadowVerticalLength": 0,
  "borderRadius": 0,
  "paddingRight": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "progressLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "progressBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "toolTipOpacity": 1,
  "borderSize": 0,
  "class": "ViewerArea",
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "playbackBarBorderRadius": 0,
  "minHeight": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "toolTipFontStyle": "normal",
  "progressBottom": 2,
  "progressBorderRadius": 0,
  "minWidth": 1,
  "left": "0%",
  "progressBarOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarBottom": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarOpacity": 1,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontWeight": "normal"
 }
], 
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "buttonToggleMute": "this.IconButton_D3B1DABB_C64E_32CE_41DA_72F344875C3B",
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "class": "Player",
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "start": "this.syncPlaylists([this.ThumbnailList_2B8CB5AA_3B66_535A_41BE_189797E97DF5_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_C573E527_C97F_45C5_41DD_36DD32EF6FF2.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84].forEach(function(component) { component.set('visible', false); }) }",
 "paddingTop": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "shadow": false,
 "minWidth": 20,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ components[i].set('visible', visible); } }; if (this.rootPlayer.touchEnabled){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); else htmlText.set('html', ''); }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); if(!endObject) return; } else{ endObject = playListItem.get('media'); } endObject.bind('end', endFunction, this); } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if(media.get('class') == 'Video360' && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama'); else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleFullscreen": "this.IconButton_E448BDA1_E862_B18C_41D0_925802EE7D84"
})