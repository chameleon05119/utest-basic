import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("計算結果を表示する要素のテスト", () => {
  test("初期値での表示内容テスト", () => {
    // App.vueの擬似mount
    const wrapper = mount(App);
    // pタグ要素のレンダリング結果を取り出す
    const actual = wrapper.get(`[data-testid="ans"]`).text();
    const expected = "2";
    expect(actual).toBe(expected);
  });
  test("分子に8を分母に2を指定した場合のテスト", () => {
    async () => {
      const wrapper = mount(App);
      await wrapper.get(`[data-testid="num1"]`).setValue(8);
      await wrapper.get(`[data-testid="num2"]`).setValue(2);
      const actual = wrapper.get(`[data-testid="ans"]`).text();
      const expected = "4";
      expect(actual).toBe(expected);
    };
  });
});

describe("要素の表示・非表示のテスト", () => {
  test("初期状態のテスト(v-if)", () => {
    const wrapper = mount(App);
    const actual = wrapper.find(`[data-testid="invisible-v-if"]`).exists();
    const expected = false;
    expect(actual).toBe(expected);
  });
  test("初期状態のテスト(v-show)", () => {
    const wrapper = mount(App);
    const actual = wrapper.find(`[data-testid="invisible-v-show"]`).isVisible();
    const expected = false;
    expect(actual).toBe(expected);
  });
});
