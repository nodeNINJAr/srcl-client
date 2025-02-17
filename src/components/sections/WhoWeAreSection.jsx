import React from 'react';
import { Row, Col, Avatar, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const WhoWeAreSection = () => {
  return (
    <div>
      <Row  gutter={[16, 16]}>
        {/* Left Column */}
        <Col xs={24} md={12} className="left-column">
          <Title className="text-center font-semibold text-5xl">Who We Are</Title>
          <p className="text-base leading-loose">
            The Center for Environmental and Geographic Information Services (CEGIS) is an ISO 9001, ISO 14001, and ISO 45001 certified center of excellence in Dhaka, the Capital City of Bangladesh located in South Asia. The working domain of CEGIS spans Resource Management Planning (Natural and Intellectual), System Development, Capacity Building, and Research activities.
          </p>
          <p className="text-base leading-loose">
            A Public Trust and center of excellence established by the Government of Bangladesh under the Ministry of Water Resources (MoWR). A "Not-for-Profit" organization guided by a Board of Trustees headed by the Secretary of the MoWR. An entity strengthened with an organized pool of experts and resources to serve humanity by excelling in the state-of-the-art technology in resource management planning, system development, study and research and capacity building. An organization aimed at achieving green environment, blue water and balanced development for better well-being of the nation.
          </p>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={12} className="right-column">
          <Title className="text-center text-5xl">Messages</Title>
          <div className="message-item flex items-center mb-4">
            <Avatar src="https://via.placeholder.com/150" className='w-2/12 mx-auto' size={64} />
            <div className="ml-4 w-10/12 mx-auto">
              <Text strong>Nazmul Ahsan</Text> <MailOutlined />
              <br />
              <Text type="secondary">Secretary, Ministry of Water Resources and Chairperson of CEGIS Board of Trustees</Text>
              <br />
              <Text ellipsis={{ rows: 2 }}>Under preparation ... <a className="text-blue-500 hover:text-blue-700">Read More</a></Text>
            </div>
          </div>
          <div className="message-item flex items-center mb-4">
            <Avatar src="https://via.placeholder.com/150" className='w-2/12 mx-auto' size={64}  />
            <div className="ml-4 w-10/12 mx-auto">
              <Text strong>Malik Fida A Khan</Text> <MailOutlined />
              <br />
              <Text type="secondary">Executive Director, CEGIS</Text>
              <br />
              <Text>Protection of Environment through sustainable conservation and management of natural resources are important contemporary issues as prevailing environmental problems have... <a className="text-blue-500 hover:text-blue-700">Read More</a></Text>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhoWeAreSection;