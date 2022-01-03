import Coffee from "./Coffee";
import Header from "./Header";
import Menu from "./Menu";
import Specials from "./Specials";

const Home = () => {
    return (
        <article>
            <Header />
            <Specials />
            <Menu />
            <Coffee />
        </article>
    );
}
 
export default Home;