<template>
  <div class="vue-circular-progress">
    <div class="circle">
      <svg :width="circleSize" :height="circleSize" class="circle__svg">
        <circle
          :cx="centralP"
          :cy="centralP"
          :r="radius"
          :style="{ 'stroke-width': strokeWidth, stroke: strokeColor }"
          class="circle__progress circle__progress--path"
        ></circle>
        <circle
          :cx="centralP"
          :cy="centralP"
          :r="radius"
          :style="fileStyl"
          class="circle__progress circle__progress--fill"
        ></circle>
      </svg>

      <div class="percent">
        <slot>
          <span class="percent__int">{{ int }}</span>
          <span class="dot">.</span>
          <span class="percent__dec">{{ dec }}</span>
          <span class="percent_sign">%</span>
        </slot>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: {
    strokeWidth: {
      type: Number,
      default: 4
    },
    radius: {
      type: Number,
      default: 38
    },
    transitionDuration: {
      type: Number,
      default: 1000
    },
    strokeColor: {
      type: String,
      default: "#aaff00"
    },
    value: {
      validator: function(value) {
        // should be a number and less or equal than 100
        return !Number.isNaN(Number(value)) && Number(value) <= 100;
      },
      default: "0.0"
    }
  },
  data() {
    return {
      offset: "",
      int: 0,
      dec: "00"
    };
  },
  computed: {
    circumference() {
      return this.radius * Math.PI * 2;
    },
    fileStyl() {
      return {
        strokeDashoffset: this.offset,
        "--initialStroke": this.circumference,
        "--transitionDuration": `${this.transitionDuration}ms`,
        "stroke-width": this.strokeWidth,
        stroke: this.strokeColor
      };
    },
    circleSize() {
      return (this.radius + this.strokeWidth) * 2;
    },
    centralP() {
      return this.circleSize / 2;
    }
  },
  methods: {
    increaseNumber(number, className) {
      if (number == 0) {
        return;
      }
      const innerNum = parseInt(
        this.findClosestNumber(this.transitionDuration / 10, number)
      );
      let interval = this.transitionDuration / innerNum;

      let counter = 0;
      const handlerName = `${className}Interval`;
      this[handlerName] = setInterval(() => {
        const bitDiff = number.toString().length - innerNum.toString().length;
        if (bitDiff == 0) {
          this[className] = counter;
        } else {
          this[className] = counter * 10 * bitDiff;
        }
        if (counter === innerNum) {
          // back to origin precision
          this[className] = number;
          window.clearInterval(this[handlerName]);
        }
        counter++;
      }, interval);
    },
    findClosestNumber(bound, value) {
      if (value <= bound) {
        return value;
      }
      return this.findClosestNumber(bound, value / 10);
    },
    countNumber(v) {
      this.offset = "";

      this.initTimeoutHandler = setTimeout(() => {
        this.offset = (this.circumference * (100 - v)) / 100;
      }, 100);
      if (this.$slots.default) return;
      let [int, dec] = v.toString().split(".");

      // fallback for NaN
      [int, dec] = [Number(int), Number(dec)];
      this.increaseNumber(int, "int");
      this.increaseNumber(Number.isNaN(dec) ? 0 : dec, "dec");
    },
    clearHandlers() {
      if (this.initTimeoutHandler) {
        clearTimeout(this.initTimeoutHandler);
      }
      if (this.intInterval) {
        clearInterval(this.intInterval);
      }
      if (this.decInterval) {
        clearInterval(this.decInterval);
      }
    }
  },
  watch: {
    value: {
      handler: function(v) {
        const n = Number(v);
        if (Number.isNaN(n) || n == 0) {
          return;
        }
        this.clearHandlers();
        this.countNumber(v);
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.clearHandlers();
  }
};
</script>
<style lang="scss">
@import "index";
</style>
