import React from "react";
import { useTranslation } from 'react-i18next';

export const RegisterPage: React.FC = () => {
    const { t } = useTranslation();
    return <h1>{t('registerPage')}</h1>;
}