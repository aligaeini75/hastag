    <template>
        <div class="platform-parent">
            <div class="title-section">
                <div class="icons">
                    <img class="image" src="images/filter-remove.svg" />
                    <span>لغو فیلتر</span>
                    
                </div>
                <div class="title">
                    <span class="style1">فیلتر نتایج</span>
                    <span class="style2">انتخاب پلتفرم</span>
                </div>
                
            </div>
            <div class="filter-items">
                <div class="item">
                    <span class="text">همه</span>
                    <v-checkbox
                      label=""
                    ></v-checkbox>
                    
                </div>
                <div class="item">
                    <span class="text">در تلگرام</span>
                    <v-checkbox
                      label=""
                    ></v-checkbox>
                    
                </div>
                <div class="item">
                    <span class="text">در اینستگرام</span>
                    <v-checkbox
                      label=""
                    ></v-checkbox>
                    
                </div>
            </div>
        </div>
    </template>
  
  <script>
  import { defineComponent } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {
      
    }, 
    setup() {
      return { }
    },
  })
  </script>
  <style lang="scss">
  .platform-parent {
    display: flex ;
    flex-direction: column ;
    padding: 8px;
    .title-section {
        width: 70% ;
        height: fit-content ;
        
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        .title {
            display: flex ;
            flex-direction: column;
            text-align: right;
            .style1 {
                font-weight: bold ;
                color: #404040;
            }
            .style2 {
                color: #545454;
                font-size: .8em;
            }
        }
        .icons {
            display: flex ;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            span {
                color: #D85240;
                font-weight: bold;
                font-size: 1.1em;
            }
            svg {
                fill: #D85240;
                
            }
            .image {
                width: 40px;
                height: 40px;
            }

        }
    }
    .filter-items {
        width: 70%  ;
        height: fit-content ;
        border-radius: .5px solid #888888;
        background-color: #F0F0F0;
        border-radius: 8px;
        margin-top: 8px;
        display: flex ;
        flex-direction: column ;
        align-items: flex-end;
        .item {
            display: flex ;
            flex-direction: row ;
            align-items: center;
            justify-content: center;
            height: 50px;
            gap: 8px;
            .text {
                color: #6A6760;
            }
        }

    }
  }
  </style>
  
  