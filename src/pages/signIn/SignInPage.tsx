import React from "react";
import { useTranslation } from 'react-i18next';

export const SignInPage: React.FC = (props) => {
    const { t } = useTranslation();
    console.log(props);
    return <h1>{t('signInPage')}</h1>;
}