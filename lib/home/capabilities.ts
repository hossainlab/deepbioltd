/**
 * Homepage capability grid — six flagship services, drawn from the catalogue.
 *
 * These `id` values must exist in lib/services/data.ts. Keeping them as ids
 * rather than free text is what stops the homepage drifting away from
 * /services the way the old hand-written twelve-item list did.
 *
 * The six chosen are the ones that ship a worked example, so every line here
 * is backed by a downloadable report.
 */

import { services } from '@/lib/services/data';

const FLAGSHIP_IDS = [
  'deseq2-rna-seq',
  'survival-analysis',
  'binder-design',
  'gene-regulatory-network',
  'polygenic-risk-score',
  'primer-design',
] as const;

export interface Capability {
  label: string;
  line: string;
}

export const capabilities: Capability[] = FLAGSHIP_IDS.map((id) => {
  const service = services.find((s) => s.id === id);
  if (!service) {
    throw new Error(`Unknown flagship service id: ${id}`);
  }
  return { label: service.title, line: service.description };
});
