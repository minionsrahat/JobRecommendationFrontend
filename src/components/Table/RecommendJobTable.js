import React from 'react';
import Row from './Row';

const RecommendJobTable = ({jobs}) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-compact w-9/12 mx-auto border-solid border-2 table-zebra">
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
                            jobs.map((row) => {
                                return <Row title={row.position} company={row.company} similarity={row.score} link={row.link}></Row>
                            })
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Similarity</th>
                            <th>Link</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default RecommendJobTable;