"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/UI/accordion";
import React from "react";

export type FaqItem = { question: string; answer: string }
type FaqsProps = { items: FaqItem[]; jsonLd: unknown }

export function Faqs({ items, jsonLd }: FaqsProps) {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-3 sm:mt-36 animate-slide-in" aria-labelledby="faq-title">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div key="faq-title" className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="inline-block w-full scroll-my-24 py-2 pr-2 text-left text-2xl font-bold tracking-tighter text-secondary lg:text-3xl animate-slide-in"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            Can&rsquo;t find the answer you&rsquo;re looking for? Check out our{" "}
            <a
              href="https://docs.starknet.id/"
              className="font-medium text-primary hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>{" "}
            for more information.
          </p>
        </div>
        <div key="faq-items" className="col-span-full my-6 lg:col-span-7 lg:mt-0 animate-slide-in" style={{ animationDelay: "120ms" }}>
          <Accordion type="multiple" className="mx-auto text-secondary">
            {items.map((item, index) => (
              <div key={item.question}
              >
                <AccordionItem
                  value={item.question}
                  className="py-3 first:pb-3 first:pt-0"
                >
                  <AccordionTrigger className="text-secondary font-bold">
                    <strong><span className="w-full text-center sm:text-left text-secondary">
                      {item.question}
                    </span></strong>
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary font-normal">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
