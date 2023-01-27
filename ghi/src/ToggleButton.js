import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState } from "react";

export default function ToggleButton(props) {
    const { selected, toggleSelected } = props;

    return (
        <div className="toggle-container" onClick={toggleSelected}>
            <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                {selected ? "☀️" : "🌙"}
            </div>
        </div>
    );
}

ToggleButton.propTypes = {
    selected: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func.isRequired,
};
