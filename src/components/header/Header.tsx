import React from 'react';
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  const { t, i18n: i18next } = useTranslation();
  const currentLanguage = i18next.language;
  return (
    <div className={className}>
      {/* 第一层：顶部工具栏 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 24px', backgroundColor: '#f5f5f5' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography.Text>{t('makeTravelHappier')}</Typography.Text>
          <Dropdown
            menu={{
              items: [
                {
                  key: 'zh',
                  label: t('chinese'),
                  onClick: () => {
                    i18next.changeLanguage('zh');
                    localStorage.setItem('language', 'zh');
                  }
                },
                {
                  key: 'en', 
                  label: t('english'),
                  onClick: () => {
                    i18next.changeLanguage('en');
                    localStorage.setItem('language', 'en');
                  }
                }
              ],
              selectedKeys: [currentLanguage]
            }}
          >
            <Button style={{ marginLeft: 15 }}>
              <Space>
                {currentLanguage === 'zh' ? t('chinese') : t('english')}
                <GlobalOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <Space.Compact>
          <Button onClick={() => navigate('/signIn')}>{t('login')}</Button>
          <Button onClick={() => navigate('/register')}>{t('register')}</Button>
        </Space.Compact>
      </div>

      {/* 第二层：搜索栏 */}
      <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className="App-logo" style={{ height: '32px', margin: '0 16px 0 0' }} />
          <Typography.Title level={3} style={{ color: '#82e2fc', margin: 0 }}>{t('reactTravelWebsite')}</Typography.Title>
        </div>
        <Input.Search
          placeholder={t('searchPlaceholder')}
          style={{ width: '400px' }}
        />
      </Layout.Header>

      {/* 第三层：导航菜单 */}
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: '#1976D2',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center'
        }}
        theme="dark"
        items={[
          { key: '1', label: t('home') },
          { key: '2', label: t('tickets') },
          { key: '3', label: t('hotels') },
          { key: '4', label: t('attractions') },
          { key: '5', label: t('groupTours') },
          { key: '6', label: t('privateTours') },
          { key: '7', label: t('localGuides') },
          { key: '8', label: t('carRentals') },
          { key: '9', label: t('groupTours') },
          { key: '10', label: t('privateTours') },
          { key: '11', label: t('localGuides') },
          { key: '12', label: t('attractions') },
          { key: '13', label: t('groupTours') },
          { key: '14', label: t('privateTours') },
          { key: '15', label: t('carRentals') }
        ]}
      />
    </div>
  );
};

export default Header;