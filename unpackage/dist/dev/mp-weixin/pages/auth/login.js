"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      disabled: true,
      show: false,
      tel: "",
      pas: ""
    };
  },
  created() {
  },
  computed: {
    inputStyle() {
      let style = {};
      if (this.tel && this.pas) {
        this.disabled = false;
        style.color = "#fff";
        style.backgroundColor = "#f9ae3d";
      }
      return style;
    }
  },
  methods: {
    reg() {
      common_vendor.index.navigateTo({
        url: "./register"
      });
    },
    submit() {
      for (var i = 0; i < store.state.accounts.length; i++) {
        console.log(store.state.accounts[i].tel);
        if (this.tel == store.state.accounts[i].tel) {
          if (store.state.accounts[i].type == "student") {
            common_vendor.index.switchTab({
              url: "/pages/student/index"
            });
            break;
          } else if (store.state.accounts[i].type == "teacher") {
            common_vendor.index.navigateTo({
              url: "/pages/teacher/index/index"
            });
            break;
          }
        } else {
          console.log("no");
        }
      }
      console.log("\u5FAA\u73AF\u7ED3\u675F");
      common_vendor.index.navigateTo({
        url: "/pages/auth/identity"
      });
    }
  }
};
if (!Array) {
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  _easycom_u_toast2();
}
const _easycom_u_toast = () => "../../uni_modules/vk-uview-ui/components/u-toast/u-toast.js";
if (!Math) {
  _easycom_u_toast();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("uToast", "cbd6070a-0"),
    b: $data.tel,
    c: common_vendor.o(($event) => $data.tel = $event.detail.value),
    d: $data.pas,
    e: common_vendor.o(($event) => $data.pas = $event.detail.value),
    f: $data.disabled,
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    h: common_vendor.s($options.inputStyle),
    i: common_vendor.o((...args) => $options.reg && $options.reg(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cbd6070a"], ["__file", "D:/Programs/LabApp/pages/auth/login.vue"]]);
wx.createPage(MiniProgramPage);
