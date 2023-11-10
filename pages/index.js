import '../src/app/globals.css'
import BannerHeader from "../src/components/BannerHeader.js"
import "../src/components/styles.scss";
import Form from '@/components/Form';

const InputBox = () => {
    const inputBoxStyle = {
        padding: '10px',
        width: '420px',
        backgroundColor: 'white',
        display: 'grid',
        gridAutoFlow: 'row',
        gridColumnGap: '20px',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: "30px",
    }
    const titleStyle = {
        fontSize: '30px',
        paddingTop: '30px'
    }
    const plusDivStyle = {

        display: 'grid',
        gridAutoFlow: 'column',
        gridColumnGap: '20px',
    }

    

    return (
        <div style={inputBoxStyle}>
            <h1 style={titleStyle}>Simulador de Phishing</h1>
            <div style={plusDivStyle}>
                <img src="/plus.svg" style={{width: '50px', height: '50px',alignSelf: 'center',}}></img>
                <p style={{ fontSize: '20px', textAlign: 'start', alignSelf: 'center'}}>Envie um teste por whatsapp para conscientizar seus contatos sobre phishing</p>
            </div>
            <Form/>
            
            <p style={{alignSelf: 'end',}}>Esse site apenas simula um phishing com propósitos educacionais, não retemos dados e, portanto, não há riscos reais para os contatos</p>
        </div>
    );
};

const PhishingSimulatorPage = () => {
    const pageStyle = {
        paddingLeft: '100px',
        paddingTop: '50px',
        display: 'grid',
        gridAutoFlow: 'column',
        gridColumnGap: '20px',
    }


    return (
        <>
            <BannerHeader/>
            <div style={pageStyle}>
                <InputBox/>
                <img src="/ilustration1.webp" style={{width: '600px', height: '600px',}}></img>
            </div>
        </>
    )
}

export default PhishingSimulatorPage;