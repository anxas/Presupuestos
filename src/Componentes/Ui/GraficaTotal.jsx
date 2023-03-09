import { Doughnut, } from "react-chartjs-2";
import { Chart as ChartJS, Legend, ArcElement, Tooltip } from 'chart.js'
import { useEffect, useState } from "react";
import Values from 'values.js'

ChartJS.register(ArcElement);
ChartJS.register(Tooltip)

const GraficaTotal = ({ dataGroup }) => {



    const [debtors, setdebtors] = useState([]);

    useEffect(() => {
        setdebtors(dataGroup.filter(data => data.debtAmount < 0))
    }, [dataGroup])

    const [debtorsnames, setdebtorsnames] = useState([])

    useEffect(() => {
        setdebtorsnames(debtors.sort((prev, curr) => prev.debtAmount + curr.debtAmount).map(debtor => debtor.player))
    }, [debtors])

    const [debtorsamount, setdebtorsamount] = useState([])

    useEffect(() => {
        setdebtorsamount(debtors.sort((prev, curr) => prev.debtAmount + curr.debtAmount).map(debtor => debtor.debtAmount))
    }, [debtors])

    const [payers, setpayers] = useState([]);

    useEffect(() => {
        setpayers(dataGroup.filter(data => data.debtAmount > 0))
    }, [dataGroup])

    const [payersnames, setpayersnames] = useState([])

    useEffect(() => {
        setpayersnames(payers.sort((prev, curr) => prev.debtAmount + curr.debtAmount).map(payer => payer.player))
    }, [payers])

    const [payersamount, setpayersamount] = useState([])

    useEffect(() => {
        setpayersamount(payers.sort((prev, curr) => prev.debtAmount + curr.debtAmount).map(payer => payer.debtAmount))
    }, [payers])

    let labels = payersnames.concat(debtorsnames);

   

    let datalist = payersamount.concat(debtorsamount);

    // useEffect(() => {
    //     setdatas(dataGroup.map(user => user.debtAmount))
    // }, [dataGroup])

    // console.log(datas)

    // const [debtors, setdebtors] = useState([]);

    // const [payers, setpayers] = useState([])

    // useEffect(() => {
    //     setdebtors(datas.filter(data => data < 0).sort((prev, curr) => prev.debtAmount + curr.debtAmount))
    // }, [datas]);

    // useEffect(() => {
    //     setpayers(datas.filter(data => data > 0).sort((prev, curr) => prev.debtAmount - curr.debtAmount))
    // }, [datas]);

    // let datalist = [payers.concat(debtors)]





    // const [labels, setlabels] = useState([]);

    // useEffect(() => {
    //     setlabels(dataGroup.sort((prev, curr) => prev.debtAmount - curr.debtAmount).map(user => user.player))
    // }, [dataGroup]);

    // const [datas, setdatas] = useState([]);

    // useEffect(() => {
    //     setdatas(dataGroup.sort((prev, curr) => prev.debtAmount + curr.debtAmount).map(user => user.debtAmount))
    // }, [dataGroup])

    // const [debtors, setdebtors] = useState([]);

    // const [payers, setpayers] = useState([])

    // useEffect(() => {
    //     setdebtors(datas.filter(data => data < 0))
    // }, [datas])

    // useEffect(() => {
    //     setpayers(datas.filter(data => data > 0))
    // }, [datas])



    const colorsdebtList = new Values("#C30F79").all(15).splice(3, debtors.length);
    const colorsdebt = colorsdebtList.map(color => color.rgb);

    const colorsdebttratado = colorsdebt.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`)

    const colorspayList = new Values("#0fc359").all(15).splice(3, payers.length);
    const colorspay = colorspayList.map(color => color.rgb)

    const colorspaytratado = colorspay.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`)

    let colorlist = [colorspaytratado.concat(colorsdebttratado)]
    console.log(labels)

    const Data = {
        labels: labels,
        datasets: [{
            data: datalist,
            backgroundColor: colorlist[0],
            borderColor: ["#5e5d5d"],
            borderWidth: 3,
            rotation: -90,
            circumference: 360,
        },

        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        }
    }

    return (
        <Doughnut data={Data} options={options} />
    )

}

export default GraficaTotal