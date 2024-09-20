import React from 'react'
import './WorkProcess.css';
import { FaSearch, FaPen } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { IoIosRocket } from 'react-icons/io';

const WorkProcess = () => {
    return (
        <div className="container px-4 py-5 work-process-main" style={{ fontFamily: '"Kanit", sans-serif'}}>
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                    <h2 className="text-body-emphasis">Work Process</h2>
                    <p className="text-body-secondary">In project development, research identifies needs and goals, 
                    analysis refines requirements, design creates structured solutions, and the launch phase implements the plan, 
                    delivering the final product to users.</p>
                </div>
                <div className="col">
                    <div className="row row-cols-2 work-process-card-container">
                        <div className="col d-flex flex-column gap-2 work-process-card">
                            <FaSearch className='work-process-icon' />
                            <h6 className="fw-semibold mb-0 text-body-emphasis">1.Research</h6>
                            <p className="text-body-secondary small">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>

                        <div className="col d-flex flex-column gap-2 work-process-card">
                            <GoGraph className='work-process-icon' />
                            <h6 className="fw-semibold mb-0 text-body-emphasis">2.Analyze</h6>
                            <p className="text-body-secondary small">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>

                        <div className="col d-flex flex-column gap-2 work-process-card">
                            <FaPen className='work-process-icon' />
                            <h6 className="fw-semibold mb-0 text-body-emphasis">3.Design</h6>
                            <p className="text-body-secondary small">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>

                        <div className="col d-flex flex-column gap-2 work-process-card">
                            <IoIosRocket className='work-process-icon' />
                            <h6 className="fw-semibold mb-0 text-body-emphasis text-capitalize">4.launch</h6>
                            <p className="text-body-secondary small">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WorkProcess