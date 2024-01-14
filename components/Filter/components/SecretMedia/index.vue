<template>
  <v-container>
    <div class="secret-media-parent">
      <div class="secret-media">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel>
            <v-expansion-panel-header
              style="
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #404040;
              "
              >رسانه های مخفی شده</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div class="expansion-panel-parent">
                <div class="expansion-panel">
                  <div class="item">
                    <input type="checkbox" name="checkbox-checked1" checked />
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
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {},
  setup() {
    const panel = ref([0, 1]);
    const readonly = ref(false);
    return { panel, readonly };
  },
});
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
.secret-media-parent {
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
  margin-top: 8px;
  .secret-media {
    width: 100%;
    display: flex;
    align-self: center;
    margin-left: -10px;
    .expansion-panel-parent {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      .expansion-panel {
        width: 100%;
        background-color: #f0f0f0;
        margin-bottom: 16px;
        padding: 8px;
        border-radius: 8px;
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          height: 50px;
          gap: 8px;
          // input[type="checkbox"] {
          //   appearance: none;
          //   background-color: #fff;
          //   color: #888888;
          //   margin: 0;
          //   font: inherit;
          //   width: 1.15em;
          //   height: 1.15em;
          //   border: 0.5px solid #888888;
          //   border-radius: 0.15em;
          //   transform: translateY(-0.075em);
          //   border-radius: 5px;
          // }
          .text {
            color: #6a6760;
          }
        }
      }
    }
  }
}
</style>
