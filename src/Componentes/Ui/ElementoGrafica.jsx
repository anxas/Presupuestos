import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Legend } from 'chart.js'
import { useState } from "react";

const Elementografica = ({ dataUser, totalDeuda }) => {

    //SACAMOS LAS VARIABLES

    let saldo = 0;
    let deuda = 0;
    let bordeSaldo = "rgb(255, 255, 255, 0)";
    let bordeDeuda = "rgb(255, 255, 255, 0)";

    if (dataUser.debtAmount > 0) {
        saldo = dataUser.debtAmount
        bordeSaldo = "#0fc359";
        bordeDeuda = "white";
    } else if (dataUser.debtAmount < 0) {
        deuda = dataUser.debtAmount
        bordeDeuda = "#C30F79";
        bordeSaldo = "white";
    }

    let totalSaldo = Number(totalDeuda) - saldo;
    let totalResto = Number(totalDeuda) - (-deuda);

    //ESTABLECEMOS LOS DATOS ORIGINALES. LABELS Y DATASETS

    console.log(ChartJS);

    const [userData, setUserData] = useState({
        labels: [`A favor: ${saldo} €`, `Total: ${totalDeuda} €`, `Deuda: ${totalDeuda} €`, `Debe: ${deuda} €`],
        datasets: [{
            data: [saldo, totalSaldo, totalResto, deuda],
            backgroundColor: ["#0fc35ab5",
                "rgb(255, 255, 255, 0)",
                "rgb(255, 255, 255, 0)",
                "#C30F79b5"],
            borderColor: ["#0fc359",
                bordeSaldo,
                bordeDeuda,
                "#C30F79"],
            borderWidth: 3,
            rotation: -90,
            circumference: 360,
        },

        ],
    });

    //OPCIONES

    ChartJS.register(Legend)

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `${dataUser.player}`,
            },
        },
    };


    return (

        <Doughnut data={userData} options={options} />

    )
}

export default Elementografica