import axios from 'axios';

const API_URL = 'https://api.sheetbest.com/sheets/c35fe547-ddfe-4550-8dc1-28692fad6971';

export const fetchMenuData = async () => {
  try {
    const response = await axios.get(API_URL);
    return transformMenuData(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};

const transformMenuData = (rawData) => {
  const sectionsMap = {};
  
  rawData.forEach(item => {
    if (!item.categoria) return;
    
    const category = item.categoria.toString().trim();
    if (!category) return;

    if (!sectionsMap[category]) {
      sectionsMap[category] = {
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category,
        items: []
      };
    }
    
    // Verifica se a disponibilidade está preenchida corretamente
    const isAvailable = item.disponibilidade && item.disponibilidade.toString().trim().toLowerCase() === 'sim';
    
    sectionsMap[category].items.push({
      id: item.id,
      name: item.nome,
      description: item.descrição,
      price: parseFloat(item.preço) || 0,
      image: item.imagem ? item.imagem.trim() : null,
      available: isAvailable
    });
  });
  
  return {
    sections: Object.values(sectionsMap),
    lastUpdated: new Date().toISOString()
  };
};