import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function Data(props) {
    const [report, setReport] = useState(null);
    let arr = [];
    let nomor = 1;
    function getData(week = 1) {
        axios.get(`https://api.kampusmerdeka.kemdikbud.go.id/studi/report/perweek/${props.id}/${week}`, {
            headers: {
                Authorization: 'Bearer ' + props.token //the token is a variable which holds the token
            }
        }).then(res => {
            arr.push(res.data.data);
            getData(week + 1);
        }).catch(error => {
            setReport(arr);
            console.log(report);
        })
    }
    useEffect(() => {
        if (report === null) {
            getData();
        }
    }, []);

    return (
        <div>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="daily"
                filename="daily-report"
                sheet="tablexls"
                buttonText="Download Daily Report"
            /> <>    </>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="weekly"
                filename="weekly-report"
                sheet="tablexls"
                buttonText="Download Weekly Report"
            />
            {report ? <></> : <>Loading...</>}
            <table className="table" id='daily'>
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Report</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report ? report.map((value) => (
                            <>
                                {
                                    value.daily_report.map((value2) => (
                                        <tr>
                                            <th scope="row">{nomor++}</th>
                                            <td>{value2.report_date.split('T')[0].split('-')[2] + '/' + value2.report_date.split('T')[0].split('-')[1] + '/' + value2.report_date.split('T')[0].split('-')[0]}</td>
                                            <td>{value2.report}</td>
                                        </tr>
                                    ))
                                }</>
                        )) : <></>
                    }
                </tbody>
            </table>

            <br />
            <br />
            <br />
            <div className="fs-4 fw-bold">Laporan Mingguan</div>
            <br />
            <br />
            <br />

            <table className="table" id='weekly'>
                <thead>
                    <tr>
                        <th scope="col">Minggu</th>
                        <th scope="col">Report</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report ? report.map((value) => (
                            <tr>
                                <th scope="row">{value.counter}</th>
                                <td>{value.learned_weekly}</td>
                                <td>{value.status}</td>
                            </tr>
                        )) : <></>
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Data;