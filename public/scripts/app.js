"use strict";

console.log("Application starts!");

var Header = function Header(props) {
    return React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "BMI CALCULATOR"
        ),
        React.createElement(
            "h3",
            null,
            "powered by React"
        )
    );
};

var Footer = function Footer(props) {
    return React.createElement(
        "footer",
        null,
        React.createElement(
            "h1",
            null,
            "BMI CALCULATOR"
        ),
        React.createElement(
            "h3",
            null,
            "powered by React"
        )
    );
};

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(Header, null), appRoot);
