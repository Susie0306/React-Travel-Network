import React from 'react';
import { Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  title: string;
  price: number | string;
}

const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, title, price }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/detail/${id}`)}>
      {
        size === "large" ? (<Image src={imageSrc} height={284} width={430} />)//490
          : (<Image src={imageSrc} height={120} width={220} />)//240
      }
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>￥{price}起</Typography.Text>
      </div>
    </div>
  );
}

export { ProductImage };
