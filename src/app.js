console.log("Application starts!");

const Header = (props) => {
    return (
        <header>
            <h1>BMI CALCULATOR</h1>
            <h3>powered by React</h3>
        </header>
    );
};

const Footer = (props) => {
    return (
        <footer>
            <h1>BMI CALCULATOR</h1>
            <h3>powered by React</h3>
        </footer>
    );
};

const appRoot = document.getElementById('app');

ReactDOM.render(<Header />, appRoot);