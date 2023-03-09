import { useEffect, useState } from "react";
import styled from "styled-components"

const GraficaBarra = ({ user, totalDeuda }) => {

    const [saldocolor, setsaldocolor] = useState('');

    useEffect(() => {

        if (user.debtAmount > 0) {
            setsaldocolor('#0fc359')
        } else if (user.debtAmount < 0) {
            setsaldocolor('#C30F79');
        } else {
            setsaldocolor(' #ffffff0');
        }
    }, [user, totalDeuda]);

    const [saldopercent, setsaldopercent] = useState(0);

    useEffect(() => {
        if (user.debtAmount > 0) {
            setsaldopercent((Number(user.debtAmount) / Number(totalDeuda)) * 100);
        } else if (user.debtAmount < 0) {
            setsaldopercent(((Number(user.debtAmount) * -1) / Number(totalDeuda)) * 100);
        } else {
            setsaldopercent(0);
        }
    }, [user, totalDeuda])

    const [namelength, setnamelength] = useState('translate(-9rem, -0.8rem)');

    useEffect(() => {
        if (user.player.length > 15) {
            setnamelength('translate(-11rem, -0.8rem)')
        } else if (user.player.length > 13) {
            setnamelength('translate(-10rem, -0.8rem)')
        } else if (user.player.length < 7) {
            setnamelength('translate(-5rem, -0.8rem)')
        }
    }, [user, totalDeuda])

    const Barra = styled.div`
         height: 40px;
         width: 200px;
         background-color: #5e5d5d;
         border-radius: 50px;
         margin-bottom: 20px;
         overflow: hidden;`

    const Saldo = styled.div`
     height: 100%;
     width: ${saldopercent}%;
     border-radius: 40px;
     background-color: ${saldocolor};
`

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
        }}>
            <h3
                style={{ position: 'absolute', transform: namelength }}
            >
                {user.player}</h3>
            <Barra>
                <Saldo />

            </Barra>
        </div>
    )

}

export default GraficaBarra