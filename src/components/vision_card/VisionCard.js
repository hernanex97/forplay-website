import React from 'react';
import { Col } from "react-bootstrap";

export const VisionCard = ({ title, description }) => {
    return (
        <Col sm={6} md={4}>
            <div className="vision-imgbx">
                <div className="vision-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}