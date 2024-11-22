"use client"; // Adicione essa linha no topo do arquivo

import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.fifin}>
            <nav className={styles.nav}>
                <Image
                    className={styles.Image}
                    src={'/img/file.png'}
                    alt="Logo Png"
                    width={100}
                    height={100}
                />

                <ul className={`${styles.ul} ${isMenuOpen ? styles.open : ''}`}>
                    <li className={styles.li}><Link href={'/about'}>ABOUT</Link></li>
                    <li className={styles.li}><Link href={'/features'}>FEATURES</Link></li>
                    <li className={styles.li}><Link href={'/services'}>SERVICES</Link></li>
                    <li className={styles.li}><Link href={'/membership'}>MEMBERSHIP</Link></li>
                </ul>

                <div className={styles.joinNow}>
                    Join Now
                </div>

                <div className={styles.navigationMenu} onClick={toggleMenu}>
                    <Image
                        src={isMenuOpen ? '/img/close.png' : '/img/menu-icon.png'}
                        alt={isMenuOpen ? "Close Menu" : "Open Menu"}
                        width={60}
                        height={60}
                    />
                </div>
            </nav>
        </header>
    );
}
