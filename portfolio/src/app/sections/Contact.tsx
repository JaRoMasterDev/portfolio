"use client";

import Link from "next/link";

export default function Contact() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "d94cadf8-ee3d-4dd9-b732-18afdb29c704",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section id="contact" className="w-full pb-48">
      <h2 className="text-3xl mb-2">Contact</h2>
      <p>
        If you want to get in touch with me, feel free to send me an email at{" "}
        <Link href="mailto:contact@jarne-rolf.de" className="text-primary">
          contact@jarne-rolf.de
        </Link>{" "}
        or use the contact form below.
      </p>
      <form
        className="flex flex-col gap-4 mt-16 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:border-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:border-2"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="p-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:border-2"
          required
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-md">
          Send
        </button>
      </form>
    </section>
  );
}
