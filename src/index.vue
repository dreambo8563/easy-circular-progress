<template>
  <div class="vue-circular-progress">
    <div class="circle">
      <svg width="84" height="84" class="circle__svg">
        <circle cx="41" cy="41" :r="radius" class="circle__progress circle__progress--path"></circle>
        <circle
          cx="41"
          cy="41"
          :r="radius"
          :style="fileStyl"
          class="circle__progress circle__progress--fill"
        ></circle>
      </svg>

      <div class="percent">
        <span class="percent__int">{{int}}.</span>
        <span class="percent__dec">{{dec}}</span>
      </div>
    </div>
    <span class="label">Reasonable</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 7.27,
      transitionDuration: 1000,
      radius: 38,
      offset: '',
      int: 0,
      dec: "00"
    }
  },
  computed: {
    circumference() {
      return this.radius * Math.PI * 2
    },
    fileStyl() {
      return {
        strokeDashoffset: this.offset,
        '--initialStroke': this.circumference,
        '--transitionDuration': `${this.transitionDuration}ms`
      }
    }
  },
  methods: {
    increaseNumber(number, className) {

      const interval = this.transitionDuration / number;
      let counter = 0;

      let increaseInterval = setInterval(() => {
        if (counter === number) { window.clearInterval(increaseInterval); }

        this[className] = counter
        counter++;
      }, interval);
    }
  },
  mounted() {
    setTimeout(() => {
      this.offset = this.circumference * (10 - this.number) / 10;
    }, 100);
    this.increaseNumber(7, 'int')
    this.increaseNumber(27, 'dec')
  }
}
</script>
<style lang="scss">
.circle {
  position: relative;
}

.circle__svg {
  transform: rotate(-90deg);
}

.circle__progress {
  fill: none;
  stroke-width: 3;
  stroke-opacity: 0.3;
  stroke-linecap: round;
}

.circle__progress--fill {
  --initialStroke: 0;
  --transitionDuration: 0;
  stroke-opacity: 1;
  stroke-dasharray: var(--initialStroke);
  stroke-dashoffset: var(--initialStroke);
  transition: stroke-dashoffset var(--transitionDuration) ease;
}

.circle__progress {
  stroke: #aaff00;
}
// .note-display:nth-child(2) .circle__progress {
//   stroke: #ff00aa;
// }
// .note-display:nth-child(3) .circle__progress {
//   stroke: #aa00ff;
// }
// .note-display:nth-child(4) .circle__progress {
//   stroke: #00aaff;
// }

.percent {
  width: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  font-weight: bold;
  text-align: center;
  line-height: 28px;
  transform: translate(-50%, -50%);
}

.percent__int {
  font-size: 28px;
}
.percent__dec {
  font-size: 12px;
}

.label {
  font-family: "Raleway", serif;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 15px;
}
</style>
