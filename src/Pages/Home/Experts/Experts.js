import React from 'react';

import mechanic1 from '../../../images/mechanic/1.jpg';
import mechanic2 from '../../../images/mechanic/2.jpg';
import mechanic3 from '../../../images/mechanic/3.jpg';
import mechanic4 from '../../../images/mechanic/4.jpg';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Experts-'

    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Experts-'

    },
    {
        img: mechanic3,
        name: 'Sakaria Smith',
        expertize: '-Coloring Experts-'

    },
    {
        img: mechanic4,
        name: 'Ranse Morn',
        expertize: '-Overall Experts-'

    }
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary my-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;