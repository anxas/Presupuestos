import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Legend } from 'chart.js'
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
        labels: [`A favor: ${saldo} €`, `Total: ${totalDeuda} €`, `Deuda: ${totalDeuda} €`, `Debe: ${deuda} €`],
        datasets: [{
            label: '',
            data: [saldo, totalSaldo, totalResto, deuda],
            backgroundColor: ["#0fc359",
                "rgb(255, 255, 255, 0)",
                "rgb(255, 255, 255, 0)",
                "#C30F79"],
            borderColor: "black",
            borderWidth: 1,
            rotation: -90,
            circumference: 360,
        },

        ],
    });

    //OPCIONES

    ChartJS.register(Legend)

    const options = {
        responsive: true,
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
        <div>
            <Pie data={userData} options={options} />
        </div>
    )
}

export default Elementografica