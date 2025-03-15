// components/faq-section/faq-accordion.tsx
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Container } from '@/components/ui/container';
import { fetchFaqData } from '@/lib/api/faq';

export function Faq() {
  const faqItems = fetchFaqData();

  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-muted mb-6">
            <span className="text-amber-500 mr-2">✦</span>
            <span className="font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Find answers to common questions about our services.
          </h2>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="flex justify-between py-5 text-left">
                  <div className="flex items-start gap-4">
                    <span className="text-muted-foreground font-medium">{item.index}</span>
                    <span className="font-medium text-foreground">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12 md:pl-16">
                  <div className="pt-2 pb-4">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}