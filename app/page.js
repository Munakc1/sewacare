
import SearchBar from './components/SearchBar';
import TopCards from './components/TopCards';
import ConsultOptions from './components/ConsultOptions';
import CardSection from './components/CardSection';
import TestimonialSlider from './components/TestimonialSlider';
import Download from './components/Download';

 // Adjust the path if needed

export default function Home({ children }) {
  return (
    <>
      
      <SearchBar />
      <TopCards />
      <ConsultOptions />
      <CardSection />
      <TestimonialSlider />
      <Download />
    

      
    </>
  );
}
