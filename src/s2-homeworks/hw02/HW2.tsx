import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'
import s from '../hw02/hw2.module.css'

/*
* [x] - описать типы AffairPriorityType, AffairType
* [x] - указать нужный тип для defaultAffairs
* [x] - дописать типы и логику функции filterAffairs и проверить её тестами
* [x] - выполнить пункт 3 для функции deleteAffair
* [x] - указать нужный тип в useState с affairs
* [x] - дописать тип и логику функции deleteAffairCallback
* [x] - в файле Affairs.tsx дописать типизацию пропсов
* [x] - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* [x] - в файле Affair.tsx дописать типизацию пропсов
* [x] - в файле Affair.tsx дописать функции deleteCallback и использовать
* [x] - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    return affairs.filter((el) => {
        if (filter === 'all') return true;

        return el.priority === filter;
    });
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter((el) => el._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter);

    const deleteAffairCallback = (_id: number) => { // need to fix any
        const newAffairs = deleteAffair(affairs, _id);

        setAffairs(newAffairs);
    }

    return (
        <div id={'hw2'} className={s.hw2}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
