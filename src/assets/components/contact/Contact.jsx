import React from "react";

const Contact = () => {
    return (
        <section className="max-w-xl mx-auto my-10 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h2>
        <form>
            <div className="mb-4">
            <label htmlFor="nom" className="block mb-1 font-semibold">Nom :</label>
            <input type="text" id="nom" name="nom" required className="w-full border rounded px-3 py-2" />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">Email :</label>
            <input type="email" id="email" name="email" required className="w-full border rounded px-3 py-2" />
            </div>
            <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-semibold">Message :</label>
            <textarea id="message" name="message" required className="w-full border rounded px-3 py-2" rows="5"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Envoyer
            </button>
        </form>
        </section>
    );
};

export default Contact;