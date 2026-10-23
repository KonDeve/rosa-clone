'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as [number, number, number, number];
const CLIENTS = [
  { name: 'Alternate Studio', category: 'Creative Studio', year: '2023' },
  { name: 'Remarkable', category: 'Agency', year: '2022' },
  { name: 'Form', category: 'Architects', year: '2022' },
  { name: 'Konsult', category: 'Consultancy', year: '2022' },
  { name: 'Two', category: '3D Studio', year: '2021' },
  { name: 'Something', category: 'Creative Studio', year: '2021' },
] as const;

/*
 * Reference: .section.last-section -> "Clients" heading reveal (1.75s),
 * "Valued partnerships" label + 8-column list items fade in bottom (2s).
 */
export default function ClientsSection() {
  return (
    <section className="section last-section">
      <div className="container">
        <div className="w-layout-grid _12-column-grid">
          <div className="large-heading-wrap cell-clients-heading">
            <div className="heading-line-wrap">
              <motion.p
                className="large-heading"
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.75, ease: EASE_OUT_EXPO }}
              >
                Clients
              </motion.p>
            </div>
          </div>

          <div className="cell-clients-label">Valued partnerships</div>

          <div className="list cell-clients-list">
            {CLIENTS.map((client) => (
              <motion.div
                key={client.name}
                className="clients-list-item"
                initial={{ y: '5rem', opacity: 0 }}
                whileInView={{ y: '0rem', opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: EASE_OUT_EXPO }}
              >
                <p className="client-name">{client.name}</p>
                <p className="client-category">{client.category}</p>
                <p className="client-year">{client.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
