import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ id, title, items }) => {
  // Filtra apenas itens disponíveis
  const availableItems = items.filter(item => item.available);
  
  return (
    <section 
      id={id}
      style={{ 
        marginBottom: '40px',
        padding: '20px',
        scrollMarginTop: '100px'
      }}
    >
      <h2 style={{
        color: 'black',
        borderBottom: '2px solid #f86100',
        paddingBottom: '5px',
        marginTop: '10px'
      }}>{title}</h2>
      
      {availableItems.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {availableItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p style={{ fontStyle: 'italic', marginTop: '20px' }}>
          Nenhum item disponível nesta categoria no momento.
        </p>
      )}
    </section>
  );
};

export default MenuSection;