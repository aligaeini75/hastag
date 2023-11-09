<template>
    <div class="container">
	<div class="tabs">
		<div class="tabby-tab">
			<input type="radio" id="tab-1" name="tabby-tabs" checked>
			<label for="tab-1"> دسته بندی ها</label>
			<div class="tabby-content">
				<Category />
			</div>
		</div>

		<div class="tabby-tab">
			<input type="radio" id="tab-2" name="tabby-tabs">
			<label for="tab-2">فیلتر نتایج</label>
			<div class="tabby-content">
				<p>page2</p>
			</div>
		</div>
		
	</div>
    </div>

</template>
  
  <script>
  import { defineComponent} from '@nuxtjs/composition-api'
  import Category from './Category/index.vue'
  import './index.scss'
  export default defineComponent({
    components : {
        Category
    } , 
    setup() {
      return { }
    },
  })
  </script>
  
  