import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { useState } from "react";

const Elementografica = ({ dataUser, totalDeuda }) => {

    //SACAMOS LAS VARIABLES

    let saldo = 0;
    let deuda = 0;

    if (dataUser.debtAmount > 0) {
        saldo = dataUser.debtAmount
    } else if (dataUser.debtAmount < 0) {
        deuda = dataUser.debtAmount
    }

    let totalSaldo = Number(totalDeuda) - saldo;
    let totalResto = Number(totalDeuda) - (-deuda);

    //ESTABLECEMOS LOS DATOS ORIGINALES. LABELS Y DATASETS

    const [userData, setUserData] = useState({

        datasets: [{
            label: "",
            data: [saldo, totalSaldo, totalResto, deuda],
            backgroundColor: ["green",
                "rgb(255, 255, 255, 0)",
                "rgb(255, 255, 255, 0)",
                "red"],
            borderColor: "black",
            borderWidth: 1,
            rotation: -90,
            circumference: 360,
        },
        ],
    });


    return (
        <div>
            <Pie data={userData} />
        </div>
    )
}

export default Elementografica