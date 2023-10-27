import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'
import s2 from '../../s1-main/App.module.css'

/*
* [x] - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* [x] - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* [x] - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* [x] - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <div id={'hw9'} className={s.hw9}>
            <div className={s2.hwTitle}>Homework #9</div>

            <div className={s2.hw}>
                <Clock />
            </div>
        </div>
    )
}

export default HW9
