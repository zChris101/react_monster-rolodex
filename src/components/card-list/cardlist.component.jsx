import { Component } from "react";
import "./cardlist.styles.css";
import Card from "../card/card.component";

class Cardlist extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div className="card-list">
                {
                    monsters.map(monster => {
                        return (
                            <Card monster={monster} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Cardlist;