import React from 'react';
import styles from './../comand/styles/Container.module.css'
import s from './Footer.module.css'


function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
{/*                <h2>'Segrey Tkachuk'</h2>*/}

                <div className={s.containerIcon}>

                    <div><a href={''}>linkedin</a></div>
                    <div><a href={''}>github</a></div>
                    <div><a href={''}>codewars</a></div>
                    <div><a href={''}>facebook</a></div>
                </div>
                <span>© 2021 Все права защищены</span>
            </div>

        </div>

    )
}

export default Footer
/*
<ul>
<li><a href={''}>facebook</a> </li>
    <li><a href={''}>facebook</a> </li>
    <li><a href={''}>facebook</a> </li>
    <li><a href={''}>facebook</a> </li>
    </ul>*/
