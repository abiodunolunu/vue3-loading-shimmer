<script setup lang="ts">
import { computed } from "vue";
import { hexToRgb } from "../utils/functions";
interface Props {
  bgColor?: string;
  shimmerColor?: string;
  duration?: number;
  direction?:
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top";
}
const props = withDefaults(defineProps<Props>(), {
  bgColor: "#d3d3d3",
  shimmerColor: "#FFFFFF",
  duration: 1400,
  direction: "left-to-right",
});

const shimmerStyle = computed(() => {
  const rgb = hexToRgb(props.shimmerColor);
  return `linear-gradient(90deg,
            rgba(${rgb}, 0) 0%,
            rgba(${rgb}, 0.1) 20%,
            rgba(${rgb}, 0.3) 40%,
            rgba(${rgb}, 0.5) 60%,
            rgba(${rgb}, 0.3) 80%,
            rgba(${rgb}, 0.1) 100%)`;
});

const animationDuration = computed(() => `${props.duration}ms`);
</script>

<template>
  <div
    class="vue3-loading-shimmer__wrapper"
    :style="{ backgroundColor: bgColor }"
  >
    <div
      :style="{
        backgroundImage: shimmerStyle,
        animationDuration: animationDuration,
      }"
      :class="`vue3-loading-shimmer vue3-loading-shimmer__${direction}`"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.vue3-loading-shimmer__wrapper {
  position: relative;
  overflow: hidden;
}

.vue3-loading-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &__left-to-right {
    transform: translateX(-100%);
    animation-name: shimmerLeftToRight;
  }

  &__right-to-left {
    transform: translateX(100%);
    animation-name: shimmerRightToLeft;
  }

  &__top-to-bottom {
    transform: translateY(-100%);
    animation-name: shimmerTopToBottom;
  }

  &__bottom-to-top {
    transform: translateY(100%);
    animation-name: shimmerBottomToTop;
  }
}

@keyframes shimmerLeftToRight {
  100% {
    transform: translateX(100%);
  }
}

@keyframes shimmerRightToLeft {
  100% {
    transform: translateX(-100%);
  }
}

@keyframes shimmerTopToBottom {
  100% {
    transform: translateY(100%);
  }
}

@keyframes shimmerBottomToTop {
  100% {
    transform: translateY(-100%);
  }
}
</style>
