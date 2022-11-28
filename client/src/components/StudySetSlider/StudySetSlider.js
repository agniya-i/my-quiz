import React, { useRef, useState } from 'react';
import './style.less';
import leftArrow from '../../img/icons/left-arrow.png';
import rightArrow from '../../img/icons/left-arrow.png';
import StudyCard from '../StudyCard/StudyCard';


export default function StudySetSlider(props) {

    const { cards, folder, activeIndex, onChangeActiveIndex, pageType } = props;




    function handleLeftSlide() {
        const updatedIndex = activeIndex - 1;

        if (updatedIndex < 0) {
            onChangeActiveIndex(cards.length - 1);
        } else {
            onChangeActiveIndex(updatedIndex);
        }

    }

    function handleRightSlide() {
        const updatedIndex = activeIndex + 1;

        if (updatedIndex > cards.length - 1) {
            onChangeActiveIndex(0);
        } else {
            onChangeActiveIndex(updatedIndex);
        }

    }

    return (
        <div className="cards-wrapper">
            <div className="cards-slider">
                <div className="cards-slider__quantity">
                    <span>{activeIndex + 1}</span>/<span>{cards.length}</span>
                </div>
                {cards && cards.length && cards.map((card, index) =>
                    <StudyCard pageType={pageType} key={`${index}-${card.title}`} activeIndex={activeIndex} index={index} folder={folder} card={card} />
                )}
                <div className="cards-nav">
                    <div className="cards-nav--left" onClick={handleLeftSlide}><img src={leftArrow} /></div>
                    <div className="cards-nav--right" onClick={handleRightSlide}><img src={rightArrow} /></div>
                </div>

            </div>
        </div>
    )

}