import React, { useState, useEffect } from 'react';
import { fetchMenuData } from './components/sheetbestService';
import Header from './components/header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [menuData, setMenuData] = useState({ sections: [], lastUpdated: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMenuData();
      setMenuData(data);
      if (data.sections.length > 0) {
        setActiveCategory(data.sections[0].id);
      }
    } catch (error) {
      console.error('Erro ao carregar cardápio:', error);
      setError('Erro ao carregar o cardápio. Tente recarregar a página.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading && menuData.sections.length === 0) {
    return <div className="loading">Carregando cardápio...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={loadData}>Tentar novamente</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      <div class="titulo-categoria">
      <h1>Selecione por categoria:</h1>
      </div>
      {/* Carrossel de Categorias */}
      <div className="categories-container">
        <div className="categories-scroller">
          {menuData.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`category-item ${activeCategory === section.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory(section.id);
                scrollToCategory(section.id);
              }}
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>

      <main>
        {menuData.sections.map((section) => (
          <MenuSection 
            key={section.id}
            id={section.id}
            title={section.name}
            items={section.items}
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;