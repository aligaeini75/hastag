<template>
  <v-container rtl>
    <v-row>
      <v-col>
        <v-treeview :items="items">
          <template v-slot:prepend="{ item }">
            <input type="checkbox" name="checkbox-checked" checked style="margin-top: 12px;margin-left: 8px;" />
          </template>
        </v-treeview>
        <!-- <v-treeview
          v-model="selection"
          :items="items"
          :selection-type="selectionType"
          selectable
          return-object
          open-all
        ></v-treeview> -->
      </v-col>
      <v-divider vertical></v-divider>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent , ref } from '@nuxtjs/composition-api'
export default defineComponent({
components : {
  
}, 
setup( ) {
    const selectionType = ref('leaf')
    const selection = ref([])
    const items = ref([
        {
          id: 1,
          name: 'در تلگرام',
          children: [
            { id: 2, name: 'دانشگاه دولتی' },
            { id: 3, name: 'دانشگاه ازاد' },
            {
              id: 4,
              name: 'پکیچ',
              children: [
                { id: 5, name: 'بازدیدی' },
                { id: 6, name: 'دانشگاهی' },
              ],
            },
          ],
        }
      ])
  return { selectionType , selection , items }
},
})
</script>
<style lang="scss">
.container {
    direction: rtl;
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
}
          
              

</style>

