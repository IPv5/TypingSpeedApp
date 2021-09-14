import React from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";
import Col from 'react-bootstrap/Col'
import './SideBar.scss';



function SideBar() {
    return (
        <Col lg={true}>
            <ProSidebar>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaGem />}>HOME</MenuItem>
                    <MenuItem icon={<FaHeart />}>TIME</MenuItem>
                    <MenuItem icon={<FaHeart />}>WORDS</MenuItem>
                    <MenuItem icon={<FaHeart />}>PUNCTUATION</MenuItem>
                    <MenuItem icon={<FaHeart />}>RACE</MenuItem>
                </Menu>
            </ProSidebar>
        </Col>
    )
}

export default SideBar
