import { useMemo, Children, useLayoutEffect, useState, useRef, useEffect, useCallback } from "react";
import CarouselStyleClass from "../componentsStyle/CarouselStyle";

const CarouselStyle = new CarouselStyleClass();

let Carousel = ({children}) => {
    const containerRef = useRef();
    const intervalRef = useRef();
    const [current, setCurrent] = useState(1);
    const [translateX, setTranslateX] = useState(0);

    const actionHandler = useCallback((mode) => {
        containerRef.current.style.transitionDuration = '400ms';
        if(mode === 'prev'){
                if(current <= 1){
                    setTranslateX(0);
                    setCurrent(children.length);
                }else{
                    setTranslateX(containerRef.current.clientWidth * (current - 1));
                    setCurrent((prev) => --prev);
                }
        } else if(mode === 'next') {
                if(current >= children.length){
                    setTranslateX(containerRef.current.clientWidth * (children.length + 1));
                    setCurrent(1);
                }else{
                    setTranslateX(containerRef.current.clientWidth * (current + 1));
                    setCurrent((prev) => ++prev);
                }
        }
    }, [current, children]);

    useEffect(() => {
        const transitionEnd = () => {
            if(current <= 1){
                containerRef.current.style.transitionDuration = '0ms';
                setTranslateX(containerRef.current.clientWidth * current)
            }
            if(current >= children.length){
                containerRef.current.style.transitionDuration = '0ms';
                setTranslateX(containerRef.current.clientWidth * children.length)
            }
        }
        document.addEventListener('transitionend', transitionEnd);

        return () => {
            document.removeEventListener('transitionend', transitionEnd)
        }
    }, [current, children]);

    useEffect(() => {
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            actionHandler('next')
        }, 3000);
        return () => {
            if(intervalRef.current){
                clearInterval(intervalRef.current)
            }
        }
    }, [actionHandler]);

    const slides = useMemo(() => {
        if(children.length > 1){
            let items = Children.map(children, (child, index) => (
            <li key={index} style={CarouselStyle.Slide}>
                {child}
            </li>));
            return [
                <li key={children.length + 1} style={CarouselStyle.Slide}>
                    {children[children.length - 1]}
                </li>,
                ...items,
                <li key={children.length + 2} style={CarouselStyle.Slide}>
                    {children[0]}
                </li>,
            ];
        }

        return <li style={CarouselStyle.Slide}>{children[0]}</li>
    }, [children]);

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.7vw';
        e.target.style.color = '#8ed0e6'
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.5vw';
        e.target.style.color = '#c64792';
    }
    //position firt elem correctly + render only ones
    useLayoutEffect(() => {
        setTranslateX(containerRef.current.clientWidth * current);
    }, []);

    return (
        <div style={CarouselStyle.divSection}>
            <ul ref={containerRef} style={{...CarouselStyle.Container, ...{transform:`translate3d(${-translateX}px, 0, 0)`}}}>
                {slides}
            </ul>
            <button onClick={() => actionHandler('prev')} style={{...CarouselStyle.Btn, ...CarouselStyle.BtnLeft}}>{"<"}</button>
            <button onClick={() => actionHandler('next')} style={{...CarouselStyle.Btn, ...CarouselStyle.BtnRight}}>{">"}</button>
            <a style={CarouselStyle.ImgTitle} href={slides[current].props.children.props.href} target='_blank' rel="noreferrer" onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave}>{slides[current].props.children.props.alt}</a>
        </div>
    )
}

export default Carousel;