import React from 'react';
import './styles/Page.css'

function Page(props) {
    return (
        <section className="Page">
            {props.children}
        </section>
    )
}

export default Page;