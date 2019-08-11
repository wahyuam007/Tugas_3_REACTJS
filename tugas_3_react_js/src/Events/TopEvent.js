import React from 'react';

const TopEvent = () => {
    const HandleFooter = (value,e) => {
        e.preventDefault();
        alert(value);
    }

    return (
        <a href="/" onClick={e => HandleFooter("Kembali Ke Home",e)}>Back To Home</a>
    );
}

export default TopEvent;