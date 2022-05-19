import React from 'react';
import { Modal } from 'antd';

// import "./index.css";

export const DefaultModal = (props: any) => {
  const { children, bodyStyle, width, ...rest } = props;

  return (
    <Modal
      style={{ background: 'transparent', borderRadius: 16 }}
      bodyStyle={{
        background: '#101a233',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...bodyStyle,
      }}
      footer={null}
      width={width || 400}
      {...rest}
    >
      {children}
    </Modal>
  );
};