import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div class="container">
    <div class="row py-3">
        <div class="col-3 order-2" id="sticky-sidebar">
            <div class="sticky-top">
                ...
            </div>
        </div>
        <div class="col" id="main">
            <h1>Main Area</h1>
            ...   
        </div>
    </div>
</div>
  );
}

export default Sidebar;