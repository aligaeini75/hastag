<template>
    <div class="category-parent">
        <div class="search-box" >
            <v-text-field
                solo
                style="direction: rtl;"
                label="جستجو"
                prepend-inner-icon="mdi-magnify"
                reverse
                id="32"
            ></v-text-field>
        </div>
        <div class="hr-parent-category-top">
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

                                    <input type="checkbox" name="checkbox-checked" checked />
                                    <span class="text">اخبار فناوری</span>
                                
                                </div>
                            </div>
                      </div>
                      <div class="expansion-panel-parent">
                            <div class="expansion-panel">
                                <div class="item">

                                    <input type="checkbox" name="checkbox-checked1" checked />
                                    <span class="text">اموزش کامپیوتر</span>
                                
                                </div>
                            </div>
                      </div>
                      <div class="expansion-panel-parent">
                            <div class="expansion-panel">
                                <div class="item">

                                    <input type="checkbox" name="checkbox-checked2" checked />
                                    <span class="text">برنامه نویسی</span>
                                
                                </div>
                            </div>
                      </div>
                      <div class="expansion-panel-parent-column">
                            <div class="expansion-panel">
                                <div class="item">

                                    <input type="checkbox" name="checkbox-checked3" checked />
                                    <span class="text">دانشگاهی</span>
                                
                                </div>
                            </div>
                            <div class="hr-parent-bottom">
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
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    width: 260px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
  .theme--light.v-divider {
    display: none;
    border-color: rgba(0, 0, 0, 0.12);
}
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
        align-items: center;
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
  .hr-parent-bottom {
        width: 203px ; 
        margin-top: -50px;
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
  .hr-parent-category-top {
        width: 185px;
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
                    margin-right: 16px;
                    input[type="checkbox"] {
                appearance: none;
                background-color: #fff;
                color: #888888;
                margin: 0;
                font: inherit;
                width: 1.15em;
                height: 1.15em;
                border: .5px solid #888888;
                border-radius: 0.15em;
                transform: translateY(-0.075em);
                border-radius: 5px;
            }
                    .text {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 25px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #606060;

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
                    margin-right: 16px;
                    input[type="checkbox"] {
                appearance: none;
                background-color: #fff;
                color: #888888;
                margin: 0;
                font: inherit;
                width: 1.15em;
                height: 1.15em;
                border: .5px solid #888888;
                border-radius: 0.15em;
                transform: translateY(-0.075em);
                border-radius: 5px;
            }
              
                    .text {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 25px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #606060;
                    }
                }
            }
        }
    }
  }
  }
  </style>
  
  