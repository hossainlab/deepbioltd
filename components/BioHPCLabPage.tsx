'use client';

import React, { useState } from 'react';
import {
  Server,
  Database,
  Zap,
  Shield,
  Globe,
  Users,
  Terminal,
  Network,
  Cpu,
  Activity,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Globe2,
  Lock,
  ArrowRight,
  PieChart,
  Lightbulb,
  Building2,
  Coins,
  Rocket,
  ShieldCheck,
  Scale,
  Microscope,
  FlaskConical,
  Dna,
  Brain,
  Sprout,
  Atom,
  Link2,
  Move,
  MemoryStick,
  HardDrive,
  Fan,
  Box,
  Cable,
  ChevronDown,
  ChevronUp,
  Info,
  Mail,
  Monitor,
  Package,
  DollarSign,
  Star,
  Crown
} from 'lucide-react';
import Image from 'next/image';
import { PHASES } from '@/lib/biohpc/data';

// ─── Infrastructure Constants ────────────────────────────────────────────────

const EXCHANGE_RATE = 122.75;
const BUDGET_PER_UNIT_BDT = 500000;
const BUDGET_PER_UNIT_USD = Math.round(BUDGET_PER_UNIT_BDT / EXCHANGE_RATE);
const MAX_INVESTORS_PER_UNIT = 5;
const MIN_INVESTMENT_USD = Math.ceil(BUDGET_PER_UNIT_USD / MAX_INVESTORS_PER_UNIT);
const TOTAL_UNITS = 4;

interface InfraComponent {
  category: string;
  model: string;
  spec: string;
  price: number;
  reason: string;
}

interface NodeBuild {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  components: InfraComponent[];
  importDuty: number;
  shippingAssembly: number;
  investorsNeeded: number;
  investorsFunded: number;
  status: 'seeking' | 'funded' | 'deployed';
}

const baseComponents: Omit<InfraComponent, 'reason'>[] = [
  { category: 'Processor', model: 'AMD Ryzen Threadripper 7970X', spec: '32 Cores / 64 Threads, 5.3 GHz Boost, Zen 4, 350W TDP', price: 1499 },
  { category: 'Motherboard', model: 'ASUS ProArt X670E-Creator WiFi', spec: '4x DDR5, 3x M.2 NVMe, PCIe 5.0, 10GbE LAN, Thunderbolt 4', price: 350 },
  { category: 'Memory', model: 'G.Skill Flare X5 128GB DDR5-5600', spec: '4x 32GB, CL36, AMD EXPO, On-Die ECC', price: 890 },
  { category: 'GPU', model: 'NVIDIA GeForce RTX 4080 SUPER', spec: '16GB GDDR6X, 10240 CUDA Cores, 736 GB/s bandwidth', price: 999 },
  { category: 'Boot SSD', model: 'WD Black SN850X 1TB', spec: 'NVMe Gen4, 7,300/6,600 MB/s R/W', price: 130 },
  { category: 'Data SSD', model: 'Samsung 990 PRO 2TB', spec: 'NVMe Gen4, 7,450/6,900 MB/s R/W', price: 390 },
  { category: 'Power Supply', model: 'Corsair RM850x 850W', spec: '80+ Gold, Fully Modular, ATX 3.0', price: 130 },
  { category: 'CPU Cooler', model: 'Arctic Liquid Freezer II 360', spec: '360mm AIO, 3x P12 PWM fans, integrated VRM heatsink', price: 140 },
  { category: 'Case', model: 'Fractal Design Meshify 2', spec: 'ATX Mid Tower, mesh front, 7x fan mounts, dust filters', price: 130 },
  { category: 'Network', model: 'Intel X550-T1 10GbE NIC', spec: 'Single-port 10GBASE-T, PCIe 3.0 x4', price: 55 },
  { category: 'Accessories', model: 'Cables, thermal paste, surge strip', spec: 'Cat6a cables, Noctua NT-H2 paste, APC surge protector', price: 40 },
];

