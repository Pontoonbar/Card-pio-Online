import React from 'react';
import { FaImage } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  // Não renderiza nada se o item não estiver disponível
  if (!item.available) {
    return null;
  }

  return (
    <div className="menu-item">
      {/* Mostra container de imagem apenas se existir imagem */}
      {item.image && (
        <div className="item-image-container">
          <img 
            src={item.image}
            alt={item.name}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            loading="lazy"
            className="item-image"
          />
        </div>
      )}

      {/* Detalhes do item (sempre visíveis para itens disponíveis) */}
      <div className="item-details">
        <h3>{item.name}</h3>
        {item.description && <p className="description">{item.description}</p>}
        <p className="price">
          {item.price.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
          })}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;