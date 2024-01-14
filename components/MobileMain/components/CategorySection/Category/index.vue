<template>
    <div class="category-parent-mobile">
        <div class="search-box">
            <v-text-field
                solo
                style="direction: rtl;"
                label="جستجو"
                prepend-inner-icon="mdi-magnify"
                reverse
                id="32"
            ></v-text-field>
        </div>
        <div class="hr-parent">
            <div class="hr"></div>
        </div>
        <v-container>
            <div class="category-parent-expand1">
                <div class="secret-media1">
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
  import Tree from '../../../../Filter/components/TreeCategory/index.vue'
  import './index.scss'
  export default defineComponent({
    components : {Tree}, 
    setup() {
        const panel =ref(0)
        const panel2 =ref([0, 1])
        watch( panel , ( value ) => { 
         },
        { immediate: true, deep: true })
      return { panel , panel2 }
    },
  })
  </script>
  <style lang="scss">

  </style>
  
  