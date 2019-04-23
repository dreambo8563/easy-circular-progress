import { shallowMount } from "@vue/test-utils";
import Progress from "@/index.vue";

describe("Progress.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Progress, {
      propsData: { value: 18.77 }
    });
    setTimeout(() => {
      expect(wrapper.vm.$options.data.int).toBe(18);
      expect(wrapper.vm.$options.data.dec).toBe(77);
    }, 1000);
  });
});
