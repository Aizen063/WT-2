import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Header</h1>
      </header>

      <div className="flex flex-1">
       
        <aside className="bg-gray-200 w-64 p-4">
          <h2 className="text-lg font-semibold mb-2">Sidebar</h2>
          <ul>
            <li className="mb-2">Link 1</li>
            <li className="mb-2">Link 2</li>
            <li className="mb-2">Link 3</li>
          </ul>
        </aside>

       
        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Main Content</h2>
          <p>
            This is the main content area. You can add more components or content here.
          </p>
        </main>
      </div>

     
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>Footer &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
