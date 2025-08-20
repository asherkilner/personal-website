import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <Layout>
      <Header />
      <div className="space-y-20">
        <section id="about" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              I'm a software engineer with a passion for web development...
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              This website lmao
            </p>
          </div>
        </section>

        <section id="experience" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            {/* Experience timeline will go here */}
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 flex items-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            {/* Contact form will go here */}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
