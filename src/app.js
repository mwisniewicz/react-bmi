console.log("Application starts!");

class MainApplication extends React.Component {
    constructor(props) {
        super(props);
        this.handleParams = this.handleParams.bind(this);
    }

    handleParams(mass,height) {
        if (!mass) {
            return 'Enter valid value';
        } else {
            const BMI = mass/(height*height);
            return 'BMI: '+BMI;
        }

    }

    render() {

        const title = 'BMI';
        const title_thin = 'CALCULATOR';
        const subtitle = 'powered by React';
        return (
            <div>
                <Header title={title} title_thin={title_thin} subtitle={subtitle} />
                <CalculateBMI 
                    handleParams={this.handleParams}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <header className="header-main">
            <div className="container">
            <h1>{props.title}<span>{props.title_thin}</span></h1>
            <div className="header-main-subtitle">
                <span className="devicon-react-original"></span>
                <h3>{props.subtitle}</h3>
            </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    title: 'BMI',
    title_thin: 'CALCULATOR', 
    subtitle: 'powered by React'
};

const Footer = (props) => {
    return (
        <footer>
            <h1>BMI CALCULATOR</h1>
            <h3>powered by React</h3>
        </footer>
    );
};

class CalculateBMI extends React.Component {
    constructor(props) {
        super(props);
        this.handleParams = this.handleParams.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleParams(e) {
        e.preventDefault();
        const mass = e.target.elements.mass.value.trim();
        const height = e.target.elements.height.value.trim();
        const error = this.props.handleParams(mass,height);

        this.setState(() => ({error}));
        console.log("work");
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleParams} className="bmi-form">
                    <div className="inputs">
                        <label>Masa</label><input type="text" name="mass" />
                    </div>
                    <div className="inputs">
                    <label>Wzrost</label><input type="text" name="height" />
                    </div>
                    <button className="button">Calculate</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }


}

const appRoot = document.getElementById('app');

ReactDOM.render(<MainApplication />, appRoot);