import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction } from "../../redux/actions";

const MainPage = () => {
    
    const title = useSelector(state => state.mainReducer.title)
    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch(changeTitleAction())
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    )
}

export default MainPage;