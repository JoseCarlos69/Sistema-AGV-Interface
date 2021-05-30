import React from 'react';

const Head = ({ title, description }) => {
    React.useEffect(() => {
        document.title = `Sistema AGV | ${title}`;

        document.querySelector("meta[name='description'")
        .setAttribute(
            "content",
            `Sistema AGV | ${title}, ${description}` || ""
        );
    }, [title, description]);
    
    return <></>;
};

export default Head;