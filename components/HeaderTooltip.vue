<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showTooltip() {
      this.show = true;
    },
    hideTooltip() {
      this.show = false;
    }
  }
};
</script>
  
<template>
  <button class="flex items-center w-8 p-1 hover:bg-white/20 rounded focus:bg-white justify-center duration-300"
    @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <div v-if="show"
      class="transition-opacity duration-300 ease-in-out tooltip bg-gray-900 absolute left-14 p-2 rounded border border-default text-white text-sm h-6 flex justify-center items-center drop-shadow-xl">
      <p>{{ text }}</p>
    </div>
  </button>
</template>
  