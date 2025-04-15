import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Sobre from "../../components/sobre/sobre";
import Funcionalidade from "../../components/funcionalidades/funcionalidades";
import Equipe from "../../components/equipe/equipe";
import Footer from "../../components/footer/footer";

function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div><Header /></div>
            <div><Sobre /></div>
            <div><Funcionalidade /></div>
            <div><Equipe /></div>
            <div><Footer /></div>
        </div>
    );
}


export default Home;