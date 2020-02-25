import Vue from "vue";
import * as moment from "moment";

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("moment", function(value, format = "LL") {
  if (!value) return "";
  value = value.toString();
  return moment(value).format(format);
});

Vue.filter("period", function(value) {
  if (!value) return "";
  const minDate = moment(value[0], "YYYY-MM-DD");
  const maxDate = moment(value[1], "YYYY-MM-DD");
  const months = maxDate.diff(minDate, "months", true);
  const totalMonths = Math.ceil(months);
  if (totalMonths > 12) {
    const months = totalMonths % 12;
    const years = Math.floor(totalMonths / 12);
    if (years > 0 && months > 0) return `${years} y ${months} mos`;
    else return `${years} y`;
  } else {
    return `${totalMonths} mos`;
  }
});

Vue.filter("website", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.replace(/(^\w+:|^)\/\//, "");
});