const nodeReasons: Record<string, string[]> = {
  alpha: [
    'Maximum multi-threaded performance for parallel bioinformatics pipelines',
    'Workstation-grade reliability with ECC support and extensive I/O',
    '128GB essential for genome assembly and large reference databases',
    'CUDA acceleration for BLAST+, DIAMOND, and GPU-accelerated alignment tools',
    'Fast OS and software boot drive',
    'High-speed scratch space for genomic data processing',
    'Reliable power delivery with overhead for GPU compute loads',
    'Sustained cooling for prolonged multi-hour compute runs',
    'Optimized airflow for 24/7 operation in rack-adjacent deployment',
    'High-bandwidth inter-node communication for cluster workloads',
    'Essential deployment accessories',
  ],
  beta: [
    'Parallel processing for multi-sample RNA-seq and scRNA-seq pipelines',
    'Consistent platform across cluster for unified management',
    '128GB required for single-cell datasets with millions of cells',
    'GPU-accelerated scVI, CellBender, and RAPIDS single-cell analysis',
    'Fast OS and software boot drive',
    'Large scratch storage for multi-sample expression matrices',
    'Stable power for 24/7 transcriptomics pipeline runs',
    'Thermal headroom for sustained high-load analysis',
    'Identical chassis for uniform rack deployment',
    '10GbE for fast dataset transfer between nodes',
    'Essential deployment accessories',
  ],
  gamma: [
    'High clock speed for molecular dynamics simulation steps',
    'PCIe 5.0 for maximum GPU bandwidth in MD simulations',
    '128GB for large protein complexes and trajectory analysis',
    'CUDA-optimized for GROMACS, AlphaFold2, and OpenMM simulations',
    'Fast OS and application boot',
    'High-speed storage for MD trajectory files (often >100GB per run)',
    'Sustained GPU compute demands reliable power delivery',
    'Critical for multi-day simulation runs at full load',
    'Consistent platform for cluster rack deployment',
    'Fast trajectory data sharing across cluster',
    'Essential deployment accessories',
  ],
  delta: [
    'Data preprocessing and model training CPU overhead',
    'PCIe 5.0 x16 for maximum GPU-CPU data transfer',
    '128GB for large batch data loading and model checkpointing',
    'Primary training accelerator for PyTorch/TensorFlow workloads',
    'Fast OS and conda environment boot',
    'Fast dataset I/O prevents GPU starvation during training',
    'Handles sustained GPU power draw during training epochs',
    'Cooling for combined CPU+GPU heat during model training',
    'Maximum airflow for thermal-intensive ML training',
    'Distributed training and model serving across cluster',
    'Essential deployment accessories',
  ],
};

function buildNode(
  id: string, name: string, subtitle: string, description: string,
  icon: string, color: string, gradient: string, reasonKey: string
): NodeBuild {
  const reasons = nodeReasons[reasonKey];
  return {
    id, name, subtitle, description, icon, color, gradient,
    components: baseComponents.map((c, i) => ({ ...c, reason: reasons[i] })),
    importDuty: 480, shippingAssembly: 90,
    investorsNeeded: 5, investorsFunded: 0, status: 'seeking',
  };
}

const nodeBuilds: NodeBuild[] = [
  buildNode('node-alpha', 'Node Alpha', 'Genomics & Assembly',
    'Primary compute node optimized for genome assembly, sequence alignment, and large-scale genomic analyses. High core count and maximum RAM for memory-intensive bioinformatics pipelines like SPAdes, MEGAHIT, and BWA-MEM2.',
    '🧬', 'blue', 'from-blue-600 to-cyan-600', 'alpha'),
  buildNode('node-beta', 'Node Beta', 'Transcriptomics & Proteomics',
    'Dedicated to RNA-seq analysis, differential expression, single-cell transcriptomics, and proteomics pipelines. Runs DESeq2, Seurat, Scanpy, and mass spectrometry analysis tools with GPU-accelerated deep learning.',
    '⚗️', 'purple', 'from-purple-600 to-pink-600', 'beta'),
  buildNode('node-gamma', 'Node Gamma', 'Structural Biology & Drug Discovery',
    'Specialized for molecular dynamics simulations, protein structure prediction, molecular docking, and virtual screening. Runs AlphaFold2, OpenMM, GROMACS, AutoDock Vina, and DiffDock with GPU acceleration.',
    '🔬', 'green', 'from-green-600 to-emerald-600', 'gamma'),
  buildNode('node-delta', 'Node Delta', 'AI/ML & Deep Learning',
    'Machine learning and deep learning powerhouse for training neural networks, running large language models for protein design, and GPU-accelerated data science. Powers ESM-2, ProtTrans, DeepChem, and PyTorch/TensorFlow workloads.',
    '🤖', 'orange', 'from-orange-600 to-red-600', 'delta'),
];

const clusterSpecs = {
  totalCores: 128, totalThreads: 256, totalRAM: '512 GB DDR5',
  totalGPU: '64 GB GDDR6X (4x RTX 4080 SUPER)', totalCUDA: '40,960 CUDA Cores',
  totalStorage: '12 TB NVMe SSD', network: '10 Gigabit Ethernet Interconnect',
  os: 'Ubuntu 26.04 LTS Server + Slurm Scheduler',
};

const clusterSoftware = [
  { category: 'Job Scheduler', tools: ['Slurm Workload Manager', 'Environment Modules'] },
  { category: 'Genomics', tools: ['BWA-MEM2', 'STAR', 'HISAT2', 'SPAdes', 'MEGAHIT', 'SAMtools', 'BCFtools', 'GATK'] },
  { category: 'Transcriptomics', tools: ['DESeq2', 'edgeR', 'Seurat', 'Scanpy', 'scVI-tools', 'CellRanger'] },
  { category: 'Structural Biology', tools: ['AlphaFold2', 'GROMACS', 'OpenMM', 'AutoDock Vina', 'PyMOL', 'DiffDock'] },
  { category: 'Machine Learning', tools: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'RAPIDS', 'DeepChem'] },
  { category: 'Protein Language Models', tools: ['ESM-2', 'ProtTrans', 'ESMFold', 'OmegaFold'] },
  { category: 'Containers & Env', tools: ['Singularity/Apptainer', 'Conda/Mamba', 'Docker (dev only)'] },
  { category: 'Monitoring', tools: ['Grafana', 'Prometheus', 'Netdata', 'nvidia-smi'] },
];

