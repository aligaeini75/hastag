<template>
    <div class="category-parent">
        <div class="search-box">
            <v-text-field
                solo
                style="direction: rtl;"
                label="جستجو"
                prepend-inner-icon="mdi-magnify"
                reverse
            ></v-text-field>
        </div>
        <div class="hr-parent">
            <div class="hr"></div>
        </div>
        <v-container>
            <div class="category-parent-expand">
                <div class="secret-media">
                    <v-expansion-panels
                     v-model="panel"
                    >
                    <v-expansion-panel >
                      <v-expansion-panel-header>دسته بندی کانال ها</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <div class="expansion-panel-parent">
                            <div class="expansion-panel">
                                <div class="item">

                                    <v-checkbox
                                      label=""
                                    ></v-checkbox>
                                    <span class="text">اخبار فناوری</span>
                                
                                </div>
                            </div>
                      </div>
                      <div class="expansion-panel-parent">
                            <div class="expansion-panel">
                                <div class="item">

                                    <v-checkbox
                                      label=""
                                    ></v-checkbox>
                                    <span class="text">اموزش کامپیوتر</span>
                                
                                </div>
                            </div>
                      </div>
                      <div class="expansion-panel-parent">
                            <div class="expansion-panel">
                                <div class="item">

                                    <v-checkbox
                                      label=""
                                    ></v-checkbox>
                                    <span class="text">برنامه نویسی</span>
                                
                                </div>
                            </div>
                      </div>
                      <div class="expansion-panel-parent-column">
                            <div class="expansion-panel">
                                <div class="item">

                                    <v-checkbox
                                      label=""
                                    ></v-checkbox>
                                    <span class="text">دانشگاهی</span>
                                
                                </div>
                            </div>
                            <div class="hr-parent">
                                <div class="hr"></div>
                            </div>
                            <Tree /> 
                      </div>
                      
                      </v-expansion-panel-content>
                    <!--  -->

                    </v-expansion-panel>
                    <!--  -->
                    
                </v-expansion-panels>
                </div>

            </div>

    </v-container>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref ,watch } from '@nuxtjs/composition-api'
  import Tree from '../Filter/components/TreeCategory/index.vue'
  export default defineComponent({
    components : {Tree}, 
    setup() {
        const panel =ref(0)
        const panel2 =ref([0, 1])
        watch( panel , ( value ) => { 
          console.log("value : " , value )
        },
        { immediate: true, deep: true })
      return { panel , panel2 }
    },
  })
  </script>
  <style lang="scss">
  .v-expansion-panel::before {
   box-shadow: none !important;
}
  .category-parent {
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: flex-start;
    width: 400px !important;
    height: 100%;
    align-self: center;
    .search-box {
        width: 90%;
        display: flex ;
        flex-direction: row ;
        align-items: flex-end;
    }
    .hr-parent {
        width: 100%;
        margin-top: -30px;
        display: flex ;
        flex-direction: row ;
        justify-content: center;
        .hr {
          display: flex ;
          width: 90% ;
          height: 1px;
          border-radius: 50% ;
          background-color: #ADADAD;
          align-self: center;
          margin-top: 32px;
    }
  }
  .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none !important;
}
.v-expansion-panel-header__icon {
    position: absolute;
    left: 30px;
}
.v-expansion-panel-header {
    font-weight: bold;
}
  .category-parent-expand {
    display: flex ;
    flex-direction: row ;
    gap: 8px ;
    width: 100%;
    justify-content: center;
    margin-top: 8px;
    .secret-media {
        width: 100% ;
        display: flex ;
        align-self: center;
        .expansion-panel-parent {
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            width: 100% ;
            .expansion-panel {
                width: 100% ;
                background-color: #F0F0F0;
                margin-bottom: 16px;
                // padding: 8px;
                border-radius: 8px;
                .item {
                    display: flex ;
                    flex-direction: row ;
                    align-items: center;
                    justify-content: flex-start;
                    height: 50px;
                    gap: 8px;
                    .text {
                        color: #6A6760;
                    }
                }
            }
        }
        .expansion-panel-parent-column {
            display: flex ;
            flex-direction: column ;
            justify-content: center ;
            align-items: center;
            width: 100% ;
            background-color: #F0F0F0;
            .expansion-panel {
                width: 100% ;
                background-color: #F0F0F0;
                margin-bottom: 16px;
                // padding: 8px;
                border-radius: 8px;
                .item {
                    display: flex ;
                    flex-direction: row ;
                    align-items: center;
                    justify-content: flex-start;
                    height: 50px;
                    gap: 8px;
                    .text {
                        color: #6A6760;
                    }
                }
            }
        }
    }
  }
  }
  </style>
  
  