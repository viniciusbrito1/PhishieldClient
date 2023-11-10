import Image from "next/image"
import Link from "next/link"

export default function BannerHeader(){
    let linkDecoration={
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.3vw'
    }
    
        return(
        <div>
            <divImagem>
                <Image
                    src="/logoDourada.png"
                    width={0}
                    height={0}
                    sizes="(max-width: 600px) 15vw , 6.5vw"
                    style={{ width: '70%', height: 'auto' }}
                />
            </divImagem>
                
            <divLinks>
                <Link href={"/"} style={linkDecoration}>Quem somos</Link>
                <Link href={"/"} style={linkDecoration}>Portal Educativo</Link>
                <Link href={"/"} style={linkDecoration}>Simulador Phishing</Link>
            </divLinks>
            <style jsx>{`
                *{
                    top: 0;
                    position: sticky;
                    z-index: 2;
                    height: fit-content;
                    background-color: black;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0.4vw;
                    align-items: center;
                    /*opacity: 0.95;*/
                }
                divImagem{
                    padding-left: 9vw;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                divLinks{
                    padding-right: 9vw;
                    color: white;
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    gap: 3vw;
                    font-family: Inter; 
                }
                #Link{
                    text-decoration: none;
                    

                }
            `}</style>
            
        </div>
    )
}