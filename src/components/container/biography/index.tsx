import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { useTranslation } from "react-i18next";
import '../../../translations/i18n'
import './style.css'

const Biography = () => {
    const { itemColor, textColor } = useContext(ThemeContext);
    const { t } = useTranslation();
    return (
        <div className='biography' style={{backgroundColor: `${itemColor}`}}>
            <div className='bio-title'>
                <h2 style={{color: `${textColor}`}}>{t("biography")}</h2>
            </div>
            <p className='bio-little-title' style={{color: `${textColor}`}}>{t("biographyMiniTitle")}</p>
            <p className='bio-title-2' style={{color: `${textColor}`}}>{t("biographytext1")}</p>
            <p className='bio-title-3' style={{color: `${textColor}`}}>{t("biographytext2")}</p>
            <p className='bio-title-3' style={{color: `${textColor}`}}>{t("biographytext3")}</p>
        </div>
    );
};

export default Biography;