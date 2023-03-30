import { Header } from "modules/Header";

const HomePage: React.FC<any> = () => {
    const withHeader = true;
    return (
        <>
            {withHeader && <Header />}
            
        </>
        
    )
}

export { HomePage };
