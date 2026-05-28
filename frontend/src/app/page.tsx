"use client";

import { useState, useEffect } from "react";

interface UrlItem {
  id: number;
  url: string;
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState<UrlItem[]>([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchUrls = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/urls");
      if (res.ok) {
        const data = await res.json();
        setUrls(data);
      }
    } catch (err) {
      console.error("Failed to fetch URLs", err);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Simple URL validation
    try {
      new URL(url);
    } catch (_) {
      setError("Veuillez entrer une URL valide (ex: https://example.com)");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (res.ok) {
        setMessage("URL ajoutée avec succès !");
        setUrl("");
        fetchUrls();
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Erreur lors de l'ajout de l'URL");
      }
    } catch (err) {
      setError("Erreur de connexion au backend");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">Gestionnaire d'URLs</h1>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Entrez une URL
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://google.com"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Ajouter l'URL
          </button>
        </form>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">URLs enregistrées</h2>
        {urls.length === 0 ? (
          <p className="text-gray-500">Aucune URL trouvée.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {urls.map((item) => (
              <li key={item.id} className="py-3 flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600 truncate max-w-xs sm:max-w-md">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.url}
                  </a>
                </span>
                <span className="text-xs text-gray-400">ID: {item.id}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
