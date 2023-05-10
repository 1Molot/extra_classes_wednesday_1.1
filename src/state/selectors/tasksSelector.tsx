import {useSelector} from 'react-redux'
import {AppRootStateType} from '../store'
import {TodolistType} from '../../App'


export const tasksSelector = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)