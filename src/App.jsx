import './App.css'
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (
    <div className="App">

        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={17}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#04 - Repeticao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componentes Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componentes Com Parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo"></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

        {/**/}


        {/*<Primeiro></Primeiro>
    
    <ComParametro titulo="opa" subtitulo="epa"></ComParametro>*/}
    </div>
);