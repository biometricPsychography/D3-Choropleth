/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/topojson-client/index.js":
/*!***********************************************!*\
  !*** ./node_modules/topojson-client/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bbox\": () => (/* reexport safe */ _src_bbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"feature\": () => (/* reexport safe */ _src_feature__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"merge\": () => (/* reexport safe */ _src_merge__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"mergeArcs\": () => (/* reexport safe */ _src_merge__WEBPACK_IMPORTED_MODULE_3__.mergeArcs),\n/* harmony export */   \"mesh\": () => (/* reexport safe */ _src_mesh__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"meshArcs\": () => (/* reexport safe */ _src_mesh__WEBPACK_IMPORTED_MODULE_2__.meshArcs),\n/* harmony export */   \"neighbors\": () => (/* reexport safe */ _src_neighbors__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"quantize\": () => (/* reexport safe */ _src_quantize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"transform\": () => (/* reexport safe */ _src_transform__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"untransform\": () => (/* reexport safe */ _src_untransform__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _src_bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/bbox */ \"./node_modules/topojson-client/src/bbox.js\");\n/* harmony import */ var _src_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/feature */ \"./node_modules/topojson-client/src/feature.js\");\n/* harmony import */ var _src_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/mesh */ \"./node_modules/topojson-client/src/mesh.js\");\n/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/merge */ \"./node_modules/topojson-client/src/merge.js\");\n/* harmony import */ var _src_neighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/neighbors */ \"./node_modules/topojson-client/src/neighbors.js\");\n/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/quantize */ \"./node_modules/topojson-client/src/quantize.js\");\n/* harmony import */ var _src_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/transform */ \"./node_modules/topojson-client/src/transform.js\");\n/* harmony import */ var _src_untransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/untransform */ \"./node_modules/topojson-client/src/untransform.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/index.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/bbox.js":
/*!**************************************************!*\
  !*** ./node_modules/topojson-client/src/bbox.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ \"./node_modules/topojson-client/src/transform.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {\n  var t = (0,_transform__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(topology.transform), key,\n      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;\n\n  function bboxPoint(p) {\n    p = t(p);\n    if (p[0] < x0) x0 = p[0];\n    if (p[0] > x1) x1 = p[0];\n    if (p[1] < y0) y0 = p[1];\n    if (p[1] > y1) y1 = p[1];\n  }\n\n  function bboxGeometry(o) {\n    switch (o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(bboxGeometry); break;\n      case \"Point\": bboxPoint(o.coordinates); break;\n      case \"MultiPoint\": o.coordinates.forEach(bboxPoint); break;\n    }\n  }\n\n  topology.arcs.forEach(function(arc) {\n    var i = -1, n = arc.length, p;\n    while (++i < n) {\n      p = t(arc[i], i);\n      if (p[0] < x0) x0 = p[0];\n      if (p[0] > x1) x1 = p[0];\n      if (p[1] < y0) y0 = p[1];\n      if (p[1] > y1) y1 = p[1];\n    }\n  });\n\n  for (key in topology.objects) {\n    bboxGeometry(topology.objects[key]);\n  }\n\n  return [x0, y0, x1, y1];\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/bbox.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/bisect.js":
/*!****************************************************!*\
  !*** ./node_modules/topojson-client/src/bisect.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, x) {\n  var lo = 0, hi = a.length;\n  while (lo < hi) {\n    var mid = lo + hi >>> 1;\n    if (a[mid] < x) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/bisect.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/feature.js":
/*!*****************************************************!*\
  !*** ./node_modules/topojson-client/src/feature.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"feature\": () => (/* binding */ feature),\n/* harmony export */   \"object\": () => (/* binding */ object)\n/* harmony export */ });\n/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse */ \"./node_modules/topojson-client/src/reverse.js\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ \"./node_modules/topojson-client/src/transform.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology, o) {\n  return o.type === \"GeometryCollection\"\n      ? {type: \"FeatureCollection\", features: o.geometries.map(function(o) { return feature(topology, o); })}\n      : feature(topology, o);\n}\n\nfunction feature(topology, o) {\n  var id = o.id,\n      bbox = o.bbox,\n      properties = o.properties == null ? {} : o.properties,\n      geometry = object(topology, o);\n  return id == null && bbox == null ? {type: \"Feature\", properties: properties, geometry: geometry}\n      : bbox == null ? {type: \"Feature\", id: id, properties: properties, geometry: geometry}\n      : {type: \"Feature\", id: id, bbox: bbox, properties: properties, geometry: geometry};\n}\n\nfunction object(topology, o) {\n  var transformPoint = (0,_transform__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(topology.transform),\n      arcs = topology.arcs;\n\n  function arc(i, points) {\n    if (points.length) points.pop();\n    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {\n      points.push(transformPoint(a[k], k));\n    }\n    if (i < 0) (0,_reverse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(points, n);\n  }\n\n  function point(p) {\n    return transformPoint(p);\n  }\n\n  function line(arcs) {\n    var points = [];\n    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);\n    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.\n    return points;\n  }\n\n  function ring(arcs) {\n    var points = line(arcs);\n    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.\n    return points;\n  }\n\n  function polygon(arcs) {\n    return arcs.map(ring);\n  }\n\n  function geometry(o) {\n    var type = o.type, coordinates;\n    switch (type) {\n      case \"GeometryCollection\": return {type: type, geometries: o.geometries.map(geometry)};\n      case \"Point\": coordinates = point(o.coordinates); break;\n      case \"MultiPoint\": coordinates = o.coordinates.map(point); break;\n      case \"LineString\": coordinates = line(o.arcs); break;\n      case \"MultiLineString\": coordinates = o.arcs.map(line); break;\n      case \"Polygon\": coordinates = polygon(o.arcs); break;\n      case \"MultiPolygon\": coordinates = o.arcs.map(polygon); break;\n      default: return null;\n    }\n    return {type: type, coordinates: coordinates};\n  }\n\n  return geometry(o);\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/feature.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/identity.js":