function formatUSD(n: number) { return `$${n.toLocaleString()}`; }
function formatBDT(n: number) { return `৳${Math.round(n * EXCHANGE_RATE).toLocaleString()}`; }
function getComponentTotal(components: InfraComponent[]) { return components.reduce((s, c) => s + c.price, 0); }
function getNodeTotal(node: NodeBuild) { return getComponentTotal(node.components) + node.importDuty + node.shippingAssembly; }

const categoryIcons: Record<string, React.ReactNode> = {
  'Processor': <Cpu className="w-4 h-4" />,
  'Motherboard': <Monitor className="w-4 h-4" />,
  'Memory': <MemoryStick className="w-4 h-4" />,
  'GPU': <Zap className="w-4 h-4" />,
  'Boot SSD': <HardDrive className="w-4 h-4" />,
  'Data SSD': <HardDrive className="w-4 h-4" />,
  'Power Supply': <Zap className="w-4 h-4" />,
  'CPU Cooler': <Fan className="w-4 h-4" />,
  'Case': <Box className="w-4 h-4" />,
  'Network': <Network className="w-4 h-4" />,
  'Accessories': <Cable className="w-4 h-4" />,
};

// ─── SVG Illustrations ──────────────────────────────────────────────────────

function ServerRackSVG() {
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="30" width="280" height="440" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <rect x="70" y="40" width="260" height="420" rx="8" fill="#0f172a" />
      {[0, 1, 2, 3].map((i) => {
        const y = 55 + i * 100;
        const colors = ['#3b82f6', '#a855f7', '#10b981', '#f97316'];
        const labels = ['α', 'β', 'γ', 'δ'];
        return (
          <g key={i}>
            <rect x="82" y={y} width="236" height="80" rx="6" fill="#1e293b" stroke={colors[i]} strokeWidth="1.5">
              <animate attributeName="opacity" values="0;1" dur="0.5s" fill="freeze" begin={`${0.3 + i * 0.2}s`} />
            </rect>
            <circle cx="100" cy={y + 15} r="4" fill={colors[i]}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
            <circle cx="115" cy={y + 15} r="4" fill="#22c55e">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <circle cx="130" cy={y + 15} r="4" fill="#334155" />
            {[0, 1, 2, 3, 4, 5].map((d) => (
              <rect key={d} x={155 + d * 24} y={y + 8} width="18" height="14" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="0.5" />
            ))}
            <text x="100" y={y + 45} fill={colors[i]} fontSize="14" fontWeight="bold" fontFamily="monospace">Node {labels[i]}</text>
            <text x="100" y={y + 62} fill="#94a3b8" fontSize="10" fontFamily="monospace">32C/64T • 128GB • RTX 4080S</text>
            {[0, 1, 2].map((v) => (
              <rect key={v} x={270 + v * 14} y={y + 30} width="10" height="30" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" begin={`${v * 0.2 + i * 0.1}s`} />
              </rect>
            ))}
          </g>
        );
      })}
      <g>
        <rect x="82" y="460" width="236" height="20" rx="4" fill="#1e293b" stroke="#06b6d4" strokeWidth="1">
          <animate attributeName="opacity" values="0;1" dur="0.5s" fill="freeze" begin="1.5s" />
        </rect>
        <text x="200" y="474" fill="#06b6d4" fontSize="9" fontFamily="monospace" textAnchor="middle">10GbE SWITCH</text>
        {[0, 1, 2, 3].map((p) => (
          <circle key={p} cx={100 + p * 18} cy={470} r="3" fill="#06b6d4">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" begin={`${1.5 + p * 0.15}s`} />
          </circle>
        ))}
      </g>
    </svg>
  );
}

