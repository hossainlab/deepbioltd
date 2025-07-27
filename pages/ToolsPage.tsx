
import React, { memo } from 'react';
import PageHero from '../components/common/PageHero.tsx';
import SectionTitle from '../components/common/SectionTitle.tsx';

const ToolCard: React.FC<{ name: string; description: string; logoUrl: string }> = memo(({ name, description, logoUrl }) => (
    <div className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
        <img src={logoUrl} alt={`${name} logo`} className="w-16 h-16 object-contain flex-shrink-0 bg-white rounded-md p-1" loading="lazy" />
        <div>
            <h4 className="font-bold font-heading text-lg text-primary">{name}</h4>
            <p className="text-sm text-light-text">{description}</p>
        </div>
    </div>
));

const languagesAndLibraries = [
    { name: "Python", description: "The leading language for scientific computing, with libraries like NumPy, Pandas, and Scikit-learn.", logoUrl: "https://placehold.co/100x100/F9FAFB/3776AB?text=Py" },
    { name: "R", description: "A powerful statistical programming language, home to the Bioconductor project for bioinformatics.", logoUrl: "https://placehold.co/100x100/F9FAFB/276DC3?text=R" },
    { name: "Biopython", description: "A fundamental package for working with biological sequence data in Python.", logoUrl: "https://placehold.co/100x100/F9FAFB/8BC34A?text=BioPy" },
    { name: "Bioconductor", description: "A massive open-source project providing tools for the analysis of high-throughput genomic data in R.", logoUrl: "https://placehold.co/100x100/F9FAFB/87B1D6?text=BioC" },
    { name: "Bash/Shell", description: "Essential for automating pipelines, managing data, and interacting with high-performance computing clusters.", logoUrl: "https://placehold.co/100x100/F9FAFB/4EAA25?text=Bash" }
];

const molecularModelingTools = [
    { name: "GROMACS", description: "A versatile package for performing molecular dynamics, i.e. simulating the Newtonian equations of motion for systems with hundreds to millions of particles.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=GMX" },
    { name: "AMBER", description: "A suite of biomolecular simulation programs, including force fields for proteins, nucleic acids, and small molecules.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=AMBER" },
    { name: "NAMD", description: "A parallel molecular dynamics code designed for high-performance simulation of large biomolecular systems.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=NAMD" },
    { name: "AutoDock Vina", description: "One of the most widely used open-source programs for molecular docking and virtual screening.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=Vina" },
    { name: "Schrödinger Suite", description: "A comprehensive commercial software suite for drug discovery, including tools like Glide for docking.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=Schr" },
    { name: "PyMOL", description: "A powerful and popular molecular visualization system on an open-source foundation, maintained by Schrödinger.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=PyMOL" },
    { name: "VMD", description: "Visual Molecular Dynamics, a molecular visualization program for displaying, animating, and analyzing large biomolecular systems.", logoUrl: "https://placehold.co/100x100/205E92/FFFFFF?text=VMD" }
];

const genomicsTools = [
    { name: "GATK", description: "The industry-standard toolkit for variant discovery in high-throughput sequencing data.", logoUrl: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=GATK" },
    { name: "Samtools/BCFtools", description: "A suite of utilities for interacting with and processing high-throughput sequencing data formats.", logoUrl: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=Sam" },
    { name: "BWA/Bowtie2", description: "Fast and accurate algorithms for aligning sequencing reads to a reference genome.", logoUrl: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=BWA" },
    { name: "DESeq2/edgeR", description: "Leading R packages for robust differential gene expression analysis from RNA-seq data.", logoUrl: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=DE" },
    { name: "Seurat/Scanpy", description: "Powerful toolkits in R and Python for the analysis of single-cell RNA-sequencing data.", logoUrl: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=scRNA" },
    { name: "AlphaFold", description: "A revolutionary AI system by DeepMind for predicting protein 3D structures from their amino acid sequence.", logoUrl: "https://placehold.co/100x100/4DB8FF/FFFFFF?text=AF2" }
];

const cheminformaticsTools = [
    { name: "RDKit", description: "An open-source cheminformatics software toolkit written in C++ and Python.", logoUrl: "https://placehold.co/100x100/F59E0B/FFFFFF?text=RDKit" },
    { name: "OpenBabel", description: "A chemical toolbox designed to speak the many languages of chemical data.", logoUrl: "https://placehold.co/100x100/F59E0B/FFFFFF?text=Babel" },
    { name: "Nextflow", description: "A reactive workflow framework that enables scalable and reproducible scientific workflows.", logoUrl: "https://placehold.co/100x100/F59E0B/FFFFFF?text=Nextflow" },
    { name: "Docker", description: "A platform for developing, shipping, and running applications in containers, ensuring reproducibility.", logoUrl: "https://placehold.co/100x100/F59E0B/FFFFFF?text=Docker" }
];

const ToolsPage: React.FC = () => {
    return (
        <div className="font-sans">
            <SectionTitle title="Bioinformatics Tools & Technologies" subtitle="The powerful software, packages, and languages we use to drive scientific discovery." />
            <section className="py-10 px-8">
                <div className="max-w-7xl mx-auto space-y-16">
                    
                    <section>
                        <SectionTitle title="Programming Languages & Core Libraries" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {languagesAndLibraries.map(tool => <ToolCard key={tool.name} {...tool} />)}
                        </div>
                    </section>
                    
                    <section>
                        <SectionTitle title="Molecular Modeling & Simulation" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {molecularModelingTools.map(tool => <ToolCard key={tool.name} {...tool} />)}
                        </div>
                    </section>
                    
                    <section>
                        <SectionTitle title="Genomics & Transcriptomics" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {genomicsTools.map(tool => <ToolCard key={tool.name} {...tool} />)}
                        </div>
                    </section>

                    <section>
                        <SectionTitle title="Cheminformatics & Workflow Management" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cheminformaticsTools.map(tool => <ToolCard key={tool.name} {...tool} />)}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default ToolsPage;