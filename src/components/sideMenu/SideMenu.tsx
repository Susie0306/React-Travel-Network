import React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

export const SideMenu: React.FC = () => {
  const items = sideMenuList.map((m, index) => ({
    key: `side-menu-${index}`,
    icon: <GifOutlined />,
    label: m.title,
    children: m.subMenu.map((sm, smindex) => ({
      key: `sub-menu-${index}-${smindex}`,
      icon: <GifOutlined />,
      label: sm.title,
      children: sm.subMenu.map((sms, smsindex) => ({
        key: `sub-sub-menu-${index}-${smindex}-${smsindex}`,
        icon: <GifOutlined />,
        label: sms,
      })),
    })),
  }));

  return (
    <Menu
      mode="vertical"
      className={styles['side-menu']}
      items={items}
    />
  );
}