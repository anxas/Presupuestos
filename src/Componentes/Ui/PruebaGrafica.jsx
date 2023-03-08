//IMPORTACIÓN DE LA DATA DE PRUEBA
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { UserData } from '../../PruebaDataChart';
import Elementografica from './ElementoGrafica';

const GridContainer = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;`

const PruebaGrafica = () => {

    const { groupId } = useParams();


    const [dataGroups, setdataGroups] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/users/groups/${groupId}/amounts`);
            setdataGroups(res.data);
        }
        fetchData();
    }, [groupId]);

    console.log(dataGroups);

    let totalDeuda = 0;

    dataGroups.map(user => {
        if (user.debtAmount > 0) {
            totalDeuda = Number(user.debtAmount) + Number(totalDeuda)
            console.log(totalDeuda)
        }
    })
    console.log(totalDeuda)
    console.log(dataGroups)

    return (
        <DivGeneral>
                <h3>Gráficas</h3>
            
        <Graficas>
            
            {/* <GridContainer> */}
            {dataGroups.map(user => (
                < div >
                    <Elementografica dataUser={user} totalDeuda={totalDeuda} />
                </div >
            ))}
            {/* </GridContainer> */}
        </Graficas>
        </DivGeneral>
    )
}

export default PruebaGrafica;

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
      
    }

`

const DivGeneral = styled.div`
    width: 68%;
    height: auto;
    @media(max-width: 768px){
      width: 100%;
      
    }
`