import React, { useEffect, useState } from 'react';

interface PurchaseStepProps {
  stepNumber: number;
  title: string;
  description: string;
  image: string;
}

const PurchaseStepCard: React.FC<PurchaseStepProps> = ({ stepNumber, title, description, image }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Triggering the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`purchase-step-card card border-0 shadow mb-4 ${isVisible ? 'fade-in' : ''}`} style={{ borderRadius: '15px', background: '#F8F9FA', overflow: 'hidden' }}>
      <div className="position-relative">
        <img src={image} className="card-img-top rounded-top" alt={`Langkah ${stepNumber}`} style={{ height: '200px', objectFit: 'contain', borderRadius: '15px 15px 0 0', width: '100%' }} />
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-primary rounded-pill">Langkah {stepNumber}</span>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default PurchaseStepCard;
