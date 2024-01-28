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
});
