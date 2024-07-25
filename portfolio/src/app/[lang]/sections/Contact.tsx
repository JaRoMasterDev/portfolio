"use client";

import Link from "next/link";
import { Dictionary } from "@/get-dictionary";
import { insertElement } from "@/insertElement";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
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
      <h2 className="text-3xl mb-2">{dict.contact}</h2>
      <p>
        {insertElement(dict.description, {
          email: (
            <Link
              href="mailto:contact@jarne-rolf.de"
              className="text-primary"
              key="link"
            >
              contact@jarne-rolf.de
            </Link>
          ),
        })}
      </p>
      <form
        className="flex flex-col gap-4 mt-16 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder={dict.name}
          className="p-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:border-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={dict.email}
          className="p-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:border-2"
          required
        />
        <textarea
          name="message"
          placeholder={dict.message}
          rows={4}
          className="p-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:border-2"
          required
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-md">
          {dict.send}
        </button>
      </form>
    </section>
  );
}
