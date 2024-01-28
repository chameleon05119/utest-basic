import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vueのテスト", () => {
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
