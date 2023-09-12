import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';

function NavBar() {

    const [isExpanded, setExpanded] = useState(false);
    const [eyeState, setEyeState] = useState(2);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        function handleClick(event) {
            console.log("Blink")
            if (eyeState === 0){
                setEyeState(2);
            }
            else{
                setEyeState(0);
                setTimeout(function () {
                    setEyeState(2);
                }, 400);
            }
        }

        const handleBurgerClick = () => {
            setExpanded((prevExpanded) => !prevExpanded);
        };
        const handleMouseMove = (e) => {
            const clientXPos = e.clientX;
            const clientYPos = e.clientY;

            const Frame = document.getElementById('eyes');
            const Leye = document.getElementById('leye');

            const rect = Frame.getBoundingClientRect();
            const frameY = rect.top + rect.height / 2;
            const frameXL = rect.left + rect.width / 2;

            const thetaL = getTheta(clientXPos, clientYPos, frameXL, frameY);

            Leye.setAttribute('transform', 'rotate(' + thetaL + ')');

        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener("click", handleClick);
        if (window.innerWidth <= 768 ) { 
            
            setIsMobile(true);
            setInterval(handleClick, 5000);
    
        } 
        // document.getElementById('burger').addEventListener('click', handleBurgerClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener("click", handleClick);
            // document.getElementById('burger').removeEventListener('click', handleBurgerClick);
        };
    }, []);
    
    // window.onload = handleClick

    function getTheta(x1, y1, x2, y2) {

        const dy = y1 - y2;
        const dx = x1 - x2;

        const r = Math.atan2(dy, dx);
        return ((180 * r) / Math.PI) - 20;

    }

    return (

        <div >
            <div style={{ opacity: isExpanded ? '0.61' : '0', zIndex: isExpanded ? '0' : '-5' }} className={styles.navOver} />
            <div className={styles.navMain}>

                <div style={{ margin: '10px', display: 'flex', width: '100%', hieght: isExpanded ? '33.333%' : '100%' }}>
                    <div style={{ width: '50%', height: '100%' }}>
                        <Link to='/' id="eyes" className={styles.eyeFrame}>

                            <svg id='leye' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <circle cx="17" cy="17" r="17" fill="#FAFBFF" />

                                {isMobile ? <circle cx="17" cy="17" r="9" fill="black" />
                                :<circle cx="19" cy="18" r="9" fill="black" />}
                                

                            </svg>
                            <svg id='morph' style={{ position: 'absolute', transition: 'd 0.1s ease-in-out' }} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path style={{ transition: 'd 0.1s ease-in-out' }} fill-rule="evenodd" clip-rule="evenodd"
                                    d={eyeState == 2 ? "M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM30.9536 19.2211C31.6289 18.429 32.2997 17.6423 33 16.8969C31.9127 15.7397 30.9854 14.6805 30.1455 13.7212C26.2745 9.29967 24.2612 7 17 7C9.54399 7 5.77924 11.3852 2.67538 15.0005C2.10067 15.67 1.54863 16.313 1 16.8969C1.61932 17.556 2.23173 18.2771 2.8635 19.0209C6.0116 22.7275 9.64039 27 17 27C24.3216 27 27.6902 23.0489 30.9536 19.2211Z"
                                            : "M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM30.9536 19.2211C31.903 18.1226 32 18 33 16.8969C32 18 31.9089 18.1225 30.9536 19.2211C27.5 23 24 27 17 27C9.5 27 6 22.5 2.8635 19.0209C2 18 1.31828 17.2414 1 16.8969C1.61932 17.556 2.23173 18.2771 2.8635 19.0209C6 22.5 9.5 27 17 27C24 27 27.5 23 30.9536 19.2211Z"
                                    } fill="black" />

                            </svg>
                        </Link>
                    </div>

                    <div id="burger" className={styles.burger}>
                        {/* {!isExpanded ? (
                            <svg width="74" height="28" viewBox="0 0 74 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="74" height="28" rx="14" fill="black" />
                                <path d="M16.0789 15.1575L17.149 15.416C16.9247 16.2562 16.5202 16.8978 15.9355 17.3408C15.3544 17.7803 14.6428 18 13.8007 18C12.9291 18 12.2194 17.8312 11.6714 17.4937C11.1272 17.1527 10.7116 16.6605 10.4248 16.0171C10.1416 15.3738 10 14.6829 10 13.9446C10 13.1395 10.16 12.4381 10.4799 11.8405C10.8035 11.2393 11.2614 10.784 11.8535 10.4746C12.4492 10.1617 13.1038 10.0053 13.8172 10.0053C14.6263 10.0053 15.3066 10.2022 15.8582 10.5959C16.4099 10.9897 16.7942 11.5434 17.0111 12.2571L15.9575 12.4944C15.77 11.9319 15.4978 11.5223 15.1411 11.2657C14.7844 11.009 14.3358 10.8807 13.7952 10.8807C13.1737 10.8807 12.6533 11.0231 12.2341 11.3078C11.8185 11.5926 11.5262 11.9758 11.357 12.4575C11.1878 12.9356 11.1032 13.4296 11.1032 13.9394C11.1032 14.5968 11.2025 15.1716 11.4011 15.6638C11.6034 16.1525 11.916 16.5181 12.3389 16.7607C12.7618 17.0033 13.2196 17.1246 13.7124 17.1246C14.3119 17.1246 14.8194 16.9593 15.2349 16.6289C15.6505 16.2984 15.9318 15.808 16.0789 15.1575Z" fill="#F2F2F2" />
                                <path d="M18.1475 14.1028C18.1475 12.8196 18.5079 11.8159 19.2287 11.0916C19.9495 10.3639 20.8799 10 22.0199 10C22.7664 10 23.4394 10.1705 24.0388 10.5115C24.6383 10.8526 25.0943 11.3289 25.4068 11.9407C25.7231 12.5489 25.8812 13.2397 25.8812 14.0132C25.8812 14.7972 25.7158 15.4986 25.3848 16.1173C25.0538 16.7361 24.5849 17.2054 23.9781 17.5254C23.3714 17.8418 22.7168 18 22.0144 18C21.2531 18 20.5728 17.8242 19.9734 17.4726C19.3739 17.1211 18.9198 16.6412 18.6108 16.033C18.3019 15.4247 18.1475 14.7814 18.1475 14.1028ZM19.2507 14.1187C19.2507 15.0503 19.5118 15.7851 20.034 16.323C20.5599 16.8574 21.2182 17.1246 22.0088 17.1246C22.8142 17.1246 23.4762 16.8539 23.9947 16.3125C24.5169 15.771 24.778 15.0029 24.778 14.0079C24.778 13.3786 24.6658 12.8301 24.4415 12.3626C24.2209 11.8915 23.8954 11.5276 23.4651 11.2709C23.0385 11.0108 22.5586 10.8807 22.0254 10.8807C21.2678 10.8807 20.6151 11.1303 20.0671 11.6295C19.5229 12.1252 19.2507 12.955 19.2507 14.1187Z" fill="#F2F2F2" />
                                <path d="M27.2548 17.8682V10.1371H28.3525L32.6 16.207V10.1371H33.626V17.8682H32.5283L28.2808 11.793V17.8682H27.2548Z" fill="#F2F2F2" />
                                <path d="M37.4874 17.8682V11.0494H34.8231V10.1371H41.2329V11.0494H38.5576V17.8682H37.4874Z" fill="#F2F2F2" />
                                <path d="M40.6096 17.8682L43.7152 10.1371H44.8681L48.1779 17.8682H46.9588L46.0155 15.5267H42.6341L41.7459 17.8682H40.6096ZM42.943 14.6935H45.6845L44.8405 12.5524C44.5831 11.902 44.3919 11.3676 44.2669 10.9492C44.1639 11.445 44.0186 11.9372 43.8311 12.4258L42.943 14.6935Z" fill="#F2F2F2" />
                                <path d="M54.8029 15.1575L55.873 15.416C55.6487 16.2562 55.2442 16.8978 54.6595 17.3408C54.0784 17.7803 53.3668 18 52.5247 18C51.6531 18 50.9433 17.8312 50.3954 17.4937C49.8511 17.1527 49.4356 16.6605 49.1487 16.0171C48.8656 15.3738 48.724 14.6829 48.724 13.9446C48.724 13.1395 48.8839 12.4381 49.2039 11.8405C49.5275 11.2393 49.9854 10.784 50.5774 10.4746C51.1732 10.1617 51.8278 10.0053 52.5412 10.0053C53.3503 10.0053 54.0306 10.2022 54.5822 10.5959C55.1338 10.9897 55.5181 11.5434 55.7351 12.2571L54.6815 12.4944C54.494 11.9319 54.2218 11.5223 53.8651 11.2657C53.5084 11.009 53.0597 10.8807 52.5191 10.8807C51.8977 10.8807 51.3773 11.0231 50.9581 11.3078C50.5425 11.5926 50.2501 11.9758 50.081 12.4575C49.9118 12.9356 49.8272 13.4296 49.8272 13.9394C49.8272 14.5968 49.9265 15.1716 50.1251 15.6638C50.3274 16.1525 50.64 16.5181 51.0629 16.7607C51.4858 17.0033 51.9436 17.1246 52.4364 17.1246C53.0358 17.1246 53.5433 16.9593 53.9589 16.6289C54.3744 16.2984 54.6558 15.808 54.8029 15.1575Z" fill="#F2F2F2" />
                                <path d="M59.2545 17.8682V11.0494H56.5901V10.1371H63V11.0494H60.3246V17.8682H59.2545Z" fill="#F2F2F2" />
                            </svg>
                        ) :
                            (<svg width="43" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.12134" width="33" height="2.5" transform="rotate(45 2.12134 0)" fill="black" />
                                <rect width="33" height="2.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.12134 25)" fill="black" />
                            </svg>
                            )
                        } */}

                        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }} className={styles.contactBox}>
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'white', width: 'fit-content', margin: '15px' }}>CONTACT</Link>
                        </Link>
                    </div>
                </div>

                {isExpanded ? <div className={styles.blackLine} /> : <></>}

                {isExpanded && (
                    <div className={styles.expandedOptions}>

                        <a href='/work' style={{ textDecoration: 'none' }}>
                            <div style={{ margin: '10px' }} className={styles.shaky}>
                                WORK
                            </div>
                        </a>
                        <div className={styles.blackLine} />
                        <a href='/contact' style={{ textDecoration: 'none' }}>
                            <div style={{ margin: '10px' }} className={styles.shaky}>
                                CONTACT
                            </div>
                        </a>
                        <div className={styles.blackLine} />

                    </div>
                )}
            </div>
        </div>

    );
}

export default NavBar;
