<script setup lang="ts">
import { ref, computed } from "vue";
import { divideTwoNums } from "./functions";

const num1 = ref(6);
const num2 = ref(3);
const ans = computed((): number => {
  return divideTwoNums(num1.value, num2.value);
});

const isVisible = ref(false);
const onShowButtonClick = (): void => {
  isVisible.value = true;
};
</script>

<template>
  <div>
    <h2>計算結果を表示する要素のテスト用</h2>
    <p>
      <input type="number" data-testid="num1" v-model="num1" />
      ÷
      <input type="number" data-testid="num2" v-model="num2" />
      =
      <span data-testid="ans">{{ ans }}</span>
    </p>
  </div>
  <br />
  <div>
    <h2>要素の表示・非表示のテスト用</h2>
    <p>
      隠し領域を<button data-testid="showButton" @click="onShowButtonClick">
        表示
      </button>
      する
    </p>
    <p v-if="isVisible" data-testid="invisible-v-if">
      隠し領域が表示されました
    </p>
    <p v-show="isVisible" data-testid="invisible-v-show">
      隠し領域が表示されました
    </p>
  </div>
</template>
