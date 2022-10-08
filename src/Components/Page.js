import React, { Component } from "react";

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=ORLANDO&appid=1bc5302093eb649cce8be8f2bf4766a3')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } 

        return (
            <div>
                <p>FILLER TEXT</p>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Coord: {item.name}
                        </li>
                    ))};
                </ul>
            </div>
        )
    }
}

export default Page;