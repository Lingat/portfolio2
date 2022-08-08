import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import './index.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const carouselImages = [
    'me.jpeg',
    'me2.jpg',
    'me5.jpeg',
    'me3.jpg',
    'me4.jpeg',
];
const carouselSpeed = 4500;

function Home() {
    const navigate = useNavigate();
    let [imgNum, setImgNum] = useState(0);
    const [currImg, setCurrImg] = useState(carouselImages[imgNum]);
    const [isFade, setIsFade] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const imgFade = () => {
            setIsFade(true);

            setTimeout(() => {
                setIsFade(false);
            }, 700);
        };

        const carouselNext = () => {
            imgFade();
            setTimeout(() => {
                if (imgNum < carouselImages.length - 1) {
                    imgNum++;
                    setImgNum(imgNum);
                    setCurrImg(carouselImages[imgNum]);
                    return;
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
                imgNum = 0;
                setImgNum(imgNum);
                setCurrImg(carouselImages[imgNum]);
            }, 700);
        };

        setInterval(() => {
            carouselNext();
        }, carouselSpeed);
    }, []);

    return (
        <div className='mainWrapper'>
            <div className='photoWrapper'>
                <img
                    src={currImg}
                    className={
                        'mainPhoto ' + (isFade ? 'photoExit' : 'photoEnter')
                    }
                    alt='me'
                    ref={imgRef}
                ></img>
            </div>

            <div className='textWrapper'>
                <div className='textInfo'>
                    <h1>Hello, I'm Pierre!</h1>
                    <h2>Hope you're doing well.</h2>
                    <p className='subtitle'>
                        I'm a final year student at UNSW studying a bachelor of
                        Computer Science and Arts.
                        <p>
                            <i>Have a look around my website.</i>
                        </p>
                    </p>
                    <Button
                        variant='outline-primary'
                        onClick={() => {
                            navigate('/about');
                        }}
                        className='homeBtns'
                    >
                        About
                    </Button>{' '}
                    <Button
                        variant='outline-secondary'
                        onClick={() => {
                            navigate('/portfolio');
                        }}
                        className='homeBtns'
                    >
                        Portfolio
                    </Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default Home;
