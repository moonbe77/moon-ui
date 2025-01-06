import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useState as i } from "react";
const p = ({
  children: s,
  onClick: o,
  variant: n = "primary"
}) => /* @__PURE__ */ e("button", { className: `px-4 py-2 rounded font-medium ${n === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`, onClick: o, children: s }), m = ({ menuItems: s, logo: o }) => {
  const [n, c] = i(!1);
  return /* @__PURE__ */ l("nav", { className: "bg-white border-b shadow-md", children: [
    /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ l("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e("a", { href: "/", className: "text-xl font-bold text-blue-600", children: o || "Logo" }) }),
      /* @__PURE__ */ e("div", { className: "hidden md:flex space-x-4", children: s.map(
        (a, r) => a.dropdownItems ? /* @__PURE__ */ l("div", { className: "relative group", children: [
          /* @__PURE__ */ l("button", { className: "text-gray-700 hover:text-blue-600 font-medium", children: [
            a.label,
            /* @__PURE__ */ e("span", { className: "absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full" })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity", children: a.dropdownItems.map((t, d) => /* @__PURE__ */ e(
            "a",
            {
              href: t.href,
              className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
              children: t.label
            },
            d
          )) })
        ] }, r) : /* @__PURE__ */ l(
          "a",
          {
            href: a.href,
            className: "relative group pb-1 text-gray-700 hover:text-blue-600",
            children: [
              a.label,
              /* @__PURE__ */ e("span", { className: "absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full" })
            ]
          },
          r
        )
      ) }),
      /* @__PURE__ */ e("div", { className: "flex md:hidden", children: /* @__PURE__ */ e(
        "button",
        {
          onClick: () => c(!n),
          className: "text-gray-700 hover:text-blue-600 focus:outline-none",
          children: /* @__PURE__ */ e(
            "svg",
            {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ e(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M4 6h16M4 12h16m-7 6h7"
                }
              )
            }
          )
        }
      ) })
    ] }) }),
    n && /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e("div", { className: "space-y-1 px-2 pb-3", children: s.map(
      (a, r) => a.dropdownItems ? /* @__PURE__ */ l("div", { className: "relative", children: [
        /* @__PURE__ */ e("button", { className: "w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100", children: a.label }),
        /* @__PURE__ */ e("div", { className: "pl-4 space-y-1", children: a.dropdownItems.map((t, d) => /* @__PURE__ */ e(
          "a",
          {
            href: t.href,
            className: "block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",
            children: t.label
          },
          d
        )) })
      ] }, r) : /* @__PURE__ */ e(
        "a",
        {
          href: a.href,
          className: "block px-3 py-2 text-gray-700 hover:bg-gray-100",
          children: a.label
        },
        r
      )
    ) }) })
  ] });
};
export {
  p as Button,
  m as TopNavbar
};
