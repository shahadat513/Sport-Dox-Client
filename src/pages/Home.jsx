import Banner from "../components/Banner";
import Faq from "../components/Faq";
import OurServices from "../components/OurServices";
import HomeCard from "../components/HomeCard";
import Categories from "../components/Categories";

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <HomeCard></HomeCard>
        <Categories></Categories>
        <OurServices></OurServices>
        <Faq></Faq>
        </>
    );
}

export default Home;
