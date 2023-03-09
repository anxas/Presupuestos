import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import GraficaBarra from './GraficaBarra';
import GraficaTotal from './GraficaTotal';


const PruebaGrafica = () => {

    const { groupId } = useParams();


    const [dataGroup, setdataGroup] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/users/groups/${groupId}/amounts`);
            setdataGroup(res.data);
        }
        fetchData();
    }, [groupId]);

    // console.log(dataGroups);
    // const [totalDeuda, settotalDeuda] = useState(0)

    let totalDeuda = 0;

    // useEffect(() => {
    //     dataGroup.map(user => {
    //         if (user.debtAmount > 0) {
    //             settotalDeuda(Number(user.debtAmount) + Number(totalDeuda))
    //             console.log(totalDeuda)
    //         }
    //     })
    // }, [dataGroup])

    dataGroup.map(user => {
        if (user.debtAmount > 0) {
            totalDeuda = Number(user.debtAmount) + Number(totalDeuda)
        }
    })

    return (
        <DivGeneral>
            <h3>Gráficas</h3>

            <Flexbox>
                <div>

                </div>
                <div>
                    <GraficaTotal dataGroup={dataGroup} />
                </div>
                <div>
                    <div >
                        {dataGroup.map(user => (
                            <GraficaBarra user={user} totalDeuda={totalDeuda} />
                        ))}
                    </div>
                </div>
            </Flexbox>

        </DivGeneral>
    )
}

export default PruebaGrafica;

const Flexbox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`

const Graficas = styled.div`

            display: grid;
            grid-template-columns: 30% 30% 30%;
            grid-template-rows: 50% 50%;
            column-gap: 10px;
            row-gap: 15px;
            justify-items: stretch;
            width: 100%;
            height: auto;
            @media(max-width: 768px){
                grid-template-columns: 50% 50%;
    }`

const DivGeneral = styled.div`
            width: 68%;
            height: auto;
            @media(max-width: 768px){
                width: 100%;
      
    }
            `
const GridContainer = styled.div`
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;`

const canvasChart = styled.canvas`
            width: 99%;
            overflow: auto;
            position: relative;`