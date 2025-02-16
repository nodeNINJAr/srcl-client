import { useState } from "react";
import { Drawer, Menu, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { menuItems } from "../data/MenuItems";


export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Brand</div>
      
      {/* Desktop Menu */}
    
        <Menu mode="horizontal" items={menuItems}  className="hidden md:flex flex-1 justify-end border-0" />
     
      
      {/* Mobile Menu Button */}
      <Button className="md:hidden" onClick={() => setOpen(true)}>
        <MenuOutlined />
      </Button>
      
      {/* Mobile Drawer */}
      <Drawer title="Menu" placement="left" onClose={() => setOpen(false)} open={open}>
        <Menu mode="vertical" items={menuItems} />
      </Drawer>
    </div>
  );
}
