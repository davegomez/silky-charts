!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(
        exports,
        require('react'),
        require('d3-axis'),
        require('d3-scale'),
        require('d3-selection'),
        require('d3-time-format'),
        require('ramda/src/identity'),
        require('styled-components'),
        require('react-dom'),
        require('d3-shape'),
        require('ramda/src/all'),
        require('ramda/src/compose'),
        require('ramda/src/equals'),
        require('ramda/src/or'),
        require('ramda/src/type'),
        require('ramda/src/complement'),
        require('ramda/src/groupBy'),
        require('ramda/src/prop'),
        require('ramda/src/toPairs'),
        require('ramda/src/apply'),
        require('ramda/src/curry'),
        require('ramda/src/length'),
        require('ramda/src/uniq'),
        require('ramda/src/map'),
        require('ramda/src/max'),
        require('ramda/src/filter'),
        require('ramda/src/sum'),
        require('ramda/src/reduce'),
        require('ramda/src/values'),
        require('ramda/src/always'),
        require('ramda/src/cond'),
        require('ramda/src/T'),
        require('d3-array'),
        require('ramda/src/flatten'),
        require('ramda/src/omit'),
        require('ramda/src/mergeAll'),
        require('ramda/src/splitEvery'),
        require('ramda/src/head'),
        require('ramda/src/last')
      )
    : 'function' == typeof define && define.amd
    ? define([
        'exports',
        'react',
        'd3-axis',
        'd3-scale',
        'd3-selection',
        'd3-time-format',
        'ramda/src/identity',
        'styled-components',
        'react-dom',
        'd3-shape',
        'ramda/src/all',
        'ramda/src/compose',
        'ramda/src/equals',
        'ramda/src/or',
        'ramda/src/type',
        'ramda/src/complement',
        'ramda/src/groupBy',
        'ramda/src/prop',
        'ramda/src/toPairs',
        'ramda/src/apply',
        'ramda/src/curry',
        'ramda/src/length',
        'ramda/src/uniq',
        'ramda/src/map',
        'ramda/src/max',
        'ramda/src/filter',
        'ramda/src/sum',
        'ramda/src/reduce',
        'ramda/src/values',
        'ramda/src/always',
        'ramda/src/cond',
        'ramda/src/T',
        'd3-array',
        'ramda/src/flatten',
        'ramda/src/omit',
        'ramda/src/mergeAll',
        'ramda/src/splitEvery',
        'ramda/src/head',
        'ramda/src/last',
      ], t)
    : t(
        ((e = e || self).silkyCharts = {}),
        e.React,
        e.d3Axis,
        e.d3Scale,
        e.d3Selection,
        e.d3TimeFormat,
        e.identity,
        e.styled,
        e.ReactDOM,
        e.d3Shape,
        e.all,
        e.compose,
        e.equals,
        e.or,
        e.type,
        e.complement,
        e.groupBy,
        e.prop,
        e.toPairs,
        e.apply,
        e.curry,
        e.length,
        e.uniq,
        e.map,
        e.max,
        e.filter,
        e.sum,
        e.reduce,
        e.values,
        e.always,
        e.cond,
        e.T,
        e.d3Array,
        e.flatten,
        e.omit,
        e.mergeAll,
        e.splitEvery,
        e.head,
        e.last
      );
})(this, function(
  e,
  t,
  r,
  n,
  a,
  i,
  o,
  u,
  c,
  l,
  s,
  d,
  f,
  m,
  h,
  v,
  p,
  g,
  y,
  x,
  w,
  b,
  E,
  k,
  C,
  O,
  S,
  L,
  q,
  P,
  M,
  z,
  A,
  B,
  N,
  R,
  T,
  j,
  Y
) {
  'use strict';
  var F = 'default' in t ? t.default : t;
  function X(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function D() {
    return (D =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function V(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      'function' == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          X(e, t, r[t]);
        });
    }
    return e;
  }
  function W(e, t) {
    return (
      t || (t = e.slice(0)),
      Object.freeze(
        Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
      )
    );
  }
  function I(e, t) {
    return (
      (function(e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function(e, t) {
        var r = [],
          n = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, u = e[Symbol.iterator]();
            !(n = (o = u.next()).done) &&
            (r.push(o.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            n || null == u.return || u.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      })(e, t) ||
      (function() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      })()
    );
  }
  function H(e) {
    return (
      (function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = new Array(e.length); t < e.length; t++)
            r[t] = e[t];
          return r;
        }
      })(e) ||
      (function(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(e) ||
      (function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      })()
    );
  }
  function _() {
    var e = W(['']);
    return (
      (_ = function() {
        return e;
      }),
      e
    );
  }
  (o = o && o.hasOwnProperty('default') ? o.default : o),
    (u = u && u.hasOwnProperty('default') ? u.default : u),
    (s = s && s.hasOwnProperty('default') ? s.default : s),
    (d = d && d.hasOwnProperty('default') ? d.default : d),
    (f = f && f.hasOwnProperty('default') ? f.default : f),
    (m = m && m.hasOwnProperty('default') ? m.default : m),
    (h = h && h.hasOwnProperty('default') ? h.default : h),
    (v = v && v.hasOwnProperty('default') ? v.default : v),
    (p = p && p.hasOwnProperty('default') ? p.default : p),
    (g = g && g.hasOwnProperty('default') ? g.default : g),
    (y = y && y.hasOwnProperty('default') ? y.default : y),
    (x = x && x.hasOwnProperty('default') ? x.default : x),
    (w = w && w.hasOwnProperty('default') ? w.default : w),
    (b = b && b.hasOwnProperty('default') ? b.default : b),
    (E = E && E.hasOwnProperty('default') ? E.default : E),
    (k = k && k.hasOwnProperty('default') ? k.default : k),
    (C = C && C.hasOwnProperty('default') ? C.default : C),
    (O = O && O.hasOwnProperty('default') ? O.default : O),
    (S = S && S.hasOwnProperty('default') ? S.default : S),
    (L = L && L.hasOwnProperty('default') ? L.default : L),
    (q = q && q.hasOwnProperty('default') ? q.default : q),
    (P = P && P.hasOwnProperty('default') ? P.default : P),
    (M = M && M.hasOwnProperty('default') ? M.default : M),
    (z = z && z.hasOwnProperty('default') ? z.default : z),
    (B = B && B.hasOwnProperty('default') ? B.default : B),
    (N = N && N.hasOwnProperty('default') ? N.default : N),
    (R = R && R.hasOwnProperty('default') ? R.default : R),
    (T = T && T.hasOwnProperty('default') ? T.default : T),
    (j = j && j.hasOwnProperty('default') ? j.default : j),
    (Y = Y && Y.hasOwnProperty('default') ? Y.default : Y);
  var G = u.g.attrs(function(e) {
      var t = e.axis,
        r = e.position;
      return {
        className: 'axis-'.concat(t),
        transform: r && 'translate('.concat(r.x, ', ').concat(r.y, ')'),
      };
    })(_()),
    J = function(e) {
      var r = e.color,
        n = e.datum,
        a = e.height,
        i = e.onClick,
        o = e.onMouseEnter,
        u = e.onMouseLeave,
        l = e.tooltip,
        s = e.width,
        d = e.x,
        f = e.y,
        m = I(t.useState({ pageX: null, pageY: null, show: !1 }), 2),
        h = m[0],
        v = m[1];
      return F.createElement(
        t.Fragment,
        null,
        F.createElement(Ge, {
          chart: 'bar',
          fillColor: r,
          onClick: i,
          onMouseEnter: function(e) {
            v(function(e) {
              return V({}, e, { show: !0 });
            }),
              o(e);
          },
          onMouseLeave: function(e) {
            v(function(e) {
              return V({}, e, { show: !1 });
            }),
              u(e);
          },
          onMouseMove: function(e) {
            e.persist();
            var t = e.pageX,
              r = e.pageY;
            v(function(e) {
              return V({}, e, { pageX: t, pageY: r });
            });
          },
          position: { x: d, y: f },
          size: { width: s, height: a },
        }),
        l &&
          h.show &&
          c.createPortal(
            F.createElement(
              nt,
              { pageX: h.pageX, pageY: h.pageY },
              F.createElement(ht, D({ color: r }, n))
            ),
            document.body
          )
      );
    },
    K = 'rgb(255, 255, 255)',
    Q = 'rgb(220, 220, 220)',
    U = {
      monteCarlo: [
        'rgb(8,104,172)',
        'rgb(67,162,202)',
        'rgb(123,204,196)',
        'rgb(186,228,188)',
        'rgb(240,249,232)',
      ],
      vividCerise: [
        'rgb(152,0,67)',
        'rgb(221,28,119)',
        'rgb(223,101,176)',
        'rgb(215,181,216)',
        'rgb(241,238,246)',
      ],
      sundown: [
        'rgb(122,1,119)',
        'rgb(197,27,138)',
        'rgb(247,104,161)',
        'rgb(251,180,185)',
        'rgb(254,235,226)',
      ],
      madang: [
        'rgb(0,104,55)',
        'rgb(49,163,84)',
        'rgb(120,198,121)',
        'rgb(194,230,153)',
        'rgb(255,255,204)',
      ],
      curiousBlue: [
        'rgb(37,52,148)',
        'rgb(44,127,184)',
        'rgb(65,182,196)',
        'rgb(161,218,180)',
        'rgb(255,255,204)',
      ],
    },
    Z = { white: K, black: 'rgb(33, 33, 33)', grey: Q, themes: U },
    $ = { top: 40, right: 50, bottom: 50, left: 50 },
    ee = { width: 0, height: 0, isSizeSet: !1 },
    te = 'monteCarlo',
    re = {
      curveBasis: l.curveBasis,
      curveBasisClosed: l.curveBasisClosed,
      curveBasisOpen: l.curveBasisOpen,
      curveBundle: l.curveBundle,
      curveCardinal: l.curveCardinal,
      curveCardinalClosed: l.curveCardinalClosed,
      curveCardinalOpen: l.curveCardinalOpen,
      curveCatmullRom: l.curveCatmullRom,
      curveCatmullRomClosed: l.curveCatmullRomClosed,
      curveCatmullRomOpen: l.curveCatmullRomOpen,
      curveLinear: l.curveLinear,
      curveLinearClosed: l.curveLinearClosed,
      curveMonotoneX: l.curveMonotoneX,
      curveMonotoneY: l.curveMonotoneY,
      curveNatural: l.curveNatural,
      curveStep: l.curveStep,
      curveStepAfter: l.curveStepAfter,
      curveStepBefore: l.curveStepBefore,
    };
  function ne() {
    var e = W(['\n  fill: ', ';\n  stroke: ', ';\n  stroke-width: ', ';\n']);
    return (
      (ne = function() {
        return e;
      }),
      e
    );
  }
  var ae = u.circle.attrs(function(e) {
    return { className: e.chart };
  })(
    ne(),
    K,
    function(e) {
      return e.strokeColor;
    },
    3
  );
  function ie() {
    var e = W(['']);
    return (
      (ie = function() {
        return e;
      }),
      e
    );
  }
  var oe = u.g.attrs({ className: 'dataviz-layer' })(ie()),
    ue = v(isNaN),
    ce = d(ue, Date.parse),
    le = f('String'),
    se = f('Date'),
    de = s(function(e) {
      return m(le(h(e)), se(h(e)));
    }),
    fe = s(ce),
    me = 0,
    he = function(e) {
      return l
        .stack()
        .keys(e)
        .order(l.stackOrderNone)
        .offset(l.stackOffsetNone);
    },
    ve = d(y, p(g('series'))),
    pe = w(function(e, t, r) {
      return function() {
        var n;
        return function() {
          for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
            i[o] = arguments[o];
          var u = e && !n;
          return (
            clearTimeout(n),
            (n = setTimeout(function() {
              (n = null), e || x(r, i);
            }, t)),
            u && x(r, i),
            n
          );
        };
      };
    }),
    ge = pe(!0),
    ye = pe(!1)(100),
    xe = (ge(100),
    function(e, t, n, a, i, o, u) {
      return e
        ? r
            .axisBottom()
            .scale(t)
            .tickSize(n, 0, 0)
            .ticks(o)
            .tickFormat('')
        : r
            .axisLeft()
            .scale(a)
            .tickSize(-i, 0, 0)
            .ticks(u)
            .tickFormat('');
    }),
    we = function(e) {
      return U[e][2];
    },
    be = function(e) {
      return 'rgb('.concat(
        e
          .split(/\D/)
          .filter(function(e) {
            return e;
          })
          .map(function(e) {
            var t = parseInt(e) + -20;
            return t > 255 ? (t = 255) : t < 0 && (t = 0), t;
          })
          .join(', '),
        ')'
      );
    },
    Ee = 0,
    ke = function(e) {
      if (!e) return null;
      var t = 'silky-charts_'.concat(e, '-').concat(Ee);
      return (Ee += 1), t;
    },
    Ce = d(b, E, k(g('name'))),
    Oe = function(e) {
      return e.reduce(C, 0);
    },
    Se = function(e, t) {
      var r = t.name,
        n = t.value;
      return (e[r] = e[r] ? [].concat(H(e[r]), [n]) : [n]), e;
    },
    Le = function(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return d(
        k(S),
        q,
        L(Se, {}),
        t.length
          ? O(function(e) {
              var r = e.series;
              return t.includes(r);
            })
          : o
      )(e);
    },
    qe = d(E, k(g('series'))),
    Pe = function(e, t, r, n) {
      var a = r.top,
        i = r.right,
        o = r.bottom,
        u = r.left,
        c = I(n.split(':'), 2),
        l = c[0],
        s = c[1],
        d = e || 640,
        f = t || (d / l) * s;
      return e && t
        ? { width: e - u - i, height: t - a - o }
        : {
            width: (e ? d : (f / s) * l) - u - i,
            height: (t ? f : (d / l) * s) - a - o,
          };
    },
    Me = function(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = t / Ce(e) / 1.8;
      return n
        .scaleTime()
        .domain(
          A.extent(e, function(e) {
            return e.name;
          })
        )
        .rangeRound(r ? [a, t - a] : [0, t]);
    },
    ze = function(e, t) {
      return n
        .scaleBand()
        .domain(
          e.map(function(e) {
            return e.name;
          })
        )
        .range([0, t])
        .padding(0.1);
    },
    Ae = function(e, t) {
      return n
        .scaleLinear()
        .domain([0, e])
        .range([t, 0]);
    },
    Be = function(e, t) {
      var r = t < 0;
      a.selectAll('#'.concat(e, ' .axis-x .tick text'))
        .attr('text-anchor', r ? 'end' : 'start')
        .attr(
          'transform',
          'translate('.concat(r ? -12 : 12, ', 6) rotate(').concat(t, ')')
        );
    },
    Ne = function(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return M([
        [
          f('curveBundle'),
          function() {
            return re[e].beta(t);
          },
        ],
        [
          f('curveCardinalOpen'),
          function() {
            return re[e].tension(t);
          },
        ],
        [
          f('curveCatmullRomOpen'),
          function() {
            return re[e].alpha(t);
          },
        ],
        [
          z,
          function() {
            return re[e];
          },
        ],
      ])(e);
    },
    Re = function(e) {
      var t,
        r = ((t = e.map(function(e) {
          return e.name;
        })),
        de(t) && fe(t));
      return [
        r,
        r
          ? e.map(function(e) {
              return V({}, e, { name: new Date(e.name) });
            })
          : e,
      ];
    };
  d(
    B,
    k(function(e) {
      return d(
        k(function(t) {
          var r = I(t, 2),
            n = r[0],
            a = r[1];
          return { name: e.name, series: n, value: a };
        }),
        y,
        N(['name'])
      )(e);
    })
  );
  var Te = function(e) {
    return d(
      k(R),
      T(qe(e).length),
      k(function(e) {
        return X({ name: e.name }, e.series, e.value);
      })
    )(e);
  };
  function je() {
    var e = W([
      '\n  path {\n    stroke: transparent;\n  }\n\n  line {\n    stroke: ',
      ';\n  }\n',
    ]);
    return (
      (je = function() {
        return e;
      }),
      e
    );
  }
  var Ye = u.g.attrs(function() {
    return { className: 'grid' };
  })(je(), Z.grey);
  function Fe() {
    var e = W(['\n  text-anchor: middle;\n  transform: ', ';\n']);
    return (
      (Fe = function() {
        return e;
      }),
      e
    );
  }
  var Xe = u.text.attrs(function(e) {
      var t = e.axis,
        r = e.margin,
        n = e.width,
        a = e.height;
      return {
        className: ''.concat(t, '-axis-label'),
        x: 'x' === t ? n / 2 : 0 - a / 2,
        y: 'x' === t ? a + r.bottom - 30 : 34 - r.left,
      };
    })(Fe(), function(e) {
      return 'y' === e.axis && 'rotate(-90deg)';
    }),
    De = function(e) {
      var r = e.chart,
        n = e.color,
        a = e.d,
        i = e.data,
        o = e.onClick,
        u = e.onMouseEnter,
        l = e.onMouseLeave,
        s = e.tooltip,
        d = e.xScale,
        f = e.yScale,
        m = I(t.useState({ pageX: null, pageY: null, show: !1 }), 2),
        h = m[0],
        v = m[1];
      return F.createElement(
        t.Fragment,
        null,
        F.createElement(He, {
          chart: r,
          d: a,
          className: 'line-path',
          strokeColor: n,
        }),
        F.createElement(
          'g',
          { className: 'line-dot-group' },
          i.map(function(e, t) {
            var r = e.name,
              a = e.value;
            return F.createElement(ae, {
              key: t,
              chart: 'bar-line',
              strokeColor: n,
              cx: d(r) + d.bandwidth() / 2,
              cy: f(a),
              r: 4,
              onClick: o,
              onMouseEnter: function(e) {
                v(function(e) {
                  return V({}, e, { show: !0 });
                }),
                  u(e);
              },
              onMouseLeave: function(e) {
                v(function(e) {
                  return V({}, e, { show: !1 });
                }),
                  l(e);
              },
              onMouseMove: function(e) {
                e.persist();
                var t = e.pageX,
                  n = e.pageY;
                v(function(e) {
                  return V({}, e, { name: r, pageX: t, pageY: n, value: a });
                });
              },
            });
          })
        ),
        s &&
          h.show &&
          c.createPortal(
            F.createElement(
              nt,
              { pageX: h.pageX, pageY: h.pageY },
              F.createElement(ht, { color: n, name: h.name, value: h.value })
            ),
            document.body
          )
      );
    };
  function Ve() {
    var e = W(['']);
    return (
      (Ve = function() {
        return e;
      }),
      e
    );
  }
  var We = u.g.attrs(function(e) {
    var t = e.margin,
      r = t.left,
      n = t.top;
    return {
      className: 'silky-charts-container',
      transform: 'translate('.concat(r, ', ').concat(n, ')'),
    };
  })(Ve());
  function Ie() {
    var e = W([
      '\n  fill: ',
      ';\n  stroke: ',
      ';\n  stroke-width: ',
      ';\n  pointer-events: ',
      '\n\n  &:hover {\n    fill: ',
      ';\n  }\n',
    ]);
    return (
      (Ie = function() {
        return e;
      }),
      e
    );
  }
  var He = u.path.attrs(function(e) {
    return { className: e.chart };
  })(
    Ie(),
    function(e) {
      return e.fillColor || 'none';
    },
    function(e) {
      return e.strokeColor || 'none';
    },
    3,
    function(e) {
      return 'bar-line' === e.chart && 'none';
    },
    function(e) {
      var t = e.chart,
        r = e.fillColor;
      return 'stacked-area' === t && be(r);
    }
  );
  function _e() {
    var e = W(['\n  fill: ', ';\n\n  &:hover {\n    fill: ', ';\n  }\n']);
    return (
      (_e = function() {
        return e;
      }),
      e
    );
  }
  var Ge = u.rect.attrs(function(e) {
    var t = e.chart,
      r = e.position,
      n = r.x,
      a = r.y,
      i = e.size;
    return { className: t, height: i.height, width: i.width, x: n, y: a };
  })(
    _e(),
    function(e) {
      return e.fillColor;
    },
    function(e) {
      var t = e.fillColor;
      return be(t);
    }
  );
  function Je() {
    var e = W([
      '\n  font-size: 0.8em;\n  font-style: italic;\n  text-anchor: end;\n',
    ]);
    return (
      (Je = function() {
        return e;
      }),
      e
    );
  }
  var Ke = u.text.attrs(function(e) {
      var t = e.height,
        r = e.margin;
      return { className: 'chart-source', x: e.width, y: t + r.bottom - 50 };
    })(Je()),
    Qe = function(e) {
      e.data;
      var t = e.height,
        r = e.onClick,
        n = e.onMouseEnter,
        a = e.onMouseLeave,
        i = e.series,
        o = e.theme,
        u = e.tooltip,
        c = (e.width, e.x),
        l = e.y;
      return i.map(function(e) {
        return F.createElement(
          'g',
          { key: e.index, className: ''.concat(e.key, '-layer') },
          e.map(function(i, s) {
            var d = Y(i) - j(i),
              f = i.data.name;
            return F.createElement(J, {
              key: s,
              color: Z.themes[o][e.index],
              datum: { name: f, value: d },
              height: t - l(d),
              onClick: r,
              onMouseEnter: n,
              onMouseLeave: a,
              tooltip: u,
              width: c.bandwidth(),
              x: c(f),
              y: l(Y(i)),
            });
          })
        );
      });
    };
  function Ue() {
    var e = W(['\n  height: ', 'px;\n  width: ', 'px;\n']);
    return (
      (Ue = function() {
        return e;
      }),
      e
    );
  }
  var Ze = u.svg.attrs(function(e) {
    return { id: e.identifier, className: 'silky-charts' };
  })(
    Ue(),
    function(e) {
      return e.size.height;
    },
    function(e) {
      return e.size.width;
    }
  );
  function $e() {
    var e = W(['\n  font-size: 1.5em;\n  text-anchor: middle;\n']);
    return (
      ($e = function() {
        return e;
      }),
      e
    );
  }
  var et = u.text.attrs(function(e) {
    var t = e.margin;
    return { className: 'chart-title', x: e.width / 2, y: 50 - t.top };
  })($e());
  function tt() {
    var e = W([
      '\n  background-color: ',
      ';\n  border: 1px solid ',
      ';\n  border-radius: 4px;\n  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);\n  padding: 10px;\n  pointer-events: none;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  top: 0;\n  z-index: 10;\n',
    ]);
    return (
      (tt = function() {
        return e;
      }),
      e
    );
  }
  var rt = u.div.attrs(function(e) {
      var t = e.pageX,
        r = e.pageY,
        n = e.width,
        a = e.height;
      return {
        className: 'silky-charts-tooltip',
        style: {
          left: ''.concat(t - n / 2, 'px'),
          top: ''.concat(r - a - 10, 'px'),
        },
      };
    })(tt(), K, Q),
    nt = function(e) {
      var r = t.useRef(),
        n = I(t.useState({ width: 0, height: 0 }), 2),
        a = n[0],
        i = n[1];
      return (
        t.useEffect(function() {
          var e = r.current,
            t = e.offsetWidth,
            n = e.offsetHeight;
          i({ width: t, height: n });
        }, []),
        F.createElement(rt, D({ ref: r }, a, e), e.children)
      );
    };
  function at() {
    var e = W(['\n  font-size: 1.2em;\n']);
    return (
      (at = function() {
        return e;
      }),
      e
    );
  }
  function it() {
    var e = W(['\n  margin-bottom: 4px;\n']);
    return (
      (it = function() {
        return e;
      }),
      e
    );
  }
  function ot() {
    var e = W([
      '\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n',
    ]);
    return (
      (ot = function() {
        return e;
      }),
      e
    );
  }
  function ut() {
    var e = W([
      '\n  background-color: ',
      ';\n  margin-right: 10px;\n  padding: 0 4px;\n',
    ]);
    return (
      (ut = function() {
        return e;
      }),
      e
    );
  }
  function ct() {
    var e = W(['\n  display: flex;\n']);
    return (
      (ct = function() {
        return e;
      }),
      e
    );
  }
  var lt = u.div(ct()),
    st = u.span(ut(), function(e) {
      return e.swatchColor || Q;
    }),
    dt = u.div(ot()),
    ft = u.span(it()),
    mt = u.span(at()),
    ht = function(e) {
      var t = e.color,
        r = e.dateFormat,
        n = void 0 === r ? '%b %d, %Y' : r,
        a = e.name,
        o = e.value,
        u = i.timeFormat(n);
      return F.createElement(
        lt,
        null,
        F.createElement(st, { swatchColor: t }),
        F.createElement(
          dt,
          null,
          F.createElement(ft, null, ce(a) ? u(a) : a),
          F.createElement(mt, null, o)
        )
      );
    };
  (e.Bar = function(e) {
    var u = e.aspectRatio,
      c = void 0 === u ? '16:9' : u,
      l = e.title,
      s = e.data,
      d = e.dateFormat,
      f = void 0 === d ? '%a %d' : d,
      m = e.grid,
      h = e.height,
      v = void 0 === h ? void 0 : h,
      p = e.horizontal,
      g = e.margin,
      y = void 0 === g ? $ : g,
      x = e.onClick,
      w = void 0 === x ? o : x,
      b = e.onMouseEnter,
      E = void 0 === b ? o : b,
      k = e.onMouseLeave,
      C = void 0 === k ? o : k,
      O = e.responsive,
      S = e.theme,
      L = void 0 === S ? te : S,
      q = e.tooltip,
      P = e.sourceLabel,
      M = e.width,
      z = void 0 === M ? void 0 : M,
      A = e.xAxisChartLabel,
      B = e.xAxisLabelRotation,
      N = e.xAxisLabelRotationValue,
      R = void 0 === N ? -50 : N,
      T = e.xAxisTicks,
      j = void 0 === T ? 5 : T,
      Y = e.padding,
      X = void 0 === Y ? 0.1 : Y,
      D = e.yAxisChartLabel,
      W = e.yAxisTicks,
      H = void 0 === W ? 5 : W,
      _ = t.useRef(),
      K = I(t.useState(ke('bar')), 1)[0],
      Q = i.timeFormat(f),
      U = I(t.useState(ee), 2),
      Z = U[0],
      re = Z.width,
      ne = Z.height,
      ae = Z.isSizeSet,
      ie = U[1],
      ue = I(Re(s), 2),
      ce = ue[0],
      le = ue[1],
      se = n
        .scaleBand()
        .domain(
          le.map(function(e) {
            return e.name;
          })
        )
        .range([0, re])
        .padding(X),
      de = n
        .scaleLinear()
        .domain([
          0,
          Oe(
            le.map(function(e) {
              return e.value;
            })
          ),
        ])
        .range([ne, 0]),
      fe = function() {
        var e = _.current.parentElement.offsetWidth;
        (!z && !v) || ae
          ? e !== z - (y.left + y.right) &&
            ie(V({}, Pe(e, void 0, y, c), { isSizeSet: !0 }))
          : ie(V({}, Pe(z, v, y, c), { isSizeSet: !0 }));
      },
      me = ye(fe)();
    return (
      t.useEffect(function() {
        return (
          fe(),
          O && window.addEventListener('resize', me),
          function() {
            O && window.removeEventListener('resize', me);
          }
        );
      }, []),
      F.createElement(
        Ze,
        {
          identifier: K,
          size: {
            width: z || re + y.left + y.right,
            height: v || ne + y.top + y.bottom,
          },
          ref: _,
        },
        F.createElement(
          We,
          { margin: y },
          m &&
            F.createElement(Ye, {
              ref: function(e) {
                return a.select(e).call(xe(p, se, ne, de, re, j, H));
              },
            }),
          l && F.createElement(et, { margin: y, width: re, height: ne }, l),
          A &&
            F.createElement(
              Xe,
              { axis: 'x', margin: y, width: re, height: ne },
              A
            ),
          D &&
            F.createElement(
              Xe,
              { axis: 'y', margin: y, width: re, height: ne },
              D
            ),
          P && F.createElement(Ke, { margin: y, width: re, height: ne }, P),
          F.createElement(
            oe,
            null,
            le.map(function(e, t) {
              var r = e.name,
                n = e.value;
              return F.createElement(J, {
                key: t,
                datum: { name: r, value: n },
                color: we(L),
                x: se(r),
                y: de(n),
                width: se.bandwidth(),
                height: ne - de(n),
                onClick: w,
                onMouseEnter: E,
                onMouseLeave: C,
                tooltip: q,
              });
            })
          ),
          F.createElement(G, {
            axis: 'x',
            position: { x: 0, y: ne },
            ref: function(e) {
              a.select(e).call(
                r
                  .axisBottom(se)
                  .ticks(j)
                  .tickFormat(ce ? Q : null)
              ),
                B && Be(K, R);
            },
          }),
          F.createElement(G, {
            axis: 'y',
            ref: function(e) {
              return a.select(e).call(r.axisLeft(de).ticks(H));
            },
          })
        )
      )
    );
  }),
    (e.BarLine = function(e) {
      var u = e.aspectRatio,
        c = void 0 === u ? '16:9' : u,
        s = e.title,
        d = e.data,
        f = e.dateFormat,
        m = void 0 === f ? '%a %d' : f,
        h = e.grid,
        v = e.height,
        p = void 0 === v ? void 0 : v,
        g = e.horizontal,
        y = e.lineSeries,
        x = void 0 === y ? [] : y,
        w = e.lineType,
        b = void 0 === w ? 'curveLinear' : w,
        E = e.lineTypeOption,
        k = void 0 === E ? null : E,
        C = e.margin,
        O = void 0 === C ? $ : C,
        S = e.onClick,
        L = void 0 === S ? o : S,
        q = e.onMouseEnter,
        P = void 0 === q ? o : q,
        M = e.onMouseLeave,
        z = void 0 === M ? o : M,
        A = e.padding,
        B = void 0 === A ? 0.1 : A,
        N = e.responsive,
        R = e.secondaryTheme,
        T = void 0 === R ? 'vividCerise' : R,
        Y = e.stackedSeries,
        X = void 0 === Y ? [] : Y,
        D = e.theme,
        W = void 0 === D ? te : D,
        H = e.tooltip,
        _ = e.sourceLabel,
        J = e.width,
        K = void 0 === J ? void 0 : J,
        Q = e.xAxisChartLabel,
        U = e.xAxisLabelRotation,
        re = e.xAxisLabelRotationValue,
        ne = void 0 === re ? -50 : re,
        ae = e.xAxisTicks,
        ie = void 0 === ae ? 5 : ae,
        oe = e.yAxisChartLabel,
        ue = e.yAxisTicks,
        ce = void 0 === ue ? 5 : ue,
        le = t.useRef(),
        se = I(t.useState(ke('bar-line')), 1)[0],
        de = i.timeFormat(m),
        fe = I(t.useState(ee), 2),
        me = fe[0],
        ve = me.width,
        pe = me.height,
        ge = me.isSizeSet,
        we = fe[1],
        be = I(Re(d), 2),
        Ee = be[0],
        Ce = be[1],
        Se = he(X)(Te(Ce)),
        qe = n
          .scaleBand()
          .domain(
            Ce.map(function(e) {
              return e.name;
            })
          )
          .range([0, ve])
          .padding(B),
        Me = n
          .scaleLinear()
          .domain([0, Oe(Le(Ce, X))])
          .range([pe, 0]),
        ze = l
          .line()
          .curve(Ne(b, k))
          .x(function(e) {
            var t = e.name;
            return qe(t) + qe.bandwidth() / 2;
          })
          .y(function(e) {
            var t = e.value;
            return Me(t);
          }),
        Ae = (function(e, t) {
          return e.map(function(e) {
            return t.filter(function(t) {
              return t.series === e;
            });
          });
        })(x, Ce),
        je = function() {
          var e = le.current.parentElement.offsetWidth;
          (!K && !p) || ge
            ? e !== K - (O.left + O.right) &&
              we(V({}, Pe(e, void 0, O, c), { isSizeSet: !0 }))
            : we(V({}, Pe(K, p, O, c), { isSizeSet: !0 }));
        },
        Fe = ye(je)();
      return (
        t.useEffect(function() {
          return (
            je(),
            N && window.addEventListener('resize', Fe),
            function() {
              N && window.removeEventListener('resize', Fe);
            }
          );
        }, []),
        F.createElement(
          Ze,
          {
            identifier: se,
            size: {
              width: K || ve + O.left + O.right,
              height: p || pe + O.top + O.bottom,
            },
            ref: le,
          },
          F.createElement(
            We,
            { margin: O },
            h &&
              F.createElement(Ye, {
                ref: function(e) {
                  return a.select(e).call(xe(g, qe, pe, Me, ve, ie, ce));
                },
              }),
            s && F.createElement(et, { margin: O, width: ve }, s),
            Q &&
              F.createElement(
                Xe,
                { axis: 'x', margin: O, width: ve, height: pe },
                Q
              ),
            oe &&
              F.createElement(
                Xe,
                { axis: 'y', margin: O, width: ve, height: pe },
                oe
              ),
            _ && F.createElement(Ke, { margin: O, width: ve, height: pe }, _),
            F.createElement(Qe, {
              data: Ce,
              series: Se,
              theme: W,
              x: qe,
              y: Me,
              width: ve,
              height: pe,
              onClick: L,
              onMouseEnter: P,
              onMouseLeave: z,
              tooltip: H,
            }),
            F.createElement(G, {
              axis: 'x',
              position: { x: 0, y: pe },
              ref: function(e) {
                a.select(e).call(
                  r
                    .axisBottom(qe)
                    .ticks(ie)
                    .tickFormat(Ee ? de : null)
                ),
                  U && Be(se, ne);
              },
            }),
            F.createElement(G, {
              axis: 'y',
              ref: function(e) {
                return a.select(e).call(r.axisLeft(Me).ticks(ce));
              },
            }),
            Ae.map(function(e, t) {
              return F.createElement(
                'g',
                { className: ''.concat(j(e).series, '-layer'), key: t },
                F.createElement(De, {
                  chart: 'bar-line',
                  data: e,
                  color: Z.themes[T][t],
                  d: ze(e),
                  xScale: qe,
                  yScale: Me,
                  onClick: L,
                  onMouseEnter: P,
                  onMouseLeave: z,
                  tooltip: H,
                })
              );
            })
          )
        )
      );
    }),
    (e.StackedArea = function(e) {
      var n = e.aspectRatio,
        i = void 0 === n ? '16:9' : n,
        u = e.data,
        c = e.grid,
        s = e.height,
        d = void 0 === s ? void 0 : s,
        m = e.horizontal,
        h = (e.lineSeries, e.lineType),
        v = void 0 === h ? 'curveLinear' : h,
        p = e.lineTypeOption,
        g = void 0 === p ? null : p,
        y = e.margin,
        x = void 0 === y ? $ : y,
        w = e.onClick,
        b = void 0 === w ? o : w,
        E = e.onMouseEnter,
        k = void 0 === E ? o : E,
        C = e.onMouseLeave,
        O = void 0 === C ? o : C,
        S = e.responsive,
        L = void 0 !== S && S,
        q = e.theme,
        z = void 0 === q ? te : q,
        A = e.ticks,
        B = void 0 === A ? 5 : A,
        N = e.width,
        R = void 0 === N ? void 0 : N,
        T = e.xAxisChartLabel,
        j = e.xAxisLabelRotation,
        Y = e.xAxisLabelRotationValue,
        X = void 0 === Y ? -50 : Y,
        D = e.yAxisChartLabel,
        W = t.useRef(),
        H = I(t.useState(ke('stacked-area')), 1)[0],
        _ = I(t.useState(ee), 2),
        J = _[0],
        K = J.width,
        Q = J.height,
        U = J.isSizeSet,
        re = _[1],
        ne = I(
          t.useMemo(function() {
            return Re(u);
          }, u),
          2
        ),
        ae = ne[0],
        ie = ne[1],
        oe = (function(e, t, r, n) {
          return M([
            [f('time'), P(Me(t, r, n))],
            [f('band'), P(ze(t, r))],
            [o],
          ])(e);
        })(
          ae ? 'time' : 'band',
          (ie = t.useMemo(function() {
            return (function(e, t) {
              return (
                e.forEach(function(e) {
                  t.forEach(function(t) {
                    e.key === t.series &&
                      ((t.stackedValues = e[me]), (me += 1));
                  }),
                    (me = 0);
                }),
                t
              );
            })(he(qe(ie))(Te(ie)), ie);
          }, ie)),
          K
        ),
        ue = (function(e, t, r) {
          return M([[f('linear'), P(Ae(t, r))], [o]])(e);
        })('linear', Oe(Le(ie)), Q),
        ce = l
          .area()
          .curve(Ne(v, g))
          .x(function(e) {
            var t = e.name;
            return oe(t);
          })
          .y0(function(e) {
            var t = e.stackedValues;
            return ue(t[0]);
          })
          .y1(function(e) {
            var t = e.stackedValues;
            return ue(t[1]);
          }),
        le = function() {
          var e = W.current.parentElement.offsetWidth;
          (!R && !d) || U
            ? e !== R - (x.left + x.right) &&
              re(V({}, Pe(e, void 0, x, i), { isSizeSet: !0 }))
            : re(V({}, Pe(R, d, x, i), { isSizeSet: !0 }));
        },
        se = ye(le)();
      return (
        t.useEffect(function() {
          return (
            le(),
            L && window.addEventListener('resize', se),
            function() {
              L && window.removeEventListener('resize', se);
            }
          );
        }, []),
        F.createElement(
          Ze,
          {
            identifier: H,
            size: {
              width: R || K + x.left + x.right,
              height: d || Q + x.top + x.bottom,
            },
            ref: W,
          },
          F.createElement(
            'g',
            {
              className: 'silky-charts-container',
              transform: 'translate('.concat(x.left, ', ').concat(x.top, ')'),
            },
            c &&
              F.createElement(Ye, {
                ref: function(e) {
                  return a.select(e).call(xe(m, oe, Q, ue, K, B));
                },
              }),
            T &&
              F.createElement(
                Xe,
                { axis: 'x', margin: x, width: K, height: Q },
                T
              ),
            D &&
              F.createElement(
                Xe,
                { axis: 'y', margin: x, width: K, height: Q },
                D
              ),
            ve(ie).map(function(e, t) {
              var r,
                n = I(e, 2),
                a = n[0],
                i = n[1];
              return F.createElement(
                'g',
                {
                  className: ''.concat(
                    ((r = a), r.replace(/ /g, '-').toLowerCase()),
                    '-layer'
                  ),
                  key: t,
                },
                F.createElement(He, {
                  chart: 'stacked-area',
                  fillColor: Z.themes[z][t],
                  d: ce(i),
                  strokeWidth: 0,
                  onClick: b,
                  onMouseEnter: k,
                  onMouseLeave: O,
                })
              );
            }),
            F.createElement(G, {
              axis: 'x',
              position: { x: 0, y: Q },
              ref: function(e) {
                a.select(e).call(r.axisBottom(oe)), j && Be(H, X);
              },
            }),
            F.createElement(G, {
              axis: 'y',
              ref: function(e) {
                return a.select(e).call(r.axisLeft(ue).ticks(B));
              },
            })
          )
        )
      );
    });
});
