<template>
  <div class="timeline-wrapper">
    <div class="timeline-icon">
      <span :class="icon"></span>
    </div>

    <div class="timeline-out">
      <div class="timeline-item" v-for="(t,i) in timeline" :key="i">
        <h3 class="timeline-title">{{t.title}}</h3>
        <small class="timeline-subtitle">
          <template v-for="(p,i) in t.period">
            <span :key="i" v-if="!isSame(p)">{{ p | moment("MMMM, YYYY")}}</span>
            <span :key="i" v-else>Present</span>
          </template>
          <span class="ml-1">{{t.period | period}}</span>
        </small>
        <p class="timeline-text">{{t.description}}</p>
        <small v-if="hasUniversity(t.description)">UoT: University of Thessaly</small>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from "moment";
export default {
  name: "timeline",
  props: {
    icon: { type: String, required: true },
    timeline: { type: Array, required: true }
  },
  methods: {
    isSame(value) {
      const today = moment();
      return moment(value).isSame(today, "date");
    },
    hasUniversity(value) {
      const university = "UoT";
      value = value.toString();
      return value.indexOf(university) !== -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline-wrapper {
  margin-bottom: 30px;

  .timeline-icon {
    > span {
      background: $primary;
      width: 55px;
      text-align: center;
      padding: 20px 0;
      font-size: 15px;
      color: #fff;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
    }
  }

  .timeline-out {
    padding-left: 25px;

    .timeline-item {
      border-left: 2px solid $gray-300;
      padding: 0 0 40px 30px;
      &:first-child {
        padding-top: 50px;
      }

      &:last-child {
        border: 0;
        padding-bottom: 0;

        > .timeline-title::after {
          margin: 0px 9px 0 -34px;
        }
      }

      &:only-child {
        border-left: 2px solid $gray-300;
        padding-bottom: 0;
        > .timeline-title:after {
          margin: 0px 9px 0 -36px;
        }
      }

      .timeline-title {
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 600;
        &::after {
          content: "";
          width: 10px;
          height: 10px;
          float: left;
          -webkit-border-radius: 50px;
          -moz-border-radius: 50px;
          border-radius: 50px;
          margin: 0px 9px 0 -36px;
          background: $primary;
        }
      }

      .timeline-subtitle {
        font-size: 14px;
        padding: 6px 0;
        display: block;

        span {
          &:first-of-type::after {
            content: " - ";
          }
          &:last-of-type {
            color: $gray-500;
            &::before {
              content: " · ";
            }
          }
        }
      }

      .timeline-text {
        color: $gray-600;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}
</style>