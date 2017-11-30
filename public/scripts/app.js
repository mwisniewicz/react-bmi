'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Application starts!");

var MainApplication = function (_React$Component) {
    _inherits(MainApplication, _React$Component);

    function MainApplication(props) {
        _classCallCheck(this, MainApplication);

        var _this = _possibleConstructorReturn(this, (MainApplication.__proto__ || Object.getPrototypeOf(MainApplication)).call(this, props));

        _this.handleParams = _this.handleParams.bind(_this);
        return _this;
    }

    _createClass(MainApplication, [{
        key: 'handleParams',
        value: function handleParams(mass, height) {
            if (!mass) {
                return 'Enter valid value';
            } else {
                var BMI = mass / (height * height);
                return 'BMI: ' + BMI;
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var title = 'BMI';
            var title_thin = 'CALCULATOR';
            var subtitle = 'powered by React';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, title_thin: title_thin, subtitle: subtitle }),
                React.createElement(CalculateBMI, {
                    handleParams: this.handleParams
                })
            );
        }
    }]);

    return MainApplication;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'header',
        { className: 'header-main' },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'h1',
                null,
                props.title,
                React.createElement(
                    'span',
                    null,
                    props.title_thin
                )
            ),
            React.createElement(
                'div',
                { className: 'header-main-subtitle' },
                React.createElement('span', { className: 'devicon-react-original' }),
                React.createElement(
                    'h3',
                    null,
                    props.subtitle
                )
            )
        )
    );
};

Header.defaultProps = {
    title: 'BMI',
    title_thin: 'CALCULATOR',
    subtitle: 'powered by React'
};

var Footer = function Footer(props) {
    return React.createElement(
        'footer',
        null,
        React.createElement(
            'h1',
            null,
            'BMI CALCULATOR'
        ),
        React.createElement(
            'h3',
            null,
            'powered by React'
        )
    );
};

var CalculateBMI = function (_React$Component2) {
    _inherits(CalculateBMI, _React$Component2);

    function CalculateBMI(props) {
        _classCallCheck(this, CalculateBMI);

        var _this2 = _possibleConstructorReturn(this, (CalculateBMI.__proto__ || Object.getPrototypeOf(CalculateBMI)).call(this, props));

        _this2.handleParams = _this2.handleParams.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(CalculateBMI, [{
        key: 'handleParams',
        value: function handleParams(e) {
            e.preventDefault();
            var mass = e.target.elements.mass.value.trim();
            var height = e.target.elements.height.value.trim();
            var error = this.props.handleParams(mass, height);

            this.setState(function () {
                return { error: error };
            });
            console.log("work");
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleParams, className: 'bmi-form' },
                    React.createElement(
                        'div',
                        { className: 'inputs' },
                        React.createElement(
                            'label',
                            null,
                            'Masa'
                        ),
                        React.createElement('input', { type: 'text', name: 'mass' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'inputs' },
                        React.createElement(
                            'label',
                            null,
                            'Wzrost'
                        ),
                        React.createElement('input', { type: 'text', name: 'height' })
                    ),
                    React.createElement(
                        'button',
                        { className: 'button' },
                        'Calculate'
                    )
                ),
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                )
            );
        }
    }]);

    return CalculateBMI;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(MainApplication, null), appRoot);
