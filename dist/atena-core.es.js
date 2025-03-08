import { createElementBlock as r, openBlock as s, renderSlot as a } from "vue";
const _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, d = {}, u = { class: "meu-botao" };
function f(t, e) {
  return s(), r("button", u, [
    a(t.$slots, "default", {}, void 0, !0)
  ]);
}
const p = /* @__PURE__ */ _(d, [["render", f], ["__scopeId", "data-v-a63050a1"]]);
export {
  p as MeuBotao
};
