import React from 'react';


function CardHome(props) {
    return (    
            <div className="p-3 shadow-sm" style={{backgroundcolor : "#ffffff"}}>
                <div className="fs-6 fw-bold">{props.nama}</div>
                <p className="fw-light"><small><small>{props.satuan}</small></small></p>
                <div className="row">
                    <div className="col">
                        <div className="fs-4 fw-bold">{props.nilai}</div>
                    </div>
                    <div className="col ">
                        <div className="row align-intems-end">
                            <div className="col">
                                {props.icon}
                            </div>
                            <div className="col">
                                {
                                    props.status?
                                     props.status === "Naik"?
                                        <div className="fs-6 fw-bold text-success">Naik</div>
                                        :
                                        <div className="fs-6 fw-bold text-danger">Turun</div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CardHome;