"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title1: "Management System",
      title2: "\u5B9E\u9A8C\u5BA4\u5668\u6750\u7BA1\u7406\u7CFB\u7EDF"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title1),
    b: common_vendor.t($data.title2)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/Programs/LabApp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
