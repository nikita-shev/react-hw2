import React from 'react'
import s2 from '../../s1-main/App.module.css'
import sHW4 from './hw4.module.css'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* [x] - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* [x] - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <div id={'hw4'} className={sHW4.hw4}>
            <div className={s2.hwTitle}>Homework #4</div>
            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <Stand />
            </div>
        </div>
    )
}

export default HW4
