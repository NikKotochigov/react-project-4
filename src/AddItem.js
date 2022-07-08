import React, { useState } from "react";

export default function AddItem(props) {
    return <form onSubmit={props.onSubmitItem}>
        <div>
            <input
                type="text"
                placeholder="Название товара"
                className="ui-textfield"
                value={props.name}
                onChange={props.onSetName}
            />
        </div>
        <div>
            <input
                type="text"
                placeholder="Описание товара"
                className="ui-textfield"
                value={props.discription}
                onChange={props.onSetDiscription}
            />
        </div>
        <div className="form-footer">
            <div className="validation">{props.msg}</div>
            <input type="submit" className="ui-button" value="Добавить" />
        </div>
    </form>
}
