import React from "react";

const Inscription = () => {
    return (
        <form className=" m-20 max-w-xl mx-auto bg-white p-8 rounded shadow" encType="multipart/form-data">
        <h2 className="text-2xl font-bold mb-6 text-center">Inscription à la plateforme</h2>

        {/* Infos personnelles */}
        <div className="mb-4">
            <label htmlFor="nom" className="block mb-1 font-semibold">Nom :</label>
            <input type="text" id="nom" name="nom" required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="prenom" className="block mb-1 font-semibold">Prénom :</label>
            <input type="text" id="prenom" name="prenom" required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="sexe" className="block mb-1 font-semibold">Sexe :</label>
            <select id="sexe" name="sexe" required className="w-full border rounded px-3 py-2">
            <option value="">-- Sélectionner --</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="telephone" className="block mb-1 font-semibold">Numéro de téléphone :</label>
            <input type="tel" id="telephone" name="telephone" className="w-full border rounded px-3 py-2" />
        </div>

        <hr className="my-6" />

        {/* Connexion */}
        <div className="mb-4">
            <label htmlFor="username" className="block mb-1 font-semibold">Nom d’utilisateur :</label>
            <input type="text" id="username" name="username" required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">Adresse e-mail :</label>
            <input type="email" id="email" name="email" required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">Mot de passe :</label>
            <input type="password" id="password" name="password" required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="confirm-password" className="block mb-1 font-semibold">Confirmer le mot de passe :</label>
            <input type="password" id="confirm-password" name="confirm-password" required className="w-full border rounded px-3 py-2" />
        </div>

        {/* Infos scolaires */}
        <div className="mb-4">
            <label htmlFor="etablissement" className="block mb-1 font-semibold">Établissement :</label>
            <input type="text" id="etablissement" name="etablissement" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
            <label htmlFor="filiere" className="block mb-1 font-semibold">Filière / Série :</label>
            <input type="text" id="filiere" name="filiere" className="w-full border rounded px-3 py-2" />
        </div>

        <hr className="my-6" />

        {/* Autres */}
        <div className="mb-4">
            <label htmlFor="statut" className="block mb-1 font-semibold">Statut :</label>
            <select id="statut" name="statut" className="w-full border rounded px-3 py-2">
            <option value="eleve">Élève</option>
            <option value="etudiant">Étudiant</option>
            <option value="enseignant">Enseignant</option>
            <option value="parent">Parent</option>
            </select>
        </div>

        <hr className="my-6" />

        {/* Consentements */}
        <div className="mb-4 flex items-center">
            <input type="checkbox" id="cgu" name="cgu" required className="mr-2" />
            <label htmlFor="cgu">
            J’accepte les <a href="/cgu" target="_blank" className="text-blue-600 underline">conditions d’utilisation</a>
            </label>
        </div>
        <div className="mb-6 flex items-center">
            <input type="checkbox" id="newsletter" name="newsletter" className="mr-2" />
            <label htmlFor="newsletter">
            Je souhaite recevoir des mails pédagogiques
            </label>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            S'inscrire
        </button>
        </form>
    );
};

export default Inscription;