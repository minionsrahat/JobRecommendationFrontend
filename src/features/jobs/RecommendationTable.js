import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendationTable = ({ recommended_jobs,handleNavigation }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
    

    // Logic to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    
    // Logic to calculate the current jobs to display
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = recommended_jobs.slice(indexOfFirstJob, indexOfLastJob);
    // Calculate total number of pages
    const totalPages = Math.ceil(recommended_jobs.length / jobsPerPage);
    // Generate an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);




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
                <table className="table w-full">
                    {/* Table headers */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Similarity</th>
                            <th>Link</th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {currentJobs.map((row) => {
                            return (
                                <tr key={row.id}>
                                    <td>{wrapText(row.position, 45)}</td>
                                    <td>{wrapText(row.company, 45)}</td>
                                    <td>{row.score.toFixed(4)}</td>
                                    <td>
                                        <button onClick={()=>handleNavigation(row.position)} className="btn mr-1">
                                            Details
                                        </button>
                                        <a href={row.link} target="__blank" className="btn">
                                            Apply
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='text-center mt-4'>
            <div className="btn-group">
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`btn ${pageNumber === currentPage ? 'btn-active' : ''}`}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
            </div>


        </>
    );
};

export default RecommendationTable;