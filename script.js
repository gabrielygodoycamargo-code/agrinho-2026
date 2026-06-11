* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial Rounded MT Bold', sans-serif;
}

body {
    background: linear-gradient(135deg, #fef08a 0%, #ca8a04 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

h1 {
    color: #451a03;
    font-size: 26px;
    margin-bottom: 5px;
    text-shadow: 2px 2px 4px rgba(255,255,255,0.7);
    text-align: center;
}

.tag-agrinho {
    background: #16a34a;
    color: white;
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
    box-shadow: 0 5px 15px rgba(22, 163, 74, 0.4);
}

#moldura-geral {
    position: relative;
    padding: 15px;
    background: #78350f;
    background-image: radial-gradient(#eab308 20%, transparent 20%), radial-gradient(#eab308 20%, transparent 20%);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
    border: 6px solid #facc15;
    border-radius: 32px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

canvas {
    display: block;
    border-radius: 20px;
    border: 4px solid #451a03;
}

.painel-overlay {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 850px;
    height: 500px;
    background: rgba(43, 13, 3, 0.96);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 40px;
    z-index: 40;
    border: 3px solid #facc15;
}

.painel-overlay h2 {
    font-size: 36px;
    color: #facc15;
    margin-bottom: 20px;
    text-shadow: 0 4px 10px rgba(0,0,0,0.6);
}

.painel-overlay p {
    font-size: 17px;
    line-height: 1.6;
    max-width: 650px;
    margin-bottom: 30px;
    color: #fef9c3;
}

.btn-principal {
    background: linear-gradient(to bottom, #facc15, #eab308);
    color: #451a03;
    border: 3px solid #78350f;
    padding: 14px 45px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 6px 0px #78350f, 0 10px 25px rgba(0,0,0,0.4);
    transition: 0.1s;
}

.btn-principal:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 0px #78350f;
}

.btn-principal:active {
    transform: translateY(4px);
    box-shadow: 0 2px 0px #78350f;
}

#btn-mutar {
    position: absolute;
    top: 75px;
    left: 30px;
    z-index: 50;
    font-size: 14px;
    padding: 6px 15px;
    background: #451a03;
    color: #facc15;
    border: 2px solid #facc15;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 0px #2b0d03;
}

#btn-mutar:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0px #2b0d03;
}

.escondido { 
    display: none !important; 
}
