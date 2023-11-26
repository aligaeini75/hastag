<template>
    <v-container>
        <div class="secret-media-parent1">
            <div class="secret-media">
                <v-expansion-panels
                 v-model="panel"
                >
                <v-expansion-panel>
                  <v-expansion-panel-header>رسانه های مخفی شده</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="expansion-panel-parent">
                    <div class="expansion-panel">
                        <div class="item">
                            
                            <v-checkbox
                              label=""
                            ></v-checkbox>
                            <span class="text">رسانه های در لیست سیاه</span>
                        
                        </div>
                    </div>
                  </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </div>
            
        </div>

    </v-container>
  </template>
  
  <script>
  import { defineComponent , ref } from '@nuxtjs/composition-api'
  export default defineComponent({
  components : {
    
  }, 
  setup( ) {
    const panel = ref([0, 1])
    const readonly = ref( false )
    return { panel , readonly }
  },
  })
  </script>
  <style lang="scss">
  
  .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.87);
}
.v-expansion-panel-header__icon {
    position: absolute;
    left: 10px;
}
.v-expansion-panel-header {
    font-weight: bold;
}
  .secret-media-parent1 {
    display: flex ;
    flex-direction: row ;
    gap: 8px ;
    padding: 0 !important;
    width: 100%;
    justify-content: flex-end;
    margin-top: 8px;
    .secret-media {
        width: 100% ;
        display: flex ;
        align-self: center;
        margin-left: -10px;
        .expansion-panel-parent {
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            width: 100% ;
            .expansion-panel {
                width: 100% ;
                background-color: #F0F0F0;
                margin-bottom: 16px;
                padding: 8px;
                border-radius: 8px;
                width: 90%;
                margin-left: 36px;
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
  </style>
  
  