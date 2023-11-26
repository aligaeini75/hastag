    <template>
        <div class="platform-parent">
            <div class="title-section">
                <div class="icons">
                    
                    <img class="image" src="images/filter-remove.svg" />
                    <span style="margin-top: 4px;">لغو فیلتر</span>
                    <img class="image" style="margin-left: 8px;" src="images/filter-tick2.svg" />
                    
                </div>
                <div class="title">
                    <span class="style1">فیلتر نتایج</span>
                    <span class="style2">انتخاب پلتفرم</span>
                </div>
                
            </div>
            <div class="filter-items">
                <div class="item">
                    <span class="text">همه</span>
                    <input type="checkbox" name="checkbox-checked" checked />
                    
                </div>
                <div class="item">
                    <span class="text">در تلگرام</span>
                    <input type="checkbox" name="checkbox-checked1" checked />
                    
                </div>
                <div class="item">
                    <span class="text">در اینستگرام</span>
                    <input type="checkbox" name="checkbox-checked2" checked />
                    
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
        width: 90% ;
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
                font-size: .8em;
            }
            .style2 {
                color: #545454;
                font-size: .7em;
            }
        }
        .icons {
            display: flex ;
            flex-direction: row;
            align-items: flex-start;
            gap: 8px;
            margin-top: 4px;
            span {
                color: #D85240;
                font-weight: bold;
                font-size: .9em;
            }
            svg {
                fill: #D85240;
                
            }
            .image {
                width: 30px;
                height: 30px;
            }

        }
    }
    .filter-items {
        width: 90%  ;
        height: fit-content ;
        border-radius: .5px solid #888888;
        background-color: #F8F8F8;
        border-radius: 8px;
        margin-top: 8px;
        display: flex ;
        flex-direction: column ;
        align-items: flex-end;
        
        .item {
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
            display: flex ;
            flex-direction: row ;
            align-items: center;
            justify-content: center;
            height: 50px;
            gap: 8px;
            margin-right: 16px;
            
            .text {
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #606060;
                margin-bottom: 4px;

            }
        }

    }
  }
  </style>
  
  