<template>
  <div class="container">
    <SlickList
      class="row"
      v-model="items"
      axis="xy"
      :transitionDuration="0"
      :useDragHandle="true"
    >
        <SlickItem class="col-4" v-for="(item, index) in items" :index="index" :key="index">
            <div v-handle class="handle">Move</div>
            <div class="item d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-between">
                <div>0</div>
                <div>0</div>
              </div>
              <div class="text-center">{{ item }}</div>
              <div class="text-center">00000000</div>
            </div>
        </SlickItem>
      </SlickList>
      {{ items }}
  </div>
</template>

<script>
import { SlickList, SlickItem, HandleDirective } from 'vue-slicksort'

export default {
  directives: { handle: HandleDirective },
  data () {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9']
    }
  },
  components: {
    SlickItem,
    SlickList
  }
}
</script>
<style>
  .item {
    border: solid 1px red;
    width: 200px;
    height: 200px;
    padding: 5px;
    margin: 0 0 10px;
  }

  .handle{
    cursor: move;
  }

</style>
