function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-200">
      <main className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        {/* Cabeçalho */}
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-bold text-yellow-900 mb-2">
            Café da Vila
          </h1>
          <span className="block text-yellow-700 font-semibold tracking-widest">
            Seu cantinho de sabor e aconchego
          </span>
        </header>
        {/* Imagem ilustrativa */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Café da Vila"
          className="w-40 h-40 object-cover rounded-full shadow-md mb-6"
        />
        {/* Descrição */}
        <p className="text-center text-gray-700 mb-8">
          O Café da Vila é o lugar perfeito para relaxar, trabalhar ou encontrar
          amigos. Experimente cafés especiais, doces caseiros e um atendimento
          acolhedor no coração da cidade!
        </p>
        {/* Botão de ação */}
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition duration-200"
        >
          Fazer Pedido
        </a>
      </main>
    </div>
  );
}

export default App;