/*!******************************************************!*\
  !*** ./node_modules/topojson-client/src/identity.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return x;\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/identity.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/merge.js":
/*!***************************************************!*\
  !*** ./node_modules/topojson-client/src/merge.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"mergeArcs\": () => (/* binding */ mergeArcs)\n/* harmony export */ });\n/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ \"./node_modules/topojson-client/src/feature.js\");\n/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ \"./node_modules/topojson-client/src/stitch.js\");\n\n\n\nfunction planarRingArea(ring) {\n  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;\n  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];\n  return Math.abs(area); // Note: doubled area!\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {\n  return (0,_feature__WEBPACK_IMPORTED_MODULE_0__.object)(topology, mergeArcs.apply(this, arguments));\n}\n\nfunction mergeArcs(topology, objects) {\n  var polygonsByArc = {},\n      polygons = [],\n      groups = [];\n\n  objects.forEach(geometry);\n\n  function geometry(o) {\n    switch (o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(geometry); break;\n      case \"Polygon\": extract(o.arcs); break;\n      case \"MultiPolygon\": o.arcs.forEach(extract); break;\n    }\n  }\n\n  function extract(polygon) {\n    polygon.forEach(function(ring) {\n      ring.forEach(function(arc) {\n        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);\n      });\n    });\n    polygons.push(polygon);\n  }\n\n  function area(ring) {\n    return planarRingArea((0,_feature__WEBPACK_IMPORTED_MODULE_0__.object)(topology, {type: \"Polygon\", arcs: [ring]}).coordinates[0]);\n  }\n\n  polygons.forEach(function(polygon) {\n    if (!polygon._) {\n      var group = [],\n          neighbors = [polygon];\n      polygon._ = 1;\n      groups.push(group);\n      while (polygon = neighbors.pop()) {\n        group.push(polygon);\n        polygon.forEach(function(ring) {\n          ring.forEach(function(arc) {\n            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {\n              if (!polygon._) {\n                polygon._ = 1;\n                neighbors.push(polygon);\n              }\n            });\n          });\n        });\n      }\n    }\n  });\n\n  polygons.forEach(function(polygon) {\n    delete polygon._;\n  });\n\n  return {\n    type: \"MultiPolygon\",\n    arcs: groups.map(function(polygons) {\n      var arcs = [], n;\n\n      // Extract the exterior (unique) arcs.\n      polygons.forEach(function(polygon) {\n        polygon.forEach(function(ring) {\n          ring.forEach(function(arc) {\n            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {\n              arcs.push(arc);\n            }\n          });\n        });\n      });\n\n      // Stitch the arcs into one or more rings.\n      arcs = (0,_stitch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(topology, arcs);\n\n      // If more than one ring is returned,\n      // at most one of these rings can be the exterior;\n      // choose the one with the greatest absolute area.\n      if ((n = arcs.length) > 1) {\n        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {\n          if ((ki = area(arcs[i])) > k) {\n            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;\n          }\n        }\n      }\n\n      return arcs;\n    })\n  };\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/merge.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/mesh.js":
