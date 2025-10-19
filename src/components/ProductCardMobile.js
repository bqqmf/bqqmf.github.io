// ProductCardMobile.js
export default function ProductCardMobile({ image, title, names }) {
  return (
    <div className="mobile-product-card">
      <img src={image} alt={title} className="mobile-product-img" />
      <h3 className="mobile-product-title">{title}</h3>
      <div className="mobile-product-names">
        {names.map((n, i) => (
          <p key={i} className="mobile-product-name">
            {n}
          </p>
        ))}
      </div>
    </div>
  );
}
