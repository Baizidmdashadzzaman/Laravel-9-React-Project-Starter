"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Product_ProductEdit_js"],{

/***/ "./resources/js/components/Product/ProductEdit.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Product/ProductEdit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var TITLE = 'Larareact : Product edit';

var ProductEdit = /*#__PURE__*/function (_Component) {
  _inherits(ProductEdit, _Component);

  var _super = _createSuper(ProductEdit);

  function ProductEdit(props) {
    var _this;

    _classCallCheck(this, ProductEdit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChangeImage", function (e) {
      _this.setState({
        product_image: e.target.files[0]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeName", function (e) {
      _this.setState({
        product_name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangePrice", function (e) {
      _this.setState({
        product_price: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getImages", function () {});

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.setState({
        processing: 1
      });

      var data = new FormData();
      data.append('product_image', _this.state.product_image);
      data.append('product_name', _this.state.product_name);
      data.append('product_price', _this.state.product_price);
      data.append('id', _this.state.id);
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/product-update", data).then(function (response) {
        if (response.status === 200) {
          _this.setState({
            responseMsg: {
              status: response.data.status,
              message: response.data.message
            }
          });
          /*
          setTimeout(() => {
              this.setState({
                product_image: "",
                product_name: "",
                product_price: "",
                responseMsg: "",
              });
          }, 2000);
            document.querySelector("#imageForm").reset();
          */


          _this.setState({
            processing: 0
          });

          _this.props.history.push("/admin/product", {
            state: 'sample data'
          });

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Success', 'Data updated sucessfully.', 'success'); // getting uploaded images
          //this.refs.child.getImages();
        }
      })["catch"](function (error) {
        console.error(error);
      });
    });

    _this.state = {
      product_name: "",
      product_image: "",
      product_price: "",
      id: "",
      responseMsg: {
        status: "",
        message: "",
        error: ""
      },
      processing: 0
    };
    return _this;
  }

  _createClass(ProductEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //console.log(this.props.match.params.id)
      //let param = window.location.pathname;
      //var pid = param.replace('/productedit/','');
      //console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/product-edit/' + this.props.match.params.id).then(function (response) {
        _this2.setState({
          product_name: response.data.singledata.product_name,
          product_price: response.data.singledata.product_price,
          //product_image: response.data.singledata.product_image,
          id: _this2.props.match.params.id
        });
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_4__.Helmet, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("title", {
            children: [this.props.appname, " : ", this.props.pagename]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "content-header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "container-fluid",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
                  className: "m-0",
                  children: "Product management"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ol", {
                  className: "breadcrumb float-sm-right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "breadcrumb-item",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: "#",
                      children: "Home"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "breadcrumb-item active",
                    children: "Product"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    className: "breadcrumb-item active",
                    children: "Edit"
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
          className: "content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "container-fluid",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-md-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "card card-primary",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "card-header",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    className: "card-title",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("font", {
                      color: "white",
                      children: "Edit product"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
                  onSubmit: this.submitHandler,
                  encType: "multipart/form-data",
                  id: "imageForm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                        htmlFor: "product_name",
                        children: "Product name"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "text",
                        className: "form-control",
                        value: this.state.product_name,
                        onChange: this.handleChangeName,
                        id: "product_name",
                        placeholder: "Enter product name"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                        htmlFor: "product_price",
                        children: "Product price"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "number",
                        className: "form-control",
                        value: this.state.product_price,
                        id: "product_price",
                        onChange: this.handleChangePrice,
                        placeholder: "Enter product price"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "form-group",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                        htmlFor: "product_image",
                        children: "Product image"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                        type: "file",
                        name: "product_image",
                        onChange: this.handleChangeImage,
                        className: "form-control",
                        id: "product_image",
                        placeholder: "Enter product image"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "card-footer",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                      type: "submit",
                      className: "btn btn-primary",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                        "class": "fa fa-spinner",
                        "aria-hidden": "true"
                      }), this.state.processing == 0 ? ' Update' : ' Please wait ...']
                    })
                  })]
                })]
              })
            })
          })
        })]
      });
    }
  }]);

  return ProductEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ })

}]);