/*!**************************************************!*\
  !*** ./node_modules/topojson-client/src/mesh.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"meshArcs\": () => (/* binding */ meshArcs)\n/* harmony export */ });\n/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ \"./node_modules/topojson-client/src/feature.js\");\n/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ \"./node_modules/topojson-client/src/stitch.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {\n  return (0,_feature__WEBPACK_IMPORTED_MODULE_0__.object)(topology, meshArcs.apply(this, arguments));\n}\n\nfunction meshArcs(topology, object, filter) {\n  var arcs, i, n;\n  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);\n  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;\n  return {type: \"MultiLineString\", arcs: (0,_stitch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(topology, arcs)};\n}\n\nfunction extractArcs(topology, object, filter) {\n  var arcs = [],\n      geomsByArc = [],\n      geom;\n\n  function extract0(i) {\n    var j = i < 0 ? ~i : i;\n    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});\n  }\n\n  function extract1(arcs) {\n    arcs.forEach(extract0);\n  }\n\n  function extract2(arcs) {\n    arcs.forEach(extract1);\n  }\n\n  function extract3(arcs) {\n    arcs.forEach(extract2);\n  }\n\n  function geometry(o) {\n    switch (geom = o, o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(geometry); break;\n      case \"LineString\": extract1(o.arcs); break;\n      case \"MultiLineString\": case \"Polygon\": extract2(o.arcs); break;\n      case \"MultiPolygon\": extract3(o.arcs); break;\n    }\n  }\n\n  geometry(object);\n\n  geomsByArc.forEach(filter == null\n      ? function(geoms) { arcs.push(geoms[0].i); }\n      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });\n\n  return arcs;\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/mesh.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/neighbors.js":
/*!*******************************************************!*\
  !*** ./node_modules/topojson-client/src/neighbors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ \"./node_modules/topojson-client/src/bisect.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(objects) {\n  var indexesByArc = {}, // arc index -> array of object indexes\n      neighbors = objects.map(function() { return []; });\n\n  function line(arcs, i) {\n    arcs.forEach(function(a) {\n      if (a < 0) a = ~a;\n      var o = indexesByArc[a];\n      if (o) o.push(i);\n      else indexesByArc[a] = [i];\n    });\n  }\n\n  function polygon(arcs, i) {\n    arcs.forEach(function(arc) { line(arc, i); });\n  }\n\n  function geometry(o, i) {\n    if (o.type === \"GeometryCollection\") o.geometries.forEach(function(o) { geometry(o, i); });\n    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);\n  }\n\n  var geometryType = {\n    LineString: line,\n    MultiLineString: polygon,\n    Polygon: polygon,\n    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }\n  };\n\n  objects.forEach(geometry);\n\n  for (var i in indexesByArc) {\n    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {\n      for (var k = j + 1; k < m; ++k) {\n        var ij = indexes[j], ik = indexes[k], n;\n        if ((n = neighbors[ij])[i = (0,_bisect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(n, ik)] !== ik) n.splice(i, 0, ik);\n        if ((n = neighbors[ik])[i = (0,_bisect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(n, ij)] !== ij) n.splice(i, 0, ij);\n      }\n    }\n  }\n\n  return neighbors;\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/neighbors.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/quantize.js":
/*!******************************************************!*\
  !*** ./node_modules/topojson-client/src/quantize.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ \"./node_modules/topojson-client/src/bbox.js\");\n/* harmony import */ var _untransform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./untransform */ \"./node_modules/topojson-client/src/untransform.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology, transform) {\n  if (topology.transform) throw new Error(\"already quantized\");\n\n  if (!transform || !transform.scale) {\n    if (!((n = Math.floor(transform)) >= 2)) throw new Error(\"n must be ≥2\");\n    box = topology.bbox || (0,_bbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(topology);\n    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;\n    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};\n  } else {\n    box = topology.bbox;\n  }\n\n  var t = (0,_untransform__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(transform), box, key, inputs = topology.objects, outputs = {};\n\n  function quantizePoint(point) {\n    return t(point);\n  }\n\n  function quantizeGeometry(input) {\n    var output;\n    switch (input.type) {\n      case \"GeometryCollection\": output = {type: \"GeometryCollection\", geometries: input.geometries.map(quantizeGeometry)}; break;\n      case \"Point\": output = {type: \"Point\", coordinates: quantizePoint(input.coordinates)}; break;\n      case \"MultiPoint\": output = {type: \"MultiPoint\", coordinates: input.coordinates.map(quantizePoint)}; break;\n      default: return input;\n    }\n    if (input.id != null) output.id = input.id;\n    if (input.bbox != null) output.bbox = input.bbox;\n    if (input.properties != null) output.properties = input.properties;\n    return output;\n  }\n\n  function quantizeArc(input) {\n    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic\n    output[0] = t(input[0], 0);\n    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points\n    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points\n    output.length = j;\n    return output;\n  }\n\n  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);\n\n  return {\n    type: \"Topology\",\n    bbox: box,\n    transform: transform,\n    objects: outputs,\n    arcs: topology.arcs.map(quantizeArc)\n  };\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/quantize.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/reverse.js":
