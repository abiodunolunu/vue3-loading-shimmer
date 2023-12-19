<script setup lang="ts">
import { computed } from "vue";

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
  shimmerColor: "#ffffff",
  duration: 1400,
  direction: "left-to-right",
});

function hexToRgb(hexCode: string) {
  hexCode = hexCode.split("#")[1];

  if (hexCode.length === 3) {
    hexCode = hexCode
      .split("")
      .map((v) => `${v}${v}`)
      .join("");
  }

  const _r = hexCode.slice(0, 2);
  const _g = hexCode.slice(2, 4);
  const _b = hexCode.slice(4, 6);

  const r = parseInt(_r, 16);
  const g = parseInt(_g, 16);
  const b = parseInt(_b, 16);

  return `${r},${g},${b}`;
}

const shimmerGradient = computed(() => {
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
    class="vue3-loading-shimmer"
    :class="`vue3-loading-shimmer__${direction}`"
    :style="{
      '--vue3-loading-shimmer-bg': bgColor,
      '--vue3-loading-shimmer-shimmerBg': shimmerGradient,
      '--vue3-loading-shimmer-duration': animationDuration,
    }"
  ></div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.vue3-loading-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--vue3-loading-shimmer-bg);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: var(--vue3-loading-shimmer-shimmerBg);
    animation-duration: var(--vue3-loading-shimmer-duration);
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &__left-to-right {
    &::before {
      transform: translateX(-100%);
      animation-name: shimmerLeftToRight;
    }
  }

  &__right-to-left {
    &::before {
      transform: translateX(100%);
      animation-name: shimmerRightToLeft;
    }
  }

  &__top-to-bottom {
    &::before {
      transform: translateY(-100%);
      animation-name: shimmerTopToBottom;
    }
  }

  &__bottom-to-top {
    &::before {
      transform: translateY(100%);
      animation-name: shimmerBottomToTop;
    }
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
