import { Component } from "react";
import './searchbox.styles.css'

class Searchbox extends Component {
    render() {
        return (
            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    type='input'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default Searchbox;
