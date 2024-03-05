import { mount, shallowMount } from "@vue/test-utils";
import ProgressCircle from "../../src/components/ProgressCircle.vue";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

global.ResizeObserver = require('resize-observer-polyfill')

describe("ProgressCircle.vue Test", () => {

  it("renders the correct percentage", () => {
    const percentage = 50;
    const wrapper = shallowMount(ProgressCircle, {
      props: { percentage },
      global: {
        plugins: [vuetify],
      },
    });

    const percentageText = wrapper.find(".text-h4");
    expect(percentageText.text()).toBe(`${percentage}%`);
  });

  it("renders the default color if no color prop is provided", () => {
    const wrapper = shallowMount(ProgressCircle, {
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircle = wrapper.findComponent({
      name: "v-progress-circular",
    });
    expect(progressCircle.props("color")).toBe("primary");
  });

  it("renders the provided color", () => {
    const color = "secondary";
    const wrapper = shallowMount(ProgressCircle, {
      props: { color },
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircle = wrapper.findComponent({
      name: "v-progress-circular",
    });
    expect(progressCircle.props("color")).toBe(color);
  });

  it("renders the default size if no size prop is provided", () => {
    const wrapper = shallowMount(ProgressCircle, {
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircle = wrapper.findComponent({
      name: "v-progress-circular",
    });
    expect(progressCircle.props("size")).toBe(65);
  });

  it("renders the provided size", () => {
    const size = 80;
    const wrapper = shallowMount(ProgressCircle, {
      props: { size },
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircle = wrapper.findComponent({
      name: "v-progress-circular",
    });
    expect(progressCircle.props("size")).toBe(size);
  });

  it("renders the default width if no width prop is provided", () => {
    const wrapper = shallowMount(ProgressCircle, {
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircle = wrapper.findComponent({
      name: "v-progress-circular",
    });
    expect(progressCircle.props("width")).toBe(5);
  });

  it("renders the provided width", () => {
    const width = 10;
    const wrapper = shallowMount(ProgressCircle, {
      props: { width },
      global: {
        plugins: [vuetify],
      },
    });

    const progressCircle = wrapper.findComponent({
      name: "v-progress-circular",
    });
    expect(progressCircle.props("width")).toBe(width);
  });

  it("renders the text if provided", () => {
    const text = "Loading...";
    const wrapper = shallowMount(ProgressCircle, {
      props: { text },
      global: {
        plugins: [vuetify],
      },
    });

    const textElement = wrapper.find(".text-body-2");
    expect(textElement.text()).toBe(text);
  });

  it("does not render the text if not provided", () => {
    const wrapper = shallowMount(ProgressCircle, {
      global: {
        plugins: [vuetify],
      },
    });

    const textElement = wrapper.find(".text-body-2");
    expect(textElement.exists()).toBe(false);
  });
});
