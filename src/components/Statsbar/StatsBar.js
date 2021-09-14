import React from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";
import Col from 'react-bootstrap/Col'
import './StatsBar.scss';



function StatsBar() {
    return (
        <Col lg={true}>
            <ProSidebar rtl={true}>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaGem />}>LIVE WPM</MenuItem>
                    <MenuItem icon={<FaHeart />}>LIVE TIME/WORDS LEFT</MenuItem>
                    <MenuItem icon={<FaHeart />}>CURRENT ACCURACY</MenuItem>
                    <MenuItem icon={<FaHeart />}></MenuItem>
                    <MenuItem icon={<FaHeart />}></MenuItem>
                </Menu>
            </ProSidebar>
        </Col>
    )
}

export default StatsBar
