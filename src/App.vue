<script setup lang="ts">
// import Shimmer from "../dist/vue3-loading-shimmer";
import Shimmer from "./components/Vue3LoadingShimmer.vue";
</script>

<template>
  <div class="page">
    <div class="tweet-grid">
      <div class="tweet" v-for="i in 9" :key="i">
        <Shimmer class="tweet__avatar" />
        <div class="tweet__details">
          <div class="tweet__details-info">
            <Shimmer
              class="tweet__name"
              shimmer-color="#e0d6d3"
              bg-color="#c1ada6"
            />
            <Shimmer
              class="tweet__handle"
              bg-color="#abb9d3"
              shimmer-color="#d5dce9"
            />
            <Shimmer
              class="tweet__time"
              bg-color="#ff99dd"
              shimmer-color="#ffccee"
            >
            </Shimmer>
          </div>
          <Shimmer class="tweet__details-content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  height: 100svh;
}

.tweet-grid {
  min-height: 100svh;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 1rem;
}

.tweet {
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  &__avatar {
    height: 44px;
    width: 44px;
    border-radius: 50%;
  }

  &__details {
    display: grid;
    gap: 0.75rem;
  }

  &__details-info {
    width: 75%;
    height: 18px;

    display: grid;
    grid-template-columns: 2fr 1fr 0.5fr;
    gap: 0.5rem;

    > div {
      border-radius: 0.25rem;
    }
  }

  &__name {
    height: 100%;
  }

  &__handle {
    height: 100%;
  }

  &__time {
    height: 100%;
  }

  &__details-content {
    height: 8rem;
    border-radius: 0.25rem;
  }
}
</style>