/*!*****************************************************!*\
  !*** ./node_modules/topojson-client/src/reverse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(array, n) {\n  var t, j = array.length, i = j - n;\n  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/reverse.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/stitch.js":
/*!****************************************************!*\
  !*** ./node_modules/topojson-client/src/stitch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology, arcs) {\n  var stitchedArcs = {},\n      fragmentByStart = {},\n      fragmentByEnd = {},\n      fragments = [],\n      emptyIndex = -1;\n\n  // Stitch empty arcs first, since they may be subsumed by other arcs.\n  arcs.forEach(function(i, j) {\n    var arc = topology.arcs[i < 0 ? ~i : i], t;\n    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {\n      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;\n    }\n  });\n\n  arcs.forEach(function(i) {\n    var e = ends(i),\n        start = e[0],\n        end = e[1],\n        f, g;\n\n    if (f = fragmentByEnd[start]) {\n      delete fragmentByEnd[f.end];\n      f.push(i);\n      f.end = end;\n      if (g = fragmentByStart[end]) {\n        delete fragmentByStart[g.start];\n        var fg = g === f ? f : f.concat(g);\n        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else if (f = fragmentByStart[end]) {\n      delete fragmentByStart[f.start];\n      f.unshift(i);\n      f.start = start;\n      if (g = fragmentByEnd[start]) {\n        delete fragmentByEnd[g.end];\n        var gf = g === f ? f : g.concat(f);\n        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else {\n      f = [i];\n      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;\n    }\n  });\n\n  function ends(i) {\n    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;\n    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });\n    else p1 = arc[arc.length - 1];\n    return i < 0 ? [p1, p0] : [p0, p1];\n  }\n\n  function flush(fragmentByEnd, fragmentByStart) {\n    for (var k in fragmentByEnd) {\n      var f = fragmentByEnd[k];\n      delete fragmentByStart[f.start];\n      delete f.start;\n      delete f.end;\n      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });\n      fragments.push(f);\n    }\n  }\n\n  flush(fragmentByEnd, fragmentByStart);\n  flush(fragmentByStart, fragmentByEnd);\n  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });\n\n  return fragments;\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/stitch.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/transform.js":
/*!*******************************************************!*\
  !*** ./node_modules/topojson-client/src/transform.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ \"./node_modules/topojson-client/src/identity.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transform) {\n  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  var x0,\n      y0,\n      kx = transform.scale[0],\n      ky = transform.scale[1],\n      dx = transform.translate[0],\n      dy = transform.translate[1];\n  return function(input, i) {\n    if (!i) x0 = y0 = 0;\n    var j = 2, n = input.length, output = new Array(n);\n    output[0] = (x0 += input[0]) * kx + dx;\n    output[1] = (y0 += input[1]) * ky + dy;\n    while (j < n) output[j] = input[j], ++j;\n    return output;\n  };\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/transform.js?");

/***/ }),

/***/ "./node_modules/topojson-client/src/untransform.js":
/*!*********************************************************!*\
  !*** ./node_modules/topojson-client/src/untransform.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ \"./node_modules/topojson-client/src/identity.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transform) {\n  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  var x0,\n      y0,\n      kx = transform.scale[0],\n      ky = transform.scale[1],\n      dx = transform.translate[0],\n      dy = transform.translate[1];\n  return function(input, i) {\n    if (!i) x0 = y0 = 0;\n    var j = 2,\n        n = input.length,\n        output = new Array(n),\n        x1 = Math.round((input[0] - dx) / kx),\n        y1 = Math.round((input[1] - dy) / ky);\n    output[0] = x1 - x0, x0 = x1;\n    output[1] = y1 - y0, y0 = y1;\n    while (j < n) output[j] = input[j], ++j;\n    return output;\n  };\n}\n\n\n//# sourceURL=webpack://webpack-example/./node_modules/topojson-client/src/untransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;