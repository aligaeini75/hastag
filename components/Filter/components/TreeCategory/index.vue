<template>
  <v-container rtl>
    <v-row>
      <v-col>
        <v-treeview
          v-model="selection"
          :items="items"
          :selection-type="selectionType"
          selectable
          return-object
          open-all
        ></v-treeview>
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
}
.v-treeview {
    color: #5A5A5A;
}
.v-treeview-node__label {
    margin-top: 4px;
    color: #5A5A5A;
}

</style>