function ClusterDiagramSVG() {
  // Center switch box: x=325, y=120, w=150, h=60 → edges: left=325, right=475, top=120, bottom=180
  const nodes = [
    { x: 30, y: 20, color: '#3b82f6', label: 'Node α', sub: 'Genomics', lineX2: 325, lineY2: 130 },
    { x: 590, y: 20, color: '#a855f7', label: 'Node β', sub: 'Transcriptomics', lineX2: 475, lineY2: 130 },
    { x: 30, y: 200, color: '#10b981', label: 'Node γ', sub: 'Structural Bio', lineX2: 325, lineY2: 170 },
    { x: 590, y: 200, color: '#f97316', label: 'Node δ', sub: 'AI / ML', lineX2: 475, lineY2: 170 },
  ];
  return (
    <svg viewBox="0 0 800 300" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Pulse animation for data flow dots */}
        {nodes.map((node, i) => {
          const x1 = node.x < 400 ? node.x + 160 : node.x;
          const y1 = node.y + 40;
          return (
            <React.Fragment key={`anim-${i}`}>
              <animate id={`pulse-x-${i}`} attributeName="cx" values={`${x1};${node.lineX2}`} dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
              <animate id={`pulse-y-${i}`} attributeName="cy" values={`${y1};${node.lineY2}`} dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </React.Fragment>
          );
        })}
      </defs>

      {/* Connector lines — drawn BEHIND everything */}
      {nodes.map((node, i) => {
        const x1 = node.x < 400 ? node.x + 160 : node.x;
        const y1 = node.y + 40;
        return (
          <g key={`line-${i}`}>
            <line x1={x1} y1={y1} x2={node.lineX2} y2={node.lineY2} stroke={node.color} strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4" />
            {/* Animated data pulse dot */}
            <circle r="3" fill={node.color} opacity="0.8">
              <animate attributeName="cx" values={`${x1};${node.lineX2}`} dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
              <animate attributeName="cy" values={`${y1};${node.lineY2}`} dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </circle>
          </g>
        );
      })}

      {/* Center switch — on top of lines */}
      <rect x="325" y="120" width="150" height="60" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
      <text x="400" y="148" fill="#06b6d4" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">10GbE Switch</text>
      <text x="400" y="165" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">Slurm Controller</text>
      {/* Switch LED indicators */}
      {[0, 1, 2, 3].map((p) => (
        <circle key={p} cx={365 + p * 20} cy={175} r="2" fill="#06b6d4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin={`${p * 0.2}s`} />
        </circle>
      ))}

      {/* Node boxes — on top of lines */}
      {nodes.map((node, i) => (
        <g key={i}>
          <rect x={node.x} y={node.y} width="160" height="80" rx="8" fill="#1e293b" stroke={node.color} strokeWidth="2">
            <animate attributeName="opacity" values="0;1" dur="0.5s" fill="freeze" begin={`${0.2 + i * 0.15}s`} />
          </rect>
          <rect x={node.x + 10} y={node.y + 10} width="30" height="30" rx="6" fill={node.color} fillOpacity="0.2" />
          <circle cx={node.x + 25} cy={node.y + 25} r="6" fill={node.color}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
          <text x={node.x + 50} y={node.y + 30} fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace">{node.label}</text>
          <text x={node.x + 50} y={node.y + 48} fill="#94a3b8" fontSize="10" fontFamily="monospace">{node.sub}</text>
          <text x={node.x + 10} y={node.y + 68} fill="#64748b" fontSize="9" fontFamily="monospace">32C • 128GB • 3TB</text>
        </g>
      ))}

      {/* NFS storage */}
      <line x1="400" y1="180" x2="400" y2="220" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
      <rect x="350" y="220" width="100" height="50" rx="6" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
      <text x="400" y="245" fill="#eab308" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">NFS Share</text>
      <text x="400" y="260" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">Shared Data</text>
    </svg>
  );
}

// ─── NodeCard ────────────────────────────────────────────────────────────────

