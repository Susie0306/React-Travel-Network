import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Carousel, SideMenu, ProductCollection, BusinessPartners } from '../../components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockups';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';
import { useTranslation } from 'react-i18next';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return <>
    <Header />
    {/** 内容区域 */}
    <div className={styles['page-content']}>
      <Row style={{ marginTop: '20px' }}>
        <Col span={6}>
          <SideMenu />
        </Col>
        <Col span={18}>
          <Carousel />
        </Col>
      </Row>
      <ProductCollection
        title={<Typography.Title level={3} type="warning">
          {t('hotRecommendations')}
        </Typography.Title>}
        sideImage={sideImage}
        products={productList1}
      />
      <ProductCollection
        title={<Typography.Title level={3} type="danger">
          {t('newArrivals')}
        </Typography.Title>}
        sideImage={sideImage2}
        products={productList2}
      />
      <ProductCollection
        title={<Typography.Title level={3} type="success">
          {t('domesticRecommendations')}
        </Typography.Title>}
        sideImage={sideImage3}
        products={productList3}
      />
      <BusinessPartners />
    </div>
    <Footer />
  </>;
};
