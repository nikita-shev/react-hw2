import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* [x] - в файле loadingReducer.ts дописать типы и логику
* [x] - получить isLoading из редакса
* [x] - дописать функцию setLoading
* [x] - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLoading = useSelector<AppStoreType>((state) => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        dispatch(loadingAC(true))
        // dispatch
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
        // setTimeout
    }

    return (
        <div id={'hw10'} className={s.hw10}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
