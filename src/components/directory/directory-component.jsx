import React from 'react';

import './directory-styles.scss';
import MenuItem from "../../components/menu-item/menu-item-component";

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [{
                title: "Hats",
                imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                id: 1,
                linkUrl: "hats"
            },{
                title: "Jackets",
                imageUrl: "https://i.ibb.co/cx2tCc3/jackets.png",
                id: 2,
                linkUrl: "jackets"
            },{
                title: "Sneakers",
                imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 3,
                linkUrl: "sneakers"
            },{
                title: "Womens",
                imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                size: "large",
                id: 4,
                linkUrl: "womens"
            },{
                title: "Mens",
                imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
                size: "large",
                id: 5,
                linkUrl: "mens"
            }
        ]
        }
    }
 
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;