import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 pb-8">
        <ProfileCard />
        <SkillsList />
      </div>
      <Footer />
    </div>
  );
}