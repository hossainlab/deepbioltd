
import React, { memo } from 'react';
import SectionTitle from '../components/common/SectionTitle.tsx';
import { CheckCircleIcon } from '../components/icons/Icons.tsx';

const WorkflowStep: React.FC<{ title: string; description: string; isLast?: boolean }> = memo(({ title, description, isLast = false }) => (
    <div className="flex items-start">
        <div className="flex flex-col items-center mr-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md">
                <CheckCircleIcon size={28} />
            </div>
            {!isLast && <div className="w-0.5 h-24 bg-gray-300 mt-2"></div>}
        </div>
        <div className="bg-light-gray p-6 rounded-lg shadow-sm flex-grow">
            <h4 className="font-bold font-heading text-xl text-primary">{title}</h4>
            <p className="text-light-text mt-1">{description}</p>
        </div>
    </div>
));

const WorkflowSection: React.FC<{ title: string; children: React.ReactNode }> = memo(({ title, children }) => (
    <section className="mb-16">
        <h3 className="text-3xl font-bold font-heading mb-8 text-dark-text text-center">{title}</h3>
        <div className="max-w-3xl mx-auto">
            {children}
        </div>
    </section>
));


const WorkflowsPage: React.FC = () => {
    return (
        <div className="font-sans">
            <SectionTitle
                title="Bioinformatics Workflows & Pipelines"
                subtitle="Our comprehensive suite of automated workflows and pipelines designed to streamline your research from raw data to actionable insights."
            />
            <section className="py-10 px-8">
                <div className="max-w-7xl mx-auto">


                    <WorkflowSection title="NGS Data Analysis Pipeline">
                        <WorkflowStep
                            title="1. Raw Data Quality Control"
                            description="Initial assessment of raw sequencing reads using tools like FastQC to check for quality scores, GC content, and adapter contamination."
                        />
                        <WorkflowStep
                            title="2. Pre-processing & Cleaning"
                            description="Trimming adapters and low-quality bases from reads to ensure clean data for downstream analysis."
                        />
                        <WorkflowStep
                            title="3. Alignment to Reference"
                            description="Mapping the cleaned reads to a reference genome or transcriptome using state-of-the-art aligners like BWA or STAR."
                        />
                        <WorkflowStep
                            title="4. Post-Alignment QC"
                            description="Assessing alignment quality, duplication rates, and coverage to ensure the reliability of the data."
                        />
                         <WorkflowStep
                            title="5. Downstream Application"
                            description="Executing application-specific analyses such as variant calling (GATK), differential expression (DESeq2), or peak calling (MACS2)."
                            isLast
                        />
                    </WorkflowSection>
                    
                    <WorkflowSection title="Bulk RNA-Seq Analysis Pipeline">
                        <WorkflowStep
                            title="1. QC & Pre-processing"
                            description="Rigorous quality control of raw reads, followed by adapter and quality trimming to ensure data integrity."
                        />
                        <WorkflowStep
                            title="2. Alignment & Quantification"
                            description="Aligning reads to the reference transcriptome and quantifying expression levels to generate a gene count matrix."
                        />
                        <WorkflowStep
                            title="3. Differential Expression Analysis"
                            description="Using statistical packages like DESeq2 or edgeR to identify genes that are significantly up- or down-regulated between conditions."
                        />
                        <WorkflowStep
                            title="4. Functional Enrichment Analysis"
                            description="Interpreting the list of differentially expressed genes by identifying enriched biological pathways, such as GO terms and KEGG pathways."
                            isLast
                        />
                    </WorkflowSection>

                    <WorkflowSection title="Single-Cell RNA-Seq Analysis Pipeline">
                        <WorkflowStep
                            title="1. Raw Data Processing"
                            description="Processing raw data from platforms like 10x Genomics (using Cell Ranger) to generate a cell-by-gene count matrix."
                        />
                        <WorkflowStep
                            title="2. Filtering & Normalization"
                            description="Removing low-quality cells and mitochondrial contamination, followed by normalization to account for differences in library size."
                        />
                        <WorkflowStep
                            title="3. Clustering & Visualization"
                            description="Performing dimensionality reduction (PCA) and unsupervised clustering to group cells, visualized using UMAP or t-SNE plots."
                        />
                        <WorkflowStep
                            title="4. Cell Type Annotation"
                            description="Identifying marker genes for each cluster and annotating them with known cell types to understand tissue composition."
                        />
                         <WorkflowStep
                            title="5. Trajectory & Interaction Analysis"
                            description="Modeling dynamic processes like cell differentiation (trajectory inference) and predicting cell-cell communication networks."
                            isLast
                        />
                    </WorkflowSection>
                    
                    <WorkflowSection title="Metagenomics Analysis Pipeline">
                        <WorkflowStep
                            title="1. QC & Host Read Removal"
                            description="Assessing raw read quality and filtering out any contaminating DNA sequences from the host organism."
                        />
                        <WorkflowStep
                            title="2. Taxonomic Profiling"
                            description="Identifying the microbial species present ('who is there?') and their relative abundances using tools like Kraken2 or MetaPhlAn."
                        />
                        <WorkflowStep
                            title="3. Functional Profiling"
                            description="Determining the functional potential of the microbial community ('what can they do?') by annotating genes with functions."
                        />
                        <WorkflowStep
                            title="4. Statistical & Diversity Analysis"
                            description="Comparing microbial composition across sample groups, including alpha (within-sample) and beta (between-sample) diversity."
                            isLast
                        />
                    </WorkflowSection>

                    <WorkflowSection title="Drug Discovery & Virtual Screening">
                        <WorkflowStep
                            title="1. Target & Pocket Identification"
                            description="Identifying the protein target and a suitable binding site for docking, often involving structural analysis and literature review."
                        />
                        <WorkflowStep
                            title="2. Library Preparation"
                            description="Preparing and filtering a large library of small molecules (e.g., from ZINC or ChEMBL) for screening, ensuring drug-like properties."
                        />
                        <WorkflowStep
                            title="3. High-Throughput Docking"
                            description="Computationally docking each compound into the target's binding site to predict binding poses and affinities using tools like AutoDock Vina."
                        />
                        <WorkflowStep
                            title="4. Hit Post-Processing & Filtering"
                            description="Applying filters based on docking scores, molecular properties (ADMET), and visual inspection to narrow down the list of potential hits."
                        />
                        <WorkflowStep
                            title="5. Hit Prioritization"
                            description="Ranking the final hit list and selecting a diverse set of promising compounds for experimental validation."
                            isLast
                        />
                    </WorkflowSection>
                </div>
            </section>
        </div>
    );
};

export default WorkflowsPage;