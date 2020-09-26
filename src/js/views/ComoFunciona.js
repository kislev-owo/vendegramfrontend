import React, { useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const ComoFunciona = () => {

    return (

        <div className="container">
            <div className="jumbotron ml-5 mr-3 mt-3">
                <div className="text-center mb-2">
                    <button type="button" className="btn btn-light btn-sm btn-block border border-info rounded-pill">
                        <h3>¿Cómo funciona Vendegram?</h3>
                    </button>

                    <div className="mt-1">
                        <img src="..." class="img-fluid" alt="Responsive image"/>
                    </div>
                </div>    
            </div>
        </div>
    );

};