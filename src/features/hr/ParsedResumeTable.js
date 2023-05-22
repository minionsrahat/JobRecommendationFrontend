import React, { useState } from 'react';

const ParseResumeTable = ({ parsed_resumes }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const ResumesPerPage = 5;

    // Logic to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Logic to calculate the current Resumes to display
    const indexOfLastResume = currentPage * ResumesPerPage;
    const indexOfFirstResume = indexOfLastResume - ResumesPerPage;
    const currentResumes = parsed_resumes.slice(indexOfFirstResume, indexOfLastResume);
    // Calculate total number of pages
    const totalPages = Math.ceil(parsed_resumes.length / ResumesPerPage);
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
                            <th>Applicant</th>
                            <th>Major</th>
                            <th>Degree</th>
                            <th>Skills</th>
                            <th>Score</th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {currentResumes.map((row) => {
                            return (
                                <tr key={row.id}>
                                    <td>{wrapText(row.candidate_num, 50)}</td>
                                    <td>{(row.majors)}</td>
                                    <td>{(row.degrees)}</td>
                                    <td>{wrapText(row.skills,50)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
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

        </>
    );
};

export default ParseResumeTable;