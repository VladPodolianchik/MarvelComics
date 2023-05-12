import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from "../../services/MarvelService";

import './charList.scss';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;  // у нас грузятся новые элементы, если да, тогда компонент, если нет, тогда это первая загрузка и нужен спиннер
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

const CharList = (props) => {

    const [charList, setcharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setChatEnded] = useState(false);

    const {loading, error, getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        }, [])
    

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);  // если в onRequest передать true, то мы говорим коду, что это первичная зарузка и установим false, если же идет повторная загрузка и initial = false, то состояние меняем на true в setNewItemLoading
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
 
        setcharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setChatEnded(chatEnded => ended)
        
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {objectFit : 'cover'};

            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {objectFit : 'contain'}
        }   

            return(
                <CSSTransition  timeout={200} classNames="char__item">
                    <li 
                        className="char__item"
                        key={item.id}
                        ref={el => itemRefs.current[i] = el}  // в ref может помещаться колбэк ref, к-ый принимает в себя единственным аргументом тот элемент на котором он был вызван, а т.к. здесь идет перебор методом map, li создаются внутри цикла, то можно задать ссылку на элемент el и т.к. itemsRefs.current это массив, то можно исп-ть не push, к-ый может дать ошибку, а элементы по порядку складывать, где el ссылка на dom элемент
                        tabIndex={0}
                        onClick = {() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i)
                        }}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                props.onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        })

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>           
        )
    }
    
    // const items = renderItems(charList);
    
    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading && !newItemLoading ? <Spinner/> : null;
    
    const elements = useMemo(() => {
        return setContent(process, () => renderItems(charList), newItemLoading);
    }, [process]);

    return(         // в setContent помещаем () => renderItems(charList)), т.к. мы должны передать компонент, а функ-й компонент это функция, к-ая возвращает реакт-элементы и потому мы передает функцию и возвращаем элемент renderItems
        <div className="char__list"> 
            {elements}  
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;