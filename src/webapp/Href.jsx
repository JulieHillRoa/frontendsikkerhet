import React from 'react';

export default () => {
    const userWebsite = "lol"//"javascript:alert('Hacked!');";
    return (
        <div style={ { margin: '40px'} }>
            <h2>Href</h2>

            <a href={userWebsite}>My Website</a>
        </div>
    )
}