function NodeCard({ node }: { node: NodeBuild }) {
  const [expanded, setExpanded] = useState(false);
  const componentTotal = getComponentTotal(node.components);
  const grandTotal = getNodeTotal(node);
  const fundedPct = (node.investorsFunded / node.investorsNeeded) * 100;

  return (
    <div className={`rounded-3xl border-2 overflow-hidden transition-all duration-500 bg-slate-900 hover:shadow-2xl ${expanded ? 'border-white/20' : 'border-white/5'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left p-8 bg-gradient-to-r ${node.gradient} relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{node.icon}</span>
            <div>
              <h3 className="text-2xl font-black text-white">{node.name}</h3>
              <p className="text-white/80 text-sm font-medium">{node.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-white font-black text-xl">{formatUSD(grandTotal)}</p>
              <p className="text-white/60 text-xs">{formatBDT(grandTotal)}</p>
            </div>
            {expanded ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
          </div>
        </div>
        <div className="relative z-10 mt-6">
          <div className="flex justify-between text-xs text-white/70 mb-2">
            <span>{node.investorsFunded}/{node.investorsNeeded} investors</span>
            <span className="capitalize">{node.status}</span>
          </div>
          <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
            <div className="h-full bg-white/80 rounded-full transition-all duration-700" style={{ width: `${fundedPct}%` }} />
          </div>
        </div>
      </button>
      <div className="px-8 py-6 border-b border-white/5">
        <p className="text-slate-400 text-sm leading-relaxed">{node.description}</p>
      </div>
      <div className={`transition-all duration-500 overflow-hidden ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 py-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/5">
                <th className="text-left py-3 font-bold">Component</th>
                <th className="text-left py-3 font-bold hidden md:table-cell">Model</th>
                <th className="text-left py-3 font-bold hidden lg:table-cell">Why This Part</th>
                <th className="text-right py-3 font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              {node.components.map((comp, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 text-white font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">{categoryIcons[comp.category] || <Package className="w-4 h-4" />}</span>
                      <div>
                        <span className="block">{comp.category}</span>
                        <span className="block md:hidden text-xs text-slate-500">{comp.model}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-slate-400 hidden md:table-cell">
                    <span className="block font-medium">{comp.model}</span>
                    <span className="block text-xs text-slate-600">{comp.spec}</span>
                  </td>
                  <td className="py-3 text-slate-500 text-xs hidden lg:table-cell">{comp.reason}</td>
                  <td className="py-3 text-right text-white font-mono font-bold">{formatUSD(comp.price)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-white/10">
                <td colSpan={3} className="py-3 text-slate-400 font-bold">Components Subtotal</td>
                <td className="py-3 text-right text-white font-mono font-bold">{formatUSD(componentTotal)}</td>
              </tr>
              <tr>
                <td colSpan={3} className="py-2 text-slate-500 text-sm">Import Duty &amp; Taxes (~15%)</td>
                <td className="py-2 text-right text-slate-400 font-mono">{formatUSD(node.importDuty)}</td>
              </tr>
              <tr>
                <td colSpan={3} className="py-2 text-slate-500 text-sm">Shipping &amp; Assembly</td>
                <td className="py-2 text-right text-slate-400 font-mono">{formatUSD(node.shippingAssembly)}</td>
              </tr>
              <tr className="border-t-2 border-white/20">
                <td colSpan={3} className="py-4 text-white font-black text-lg">Grand Total</td>
                <td className="py-4 text-right text-white font-mono font-black text-lg">{formatUSD(grandTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export const BioHPCLabPage: React.FC = () => {
  const totalClusterCost = nodeBuilds.reduce((s, n) => s + getNodeTotal(n), 0);

  const whatWeOffer = [
    {
      icon: Cpu,
      title: 'High-Performance Computing',
      desc: 'Access to GPU-accelerated nodes and multi-core CPU clusters for heavy-duty biological data processing.'
    },
    {
      icon: Database,
      title: 'Secure Bio-Data Storage',
      desc: 'Encrypted, high-redundancy storage solutions for large-scale genomic sequences and clinical datasets.'
    },
    {
      icon: Terminal,
      title: 'Bioinformatics Pipelines',
      desc: 'Pre-configured software environments (Nextflow, Snakemake) for automated NGS and structural analysis.'
    },
    {
      icon: Network,
      title: 'Collaborative Environment',
      desc: 'A shared platform enabling multi-institutional research projects with seamless data sharing and version control.'
    }
  ];

  const scientificMission = [
    {
      icon: Activity,
      title: 'Pathogen Surveillance',
      desc: 'Real-time variant identification and genomic tracking of infectious diseases to safeguard public health.'
    },
    {
      icon: Users,
      title: 'Single-Cell Genomics',
      desc: 'Analyzing cellular heterogeneity at unprecedented resolution to understand complex biological systems.'
    },
    {
      icon: Brain,
      title: 'Neurogenomics',
      desc: 'Deciphering the genetic basis of neurological disorders through high-throughput neural data processing.'
    },
    {
      icon: Microscope,
      title: 'Cancer Genomics',
      desc: 'Identifying driver mutations and therapeutic targets to enable personalized oncology and precision medicine.'
    },
    {
      icon: FlaskConical,
      title: 'Drug Discovery & Design',
      desc: 'Accelerating the R&D cycle through molecular docking, virtual screening, and protein-ligand simulations.'
    },
    {
      icon: Sprout,
      title: 'Agricultural Genomics',
      desc: 'Optimizing crop resilience and yield through genomic selection and plant-pathogen interaction studies.'
    },
    {
      icon: ShieldCheck,
      title: 'Metagenomics & AMR',
      desc: 'Characterizing microbial communities and tracking Antimicrobial Resistance (AMR) across diverse environments.'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      desc: 'Deploying custom Deep Learning architectures to automate complex biological pattern recognition.'
    }
  ];

  const softwareStack = [
    {
      category: "Quantum Chemistry",
      icon: Atom,
      tools: [
        { name: "Gaussian", desc: "Electronic structure modeling and molecular property prediction." },
        { name: "ORCA", desc: "High-performance quantum mechanical calculations for large molecules." },
        { name: "Q-Chem / GAMESS", desc: "Comprehensive packages for ab-initio quantum chemistry." },
        { name: "WebMO / Gabedit", desc: "GUIs for managing quantum workflows." }
      ]
    },
    {
      category: "Molecular Docking & Design",
      icon: Link2,
      tools: [
        { name: "AutoDock Vina", desc: "Virtual screening and lead optimization." },
        { name: "Discovery Studio", desc: "Comprehensive life science modeling environment." },
        { name: "LigPlot+", desc: "2D protein-ligand interaction visualization." }
      ]
    },
    {
      category: "Molecular Dynamics & Viz",
      icon: Move,
      tools: [
        { name: "GROMACS / NAMD", desc: "High-speed MD simulations." },
        { name: "PyMOL", desc: "Industry-standard 3D visualization." },
        { name: "VMD", desc: "Trajectory visualization and analysis." }
      ]
    },
    {
      category: "Advanced Analytics",
      icon: Brain,
      tools: [
        { name: "Deep Learning", desc: "Custom neural networks for predictive modeling." },
        { name: "Single-Cell Analysis", desc: "High-dimensional multi-omic integration." },
        { name: "Pipeline Automation", desc: "Nextflow and Snakemake protocols." }
      ]
    }
  ];

  const marketGaps = [
    {
      title: "Cost Inefficiency",
      desc: "Regional researchers currently pay 300% more for cloud compute compared to global averages due to high latency and lack of localized specialized clusters.",
      impact: "High OPEX"
    },
    {
      title: "Data Biosecurity",
      desc: "Sensitive genomic IP is processed on foreign servers, creating significant national security and data sovereignty vulnerabilities.",
      impact: "Strategic Risk"
    },
    {
      title: "Technical Bottlenecks",
      desc: "Critical research is delayed by weeks due to insufficient local CPU/GPU availability, leading to massive scientific opportunity costs.",
      impact: "Slower R&D"
    }
  ];

  const investorStats = [
    { label: "Cost Arbitrage", value: "3.5x", desc: "Lower operational cost vs global public cloud" },
    { label: "Market Growth", value: "24%", desc: "Annual increase in regional bioinformatics demand" },
    { label: "Break-even", value: "18mo", desc: "Projected time to reach node profitability" },
    { label: "Asset Value", value: "5x", desc: "Target LTV/CAC ratio for infrastructure services" }
  ];

  const investmentTiers = [
    {
      name: 'Single Share',
      price: MIN_INVESTMENT_USD,
      priceBDT: '~100,000 BDT',
      description: '1/5th ownership of one compute node',
      features: [
        'Named acknowledgment on node',
        'Priority compute time allocation',
        'Quarterly utilization reports',
        'Tax-deductible research contribution',
      ],
      highlight: false,
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: 'Full Node Sponsor',
      price: getNodeTotal(nodeBuilds[0]),
      priceBDT: '~500,000 BDT',
      description: 'Complete ownership of one compute node',
      features: [
        'Node named after sponsor/organization',
        'Dedicated compute time window',
        'Co-authorship eligibility on publications',
        'Logo on BioHPC Lab page',
        'Annual impact report',
      ],
      highlight: true,
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: 'Full Cluster Patron',
      price: totalClusterCost,
      priceBDT: '~2,000,000 BDT',
      description: 'Sponsor the entire 4-node cluster',
      features: [
        'Cluster named after patron',
        'Founding patron recognition',
        'Permanent acknowledgment in all publications',
        'Advisory board membership',
        'Direct research collaboration access',
      ],
      highlight: false,
      icon: <Crown className="w-6 h-6" />,
    },
  ];

  return (
    <div className="pt-0 min-h-screen bg-white">

      {/* ==========================================
          PART 1: THE LAB (Scientific Identity)
      ========================================== */}

      {/* Lab Hero */}
      <section className="relative py-32 lg:py-48 overflow-hidden bg-brand-dark">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url('/images/biohpc/hpc01.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          {/* Dynamic Blurred Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full opacity-50"></div>
          <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-brand-secondary/10 blur-[100px] rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-brand-primary/10 blur-[100px] rounded-full"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>

          {/* Animated Particles (CSS only simulation) */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-brand-primary rounded-full animate-pulse delay-700 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-xl mb-12 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative">
              <Cpu className="w-4 h-4 text-brand-primary animate-pulse" />
              <div className="absolute inset-0 bg-brand-primary/20 blur-md rounded-full"></div>
            </div>
            Advanced HPC Infrastructure
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <span className="block mb-2">BioHPC</span>
            <span className="brand-text-gradient bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">Laboratory</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-14 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            Powering the next generation of genomic discovery through <span className="text-white">massive computational scale</span> and specialized biological intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
            <a
              href="#what-we-do"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-2xl font-black transition-all shadow-[0_20px_40px_rgba(32,94,146,0.4)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span>Explore Lab Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#infrastructure"
              className="inline-flex items-center gap-4 px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black hover:bg-white/10 transition-all hover:-translate-y-2 shadow-xl"
            >
              <Database className="w-5 h-5 text-brand-secondary" />
              Infrastructure Assets
            </a>
          </div>

          {/* Floating Metrics Badge */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12 animate-in fade-in duration-1000 delay-800">
            {[
              { label: "Processing Power", value: "2.5 PFLOPS" },
              { label: "Data Throughput", value: "400 GB/s" },
              { label: "Storage Capacity", value: "5 PB" },
              { label: "Network Latency", value: "< 1.2ms" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do (Mission) */}
      <section id="what-we-do" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Scientific Mission
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">What We Do</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Bridging the technical gap between biological questions and computational answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scientificMission.map((mission, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all">
                  <mission.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{mission.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{mission.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer (Services/Infrastructure) */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              Our Infrastructure
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">What We Offer</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Enterprise-grade resources accessible through a simplified scientific interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOffer.map((offer, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-brand-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all">
                  <offer.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computational Technology Stack */}
      <section id="tech-stack" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              The Engine Room
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">Computational Stack</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Leveraging industry-standard scientific software and custom deep learning architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {softwareStack.map((category, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-brand-primary/20 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{category.category}</h3>
                </div>

                <div className="grid gap-6">
                  {category.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="relative pl-6 border-l-2 border-slate-200 group-hover:border-brand-primary/30 transition-colors">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{tool.name}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PART 2: INVESTOR PORTAL (Business Focus)
      ========================================== */}

      {/* Transition / Separator */}
      <section id="investor-portal" className="py-24 bg-brand-dark overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[11px] font-black uppercase tracking-[0.5em] mb-12">
            Strategic Investment Portal
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8">
            Investing in <br /> <span className="brand-text-gradient">The Infrastructure Moat</span>
          </h2>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            BioHPC is not just a lab; it is an infrastructure play in an emerging $20B biotech market. We are building the critical &ldquo;Layer 1&rdquo; for biological data processing.
          </p>
        </div>
      </section>

      {/* Market Gap Assessment (The Problem) */}
      <section id="opportunity" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-6">
              Gap Assessment
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">The Problem We Solve</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Identifying the critical inefficiencies in the current regional research ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {marketGaps.map((gap, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-brand-primary/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  Impact: {gap.impact}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{gap.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{gap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Business Case (Profit & Arbitrage) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              {investorStats.map((stat, idx) => (
                <div key={idx} className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl hover:scale-[1.03] transition-all border border-white/5">
                  <div className="text-5xl font-black text-brand-secondary mb-4">{stat.value}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</div>
                  <p className="text-[10px] text-slate-300 leading-relaxed uppercase font-bold">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-8">
                Economic Arbitrage
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">The Profit Potential</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Researchers in emerging markets currently pay a <span className="text-brand-primary font-bold">300% premium</span> for international cloud resources. By localizing compute, we capture this expenditure as internal margin while owning the physical &ldquo;Data Moat.&rdquo;
              </p>
              <div className="grid gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-primary">
                  <h4 className="font-bold text-slate-900 mb-1">Sustainable Revenue</h4>
                  <p className="text-sm text-slate-600">A mix of Compute-as-a-Service (CaaS) subscriptions and long-term Enterprise R&D contracts.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-secondary">
                  <h4 className="font-bold text-slate-900 mb-1">Asset Value Growth</h4>
                  <p className="text-sm text-slate-600">Every node added increases the cumulative dataset and &ldquo;gravity&rdquo; of our bioinformatics ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PART 3: INFRASTRUCTURE ASSETS (Dark Zone)
      ========================================== */}

      <div id="infrastructure" className="bg-slate-950 text-white">

        {/* Infrastructure Hero with Server Rack SVG */}
        <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/15 blur-[120px] rounded-full opacity-50" />
            <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <Server className="w-4 h-4 text-brand-primary animate-pulse" />
                  Infrastructure Assets
                </div>
                <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  BioHPC<br />
                  <span className="brand-text-gradient bg-clip-text text-transparent">Cluster Build</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                  Full hardware specifications, component-level pricing, and investment opportunities for our 4-node high-performance bioinformatics cluster.
                </p>
                <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                  <a href="#nodes" className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-xl font-bold transition-all hover:-translate-y-1 shadow-xl">
                    View Node Specs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#investment" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1">
                    <DollarSign className="w-4 h-4 text-brand-secondary" />
                    Investment Model
                  </a>
                </div>
              </div>
              <div className="hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-300">
                <div className="max-w-sm mx-auto">
                  <ServerRackSVG />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster Architecture Diagram */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Cluster Architecture</h2>
              <p className="text-slate-500 text-sm">4 specialized nodes connected via 10GbE switch with Slurm job scheduler</p>
            </div>
            <div className="bg-slate-900 rounded-3xl border border-white/5 p-8">
              <ClusterDiagramSVG />
            </div>
          </div>
        </section>

        {/* Combined Cluster Specifications */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Combined Cluster Specifications</h2>
              <p className="text-slate-500 text-sm">Aggregate compute power across all 4 nodes</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'CPU Cores', value: clusterSpecs.totalCores.toString(), sub: `${clusterSpecs.totalThreads} Threads` },
                { label: 'System RAM', value: clusterSpecs.totalRAM, sub: 'DDR5-5600 ECC' },
                { label: 'GPU Memory', value: '64 GB GDDR6X', sub: clusterSpecs.totalCUDA },
                { label: 'NVMe Storage', value: clusterSpecs.totalStorage, sub: 'Gen4 SSDs' },
                { label: 'Network', value: '10 GbE', sub: 'Inter-node Interconnect' },
                { label: 'OS', value: 'Ubuntu 26.04', sub: 'LTS Server' },
                { label: 'Scheduler', value: 'Slurm', sub: 'Workload Manager' },
                { label: 'Total Nodes', value: TOTAL_UNITS.toString(), sub: 'Specialized Roles' },
              ].map((spec, i) => (
                <div key={i} className="bg-slate-900 rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{spec.label}</p>
                  <p className="text-2xl font-black text-white mb-1">{spec.value}</p>
                  <p className="text-xs text-slate-500">{spec.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-installed Software Stack */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Pre-installed Software Stack</h2>
              <p className="text-slate-500 text-sm">Production-ready tools across all nodes</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clusterSoftware.map((cat, i) => (
                <div key={i} className="bg-slate-900 rounded-2xl border border-white/5 p-6 hover:border-brand-primary/20 transition-colors">
                  <h4 className="text-sm font-black text-white mb-4">{cat.category}</h4>
                  <div className="space-y-2">
                    {cat.tools.map((tool, j) => (
                      <p key={j} className="text-xs text-slate-400 font-mono">{tool}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Node Build Specifications */}
        <section id="nodes" className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Node Build Specifications</h2>
              <p className="text-slate-500 text-sm">Click any node to expand full component breakdown</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {nodeBuilds.map((node) => (
                <NodeCard key={node.id} node={node} />
              ))}
            </div>

            {/* Cluster total summary */}
            <div className="mt-12 bg-gradient-to-r from-brand-primary/20 to-purple-500/20 rounded-3xl border border-white/10 p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white">Full Cluster Total</h3>
                  <p className="text-slate-400 text-sm">{TOTAL_UNITS} nodes × {formatUSD(getNodeTotal(nodeBuilds[0]))} per node</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-white">{formatUSD(totalClusterCost)}</p>
                  <p className="text-slate-400 text-sm">{formatBDT(totalClusterCost)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Model */}
        <section id="investment" className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Investment Model</h2>
              <p className="text-slate-500 text-sm">Fractional ownership tiers for compute infrastructure</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {investmentTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-3xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 ${
                    tier.highlight
                      ? 'border-brand-primary bg-brand-primary/5 shadow-xl shadow-brand-primary/10'
                      : 'border-white/5 bg-slate-900 hover:border-white/10'
                  }`}
                >
                  {tier.highlight && (
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-primary text-white text-[10px] font-black uppercase tracking-wider mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.highlight ? 'bg-brand-primary text-white' : 'bg-white/5 text-slate-400'}`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-xl font-black text-white">{tier.name}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-black text-white">{formatUSD(tier.price)}</p>
                    <p className="text-slate-500 text-xs">{tier.priceBDT}</p>
                  </div>
                  <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:contact@deepbio.org?subject=BioHPC%20Lab%20Investment%20Inquiry%20-%20${encodeURIComponent(tier.name)}`}
                    className={`mt-8 block text-center px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      tier.highlight
                        ? 'bg-brand-primary text-white hover:bg-[#1a4b75]'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <Mail className="w-4 h-4 inline mr-2" />
                    Inquire
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Sources & Methodology */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-slate-900 rounded-2xl border border-white/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-black text-white">Price Sources &amp; Methodology</h3>
              </div>
              <div className="space-y-4 text-sm text-slate-400">
                <p><strong className="text-slate-300">Component Prices:</strong> Sourced from Amazon, Newegg, and Micro Center (June 2026 USD). Reflects current market conditions including DDR5 price increases due to AI-driven demand.</p>
                <p><strong className="text-slate-300">Exchange Rate:</strong> 1 USD = {EXCHANGE_RATE} BDT (xe.com, June 10, 2026)</p>
                <p><strong className="text-slate-300">Import Duty:</strong> Estimated 15% on electronics components per Bangladesh Customs regulations. Actual may vary.</p>
                <p className="text-xs text-slate-600 pt-2 border-t border-white/5">
                  Note: Prices fluctuate weekly. Final procurement costs may differ ±5–10%. All prices verified against multiple retailers.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FINAL INVESTOR CTA - Institutional Enterprise Redesign */}
      <section className="relative py-40 bg-[#0A0F1C] text-white overflow-hidden border-t border-white/5">
        {/* Subtle Architectural Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#205E9215_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            {/* Content Side */}
            <div className="lg:w-3/5 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-brand-primary"></div>
                <span className="text-brand-secondary text-sm font-black uppercase tracking-[0.4em]">Strategic Participation</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Confidential <br />
                <span className="text-brand-primary">Investment Memorandum</span>
              </h2>

              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
                Join DeepBio Limited in establishing the region&apos;s most critical computational moat. Secure a strategic position in the backbone of biological discovery.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:invest@deepbioltd.com?subject=Inquiry: Confidential Investment Memorandum (BioHPC)"
                  className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-brand-primary hover:bg-[#1a4b75] text-white rounded-xl font-bold transition-all shadow-xl hover:-translate-y-1 text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span>Request Memorandum</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#opportunity"
                  className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all hover:-translate-y-1 text-lg"
                >
                  <PieChart className="w-5 h-5 text-brand-secondary" />
                  Technical Deck
                </a>
              </div>
            </div>

            {/* Security/Metrics Card */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 lg:p-12 relative shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-primary/10 blur-2xl rounded-full"></div>

                <div className="space-y-10">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Asset-Backed Venture</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Investment is secured against high-end physical HPC hardware assets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                      <BarChart3 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Quarterly Dividends</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Profit distribution based on CaaS utilization and R&D margins.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                      <Building2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Institutional Governance</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Fully managed ecosystem at the CHIRAL technical hub.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                    <span>Availability</span>
                    <span className="text-brand-secondary">Limited Round</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
