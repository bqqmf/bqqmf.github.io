import {useEffect, useState} from "react";

export default function ProductCard({ image, title, names }) {
    const [isOpen, setIsOpen] = useState(false);

    // 모달 열릴 때 body 스크롤 막기
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    })
    return (
        <>
        {/* 카드 */}
        <div className="product-card">
            <img 
                src={image} 
                alt={title} 
                className="product-img" 
                onClick={() => setIsOpen(true)}
            />
            <h3 className="product-title">{title}</h3>
            <div className="product-names">
                {names.map((n, i) => (
                    <p key={i} className="product-name">{n}</p>
                ))}
            </div>
        </div>

        {/* 카드 */}
            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={image} alt={title} className="modal-img" />
                        <h2>{title}</h2>
                        <p>{names.join(", ")}</p>
                    </div>

                </div>
            )}
        </>
    );
}
