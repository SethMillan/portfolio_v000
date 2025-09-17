export const Nave = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* Contenedor de partículas de polvo espacial */}
      <div className=" transform -translate-x-1/2 -translate-y-10">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Nave rotada hacia abajo */}
      <img
        src="/icons/nave.png"
        alt="nave"
        className="nave w-60 transform rotate-180 -mt-12 nave"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
        }}
      />

      <style>{`
        .nave{
            animation: float 3s ease-in-out infinite;    
        }
        @keyframes float {
            0%   { transform: translateY(0) ;}
            50%  { transform: translateY(-20px) ;}
            100% { transform: translateY(0) ;}
        }
        .particle {
            position: absolute;
            width: 12px;
            height: 12px;
            background: black;
            border-radius: 50%;
            animation: float-up 2s infinite ease-out;
        }
        
        .particle-1 {
            left: -20px;
            width: 8px;
            height: 8px;
            background: gray;
            animation-delay: 0s;
            animation-duration: 2s;
        }
        
        .particle-2 {
            left: -10px;
            width: 10px;
            height: 10px;
            background: darkgray;
            animation-delay: 0.5s;
            animation-duration: 1.5s;
        }
        
        .particle-3 {
            left: 0px;
            width: 12px;
            height: 12px;
            background: lightgray;
            animation-delay: 0.8s;
            animation-duration: 2.5s;
        }
            .particle-4 {
            left: -12px;
            width: 4px;
            height: 4px;
            background: darkgray;
            animation-delay: 0.5s;
            animation-duration: 2.5s;
        }
            .particle-5 {
            left: 0px;
            width: 6px;
            height: 6px;
            background: gray;
            animation-delay: 0.8s;
            animation-duration: 1.5s;
        }
        
       
        @keyframes float-up {
          0% {
            transform: translateY(20px) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-30px) scale(0.8);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-90px) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
