import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExpert] = useState([]);
    useEffect(() => {
        fetch('Expert.json')
            .then(res => res.json())
            .then(data => setExpert(data))
    }, [])
    return (
        <div className='container pt-5' id='experts'>
            <h2 className="text-success">Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;






// const expert = [
//     {name: 'Khondokar', expert: 'bug-fixing', img: 'https://i.ibb.co/vLMyzh0/mechanic-1.jpg'},
//     {name: 'Taufiq', expert: 'handle-fixing', img: 'https://i.ibb.co/mzDL0V1/mechanic-2.jpg'},
//     {name: 'Khondokar', expert: 'bug-fixing', img: 'https://i.ibb.co/X4Xm7Bg/mechanic-3.jpg'},
//     {name: 'Ayman', expert: 'pancar-fixing', img: 'https://i.ibb.co/6gjt29q/mechanic-4.jpg'},
//     {name: 'Dhiman', expert: 'cracking-fixing', img: 'https://i.ibb.co/K7Jj41h/mechanic-5.jpg'}
// ]