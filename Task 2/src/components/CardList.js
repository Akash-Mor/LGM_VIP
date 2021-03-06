import React from 'react';
import Card from './Card';
import '../containers/styles.css';


const CardList = ({robots})=>{
    return(
            <div>
                {
                  
                    robots.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={robots[i].id}
                                    name={robots[i].first_name}
                                    lname={robots[i].last_name}
                                    email={robots[i].email}
                                    />
                            );
                    })
                }
                <p className='copy'
                style={{  
                    padding:'5px 0px',
                    height: '30px', 
                    color: 'white',
                    background: 'linear-gradient(89deg, #33ccff 0%, #0000ff 100%)' }} >by &copy; Akash
                </p>
            </div>
        );
}

export default CardList;
