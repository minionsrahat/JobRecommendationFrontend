import React from 'react';

const RecommendationTable = ({recommended_jobs}) => {
    function wrapText(text, maxLength) {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        } else {
          return text;
        }
      } 
    return (
      <>
       <div className="overflow-x-auto w-full">
                    <table className="table  w-full">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Company</th>
                                <th>Similarity</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recommended_jobs && recommended_jobs.length > 0 &&
                                recommended_jobs.map((row) => {
                                    return (
                                        <tr >
                                            <td >{wrapText(row.position,50)}</td>
                                            <td>{wrapText(row.company,50)}</td>
                                            <td>{row.score.toFixed(4)}</td>
                                            <td><a href={row.link} target='__blank' className="btn">Apply</a></td>
                                            {/* <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5" /></button></td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
      
      </>
    );
};

export default RecommendationTable;