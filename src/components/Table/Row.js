import React from 'react';

const Row = ({title,company,link,similarity}) => {
    return (
        <>
            <tr>
                <td>{title}</td>
                <td>{company}</td>
                <td>{similarity.toFixed(4)}</td>
                <td>
                <a href={ link} target='__blank' className="btn">Apply</a>
                   </td>
            </tr>

        </>
    );
};

export default Row;